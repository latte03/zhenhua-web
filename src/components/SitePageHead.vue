<script lang="ts" setup>
interface PropsType {
  data: {
    name?: string
    slogan?: string
  }
  src?: string
}
defineProps<PropsType>()
defineOptions({ name: 'SitePageHead' })
</script>

<template>
  <div class="relative site-page-head">
    <div class="absolute z-10 page-info">
      <div class="page-info--title">{{ data.name }}</div>
      <div v-if="data.slogan" class="text-center page-info-slogan">
        {{ data.slogan }}
      </div>
    </div>
    <div
      :style="`
      --background-image:url('${src}');
      background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 30%),
      rgba(0, 0, 0, 30%)
    )${src ? ',var(--background-image)' : ''};
      `"
      :alt="data.name"
      class="page-image"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.page-info {
  top: 50%;
  left: 50%;
  color: var(--white);
  transform: translate(-50%, -50%);

  &--title {
    font-weight: 600;
    font-size: 32px;
  }

  &--slogan {
    margin-top: 16px;
    font-size: 20px;
  }
}

.page-image {
  width: 100vw;
  height: 568px;
  background-size: cover;
}
</style>
