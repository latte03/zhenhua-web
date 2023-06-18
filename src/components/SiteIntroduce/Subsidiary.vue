<script lang="ts" setup>
import { SiteSubsidiary } from '~/server/api/subsidiaries'

interface PropsType {
  data: SiteSubsidiary
}
defineProps<PropsType>()
defineOptions({ name: 'SiteIntroduceSubsidiary' })
</script>

<template>
  <div class="flex-col justify-start p-4 md:p-6 site-introduce flex-center">
    <div class="mb-2 logo">
      <AgImage
        v-if="data.logo"
        class="object-contain"
        :src="data.logo"
        alt=""
      />
      <div
        v-else
        class="h-full text-lg font-bold opacity-50 flex-center"
        style="color: var(--primary-color)"
      >
        {{ data.title }}
      </div>
    </div>
    <div class="flex-col flex-center">
      <div class="mb-2 font-bold md:mb-4">{{ data.title }}</div>
      <div class="text-xs opacity-50">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-introduce {
  width: 274px;
  height: 274px;
  background: var(--color-fill-light);
  border-radius: 8px;
  opacity: 1;
  @media screen and (width <= 767px) {
    width: 100%;
    height: auto;
  }
}

.logo {
  width: 248px;
  height: 80px;
  @media screen and (width <= 767px) {
    width: 100%;
    height: auto;
  }
}
</style>
