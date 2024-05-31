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
      axios.get(this.store.apiUrl,{
        params:{
          page: store.page,
          
        }
      })
      
      .then(result =>{
        this.store.projects = result.data.data;
        this.store.last_page = result.data.last_page;
        console.log(this.store.last_page);
        console.log(this.store.page)})
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
    <Main @emitNext = 'getApi' @emitPrev='getApi'/>
    <!-- <Footer/> -->
  </div>

</template>

<style lang="scss" scoped>

</style>