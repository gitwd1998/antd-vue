import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/layout' },
  { path: '/login', component: () => import('@/views/Login') },
  { path: '/regist', component: () => import('@/views/Regist') },
  {
    path: '/layout', component: () => import('@/layout'), redirect: '/home', children: [
      { path: '/home', component: () => import('@/views/Home') },
      { path: '/table', component: () => import('@/views/Table') },
      { path: '/list', component: () => import('@/views/List') },
      // 导航
      {
        path: '/navigation', component: () => import('@/views/navigation'), children: [
          { path: '/navigation/affix', component: () => import('@/views/navigation/Affix') },
          { path: '/navigation/breadcrumb', component: () => import('@/views/navigation/Breadcrumb') },
          { path: '/navigation/dropdown', component: () => import('@/views/navigation/Dropdown') },
          { path: '/navigation/menu', component: () => import('@/views/navigation/Menu.js') },
        ]
      },

    ]
  },
  { path: '/Unusual', component: () => import('@/views/Unusual') },
  { path: '*', component: () => import('@/views/Error') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
