<script lang="ts" setup>
import { useChannelStore } from '~/store/channelState'

defineOptions({
  name: 'BusinessEngineering'
})

definePageMeta({
  layout: 'inner-page'
})

const { t } = useLang()
useInnerPageContent({
  name: t('business.name'),
  slogan: t('business.name'),

  topChannelCode: 'business',
  pageChannelCode: 'engineering'
})

const routePath = useBaseRoutePath()
const channelStore = useChannelStore()
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const channels = computed(() => {
  const channel = channelStore.channel?.find(c => c.link === routePath.value)

  const channels = channelStore.channel?.filter(c => c.pid === channel?.id)

  return channels || []
})
</script>

<template>
  <div class="business-page">
    <n-grid
      :x-gap="isLargeScreen ? 32 : 16"
      :y-gap="isLargeScreen ? 48 : 16"
      :layout-shift-disabled="true"
      :cols="isLargeScreen ? 4 : 2"
    >
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
