<script lang="ts" setup>
interface PropsType {
  src: string
}
const props = defineProps<PropsType>()
defineOptions({ name: 'CarouselImage' })
</script>

<template>
  <div class="carousel-image">
    <i class="block to-left-top wh-full image-cover z-1"></i>
    <img class="to-left-top wh-full" :src="src" />
  </div>
</template>

<style lang="scss" scoped>
.image-cover {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 62%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    rgba(0, 0, 0, 0.3);
}
</style>
