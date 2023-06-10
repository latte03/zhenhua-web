<script lang="ts" setup>
// import { NCarousel } from '#components'
import HonorBase from '@/assets/images/honor-base.svg'

defineOptions({ name: 'AboutHonor' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213', code: 'about' }
})

const { t } = useLang()
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
      pageSize: 5
    },
    data: {
      channel_code: 'honor'
    }
  }
})

const swiper = computed(() => {
  return data.value?.rows || []
})
const controlRef = ref<InstanceType<any> | null>(null)
const currentIndex = ref(0)

function onCurrenChange(index: number) {
  currentIndex.value = index
  // ...
}

function onCarouselItemClick(index: number) {
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
      effect="card"
      :space-between="30"
      :loop="false"
      slides-per-view="auto"
      centered-slides
      draggable
      prev-slide-style="transform: translateX(-200%) translateZ(-800px);"
      next-slide-style="transform: translateX(100%) translateZ(-800px);"
      class="honor-carousel"
      :show-dots="false"
      :current-index="currentIndex"
    >
      <NCarouselItem
        v-for="(s, index) in swiper"
        :key="s.id"
        class="honor-carousel-item"
        @click="onCarouselItemClick(index)"
      >
        <div class="wh-full">
          <AgImage
            class="object-cover carousel-img wh-full"
            :src="s.thumbnail"
          />
        </div>
      </NCarouselItem>
    </n-carousel>
    <div class="honor-base">
      <AgImage :src="HonorBase" alt="" />
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
            class="cursor-pointer wh-full"
            :class="{ 'is-selected': currentIndex === index }"
          >
            <AgImage
              class="object-cover carousel-img wh-full"
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
  @apply -mx-10 -my-14 py-14 px-10;

  background: #f8f9fb;
}

.control-carousel--wrap {
  @apply relative m-auto;

  max-width: 40vw;

  .control-carousel {
    margin-top: 160px;

    .control-carousel--item {
      width: 160px;
      height: 114px;
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

.is-selected {
  border: 4px solid var(--primary-color);

  .carousel-img {
    border: 1px solid var(--white);
  }
}

.honor-carousel {
  height: 300px;
}

.honor-carousel-item {
  width: 420px !important;
  height: 300px !important;
}

.honor-base {
  @apply absolute;

  left: 50%;
  width: 458px;
  height: 278px;
  transform: translate(-50%, -30px);
}
</style>
