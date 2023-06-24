<script lang="ts" setup>
import { Attrs } from '~/server/api/channel'

defineOptions({ name: 'AboutComListTemp' })
definePageMeta({
  layout: 'inner-page'
})
const { t } = useLang()
const route = useRoute()
useInnerPageContent({
  name: t('about.name'),
  slogan: t('about.name'),
  topChannelCode: 'about',
  pageChannelCode: (route.params.code || 'about') as string
})!
const pageChannel = inject('pageChannel')! as Ref<Attrs>

const { content, page, count } = useListByRouteCode()

const pageContent = computed(() => {
  return content.value[0].content
})
</script>

<template>
  <SiteList
    v-if="pageChannel.template_type === 'list'"
    v-model:page="page"
    :data="content"
    :count="count"
  />

  <div
    v-else
    class="AboutOrganizational rich-content"
    v-html="pageContent"
  ></div>
</template>

<style lang="scss">
/** */
</style>
