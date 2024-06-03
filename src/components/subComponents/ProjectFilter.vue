<script>

import {store} from '../../store'

export default{

  data() {
      return {
        store,
      }
    },
}

</script>

<template>
  <div class="filter">
    <div class="reset">
      <h2 class="me-2">FILTER</h2>
      <p class=" text-primary">RESET</p>
    </div>
    <p class="text-tt text-primary">Tipi</p>
    <div class="form-check type-check">
      <div
      v-for="(type) in this.store.types" :key="type.id"
      >
        <input class="form-check-input" name="type" type="radio"  id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          {{ type.type }}
        </label>
      </div>
    </div>
    <p class="text-tt mt-3 text-primary">Tecnologie</p>
    <div class="form-check techno-check">
      <div 
      v-for="(techno) in this.store.technologies" :key="techno.id"
      >
  
        <input class="form-check-input" type="radio"  id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          {{ techno.technologies }}
        </label>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.filter{
  font-size: .9rem;
  margin-top: 80px;
  .reset{
    display: flex !important;
    justify-content: center;
    align-items: center;
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