import Homepage from '@/views/Homepage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: Homepage,
    },
  ],
})

export default router
