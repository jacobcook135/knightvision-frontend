import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/PlayView.vue')
    },
    {
      path: '/players',
      name: 'players',
      component: () => import('../views/PlayersView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/players/:id',
      name: 'player',
      component: () => import('../views/PlayerView.vue')
    }
  ]
})

export default router
