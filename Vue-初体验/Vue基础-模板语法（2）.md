<a name="BqtK4"></a>
# v-for列表渲染
在真实开发中，我们拿到一组数据，并且需要对其渲染：

- 使用`v-for`渲染
- `v-for`类似`for循环`

v-for基本格式：`item in 数组`

- 数组通常来自data或props...
- item是每项元素的别名，自定义

当我们需要索引时，格式：`(item, index) in 数组`

- 前面是元素，后面是对应的索引
```html
<div id="app">


  <ul>
    <li v-for="(item, index) in names">{{item}}</li>
  </ul>
  
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        names: ["a", "b", "c"]
      }
    }
  })
  app.mount("#app")
</script>
```
遍历对象时，可以有三个参数：`(value, key, index) in object`
<a name="yri7U"></a>
# v-for渲染类型
<a name="NqcMo"></a>
## 遍历所有可迭代对象
数组，对象，字符串，数字等
<a name="XGuWs"></a>
## template元素
表达的意思和`v-if`中的一致
<a name="O3YHE"></a>
# 数组更新的检测
Vue将被侦听的数组的变更方法进行了包裹，所以他们也将会触发视图更新。<br />下面这些方法都能被监听到：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678807992788-d2314248-43c8-487d-b5b9-1d35910f255e.png#averageHue=%23f8f8f8&clientId=u554fbe5d-0f39-4&from=paste&height=258&id=u240da893&name=image.png&originHeight=258&originWidth=245&originalType=binary&ratio=1&rotation=0&showTitle=false&size=18977&status=done&style=none&taskId=u7ec1b5e5-dcb1-41b4-bdec-90bb64381f9&title=&width=245)<br />不修改原数组的方法是不能被侦听的。
<a name="T3ZOi"></a>
# v-for的key属性
在进行`v-for`列表渲染时，我们通常会给元素或者组件绑定一个`key`属性

- key属性主要用在Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes
- 如果不使用key，Vue会使用另外一种算法
- 使用key，会基于key的变化重新排列元素顺序，并且会溢出/销毁key不存在的元素。

下面是官方的解释：<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678876149569-97a64776-6ca2-41c5-a2a9-3720252d1254.png#averageHue=%23efe4e3&clientId=u08a68bac-eb1c-4&from=paste&height=92&id=u16566c02&name=image.png&originHeight=92&originWidth=764&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70230&status=done&style=none&taskId=ud7078c03-2d9b-4d46-9fa7-8f430cb1528&title=&width=764)
```html
<div id="app">

  <button @click="insert">点击添加d</button>

  <ul>
    <li v-for="(item, index) in names" :key="item">{{item}}</li>
  </ul>
  
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        names: ["a", "b", "c"]
      }
    },
    methods: {
      insert() {
        this.names.splice(2, 0, 'd')
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="TFJj0"></a>
## 认识VNode
VNode全称是`Virtual Node`，也就是**虚拟节点。**<br />事实上，无论是元素还是组件，在Vue中表现出来都是一个个的VNode。<br />VNode本质就是一个JavaScript对象
<a name="Os3X7"></a>
# Vue的虚拟DOM
如果我们不只是一个简单的div，而是有一大堆的元素，那么他们应该会形成一个`VNode Tree`<br />这个树结构就是我们的**虚拟DOM**<br />方便实现`diff算法`，跨平台
<a name="YtTp7"></a>
# v-for的diff算法
略...
