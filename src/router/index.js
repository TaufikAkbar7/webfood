import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Drinks from '../views/Drinks.vue'
import RecipeFoods from '../views/RecipeFoods.vue'
import RecipeDrinks from '../views/RecipeDrinks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods 
  },
  {
    path: '/foods/:id',
    name: 'RecipeFoods',
    component: RecipeFoods
  },
  {
    path: '/drinks',
    name: 'Drinks',
    component: Drinks
  },
  {
    path: '/drinks/:id',
    name: 'RecipeDrinks',
    component: RecipeDrinks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
