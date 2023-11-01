import VueRouter from 'vue-router'
import Vue, { computed } from 'vue'
import HomeView from '../views/index.vue'

Vue.use(VueRouter)

const component = {
  render: () => h('RouterView'),
}

export const routes = [
  {
    path: '/',
    name: '/index',
    component: HomeView,
    meta: {
      title: '最新推荐',
      icon: 'i-iconoir:home',
    },
  },
  {
    path: '/classroom',
    name: '/classroom',
    component: () => import('@/views/classroom.vue'),
    meta: {
      title: '老年课堂',
    },
  },
  // {
  //   path: '/health',
  //   name: '/health',
  //   component: () => import('@/views/health.vue'),
  //   meta: {
  //     title: '老年养生',
  //   },
  // },
  {
    path: '/service',
    component,
    meta: {
      title: '居家服务',
    },
    children: [
      {
        path: '',
        component: () => import('@/views/service/index.vue'),
        meta: {
          title: '居家服务',
        },
      },
      {
        path: 'service',
        component: () => import('@/views/service/service.vue'),
        meta: {
          title: '居家守护',
        },
      },
      {
        path: 'service0',
        component: () => import('@/views/service/service0.vue'),
        meta: {
          title: '坐席服务',
        },
      },
      {
        path: 'service1',
        component: () => import('@/views/service/service1.vue'),
        meta: {
          title: '智慧穿戴',
        },
      },
      {
        path: 'service2',
        component: () => import('@/views/service/service2.vue'),
        meta: {
          title: '分钟诊断',
        },
      },
      {
        path: 'service3',
        component: () => import('@/views/service/service3.vue'),
        meta: {
          title: '适老化改造',
        },
      },
      {
        path: 'service4',
        component: () => import('@/views/service/service4.vue'),
        meta: {
          title: '安防服务',
        },
      },
    ],
  },
  {
    path: '/policy',
    name: '/policy',
    component: () => import('@/views/policy.vue'),
    meta: {
      title: '政策宣讲',
    },
  },
  {
    path: '/inquiry',
    name: '/inquiry',
    component: () => import('@/views/inquiry.vue'),
    meta: {
      title: '专家问诊',
    },
  },
  {
    path: '/other',
    name: '/other',
    component: () => import('@/views/other.vue'),
    meta: {
      title: '其他',
    },
  },
  {
    path: '/mine',
    name: '/mine',
    component: () => import('@/views/mine.vue'),
    meta: {
      title: '个人中心',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// router.afterEach(()=>{
//   setTimeout(()=>{
//     window.focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
//   })
// })

export default router

export function useRouter() {
  return router
}

export function useRoute() {
  return computed(
    () => router.currentRoute,
  )
}
