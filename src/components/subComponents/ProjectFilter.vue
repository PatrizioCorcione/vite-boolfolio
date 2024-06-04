<script>

import {store} from '../../store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      selectedType: null,
      selectedTechno: null
    }
  },
  methods: {
    resetFilters() {
      this.selectedType = null;
      this.selectedTechno = null;
      console.log(this.store.projects);
    },

    getFilter(){
      axios.get(this.store.apiUrl + 'project/filter',{
        params:{
          type : this.selectedType,
          technology : this.selectedTechno
        }
      })
      .then(result =>{
        this.store.projects = result.data
      })
    },
    // getFilterTechno(){
    //   axios.get(this.store.apiUrl + 'project/technoFilter/'+ this.selectedTechno)
    //   .then(result =>{
    //     this.store.projects = result.data
    //   })
    // },
  }
}

</script>


<template>
  <div class="filter">
    <div class="reset-div" @click="resetFilters(),getFilter()">
      <h2 class="me-2">FILTER</h2>
      <p class="text-primary reset">RESET</p>
    </div>
    <p class="text-tt text-primary">Tipi</p>
    <div class="form-check type-check">
      <div v-for="(type) in store.types" :key="type.id">
        <input 
          class="form-check-input" 
          name="type" 
          type="radio"  
          :id="'type-' + type.id"
          :value="type.id"
          v-model="selectedType"
          @click="selectedType = type.id , getFilter()"
          
        >
        <label class="form-check-label" :for="'type-' + type.id">
          {{ type.type }}
        </label>
      </div>
    </div>
    <p class="text-tt mt-3 text-primary">Tecnologie</p>
    <div class="form-check techno-check">
      <div v-for="(techno) in store.technologies" :key="techno.id">
        <input 
          class="form-check-input"
          name="techno" 
          type="radio"  
          :id="'techno-' + techno.id"
          :value="techno.id"
          v-model="selectedTechno"
          @click="selectedTechno = techno.id , getFilter()"
        >
        <label class="form-check-label" :for="'techno-' + techno.id">
          {{ techno.technologies }}
        </label>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.filter{
  position: sticky;
  top: 0;
  font-size: .9rem;
  margin-top: 80px;
  .reset-div{
    display: flex !important;
    justify-content: center;
    align-items: center;
    .reset{
      cursor: pointer;
      &:hover{
        color: aqua !important;
      }
    }
  }
  .text-tt{
    font-size: 1.5rem;
  }
  h2{
    color: white;
  }
  .techno-check{
    color: gray;
    display: flex;
    flex-direction: column;
    height: 81px;
    flex-wrap: wrap;
    input{
      
      &:hover{
        cursor: pointer;
      }
    }
  }
  .type-check{
    color: gray;

  }
}

</style>