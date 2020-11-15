## CSS 排版

### 盒

- 概念
  - CSS 选择器选中的是元素（或者伪元素），在排版时可能产生多个盒
  - 排版和渲染的基本单位是盒 Box
- 盒模型
  - content -> padding -> border -> margin
  - `box-sizing`: content-box / border-box

### 正常流

- 排版（布局）规则
  - 正常流
  - flex
  - grid
- 关键对象：盒、文字
- 正常流布局
  - 收集盒进行
  - 计算盒在行中的排版
  - 计算行的排布
  - 描述：依次排列，排不下了换行
- **IFC** 行内格式化上下文（从左到右）
- **BFC** 块级格式化上下文（从上到下）
- 当我们要把正常流中的一个盒或者文字排版，需要分成三种情况处理：
  - 当遇到块级盒：排入块级格式化上下文
  - 当遇到行内级盒或者文字：首先尝试排入行内级格式化是上下文，如果排不下，那么创建一个行盒，先将行盒排版，行盒会创建一个行内级格式化上下文
  - 遇到 float 盒：把盒的顶部跟当前行内级上下文边缘对齐，然后根据 float 的方向把盒的对应边缘对到块级格式化上下文的边缘，之后重排当前行盒

### 正常流的行级排布

- 文字的基线对齐
- 行模型
  - line-top （可以撑开）
  - text-top （多种文字混排由最大的 font-size 决定）
  - base-line
  - text-bottom （多种文字混排由最大的 font-size 决定）
  - line-bottom（可以撑开）
- vertical-align 相关规则规定了如何在垂直方向对齐盒

### 正常流的块级排布

#### 浮点元素

- 使用 float 后会先对齐行内盒，再重排块级盒
- float 不受 br 影响
- 使用 clear 可以清除指定方向上 float 元素的影响
- `float: left` 经常会导致重排的现象

#### margin

- margin 堆叠
- 正常流的 BFC 内部才会发生 margin collapse

### BFC 合并

#### Block

- Block Container 里面有 BFC (容纳块级正常流)
  - block
  - inline-block
  - table-cell
  - flex item
  - grid cell
  - table-caption
- Block-level Box 外面有 BFC
- Block Box = Block Container + Block-level Box 里外都有 BFC

#### 设立 BFC

- 浮点元素
- 绝对定位元素
- 非块级但仍能包含块级元素的容器：inline-blocks, table-cells, table-captions
- 块级的能包含块级元素的容器且 overflow 不为 visible

#### BFC 合并

- block box & overflow: visible
- BFC 合并与 float
  - BFC 可以包含浮动的元素（清除浮动）；因为设置浮动会脱离文档流，可能导致父级元素高度塌陷，因此可以设置父级元素成为一个 BFC（比如，overflow: hidden），解决高度塌陷问题。
- BFC 与边距折叠
  - 同一个 BFC 下外边距会发生折叠
  - 如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中

### Flex 排版

- 过程
  - 收集盒进行
  - 计算盒在主轴方向的排布
  - 计算盒在交叉轴方向的排布

### CSS 动画与绘制

- `@keyframes` + `animation`
  - animation
    - animation name
    - animation-duration
    - animation-timing-function
    - animation-delay
    - animation-iteration-count
    - animation-direction
- `transition`
  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay
- 三次贝塞尔曲线
  - 贝塞尔曲线是一种插值曲线，描述了两个点之间差值来形成连续的曲线形状的规则
  - 一个量，从一个值到变化到另一个值，如果我们希望它按照一定时间平滑地过渡，就必须要对它进行插值

### CSS 颜色

- RGB 颜色
  - 光谱三原色理论：红、绿、蓝三种颜色的光可以构成所有的颜色
- CMYK 颜色
  - 使用三原色（品红、黄、青）来调配油墨，这种颜色的表示法叫做 CMYK，它用一个四元组来表示颜色;它比三原色多了一种，印刷时会单独指定黑色
- HSL 颜色
  - 色相（H）加上颜色的纯度（S）和明度（L），就构成了一种颜色的表示
- RGBA
  - RGBA 是代表 Red（红色）、Green（绿色）、Blue（蓝色）和 Alpha 的色彩空间

### CSS 绘制

- 几何图形
- 文字
- 位图
