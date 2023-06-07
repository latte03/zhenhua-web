<script lang="ts" setup>
defineOptions({ name: 'NewsPage' })
definePageMeta({
  layout: 'inner-page'
})
const route = useRoute()
useInnerPageContent({
  name: '新闻资讯',
  slogan: '新闻资讯',
  hasPageBar: true,
  topChannelCode: 'news',
  pageChannelCode: route.params.type as string
})!

const { content, page, count } = useListByCode({
  code: route.params.type as string
})
</script>

<template>
  <SiteList v-model:page="page" :data="content" :count="count" />
</template>

<style lang="scss" scoped>
/** */
</style>
