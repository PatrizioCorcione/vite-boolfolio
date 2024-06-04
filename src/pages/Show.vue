<script>
import axios from 'axios';
import {store} from '../store';
import Loader from '../components/subComponents/Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      store,
      project:{},
      itsReady:false
    }
  },
  methods: {
    getApi(slug){
      axios.get(this.store.apiUrl + 'project-by-slug/' + slug )
      
      .then(result =>{
        this.itsReady = true
        this.project = result.data
        console.log(result.data);
      })
    },
    
  },
  mounted() {
    this.getApi(this.$route.params.slug);
    
  },
}

</script>

<template>
  <div class="contact">
    <div class="container py-5">
      <div class="row">
        <Loader v-if="!this.itsReady"/>
        <div class="col-10 " v-else>
          
          <div class="me-5 list-div">
            
            <h1 class="list-top mb-0">{{project.title}}</h1>
            <div class="d-flex justify-content-around list-top p-2">
              <div>
                <p class="m-0">{{ project.updated_at }}</p>
  
              </div>
              <div>
                <a :href= 'project.github' class="m-0 text-decoration-none text-white btn btn-outline-secondary"><i class="fa-brands fa-github"></i> GitHub</a>
              </div>
            </div>
            <p class="p-2">{{ project.description }}</p>
            
          </div>
          
        </div>
        <div  class="col-2 list-div list-type">
          <p v-if="project.technologies == []">Nessuna tecnologia usata</p>
          <p class="list-top">{{ project.type?.type }}</p>
          <div 
          v-for="techno in project.technologies" 
          :key="techno.id"
          >
            {{ techno.technologies }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact{
  height: 100vh;
  text-align: center;
  color: white;
  background-color: #080808;
  .list-type{
    max-height: 200px;
  }
  .list-div{
    border: 2px solid #1f1f1f;
    padding: 0;
    border-radius: 4px;
    .list-top {
      border-bottom: 2px solid #1f1f1f;
    }

  }
}

</style>