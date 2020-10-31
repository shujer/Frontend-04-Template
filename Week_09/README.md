## CSS 总论

- at-rule
  - `@charset`
  - `@import`
  - `@media`
  - `@page`
  - `@counter-style`
  - `@keyframes`
  - `@fontface`
  - `@support`
  - `@namespace`
- rule
  - Selector
    - selector_group
    - selector
      - `>`
      - ` `
      - `+`
      - `~`
    - simple_selector
      - type
      - `*`
      - `[]`
      - `:`
      - `::`
      - `:not()`
  - Declaration
    - Key
      - variables
      - properties
    - Value
      - calc
      - number
      - length

## CSS 选择器

- 简单选择器
  - `*` 通用符
  - `div svg|a` 等类型选择器（| 表示 svg 命名空间下的 a）
  - `.class` 类选择器
  - `#id` id 选择器
  - `[attr=value]` 属性选择器
  - `:hover` 伪类选择器
  - `::before` 伪元素选择器
- 复合选择器
  - <简单选择器><简单选择器><简单选择器>
  - `*` 或 div 必须写在前面
- 复杂选择器
  - <复合选择器>\<sp\><复合选择器>
  - <复合选择器> ">" <复合选择器>
  - <复合选择器> "~" <复合选择器>
  - <复合选择器> "+" <复合选择器>
  - <复合选择器> "||" <复合选择器>
- 选择器的优先级
  计算方法：[A selector's specificity is calculated](https://www.w3.org/TR/2009/CR-CSS2-20090908/cascade.html#specificity)
  - a: 当样式通过 `style` 内联定义时，标记为 1，否则标记为 0
  - b: 计算 id 选择器的个数
  - c: 计算选择器中其他属性（类、属性选择器）和伪类的个数
  - d: 计算选择器中类型选择器和伪元素的个数

## 伪元素

- `::before` 在元素前面插入一个元素
- `::after` 在元素后面插入一个元素
- `::first-line` 将内容（文本）里面的第一个行括起来，对可更改的样式属性有限制
- `::first-letter` 将内容（文本）里面的第一个字母括起来，对可更改的样式属性有限制


## 思考题
为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
first-letter 不会影响到整个文本流的布局，first-line 可能会影响，导致文本块中第一行文本无法定义