<script lang="ts" setup>
import { ArticleAttrs } from '~/server/api/article'
import defaultImage from '@/assets/images/default-image.jpg'
import { formatDate } from '~/utils'

interface PropsType {
  content: ArticleAttrs
}
defineProps<PropsType>()
defineOptions({ name: 'SiteNewsCard' })
const localePath = useLocalePath()
</script>

<template>
  <div class="cursor-pointer site-new-card">
    <div class="mb-8 rounded new-img ratio-16/9">
      <AgImage
        :src="content.thumbnail || defaultImage"
        alt=""
        class="ratio-img site-new-img transition-base"
      />
    </div>
    <div class="new-info">
      <div class="mb-2 text-base font-bold new-title">
        <n-ellipsis
          class="w-full"
          :tooltip="{
            contentStyle: {
              maxWidth: '30vw'
            }
          }"
        >
          {{ content.title }}
        </n-ellipsis>
      </div>
      <div class="mb-8 text-sm opacity-50 new-desc">
        <n-ellipsis
          class="w-full"
          :line-clamp="2"
          :tooltip="{
            contentStyle: {
              maxWidth: '30vw'
            }
          }"
        >
          {{ content.abstract }}
        </n-ellipsis>
      </div>

      <div class="flex justify-between">
        <div class="new-time flex-i-center">
          <Icon
            name="solar:clock-circle-line-duotone"
            class="opacity-50"
            size="16px"
          />
          <span class="pl-2 text-sm font-mon opacity-40">
            {{ formatDate(content.release_time) }}
          </span>
        </div>
        <div class="new-more flex-i-center">
          <NuxtLink
            :to="localePath(`/detail/${content.id}`)"
            class="pr-2 text-sm opacity-50 md:text-base"
          >
            {{ $t('view-details') }}
          </NuxtLink>
          <Icon name="solar:arrow-right-line-duotone" class="opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.site-new-card {
  &:hover {
    .site-new-img {
      transform: scale(1.2);
    }
  }
}
</style>
