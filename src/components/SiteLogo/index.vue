<script lang="ts" setup>
import { LogoDefault } from '#components'
import LogoWiteSvg from '@/assets/images/logo-white.svg'

interface PropsType {
  white?: boolean
  size?: string
  width?: string
  height?: string
}
defineProps<PropsType>()
defineOptions({ name: 'SiteLogo' })
</script>

<template>
  <div v-show="white" class="" :style="{ width, height }">
    <AgImage class="w-full h-full" :src="LogoWiteSvg" alt="" />
  </div>
  <!-- <LogoWhite v-show="white" key="logo-white" :width="width" :height="height" /> -->
  <LogoDefault
    v-show="!white"
    key="logo-default"
    :width="width"
    :height="height"
  />
</template>
