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
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if(err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
          resolve()
        }
        reject(err)
      })
    })
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