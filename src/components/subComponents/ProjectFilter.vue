<script>
import { store } from '../../store';

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
      this.store.searchQuery = '';
      this.store.filteredProjects = this.store.projects; // Ripristina i progetti filtrati
    },
    getFilter() {
      const technology = this.selectedTechno;
      const type = this.selectedType;

      // Filtro i progetti basandomi su type e technology selezionati
      this.store.filteredProjects = this.store.projects.filter(project => {
        const matchesType = type ? project.type_id === type : true;
        const matchesTechnology = technology
          ? project.technologies.some(tech => tech.id === technology)
          : true;
        return matchesType && matchesTechnology;
      });
    }
  },
  mounted() {
    // Imposta i progetti inizialmente filtrati come tutti i progetti
    this.store.filteredProjects = this.store.projects;
  }
}
</script>

<template>
  <div class="filter">
    <div class="reset-div" @click="resetFilters">
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
          @click="getFilter"
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
          @click="getFilter"
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