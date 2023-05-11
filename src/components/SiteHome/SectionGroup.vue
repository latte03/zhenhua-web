<script lang="ts" setup>
defineOptions({ name: 'SiteHomeSectionGroup' })
</script>

<template>
  <SiteSection class="section-group bg-slate-200">
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
        draggable
      >
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
      </n-carousel>
    </div>
  </SiteSection>
</template>

<style lang="scss" scoped>
.section-group {
}
</style>
