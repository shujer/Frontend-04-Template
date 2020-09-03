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

for (let token of tokenize("1024 + 10*25")) {
  console.log(token);
}
