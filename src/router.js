import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import SignIn from './views/SignIn.vue'
import Apply from './views/Apply.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router