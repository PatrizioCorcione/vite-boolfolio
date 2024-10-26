<script>
import emailjs from 'emailjs-com';
import Snackbar from './Snackbar.vue';

export default {
  components:{
    Snackbar,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      isVisible: false, // Stato di visibilità per l'animazione
    };
  },
  mounted() {
    // Configurazione dell'osservatore per l'animazione di apparizione
    const options = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.$refs.contactForm);
  },
  methods: {
    // Disabilita lo scroll della pagina durante l'interazione con il form
    disableScroll() {
      window.scrollTo(0, window.scrollY);
      document.body.style.overflow = 'hidden'; // Nasconde lo scroll
    },
    // Ripristina lo scroll della pagina dopo l'interazione
    enableScroll() {
      document.body.style.overflow = ''; // Ripristina lo scroll
    },
    // Invia l'email utilizzando EmailJS
    sendEmail() {
      const serviceID = 'service_qqcxz4h'; 
      const templateID = 'template_lsoa77k'; 
      const userID = 'Xj_7-p3WvdRVyFW3F'; 
      console.log('Invio email con i seguenti dati:', this.formData);

      emailjs.send(serviceID, templateID, this.formData, userID)
        .then(() => {
          this.$refs.snackbar.show('Messaggio inviato con successo!');
          this.formData = { name: '', email: '', message: '' };
        })
        .catch((error) => {
          console.error('Errore durante l\'invio dell\'email:', error);
          this.$refs.snackbar.show('C\'è stato un problema con l\'invio del messaggio.');
        });
    }
  },
};
</script>

<template>
  <div class="container py-5" id="contact" ref="contactForm" :class="{ 'animate-fade-in': isVisible }">
    <div class="row justify-content-center">
      <h2 class="text-center py-3">Contattami</h2>
      <div class="col-12 col-md-6 d-flex flex-column align-items-center ">
        <!-- Sezione informativa e link ai social -->
        <p class="pb-5 px-5 text-center">
          "Se sei interessato a collaborare o a discutere di progetti di programmazione, non esitare a contattarmi: sarei felice di esplorare nuove opportunità insieme! Accanto troverai un modo per inviarmi un’email e cercherò di rispondere con prontezza. Sono sempre aperto a nuove idee e possibilità, quindi non vedo l'ora di sentire la tua proposta!"
        </p>
        <div class="d-flex w-100 justify-content-around mb-5">
          <a href="https://www.linkedin.com/in/patrizio-corcione-98236a312/" target="blanck" class="btn btn-outline-light"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
          <a href="https://github.com/PatrizioCorcione" target="blanck" class="btn btn-outline-light"><i class="fa-brands fa-github"></i>GitHub</a>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <!-- Form di contatto -->
        <form @submit.prevent="sendEmail">
          <div class="mb-3">
            <label for="name" class="form-label">Nome</label>
            <input
              type="text"
              class="form-control bg-transparent text-white"
              id="name"
              v-model="formData.name"
              required
              @focus="disableScroll"
              @blur="enableScroll"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control bg-transparent text-white"
              id="email"
              v-model="formData.email"
              required
              @focus="disableScroll"
              @blur="enableScroll"
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea
              class="form-control bg-transparent text-white"
              id="message"
              v-model="formData.message"
              rows="5"
              required
              @focus="disableScroll"
              @blur="enableScroll"
            ></textarea>
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-outline-light">Invia Messaggio</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Componente Snackbar per notifiche -->
    <Snackbar ref="snackbar" />
  </div>
</template>

<style lang="scss" scoped>
/* Classe per disabilitare lo scroll */
.no-scroll {
  overflow: hidden; /* Impedisce lo scroll */
  height: 100%; /* Mantiene l'altezza */
}

/* Stile per il contenitore principale */
.container {
  scroll-margin-top: 70px; /* Margine per lo scroll */
  opacity: 0; /* Opacità iniziale */
  transform: translateX(50px); /* Traslazione iniziale */
  transition: all 0.6s ease-out; /* Transizione per animazioni */
  /* Icone dei social */
  .fa-github,
  .fa-linkedin-in {
    font-size: 1.3rem; /* Dimensione delle icone */
    margin-right: 5px; /* Margine a destra per le icone */
  }

  /* Animazione di apparizione */
  &.animate-fade-in {
    opacity: 1; /* Opacità finale */
    transform: translateX(0); /* Traslazione finale */
  }

  /* Stile per le etichette del form */
  label {
    color: white; /* Colore del testo delle etichette */
  }

  /* Stile per il paragrafo informativo */
  p {
    text-shadow: 2px 2px 5px rgba(135, 206, 250, 0.8); /* Ombra del testo */
    font-size: 1.2rem; /* Dimensione del font */
    font-weight: bold; /* Grassetto */
  }

  /* Stile per il form di contatto */
  form {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Ombra per il form */
    border-radius: 10px; /* Angoli arrotondati */
    padding: 20px; /* Padding per il form */
    background-color: rgba(255, 255, 255, 0.1); /* Sfondo semi-trasparente */
  }
  
  /* Stile per i campi di input e textarea */
  input,
  textarea {
    background-color: transparent; /* Sfondo trasparente */
    color: white; /* Colore del testo */
    border: 1px solid rgba(255, 255, 255, 0.5); /* Bordo semi-trasparente */
    border-radius: 5px; /* Angoli arrotondati */

    &:focus {
      outline: none; /* Rimuove il contorno di focus */
      border-color: rgba(135, 206, 250, 1); /* Colore del bordo al focus */
    }
  }
}
</style>

