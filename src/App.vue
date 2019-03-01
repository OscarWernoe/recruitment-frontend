<template>
  <div id="app">
    <header-component></header-component>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent
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
  margin-top: 80px;
}

main {
  max-width: 900px;
  margin: auto;
}
</style>