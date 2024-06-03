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

  <div class="main py-5 row">

    <div class="col-9">

      <ProjectList/>
    </div>
    <div class="col-3">
      <ProjectFilter/>
    </div>

  </div>

</body>

</template>

<style lang="scss" scoped>
body{
  
  background-color: #080808;

  font-family: "Roboto Mono", monospace;
}

</style>