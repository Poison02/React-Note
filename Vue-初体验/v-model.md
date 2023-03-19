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
<a name="DHPvB"></a>
# v-model绑定textarea
```html
<div id="app">
  <textarea cols="30" rows="30" c-model="content"></textarea>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        content: ""
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="uDxzX"></a>
# v-model绑定checkbox
```html
<div id="app">
<!--   单选框 -->
  <label for="agree">
    <input type="checkbox" id="agree" v-model="isAgree"/>同意协议
  </label>
  <h2>单选框: {{isAgree}}</h2>

<!--   多选框 
      注意，多选框中，必须明确的绑定value值
  -->
  <div class="hobbies">
    <label for="">
    	<input type="checkbox" id="sing" v-model="hobbies" value="sing"/>唱
    </label>
    <label for="">
    	<input type="checkbox" id="jump" v-model="hobbies" value="jump"/>跳
    </label>
		<label for="">
    	<input type="checkbox" id="rap" v-model="hobbies" value="rap"/>Rap
    </label>
    <label for="">
    	<input type="checkbox" id="basketball" v-model="hobbies" value="basketball"/>篮球
  	</label>
  </div>
  
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        isAgree: false,
        hobbies: []
      }
    }
  })
  app.mount("#app")
</script>
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679207836805-5064d7a1-97e7-4284-b663-3ff891d67cbc.png#averageHue=%23f4f1f0&clientId=u6a270007-7242-4&from=paste&height=192&id=u5f123e0c&name=image.png&originHeight=192&originWidth=465&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55271&status=done&style=none&taskId=ub470a824-a3a3-4343-a597-6b9c06a273f&title=&width=465)
<a name="o85Hp"></a>
# v-model绑定radio
```html
<div id="app">
  <div class="gender">
    <label for="male">
      <input type="radio" id="male"
        v-model="gender" value="male"/>男 <br/>
    </label>
    <label for="female">
      <input type="radio" id="female"
        v-model="gender" value="female"/>女 <br/>
    </label>
  </div>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        gender: ""
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="bofqs"></a>
# v-model绑定select
```html
<div id="app">
<!--   单选 -->
  <select v-model="hobby">
    <option value="sing">唱</option>
    <option value="jump">跳</option>
    <option value="rap">Rap</option>
    <option value="basketball">篮球</option>
  </select>
	<h2>单选: {{hobby}}</h2>
<!--   多选 -->
  <select mutiple size="2" v-model="hobbies">
    <option value="sing">唱</option>
    <option value="jump">跳</option>
    <option value="rap">Rap</option>
    <option value="basketball">篮球</option>
  </select>
  <h2>多选：{{hobbies}}</h2>
</div>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const app = Vue.createApp({
    // 使用插值语法 {{title}}
    data: function(){
      return {
        hobby: "",
        hobbies: []
      }
    }
  })
  app.mount("#app")
</script>
```
<a name="QgpJN"></a>
# v-model的值绑定
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679209438084-d7ecb3d5-4d06-42cc-b2c9-ef499db19113.png#averageHue=%23f6f2f1&clientId=u6a270007-7242-4&from=paste&height=178&id=uf1aeaf05&name=image.png&originHeight=178&originWidth=718&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71903&status=done&style=none&taskId=u39e31b3b-4306-4199-a72b-ffd4b743f1b&title=&width=718)
<a name="XdG47"></a>
# v-model的修饰符
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679209798683-2acf30e4-5c9d-4026-9139-f1bfd59ebb85.png#averageHue=%23f3f2f2&clientId=u6a270007-7242-4&from=paste&height=111&id=u4aefbb03&name=image.png&originHeight=111&originWidth=707&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46219&status=done&style=none&taskId=ue4a57e3d-131e-4fdc-98e5-7b6cbe13653&title=&width=707)<br />`v-model.lazy`<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679210146744-861bc10e-3475-46cf-8855-1b21b0fbb101.png#averageHue=%23d0a89f&clientId=u6a270007-7242-4&from=paste&height=270&id=u5dfe8ae3&name=image.png&originHeight=270&originWidth=564&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104374&status=done&style=none&taskId=uef9b1cac-78cd-44ce-9f8f-4bbe907f123&title=&width=564)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679210181567-7ebb09e0-7fa4-4303-b537-4119ee248990.png#averageHue=%23d7cdbd&clientId=u6a270007-7242-4&from=paste&height=130&id=u3230dddb&name=image.png&originHeight=130&originWidth=558&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46600&status=done&style=none&taskId=uca7b437b-1320-4d2c-a3ee-93f15360d34&title=&width=558)<br />`v-model.number`

