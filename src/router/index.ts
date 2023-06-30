import VueRouter from 'vue-router'
import HomeView from '../views/index.vue'
import Vue from 'vue'

Vue.use(VueRouter)

export const routes= [
  {
    path: '/',
    name: '/index',
    component: HomeView,
    meta:{
      title: '最新推荐',
      icon: 'i-iconoir:home'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

export default router
