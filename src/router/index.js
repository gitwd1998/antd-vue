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
