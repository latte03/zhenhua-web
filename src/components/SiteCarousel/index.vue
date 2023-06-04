<script lang="ts" setup generic="T extends Attrs | ArticleAttrs">
// eslint-disable-next-line unused-imports/no-unused-imports
import type { Attrs } from './type'
// eslint-disable-next-line unused-imports/no-unused-imports
import { ArticleAttrs } from '~/server/api/article'

interface PropsType {
  dataSource: T[]
  size?: 'default' | 'small'
}
const props = withDefaults(defineProps<PropsType>(), {
  size: 'default',
  dataSource: () => []
})

defineOptions({
  name: 'Carousel'
})
const currentIndex = ref(0)
const currentIndexValue = computed(() => {
  return formatNumber(currentIndex.value + 1)
})

const lengthValue = computed(() => {
  return formatNumber(props.dataSource.length)
})
function onIndexChange(index: number) {
  currentIndex.value = index
}
</script>

<template>
  <div class="relative carousel" :class="`carousel-${size}`">
    <n-carousel
      class="relative wh-full"
      show-arrow
      :draggable="true"
      autoplay
      :show-dots="false"
      @update-current-index="onIndexChange"
    >
      <div v-for="data in dataSource" :key="data.id" class="wh-full">
        <slot :record="data"></slot>
      </div>

      <template #arrow="{ prev, next }">
        <div class="absolute flex items-center carousel-custom-arrow">
          <view class="font-bold carousel-dot font-mon">
            <span class="text-2xl">{{ currentIndexValue }}</span>
            <span class="px-4">|</span>
            <span class="text-base opacity-50">{{ lengthValue }}</span>
          </view>
          <button type="button" class="custom-arrow" @click="prev">
            <Icon name="carbon:arrow-left" size="24px" />
          </button>
          <button type="button" class="custom-arrow" @click="next">
            <Icon name="carbon:arrow-right" size="24px" />
          </button>
        </div>
      </template>
    </n-carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  --distance: 64px;
  --left: 10vw;

  &-small {
    --distance: 24px;
    --left: 56px;

    .custom-arrow {
      padding: 8px;
    }
  }

  &-custom-arrow {
    bottom: var(--distance);
    left: var(--left);
    color: #fff;
  }

  &-dot {
    margin-right: var(--distance);
    color: #fff;
  }

  .custom-arrow {
    margin-right: 12px;
    padding: 16px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(var(--white-text), 0.1);
    }

    &:active {
      background-color: rgba(var(--white-text), 0.05);
    }
  }
}
</style>
