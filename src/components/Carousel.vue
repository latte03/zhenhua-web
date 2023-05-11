<script lang="ts" name="Carousel" setup>
defineProps<{
  dataSource: any[]
}>()
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
      class="relative w-full h-full"
      show-arrow
      :draggable="true"
      autoplay
      :show-dots="false"
      @update-current-index="onIndexChange"
    >
      <div v-for="data in dataSource" :key="data.id" class="w-full h-full">
        <slot :record="data"></slot>
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
</style>
