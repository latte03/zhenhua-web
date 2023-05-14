<script lang="ts" setup>
interface PropsType {
  data: {
    name: string
    slogan?: string
  }
  src: string
}
defineProps<PropsType>()
defineOptions({ name: 'SitePageHead' })
</script>

<template>
  <div class="site-page-head relative">
    <div class="page-info absolute z-10">
      <div class="page-info--title">{{ data.name }}</div>
      <div v-if="data.slogan" class="page-info-slogan text-center">
        {{ data.slogan }}
      </div>
    </div>
    <div
      :style="`--background-image:url('${src}')`"
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
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 30%),
      rgba(0, 0, 0, 30%)
    ),
    var(--background-image);
  background-size: cover;
}
</style>
