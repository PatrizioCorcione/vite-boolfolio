<script>
export default {
  data() {
    return {
      showImage: false,
      showText: false,
      isImageLoaded: false, // Nuova proprietà per controllare il caricamento dell'immagine
      fullText: "Codice non solo per risolvere problemi, ma per creare un futuro migliore. Perché il vero debugging è nel trasformare l'idea in realtà.",
      displayedText: '',
      currentIndex: 0,
    };
  },
  mounted() {
    const imgElement = this.$refs.heroImage;

    // Aggiungi un evento di caricamento sull'immagine
    imgElement.addEventListener('load', () => {
      this.isImageLoaded = true;
      setTimeout(() => {
        this.showImage = true;

        // Inizia l'animazione del testo solo dopo che l'immagine è caricata
        this.showText = true;
      }, 100);
    });
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      const interval = setInterval(() => {
        if (this.currentIndex < this.fullText.length) {
          this.displayedText += this.fullText.charAt(this.currentIndex);
          this.currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30);
    }
  }
}
</script>

<template>
  <div class="bg" id="hero">
    <div class="container-custom py-5">
      <div class="row justify-content-center minh">
        <div 
          class="overflow-hidden col-lg-4 col-12 d-flex justify-content-center"
          :class="{ 'fade-in-image': showImage && isImageLoaded }"
        >
          <img 
            ref="heroImage"
            class="img-fluid rounded-circle" 
            src="/img/IMG_0086_1_.webp" 
            alt="Hero Image"
            :style="{ 
              opacity: showImage && isImageLoaded ? 1 : 0, 
              transform: showImage && isImageLoaded ? 'scale(1)' : 'scale(0.5)' 
            }"
          >
        </div>
        <div 
          class="col-lg-8 col-12 d-flex align-items-center"
          :class="{ 'fade-in-text': showText }"
        >
          <p class="slogan">
            <span v-for="(char, index) in displayedText" :key="index" class="slogan-letter">{{ char }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  .minh{
    min-height: 455px;
  }
  padding: 2rem;
  min-height: 600px;

  .overflow-hidden {
    padding: 20px;
  }

  .img-fluid.rounded-circle {
    border: 3px solid royalblue;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(65, 105, 225, 0.5);
    transition: transform 0.8s ease, opacity 0.5s ease, box-shadow 0.5s ease;
    transform: scale(0.5) rotate(-10deg);
    opacity: 0;
    filter: brightness(1.1) contrast(1.1);
  }

  .fade-in-image {
    transform: scale(1) rotate(0);
    opacity: 1;
  }

  .col-8 {
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: 0;
    transform: translateX(-20px);
  }

  .fade-in-text {
    opacity: 1;
    transform: translateX(0);
  }

  .slogan {
    font-size: 2rem;
    font-weight: bold;
    color: #c2c2ce;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    letter-spacing: 0.05em;
    text-align: center;
  }
}
@media (max-width: 767.98px) {
  img {
    width: 70% !important;
  }
  .slogan {
    font-size: 1.5rem !important;
  }
  #hero {
    height: 650px;
  }
}
@media (max-width: 1100px) {
  .slogan {
    font-size: 1.5rem !important;
  }
  img {
    width: 50%;
  }
}
</style>
