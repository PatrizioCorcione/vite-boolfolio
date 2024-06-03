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
  <div>
    <Header/> 
    <router-view></router-view>
    <Footer/> 
  </div>
</body>
</template>

<style lang="scss" scoped>
body{

  font-family: "Roboto Mono", monospace;
}

</style>