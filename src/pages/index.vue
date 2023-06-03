<script setup lang="ts">
import { useChannelStore } from '~/store/channelState'

interface Data {
  id: number
  img: string
  title: string
  desc: string
}

function getData() {
  return Promise.resolve([
    {
      id: 1,
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
      title: 'dddd',
      desc: 'ddddddd'
    },
    {
      id: 2,
      img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg',
      title: 'dddd22',
      desc: 'dddddd11d'
    }
  ])
}
const { data: swiper } = await useAsyncData(getData, {
  lazy: true
})

const channelStore = useChannelStore()

if (!channelStore.channel) {
  channelStore.getChannel()
}
</script>

<template>
  <div class="home-page">
    <SiteCarousel
      v-slot="{ record }"
      :data-source="swiper || []"
      class="w-screen h-screen"
    >
      <div class="absolute z-10 text-white carousel-info">
        <div class="carousel-title">{{ record.title }}</div>
        <div class="carousel-desc">{{ record.desc }}</div>
      </div>

      <div class="absolute top-0 wh-full carousel-img">
        <i class="block to-left-top wh-full image-cover z-1"></i>
        <img class="to-left-top wh-full" :src="record.img" />
      </div>
    </SiteCarousel>

    <SiteHomeSectionAbout />
    <SiteHomeSectionBusiness />
    <SiteHomeSectionNews />
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
    color: var(--white);
    font-size: 40px;
    line-height: 58px;
  }

  &-desc {
    color: var(--white);
    font-weight: 400;
    font-size: 20px;
    opacity: 0.7;
  }
}
</style>
