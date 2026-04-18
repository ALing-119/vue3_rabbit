// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

// import { useIntersectionObserver } from '@vueuse/core'

import { lazyLoad } from './directives'



//// //测试接口 
// import { getCategory } from '@/apis/testAPI'

// // 调用接口
// getCategory().then(res => {
//   console.log(res)
// })



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')






////定义全局指令
app.use(lazyLoad)
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     //el:指令绑定的元素
//     //binding:指令的绑定信息
//     useIntersectionObserver(
//         el,
//         ([{ isIntersecting }]) => {
//           if (isIntersecting) {
//             el.src = binding.value
//             // console.log('图片加载完成',isIntersecting)
//           }
//         }
//     )
//   }
// })
