<script>

import axios from 'axios';
import {store} from '../store';
import ProjectFilter from '../components/subComponents/ProjectFilter.vue';
import ProjectList from './subComponents/ProjectList.vue';
import TopProject from '../components/subComponents/TopProject.vue';
import Loader from '../components/subComponents/Loader.vue';
import AboutMe from '../components/subComponents/AboutMe.vue';
import Contact from '../components/subComponents/Contact.vue';
import Hero from '../components/subComponents/Hero.vue';
import TechnologyIcons from './subComponents/TechnologyIcons.vue';
import ArrowToTop from './subComponents/ArrowToTop.vue';




export default {
  components:{
      ProjectList,
      ProjectFilter,
      Loader,
      TopProject,
      AboutMe,
      Contact,
      Hero,
      TechnologyIcons,
      ArrowToTop
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
  },
  mounted() {
    this.getApi();
    this.getApi('type');
    this.getApi('technology');
    window.scrollTo(0, 0);
  },
}

</script>

<template>
<Loader v-if="!this.itsReady" />
<div v-else class="main">

  <Hero/>
  <AboutMe/>
  <TechnologyIcons/>
  <TopProject/>
  <ProjectList/>
  <Contact/>
  <ArrowToTop/>

</div>
  
</template>

<style lang="scss" scoped>
.main {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(22, 33, 69, 0.8), rgba(30, 30, 30, 0.7), rgba(65, 105, 225, 0.5));
}

</style>