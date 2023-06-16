<script lang="ts" setup>
import { useChannelStore } from '~/store/channelState'

defineOptions({ name: 'CommPage' })

const { state } = useProvidePageStore()
const channelStore = useChannelStore()
channelStore.getChannel()

/**
 * 二级栏目
 */
const topChannel = computed(() => {
  const channel = channelStore.channel?.find(
    c => c.code === state.value.topChannelCode
  )
  return channel
})
/**
 * 二级栏目的状态信息
 */
const headState = computed(() => {
  return {
    name: state.value.name || topChannel.value?.name
  }
})
</script>

<template>
  <div class="web-site-main inner-page">
    <NuxtLoadingIndicator />
    <SiteHeader />
    <div class="page-content">
      <SitePageHead :data="headState" :src="topChannel?.thumbnail" />
      <SiteContent class="relative z-10 page-container--wrap">
        <div v-motion class="page-container">
          <slot></slot>
        </div>
      </SiteContent>
    </div>

    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
.inner-page {
  background-color: var(--color-fill-light);

  .page-content {
    padding-bottom: 56px;
  }

  .page-nav-bar {
    @apply flex justify-between;

    padding: 0 40px;
    background-color: var(--color-bg-100);
    border-bottom: 1px solid var(--color-border-2);
    @media screen and (width <= 767px) {
      @apply flex-col;

      padding: 16px 16px 0;
    }
  }

  .page-container--wrap {
    --menu-height: 74px;

    margin-top: calc(0px - var(--menu-height));
    @media screen and (width <= 767px) {
      --menu-height: 56px;
    }
  }

  .page-container {
    --padding-y: 40px;
    --padding-x: 56px;

    padding: var(--padding-x) var(--padding-y);
    background-color: var(--color-bg-100);

    @media screen and (width <= 767px) {
      --padding-y: 16px;
      --padding-x: 16px;
    }
  }
}
</style>
