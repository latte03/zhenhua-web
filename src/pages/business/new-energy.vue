<script lang="ts" setup>
defineOptions({ name: 'NewEnergy' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '业务板块',
  slogan: '业务板块',
  topChannelCode: 'business',
  pageChannelCode: 'new-energy'
})
const afterPageTransition = ref(false)

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      afterPageTransition.value = true
    }, 500)
  })
})
</script>

<template>
  <SiteLayoutNewEnergy>
    <ClientOnly>
      <SiteMap v-if="afterPageTransition" />
    </ClientOnly>
  </SiteLayoutNewEnergy>
</template>

<style lang="scss" scoped>
/** */
.new-energy {
  --map-height: 900px;
  --map-width: 100%;
  @apply relative;
}
</style>
