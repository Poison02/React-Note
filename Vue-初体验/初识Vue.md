Vue是一套用于**构建用户界面**的**渐进式JavaScript框架**。 

- 全称为Vue.js或Vuejs。
- 基于标准HTML、CSS和Javascript构建，并提供了一套声明式的、组件化的编程模型。
- 帮助你高效开发用户界面，无论任务简单还是复杂。

什么是渐进式框架呢？<br />表示我们可以在项目中一点点来引入和使用Vue，而不一定需要全部使用Vue来开发整个项目。
<a name="cI2V6"></a>
# Vue地位
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678529227683-cbbc06ea-2816-4b80-8434-86fe35484795.png#averageHue=%23f6f6f6&clientId=uf624fc86-3bc7-4&from=paste&height=342&id=u733f78fe&name=image.png&originHeight=342&originWidth=628&originalType=binary&ratio=1&rotation=0&showTitle=false&size=111199&status=done&style=none&taskId=u67fb9c2d-fa8c-4743-a7bf-8be64f71bfa&title=&width=628)
<a name="Vis9t"></a>
# 安装使用Vue

1. 在页面中通过CDN的方式引入。
```html

<div id="app"></div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>

  // 使用Vue
  const app = Vue.createApp({
    template: `<h2>Hello World</h2>`,
    
  })
  // 挂载
  app.mount("#app")
</script>
```

2. 下载Vue的JavaScript文件，并且自己手动引入。
   1. 只需要下载Vue.js的源码，然后本地引入即可。
3. 通过npm包管理工具使用它。
4. 直接通过Vue CLI创建项目，并且使用它。
<a name="k7dq8"></a>
# Vue初体验-动态数据
1、动态展示Hello World
```html
<div id="app">

  <h1>{{title}}</h1>
  <h2>{{message}}</h2>
  
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
      	title: "Hello World",
        message: "你好 Vue3"
      }
    }
  })
  app.mount("#app")
</script>
```
2、展示列表数据
```html
<div id="app">

  <h1>{{title}}</h1>
  <ul>
    <li v-for="item in lists">{{item}}</li>
  </ul>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    data(){
      return {
      	title: "Hello World",
        lists: ["111", "222", "333"]
      }
    }
  })
  app.mount("#app")
</script>
```
3、计数器案例
```html
<div id="app">
  <h1>当前计数：{{count}}</h1>
  <button @click="add">+1</button>
	<button @click="mod">-1</button>
</div>


<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    data(){
      return {
      	count: 0
      }
    },
    methods: {
      add: function(){
        this.count++
      },
      mod: function(){
        this.count--
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="xz8xp"></a>
# 命令式编程和声明式编程

- 命令式编程关注的是“how to do”，由自己完成整个”how“的过程
- 声明式编程关注的是“what to do”，由框架完成“how”的过程
<a name="y4FL3"></a>
# MVC与MVVM
都是一种软件的体系结构

- MVC是`Model-View-Controller`
- MVVM是`Model-View-ViewModel`

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678543200338-41fa899e-f7ca-4fe8-abd2-80e35e47a963.png#averageHue=%23efd678&clientId=uf624fc86-3bc7-4&from=paste&height=228&id=u339ed7e4&name=image.png&originHeight=228&originWidth=432&originalType=binary&ratio=1&rotation=0&showTitle=false&size=33938&status=done&style=none&taskId=u57a4196c-181f-4132-baae-d780318bc18&title=&width=432)

