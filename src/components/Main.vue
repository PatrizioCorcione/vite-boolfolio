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
  <div class="container">
    <div class="row row-cols-3">
      <div class="col"
        v-for="project in store.projects" 
        :key="project.id"
        >

        <ProjectCard 
        :titleP="project.title"
        
        :descriptionP="project.description"
        :githubP="project.github"
        />
      </div>
      <div>
        <button
        @click="store.page++,
        $emit('emitNext')"
        v-if="this.store.page != this.store.last_page"
        
        > avanti</button>
        <button v-if="this.store.page > 1"
        @click="store.page--,
        $emit('emitPrev')"
        
        > indietro</button>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>

</style>