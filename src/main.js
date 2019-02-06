import Vue from 'vue'
import VueResource from 'vue-resource'; // To get access to VueResource
import App from './App.vue'

Vue.use(VueResource); // To be able to use VueResource
// Question: what root can I use to test this?
// Vue.http.options.root = 'http://localhost/'; //The root URL

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
