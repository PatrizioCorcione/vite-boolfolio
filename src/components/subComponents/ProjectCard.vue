<script>
export default {
  
  props:{
    titleP: String,

    descriptionP: String,
    githubP: String,
  },
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{titleP}}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{typeP}}</h6>
      <p class="card-text">{{descriptionP}}</p>
      <a href="#" class="card-link">{{githubP}}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>