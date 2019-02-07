import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'; // To get access to VueResource
import App from './App.vue'

Vue.use(BootstrapVue);
Vue.use(VueResource); // To be able to use VueResource
// Question: doesn't seem to take effect, why?
Vue.http.options.root = 'http://localhost:8080/';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
