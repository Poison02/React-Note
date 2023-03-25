<a name="im2PZ"></a>
# 认识插槽Slot
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679728708911-9178543f-0cf7-4f5e-a9e1-7fa3fe73e7d8.png#averageHue=%23f1eceb&clientId=ue9df5383-2752-4&from=paste&height=263&id=u2a6b0962&name=image.png&originHeight=263&originWidth=1191&originalType=binary&ratio=1&rotation=0&showTitle=false&size=199063&status=done&style=none&taskId=u17a14d90-96ce-442f-be98-87860f56ca0&title=&width=1191)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679728736433-2d7b80c6-4f4a-4329-940c-782999ca219d.png#averageHue=%23ede9e9&clientId=ue9df5383-2752-4&from=paste&height=388&id=uf3dea9f0&name=image.png&originHeight=388&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=176414&status=done&style=none&taskId=u233627a8-0e26-40a5-89b4-09fe6f68cea&title=&width=846)

<a name="KCny3"></a>
# 插槽Slot基本使用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679728994559-00fe9e8c-3953-441a-8a4b-87f001c7d829.png#averageHue=%23f0eae9&clientId=ue9df5383-2752-4&from=paste&height=202&id=u2d2add85&name=image.png&originHeight=202&originWidth=866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=117084&status=done&style=none&taskId=u5c693a35-3faa-4a3e-81d3-fe6d2ce8de2&title=&width=866)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679729004466-06c776ae-9ce6-4aff-9e34-8e843c8f8350.png#averageHue=%23f3eae8&clientId=ue9df5383-2752-4&from=paste&height=185&id=ud8780133&name=image.png&originHeight=185&originWidth=795&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109135&status=done&style=none&taskId=u6d763c02-aa47-4548-816f-cbf3ca2eed2&title=&width=795)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679729617630-6d4a5429-9596-40f1-af49-848d41f2251c.png#averageHue=%23ebe9e9&clientId=ue9df5383-2752-4&from=paste&height=120&id=u6be84eaf&name=image.png&originHeight=120&originWidth=1035&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73928&status=done&style=none&taskId=u4b8cfd22-01d4-474a-8c0b-2368e47d8c4&title=&width=1035)
```vue
<template>
	<div class="app">
		<!-- 1.内容是button -->
		<show-message title="哈哈哈">
			<button>我是按钮元素</button>
		</show-message>

		<!-- 2.内容是超链接 -->
		<show-message>
			<a href="#">百度一下</a>
		</show-message>

		<!-- 3.内容是一张图片 -->
		<show-message>
			<img src="@/img/kobe02.png" alt="">
		</show-message>

		<!-- 4.内容没有传递 -->
		<show-message></show-message>
	</div>
</template>

<script>
	import ShowMessage from './ShowMessage.vue'

	export default {
		components: {
			ShowMessage
		}
	}
</script>

<style scoped>
</style>

```
```vue
<template>
  <h2>{{ title }}</h2>
  <div class="content">
    <slot>
      <p>我是默认内容, 哈哈哈</p>
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "我是title默认值"
      }
    }
  }
</script>

<style scoped>
</style>
```
<a name="MOOrt"></a>
# 具名插槽Slot使用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679730099663-adbd1893-df2d-4459-86a1-ed7a4027dfd8.png#averageHue=%23a7b5b1&clientId=ue9df5383-2752-4&from=paste&height=608&id=u68fb1074&name=image.png&originHeight=608&originWidth=1171&originalType=binary&ratio=1&rotation=0&showTitle=false&size=510814&status=done&style=none&taskId=u7b042b6b-15c5-47d8-a667-4745566765e&title=&width=1171)<br />![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679730332496-9aa024a4-cbbe-46f9-9d4f-139aaf01d8b0.png#averageHue=%23838c85&clientId=ue9df5383-2752-4&from=paste&height=633&id=u28972f5a&name=image.png&originHeight=633&originWidth=872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=270603&status=done&style=none&taskId=u60d10f23-b149-4230-98d1-21d82baa019&title=&width=872)
```vue
<template>
  <nav-bar>
    <template #left>
      <button>{{ leftText }}</button>
    </template>

    <template #center>
      <span>内容</span>
    </template>

    <template v-slot:right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

  <!-- nav-bar只给一个插槽传入数据 -->
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>
  <button @click=" position = 'left' ">左边</button>
  <button @click=" position = 'center' ">中间</button>
  <button @click=" position = 'right' ">右边</button>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        position: "center",
        leftText: "返回"
      }
    }
  }
</script>

<style scoped>
</style>


```
```vue
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>

  <div class="other">
    <slot name="default"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left {
    width: 80px;
    background-color: orange;
  }

  .center {
    flex: 1;
    background-color: skyblue;
  }

  .right {
    width: 80px;
    background-color: aquamarine;
  }
</style>


```
`v-slot`的语法糖为：`#`
<a name="d3FSh"></a>
# 作用域插槽Slot使用
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35204765/1679731318004-d6de6651-8850-4c80-8556-397ee786571c.png#averageHue=%23efe9e9&clientId=ue9df5383-2752-4&from=paste&height=169&id=ub4d2a30a&name=image.png&originHeight=169&originWidth=660&originalType=binary&ratio=1&rotation=0&showTitle=false&size=73129&status=done&style=none&taskId=u19e43a6e-bbc0-4efd-ac56-131f8621ca0&title=&width=660)
```vue
<template>
  <div class="app">
    <!-- 1.tab-control -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick"/>

    <!-- <tab-control :titles="['流行', '最新', '优选']"/> -->

    <!-- 2.展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>

    <!-- 1.tab-control: button -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick">
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    
    <!-- 2.tab-control: a元素(重要) -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
    </template>
    </tab-control>

    <!-- 3.独占默认插槽的简写(了解) -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick">
      <template v-slot="props">
        <button>{{ props.item }}</button>
    </template>
    </tab-control>

    <!-- 4.如果只有一个默认插槽, 那么template可以省略 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']" 
                 @tab-item-click="tabItemClick"
                 v-slot="props">
      <button>{{ props.item }}</button>
    </tab-control>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageContents: [ "衣服列表", "鞋子列表", "裤子列表" ],
        currentIndex: 0
      }
    },
    methods: {
      tabItemClick(index) {
        console.log("app:", index)
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
</style>


```
```vue
<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item"
           :class="{ active: index === currentIndex }"
           @click="itemClick(index)">
        <slot :item="item" abc="cba">
          <span>{{ item }}</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    emits: ["tabItemClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit("tabItemClick", index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item.active {
    color: red;
    font-weight: 700;
  }

  .tab-control-item.active span {
    border-bottom: 3px solid red;
    padding: 8px;
  }
</style>


```
<a name="YF4GV"></a>
# 全局事件总线使用
<a name="x0xDq"></a>
# 依赖注入Provide/Inject
