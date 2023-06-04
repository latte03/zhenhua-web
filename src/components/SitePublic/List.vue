<script lang="ts" setup>
import dayjs from 'dayjs'
import { ArticleAttrs } from '~/server/api/article'

interface PropsType {
  data: ArticleAttrs[]
  total: number
  modelValue: number
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update-page'])
defineOptions({ name: 'SitePublicBidding' })
const page = useVModel(props, 'modelValue', emit)
const localePath = useLocalePath()
function formatToYYYY(value: string) {
  return dayjs(value).format('YYYY')
}
function formatToMMDD(value: string) {
  return dayjs(value).format('MM-DD')
}
</script>

<template>
  <div class="site-public-bidding">
    <ul>
      <li v-for="d in data" :key="d.id" class="flex justify-start bidding-item">
        <div class="mr-6 text-right">
          <div class="text-2xl font-bold">
            {{ formatToYYYY(d.release_time) }}
          </div>
          <div class="mt-2 opacity-50">{{ formatToMMDD(d.release_time) }}</div>
        </div>
        <div class="flex-grow">
          <div class="mb-6">
            <div class="mb-2 font-bold">{{ d.title }}</div>
            <div class="opacity-50">
              <n-ellipsis class="w-full">{{ d.abstract }}</n-ellipsis>
            </div>
          </div>
          <NuxtLink :to="localePath(`/detail/${d.id}`)">
            <Icon
              class="arrow transition-base"
              name="solar:arrow-right-line-duotone"
              size="16"
            />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <n-pagination
      v-model:page="page"
      class="mt-20"
      :page-count="total"
      size="large"
    >
      <template #prev>
        <Icon name="solar:alt-arrow-left-linear" />
      </template>
      <template #next>
        <Icon name="solar:alt-arrow-right-linear" />
      </template>
    </n-pagination>
  </div>
</template>

<style lang="scss" scoped>
.bidding-item {
  @apply py-4 px-4 cursor-pointer transition-base;

  border-bottom: 1px solid var(--color-border-2);

  &:hover {
    background-color: var(--color-fill-light);

    .arrow {
      transform: translateX(20px);
    }
  }
}
</style>
