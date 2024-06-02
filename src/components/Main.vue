<script>

import {store} from '../store'
import ProjectCard from './subComponents/ProjectCard.vue'

export default{

  components: { 
    ProjectCard, 
  },

  data() {
    return {
      store,
    }
  },
}

</script>

<template>
  <div class="container main">
    <div class="row row-cols-3">
      <div class="col"
        v-for="project in store.projects" 
        :key="project.id"
        >

        <ProjectCard 
        :titleP="project.title"
        :typeP="project.type.type"
        :technoP="project.technologies"
        :descriptionP="project.description"
        :githubP="project.github"
        />
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          
          <li v-for="link in store.links" 
          :key="link.id" class="page-item" 
          @click=" store.apiUrl = link.url, $emit('emitNext')" v-html="link.label.replace('Next', '').replace('Previous', '')">
          </li>

        </ul>
      </nav>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.main{
  
  nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    ul{
      margin: 0;
      li{
        cursor: pointer;
        background-color: cornflowerblue;
        padding: 5px 15px;
        border-right: 1px solid darkcyan;
        &:last-child{
          border: none;
          border-end-end-radius: 15px;
          border-top-right-radius: 15px;
        }
        &:first-child{
          border-start-start-radius: 15px;
          border-bottom-left-radius: 15px;
        }
        &:hover{
          background-color: aqua;
        }
      }
    }
  }
}
</style>