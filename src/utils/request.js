import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs;
const baseURL='192.168.2.194'

// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 15000 // 请求超时时间
})

// 添加请求拦截器
service.interceptors.request.use(config => {
  config.headers['Content-Type']='application/x-www-form-urlencoded; charset=UTF-8';
  if(config.method=='post'){
      console.log(config)
  }
 /* if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }*/
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    //此处添加弹窗
    return res
  },
  error => {
    console.log('err' + error)// for debug
    //此处添加弹窗
    return Promise.reject(error)
  }
)

export default service
