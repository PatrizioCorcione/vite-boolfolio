<script>

import {store} from '../store'

export default{
  data() {
    return {
      store,

    }
  },
}

</script>

<template>
  <div>
    <ul>
      <li v-for="project in store.projects" :key="project.id">{{ project.title }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>