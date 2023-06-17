<script lang="ts" setup>
import { NuxtLink } from '#components'

interface PropsType {
  channelTree: any
}
defineProps<PropsType>()
const emit = defineEmits(['menuClick'])
defineOptions({
  name: 'SiteHeaderMobileMenu'
})
const localePath = useLocalePath()
const routePath = useBaseRoutePath()

const isActive = computed(() => {
  const routeArray = routePath.value.split('/')
  return (code: string) => {
    return routeArray.includes(code)
  }
})

function onMenuClick(navigate: any) {
  navigate()
  emit('menuClick')
}
</script>

<template>
  <ul class="items-center head-mobile-menu">
    <li>
      <NuxtLink v-slot="{ navigate }" :to="localePath('/')" custom>
        <span class="block head-menu-item" @click="onMenuClick(navigate)">
          {{ $t('site.home') }}
        </span>
      </NuxtLink>
    </li>
    <n-config-provider
      :theme-overrides="{
        Collapse: {
          dividerColor: 'transparent',
          itemMargin: '0px',
          titlePadding: '0px'
        }
      }"
    >
      <n-collapse accordion arrow-placement="right">
        <template v-for="menu in channelTree" :key="menu.name">
          <n-collapse-item
            v-if="menu.children && menu.children.length > 0"
            :name="menu.id"
          >
            <template #header>
              <span
                class="head-menu-item"
                :class="isActive(menu.code) ? 'router-link-active' : ''"
              >
                {{ menu.name }}
              </span>
            </template>
            <div class="-mt-4 head-sub-menu">
              <li v-for="item in menu.children" :key="item.id">
                <NuxtLink
                  v-slot="{ navigate }"
                  custom
                  :to="localePath(item.link)"
                >
                  <span
                    class="block head-menu-item"
                    @click="onMenuClick(navigate)"
                  >
                    {{ item.name }}
                  </span>
                </NuxtLink>
              </li>
            </div>
          </n-collapse-item>
          <li v-else>
            <NuxtLink
              v-slot="{ navigate }"
              custom
              class="block head-menu-item"
              :to="localePath(menu.link)"
            >
              <span class="block head-menu-item" @click="onMenuClick(navigate)">
                {{ menu.name }}
              </span>
            </NuxtLink>
          </li>
        </template>
      </n-collapse>
    </n-config-provider>
  </ul>
</template>

<style lang="scss" scoped>
.head-mobile-menu {
  --active-text-color: var(--primary-color);
  --active-bg-color: var(--white);

  padding: 0 24px;

  .head-menu-item {
    padding: 20px 0;
    padding-left: 24px;
    font-size: 20px;
    opacity: 0.7;

    &.router-link-active {
      color: var(--active-text-color);
      font-weight: 700;
      opacity: 1;
    }
  }

  .head-sub-menu {
    .head-menu-item {
      padding-left: 40px;
      font-size: 16px;
    }
  }
}

// .siteHeader {
// }
</style>
