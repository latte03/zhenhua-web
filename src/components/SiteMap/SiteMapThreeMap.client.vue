<script lang="ts" setup>
// import 'echarts-gl'
import VChart from 'vue-echarts'
import { CurrentMap } from './type'
import { use3DMap, useECharts, useRegister } from './composables/use3DMap'
import { useResize } from './composables/useResize'

interface PropsType {
  value: CurrentMap
}
const props = defineProps<PropsType>()
const emit = defineEmits(['back'])
defineOptions({ name: 'SiteMapThreeMap' })
useECharts()
const { chatRef, option } = use3DMap(() => props.value)
const { registered } = useRegister(props.value)
useResize(chatRef, registered)
</script>

<template>
  <div class="three-map wh-full">
    <n-space class="absolute z-10 do-back" align="center">
      <n-button secondary class="flex items-center" @click="emit('back')">
        <Icon name="solar:arrow-left-broken" class="mr-2" />
        <span>返回</span>
      </n-button>
      <n-divider class="custom-color" vertical />
      <span>{{ value.name }}</span>
    </n-space>
    <VChart
      v-if="registered"
      ref="chatRef"
      class="three-map wh-full"
      :option="option"
    />
  </div>
</template>

<style lang="scss" scoped>
.do-back {
  @apply left-10 top-10;
}

.n-divider.custom-color {
  background-color: var(--color-black-bg-20);
}
</style>

<style lang="scss">
.charging-title {
  padding: 0 8px;
  color: var(--color-text-1);
  font-size: 16px;
}

.charging-address {
  @apply mb-1;

  display: flex;
  align-items: center;
  padding: 0 8px;
  color: var(--color-text-1);
  font-style: normal;
}

.icon-charge {
  display: block;
  width: 20px;
  height: 20px;
  background: url('~/assets/images/icon-charge.svg');
  background-size: 100%;
}
</style>
