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

const { locale } = useI18n()
</script>

<template>
  <div
    class="site-section-title"
    :class="{ 'site-section-title-small': size === 'small' }"
  >
    <div class="uppercase title">{{ locale === 'en' ? enTitle : title }}</div>
    <div v-if="locale !== 'en'" class="uppercase en-title">{{ enTitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.site-section-title {
  --large-font-size: 32px;
  --md-font-size: 24px;
  --base-font-size: 20px;
  --sm-font-size: 16px;

  color: var(--text-color, --color-text-1);
  font-size: var(--large-font-size);
  @media screen and (width <= 767px) {
    --large-font-size: 24px;
    --md-font-size: 20px;
    --base-font-size: 18px;
    --sm-font-size: 14px;
  }

  .title {
    font-weight: 600;
  }
}

.en-title {
  color: var(--text-color, --color-text-1);
  font-weight: 900;
  font-size: var(--base-font-size);
  font-family: Montserrat, Arial, sans-serif;
  line-height: 24px;
  @apply opacity-20;
}

.site-section-title-small {
  font-size: var(--md-font-size);

  .en-title {
    font-size: var(--sm-font-size);
  }
}
</style>
