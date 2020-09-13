# 学习笔记

## 字符串分析算法

- 字典树
- kmp
- wildcard (通配符不是很理解)
- 正则匹配
- 状态机
- LL / LR
- [总结写在这里](https://github.com/shujer/DailyAlgorithm/issues/2)

## vue reactivity

- vue 2.0
  > 当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
- vue 3.0
  通过 Proxy 包装对象，监听对象:
  - `reactive(obj)` 接收一个对象作为参数，返回一个代理对象
  - `effect(callback)` 定义副作用，依赖收集，数据变化会重新执行副作用

## 使用 Range 实现 DOM 的精确操作
