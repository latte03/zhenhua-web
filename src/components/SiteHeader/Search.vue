<script lang="ts" setup>
interface PropsType {
  tag?: string
}
withDefaults(defineProps<PropsType>(), {
  tag: 'div'
})
defineOptions({ name: 'SiteHeaderSearch' })
const [showSearch, toggleSearch] = useToggle()
function onSearchClick() {
  toggleSearch(true)
}
</script>

<template>
  <div>
    <div @click="onSearchClick"><slot></slot></div>
    <Teleport to="body">
      <SiteSearch v-model:show="showSearch" />
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
// .siteHeader {
// }
</style>
