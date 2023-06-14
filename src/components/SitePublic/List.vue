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
          <div class="font-bold md:text-2xl">
            {{ formatToYYYY(d.release_time) }}
          </div>
          <div class="mt-2 text-sm opacity-50 md:text-base">
            {{ formatToMMDD(d.release_time) }}
          </div>
        </div>
        <div class="flex-grow">
          <div class="mb-4 md:mb-6">
            <div class="mb-1 font-bold md:mb-2">{{ d.title }}</div>
            <div class="opacity-50">
              <n-ellipsis class="w-full text-sm md:text-base">
                {{ d.abstract }}
              </n-ellipsis>
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
  @apply md:py-4  py-3 md:px-4 cursor-pointer transition-base;

  border-bottom: 1px solid var(--color-border-2);

  &:hover {
    background-color: var(--color-fill-light);

    .arrow {
      transform: translateX(20px);
    }
  }
}
</style>
