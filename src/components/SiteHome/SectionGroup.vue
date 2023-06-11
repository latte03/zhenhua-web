<script lang="ts" setup>
defineOptions({ name: 'SiteHomeSectionGroup' })
const { locale } = useI18n()
const { data } = useFetch('/api/subsidiaries', {
  query: {
    locale
  }
})
</script>

<template>
  <SiteSection class="section-group">
    <SiteSectionTitle
      class="mb-6"
      title="集团子公司"
      en-title="GROUP SUBSIDIARY"
    />
    <div>
      <n-carousel
        :slides-per-view="4"
        :space-between="20"
        :loop="false"
        :show-dots="false"
        draggable
      >
        <div v-for="d in data" :key="d.id" class="group-item flex-center">
          <span class="text">{{ d.value }}</span>
        </div>
      </n-carousel>
    </div>
  </SiteSection>
</template>

<style lang="scss" scoped>
.section-group {
  background: var(--color-fill-light);
}

.group-item {
  height: 70px;
  overflow: hidden;
  font-weight: bold;
  font-size: 18px;
  background-color: var(--color-fill-1);
  border: 1px solid rgb(217 222 231 / 60%);
  border-radius: 4px;

  .text {
    opacity: 0.5;
  }
}
</style>
