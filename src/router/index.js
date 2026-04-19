import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/Layout/index.vue'
import LoginView from '@/views/Login/index.vue'
import CategoryView from '@/views/Category/index.vue'
import HomeView from '@/views/Home/index.vue'
import SubCategoryatecoryView from '@/views/SubCatecory/index.vue'
import DetailView from '@/views/Detail/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由配置
  routes: [
    {
      path: '/',
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'category/:id',
          name: 'category',
          component: CategoryView,
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: SubCategoryatecoryView,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: DetailView,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ],
  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})



export default router
