<script lang="ts" setup>
// import { NCarousel } from '#components'
import HonorBase from '@/assets/images/honor-base.svg'

defineOptions({ name: 'AboutHonor' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213', code: 'about' }
})

const { t } = useLang()
const { locale } = useI18n()
useInnerPageContent({
  name: t('about.name'),
  slogan: t('about.name'),
  topChannelCode: 'about',
  pageChannelCode: 'honor'
})!

const { data } = useFetch('/api/article/list', {
  method: 'post',
  body: {
    pageInfo: {
      pageIndex: 1,
      pageSize: 100
    },
    data: {
      channel_code: 'honor'
    }
  },
  query: {
    locale
  }
})

const swiper = computed(() => {
  return data.value?.rows || []
})
const controlRef = ref<InstanceType<any> | null>(null)
const viewerRef = ref<InstanceType<any> | null>(null)
const currentIndex = ref(0)

function onCurrenChange(index: number) {
  currentIndex.value = index
  controlRef.value?.to(index)
  viewerRef.value?.to(index)
  // ...
}

function onCarouselItemClick(index: number) {
  console.log('%c Line:48 🥔 index', 'color:#b03734', index)
  controlRef.value?.to(index)
}

function prev() {
  controlRef.value?.prev()
}

function next() {
  controlRef.value?.next()
}
</script>

<template>
  <div class="about-honor min-h-100">
    <!--  -->
    <n-carousel
      ref="viewerRef"
      effect="card"
      :space-between="30"
      :loop="false"
      slides-per-view="auto"
      centered-slides
      draggable
      touchable
      prev-slide-style="transform: translateX(-200%) translateZ(-800px);"
      next-slide-style="transform: translateX(100%) translateZ(-800px);"
      class="honor-carousel"
      :show-dots="false"
      @update-current-index="onCurrenChange"
    >
      <NCarouselItem
        v-for="(s, index) in swiper"
        :key="s.id"
        class="honor-carousel-item"
      >
        <div
          class="text-center wh-full"
          :class="{ 'is-selected': currentIndex === index }"
        >
          <AgImage
            object-fit="contain"
            class="carousel-img"
            :src="s.thumbnail"
            preview
            style="height: calc(100% - 32px)"
          />

          <div class="text-sm text-center opacity-60">{{ s.title }}</div>
        </div>
      </NCarouselItem>
    </n-carousel>
    <div class="honor-base">
      <AgImage class="wh-full" preview :src="HonorBase" alt="" />
    </div>

    <div class="control-carousel--wrap">
      <n-carousel
        ref="controlRef"
        draggable
        centered-slides
        class="control-carousel"
        :space-between="30"
        slides-per-view="auto"
        :loop="false"
        :show-dots="false"
        @update-current-index="onCurrenChange"
      >
        <NCarouselItem
          v-for="(s, index) in swiper"
          :key="s.id"
          class="control-carousel--item"
          @click="onCarouselItemClick(index)"
        >
          <div
            class="text-center cursor-pointer wh-full"
            :class="{ 'is-selected': currentIndex === index }"
          >
            <AgImage
              object-fit="contain"
              class="h-full carousel-img"
              class-name="h-full"
              :src="s.thumbnail"
            />
          </div>
        </NCarouselItem>
      </n-carousel>
      <button
        type="button"
        class="custom-arrow--left"
        :class="{ 'is-disabled': currentIndex === 0 }"
        @click="prev"
      >
        <Icon name="solar:arrow-left-line-duotone" size="16px" />
      </button>
      <button
        type="button"
        class="custom-arrow--right"
        :class="{ 'is-disabled': currentIndex === swiper.length - 1 }"
        @click="next"
      >
        <Icon name="solar:arrow-right-line-duotone" size="16px" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-honor {
  @apply md:-mx-10 md:-my-14 -m-4 md:py-14 md:px-10 py-4 px-4;

  background: #f8f9fb;
}

.control-carousel--wrap {
  @apply relative m-auto;

  max-width: 40vw;

  .control-carousel {
    margin-top: 160px;

    .control-carousel--item {
      width: auto;
      max-width: 160px;
      height: auto;
      max-height: 114px;
      @media screen and (width <= 767px) {
        width: 100px;
        height: 68px;
      }
    }
  }

  .custom-arrow--left,
  .custom-arrow--right {
    @apply absolute -left-16 top-1/2 transition-base;

    width: 48px;
    height: 48px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 5%);
    transform: translateY(-50%);

    &:hover {
      color: var(--white);
      background-color: var(--primary-color);
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .custom-arrow--right {
    @apply -right-16 left-auto;
  }
}

.carousel-img {
  box-shadow: 0 0 12px #ddd;
}

.is-selected {
  // border: 4px solid var(--primary-color);

  .carousel-img {
    border: 4px solid var(--primary-color);
  }
}

.honor-carousel {
  @apply relative z-10;

  --carousel-width: 480px;
  --carousel-height: 320px;

  height: var(--carousel-height);
  @media screen and (width <= 767px) {
    --carousel-height: 190px;
    --carousel-width: 280px;
  }
}

.honor-carousel-item {
  width: var(--carousel-width) !important;
  height: var(--carousel-height) !important;
}

.honor-base {
  @apply absolute;

  left: 50%;
  width: 458px;
  height: 278px;
  transform: translate(-50%, -30px);
}
</style>
