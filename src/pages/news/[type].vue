<script lang="ts" setup>
defineOptions({ name: 'NewsPage' })
definePageMeta({
  layout: 'inner-page'
})
const { t } = useLang()
const route = useRoute()
useInnerPageContent({
  name: t('news.name'),
  slogan: t('news.name'),
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
