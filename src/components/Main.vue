<script>
// Import dei moduli esterni
import axios from 'axios';
import { store } from '../store';

// Import dei componenti
import ProjectFilter from './subComponents/ProjectFilter.vue';
import ProjectList from './subComponents/ProjectList.vue';
import TopProject from './subComponents/TopProject.vue';
import Loader from './subComponents/Loader.vue';
import AboutMe from './subComponents/AboutMe.vue';
import Contact from './subComponents/Contact.vue';
import Hero from './subComponents/Hero.vue';
import TechnologyIcons from './subComponents/TechnologyIcons.vue';
import ArrowToTop from './subComponents/ArrowToTop.vue';

export default {
  // Registrazione dei componenti utilizzati
  components: {
    ProjectList,
    ProjectFilter,
    Loader,
    TopProject,
    AboutMe,
    Contact,
    Hero,
    TechnologyIcons,
    ArrowToTop
  },
  
  // Stato del componente
  data() {
    return {
      store,
      itsReady: false // Controlla se il contenuto è pronto
    };
  },
  computed: {
    isDesktop() {
      // Controlla se la larghezza della finestra è maggiore o uguale a 768px
      return window.innerWidth >= 768;
    }
  },

  // Metodi del componente
  methods: {
    // Metodo per ottenere dati dall'API in base al tipo specificato
    async getApi(type = 'project') {
      try {
        const { data } = await axios.get(`${this.store.apiUrl}${type}`);
        switch (type) {
          case 'technology':
            this.store.technologies = data;
            break;
          case 'type':
            this.store.types = data;
            break;
          default:
            this.store.projects = data;
            break;
        }
      } catch (error) {
        console.error(`Errore durante il caricamento dei dati per ${type}:`, error);
        throw error; // Propaga l'errore per la gestione a livello superiore
      }
    },
  },

  // Ciclo di vita del componente
  async mounted() {
    try {
      // Caricamento dei dati in sequenza
      await this.getApi(); // Carica i progetti
      await this.getApi('type'); // Carica i tipi di progetto
      await this.getApi('technology'); // Carica le tecnologie

      // Imposta lo stato su pronto e scorri in alto la pagina
      this.itsReady = true;
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Errore durante il caricamento dei dati:", error); // Gestione degli errori
    }
  }
};
</script>

<template>
  <!-- Mostra il caricatore finché i dati non sono pronti -->
  <Loader v-if="!itsReady" />
  <div v-else class="main">
    <!-- Struttura della pagina principale -->
    <Hero />
    <AboutMe />
    <TechnologyIcons />
    <TopProject />
    <ProjectList v-if="isDesktop" />
    <Contact />
    <ArrowToTop />
  </div>
</template>

<style lang="scss" scoped>
/* Stile per il componente principale */
.main {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.9),
    rgba(22, 33, 69, 0.8),
    rgba(30, 30, 30, 0.7),
    rgba(65, 105, 225, 0.5)
  );
}
</style>
