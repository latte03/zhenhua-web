<script lang="tsx" name="SiteHeader" setup>
import { Icon, NuxtLink } from '#components'

const { y } = useWindowScroll()

const localePath = useLocalePath()

const isScroll = computed(() => {
  return y.value > 10
})

const options = [
  {
    label: () => (
      <div class="">
        <NuxtLink
          class="block head-menu-item"
          to={localePath('/business/engineering')}
        >
          工程建设
        </NuxtLink>
      </div>
    ),
    key: "brown's hotel, london"
  },
  {
    label: () => (
      <div class="">
        <NuxtLink
          class="block head-menu-item"
          to={localePath('/business/engineering')}
        >
          工程建设222
        </NuxtLink>
      </div>
    ),
    key: "brown's hotel, londo2n"
  }
]
</script>

<template>
  <div
    class="fixed z-50 w-screen px-10 site-header"
    :class="{ 'is-scroll': isScroll }"
  >
    <div class="flex items-center justify-between">
      <div class="logo">
        <SiteLogo width="150px" height="37px" :white="!isScroll" />
      </div>
      <ul class="flex items-center head-menu">
        <li>
          <NuxtLink class="block head-menu-item" :to="localePath('/')">
            首页
          </NuxtLink>
        </li>
        <n-dropdown size="large" trigger="click" :options="options">
          <li>
            <div class="head-menu-item">业务板块</div>
          </li>
        </n-dropdown>

        <LanguageSwitch>
          <li>
            <div class="head-menu-item head-menu-icon-item">
              <Icon name="bi:translate" />
            </div>
          </li>
        </LanguageSwitch>

        <li class="head-menu-item">search</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-header {
  --text-color: var(--white);
  --border-color: var(--color-bg-20);
  --bg-color: transparent;
  --active-text-color: var(--color-text-1);
  --active-bg-color: var(--white);

  transition: all 0.3s ease;
  background-color: var(--bg-color);
  backdrop-filter: blur(0px);
  color: var(--text-color);
  border-bottom: 1px solid var(--border-color);
  .head-menu-item {
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    padding: 32px 24px;
    position: relative;
    opacity: 0.7;
    cursor: pointer;
    font-size: 15px;
    &:hover {
      opacity: 1;
    }
    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      display: block;
      width: 100%;
      height: 32px;
      top: 50%;
      left: 50%;
      background-color: var(--active-bg-color);
      transform: translate(-50%, -50%) scale(0);
      border-radius: 999px;
    }

    &.router-link-active {
      color: var(--active-text-color);
      opacity: 1;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .head-menu-icon-item {
    padding: 32px 16px;
  }
  &.is-scroll {
    --text-color: var(--color-text-1);
    --border-color: var(--color-border);
    --bg-color: var(--color-bg-80);
    --active-text-color: var(--white);
    --active-bg-color: var(--primary-color);

    backdrop-filter: blur(10px);
    .head-menu-item {
      padding: 16px 24px;
    }
    .head-menu-icon-item {
      padding: 16px 16px;
    }
  }
}
</style>
