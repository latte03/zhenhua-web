<script lang="ts" setup>
interface PropsType {
  channelTree: any
}
defineProps<PropsType>()
defineOptions({
  name: 'SiteHeaderMobileExtra'
})

const [active, setActive] = useToggle()

function onMenuClick() {
  setActive(true)
}
</script>

<template>
  <div class="flex items-center -mr-6">
    <LanguageSwitch>
      <n-button size="small" class="head-button" round quaternary>
        <Icon name="bi:translate" />
      </n-button>
    </LanguageSwitch>
    <SiteHeaderSearch tag="li" class="head-menu-item head-menu-icon-item">
      <n-button size="small" class="head-button" round quaternary>
        <Icon name="solar:rounded-magnifer-linear" />
      </n-button>
    </SiteHeaderSearch>
    <n-button class="head-button" round quaternary @click="onMenuClick">
      <Icon name="solar:hamburger-menu-linear" size="24px" />
    </n-button>
    <n-drawer
      v-model:show="active"
      class="menu-drawer"
      width="100vw"
      placement="right"
    >
      <n-drawer-content closable>
        <SiteHeaderMobileMenu
          :channel-tree="channelTree"
          @menu-click="setActive(false)"
        />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style lang="scss" scoped>
// .siteHeader {
// }
</style>
