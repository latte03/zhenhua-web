<script lang="ts" setup>
import { LogoDefault, LogoWhite } from '#components'

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
  <LogoWhite v-show="white" key="logo-white" :width="width" :height="height" />
  <LogoDefault
    v-show="!white"
    key="logo-default"
    :width="width"
    :height="height"
  />
</template>
