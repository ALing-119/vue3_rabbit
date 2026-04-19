import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'


export const useUserStore = defineStore('user',()=>{
    //1.定义state管理用户数据
    const userInfo = ref(null)
    //2.定义actions管理用户数据
    const getUserInfo = async ({account,password}) =>{
        const res = await loginAPI({account,password})
        userInfo.value = res.data.result
    }
    //退出时清空用户数据
    const clearUserInfo = () =>{
        userInfo.value = null
    }
    //3.导出userStore
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true
    }
)
