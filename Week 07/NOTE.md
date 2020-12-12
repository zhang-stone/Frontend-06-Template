学习笔记

1. var 声明的变量会提升到所处函数作用域的开头
2. 每个函数都会产生闭包, 函数内可以访问函数上下文定义的变量
3. Macro Task/Micro Task
  - Macro Task: 传给JavaScript引擎的任务
  - Micro Task: 在JavaScript引擎内部的任务
  ##### case
  ```
  var x = 1;
  var p = new Promise(resolve => resolve())
  p.then(() => x = 3)
  x = 2
  ```
  1. var x = 1; var p = new Promise(resolve => resolve()); p.then(); x = 2;
  2. () => x = 3
  2个微任务