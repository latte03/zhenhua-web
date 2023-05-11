<script lang="ts" setup>
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
  <Icon
    :name="white ? 'LogoWhite' : 'LogoDefault'"
    :width="width"
    :height="height"
  />
</template>
