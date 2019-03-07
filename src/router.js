import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import SignIn from './views/SignIn.vue'
import Apply from './views/Apply.vue'
import store from './store'

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
    }
  ]
})

router.beforeEach((to, from, next) => {
  const applicantPages = ['/apply']
  const applicantPage = applicantPages.includes(to.path)

  if (applicantPage && (!store.getters.isLoggedIn || !store.getters.isApplicant)) {
    return next('/');
  }

  next();
})

export default router