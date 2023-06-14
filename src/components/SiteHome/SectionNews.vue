<script lang="ts" setup>
defineOptions({ name: 'SectionNews' })

const basePageInfo = {
  pageIndex: 1,
  pageSize: 5
}
const { locale } = useI18n()
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
  body: getBody(20),
  query: {
    locale
  }
})
const { data: industryInformation } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(21),
  query: {
    locale
  }
})
const { data: sceneElegantDemeanor } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(22),
  query: {
    locale
  }
})
const { data: groupNotice } = useFetch('/api/article/list', {
  method: 'post',
  body: getBody(23),
  query: {
    locale
  }
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
    <div class="flex news-container">
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
      <div class="mt-6 flex-grow-1 flex-shrink-2 md:mt-0">
        <SiteSectionTitle
          size="small"
          title="镇华动态"
          en-title="zhenhua NEWS"
          class="mb-4"
        />
        <SiteNews :data-source="zhenhua?.rows || []" class="w-full" />
      </div>
    </div>
    <n-grid
      class="pt-12"
      :x-gap="24"
      :y-gap="24"
      cols="1 s:1 m:1 l:2 xl:3 2xl:3"
      responsive="screen"
    >
      <n-grid-item>
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
      </n-grid-item>
      <n-grid-item>
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
      </n-grid-item>
      <n-grid-item>
        <SiteSectionTitle
          size="small"
          title="集团告示"
          en-title="Group Notice"
          class="mb-4"
        />
        <SiteNews :data-source="groupNotice?.rows || []" class="w-full" />
      </n-grid-item>
    </n-grid>
  </SiteSection>
</template>

<style lang="scss" scoped>
.section-news {
  .section-news-carousel {
    width: 648px;
    height: 376px;
    border-radius: 4px;
    @media screen and (width <= 767px) {
      width: 100%;
      height: calc((100vw - 48px) * 0.56);
    }
  }
}

.news-container {
  @media screen and (width <= 767px) {
    flex-wrap: wrap;
  }
}
</style>
