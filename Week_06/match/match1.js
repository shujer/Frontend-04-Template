// practice 1
function findA(str) {
  let positions = [];
  let regex = /a/g;
  let lastIndex = str.length;
  while (lastIndex) {
    let match = regex.exec(str);
    if (match) {
      positions.push(match.index);
    }
    lastIndex = regex.lastIndex;
  }
  return positions;
}

// practice 2
function findAB(str) {
  let len = str.length,
    i = 0;
  let positions = [];
  while (i < len - 1) {
    if (str.slice(i, i + 2) === "ab") {
      positions.push(i);
      i += 2;
    } else {
      i++;
    }
  }
  return positions;
}

// practice 3
function findABCDEF(str) {
  let len = str.length,
    i = 0;
  let positions = [];
  while (i < len - 1) {
    if (str.slice(i, i + 6) === "abcdef") {
      positions.push(i);
      i += 6;
    } else {
      i++;
    }
  }
  return positions;
}

// 不使用状态机处理字符串（1）
function match(str) {
  for (let c of str) {
    if (c === "a") {
      return true;
    }
  }
  return false;
}
match("I am groot");

// 不使用状态机处理字符串（2）
function match(str) {
  let foundA = false;
  for (let c of str) {
    if (c === "a") {
      foundA = true;
    } else if (foundA && c === "b") {
      return true;
    } else {
      foundA = false;
    }
  }
  return false;
}

// 不使用状态机处理字符串（3）
function match(str) {
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  for (let c of str) {
    if (c === "a") {
      foundA = true;
    } else if (foundA && c === "b") {
      foundB = true;
    } else if (foundB && c === "c") {
      foundC = true;
    } else if (foundC && c === "d") {
      foundD = true;
    } else if (foundD && c === "e") {
      foundE = true;
    } else if (foundE && c === "f") {
      return true;
    } else {
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}
