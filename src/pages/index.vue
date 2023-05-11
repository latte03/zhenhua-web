<script setup lang="ts">
const swiper = ref([
  {
    id: 1,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd',
    desc: 'ddddddd'
  },
  {
    id: 2,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd22',
    desc: 'dddddd11d'
  }
])
</script>

<template>
  <div class="home-page">
    <SiteCarousel
      v-slot="{ record }"
      :data-source="swiper"
      class="w-screen h-screen"
    >
      <div class="absolute z-10 text-white carousel-info">
        <div class="carousel-title">{{ record.title }}</div>
        <div class="carousel-desc">{{ record.desc }}</div>
      </div>
      <SiteCarouselImage
        class="absolute top-0 wh-full carousel-img"
        :src="record.img"
      />
    </SiteCarousel>
    <SiteHomeSectionAbout />
    <SiteHomeSectionBusiness class="" />
    <SiteHomeSectionNews class="" />
    <SiteHomeSectionGroup />
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  &-img {
    object-fit: cover;
  }
  &-info {
    top: calc(100vh - 256px);
    left: 10vw;
  }
  &-title {
    font-size: 40px;
    color: #ffffff;
    line-height: 58px;
  }
  &-desc {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    opacity: 0.7;
  }
}
</style>
