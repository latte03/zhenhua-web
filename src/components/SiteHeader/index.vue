<script lang="tsx" name="SiteHeader" setup>
import { useMenuOptions } from './_utils'

import { Icon, NuxtLink } from '#components'
import { useChannelStore } from '~/store/channelState'

const localePath = useLocalePath()
const route = useRoute()
const { isScroll } = useScroll()

const channelStore = useChannelStore()
channelStore.getChannel()

const transform = useMenuOptions()
</script>

<template>
  <div
    :class="`fixed z-50 w-screen px-10 site-header ${
      isScroll ? 'is-scroll' : ''
    }`"
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
        <template v-for="menu in channelStore.channelTree" :key="menu.name">
          <n-dropdown
            v-if="menu.children && menu.children.length > 0"
            size="large"
            trigger="click"
            :options="transform(menu.children)"
          >
            <li>
              <div
                class="head-menu-item"
                :class="
                  route.path.includes(menu.code) ? 'router-link-active' : ''
                "
              >
                {{ menu.name }}
              </div>
            </li>
          </n-dropdown>

          <li v-else>
            <NuxtLink class="block head-menu-item" :to="localePath(menu.link)">
              {{ menu.name }}
            </NuxtLink>
          </li>
        </template>
        <!-- <li>
          <NuxtLink class="block head-menu-item" :to="localePath('/')">
            首页
          </NuxtLink>
        </li>
        <n-dropdown size="large" trigger="click" :options="aboutOptions">
          <li>
            <div class="head-menu-item">镇华集团</div>
          </li>
        </n-dropdown>

        <n-dropdown size="large" trigger="click" :options="options">
          <li>
            <div class="head-menu-item">业务板块</div>
          </li>
        </n-dropdown> -->

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
    padding: 32px 16px;
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
      padding: 16px;
    }
  }
}
</style>
