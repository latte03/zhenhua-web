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

const channels = computed(() => {
  const channel = channelStore.channel?.find(c => c.link === routePath.value)

  const channels = channelStore.channel?.filter(c => c.pid === channel?.id)

  return channels || []
})
</script>

<template>
  <div class="business-page media-container">
    <ag-row
      class="ag-row"
      :x-gap="[32, 16]"
      :y-gap="[48, 16]"
      :span="[6, 6, 12]"
    >
      <ag-col v-for="(d, index) in channels" :key="d.id" class="ag-col">
        <BusinessCard
          v-motion="{ delay: index + 1 }"
          :data="{
          icon: d.icon!,
          name: d.name,
          desc: d.description,
          id: d.id,
          thumbnail: d.thumbnail,
          link: d.link,
          code: d.code,
          link_type: d.link_type
        }"
        />
      </ag-col>
    </ag-row>
  </div>
</template>

<style lang="scss" scoped>
/** */

.business-page {
  // width: 1440px;
  // margin: 0 auto;
  // @media screen and (width <= 1440px) {
  //   width: 100%;
  // }
}
</style>
