<script>
export default {
  mounted() {
    this.initObserver();
  },
  methods: {
    initObserver() {
      const options = {
        root: null,
        threshold: 0.1, // Quando il 10% dell'elemento è visibile
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.1}s`; // Ritardo crescente
            entry.target.classList.add('visible');
          }
        });
      }, options);

      const icons = document.querySelectorAll('.icon');
      icons.forEach((icon) => observer.observe(icon));
    },
  },
};
</script>



<template>
  <div class="bg bg-primary-dark w-100 py-5">
    <div class="text-center">
      <h2 class="mb-5">Tecnologie usate</h2>
      <div class="technology-icons">
        <img src="../../../public/icons/html.png" alt="HTML" class="icon" />
        <img src="../../../public/icons/css.png" alt="CSS" class="icon" />
        <img src="../../../public/icons/js.png" alt="Javascript" class="icon" />
        <img src="../../../public/icons/boot.png" alt="Bootstrap" class="icon" />
        <img src="../../../public/icons/vue.png" alt="Vue" class="icon" />
        <img src="../../../public/icons/tailwind.png" alt="Tailwind" class="icon" />
        <img src="../../../public/icons/mysql.png" alt="MySQL" class="icon" />
        <img src="../../../public/icons/react.png" alt="React" class="icon" />
        <img src="../../../public/icons/laravel.png" alt="Laravel" class="icon" />
        <img src="../../../public/icons/php.png" alt="PHP" class="icon" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.bg {
  .technology-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    .icon {
      width: 60px;
      height: auto;
      opacity: 0;
      transform: translateY(40px); /* Muovi le icone più in basso all'inizio */
      transition: opacity 0.4s ease-out, transform 0.4s ease-out; /* Rendi l'animazione più fluida */
      transition-delay: 0s; /* Ritardo iniziale, sarà modificato dinamicamente */
      
      &.visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>


