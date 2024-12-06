import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseLayout from '@/layouts/base.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        {
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ]
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ],
})

export default router
