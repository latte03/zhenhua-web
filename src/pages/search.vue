<script lang="ts" setup>
import { useListByAny } from '~/composables/useList'

interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'SearchPages' })
definePageMeta({
  layout: 'inner-page'
})
const route = useRoute()

const searchValue = route.query.q

const { content, page, count } = useListByAny({
  title: searchValue
})

useSeoMeta({
  title: '内容搜索'
})
</script>

<template>
  <SiteList v-model:page="page" :data="content" :count="count" />
</template>
