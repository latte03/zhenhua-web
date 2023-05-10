<script lang="ts" setup>
interface PropsType {
  title: string
  enTitle: string
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SiteSectionTitle' })
</script>

<template>
  <div class="site-section-title">
    <div class="title">{{ title }}</div>
    <div class="uppercase en-title">{{ enTitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.site-section-title {
  font-size: 32px;
  color: var(--text-color, --color-text-1);
}
.en-title {
  font-size: 20px;
  font-family: Montserrat-Black, Montserrat;
  font-weight: 900;
  color: var(--text-color, --color-text-1);
  line-height: 24px;
  @apply opacity-20;
}
</style>
