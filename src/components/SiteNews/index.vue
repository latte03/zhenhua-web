<script lang="ts" setup>
import { ArticleAttrs } from '~/server/api/article'
import { formatDate } from '~/utils'

export interface NewsItem {
  name: string
  id: string
}
interface PropsType {
  dataSource: ArticleAttrs[]
}
defineProps<PropsType>()
defineOptions({ name: 'SiteNews' })

const localePath = useLocalePath()
const { t } = useLang()
</script>

<template>
  <div class="pt-2">
    <ul v-if="dataSource.length > 0" class="site-news">
      <li
        v-for="d in dataSource"
        :key="d.id"
        class="flex items-center justify-between w-full new-item"
      >
        <NuxtLink
          :to="localePath(`/detail/${d.id}`)"
          class="flex-grow w-0 mr-4 text-base new-link"
        >
          <n-ellipsis class="w-full">
            {{ d.title }}
          </n-ellipsis>
        </NuxtLink>
        <span class="opacity-40 font-mon">
          {{ formatDate(d.release_time) }}
        </span>
      </li>
    </ul>
    <div v-else class="p-6">
      <n-config-provider
        :theme-overrides="{
          Empty: { iconSizeMedium: '100px' }
        }"
      >
        <n-empty :description="t('no_data')">
          <template #icon>
            <Icon name="Empty" size="100px" />
          </template>
        </n-empty>
      </n-config-provider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-news {
  .new-item {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .new-link {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      display: block;
      width: 0;
      height: 1px;
      background-color: var(--primary-color);
      transition: all 0.5s ease-in-out;
      content: '';
    }

    &:hover {
      color: var(--primary-color);
      text-decoration: underline;

      &::after {
        width: 100%;
      }
    }
  }
}
</style>
