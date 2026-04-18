//封装分类业务相关代码
import { getTopCategoryAPI } from '@/apis/categroy'
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    const route = useRoute()
    const categoryData = ref({})
    const getCategoryData = async () => {
    const res = await getTopCategoryAPI(route.params.id)
    categoryData.value = res.data.result
    }
    //响应
    onMounted(() => {
    getCategoryData()
    })
    //路由守卫
    onBeforeRouteUpdate(async (to, from) => {
    // 必须用 to.params.id 最新参数，不能用旧的 route.params.id
    const res = await getTopCategoryAPI(to.params.id)
    categoryData.value = res.data.result
    })
    return {
    categoryData
    }
}
