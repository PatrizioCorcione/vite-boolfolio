<script>
import { store } from '../../store';
import ProjectCard from './ProjectCard.vue';
import ProjectFilter from './ProjectFilter.vue';

export default {
  components: {
    ProjectCard,
    ProjectFilter,
  },
  data() {
    return {
      store,
      isTableVisible: false, // Per controllare la visibilità della tabella
      isFilterVisible: false, // Per controllare la visibilità dei filtri
    };
  },
  computed: {
    // Computed property per filtrare i progetti in base a searchQuery
    filteredProjects() {
      // Filtra i progetti in base alla searchQuery
      console.log(this.store.searchQuery);
      
      return this.store.filteredProjects.filter(project => {
        return project.title.toLowerCase().includes(this.store.searchQuery.toLowerCase());
      });
    },
  },
  mounted() {
  // Set up the Intersection Observer
  const options = {
    root: null, // Usa il viewport come root
    rootMargin: '0px',
    threshold: 0.1, // Trigger quando il 10% dell'elemento è visibile
  };

  // Observer per la tabella dei progetti e il form di ricerca
  const tableObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isTableVisible = true;
        tableObserver.unobserve(entry.target); // Ferma l'osservazione
      }
    });
  }, options);

  // Observer per i filtri
  const filterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isFilterVisible = true;
        filterObserver.unobserve(entry.target); // Ferma l'osservazione
      }
    });
  }, options);

  // Osserva la tabella, il form di ricerca e i filtri
  tableObserver.observe(this.$refs.projectTable);
  tableObserver.observe(this.$refs.searchForm);
  filterObserver.observe(this.$refs.projectFilter);
},
methods: {
    preventSubmit(event) {
      event.preventDefault(); // Impedisce l'invio del form
    },
  },

};
</script>


<template>
  <div class="bg bg-primary-dark w-100 py-5">
    <div id="all-projects" class="container-custom">
      <div class="row">
        <div class="col-8">
          <h2>All My Projects</h2>
          <form 
            class="w-100"
            role="search"
            ref="searchForm"
            @submit.prevent="preventSubmit"
            :class="{ 'zoom-in': isTableVisible }"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              v-model="this.store.searchQuery"
              class="w-100"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div
            ref="projectTable"
            :class="{ 'slide-in-left': isTableVisible }"
            class="project-list my-5"
          >
            <table class="table m-0">
              <tbody>
                <tr v-for="project in filteredProjects" :key="project.id">
                  <ProjectCard
                    :titleP="project.title"
                    :typeP="project.type.type"
                    :technoP="project.technologies"
                    :githubP="project.github"
                    :projectSlug="project.slug"
                  />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-4" ref="projectFilter" :class="{ 'slide-in-right': isFilterVisible }">
          <ProjectFilter/>
        </div>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.bg {
  .container-custom {
    scroll-margin-top: 70px;

    form {
      position: relative;
      width: 100%;
      opacity: 0; // Inizia invisibile
      transform: scale(0); // Ridimensionata a zero
      transition: all 0.6s ease-out;
      &.zoom-in {
        opacity: 1;
        transform: scale(1); // Torna alla dimensione originale
      }
      
      input {
        color: black;
        width: 100%;
        padding: 10px 10px 10px 40px;
        border: 2px solid #1f1f1f;
        outline: none;
        &:active {
          border: 2px solid #0d6efd;
        }
        &:focus {
          border-color: #007bff;
        }
        &:hover {
          border: 2px solid #0d6efd;
        }
      }

      i {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #aaa;
      }
    }

    .project-list {
      border-top: 2px solid #1f1f1f;
      border-left: 2px solid #1f1f1f;
      border-right: 2px solid #1f1f1f;
      border-radius: 4px;
      opacity: 0; // Inizia invisibile
      transform: translateX(-100px); // Parte fuori dallo schermo a sinistra
      transition: all 0.6s ease-out;
    }

    .project-list.slide-in-left {
      opacity: 1;
      transform: translateX(0); // Ritorna alla posizione originale
    }

    .col-4 {
      position: relative;
      min-height: 100vh;
      opacity: 0; // Inizia invisibile
      transform: translateX(100px); // Parte fuori dallo schermo a destra
      transition: all 0.6s ease-out;

      &.slide-in-right {
        opacity: 1;
        transform: translateX(0); // Ritorna alla posizione originale
      }

      project-filter {
        position: sticky;
        top: 20px; // Distanza dalla parte superiore della finestra
        align-self: start; // Per allineare correttamente il filtro
      }
    }
  }
}
</style>
