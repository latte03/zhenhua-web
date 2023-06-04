<script setup lang="ts">
import { useChannelStore } from '~/store/channelState'

const { data } = useFetch('/api/article/list', {
  method: 'post',
  body: {
    pageInfo: {
      pageSize: 10,
      pageIndex: 1
    },
    data: {
      channel_id: 24
    }
  }
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
      :data-source="data?.rows || []"
      class="w-screen h-screen"
    >
      <div class="absolute z-10 text-white carousel-info">
        <div class="carousel-title">{{ record.title }}</div>
        <div class="carousel-desc">{{ record.abstract }}</div>
      </div>

      <div class="absolute top-0 wh-full carousel-img">
        <i class="block to-left-top wh-full image-cover z-1"></i>
        <img class="to-left-top wh-full" :src="record.thumbnail" />
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
