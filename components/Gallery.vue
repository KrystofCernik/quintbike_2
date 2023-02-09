<template>
  <div class="gallery h-[110vh] relative">
    <Swiper
      :modules="[SwiperEffectCreative, SwiperNavigation]"
      :options="swiperOptions"
      allowSlideNext
      allowSlidePrev
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-100%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      class="h-full"
      ref="swiper"
    >
      <SwiperSlide
        v-for="image in images"
        :key="image.id"
      >
        <nuxt-img
          :src="image.filename"
          class="h-full w-full object-cover"
        />
      </SwiperSlide>
      <div class=".swiper-button-prev"></div>
      <!-- <SwiperButtonPrev />
      <SwiperButtonNext /> -->
    </Swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>