<script lang="ts" setup>
import { useListByAny } from '~/composables/useList'

defineOptions({ name: 'SearchPages' })
definePageMeta({
  layout: 'comm-page'
})
const route = useRoute()

const searchValue = computed(() => {
  return {
    q: route.query.q
  }
})
const { content, page, count } = useListByAny(searchValue, {
  url: '/api/article/search'
})
const { state } = useCommonPageStore()!
onMounted(() => {
  state.value.topChannelCode = 'news'
  state.value.name = `搜索：${route.query.q}`
})

useSeoMeta({
  title: state.value.name
})
</script>

<template>
  <SiteList v-model:page="page" :data="content" :count="count" />
</template>
