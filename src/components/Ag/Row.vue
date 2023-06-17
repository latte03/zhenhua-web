<script lang="ts" setup>
interface PropsType {
  xGap?: number[]
  yGap?: number[]
  span?: number[]
}
withDefaults(defineProps<PropsType>(), {
  xGap: () => [0, 0],
  yGap: () => [0, 0],
  span: () => [6, 12]
})
defineOptions({
  name: 'AgRow'
})
</script>

<template>
  <div class="ag-row">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ag-row {
  @apply flex flex-wrap;

  --x-gap: v-bind(`${xGap[0]}px`);
  --y-gap: v-bind(`${yGap[0]}px`);
  --span: v-bind(span[0]);

  margin: 0 calc(var(--x-gap) / -2);

  @media screen and (width <=767px) {
    --x-gap: v-bind(`${xGap[1]}px`);
    --y-gap: v-bind(`${yGap[1]}px`);
    --span: v-bind(span[1]);
  }
}
</style>
