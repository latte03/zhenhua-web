<script lang="ts" setup>
import dayjs from 'dayjs'
import { GridItemProps } from 'naive-ui'
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'PublicRecruitment' })
definePageMeta({
  layout: 'inner-page'
})

const { t, locale } = useLang()
useInnerPageContent({
  // 保底信息
  name: t('public.information_disclosure'),
  slogan: t('public.information_disclosure'),
  topChannelCode: 'public',
  pageChannelCode: 'recruitment'
})
const isLargeScreen = useMediaQuery('(min-width: 768px)')
const SPAN = computed<Record<string, GridItemProps['span']>>(() => {
  return {
    POST: isLargeScreen.value ? 8 : 10,
    NUM: isLargeScreen.value ? 4 : 6,
    EDU: isLargeScreen.value ? 4 : 8,
    EXP: isLargeScreen.value ? 4 : 0,
    OTHER: isLargeScreen.value ? 4 : 0
  }
})

const { data } = useFetch('/api/recruitment', {
  params: {
    locale
  }
})

useSeoMeta({
  title: `${t('public.recruitment_info')} 
  ｜
  ${t('public.information_disclosure')}`,
  description: `${t('public.information_disclosure')}`
})
</script>
<template>
  <div class="public-recruitment">
    <div class="mb-6">
      <n-grid class="re-header">
        <n-gi :span="SPAN.POST">
          <div class="header-item re-header-layout">
            {{ t('public.recruitment_positions') }}
          </div>
        </n-gi>
        <n-gi :span="SPAN.NUM">
          <div class="header-item re-header-layout">
            {{ t('public.number') }}
          </div>
        </n-gi>
        <n-gi :span="SPAN.EDU">
          <div class="header-item re-header-layout">
            {{ t('public.education') }}
          </div>
        </n-gi>
        <n-gi :span="SPAN.EXP">
          <div class="header-item re-header-layout">
            {{ t('public.experience') }}
          </div>
        </n-gi>
        <n-gi :span="SPAN.OTHER">
          <div class="header-item re-header-layout"></div>
        </n-gi>
      </n-grid>
    </div>
    <n-collapse>
      <n-collapse-item name="3" v-for="d in data" :key="d.id">
        <template #header>
          <n-grid class="collapse-head">
            <n-gi :span="SPAN.POST">
              <div class="font-bold header-item re-header-layout">
                {{ d.title }}
              </div>
            </n-gi>
            <n-gi :span="SPAN.NUM">
              <div class="header-item re-header-layout">
                {{ d.num }} {{ t('public.people') }}
              </div>
            </n-gi>
            <n-gi :span="SPAN.EDU">
              <div class="header-item re-header-layout">{{ d.education }}</div>
            </n-gi>
            <n-gi :span="SPAN.EXP">
              <div class="header-item re-header-layout">
                {{ d.experience }} {{ t('public.years') }}
              </div>
            </n-gi>
            <n-gi :span="SPAN.OTHER">
              <div
                class="flex items-center justify-end opacity-50 header-item re-header-layout"
              >
                <div class="mr-4 text-xs md:text-sm">
                  {{ dayjs(d.create_time).format('YYYY-MM-DD') }}
                </div>
                <div><Icon name="solar:alt-arrow-up-line-duotone"></Icon></div>
              </div>
            </n-gi>
          </n-grid>
        </template>
        <div class="content">
          <div class="content-body" v-html="d.content"></div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<style lang="scss" scoped>
:deep(.n-collapse-item-arrow) {
  display: none !important;
}

.re-header-layout {
  @apply md:py-3 md:px-8 py-2 px-2;

  font-size: 15px;
  @media screen and (width <= 767px) {
    font-size: 13px;
  }
}

.re-header {
  @apply font-bold;

  color: var(--white);
  background-color: var(--primary-color);
}

.collapse-head {
  @apply py-3;

  background-color: #f5f9ff;
}

.content {
  @apply px-6 py-4;

  margin-top: -16px;
  background-color: #f5f9ff;

  &-body {
    @apply p-6;

    background-color: var(--color-bg-100);
  }
}

:deep(.n-collapse-item__header) {
  border-bottom: 1px solid transparent;

  &.n-collapse-item__header--active {
    border-color: var(--color-border-2);
  }
}
</style>
