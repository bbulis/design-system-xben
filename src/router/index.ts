import { createRouter, createWebHistory } from 'vue-router'
import InputView from '@/views/InputView.vue'
import MainView from '@/views/MainView.vue'
import ButtonView from '@/views/ButtonView.vue'
import TextView from '@/views/TextView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
    {
      path: '/input',
      name: 'input',
      component: InputView,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonView,
    },
    {
      path: '/text',
      name: 'text',
      component: TextView,
    },
  ],
})

export default router
