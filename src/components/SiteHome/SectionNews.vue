<script lang="ts" setup>
defineOptions({ name: 'SectionNews' })

const news = ref([
  {
    name: `
从nuxt2升级nuxt3 rc版有些日子了，随着nuxt3正式版发布升级了框架，顺便升级了@unocss/nuxt，发现运行npm run build报错。

升级前0.46.x 版本没有该问题，经过测试0.47.x和0.48.0版本均有该问题，升级后的依赖配置如下：`,
    id: '222'
  },
  {
    name: `
从nuxt2升级nuxt3 rc版有些日子了，随着nuxt3正式版发布升级了框架，顺便升级了@unocss/nuxt，发现运行npm run build报错。

升级前0.46.x 版本没有该问题，经过测试0.47.x和0.48.0版本均有该问题，升级后的依赖配置如下：`,
    id: '22eee2'
  }
])
const swiper = ref([
  {
    id: 1,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd',
    desc: 'ddddddd'
  },
  {
    id: 2,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd22',
    desc: 'dddddd11d'
  }
])
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
        :data-source="swiper"
      >
        <div class="wh-full">
          <img class="absolute top-0 wh-full carousel-img" :src="record.img" />
        </div>
      </SiteCarousel>
      <div class="flex-grow-1 flex-shrink-2">
        <SiteSectionTitle
          size="small"
          title="镇华动态"
          en-title="zhenhua NEWS"
          class="mb-4"
        />
        <SiteNews :data-source="news" class="w-full" />
      </div>
    </div>
    <n-row class="pt-6" :gutter="[24, 24]">
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="行业资讯"
          en-title="Industry information"
          class="mb-4"
        />
        <SiteNews :data-source="news" class="w-full" />
      </n-col>
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="现场风采"
          en-title="Scene elegant demeanor"
          class="mb-4"
        />
        <SiteNews :data-source="news" class="w-full" />
      </n-col>
      <n-col :span="8">
        <SiteSectionTitle
          size="small"
          title="集团告示"
          en-title="Group Notice"
          class="mb-4"
        />
        <SiteNews :data-source="news" class="w-full" />
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
