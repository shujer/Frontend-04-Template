## 基本知识

### 对象与组件

- 对象
  - Properties（属性）
  - Methods（方法）
  - Inherit（原型继承）
- 组件（在对象基础上，多了很多界面上的语义描述，与 UI 强相关）
  - Properties
  - Methods（使用者向组件内部传递消息）
  - Inherit
  - Attribute
  - Config & State（配置&状态）
  - Event（组件向外传递的事件）
  - LifeCycle（生命周期）
  - Children（树形结构）
- Attribute VS Properties
  - Attribute 强调描述性
  - Property 强调从属关系，面向对象

```jsx
//attribute
<my-component attribute="v" /> ;
myComponent.getAttribute("a");
myComponent.setAttribute("a", "value");
//property
myComponent.a = "value;
// 实际效果以 property 优先
<input value="cute">
var input = document.getElementByTagName("input");
input.value;//cute
input.getAttribute("value");//cute
input.value = "hello";
input.value;//hello
input.getAttribute("value");//cute
```

### 如何设计组件状态

- property
- attribute
- state
  - 组件内部
- config
  - 一次性结果，初始化，不可更改性

### 组件的生命周期

- **created**
- mount
- (JS change / set、User Input) - render/**update**
- unmount
- **destroyed**

### Children

- Content 型
- Template 型：模板作用，不反应实际渲染的数目，由数据决定实际展示数目

## 搭建组件系统

### 搭建 JSX

- jsx 环境
  - webpack + webpack-cli + babel-loader + babel
  - @babel/core + @babel/preset-env
  - @babel/plugin-transform-react-jsx ==> React.createElement
- jsx 类型语法糖，能将函数调用写成 markup 形式
- wrap
  - ElementWrap
  - TextWrap
  - ClassWrap

### 轮播图

- 监听具有前后依赖关系的一组事件的方法

```js
this.root.addEventListener("mousedown", (event) => {
  console.log("mousedown");
  let move = (event) => {
    console.log("mousemove");
  };
  let up = (event) => {
    console.log("mouseup");
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
  };
  // 监听 document，防止事件丢失
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", up);
});
```
