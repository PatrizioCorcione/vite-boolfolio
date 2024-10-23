<template>
  <div v-if="!itsReady" class="loader-wrapper">
    <Loader />
  </div>
  <div v-else class="show">
    <div class="container-custom">
      <div class="row align-items-center">
        <div class="text-center py-5">
          <h2>
            {{ project.title }}
          </h2>
          <div class="technologies">
            <p>Tecnologie usate</p>
            <span v-for="(tech, index) in project.technologies" :key="index" class="technology-icon">
              <img :src="getTechnologyPath(tech.technologies)" alt="" class="icon" v-if="getTechnologyPath(tech.technologies)" />
            </span>
          </div>
        </div>
        <div class="col-6" v-if="project.website">
          <a :href="project.website" target="_blank" class="btn btn-success">Visita il sito</a>
        </div>
        <!-- Sezione video -->
        <div class="video-section col-12 d-flex flex-wrap py-5" v-for="(video, index) in videoSources" :key="index">
          <div :class="['col-6', index % 2 === 0 ? 'order-1' : 'order-2']" v-if="video">
            <video class="zoom-animation" width="100%" autoplay loop muted>
              <source :src="'../../public/videos/' + video" type="video/mp4">
              Il tuo browser non supporta il tag video.
            </video>
          </div>
          <div :class="['col-6', index % 2 === 0 ? 'order-2' : 'order-1']" class="px-5">
            <div class="video-description">
              <p>{{ descriptions[index] || "Nessuna descrizione disponibile." }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import Loader from '../components/subComponents/Loader.vue';

// Mapping technologies to their icons
const technologyList = [
  ['HTML', '../../../public/icons/html.png'],
  ['CSS', '../../../public/icons/css.png'],
  ['Javascript', '../../../public/icons/js.png'],
  ['Boostrap', '../../../public/icons/boot.png'],
  ['Vue', '../../../public/icons/vue.png'],
  ['Tailwind', '../../../public/icons/tailwind.png'],
  ['Mysql', '../../../public/icons/mysql.png'],
  ['React', '../../../public/icons/react.png'],
  ['Laravel', '../../../public/icons/laravel.png'],
  ['PHP', '../../../public/icons/php.png'],
];

export default {
  components: { Loader },
  data() {
    return {
      store,
      project: {},
      itsReady: false,
      videoSources: [],
      descriptions: []
    };
  },
  methods: {
    getApi(slug) {
      axios
        .get(this.store.apiUrl + 'projects/' + slug)
        .then((result) => {
          this.project = result.data;
          this.videoSources = this.project.video ? this.project.video.split('<pc>') : [];
          this.descriptions = this.project.description ? this.project.description.split('<pc>') : [];
          this.store.githubShow = this.project.github;
          this.itsReady = true;
          this.scrollToTop(); // Scroll to the top after data is ready
        })
        .catch((error) => {
          console.error('Error fetching project data:', error);
        });
    },
    getTechnologyPath(technologyName) {
      for (const [name, path] of technologyList) {
        if (name === technologyName) {
          return path; // Return path if found
        }
      }
      return null; // Return null if not found
    },
  },
  mounted() {
    this.getApi(this.$route.params.slug);
  }
};
</script>

<style lang="scss" scoped>

.show {
  
  text-align: center;
  color: #feffff; // Light color for better contrast
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9),
    rgba(22, 33, 69, 0.8),
    rgba(30, 30, 30, 0.7),
    rgba(65, 105, 225, 0.5)
  );
  .technologies {
  display: inline-block; // Permette di visualizzare accanto al titolo
  margin-left: 15px; // Spaziatura tra titolo e tecnologie
  font-size: 1.2rem; // Increase font size for better visibility
  font-weight: bold; // Make text bolder
  color: #ffffff; // Change color for better contrast
  text-shadow: 0px 0px 10px rgba(30, 144, 255, 1); // Stronger blue shadow for more glow
  padding: 5px 10px; // Add some padding for a better appearance
  border-radius: 5px; // Rounded corners for a modern look
  background-color: rgba(0, 0, 0, 0.5); // Optional: Add a slight background for contrast

  .icon {
  width: 30px; // Imposta la larghezza dell'icona
  height: auto; // Mantiene le proporzioni
  margin: 0px 4px; // Spaziatura tra le icone
  }
}

  .technology-icon {
    display: inline-block; // Visualizza le icone in linea
  }
  h2 {
    text-shadow: 0px 0px 10px rgba(30, 144, 255, 0.8); // Blue glow shadow 

    .technologies {
      display: inline-block; // Permette di visualizzare accanto al titolo
      margin-left: 15px; // Spaziatura tra titolo e tecnologie
      font-size: 0.9rem; // Dimensione del font per le tecnologie
      color: #dcdcdc; // Colore per le tecnologie
      text-shadow: 0px 0px 8px rgba(65, 105, 225, 0.7); // A light blue shadow effect
    }
  }

  .video-description {
    margin-top: 10px;
    text-align: center;
    color: #dcdcdc;
    font-size: 1.3rem;
    text-shadow: 0px 0px 8px rgba(65, 105, 225, 0.7); // A light blue shadow effect
    opacity: 0;
    transform: translateX(-20px);
    animation: slide-in-from-left 3s forwards;
  }

  .fa-github {
    font-size: 1.5rem;
    color: #007bff;
    text-shadow: 0px 0px 5px rgba(0, 123, 255, 0.8);
    transition: color 0.3s, text-shadow 0.3s;

    &:hover {
      color: #fff;
      text-shadow: 0px 0px 15px rgba(30, 144, 255, 1); // Stronger blue glow on hover
    }
  }

  a.btn {
    text-shadow: 0px 0px 8px rgba(0, 191, 255, 0.7); // Add blue shadow to buttons
    transition: background-color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
  }

  .btn-success {
    background-color: #28a745;
    border-color: #28a745;

    &:hover {
      background-color: #218838;
      text-shadow: 0px 0px 15px rgba(65, 105, 225, 1); // Stronger shadow on hover
    }
  }

  .loader-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .video-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // Zoom animation
  .zoom-animation {
    animation: zoom-in 0.8s ease-in-out forwards;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(65, 105, 225, 0.5); // Subtle blue shadow around the video
  }
}

/* Slide-in animation from the left */
@keyframes slide-in-from-left {
  from {
    opacity: 0; /* Start invisible */
    transform: translateX(-80px); /* Start slightly off to the left */
  }
  to {
    opacity: 1; /* End fully visible */
    transform: translateX(0); /* End at normal position */
  }
}

/* Zoom animation */
@keyframes zoom-in {
  from {
    transform: scale(0.8); /* Start smaller */
    opacity: 0; /* Start invisible */
  }
  to {
    transform: scale(1); /* End at normal size */
    opacity: 1; /* End fully visible */
  }
}

.zoom-animation {
  animation: zoom-in 0.8s ease-in-out forwards; /* Applies the zoom animation */
  overflow: hidden; /* Prevents overflow during animation */
}
</style>
