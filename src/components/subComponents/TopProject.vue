<script>
import { store } from '../../store';
import axios from 'axios'; // Importa axios

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
    };
  },
  async mounted() { // Rendi mounted asincrono
    try {
      // Effettua la chiamata API
      const response = await axios.get('https://api.tuo-endpoint.com/projects'); // Cambia l'URL con il tuo endpoint
      this.localProjects = response.data.map(project => ({ ...project, isVisible: false }));

      this.$nextTick(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const index = Array.from(this.$refs.projectCards).indexOf(entry.target);
              if (index !== -1) {
                this.localProjects[index].isVisible = true;
                observer.unobserve(entry.target);
              }
            }
          });
        }, options);

        if (this.$refs.projectCards) {
          this.$refs.projectCards.forEach(card => observer.observe(card));
        }
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  },
  computed: {
    filteredProjects() {
      return this.localProjects.filter((project) =>
        this.fixedTitles.includes(project.title)
      );
    },
  },
  methods: {
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
    <div class="row">
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
</style>


