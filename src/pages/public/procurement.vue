<script lang="ts" setup>
import { PublicTab } from '@/components/SitePublic/Tab'

defineOptions({ name: 'PublicProcurement' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '信息公开',
  slogan: '信息公开',
  topChannelCode: 'public',
  pageChannelCode: 'procurement'
})
const biddingPage = ref(1)
const purchasePage = ref(1)

const biddingBody = computed(() => {
  return {
    pageInfo: { pageIndex: biddingPage.value, pageSize: 1 },
    data: { channel_code: 'bidding' }
  }
})
const purchaseBody = computed(() => {
  return {
    pageInfo: { pageIndex: biddingPage.value, pageSize: 1 },
    data: { channel_code: 'purchase' }
  }
})

const { data: biddingList } = useFetch('/api/article/list', {
  method: 'post',
  body: biddingBody
})
const { data: purchaseList } = useFetch('/api/article/list', {
  method: 'post',
  body: purchaseBody
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
        <SitePublicList
          v-model="biddingPage"
          :data="biddingList?.rows || []"
          :total="biddingList?.count || 0"
        ></SitePublicList>
      </n-tab-pane>
      <n-tab-pane
        name="purchase"
        :tab="PublicTab({ icon: 'Purchase', name: '采购信息' })"
      >
        <SitePublicList
          v-model="purchasePage"
          :data="purchaseList?.rows || []"
          :total="purchaseList?.count || 0"
        ></SitePublicList>
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
