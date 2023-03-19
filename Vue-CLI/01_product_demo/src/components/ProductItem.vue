<template>
  <div class="product">
    <h2>商品标题</h2>
    <p>我是商品描述</p>
    <div>价格：{{ price }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 999
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    color: red;
  }
</style>
