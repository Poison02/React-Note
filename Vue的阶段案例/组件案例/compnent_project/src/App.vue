<template>
  <div class="app">
    <tab-control :titles="['衣服', '鞋子', '包包']" @tab-item-click="tabClick">
    </tab-control>
    <!-- 展示的内容 -->
    <h1>{{ products[currentIndex] }}</h1>
  </div>
</template>

<script>

import TabControl from './component/TabControl.vue';

export default {
  components: {
    TabControl
  },
  data() {
    return {
      currentIndex: -1,
      products: ["衣服页面", "鞋子页面", "包包页面"]
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style scoped></style>