<script lang="ts" setup>
defineOptions({ name: 'SiteSection' })
</script>

<template>
  <SiteContent class="py-24 site-section">
    <slot></slot>
  </SiteContent>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line block-no-empty */
.site-section {
}
</style>
