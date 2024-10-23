import { createRouter, createWebHistory } from "vue-router";

import Show from './pages/Show.vue'
import Error404 from './pages/Error404.vue'
import ProjectFilter from "./components/subComponents/ProjectFilter.vue";
import Main from "./components/Main.vue";

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component:Main
    },
    {
      path:'/projects/:slug',
      name:'show',
      component:Show
    },
    {
      path: '/projects/filter/:technologies?/:types?',
      name: 'filter',
      component: ProjectFilter
    },
    {
      path:'/:pathMatch(.*)*',
      name:'error404',
      component:Error404
    }
  ],
  
})
export {router}