<script lang="ts" setup>
defineOptions({ name: 'AboutOrganizational' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213' }
})

const { setState } = useInnerPageStore()!

setState({
  name: '关于镇华',
  slogan: '关于镇华',
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
  <div class="AboutOrganizational" v-html="content"></div>
</template>
