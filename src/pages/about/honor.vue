<script lang="ts" setup>
import { NCarousel } from '#components'
import HonorBase from '@/assets/images/honor-base.svg'

interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'AboutHonor' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213' }
})

const swiper = ref([
  {
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg'
  },
  {
    img: 'https://img.liblibai.com/images/eebbb93175c3aad5254cfe5cd2c4a8cd72739a73.jpeg?image_process=format,webp&x-oss-process=image/resize,w_600,m_lfit/format,webp'
  },
  {
    img: 'https://img.liblibai.com/web/64382181a7973.png?image_process=format,webp&x-oss-process=image/resize,w_600,m_lfit/format,webp'
  }
])
const controlRef = ref<InstanceType<typeof NCarousel> | null>(null)
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
  <div class="about-honor">
    <!--  -->
    <NCarousel
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
        :key="s.img"
        class="honor-carousel-item"
        @click="onCarouselItemClick(index)"
      >
        <div class="wh-full">
          <img class="carousel-img wh-full object-cover" :src="s.img" />
        </div>
      </NCarouselItem>
    </NCarousel>
    <div class="honor-base">
      <img :src="HonorBase" alt="" />
    </div>

    <div class="control-carousel--wrap">
      <NCarousel
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
          :key="s.img"
          class="control-carousel--item"
          @click="onCarouselItemClick(index)"
        >
          <div
            class="wh-full cursor-pointer"
            :class="{ 'is-selected': currentIndex === index }"
          >
            <img class="carousel-img wh-full object-cover" :src="s.img" />
          </div>
        </NCarouselItem>
      </NCarousel>
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
  }

  .control-carousel--item {
    width: 160px;
    height: 114px;
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
