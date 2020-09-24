## 运算符和表达式

## 类型转换

- 拆箱转换（Unboxing）——将 Object 转换为普通类型
  - ToPrimitive
  - toString vs valueOf
  - Symbol.toPrimitive
- 装箱转换（Boxing）——将普通类型转换为 Object
  - `new Number(1)`
  - `new String("a")`
  - `new Boolean(true)`
  - `new Object(Symbol("a"))`

## JS 运行时

- Completion Record

  - type: normal、break、continue、return or throw
  - value: 基本类型
  - target: label

- Lexical Environment

## 语句

- 简单语句
  - Expression
  - Empty
  - Debugger
  - Throw
  - Continue
  - Break
  - Return
- 复合语句
  - Block
  - If
  - Switch
  - Iteration
  - With
  - Labelled
  - Try

## 声明

- 分类
  - Function
  - Generator
  - AsyncFunction
  - AsyncGenerator
  - Variable
  - Class
  - Lexical
- 举例
  - function
  - function \*
  - async function
  - async function \*
  - var
  - class
  - const
  - let
- 预处理机制
- 作用域：
  - var、function 的作用域是所在函数体
  - const 作用域在块（花括号）中

## Js 结构化程序设计

- JS 执行粒度（运行时）

  - 宏任务
  - 微任务（Promise）
  - 函数调用
  - 语句/声明
  - 表达式
  - 直接量、变量

### 宏任务与微任务

### 事件循环

- 过程
  - 获取代码
  - 执行代码
  - 等待
  - loop
- 环境
  - node
  - 浏览器

### 函数调用

- Excution Context Stack

### Realm

- JS 中，函数表达式和对象直接量会创建对象
- 使用 `.` 做隐式转换也会创建对象
- 宿主环境：一般宿主环境由外壳程序创建与维护，只要能提供 js 引擎执行的环境都可称之为外壳程序。
- ECMA-262 把本地对象（native object）定义为“独立于宿主环境的 ECMAScript 实现提供的对象”。
  - Object
  - Function
  - Array
  - String
  - Boolean
  - Number
  - Date
  - RegExp
  - Error
  - EvalError
  - RangeError
  - ReferenceError
  - SyntaxError
  - TypeError
  - URIError
