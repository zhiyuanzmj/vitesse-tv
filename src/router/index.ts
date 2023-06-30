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
  {
    path: '/classroom',
    name: '/classroom',
    component: ()=>import('@/views/classroom.vue'),
    meta:{
      title: '老年课堂',
    }
  },
  {
    path: '/health',
    name: '/health',
    component: ()=>import('@/views/health.vue'),
    meta:{
      title: '老年养生',
    }
  },
  {
    path: '/service',
    name: '/service',
    component: ()=>import('@/views/service.vue'),
    meta:{
      title: '居家服务',
    }
  },
  {
    path: '/policy',
    name: '/policy',
    component: ()=>import('@/views/policy.vue'),
    meta:{
      title: '政策宣讲',
    }
  },
  {
    path: '/other',
    name: '/other',
    component: ()=>import('@/views/other.vue'),
    meta:{
      title: '其他',
    }
  },
  {
    path: '/inquiry',
    name: '/inquiry',
    component: ()=>import('@/views/inquiry.vue'),
    meta:{
      title: '专家问诊',
    }
  },
  {
    path: '/mine',
    name: '/mine',
    component: ()=>import('@/views/mine.vue'),
    meta:{
      title: '个人中心',
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes:routes
})

export default router
