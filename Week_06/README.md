# 浏览器工作原理

## 浏览器解析过程

```bash
URL — HTTP —> HTML
                  — parse —> DOM
                  — css computing —> DOM with CSS
                  — layout —> DOM with position
                  — render —> Bitmap
```

## 有限状态机

- 每一个状态都是一个机器
  - 状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数
- 每个机器知道下一个状态
  - 有确定的下一个状态（Moore）
  - 根据输入决定下一个状态（Mealy）

### 不使用状态机处理字符串

## HTTP

### ISO-OSI 七层网络模型

- 应用
- 表示
- 会话
- 传输 (TCP)
- 网络 (Internet)
- 数据链路
- 物理层

### TCP 与 IP 的一些基础知识

- 流
- 端口
- `require('net')`
- 包
- IP 地址
- libnet: 构造 IP 包并且发送 / libpcap：从网卡抓包

### HTTP Request / HTTP Response

- HTTP 是文本型协议
- HTTP Response
  - status liine: 协议版本 状态码 状态文本
  - headers
  - body
    - chunk body