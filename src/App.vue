<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <jilian></jilian> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import mainView from './components/mainView.vue'
// import jilian from './components/a.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // mainView,
    // jilian,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
