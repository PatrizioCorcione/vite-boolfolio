<script>
import axios from 'axios';
import { store } from '../store';
import Loader from '../components/subComponents/Loader.vue';

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
      descriptions: [],
      videoResp: []
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
          this.videoResp = this.project.video_resp ? this.project.video_resp.split('<pc>') : [];
          this.store.githubShow = this.project.github;
          this.itsReady = true; 
        })
        .catch((error) => {
          console.error('Error fetching project data:', error);
        });
    },
    getTechnologyPath(technologyName) {
      for (const [name, path] of technologyList) {
        if (name === technologyName) {
          return path;
        }
      }
      return null; 
    },
  },
  mounted() {
    this.getApi(this.$route.params.slug);
  }
};
</script>

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
              <p :class="[index % 2 === 0 ? 'text-start' : 'text-end']">{{ descriptions[index] || "Nessuna descrizione disponibile." }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row video-row text-center" v-if="videoResp.length > 0">
        <h2 class="mb-5">Anteprima Responsive</h2>
        <div class="col-6 video-container">
          <video class="video-section zoom-animation i-pad" autoplay loop muted>
            <source :src="'../../public/videos/' + videoResp[0]" type="video/mp4">
            Il tuo browser non supporta il tag video.
          </video>
        </div>
        <div class="col-6 video-container">
          <video class="video-section zoom-animation i-phone" autoplay loop muted>
            <source :src="'../../public/videos/' + videoResp[1]" type="video/mp4">
            Il tuo browser non supporta il tag video.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show {
  min-height: 700px;
  color: #feffff;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9),
    rgba(22, 33, 69, 0.8),
    rgba(30, 30, 30, 0.7),
    rgba(65, 105, 225, 0.5)
  );

  .technologies {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(30, 144, 255, 1); 
    padding: 5px 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5); 

    .icon {
      width: 30px;
      height: auto; 
      margin: 0px 4px; 
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
    max-width: 100%; 
    height: auto;  
    margin-top: 10px;
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

  // Centering and sizing the video elements
  .video-row {
    display: flex; // Use flexbox for centering
    justify-content: center; // Center the videos
    align-items: center; // Align items vertically in the center
    margin: 0 auto; // Center the row
    padding: 20px 0; // Add padding for spacing

    .video-container {
      display: flex; // Make each video container a flexbox
      justify-content: center; // Center the video
      align-items: center; // Align video vertically
      width: 100%; // Take full width
      max-width: 400px; // Set a max-width to ensure videos are not too large
      height: auto; // Maintain aspect ratio

      video {
        height: auto; // Maintain aspect ratio
        max-height: 430px; // Set a max height for uniformity
      }

      .i-pad{
        border-radius: 20px;
      }

      .i-phone{
        border-radius: 30px;
      }
    }
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
</style>
