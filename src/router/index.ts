import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import GrandExchangeView from '../views/GrandExchange.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/grandexchange',
    name: 'GrandExchange',
    component: GrandExchangeView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
