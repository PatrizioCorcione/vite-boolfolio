<script>
  // Import delle dipendenze
  import { store } from '@/store';

  export default {
    data() {
      return {
        store,
      };
    },
    methods: {
      // Verifica se il percorso corrente corrisponde al nome specificato
      isCurrentRoute(routeName) {
        return this.$route.name === routeName;
      },
      // Naviga verso la sezione specificata
      navigateToSection(page) {
        this.$router.push({ path: `${page}` }); // Corretta la sintassi per l'inserimento della variabile
      }
    }
  };
</script>

<template>
  <!-- Header con la navigazione -->
  <div class="header">  
    <nav class="navbar navbar-expand-lg d-flex justify-content-center">
      <!-- Menu per la homepage -->
      <div class="w-100 d-flex justify-content-center">
        <ul v-if="isCurrentRoute('home')" class="navbar__menu list-unstyled m-0">
          <li class="navbar__item">
            <a href="#about" class="text-decoration-none" data-replace="Su di me"><span>Su di me</span></a>
          </li>
          <li class="navbar__item">
            <a href="#beast-projects" class="text-decoration-none" data-replace="Progetti top"><span>Progetti top</span></a>
          </li>
          <li class="logo-link">
            <img src="../../public/img/animal-2028258_640.png" alt="Logo">
          </li>
          <li class="navbar__item">
            <a href="#all-projects" class="text-decoration-none" data-replace="Progetti"><span>Progetti</span></a>
          </li>
          <li class="navbar__item">
            <a href="#contact" class="text-decoration-none" data-replace="Contattami"><span>Contattami</span></a>
          </li>
        </ul>
        <!-- Menu per le altre pagine -->
        <ul v-else class="navbar__menu list-unstyled d-flex justify-content-between w-100 m-0">
          <li class="navbar__item back-home">
            <a href="/" class="text-decoration-none" data-replace="Torna alla home">
              <span><i class="fa-solid fa-angles-left"></i> Torna alla home</span>
            </a>
          </li>
          <li>
            <a class="btn btn-outline-light" :href="this.store.githubShow" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
          </li>
          <li class="navbar__item logo-link">
            <img src="../../public/img/animal-2028258_640.png" alt="Logo">
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// Stile generale per l'header
.header {
  font-family: "Roboto Mono", monospace;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #0c0c0c;
  border-bottom: 1px solid cornflowerblue;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  // Stile della navbar
  .navbar {
    display: flex;
    justify-content: center;
    padding: 10px;
    // Icona GitHub
    .fa-github {
      font-size: 1.3rem;
      margin-right: 5px;
    }
    // Stile per il menu di navigazione
    .navbar__menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      // Stile per ogni elemento del menu
      .navbar__item {
        margin: 0 15px;
        // Stile per i link
        a {
          overflow: hidden;
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: #feffff;
          font-weight: 700;
          vertical-align: top;
          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            left: 0;
          }
          &::after {
            content: attr(data-replace);
            height: 100%;
            top: 0;
            transform-origin: 100% 50%;
            transform: translate3d(200%, 0, 0);
            transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
            color: #1f62ff;
          }
          &:hover::before {
            transform-origin: 0% 50%;
            transform: scaleX(1);
          }
          &:hover::after {
            transform: translate3d(0, 0, 0);
          }
          span {
            display: inline-block;
            transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
          }
          &:hover span {
            transform: translate3d(-200%, 0, 0);
          }
        }

      }
    }
    // Stile per le immagini del logo
    img {
      width: 80px;
      margin: 0 20px;
    }
    // Stile per il link "Torna alla Home"
    .back-home {
      margin-right: auto;
      display: flex;
      align-items: center;
      a {
        color: #feffff;
        font-weight: 700;
        font-size: 1rem;
        i {
          margin-right: 5px;
        }
      }
    }
  }
}
// Stile specifico per il link del logo
.logo-link {
  text-decoration: none;
  img {
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: rotateY(180deg);
  }
}
@media (max-width: 767.98px) {
    .logo {
      display: block;
    }
    .navbar__item {
      display: none;
    }
}
</style>
