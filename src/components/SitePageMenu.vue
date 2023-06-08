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
    <n-space class="site-page-menu" :size="16">
      <div
        v-for="d in dataSource"
        :key="d.id"
        class="cursor-pointer page-menu--item"
        :class="{
          'is-active': activeKey === d.code || activeKey.includes(d.link)
        }"
        @click="onClick(d)"
      >
        <span class="page-menu--text">{{ d.name }}</span>
      </div>
    </n-space>
    <div
      class="absolute page-menu-line"
      :style="{
        '--line-width': lineState.width,
        '--line-x': lineState.x
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.page-menu {
  &--text {
    opacity: 0.5;
  }

  &--item {
    height: var(--menu-height);
    padding: 0 24px;
    line-height: var(--menu-height);

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
