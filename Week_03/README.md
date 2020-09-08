# 学习笔记

## 字符串分析算法

### 字典树

字典树，即 Trie 树，又称单词树，是哈希表的变种，经常用于统计和排序大量字符串/数字，常被用于文本词频统计，能够减少无谓数据的比较。每个节点存储一个字符，而不是每个节点存储一个字符串。利用空间换时间、利用字符串的公共前缀来减少查询时间。

### KMP

朴素（暴力）的字符串匹配法是：**模式串对齐文本串的第一位**，同时文本串和模式串遍历指针每次前进一位进行比较；当比较失败时，**模式串对齐文本串的第二位**，再次进行遍历比较；重复这个过程，直到匹配成功或者匹配结束。（这里我描述成**对齐**是为了更好地理解 KMP 的移动过程）

```sql
-- round 1
ABCDABCE
ABCE

-- round 2
ABCDABCE
 ABCE

-- round 3
ABCDABCE
  ABCE

-- round4
ABCDABCE
   ABCE

-- round5
ABCDABCE
    ABCE (bingo!!)

```

算法可以表示为：

```js
// leetcode 28 题的朴素匹配解法可以实现为
var strStr = function (haystack, needle) {
  if (needle === haystack) {
    return 0;
  }
  const N = haystack.length;
  const M = needle.length;
  let i = 0,
    j = 0;
  for (i = 0; i <= N - M; i++) {
    for (j = 0; j < M; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }
    if (j === M) {
      return i;
    }
  }
  return -1;
};
```

朴素字符串匹配算法实现起来十分简单，但在一些特殊情况下，这种算法并不太聪明。比如我们有一个字符串 `aaaaaaaab` 和 模式串 `aaaab`，每次移动一位进行比较会造成一些重复操作。我们思考有没有一种**跳转/对齐**方法，可以在匹配失败时，将模式串跳转到一个更加合理的位置避免重复比较？这是 KMP 算法要实现的主要目标。

### Wildcard

### 正则表达式

### 状态机

### LL/LR 算法

## 参考资料

- [字符串匹配的 KMP 算法-阮一峰](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
- [详解 KMP 算法](https://www.cnblogs.com/yjiyjige/p/3263858.html)
