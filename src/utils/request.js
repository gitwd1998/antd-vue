import axios from 'axios'
// axios.defaults.withCredentials = true // 配合后端拿到cookie中的值(打包后放到服务器上则不需要)
console.warn(process.env)
import { Message } from 'ant-design-vue'
import router from '../router'
import store from '../store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BAES_URL,
  timeout: 3000,
  headers: { 'Authorization': store.getters.getToken || '' },
})

// 接口白名单不需要校验token的api
const apiwhitelist = ['/captcha', '/login', '/regist']

// request interceptor(请求拦截器)
service.interceptors.request.use(request => {
  const { url, headers } = request
  if (apiwhitelist.includes(url)) return Promise.resolve(request)
  const token = headers.Authorization
  if (token) return Promise.resolve(request)
  Message.error('获取token失败')
  router.replace({ path: '/login' })
}, error => {
  console.error('request-error：', error)
  Promise.reject(error)
})

// respone interceptor(应答拦截器)
service.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, error => {
  console.error('response-error：', error)
  Promise.reject(error)
})

export default service