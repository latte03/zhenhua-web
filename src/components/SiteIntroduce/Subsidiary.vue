<script lang="ts" setup>
import { KeyValue } from '~/types'

interface PropsType {
  data: KeyValue
}
defineProps<PropsType>()
defineOptions({ name: 'SiteIntroduceSubsidiary' })
</script>

<template>
  <div class="p-4 md:p-6 md:flex-col site-introduce flex-center">
    <div class="mr-2 md:mb-1 logo"><AgImage :src="data.icon_url" alt="" /></div>
    <div class="flex-col md:flex-center">
      <div class="mb-2 font-bold md:mb-4">{{ data.value }}</div>
      <div class="text-xs opacity-50">
        {{ data.desc }}
      </div>
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
  @media screen and (width <= 767px) {
    width: 100%;
    height: auto;
  }
}

.logo {
  width: 56px;
  height: 56px;
}
</style>
