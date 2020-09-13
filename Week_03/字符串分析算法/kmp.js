function kmp(source, pattern) {
  let table = Array(pattern.length).fill(0);
  // 计算跳转表/前缀表
  {
    let j = 0,
      i = 1;
    // i = len - 2 的时候，已经计算到 len -1 不必继续循环
    while (i < pattern.length - 1) {
      if (pattern[j] === pattern[i]) {
        table[++i] = ++j;
      } else {
        if (j > 0) j = table[j];
        else ++i;
      }
    }
  }

  // 匹配
  {
    let j = 0,
      i = 0;
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i;
        ++j;
      } else {
        if (j > 0) j = table[j];
        else ++i;
      }
      if (j === pattern.length) {
        return true;
      }
    }
  }
  return false;
}

let result = kmp("abcdabcdabcex", "abcdabce");
console.log(result);
