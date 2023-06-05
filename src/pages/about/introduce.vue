<script lang="ts" setup>
import dayjs from 'dayjs'
import numeral from 'numeral'
import { useGroupState } from '~/store/groupState'
import { KeyValue } from '~/types'

defineOptions({ name: 'AboutIntroducePage' })
definePageMeta({
  layout: 'inner-page'
})
useInnerPageContent({
  name: '关于镇华',
  slogan: '123213',
  topChannelCode: 'about',
  pageChannelCode: 'introduce'
})!

const groupStore = useGroupState()
groupStore.getGroupInfo()
const { data: subsidiaries } = useFetch('/api/subsidiaries', {
  default: () => [] as KeyValue[]
})
const swiper = computed(() => {
  return (groupStore.groupInfo.groupPic || []).map(i => {
    return {
      id: i,
      thumbnail: i
    }
  })
})

const infoOptions = computed(() => {
  return [
    {
      value: groupStore.groupInfo.buildTime
        ? dayjs(groupStore.groupInfo.buildTime).format('YYYY')
        : '',
      label: '成立时间',
      icon: ''
    },
    {
      value: numeral(groupStore.groupInfo.registeredCapital).format('0,000'),
      unit: '万元',
      label: '注册资金',
      icon: ''
    },
    {
      value: groupStore.groupInfo.qualificationNum,
      label: '国家级资质',
      icon: ''
    },
    {
      value: groupStore.groupInfo.staffNum,
      unit: '+',
      label: '现有员工',
      icon: ''
    }
  ]
})
</script>

<template>
  <div class="about-introduce">
    <div class="swiper">
      <SiteCarousel
        v-slot="{ record }"
        size="small"
        class="overflow-hidden about-carousel"
        :data-source="swiper"
      >
        <div class="wh-full">
          <AgImage class="ratio-img carousel-img" :src="record.thumbnail" />
        </div>
      </SiteCarousel>
    </div>
    <div class="mt-6">
      <div class="flex w-full">
        <div
          v-for="info in infoOptions"
          :key="info.label"
          class="flex items-center justify-between flex-grow info-item"
        >
          <div>
            <div class="flex info-value">
              <div class="info-value--value">{{ info.value }}</div>
              <div v-if="info.unit" class="info-value--unit">
                {{ info.unit }}
              </div>
            </div>
            <div class="opacity-50 info-label">{{ info.label }}</div>
          </div>
          <Icon name="solar:home-2-linear" size="40px" />
        </div>
      </div>
    </div>
    <div class="opacity-75">
      <div v-html="groupStore.groupInfo.groupMemo"></div>
    </div>
    <div class="mt-6">
      <div class="text-center">
        <div class="opacity-50">镇华电力建设集团</div>
        <div class="text-lg font-bold">子公司</div>
      </div>
      <ul class="flex-wrap gap-6 subsidiary flex-center">
        <li v-for="sub in subsidiaries" :key="sub.value">
          <SiteIntroduceSubsidiary :data="sub" class="logo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-introduce {
  font-size: 15px;
  line-height: 1.7;

  .swiper {
    @apply -mt-14 -mx-10 ratio-16/9;

    height: 0;
    padding-bottom: 50%;
  }

  .about-carousel {
    @apply ratio-img;
  }

  .info-item {
    @apply relative;

    padding: 24px 32px;

    &:not(:last-child) {
      &::after {
        @apply block h-8;

        width: 1px;
        background-color: var(--color-border);
        content: '';
      }
    }
  }

  .info-value {
    align-items: start;

    &--unit {
      margin-top: 12px;
      margin-left: 8px;
      opacity: 0.6;
    }
  }

  .info-value--value {
    font-weight: bold;
    font-size: 40px;
  }

  .subsidiary {
    @apply m-auto mt-4;

    max-width: 900px;
  }
}
</style>
