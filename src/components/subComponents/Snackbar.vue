<template>
  <div v-if="visible" class="snackbar" :class="{ 'show': visible }">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
    };
  },
  methods: {
    show(msg) {
      this.message = msg;
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 3000); // Nasconde dopo 3 secondi
    },
  },
};
</script>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 85%;
  left: 5%;
  transform: translateX(-50%);
  background-color: #004cff; /* Verde */
  color: #fff;
  padding: 16px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.5s;
}

.snackbar.show {
  opacity: 1;
}
</style>
