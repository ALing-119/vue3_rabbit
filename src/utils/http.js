// 导入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import 'element-plus/es/components/message/style/css'
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
  error => {
    return Promise.reject(error)
  },
  //这得写error，否则会报错，因为error是axios的错误对象
  res=>res.data.result,error=>{
    ElMessage({
      type:'warning',
      message: error.response.data.message
    })
    return Promise.reject(error)
  }

)
export default httpInstance