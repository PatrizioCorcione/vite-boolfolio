<script>
export default {
  
  props:{
    titleP: String,
    typeP:String,
    descriptionP: String,
    githubP: String,
    technoP: Object,
  },
  mounted() {
    console.log('Received props:', this.technoP);
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{titleP}}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{typeP}}</h6>
      
      <span v-for="(techno, index) in technoP" 
      :key="index"
      class="badge text-bg-primary"
       >
       {{ techno.technologies}}</span>
      <p class="card-text">{{descriptionP}}</p>
      <a href="#" class="card-link">{{githubP}}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>