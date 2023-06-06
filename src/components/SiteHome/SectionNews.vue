<script lang="ts" setup>
defineOptions({ name: 'SectionNews' })

const basePageInfo = {
  pageIndex: 1,
  pageSize: 5
}

function getBody(id: number) {
  return {
    pageInfo: basePageInfo,
    data: {
      channel_id: id
    }
  }
}

const { data: zhenhua } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(20)
})
const { data: industryInformation } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(21)
})
const { data: sceneElegantDemeanor } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(22)
})
const { data: groupNotice } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(23)
})

const swiper = computed(() => {
  return zhenhua.value?.rows.filter(z => {
    return !!z.thumbnail
  })
})
</script>

<template>
  <SiteSection class="relative section-news">
    <SiteSectionTitle
      title="新闻资讯"
      en-title="NEWS AND INFORMATION"
      class="mb-6"
    />
    <div class="flex">
      <SiteCarousel
        v-slot="{ record }"
        size="small"
        class="relative flex-grow-0 flex-shrink-0 mr-6 overflow-hidden section-news-carousel"
        :data-source="swiper || []"
      >
        <div class="wh-full">
          <AgImage
            class="absolute top-0 wh-full carousel-img"
            :src="record.thumbnail"
          />
        </div>
      </SiteCarousel>
      <div class="flex-grow-1 flex-shrink-2">
        <SiteSectionTitle
          size="small"
          title="镇华动态"
          en-title="zhenhua NEWS"
          class="mb-4"
        />
        <SiteNews :data-source="zhenhua?.rows || []" class="w-full" />
      </div>
    </div>
    <n-row class="pt-12" :gutter="[24, 24]">
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="行业资讯"
          en-title="Industry information"
          class="mb-4"
        />
        <SiteNews
          :data-source="industryInformation?.rows || []"
          class="w-full"
        />
      </n-col>
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="现场风采"
          en-title="Scene elegant demeanor"
          class="mb-4"
        />
        <SiteNews
          :data-source="sceneElegantDemeanor?.rows || []"
          class="w-full"
        />
      </n-col>
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="集团告示"
          en-title="Group Notice"
          class="mb-4"
        />
        <SiteNews :data-source="groupNotice?.rows || []" class="w-full" />
      </n-col>
    </n-row>
  </SiteSection>
</template>

<style lang="scss" scoped>
.section-news {
  .section-news-carousel {
    width: 648px;
    height: 376px;
    border-radius: 4px;
  }
}
</style>
