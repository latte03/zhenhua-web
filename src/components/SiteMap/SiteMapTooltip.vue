<script lang="ts" setup>
import { ToolTipData } from '~/composables/useMap'

interface PropsType {
  data: ToolTipData
}
defineProps<PropsType>()
defineOptions({ name: 'SiteMapTooltip' })
</script>

<template>
  <div
    class="map-tooltip absolute z-10"
    :style="{
      top: `${(data.rect?.[1] || 0) - 50}px`,
      left: `${data.rect?.[0]}px`
    }"
  >
    <div class="flex">
      <Icon class="tool-icon" name="ChargingStation" />
      <div class="ml-3">
        <span class="block tool-value">{{ data.data.value }}</span>
        <span class="block tool-label">充电桩</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-tooltip {
  @apply p-3;

  background: var(--white);
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(6, 13, 30, 24%);
  transform: translate(-50%, -50%);
  opacity: 1;

  &::after {
    @apply block absolute;

    bottom: -7px;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 8px solid #fff;
    border-right: 8px solid transparent;
    border-bottom: none;
    border-left: 8px solid transparent;
    transform: translateX(-50%);
    content: '';
  }

  .tool-icon {
    font-size: 32px;
    line-height: 1;
  }

  .tool-label {
    @apply opacity-50;

    color: var(--primary-color);
    font-size: 12px;
    line-height: 1;
  }

  .tool-value {
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
  }
}
</style>
