学习笔记

## HTML 字符引用
> HTML实体以和号（&）开头，分号（;）结尾，两者之间表示实体的字符串（或数字）。
Entity  |    Entity Displayed 
---|---
`&amp;`  |  &
`&lt;`   |  <
`&quot`  |  "



## 浏览器 APi
> DOM 是对HTML文档的抽象
> CSSOM 是对CSS文档的抽象
### DOM API
#### 1. 节点类api
[节点类api](https://wc12g1cjmw.feishu.cn/mindnotes/bmncn58bdblvOVdp7PFK2cpMITh#mindmap)
[操作节点](https://wc12g1cjmw.feishu.cn/docs/doccnstps33G2IdUuTmkaUd9U5c)
#### 2. 事件类api

==浏览器事件触发==
```
graph LR
捕获-->冒泡
```

1. 默认冒泡， 传第三个参数`true`, 捕获
2. 按照监听事件的顺序一一触发
#### 3. Range api 


### CSSOM 
 - getcompentStyle
 - getClientRects()
 - getBoundingClientRect()

