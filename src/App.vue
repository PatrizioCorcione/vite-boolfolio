<script>

import {store} from './store.js';
import Main from './components/Main.vue';
import Header from './components/Header.vue';

export default {
  components:{
      Header,
      Main,
    },
  data() {
    return {
      store,
    }
  },
}

</script>

<template>

  <Header/> 

    <router-view></router-view>    
  

</template>

<style lang="scss">

@use './assets/scss/partials/general.scss';


</style>