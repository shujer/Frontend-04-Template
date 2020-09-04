### 地图寻路

- 行内元素的样式问题 —— 设置 `font-size: 0px`
- 学习了 BFS & DFS 的相关内容，顺便刷了 leetcode 的几道题强化解题思想，[总结写在这里](https://github.com/shujer/DailyAlgorithm/issues/1)

- 二叉堆

- A\* 启发式算法

### 利用正则表达式的捕获进行词法分析

- `1024 + 10 * 12` 的 echarts 可视化结果如下
  ![1024 + 10 * 12](https://user-images.githubusercontent.com/25917294/92252684-2603a400-ef01-11ea-896d-3cbee24ef2b2.jpg)

- LL 分析
  - 最小单元的操作数：`Number`
  - `MultiplicativeExpression`
  - `AdditiveExpression`
  - `Expression`

### 补充知识

- **Regex 基础知识**

  `exec()` 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

  在设置了 global 或 sticky 标志位的情况下（如 `/foo/g` or `/foo/y`），JavaScript RegExp 对象是有状态的。他们会将上次成功匹配后的位置记录在 `lastIndex` 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， `String.prototype.match()` 只会返回匹配到的结果。

  如果你只是为了判断是否匹配（true 或 false），可以使用 `RegExp.test()` 方法，或者 `String.search()` 方法。

- 利用 generator 进行异步迭代的范式

  ```js
  function* fun() {
    // 循环语句
    while (true) {
      yield value;
    }
  }
  for (let v of fun()) {
    console.log(v);
  }
  ```

- push vs unshift 的性能差异
  - push: 当预分配的内存不够时，会申请更大的内存并复制数据到新的内存中
  - unshfit：每个操作都需要重新分配和复制资源

### 参考文档

[去除 inline-block 元素间距](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
[RegExp.prototype.exec()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
[performance-of-array-push-vs-array-unshift](https://stackoverflow.com/questions/44031591/performance-of-array-push-vs-array-unshift/44032020#44032020)
