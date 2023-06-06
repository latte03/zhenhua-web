<script lang="ts" setup>
defineOptions({ name: 'BusinessEngineeringList' })
definePageMeta({
  layout: 'inner-page'
})
const route = useRoute()
useInnerPageContent({
  name: '业务板块',
  slogan: '业务板块',
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
