<script lang="ts" setup>
defineOptions({ name: 'AboutCulture' })

definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213' }
})

const { t } = useLang()
useInnerPageContent({
  name: t('about.name'),
  slogan: t('about.name'),
  topChannelCode: 'about',
  pageChannelCode: 'culture'
})!

const { data } = useFetch('/api/article/list', {
  method: 'post',
  body: {
    pageInfo: {
      pageIndex: 1,
      pageSize: 1
    },
    data: {
      channel_code: 'culture'
    }
  }
})

const content = computed(() => {
  return data.value?.rows[0].content
})
</script>

<template>
  <div class="about-culture">
    <div class="rich-content" v-html="content"></div>
    <!-- <div class="mb-4 text-2xl font-bold text-center">
      以人为本、求质量、重信誉
    </div>
    <div>
      企业文化是企业的灵魂，是推动企业发展的不竭动力。它包含非常丰富的内容，其核心是企业的精神和价值观。这里的价值观不是泛指企业管理中的各种文化现象，而是企业或企业中的员工在从事生产与经营中所持有的价值观念。
    </div>
    <div>img</div>
    <ul class="mt-6">
      <li>
        <div class="flex items-stretch justify-between">
          <div class="flex flex-col justify-between fixed-with">
            <div class="title-group">
              <div class="title">集团管理方针</div>
              <div class="mt-1 desc">
                以人为本、诚信守法、和谐自然、建造精品
              </div>
            </div>

            <div class="text-2xl index opacity-40">01</div>
          </div>
          <div class="text-sm fixed-with-2 opacity-80">
            以人为本、诚信守法、和谐自然、建造精品是镇华集团的企业管理方针，是镇华集团苦练内功增强凝聚力的指导思想，是现代企业管理思想、管理原则、管理艺术、管理目标的集中体现。“以人为本”是镇华集团管理思想的立足点；“诚信守法”是镇华集团建积极倡导和坚持的工作理念；“和谐自然”是现代电力工程企业必须坚持的理念；“建造精品电力工程”是镇华集团生产经营活动管理的根本目标和质量要求，是立足于社会、回报社会和满足用户的基本要求。
          </div>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
.about-culture {
  @apply m-auto;

  width: max(60vw, 500px);
  line-height: 1.8;
}

.fixed-with {
  flex-shrink: 0;
  width: 268px;
}

.fixed-with-2 {
  @apply pb-2;

  width: 520px;
  height: 140px;
  border-bottom: 1px solid var(--color-border-2);
}

.title {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
}

.desc {
  color: var(--secondary-color);
  font-size: 14px;
  line-height: 20px;
}
</style>
