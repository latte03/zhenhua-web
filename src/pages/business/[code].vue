<script lang="ts" setup>
defineOptions({ name: 'BusinessList' })
definePageMeta({
  layout: 'inner-page'
})
const route = useRoute()
const { t } = useLang()
useInnerPageContent({
  name: t('business.name'),
  slogan: t('business.name'),
  topChannelCode: 'business',
  pageChannelCode: route.params.code as string,
  hasPageBar: true
})!

const { content, page, count } = useListByRouteCode()
</script>

<template>
  <SiteList v-model:page="page" :data="content" :count="count" />
</template>

<style lang="scss">
/** */
</style>
