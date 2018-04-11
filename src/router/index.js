import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index/index'
import '@/assets/css/public.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
