<script>
export default {
  data() {
    return {
      showImage: false,
      showText: false,
      fullText: "Codice non solo per risolvere problemi, ma per creare un futuro migliore. Perché il vero debugging è nel trasformare l'idea in realtà.",
      displayedText: '',
      currentIndex: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showImage = true;
    }, 100);

    setTimeout(() => {
      this.showText = true;
      this.typeWriter();
    }, 500);
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
      <div class="row justify-content-center">
        <div 
          class="overflow-hidden col-4 d-flex"
          :class="{ 'fade-in-image': showImage }"
        >
          <img 
            class="img-fluid rounded-circle" 
            src="../../../public/img/IMG_0086(1).jpg" 
            alt="Hero Image"
            :style="{ opacity: showImage ? 1 : 0, transform: showImage ? 'scale(1)' : 'scale(0.5)' }"
          >
        </div>
        <div 
          class="col-8 d-flex align-items-center"
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
  padding: 2rem;

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
</style>
