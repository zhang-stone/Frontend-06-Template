学习笔记

1. npm init
2. npm install yeoman-generator
3. 



### webpack
> webpack一般需要安装`webpack && webpack-cli`两个包

> webpack 只能直接处理 javascript 格式的代码。任何非 js 文件都必须被预先处理转换为 js 代码，才可以参与打包。loader（加载器）就是这样一个代码转换器。它由 webpack 的 `loader runner` 执行调用，接收原始资源数据作为参数（当多个加载器联合使用时，上一个loader的结果会传入下一个loader），最终输出 javascript 代码（和可选的 source map）给 webpack 做进一步编译。


1. loader 是一个导出一个函数的 node 模块。
```
// loaders/simple-loader.js
module.exports = function loader (source) {
    console.log('simple-loader is working');
    return source;
}
```

