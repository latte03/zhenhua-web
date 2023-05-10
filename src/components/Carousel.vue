<script lang="ts" name="Carousel" setup>
defineOptions({
  name: 'Carousel'
})
const currentIndex = ref(0)
function onIndexChange(index: number) {
  currentIndex.value = index
}
</script>

<template>
  <div class="relative carousel">
    <n-carousel
      class="relative banner-carousel"
      show-arrow
      :draggable="true"
      autoplay
      :show-dots="false"
      @update-current-index="onIndexChange"
    >
      <div class="w-full h-full">
        <div class="absolute z-10 text-white carousel-info">
          <div class="carousel-title">ddd</div>
          <div class="carousel-desc">ddd</div>
        </div>
        <img
          class="absolute top-0 w-full h-full carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
      </div>
      <div class="w-full h-full">
        <div class="absolute z-10 text-white carousel-info">
          <div class="carousel-title">ddd</div>
          <div class="carousel-desc">ddd</div>
        </div>
        <img
          class="absolute top-0 w-full h-full carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
      </div>

      <template #arrow="{ prev, next }">
        <div class="absolute carousel-custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <Icon name="carbon:arrow-left" size="24px" />
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <Icon name="carbon:arrow-right" size="24px" />
          </button>
        </div>
      </template>
    </n-carousel>
    <view class="absolute carousel-dot">
      {{ currentIndex + 1 }}
    </view>
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
  &-custom-arrow {
    left: calc(100px + 10vw);
    bottom: 64px;
    color: #fff;
  }
  &-dot {
    bottom: 64px;
    left: 10vw;
    color: #fff;
  }
}
.banner-carousel,
.carousel-img {
  width: 100vw;
  height: 100vh;
}
</style>
