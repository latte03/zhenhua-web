<script lang="ts" setup>
import { ChannelAttrs } from '~/server/api/channel'
import { useChannelStore } from '~/store/channelState'

defineOptions({ name: 'InnerPage' })

/**
 * TODO： 用路由来监管还是用页面上的code 来管理
 */
const route = useRoute()

const { state } = useProvideInnerPageStore({
  name: '',
  slogan: ''
})

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
    name: topChannel.value?.name,
    slogan: topChannel.value?.description
  }
})

/**
 * 二级栏目的子集栏目
 */
const channelChildren = computed(() => {
  if (topChannel.value && topChannel.value.id) {
    const children = channelStore.channel?.filter(
      c => c.pid === topChannel.value?.id
    )

    return children || []
  }

  return []
})

/**
 * 当前页面的栏目
 */
const pageChannel = computed(() => {
  const channel = channelStore.channel?.find(
    c => c.code === state.value.pageChannelCode
  )
  return channel
})
provide('pageChannel', pageChannel)
/**
 * 当前栏目路径
 */

const breadcrumb = computed(() => {
  return pageChannel.value ? findPath(pageChannel.value) : []
})

function findPath(channel: ChannelAttrs) {
  const path = [channel]

  let pid = channel.pid

  while (pid) {
    const findNextChannel = channelStore.channel?.find(c => c.id === pid)
    if (findNextChannel) {
      path.push(findNextChannel)
      pid = findNextChannel.pid
    }
  }

  return path.reverse()
}
</script>

<template>
  <div class="web-site-main inner-page">
    <SiteHeader />
    <div class="page-content">
      <SitePageHead :data="headState" :src="topChannel?.thumbnail" />
      <SiteContent class="relative z-10 page-container--wrap">
        <div v-if="state.hasPageBar" class="page-nav-bar">
          <SiteBreadcrumb :data="breadcrumb" />

          <SitePageMenu
            v-if="state.pageChannelCode"
            :active-key="state.pageChannelCode || ''"
            :data-source="channelChildren"
          />
        </div>
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
    width: 100%;
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
