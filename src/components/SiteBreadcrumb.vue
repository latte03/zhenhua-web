<script lang="ts" setup>
import { ChannelAttrs } from '~/server/api/channel'

interface PropsType {
  data: ChannelAttrs[]
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SiteBreadcrumb' })
</script>

<template>
  <div class="flex items-center">
    <span class="flex items-center">
      <Icon name="solar:map-point-wave-line-duotone" class="mr-1 opacity-60" />
      <span class="text-xs opacity-50">您的位置：</span>
    </span>
    <n-breadcrumb separator=">">
      <n-breadcrumb-item v-for="d in data" :key="d.id">
        <span class="text-xs">{{ d.name }}</span>
      </n-breadcrumb-item>
      <!-- <n-breadcrumb-item>
        <span class="text-xs">天津分行</span>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <span class="text-xs">平山道支行</span>
      </n-breadcrumb-item> -->
    </n-breadcrumb>
  </div>
</template>
