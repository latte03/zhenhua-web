<script lang="ts" setup>
import { useChannelStore } from '~/store/channelState'

defineOptions({
  name: 'BusinessEngineering'
})

definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '业务板块',
  slogan: '业务板块',

  topChannelCode: 'business',
  pageChannelCode: 'engineering'
})

const route = useRoute()
const channelStore = useChannelStore()

const channels = computed(() => {
  const channel = channelStore.channel?.find(c => c.link === route.path)

  const channels = channelStore.channel?.filter(c => c.pid === channel?.id)

  return channels || []
})
</script>

<template>
  <div class="business-page">
    <n-grid x-gap="32" y-gap="48" :layout-shift-disabled="true" :cols="4">
      <n-gi v-for="d in channels" :key="d.id">
        <BusinessCard
          :data="{
            icon: d.icon!,
            name: d.name,
            desc: d.description,
            id: d.id,
            thumbnail: d.thumbnail,
            link: d.link,
            code:d.code,
            link_type:d.link_type
          }"
        />
      </n-gi>
    </n-grid>
  </div>
</template>

<style lang="scss" scoped>
/** */
</style>
