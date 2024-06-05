<script>

</script>

<template>
  <div class="py-5 h-100 d-flex align-items-center justify-content-center">
    <span class="loader"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 248px;
  height: 248px;
  display: inline-block;
  position: relative;
  border: 2px solid #FFF;
  box-sizing: border-box;
  animation: rotation 6s linear infinite;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 2px solid #007bff;
  width: 238px;
  height: 238px;
  animation: rotationBack 2.5s linear infinite;
  transform-origin: center center;
}
.loader::before {
  width: 228px;
  height: 228px;
  border-color: #FFF;
  box-sizing: border-box;
  animation: rotation 5s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}


</style>