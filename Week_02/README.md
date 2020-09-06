## 学习笔记

### 地图寻路问题

- **广度优先算法**，是从起点开始，相临近点逐步向外扩散，直到找到终点的过程。[BFS & DFS 相关总结](https://github.com/shujer/DailyAlgorithm/issues/1)
- **Dijkstra 算法**，使用一个优先队列，计算每个节点距离起点得得移动代价，在移动过程中优先选择代价小的节点遍历。
- **最佳优先搜索**，我们认为如果可以预估终点的方向可以更快的到达终点。同样使用一个优先队列，但是以每个节点距离终点的距离作为优先级，每次选择到终点移动代价的节点进行遍历。
- **A\* 启发式算法**，可以认为是结合前面几种算法的改进算法。启发函数：`f(n) = g(n) + h(n)`
- 二叉堆

### 构建语法树

- `1024 + 10 * 12` 的 echarts 可视化结果如下
  ![1024 + 10 * 12](https://user-images.githubusercontent.com/25917294/92252684-2603a400-ef01-11ea-896d-3cbee24ef2b2.jpg)

- LL 分析
  - 最小单元的操作数：`Number`
  - `MultiplicativeExpression`
  - `AdditiveExpression`
  - `Expression`

### 正则表达式的基础知识

`exec()` 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。

在设置了 global 或 sticky 标志位的情况下（如 `/foo/g` or `/foo/y`），JavaScript RegExp 对象是有状态的。他们会将上次成功匹配后的位置记录在 `lastIndex` 属性中。使用此特性，`exec()` 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配），而相比之下， `String.prototype.match()` 只会返回匹配到的结果。

如果你只是为了判断是否匹配（true 或 false），可以使用 `RegExp.test()` 方法，或者 `String.search()` 方法。

### 利用 generator 进行异步迭代的范式

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

### push vs unshift 的性能差异

- push: 当预分配的内存不够时，会申请更大的内存并复制数据到新的内存中
- unshfit：每个操作都需要重新分配和复制资源

### 参考文档

- [路径规划之 A\* 算法](https://zhuanlan.zhihu.com/p/54510444)
- 行内元素的样式问题 —— 设置 `font-size: 0px` ： [去除 inline-block 元素间距](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
- [RegExp.prototype.exec()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [performance-of-array-push-vs-array-unshift](https://stackoverflow.com/questions/44031591/performance-of-array-push-vs-array-unshift/44032020#44032020)
