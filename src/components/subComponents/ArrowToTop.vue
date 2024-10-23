<template>
  <div v-if="isVisible" class="mouse_scroll" @click="scrollToTop">
    <div>
      <span class="m_scroll_arrows unu"></span>
      <span class="m_scroll_arrows doi"></span>
      <span class="m_scroll_arrows trei"></span>
      <div class="mouse">
        <div class="wheel"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // Stato per controllare la visibilità della freccia
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Mostra la freccia quando si scorre verso il basso
      this.isVisible = window.scrollY > 200; // Mostra dopo 200px di scorrimento
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scorrimento dolce verso l'alto
    },
  },
};
</script>

<style lang="scss" scoped>
.mouse_scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 1000;
  width: 24px;
  height: 100px;
  margin-top: 125px;
}

.mouse {
  height: 42px;
  width: 24px;
  border-radius: 14px;
  border: 2px solid white;
  position: relative;
}

.wheel {
  height: 4px;
  width: 4px;
  border: 2px solid #fff;
  border-radius: 8px;
  margin: 5px auto;
  animation: mouse-wheel 0.6s linear infinite;
}

.m_scroll_arrows {
  display: block;
  width: 16px;
  height: 16px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(225deg);
  margin: 0 0 3px 4px;
  animation: mouse-scroll 1s infinite;
}

.unu {
  animation-delay: 0.1s;
}

.doi {
  animation-delay: 0.2s;
  margin-top: -6px;
}

.trei {
  animation-delay: 0.3s;
  margin-top: -6px;
}

@keyframes mouse-wheel {
  0% {
    top: 1px;
  }
  25% {
    top: 2px;
  }
  50% {
    top: 3px;
  }
  75% {
    top: 2px;
  }
  100% {
    top: 1px;
  }
}

@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
