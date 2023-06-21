<script setup lang="ts">
import { useChannelStore } from '~/store/channelState'
import { ArticleAttrs } from '~/server/api/article'
import { NuxtLink } from '#components'

const PC_SWIPER_CHANNEL_ID = 24
const MOBILE_SWIPER_CHANNEL_ID = 36
const { locale } = useI18n()
const localePath = useLocalePath()
const { $isLargeScreen } = useNuxtApp()
const body = computed(() => {
  return {
    pageInfo: {
      pageSize: 100,
      pageIndex: 1
    },
    data: {
      channel_id: $isLargeScreen.value
        ? PC_SWIPER_CHANNEL_ID
        : MOBILE_SWIPER_CHANNEL_ID
    }
  }
})
const { data } = useFetch('/api/article/list', {
  method: 'post',
  body,
  query: {
    locale
  }
})
const channelStore = useChannelStore()

if (!channelStore.channel) {
  channelStore.getChannel()
}

function handleRecord(record: ArticleAttrs) {
  if (record.link?.startsWith('http')) {
    return {
      is: 'a',
      href: record.link,
      target: '_bank'
    }
  } else {
    return {
      to: localePath(`${record.link}`)
    }
  }
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

      <component
        :is="record.link?.startsWith('http') ? 'a' : NuxtLink"
        v-bind="handleRecord(record)"
        class="absolute top-0 wh-full carousel-img"
      >
        <i class="block to-left-top wh-full image-cover z-1"></i>
        <AgImage
          class="to-left-top wh-full"
          :src="record.thumbnail"
          class-name="wh-full"
        />
      </component>
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
    @media screen and (width <= 767px) {
      font-size: 24px;
    }
  }

  &-desc {
    color: var(--white);
    font-weight: 400;
    font-size: 20px;
    opacity: 0.7;
    @media screen and (width <= 767px) {
      font-size: 16px;
    }
  }
}
</style>
