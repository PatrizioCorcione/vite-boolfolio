<script>

import axios from 'axios';
import {store} from '../store';
import ProjectList from '../components/subComponents/ProjectList.vue';
import ProjectFilter from '../components/subComponents/ProjectFilter.vue';



export default {
  components:{
      ProjectList,
      ProjectFilter,
    },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApi(type = 'project'){
      axios.get(this.store.apiUrl + type )
      
      .then(result =>{


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
    }
  },
  mounted() {
    this.getApi();
    this.getApi('type');
    this.getApi('technology');
  },
}

</script>

<template>

<body>

  <div class="container-xxl">
    
    <div class="row home">

      <div class="col-9">
  
        <ProjectList @search="getSearch()"/>
      </div>
      <div class="col-3">
        <ProjectFilter/>
      </div>
    </div>


  </div>

</body>

</template>

<style lang="scss" scoped>
body{
  background-color: #080808;
  font-family: "Roboto Mono", monospace;
  .home{
    height: 100vh;
  }
}

</style>