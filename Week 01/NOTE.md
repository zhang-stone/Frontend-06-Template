学习笔记
# 心得体会
1. Promise 一定要记得调用resolve, 或者reject, 返回结果
```
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
```
2. 下面两种写法
- 第一张写法
```
  function run2() {
      green()
      sleep(1000).then(run2)
    }
```
- 第二种写法
```
  function run2() {
      green()
      sleep(1000).then(() => {
        run2()
      })
    }
```
刚开始看老师是第一张写法, 我就想, 为什么函数名后面不加括号? , 自己写一遍就清楚了. 

##### 代码看千遍, 不如敲一遍

# 问题
## TicTacToe
1.  bestChoice() 函数, 下面的代码不太理解
```
if (-r > result) {
  result = -r
  point = [i, j]
}
```
## 红绿灯
1. 迭代器返回值是什么呢? 为啥可以循环他
```
    async function* counter() {
      let i = 0;
      while(true) {
        await sleep(1000)
        yield i++
      }
    }
    let value = counter()
    async function go10() {
      for await (let i of counter()) {
        console.log(i)
      }
    }

```