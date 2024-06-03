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
    <h2>Tipi</h2>
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
    <h2 class="mt-3">Tecnologie</h2>
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
  font-size: .8rem;
  margin-top: 96px;
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