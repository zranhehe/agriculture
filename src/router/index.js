import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/home/Index'
import Login from '@/login/Index'
import User from '@/user/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', 
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
