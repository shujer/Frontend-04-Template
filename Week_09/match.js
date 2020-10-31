//不处理复合选择器的情况
function match(selector, element) {
  const selectors = selector.split(" ").filter((sl) => !!sl);
  const regex = /(^[\w]+)|(#[\w]+)|(\.[\w]+)|(^\*)|(\[\w+(~|\||\^|\$|\*)?=?\w*\])/g;
  let ele = element;

  if (!check(ele, selectors[selectors.length - 1])) {
    return false;
  }

  for (let i = selectors.length - 2; i >= 0; i--) {
    let parent = ele.parentNode;
    let count = 0;
    while (
      parent &&
      parent.tagName !== "BODY" &&
      !check(parent, selectors[i])
    ) {
      parent = parent.parentNode;
      count++;
    }
    if (!parent || parent.tagName === "BODY") {
      return false;
    }
    ele = parent;
  }

  function check(ele, sel) {
    let matchs = [...sel.matchAll(regex)];
    if (!matchs || !matchs.length) {
      return false;
    }
    for (let mat of matchs) {
      if (mat[1]) {
        if (ele.tagName.toLowerCase() !== mat[1]) {
          return false;
        }
      } else if (mat[2]) {
        if (ele.id !== mat[2].slice(1)) {
          return false;
        }
      } else if (mat[3]) {
        if (![...ele.classList].includes(mat[3].slice(1))) {
          return false;
        }
      } else if (mat[5]) {
        let [key, value] = mat[5].slice(1, -1).split("=");
        if (!key) {
          return false;
        }
        let type = key[key.length - 1];
        if (["~", "|", "^", "$", "*"].includes(type)) {
          key = key.slice(0, -1);
          if (!ele.hasAttribute(key)) {
            return false;
          }
          if (value) {
            let values = ele.getAttribute(key);
            if (type === "~") {
              if (!values.split(" ").includes(value)) {
                return false;
              }
            } else if (type === "^") {
              if (values.indexOf(value) !== 0) {
                return false;
              }
            } else if (type === "*") {
              if (values.indexOf(value) < 0) {
                return false;
              }
            } else if (type === "$") {
              if (values.lastIndexOf(value) + value.length !== values.length) {
                return false;
              }
            }
          }
        } else {
          if (!ele.hasAttribute(key)) {
            return false;
          }
          if (value && ele.getAttribute(key) !== value) {
            return false;
          }
        }
      }
    }
    return true;
  }

  return true;
}
console.log(
  match(
    ".container .class[title|=test] span i.icon",
    document.getElementById("icon")
  )
);
