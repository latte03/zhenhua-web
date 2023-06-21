<script lang="ts" setup>
import { ChannelAttrs } from '~/server/api/channel'

export interface MenuItem {
  name: string
  id: string
}
interface PropsType {
  dataSource: ChannelAttrs[]
  activeKey: string
}
const props = defineProps<PropsType>()
const { activeKey } = toRefs(props)
defineOptions({ name: 'SitePageMenu' })

const router = useRouter()

const localePath = useLocalePath()

const lineState = ref({
  width: '0px',
  x: '0'
})
async function onClick(d: ChannelAttrs) {
  if (d.link_type === 'path') {
    router.push({
      path: localePath(d.link)
    })
  } else {
    window.open(d.link, '_blank')
  }
}

watchEffect(async () => {
  if (activeKey.value) {
    await nextTick()
    const pageMenu = document.querySelector(
      '.page-menu--item.is-active'
    ) as HTMLDivElement
    lineState.value = {
      width: `${(pageMenu?.clientWidth || 0) - 48}px`,
      x: `${pageMenu?.offsetLeft + 24}px`
    }
  }
})
</script>

<template>
  <div class="relative">
    <n-config-provider
      abstract
      :theme-overrides="{
        Tabs: {
          tabBorderColor: 'transparent',
          tabPaddingMediumLine: '0px'
        }
      }"
    >
      <n-tabs :value="activeKey" type="line" animated pane-style="display:none">
        <n-tab v-for="d in dataSource" :key="d.id" :name="d.code" :tab="d.name">
          <div
            class="cursor-pointer page-menu--item"
            :class="{
              'is-active': activeKey === d.code || activeKey.includes(d.link)
            }"
            @click="onClick(d)"
          >
            <span class="page-menu--text">{{ d.name }}</span>
          </div>
        </n-tab>
      </n-tabs>
    </n-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.site-page-menu {
  @media screen and (width <= 767px) {
    @apply mt-4;
  }
}

.page-menu {
  &--text {
    opacity: 0.5;
    @media screen and (width <= 767px) {
      font-size: 14px;
    }
  }

  &--item {
    height: var(--menu-height);
    padding: 0 24px;
    line-height: var(--menu-height);
    @media screen and (width <= 767px) {
      padding: 0 12px;
    }

    &.is-active {
      color: var(--primary-color);

      /* stylelint-disable-next-line selector-class-pattern */
      .page-menu--text {
        font-weight: 700;
        opacity: 1;
      }
    }

    &:hover {
      background-color: var(--color-fill-light);
    }
  }
}

.page-menu-line {
  @apply transition-base bottom-0 left-0;

  width: var(--line-width);
  height: 2px;
  background-color: var(--primary-color);
  transform: translateX(var(--line-x));
}
</style>
