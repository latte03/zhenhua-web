<script lang="ts" setup>
import { useMenuOptions } from './_utils'

import { Icon, NuxtLink } from '#components'

interface PropsType {
  channelTree: any
}
defineProps<PropsType>()
defineOptions({
  name: 'SiteHeader'
})
const localePath = useLocalePath()
const routePath = useBaseRoutePath()
const transform = useMenuOptions()

const isActive = computed(() => {
  const routeArray = routePath.value.split('/')
  return (code: string) => {
    return routeArray.includes(code)
  }
})
</script>

<template>
  <ul class="items-center hidden head-menu md:flex">
    <li>
      <NuxtLink class="block head-menu-item" :to="localePath('/')">
        {{ $t('site.home') }}
      </NuxtLink>
    </li>
    <template v-for="menu in channelTree" :key="menu.name">
      <n-dropdown
        v-if="menu.children && menu.children.length > 0"
        size="large"
        trigger="click"
        :options="transform(menu.children)"
      >
        <li>
          <div
            class="head-menu-item"
            :class="isActive(menu.code) ? 'router-link-active' : ''"
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

    <LanguageSwitch>
      <li class="head-menu-item head-menu-icon-item">
        <n-button class="head-button" round quaternary>
          <Icon name="bi:translate" />
        </n-button>
      </li>
    </LanguageSwitch>

    <SiteHeaderSearch tag="li" class="head-menu-item head-menu-icon-item">
      <n-button class="head-button" round quaternary>
        <Icon name="solar:rounded-magnifer-linear" />
      </n-button>
    </SiteHeaderSearch>
  </ul>
</template>

<style lang="scss" scoped>
// .siteHeader {
// }
</style>
