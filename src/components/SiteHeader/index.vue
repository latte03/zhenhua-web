<script lang="tsx" name="SiteHeader" setup>
import { useChannelStore } from '~/store/channelState'

const { isScroll } = useScroll()

const channelStore = useChannelStore()
channelStore.getChannel()

const isLargeScreen = useMediaQuery('(min-width: 768px)')
</script>

<template>
  <div
    :class="`fixed z-50 w-screen  px-6 md:px-10 py-4 md:py-0 site-header ${
      isScroll ? 'is-scroll' : ''
    }`"
  >
    <div class="flex items-center justify-between">
      <div class="logo">
        <SiteLogo width="150px" height="37px" :white="!isScroll" />
      </div>
      <SiteHeaderMenu
        v-if="isLargeScreen"
        :channel-tree="channelStore.channelTree"
      />
      <SiteHeaderMobileExtra
        v-else
        :channel-tree="channelStore.channelTree"
        class="flex items-center"
      />
    </div>
  </div>
</template>

<style lang="scss">
.site-header {
  --text-color: var(--white);
  --border-color: var(--color-bg-20);
  --bg-color: transparent;
  --active-text-color: var(--color-text-1);
  --active-bg-color: var(--white);

  color: var(--text-color);
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
  backdrop-filter: blur(0);
  transition: all 1s ease;

  .head-menu-item {
    position: relative;
    padding: 32px 24px;
    font-size: 15px;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      opacity: 1;
    }

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      display: block;
      width: 100%;
      height: 32px;
      background-color: var(--active-bg-color);
      border-radius: 999px;
      transform: translate(-50%, -50%) scale(0);
      content: '';
    }

    &.router-link-active {
      color: var(--active-text-color);
      opacity: 1;

      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .head-menu-icon-item {
    padding: 8px 2px;
  }

  .head-button {
    color: var(--text-color);

    &:hover {
      color: var(--text-color);
    }
  }

  &.is-scroll {
    --text-color: var(--color-text-1);
    --border-color: var(--color-border);
    --bg-color: var(--color-bg-90);
    --active-text-color: var(--white);
    --active-bg-color: var(--primary-color);

    backdrop-filter: blur(10px);

    .head-menu-item {
      padding: 16px 24px;
    }

    .head-menu-icon-item {
      padding: 6px 2px;
    }
  }
}
</style>
