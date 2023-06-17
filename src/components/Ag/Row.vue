<script lang="ts" setup>
interface PropsType {
  xGap?: number[]
  yGap?: number[]
  span?: number[]
}
const props = withDefaults(defineProps<PropsType>(), {
  xGap: () => [0, 0],
  yGap: () => [0, 0],
  span: () => [6, 12]
})
defineOptions({
  name: 'AgRow'
})

const spanExtra = computed(() => {
  return handleData(props.span)
})
const xGapExtra = computed(() => {
  return handleData(props.xGap)
})
const yGapExtra = computed(() => {
  return handleData(props.yGap)
})

function handleData(data: number[]) {
  if (data.length === 3) {
    return data
  } else {
    return [data[0], ...data]
  }
}
</script>

<template>
  <div class="ag-row">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ag-row {
  @apply flex flex-wrap;

  --x-gap: v-bind(`${xGapExtra[0]}px`);
  --y-gap: v-bind(`${yGapExtra[0]}px`);
  --span: v-bind(spanExtra[0]);

  margin: 0 calc(var(--x-gap) / -2);

  @media screen and (width <=1440px) {
    --x-gap: v-bind(`${xGapExtra[1]}px`);
    --y-gap: v-bind(`${yGapExtra[1]}px`);
    --span: v-bind(spanExtra[1]);
  }

  @media screen and (width <=767px) {
    --x-gap: v-bind(`${xGapExtra[2]}px`);
    --y-gap: v-bind(`${yGapExtra[2]}px`);
    --span: v-bind(spanExtra[2]);
  }
}
</style>
