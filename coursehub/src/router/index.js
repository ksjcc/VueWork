// ===== 路由配置：共 4 个页面 =====
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/courses', name: 'courses', component: () => import('../views/CoursesView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  // 兜底路由：任意未匹配路径进入 404 页面
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
