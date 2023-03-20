<template>
    <div>App</div>
    <h2>{{ price }}</h2>
    <app-header></app-header>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
    name: "App",
    data() {
      return {
        price: 999
      }
    },
    components: {
      AppHeader
    }
}
</script>

<style scoped>
    
</style>