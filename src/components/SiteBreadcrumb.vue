<script lang="ts" setup>
// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'SiteBreadcrumb' })
</script>

<template>
  <div class="flex items-center">
    <span class="flex items-center">
      <Icon name="solar:map-point-wave-line-duotone" class="opacity-60 mr-1" />
      <span class="opacity-50 text-xs">您的位置：</span>
    </span>
    <n-breadcrumb separator=">">
      <n-breadcrumb-item>
        <span class="text-xs">北京总行</span>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <span class="text-xs">天津分行</span>
      </n-breadcrumb-item>
      <n-breadcrumb-item>
        <span class="text-xs">平山道支行</span>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>
