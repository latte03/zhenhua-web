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
defineOptions({ name: 'SitePageMenu' })

const router = useRouter()

const localePath = useLocalePath()

function onClick(d: ChannelAttrs) {
  if (d.link_type === 'path') {
    router.push({
      path: localePath(d.link)
    })
  } else {
    window.open(d.link, '_blank')
  }
}
</script>

<template>
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
        opacity: 1;
      }
    }

    &:hover {
      background-color: var(--color-fill-light);
    }
  }
}
</style>
