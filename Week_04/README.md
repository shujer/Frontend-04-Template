# 学习笔记

重新建立 JavaScript 知识体系和秩序

## 编程语言泛识

### 语法分类

- 非形式语言
- 形式语言（_乔姆斯基谱系_）
  - 0 型 **无限制文法** `?::=?` ：等号两边不关联
  - 1 型 **上下文相关文法** `?<A>?:=?<B>?`：如果 A 在两个问号(上文、下文)中间，A 会被解释成 B
  - 2 型 **上下文无关文法** `<A>:=?` ：终结符 A 可以被任意定义
  - 3 型 **正则文法** `<A>:=<A>?`：只允许左递归，终结符 A 只能在产生式开头，不能出现在尾部

### 产生式（BNF）

- 语法
  - `<符号> ::= <使用符号的表达式>`
  - `*` 重复多次
  - `|` 或
  - `+` 至少一次
  - 基础结构：终结符
  - 符合结构：非终结符
- 四则运算的描述

```sql

<MultiplicativeExpression>::=<Number> |
            <MultiplicativeExpression> * <Number> |
            <MultiplicativeExpression> / <Number> |
<AdditiveExpression>::=<MultiplicativeExpression> |
            <AdditiveExpression> + <MultiplicativeExpression>|
            <AdditiveExpression> - <MultiplicativeExpression>
```

- Javascript 非严格的上下文无关文法、表达式正则文法、`get`,`**` 上下文相关文法

### 语言的分类

- 形式语言——用途
  - 数据描述语言：JSON、HTML、XAML、SQL、CSS
  - 编程语言
- 形式语言——表达方式
  - 声明式语言
  - 命令式语言

### 编程语言的性质

#### 图灵完备性（Turing Completeness）

在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。

- 命令式——图灵机
  - goto
  - if while
- 声明式——lambda
  - 递归

#### 动态与静态

- 动态 **runtime**
- 静态 **compiletime**
- 动态类型系统与静态类型系统
- 强类型与弱类型（有无隐式转换）
  - Srtring + Number
  - String == Boolean
- 复合类型
  - 结构体
  - 函数签名
- 子类型
- 泛型（类型作为参数）

### 命令式语言的设计方式

- Atom
- Expression
- Statement
- Structure
- Program

```
语法 => 语义 => 运行时
```

## JS 类型

### 类型

- Number
- String
- Boolean
- Object
- Null
- undefined
- Symbol

### Number

- IEEE 754 Double Float 双精度浮点类型
  - Sign (1)
  - Exponent (11)
  - Fraction（52）

### String

- Character
- Code Point
- Encoding
  - ASCII(127)
  - Unicode
  - UCS
  - GB
    - GB2312
    - GBK
      GB18030
  - isso-8859
  - BIG5

### Object

- 属性：
  JS 用属性来统一抽象对象的状态和行为。一般来说，数据属性用于描述状态，访问器属性则用于描述行为。
- 原型链
- Object API:
  - 字面量定义、`Object.defineProperty`
  - 基于原型：`Object.create`、`Object.setPropertyOf`、`Object.getPropertyOf`
  - 基于类：`new` + `class` + `extends`
  - 混合：`new` + `function` + `property`
- 特殊对象
 - function：带 call 方法的对象
