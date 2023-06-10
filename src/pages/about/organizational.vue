<script lang="ts" setup>
defineOptions({ name: 'AboutOrganizational' })
definePageMeta({
  layout: 'inner-page'
})

const { t } = useLang()
useInnerPageContent({
  name: t('about.name'),
  slogan: t('about.name'),
  hasPageBar: true,
  topChannelCode: 'about',
  pageChannelCode: 'organizational'
})!

const { data } = useFetch('/api/article/list', {
  method: 'post',
  body: {
    pageInfo: {
      pageIndex: 1,
      pageSize: 5
    },
    data: {
      channel_code: 'organizational'
    }
  }
})

const content = computed(() => {
  return data.value?.rows[0].content
})
</script>

<template>
  <div class="AboutOrganizational rich-content" v-html="content"></div>
</template>
