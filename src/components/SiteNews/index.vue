<script lang="ts" setup>
export interface NewsItem {
  name: string
  id: string
}
interface PropsType {
  dataSource: NewsItem[]
}
defineProps<PropsType>()
defineOptions({ name: 'SiteNews' })
</script>

<template>
  <div>
    <ul class="site-news">
      <li
        v-for="d in dataSource"
        :key="d.id"
        class="flex items-center justify-between w-full new-item"
      >
        <a class="flex-grow w-0 mr-4 text-base new-link">
          <n-ellipsis class="w-full">
            {{ d.name }}
          </n-ellipsis>
        </a>
        <span class="opacity-40 font-mon">2023-04-1</span>
      </li>
    </ul>
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
