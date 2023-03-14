<a name="izbxh"></a>
# Mustache语法（插值语法）
Vue也支持jsx的开发模式：

- 但是大多数情况下，使用**基于HTML的模板语法**
- 在模板中，允许开发者以声明式的方式将**DOM**和**底层组件实例的数据**绑定在一起
- 在底层的实现中，Vue将**模板**编译成**虚拟DOM渲染函数**

如果我们希望把数据显示到模板中，使用最多的就是插值语法

- **data返回的对象**是由添加到**Vue的响应式系统**中。
- 当**data中的数据发生改变**时，**对应的内容也会发生更新。**
- 当然，Mustache不仅仅可以是data中的属性，也可以是一个**JavaScript的表达式**。

基本使用：`{{message}}`<br />表达式：`{{count * 2}}``{{info.split("")}}`<br />三元运算符：`{{age > 18 ? "成年啦": "未成年呢"}}`<br />调用methods中的函数`{{ function() }}`
<a name="GnRfg"></a>
# 常见的基本指令

1. `v-once`用于指定元素或组件只渲染一次
2. `v-text`用于更新元素的textContent
3. `v-html`用于解析内容本身是html的
4. `v-pre`跳过元素和它的子元素的编译过程，显示原始的Mustache标签内容，不进行插值语法的解析
5. `v-cloak`将原始元素隐藏起来（配合display：none使用）
6. `v-memo`
<a name="GTb71"></a>
# v-bind绑定属性
前面的指令，主要是将值**插入到模板内容**中<br />但是，除了内容需要动态决定外，某些**属性**我们也希望动态绑定

- 比如动态绑定a元素的href属性
- 比如动态绑定img元素的src属性

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678694914327-40f80e22-5bc6-4f67-979f-dd5d4fc67a43.png#averageHue=%23f2f0ed&clientId=u80b3ab5a-fd76-4&from=paste&height=244&id=u9ebe7ccc&name=image.png&originHeight=244&originWidth=541&originalType=binary&ratio=1&rotation=0&showTitle=false&size=61486&status=done&style=none&taskId=u593b8f2e-f81a-4915-80b1-363715a18f6&title=&width=541)
<a name="QntF0"></a>
## 绑定基本属性
```html
<div id="app">

  <!--  通过v-bind绑定img的src属性  -->
  <img v-bind:src="imgUrl" alt=""/>

  <!-- 绑定a的href属性 -->
  <!--  <a :href="href" ></a> 等价于下面这句 -->
  <a v-bind:href="href" ></a>
  
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        imgUrl: "xxx",
        href: "yyy"
      }
    }
  })
  app.mount("#app")
</script>
```
v-bind的一个语法糖，即简写是`:属性名=""`，
<a name="oKDv5"></a>
## 绑定class语法
在开发中，有时候我们的元素class也是动态的，比如：

- 当数据为某个状态时，字体显示红色
- 当数据为另一个状态时，字体显示黑色

需求：点击按钮变色，再点击恢复<br />实现：
```html
<style>
  .active{
    color: red;
  }
</style>


<div id="app">

  <!-- 动态绑定对象   
      这里的对象键值对，value是布尔值
      还可以写多个键值对：{ active: isActive, why: true, hah: false }
  -->
  <button :class="{ active: isActive }" @click="changeColor">我是按钮</button>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        isActive: false
      }
    },

    methods: {
      changeColor: function() {
        this.isActive = !this.isActive   
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="dxQ3H"></a>
## 绑定数组语法
```html
<style>
  .active{
    color: red;
  }
</style>


<div id="app">

  <h2 :class="['a', 'b', className, { active: isActive }]">Hello Array</h2>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        isActive: false
      }
    },

    methods: {
      changeColor: function() {
        this.isActive = !this.isActive   
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="tMKP7"></a>
# 绑定class和style
上面是使用`v-bind`绑定class属性<br />现在绑定style属性，和class类似，也是通过对象绑定
```html
<div id="app">

  <h2 :style="{ color: fontColor }">Hello Array</h2>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        fontColor: "red"
      }
    }
  })
  app.mount("#app")
</script>
```
绑定style和class类似，可以有对象绑定，也有数组绑定。
<a name="I1dGU"></a>
## 动态绑定属性
有时候，我们属性名可能也不固定：如果**属性名不固定**，我们可以使用 `:[属性名] = '值'`的格式来定义<br />这种绑定的方式，我们称之为**动态绑定属性**。
```html
<div id="app">

  <h2 :[name]="aaa"></h2>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        name: "title"
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="pDfbL"></a>
## 绑定一个对象
```html
<div id="app">

	<!--  会自动遍历props的对象  -->
  <h2 v-bind="props">hello</h2>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        props: {
          name: "h1",
          age: 18,
          height: 1.90
        }
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="zuKtr"></a>
# v-on绑定事件
在开发中另外一个非常重要的特性就是**交互**。<br />这个时候，我们必须监听用户发生的事件，比如点击、拖拽、键盘事件等等。在Vue中使用**v-on**指令<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678783597556-41c70b83-9897-49a7-8083-7e6300888a8b.png#averageHue=%23f7f5f4&clientId=u406408ef-8513-4&from=paste&height=364&id=u5ee628d1&name=image.png&originHeight=364&originWidth=401&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=64729&status=done&style=none&taskId=u687c5808-919f-494d-87da-915a2574efe&title=&width=401)
```html
<style>
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div id="app">

  <div class="box" v-on:click="btnClick"></div>

  <!--  语法糖写法  -->
  <div class="box" @:click="btnClick"></div>

  <!--   绑定其他方法 -->
  <div class="box" @:mousemove="divMousemove"></div>

  <!--  绑定多个事件  -->
<!--   <div class="box" @:click="btnClick" @:mousemove="divMousemove"></div> -->
  <div class="box" v-on="{ click: divClick, mousemove: divMousemove}"></div>
<!--   <div class="box" @="{ click: divClick, mousemove: divMousemove}"></div> -->
  

</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        
      }
    },
    methods: {
      btnClick() {
        console.log("hello");
      },
      divMousemove() {
        console.log("mousemove");
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="stgD2"></a>
## v-on参数传递
```html
<div id="app">

  <!--   默认传递event对象 -->
  <div @:click="btnClick1">1</div>

  <!--   明确的参数 -->
  <div @:click="btnClick2('123', age)">2</div>

  <!--  明确的参数和event  
        在模板中想要明确的获取event对象：$event
  -->
  <div @:click="btnClick3('123', age, $event)">3</div>
  

</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        age: 18
      }
    },
    methods: {
      // 1.默认参数：event对象
      // 如果在绑定事件的时候，没有传递任何参数，那么event对象会被默认传进来
      btnClick1(event) {
        console.log("btnClick", event)
      },
      // 明确参数
      btnClick2(a, age){
        console.log(a, age)
      },
      btnClick3(a, age, event){
        console.log(a, age, event)
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="AOhmO"></a>
## v-on的修饰符
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1678786847527-4bcc61f1-dc5c-45f1-9514-c7628bf34a34.png#averageHue=%23f1f1f1&clientId=u406408ef-8513-4&from=paste&height=326&id=uc5b3581b&name=image.png&originHeight=326&originWidth=436&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92735&status=done&style=none&taskId=u605f98c0-1b2f-49e5-bc68-90f0b99217a&title=&width=436)
<a name="KsGth"></a>
## 绑定事件的修饰符
```html
<style>
  .box{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>

<div id="app">

  <div class="box" @click="divClick">
    <!--     阻止冒泡 .stop -->
    <button @click.stop="btnClick"></button>
  </div>

</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        
      }
    },
    methods: {
      btnClick(event) {
        console.log("btnClick")
      },
      divClick() {
        console.log("divClick")
      }
    }
  })
  app.mount("#app")
</script>
```

<a name="RJw1R"></a>
# Vue的条件渲染
在某些情况下，我们需要根据当前的条件决定某些元素或组件是否渲染，这个时候我们就需要进行条件判断了。<br />Vue提供了下面的指令来进行条件判断：

- `v-if`
- `v-else`
- `v-else-if`
- `v-show`
```html
<div id="app">

  <ul v-if="names.length > 0">
    <li v-for="item in names">{{item}}</li>
  </ul>

  <h2 v-else>当前没有数据，请求获取后展示</h2>

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
v-if是惰性的：

- 当条件为false时，直接就不会渲染DOM或者会直接销毁
- 当为true时才会渲染
<a name="BGk8i"></a>
## v-show
用法和`v-if`看起来是一致的<br />用法区别：

- `v-show`不支持`template`（因为这个元素是不存在的）
- `v-show`不可以和`v-else`一起使用

本质区别：

- `v-show`的DOM是实际存在的，只是通过`display`来回切换了
- `v-if`条件为false时，是不会渲染DOM的

在开发中如果元素需要频繁进行显示和隐藏，用`v-show`，否则用`v-if`。
<a name="Nf04t"></a>
# template元素
`v-if`是一个指令，所以必须添加到一个元素上：

- 但是我们如果希望切换的是多个元素呢？
- 此时我们渲染div，但是我们并不希望div这种元素被渲染
- 这个时候可以选择使用`template`

`template`元素可以当作看不见的包裹元素，并且在`v-if`上使用，但是最终`template`不会被渲染出来

