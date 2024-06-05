
<script>
  // // Import Swiper Vue.js components
  // import { Swiper, SwiperSlide } from 'swiper/vue';

  // // Import Swiper styles
  // import 'swiper/css';

  // import 'swiper/css/pagination';
  // import 'swiper/css/navigation';
  // // import required modules
  // import { Pagination, Navigation } from 'swiper/modules';

  // export default {
  //   components: {
  //     Swiper,
  //     SwiperSlide,
  //   },
  //   setup() {
  //     return {
  //       modules: [Pagination, Navigation],
  //     };
  //   },
  // };
</script>
<template>
  <swiper
    ref="{swiperRef}"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="30"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>

  <p class="append-buttons"></p>
</template>

<style lang="scss" scoped>

// #app {
//   height: 100%;
// }
// html,
// body {
//   position: relative;
//   height: 100%;
// }

// body {
//   background: #eee;
//   font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   color: #000;
//   margin: 0;
//   padding: 0;
// }

// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// .swiper {
//   width: 100%;
//   height: 300px;
//   margin: 20px auto;
// }
// .append-buttons {
//   text-align: center;
//   margin-top: 20px;
// }

// .append-buttons button {
//   display: inline-block;
//   cursor: pointer;
//   border: 1px solid #007aff;
//   color: #007aff;
//   text-decoration: none;
//   padding: 4px 10px;
//   border-radius: 4px;
//   margin: 0 10px;
//   font-size: 13px;
// }


</style>