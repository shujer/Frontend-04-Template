const regex = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g;
const dictionary = [
  "Number",
  "Whitespace",
  "LineTerminator",
  "*",
  "/",
  "+",
  "-",
];

function* tokenize(source) {
  let result = null;
  let lastIndex = 0;
  while (true) {
    lastIndex = regex.lastIndex;
    result = regex.exec(source);
    if (!result) break;
    if (regex.lastIndex - lastIndex > result[0].length) break;
    let token = {
      type: null,
      value: null,
    };
    for (let i = 1; i < result.length; i++) {
      if (result[i]) {
        token.type = dictionary[i - 1];
      }
    }
    token.value = result[0];
    yield token;
  }
  yield {
    type: "EOF",
  };
}

let source = [];

for (let token of tokenize("1024 + 10 * 12")) {
  if (token.type !== "Whitespace" && token.type !== "LineTerminator")
    source.push(token);
}

function Expression(source) {
  if (
    source[0].type === "AdditiveExpression" &&
    source[1] &&
    source[1].type === "EOF"
  ) {
    let node = {
      type: "Expression",
      children: [source.shift(), source.shift()],
    };
    source.unshift(node);
    return node;
  }
  AdditiveExpression(source);
  return Expression(source);
}

function AdditiveExpression(source) {
  if (source[0].type === "MultiplicativeExpression") {
    let node = {
      type: "AdditiveExpression",
      children: [source[0]],
    };
    source[0] = node;
    return AdditiveExpression(source);
  }
  if (source[0].type === "AdditiveExpression" && source[1]) {
    if (source[1].type === "+" || source[1].type === "-") {
      let node = {
        type: "AdditiveExpression",
        operator: source[1].type,
        children: [],
      };
      node.children.push(source.shift());
      node.children.push(source.shift());
      MultiplicativeExpression(source);
      node.children.push(source.shift());
      source.unshift(node);
      return AdditiveExpression(source);
    }
  }
  if (source[0].type === "AdditiveExpression") return source[0];
  MultiplicativeExpression(source);
  return AdditiveExpression(source);
}

function MultiplicativeExpression(source) {
  if (source[0].type === "Number") {
    let node = {
      type: "MultiplicativeExpression",
      children: [source[0]],
    };
    source[0] = node;
    return MultiplicativeExpression(source);
  }
  if (
    source[0].type === "MultiplicativeExpression" &&
    source[1] &&
    source[1].type === "*"
  ) {
    if (source[1].type === "*" || source[1].type === "/") {
      let node = {
        type: "MultiplicativeExpression",
        operator: source[1].type,
        children: [],
      };
      node.children.push(source.shift());
      node.children.push(source.shift());
      node.children.push(source.shift());
      source.unshift(node);
      return MultiplicativeExpression(source);
    }
  }

  if (source[0].type === "MultiplicativeExpression") return source[0];
  return MultiplicativeExpression(source);
}

let result = Expression(source);
console.log(result);
