import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Show from './pages/Show.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component:Home
    },
    {
      path:'/chi-siamo',
      name:'about',
      component:About
    },
    {
      path:'/info-progetto',
      name:'show',
      component:Show
    },
    {
      path:'/:pathMatch(.*)*',
      name:'error404',
      component:Error404
    }
  ]
})
export {router}