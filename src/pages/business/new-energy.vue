<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'NewEnergy' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '业务板块',
  slogan: '123213'
})
</script>

<template>
  <SiteLayoutNewEnergy>
    <SiteMap />
  </SiteLayoutNewEnergy>
</template>

<style lang="scss" scoped>
/** */
</style>
