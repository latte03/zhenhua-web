<script lang="ts" setup>
import { PublicTab } from '@/components/SitePublic/Tab'

defineOptions({ name: 'PublicProcurement' })
definePageMeta({
  layout: 'inner-page'
})
const { t } = useLang()
useInnerPageContent({
  name: t('public.procurment_name'),
  slogan: t('public.procurment_name'),
  topChannelCode: 'public',
  pageChannelCode: 'procurement'
})

const {
  content: biddingList,
  page: biddingPage,
  count: biddingCount
} = useListByCode({ code: 'bidding' })
const {
  content: purchaseList,
  page: purchasePage,
  count: purchaseCount
} = useListByCode({ code: 'purchase' })

useSeoMeta({
  title: `${t('public.procurment_name')} 
  ｜
  ${t('public.information_disclosure')}`,
  description: `${t('public.information_disclosure')},
  ${t('public.bidding')}${t('public.information')},
${t('public.purchase')}${t('public.information')}`
})
</script>
<template>
  <div class="public-procurement">
    <n-tabs type="segment" animated justify-content="space-evenly">
      <n-tab-pane
        name="bidding"
        :tab="
          PublicTab({
            icon: 'Bidding',
            name: `${t('public.bidding_information')}`
          })
        "
        class="br"
      >
        <SitePublicList
          v-model="biddingPage"
          :data="biddingList || []"
          :total="biddingCount || 0"
        ></SitePublicList>
      </n-tab-pane>
      <n-tab-pane
        name="purchase"
        :tab="
          PublicTab({
            icon: 'Purchase',
            name: `${t('public.purchase_information')}`
          })
        "
      >
        <SitePublicList
          v-model="purchasePage"
          :data="purchaseList || []"
          :total="purchaseCount || 0"
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
    @media screen and (width <= 767px) {
      width: auto;
    }
  }

  .public-tab {
    @apply flex-center py-3 md:px-6 px-3 rounded;

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
