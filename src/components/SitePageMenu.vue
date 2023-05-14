<script lang="ts" setup>
export interface MenuItem {
  name: string
  id: string
}
interface PropsType {
  dataSource: MenuItem[]
  activeKey: string
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SitePageMenu' })
</script>

<template>
  <n-space class="site-page-menu" :size="16">
    <div
      v-for="d in dataSource"
      :key="d.id"
      class="page-menu--item cursor-pointer"
      :class="{ 'is-active': activeKey === d.id }"
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
