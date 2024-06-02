<script>

import axios from 'axios';
import {store} from './store.js';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default {
  components:{
      Header,
      Main,
      Footer,
      
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
        this.store.projects = result.data.data;
        this.store.links = result.data.links;
        
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
  <div>
    <Header/> 
    <Main @emitNext='getApi()'/>
    <Footer/> 
  </div>
</body>
</template>

<style lang="scss" scoped>

</style>