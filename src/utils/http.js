// 导入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import 'element-plus/es/components/message/style/css'
import router from '@/router'
// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})
//拦截器
httpInstance.interceptors.request.use(
  config => {
    //1.获取token
    const userStore = useUserStore()
    //2.添加到请求头
    const token = userStore.userInfo?.token
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    //3.返回配置对象
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
httpInstance.interceptors.response.use(
  response => {
    return response
  },
  //这得写error，否则会报错，因为error是axios的错误对象
  error => {
    // 错误提示（安全写法）
    const msg = error.response.data.message || '请求失败'
    const userStore = useUserStore()
    ElMessage({
      type: 'warning',
      message: msg
    })
    //401错误处理：清空用户数据并跳转登录页
    if (error.response.status === 401) {
      // 清空用户数据
      userStore.clearUserInfo()
      // 跳转登录页
      router.push('/login')
    }
    return Promise.reject(error)
  }

)
export default httpInstance