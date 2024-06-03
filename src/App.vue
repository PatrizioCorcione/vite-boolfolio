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
  
}

</script>

<template>
<body>
  <Header/> 
  <main>

    <router-view></router-view>
    
  </main>
  <Footer/> 
</body>
</template>

<style lang="scss" scoped>
main{
  
  font-family: "Roboto Mono", monospace;
  background-color: #080808;
}

</style>