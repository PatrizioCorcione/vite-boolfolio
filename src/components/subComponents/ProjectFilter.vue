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
    <div class="form-check">
      <div
      v-for="(type) in this.store.types" :key="type.id"
      >
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          {{ type.type }}
        </label>
      </div>
    </div>
    <h2>Tecnologie</h2>
    <div class="form-check">
      <div 
      v-for="(techno) in this.store.technologies" :key="techno.id"
      >
  
        <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          {{ techno.technologies }}
        </label>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.filter{
  margin-top: 96px;
}

</style>