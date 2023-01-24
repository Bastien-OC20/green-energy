import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/solaire',
    name: 'solaire',
    component: () => import( '../views/SolaireView.vue')
  },
  {
    path: '/eolien',
    name: 'eolien',
    component: () => import( '../views/EolienView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
