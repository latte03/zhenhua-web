<script lang="ts" setup>
import { KeyValue } from '~/types'

interface PropsType {
  data: KeyValue
}
defineProps<PropsType>()
defineOptions({ name: 'SiteIntroduceSubsidiary' })
</script>

<template>
  <div class="flex-col p-6 site-introduce flex-center">
    <div class="mb-1 logo"><img :src="data.icon_url" alt="" /></div>
    <div class="mb-4 font-bold">{{ data.value }}</div>
    <div class="text-xs opacity-50">
      {{ data.desc }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-introduce {
  width: 274px;
  height: 274px;
  background: var(--color-fill-light);
  border-radius: 16px;
  opacity: 1;
}
</style>
