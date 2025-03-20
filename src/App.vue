<script setup >
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'


</script>


<template>
  <div >
    <AppHeader/>
    <router-view ></router-view>
    <AppFooter/>
  </div>
</template>


<style scoped>
  .back-button {
    position: fixed;
    top: 10px;
    left: 0%;
    padding: 8px;
  }
  

</style>
