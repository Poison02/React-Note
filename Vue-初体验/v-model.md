<a name="XF1YI"></a>
# v-model的基本使用
表单提交：

- 比如在用户登录、注册时需要提交账号密码
- 比如用户检索、创建、更新信息时，提交一些数据
- ...

这些都要求我们在代码逻辑中获取到用户提交的数据，通常使用`v-model`来完成：

- `v-model`可以在表单input、textarea以及select元素上创建双向数据绑定
- 它会根据控件类型自动选取正确的方法来更新元素
- v-model实际上是语法糖，它负责监听用户输入的事件类更新数据，并在某些情况下做处理
```html
<div id="app">
  <input type="text" :value="message" @input="changeInput"/>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        message: "Hello Vue"
      }
    },
    methods: {
      changeInput(event) {
        this.message = event.target.value
      }
    }
  })
  app.mount("#app")
</script>
```
上面是使用`v-bind`加`@input`实现双向绑定，改变input中的值，data中的message也会改变<br />下面使用`v-model`
```html
<div id="app">
  <input type="text" v-model="message"/>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        message: "Hello Vue"
      }
    }
  })
  app.mount("#app")
</script>
```
也可实现一样的功能，且更方便。<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679145229495-9809934b-a1ad-44c5-a874-b9fe478e1a6e.png#averageHue=%23f1eae9&clientId=u1455870c-7172-4&from=paste&height=78&id=ua920c274&name=image.png&originHeight=78&originWidth=485&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30415&status=done&style=none&taskId=u8188d8bd-bc97-4029-ad98-c0a871db380&title=&width=485)

