<script>
import { store } from '../../store'; // Assuming your projects are in the Vuex store

// Mapping technologies to their icons
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
      localProjects: [], // Local array for projects
      fixedTitles: ['Deliveboo', 'Boolflix', 'Campominato', 'Vetrina Damon', 'Discord', 'Rick & Morty'], // Fixed titles to show
    };
  },
  mounted() {
    // Populate local array with data from store on component mount
    this.localProjects = [...store.projects].map(project => ({ ...project, isVisible: false }));

    // Use nextTick to wait for DOM updates
    this.$nextTick(() => {
      // Set up the Intersection Observer
      const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the card is visible
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Array.from(this.$refs.projectCards).indexOf(entry.target);
            if (index !== -1) {
              this.localProjects[index].isVisible = true; // Set the project to visible
              observer.unobserve(entry.target); // Stop observing the target
            }
          }
        });
      }, options);

      // Check if projectCards exists and observe each project card
      if (this.$refs.projectCards) {
        this.$refs.projectCards.forEach(card => observer.observe(card));
      }
    });
  },
  computed: {
    filteredProjects() {
      // Filter local project array based on specific titles
      return this.localProjects.filter((project) =>
        this.fixedTitles.includes(project.title)
      );
    },
  },
  methods: {
    getTechnologyPath(technologyName) {
      for (const [name, path] of technologyList) {
        if (name === technologyName) {
          return path; // Return path if found
        }
      }
      return null; // Return null if not found
    }
  }
};
</script>

<template>
  <div class="container-custom my-5" id="beast-projects">
    <h2 class="mb-5">Best Projects</h2>
    <div class="row">
      <div v-for="project in filteredProjects" :key="project.id" class="col-12 col-md-6 col-lg-4 mb-4" ref="projectCards">
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
    background-color: transparent; /* Remove the background color */
    border-radius: 10px;
    overflow: hidden; /* Ensure content doesn't spill out */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s ease-in-out, opacity 0.6s ease-in-out; /* Increase duration for smoother effect */
    transform: translateY(50px); /* Start positioned further below */
    opacity: 0; /* Initially hidden */

    &.zoom-in {
      transform: translateY(0); /* Move to original position when visible */
      opacity: 1; /* Make visible */
    }

    &:hover {
      transform: scale(1); /* Scale to original size on hover */
    }

    .card-img-top {
      width: 100%; /* Ensure the image takes the full width of the card */
      height: auto; /* Match the border radius */
    }

    .card-body {
      text-align: center;
      position: absolute; /* Position text over the image */
      bottom: 0; /* Stick to the bottom of the card */
      left: 0;
      right: 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.725); /* Semi-transparent background for text visibility */
      color: white; /* White text for better readability */
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8); /* Add text shadow */
      opacity: 0; /* Make the text initially invisible */
      transform: translateY(20px); /* Move text down initially */
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    &:hover .card-body {
      opacity: 1; /* Make the text visible on hover */
      transform: translateY(0); /* Move text back to original position */
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
      height: auto; /* Maintain proportions */
    }
  }
}

@media (max-width: 767.98px) {
  .card-body {
    opacity: 1 !important; /* Keep the card body visible on mobile */
    transform: translateY(0) !important; /* Ensure the text is in the correct position */
    transition: none;
     /* No transition on mobile for the card body */
  }
}
</style>

