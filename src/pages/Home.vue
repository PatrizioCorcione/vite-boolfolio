<script>

import axios from 'axios';
import {store} from '../store';
import ProjectList from '../components/subComponents/ProjectList.vue'



export default {
  components:{
      ProjectList,
    },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApi(){
      axios.get(this.store.apiUrl)
      
      .then(result =>{
        this.store.projects = result.data;
        // this.store.links = result.data.links;
      })
    }
  },
  mounted() {
    this.getApi();
  },
}

</script>

<template>

<body>

  <div class="main py-5">

    <ProjectList/>

  </div>

</body>

</template>

<style lang="scss" scoped>
body{
  
  background-color: #080808;

  font-family: "Roboto Mono", monospace;
}

</style>