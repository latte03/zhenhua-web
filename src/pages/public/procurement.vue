<script lang="ts" setup>
import { PublicTab } from '@/components/SitePublic/Tab'

defineOptions({ name: 'PublicProcurement' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '信息公开',
  slogan: '123213'
})
</script>
<template>
  <div class="public-procurement">
    <n-tabs type="segment" :bar-width="100" animated>
      <n-tab-pane
        name="bidding"
        :tab="PublicTab({ icon: 'Bidding', name: '招标信息' })"
        class="br"
      >
        <SitePublicList :data="[{ id: 1 }]"></SitePublicList>
      </n-tab-pane>
      <n-tab-pane
        name="purchase"
        :tab="PublicTab({ icon: 'Purchase', name: '采购信息' })"
      >
        <SitePublicList :data="[]"></SitePublicList>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>
<style lang="scss">
.public-procurement {
  --n-tab-color-segment: transparent;

  .n-tabs-rail {
    --n-color-segment: transparent;
  }

  .n-tabs-nav {
    @apply m-auto mb-6;

    --n-tab-text-color-active: var(--primary-color);
    --n-tab-color-segment: transparent;

    width: 400px;
  }

  .public-tab {
    @apply flex-center py-3 px-6 rounded;

    --font-size: 16px;

    color: var(--color-text-3);
    font-size: var(--font-size);

    .icon {
      font-size: calc(2 * var(--font-size));
    }
  }

  .n-tabs-tab--active {
    box-shadow: none !important;

    .public-tab {
      color: var(--primary-color);
      background-color: var(--color-fill-light);
    }
  }
}
</style>
