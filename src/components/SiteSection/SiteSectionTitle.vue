<script lang="ts" setup>
interface PropsType {
  title: string
  enTitle: string
  size?: 'default' | 'small'
}
withDefaults(defineProps<PropsType>(), {
  size: 'default'
})
defineOptions({ name: 'SiteSectionTitle' })
</script>

<template>
  <div
    class="site-section-title"
    :class="{ 'site-section-title-small': size === 'small' }"
  >
    <div class="title">{{ title }}</div>
    <div class="uppercase en-title">{{ enTitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.site-section-title {
  color: var(--text-color, --color-text-1);
  font-size: 32px;
}

.en-title {
  color: var(--text-color, --color-text-1);
  font-weight: 900;
  font-size: 20px;
  font-family: Montserrat, Arial, sans-serif;
  line-height: 24px;
  @apply opacity-20;
}

.site-section-title-small {
  font-size: 24px;

  .en-title {
    font-size: 18px;
  }
}
</style>
