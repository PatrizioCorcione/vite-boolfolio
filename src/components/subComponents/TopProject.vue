<script>
import axios from 'axios';
import { store } from '../../store';

const technologyList = [
  ['HTML', '/icons/html.png'],
  ['CSS', '/icons/css.png'],
  ['Javascript', '/icons/js.png'],
  ['Boostrap', '/icons/boot.png'],
  ['Vue', '/icons/vue.png'],
  ['Tailwind', '/icons/tailwind.png'],
  ['Mysql', '/icons/mysql.png'],
  ['React', '/icons/react.png'],
  ['Laravel', '/icons/laravel.png'],
  ['PHP', '/icons/php.png'],
];

export default {
  data() {
    return {
      localProjects: [],
      fixedTitles: ['Deliveboo', 'Boolflix', 'Campominato', 'Vetrina Damon', 'Discord', 'Rick & Morty'],
      itsReady: false, // Controlla se il contenuto è pronto
      error: null, // Stato per gestire gli errori
    };
  },
  mounted() {
    this.loadProjects();
  },
  computed: {
    filteredProjects() {
      return this.localProjects.filter((project) =>
        this.fixedTitles.includes(project.title)
      );
    },
  },
  methods: {
    async loadProjects() {
      try {
        // Assumi che ci sia un'API per caricare i progetti
        const response = await axios.get(`${store.apiUrl}projects`);
        this.localProjects = response.data.map(project => ({ ...project, isVisible: false }));
        this.itsReady = true; // Imposta il contenuto come pronto
      } catch (error) {
        this.error = `Errore durante il caricamento dei progetti: ${error.message}`;
        console.error(this.error); // Log dell'errore
      }
    },
    getTechnologyPath(technologyName) {
      for (const [name, path] of technologyList) {
        if (name === technologyName) {
          return path;
        }
      }
      return null;
    }
  }
};
</script>

<template>
  <div class="container-custom my-5" id="beast-projects">
    <h2 class="mb-5">Best Projects</h2>

    <!-- Mostra il messaggio di errore se presente -->
    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- Mostra il caricatore finché i dati non sono pronti -->
    <Loader v-if="!itsReady" />

    <div class="row" v-else>
      <div v-for="project in filteredProjects" :key="project.id" class="col-md-4 mb-4" ref="projectCards">
        <router-link :to="{ name: 'show', params: { slug: project.slug } }" class="card project-card h-100 text-decoration-none" :class="{ 'zoom-in': project.isVisible }">
          <img :src="'/img/' + project.img" class="card-img-top" alt="...">
          <div class="card-body text-white">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-text">
              <span v-for="tech in project.technologies" :key="tech.technologies" class="technology-icon">
                <img :src="getTechnologyPath(tech.technologies)" alt="" class="icon" />
              </span>
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-custom {
  margin-top: 70px;
  scroll-margin-top: 70px;

  .col-md-4 {
    height: 480px;
  }

  .project-card {
    background-color: transparent;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
    transform: translateY(50px);
    opacity: 0;

    &.zoom-in {
      transform: translateY(0);
      opacity: 1;
    }

    &:hover {
      transform: scale(1.05);
    }

    .card-img-top {
      width: 100%;
      height: auto;
    }

    .card-body {
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.725);
      color: white;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover .card-body {
      opacity: 1;
      transform: translateY(0);
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .card-text {
      font-size: 1rem;
    }

    .technology-icon {
      display: inline-block;
      margin-right: 8px;
    }

    .icon {
      width: 30px;
      height: auto;
    }
  }
}

.error-message {
  color: red;
  text-align: center;
  margin: 20px;
}
</style>
