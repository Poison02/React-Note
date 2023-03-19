<a name="GJntL"></a>
# Vue组件化开发思想
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679210906654-61a6e18d-37b6-4a5c-bf23-3e68236279ca.png#averageHue=%23f5f2f0&clientId=u73b6b08b-f729-4&from=paste&height=387&id=uf3f369a8&name=image.png&originHeight=387&originWidth=677&originalType=binary&ratio=1&rotation=0&showTitle=false&size=127900&status=done&style=none&taskId=u035df681-1bda-44f8-8cff-6858f403e08&title=&width=677)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679211047787-7c4bc2ba-60f3-4850-8463-5cf0494a2a86.png#averageHue=%23f3edeb&clientId=u73b6b08b-f729-4&from=paste&height=351&id=ue3e4bf16&name=image.png&originHeight=351&originWidth=362&originalType=binary&ratio=1&rotation=0&showTitle=false&size=84866&status=done&style=none&taskId=u4f4c054c-c2b3-4e2a-8298-9fc44a5b893&title=&width=362)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679211215876-e69fbb13-695a-42a6-b1bc-ec952f0d0654.png#averageHue=%23f2ebea&clientId=u73b6b08b-f729-4&from=paste&height=162&id=ucbd3893f&name=image.png&originHeight=162&originWidth=300&originalType=binary&ratio=1&rotation=0&showTitle=false&size=38882&status=done&style=none&taskId=u632cc5fc-d32f-4af1-a050-0c9cdcdadd0&title=&width=300)<br /> ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679211365718-24623408-5bc8-446c-99d9-8e966dbf6e7d.png#averageHue=%23f5f2f0&clientId=u73b6b08b-f729-4&from=paste&height=194&id=u4a116771&name=image.png&originHeight=194&originWidth=485&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26595&status=done&style=none&taskId=u4a3bc9d7-3ff8-4a88-beb4-57ccadc92b1&title=&width=485)

<a name="q7XcO"></a>
# 注册Vue的全局组件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679211764266-c949fcc6-9621-40e6-aa81-ce2d6597f5f9.png#averageHue=%23f6f4f3&clientId=u73b6b08b-f729-4&from=paste&height=322&id=uae29fba7&name=image.png&originHeight=322&originWidth=712&originalType=binary&ratio=1&rotation=0&showTitle=false&size=86755&status=done&style=none&taskId=uc9fb4830-3d81-4b3f-86f7-27df3f27a49&title=&width=712)
```html
<div id="app">
    <!-- 1.内容一: -->
    <product-item></product-item>
    
    <!-- 2.内容二: -->
    <product-item></product-item>

    <!-- 3.内容三: -->
    <product-item></product-item>
  </div>


  <!-- 组件product-item的模板 -->
  <template id="item">
    <div class="product">
      <h2>我是商品</h2>
      <div>商品图片</div>
      <div>商品价格: <span>¥9.9</span></div>
      <p>商品描述信息, 9.9秒杀</p>
    </div>
  </template>
  
  <script src="../lib/vue.js"></script>
  <script>
    /*
      1.通过app.component(组件名称, 组件的对象)
      2.在App组件的模板中, 可以直接使用product-item的组件
    */

    // 1.组件: App组件(根组件)
    const App = {}

    // 2.创建app
    const app = Vue.createApp(App)

    // 3.注册一个全局组件
    // product-item全局组件
    app.component("product-item", {
      template: "#item"
    })

    // 2.挂载app
    app.mount("#app")
  </script>
```
<a name="GWEaH"></a>
## 全局组件的逻辑
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679212920174-eecc56bf-5a5a-4c41-8cbe-c09dccca8639.png#averageHue=%23929b91&clientId=u73b6b08b-f729-4&from=paste&height=331&id=u0bbab804&name=image.png&originHeight=331&originWidth=337&originalType=binary&ratio=1&rotation=0&showTitle=false&size=62368&status=done&style=none&taskId=u72cce6dc-ce0b-43d6-b3dd-4aa3cc69965&title=&width=337)
```html
<!-- <home-nav></home-nav> -->
    <HomeNav></HomeNav>
    <home-nav></home-nav>

    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
  </div>

  <template id="nav">
    <h2>我是应用程序的导航</h2>
  </template>

  <template id="product">
    <div class="product">
      <h2>{{title}}</h2>
      <p>商品描述, 限时折扣, 赶紧抢购</p>
      <p>价格: {{price}}</p>
      <button @click="favarItem">收藏</button>
    </div>
  </template>
  
  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const app = Vue.createApp({
      // data: option api
      data() {
        return {
          message: "Hello Vue"
        }
      },
    })

    // 2.注册全局组件
    app.component("product-item", {
      template: "#product",
      data() {
        return {
          title: "我是商品Item",
          price: 9.9
        }
      },
      methods: {
        favarItem() {
          console.log("收藏了当前的item")
        }
      }
    })

    app.component("HomeNav", {
      template: "#nav"
    })

    // 2.挂载app
    app.mount("#app")
  </script>
```
<a name="j4aoi"></a>
## 组件的名称
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679212993696-252073f0-4c51-41c2-a341-e86f01d9ec30.png#averageHue=%23cacaca&clientId=u73b6b08b-f729-4&from=paste&height=18&id=u07921a18&name=image.png&originHeight=18&originWidth=550&originalType=binary&ratio=1&rotation=0&showTitle=false&size=16112&status=done&style=none&taskId=u63bf216c-ac62-42f7-9f5c-6332c5fa91d&title=&width=550)

1. 使用kebab-case（短横线分隔符）
2. 使用PascalCase（驼峰标识符）

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679213109005-4583b99e-2663-43ab-b6da-e93edcc5e6b9.png#averageHue=%23f4f4f4&clientId=u73b6b08b-f729-4&from=paste&height=318&id=uc2afdeda&name=image.png&originHeight=318&originWidth=694&originalType=binary&ratio=1&rotation=0&showTitle=false&size=100674&status=done&style=none&taskId=u233590f4-2b61-45e9-bff2-b52c229c9eb&title=&width=694)

<a name="DeqW1"></a>
# 注册Vue的局部组件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679213461142-acecd1c0-4c65-41ef-9810-83fe95c725aa.png#averageHue=%23f0eae9&clientId=u73b6b08b-f729-4&from=paste&height=135&id=u31d41b8a&name=image.png&originHeight=135&originWidth=719&originalType=binary&ratio=1&rotation=0&showTitle=false&size=90259&status=done&style=none&taskId=ueee10e13-ff7e-43e6-9e0f-9010199869c&title=&width=719)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679213544295-fdb0aa3a-1dcf-4a50-ad8e-049551d61e49.png#averageHue=%23f2eeee&clientId=u73b6b08b-f729-4&from=paste&height=125&id=ub4cedf08&name=image.png&originHeight=125&originWidth=664&originalType=binary&ratio=1&rotation=0&showTitle=false&size=58201&status=done&style=none&taskId=u63c80d17-abe4-45d9-acfc-979c1b1a150&title=&width=664)
```html
<div id="app">
    <home-nav></home-nav>

    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
  </div>
  
  <template id="product">
    <div class="product">
      <h2>{{title}}</h2>
      <p>商品描述, 限时折扣, 赶紧抢购</p>
      <p>价格: {{price}}</p>
      <button>收藏</button>
    </div>
  </template>

  <template id="nav">
    <div>-------------------- nav start ---------------</div>
    <h1>我是home-nav的组件</h1>
    <product-item></product-item>
    <div>-------------------- nav end ---------------</div>
  </template>

  <script src="../lib/vue.js"></script>
  <script>
    // 1.创建app
    const ProductItem = {
      template: "#product",
      data() {
        return {
          title: "我是product的title",
          price: 9.9
        }
      }
    }

    // 1.1.组件打算在哪里被使用
    const app = Vue.createApp({
      // components: option api
      components: {
        ProductItem,
        HomeNav: {
          template: "#nav",
          components: {
            ProductItem
          }
        }
      },
      // data: option api
      data() {
        return {
          message: "Hello Vue"
        }
      }
    })

    // 2.挂载app
    app.mount("#app")
  </script>
```
<a name="Fxf7K"></a>
# Vue的开发模式解析
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679214215301-cc2e4dff-5c22-4794-92de-ec5a884c2032.png#averageHue=%23f3eeed&clientId=u73b6b08b-f729-4&from=paste&height=287&id=u986d36f4&name=image.png&originHeight=287&originWidth=697&originalType=binary&ratio=1&rotation=0&showTitle=false&size=132263&status=done&style=none&taskId=u7babdeb8-06bd-4290-ae2a-001ce763328&title=&width=697)
<a name="mwBoU"></a>
## 单文件的特点
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679214419511-df79336e-1fe0-4c73-82e9-06d6c4925340.png#averageHue=%23e3e2df&clientId=u73b6b08b-f729-4&from=paste&height=317&id=u4b49f1af&name=image.png&originHeight=317&originWidth=621&originalType=binary&ratio=1&rotation=0&showTitle=false&size=66773&status=done&style=none&taskId=u00e814ef-71ff-4b47-a5b5-fa35434005d&title=&width=621)

