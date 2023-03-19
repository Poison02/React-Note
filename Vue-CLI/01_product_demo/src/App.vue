<template>
  <h2>{{ title }}</h2>

  <product-item></product-item>
</template>

<script>
import ProductItem from './components/ProductItem.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "Hello! 我是App！！！"
    }
  },
  // 局部注册组件
  components: {
    ProductItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
