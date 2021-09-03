import axios from 'axios'
// axios.defaults.withCredentials = true; // 配合后端拿到cookie中的值（打包后放到服务器上则不需要）
console.warn(process.env)
import { Message } from 'ant-design-vue';
import router from '../router'


const service = axios.create({
  baseURL: process.env.VUE_APP_BAES_URL,
  timeout: 3000,
})

// request interceptor(请求拦截器)
service.interceptors.request.use(request => {
  request.headers['Authorization'] = localStorage.getItem('token')
  const { url, headers } = request
  var urlArr = ['/captcha', '/login', '/regist']
  if (urlArr.includes(url)) return Promise.resolve(request)
  const token = headers.Authorization
  if (!token) {
    Message.error('获取token失败')
    setTimeout(() => {
      router.replace({ path: '/login' })
    }, 1000);
  }
  return Promise.resolve(request)
}, error => {
  Message.error('请求异常')
  console.error('request-err：', error)
  Promise.reject(error)
})

// respone interceptor(应答拦截器)
service.interceptors.response.use(response => {
  const { data } = response
  if (data.code === '401') {
    Message.error(data.msg)
    setTimeout(() => {
      router.replace({ path: '/login' })
    }, 1000)
  }
  if (data.name === "TokenExpiredError") {
    Message.error('token已过期')
    localStorage.clear();
    setTimeout(() => {
      router.replace({ path: "/login" })
    }, 1000);
  }
  return Promise.resolve(response);
}, error => {
  Message.error('接口异常')
  console.error('response-err：', error)
  Promise.reject(error)
})

export default service