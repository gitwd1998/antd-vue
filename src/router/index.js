import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'root', redirect: '/layout' },
  { path: '/login', name: 'login', component: () => import('@/views/Login') },
  { path: '/regist', name: 'regist', component: () => import('@/views/Regist') },
  {
    path: '/layout', component: () => import('@/layout/index.js'), children: [
      { path: '/layout', name: 'layout', component: () => import('@/views') },
      // 通用
      { path: '/general/button', name: 'button', component: () => import('@/views/general/Button') },
      { path: '/general/icon', name: 'icon', component: () => import('@/views/general/Icon') },
      // 导航
      { path: '/navigation/affix', name: 'affix', component: () => import('@/views/navigation/Affix') },
      { path: '/navigation/breadcrumb', name: 'breadcrumb', component: () => import('@/views/navigation/Breadcrumb') },
      { path: '/navigation/dropdown', name: 'dropdown', component: () => import('@/views/navigation/Dropdown') },
      { path: '/navigation/menu', name: 'menu', component: () => import('@/views/navigation/Menu.js') },
      // 数据输入
      { path: '/dataEntry/circle', name: 'circle', component: () => import('@/views/dataEntry/Circle') },
      // 数据显示
      { path: '/dataDisplay/list', name: 'list', component: () => import('@/views/dataDisplay/List') },
      { path: '/dataDisplay/table', name: 'table', component: () => import('@/views/dataDisplay/Table') },
      // 反馈

      // 其他

      // 插件

      // 待开放

    ]
  },
  { path: '/Unusual', name: 'Unusual', component: () => import('@/views/Unusual') },
  { path: '*', component: () => import('@/views/Error') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
