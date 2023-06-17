<script lang="ts" setup>
defineOptions({ name: 'AgCol' })
</script>

<template>
  <div class="ag-col"><slot></slot></div>
</template>

<style lang="scss">
.ag-col {
  width: calc(var(--span) * 100% / 24);
  padding: calc(var(--y-gap) / 2) calc(var(--x-gap) / 2);
}
</style>
