<script>
export default {
  props: {
    titleP: String,
    typeP: String,
    descriptionP: String,
    githubP: String,
    technoP: Array,
    projectSlug: String
  },
  mounted() {
    
  }
}
</script>

<template>
  
  <td>
  <router-link class="text-decoration-none text-white w-100 d-lg-inline-block" :to="{name : 'show' ,params : {'slug' : projectSlug}}">
        <span class="list-title">{{ titleP }}</span>
        <span class="list-type">{{ typeP }}</span>
        <div class="mt-3">
          <span class="badge text-bg-danger" v-if="technoP.length === 0">Nessuna tecnologia usata</span>
            <span v-for="(techno, index) in technoP" :key="index" class="badge me-1 text-bg-primary">
              {{ techno.technologies }}
            </span>
        </div>
      </router-link>
    </td>
  
</template>

<style lang="scss" scoped>
td {
  text-decoration: none;
  background-color: #080808;
  color: white;
  border-bottom: 2px solid #1f1f1f;
  padding: 10px 25px;
  transition: padding 0.3s;
  &:hover {
    background-color: rgba(174, 174, 174, 0.156);
    padding: 10px 25px 10px 30px;
  }
  .link-wrapper {
    display: block; 
    height: 100%;
    color: inherit; 
  }
  .list-title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  .list-type {
    font-size: 0.7rem;
    text-transform: uppercase;
    border: 2px solid #0d6efd;
    float: inline-end;
    padding: 5px 10px;
    border-radius: 10px;
  }
}
</style>
