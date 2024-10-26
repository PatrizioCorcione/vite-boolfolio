<template>
  <span v-if="visible" class="snackbar" :class="{ 'show': visible }">
    {{ message }}
  </span>
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
  background-color: #004cff; /* Verde */
  color: #fff;
  padding: 16px;
  border-radius: 5px;
  opacity: 0;
}

.snackbar.show {
  opacity: 1;
}
</style>
