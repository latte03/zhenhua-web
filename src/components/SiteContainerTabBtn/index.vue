<script lang="ts" setup>
import { ArticleAttrs } from '~/server/api/article'

interface PropsType {
  type?: 'prev' | 'next'
  data?: ArticleAttrs | null
}
defineProps<PropsType>()
defineOptions({ name: 'SiteContainerTabBtn' })
const localePath = useLocalePath()
</script>

<template>
  <div class="site-container-tab-btn">
    <NuxtLink
      v-if="data"
      :to="localePath(`/detail/${data.id}`)"
      class="block p-6 tab-btn"
      :class="`post-${type}`"
    >
      <div class="flex items-center tab-space">
        <div class="flex-shrink-0 arrow">
          <Icon
            :name="
              type === 'prev'
                ? 'solar:alt-arrow-left-linear'
                : 'solar:alt-arrow-right-linear'
            "
            class="before transition-base"
            size="16px"
          />
          <Icon
            :name="
              type === 'prev'
                ? 'solar:alt-arrow-left-linear'
                : 'solar:alt-arrow-right-linear'
            "
            class="after transition-base"
            size="16px"
          />
        </div>
        <NDivider vertical class="flex-shrink-0" />

        <n-ellipsis
          class="w-0 flex-grow-1"
          :tooltip="{
            contentStyle: {
              maxWidth: '30vw'
            }
          }"
        >
          {{ data?.title }}
        </n-ellipsis>
      </div>
    </NuxtLink>

    <div v-else class="p-6 tab-btn" :class="`post-${type}`">没有了</div>
  </div>
</template>

<style lang="scss">
.site-container-tab-btn {
  .tab-btn {
    @apply transition-base cursor-pointer;

    --translate-x: calc(-100% + -24px);

    background-color: var(--color-fill-light);

    .arrow {
      @apply relative overflow-hidden whitespace-nowrap w-8 h-4;

      .before,
      .after {
        @apply absolute;
      }

      .before {
        @apply left-2;
      }

      .after {
        @apply left-12;
      }
    }

    &.post-prev {
      .tab-space {
        text-align: left;
      }
    }

    &.post-next {
      --translate-x: calc(100% + 24px);

      .after {
        @apply right-2;

        left: auto;
      }

      .before {
        @apply right-12;

        left: auto;
      }

      .tab-space {
        flex-flow: row-reverse !important;
        text-align: right;
      }
    }

    &:hover {
      color: var(--white);
      background-color: var(--primary-color);

      .before,
      .after {
        transform: translateX(var(--translate-x));
      }
    }
  }
}
</style>
