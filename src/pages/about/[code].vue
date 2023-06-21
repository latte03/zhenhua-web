<script lang="ts" setup>
defineOptions({ name: 'BusinessList' })
definePageMeta({
  layout: 'inner-page'
})
const { t } = useLang()
useInnerPageContent({
  name: t('about.name'),
  slogan: t('about.name'),
  topChannelCode: 'about',
  pageChannelCode: 'culture'
})!

const { content, page, count } = useListByRouteCode()
</script>

<template>
  <SiteList v-model:page="page" :data="content" :count="count" />
</template>

<style lang="scss">
/** */
</style>
