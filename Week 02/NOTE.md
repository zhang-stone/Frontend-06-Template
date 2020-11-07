学习笔记

#### 分号问题
```
pathRoad.push([x, y])
[x, y] = table[y * 100 + x]
```
x,y 取不到值, 想不到为什么? 
1. 先去查了结构赋值的知识, 没有问题
2. 最后定位到这两句代码, 群里求助, 提示需要加分号, 不知所以然.
3. 看JavaScript语法（预备篇）：到底要不要写分号呢？
4. 解决
### 不写分号需要注意的情况

1. 以括号开头的语句
```
(function(a){ console.log(a);})()/*这里没有被自动插入分号*/
(function(a){ console.log(a);})()
```
2. 以数组开头的语句
```

var a = [[]]/*这里没有被自动插入分号*/
[3, 2, 1, 0].forEach(e => console.log(e))

```

3. 以正则表达式开头的语句
```

var x = 1, g = {test:()=>0}, b = 1/*这里没有被自动插入分号*/
/(a)/g.test("abc")
console.log(RegExp.$1)
```
4. 以 Template 开头的语句
```
var f = function(){
  return "";
}
var g = f/*这里没有被自动插入分号*/
`Template`.match(/(a)/);
console.log(RegExp.$1)
```