<template>
  <div class="container" id="contact" ref="contactForm" :class="{ 'animate-fade-in': isVisible }">
    <div class="row justify-content-center">
      <h2 class="text-center mb-4">Contattami</h2>
      <div class="col-6 d-flex flex-column justify-content-center align-items-center">
        <p class="p-5">
          "Se sei interessato a collaborare o a discutere di progetti di programmazione, non esitare a contattarmi: sarei felice di esplorare nuove opportunità insieme! Accanto troverai un modo per inviarmi un’email e cercherò di rispondere con prontezza. Sono sempre aperto a nuove idee e possibilità, quindi non vedo l'ora di sentire la tua proposta!"
        </p>
        <div>
          <a href="https://www.linkedin.com/in/patrizio-corcione-98236a312/" target="blanck" class="btn btn-outline-light"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a>
          <a href="https://github.com/PatrizioCorcione" target="blanck" class="btn btn-outline-light"><i class="fa-brands fa-github"></i>GitHub</a>
        </div>
      </div>
      <div class="col-6">
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
    <Snackbar ref="snackbar" />
  </div>
</template>


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
      isVisible: false,
    };
  },
  mounted() {
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
    disableScroll() {
    // Blocca lo scroll
    window.scrollTo(0, window.scrollY);
    document.body.style.overflow = 'hidden'; // Nasconde lo scroll
    },
    enableScroll() {
      // Ripristina lo scroll
      document.body.style.overflow = ''; // Ripristina lo scroll
    },
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


<style lang="scss" scoped>

.no-scroll {
  overflow: hidden; /* Impedisce lo scroll */
  height: 100%; /* Mantiene l'altezza */
}
.container {
  padding: 80px 0px;
  scroll-margin-top: 70px;
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.6s ease-out;

  a {
    margin-left: 50px;
  }

  .fa-github,
  .fa-linkedin-in {
    font-size: 1.3rem;
    margin-right: 5px;
  }

  &.animate-fade-in {
    opacity: 1;
    transform: translateX(0);
  }

  label {
    color: white;
  }

  // Aggiungi ombra al paragrafo
  p {
    text-shadow: 2px 2px 5px rgba(135, 206, 250, 0.8);
    font-size: 1.2rem;
    font-weight: bold;
  }

  // Aggiungi ombra al form
  form {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); // Ombra per il form
    border-radius: 10px; // Angoli arrotondati
    padding: 20px; // Padding per il form
    background-color: rgba(255, 255, 255, 0.1); // Sfondo semi-trasparente
  }
}
</style>
