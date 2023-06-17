<script lang="ts" setup>
defineOptions({ name: 'NewEnergy' })
definePageMeta({
  layout: 'inner-page'
})
const { t, locale } = useLang()
useInnerPageContent({
  name: t('business.name'),
  slogan: t('business.name'),
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

const { data } = useFetch('/api/new-energy', { query: { locale } })
</script>

<template>
  <SiteLayoutNewEnergy>
    <ClientOnly>
      <SiteMap v-if="afterPageTransition" :data="data" />
    </ClientOnly>
  </SiteLayoutNewEnergy>
</template>

<style lang="scss">
/** */
</style>
