import { createRouter, createWebHistory } from 'vue-router'
import LevelList from '../pages/LevelList.vue'
import FrontPage from '../pages/FrontPage.vue'

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/LevelList',
    name: 'LevelList',
    component: LevelList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
