<script>

import axios from 'axios';
import {store} from './store.js';
import Main from './components/Main.vue';


export default {
  components:{
      // Header,
      Main,
      // Footer,
      
    },
  data() {
    return {
      store,

    }
  },
  methods: {
    getApi(){
      this.store.character=[];
      axios.get(this.store.apiUrl)
      .then(result =>{
        this.store.projects = result.data;
        console.log(this.store.projects)})
        .catch(error => {
      console.error('There was an error!', error.message);
      })
    }
  },
  mounted() {
    this.getApi();
  },
}

</script>

<template>

  <div>
    <!-- <Header/> -->
    <Main/>
    <!-- <Footer/> -->
  </div>

</template>

<style lang="scss" scoped>

</style>