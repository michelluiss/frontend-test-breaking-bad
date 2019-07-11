import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

// Application routes

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'characters',
      component: App,
      menu: false
    }
  ]
})

export default router
