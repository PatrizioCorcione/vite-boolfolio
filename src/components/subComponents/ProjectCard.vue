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
  <div class="card my-3">
    <div class="card-body">
      <div>
        <h5 class="card-title">{{titleP}}</h5>
      </div>
      <div>
        <h6 class="badge text-bg-dark d-block">{{typeP}}</h6>
        <span class="badge text-bg-danger"  v-if="technoP.length === 0">Nessuna tecnologia usata</span>
        <span v-for="(techno, index) in technoP" 
        :key="index"
        class="badge me-1 text-bg-primary"
         >
         {{ techno.technologies}}</span>
         <div class="my-2 text-end">
          <a :href="githubP" class="card-link text-decoration-none btn btn-outline-dark"><i class="fa-brands fa-github me-2"></i>GitHub</a>
         </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  height: 200px;
  .card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

</style>