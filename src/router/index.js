// core
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// pages
import Home from '@/components/Home'

export default new Router({
	mode: 'history', // removes hash in url
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    }
  ]
})
