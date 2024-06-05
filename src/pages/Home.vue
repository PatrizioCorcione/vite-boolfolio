<script>

import axios from 'axios';
import {store} from '../store';
import ProjectList from '../components/subComponents/ProjectList.vue';
import ProjectFilter from '../components/subComponents/ProjectFilter.vue';
import Loader from '@/components/subComponents/Loader.vue';
import Hero from '../components/subComponents/Hero.vue';



export default {
  components:{
      ProjectList,
      ProjectFilter,
      Loader,
      Hero,
    },
  data() {
    return {
      store,
      itsReady:false
    }
  },
  methods: {
    getApi(type = 'project'){
      axios.get(this.store.apiUrl + type )
      
      .then(result =>{
        this.itsReady = true
        switch (type) {
          case 'technology':
          this.store.technologies = result.data;

            break;
          case 'type':
          this.store.types = result.data;

            break;
        
          default:
          this.store.projects = result.data;

            break;
        }
      })
    },
    getSearch(){
      axios.get(this.store.apiUrl + 'project/search/'+ this.store.toSearch)
      .then(result =>{
        this.store.projects = result.data
      })
    },
    
  },
  mounted() {
    this.getApi();
    this.getApi('type');
    this.getApi('technology');
  },
}

</script>

<template>

  <div class="container-xl">
    <Loader v-if="!this.itsReady" />
    <div v-else class="row ">
      <Hero/>
      <div class="col-9">
        <ProjectList @search="getSearch()"/>
      </div>
      <div class="col-3">
        <ProjectFilter/>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.container-xl {
  position: relative;
  min-height: 100vh; 
  padding-top: 20px; 
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px; /* Altezza del footer */
  background-color: #080808;
  color: white;
  text-align: center;
  line-height: 100px; 
}
</style>