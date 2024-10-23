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
    },
    getFilter() {
  const technology = this.selectedTechno ? this.selectedTechno : 'none'; // Usa 'none' se non selezionato
  const type = this.selectedType ? this.selectedType : 'none'; // Usa 'none' se non selezionato

  // Stampa i valori per debugging
  console.log('Technology:', technology, 'Type:', type);

  // Costruisci l'URL senza doppio slash
  const url = `${this.store.apiUrl}projects/filter/${technology}/${type}`;

  // Effettua la chiamata API per il filtro
  axios.get(url)
    .then(result => {
      this.store.projects = result.data.projects; // Aggiorna con result.data.projects
    })
    .catch(error => {
      console.error('Errore durante il filtraggio:', error);
    });
}


  }
}
</script>

<template>
  <div class="filter">
    <div class="reset-div" @click="resetFilters(); getFilter(); store.toSearch = ''">
      <h2 class="me-2">FILTER</h2>
      <p class="text-complementare reset">RESET</p>
    </div>
    <p class="text-tt font-weight-bold text-complementare">Tipi</p>
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
    <p class="text-tt mt-3 text-complementare">Tecnologie</p>
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
  padding-top: 133px;
  margin-bottom: 49px;
  margin-top: 31px;
  position: sticky;
  top: 0;
  font-size: .9rem;
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

  .techno-check{
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    height: 81px;
    flex-wrap: wrap;
    input{
      &:hover{
        cursor: pointer;
        border-color: blue; /* Cambia il colore del bordo al passaggio del mouse */
        background-color: rgba
      }
    }
  }
  .type-check{
    color: rgb(255, 255, 255);
    input{
      &:hover{
        cursor: pointer;
        border-color: blue; /* Cambia il colore del bordo al passaggio del mouse */
        background-color: rgba
      }
    }
  }
}

</style>