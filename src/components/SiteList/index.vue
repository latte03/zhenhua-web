<script lang="ts" setup>
interface PropsType {
  data: any[]
  count?: number
  page: number
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:page'])
defineOptions({ name: 'SiteList' })

const modelPage = useVModel(props, 'page', emit)
</script>

<template>
  <div class="site-list">
    <template v-if="data?.length > 0">
      <n-row>
        <n-col v-for="d in data" :key="d.title" :span="8" class="site-new--col">
          <SiteNewsCard :content="d" class="p-6" />
        </n-col>
      </n-row>

      <n-pagination
        v-model:page="modelPage"
        class="mt-20"
        :page-count="count || 0"
        size="large"
      >
        <template #prev>
          <Icon name="solar:alt-arrow-left-linear" />
        </template>
        <template #next>
          <Icon name="solar:alt-arrow-right-linear" />
        </template>
      </n-pagination>
    </template>

    <div v-else class="px-5">
      <n-empty />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-new-card {
  border: 1px solid transparent;
  border-right-color: #ddd;
  border-bottom-color: #ddd;
}

.site-new--col {
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    .site-new-card {
      border-bottom-color: #ddd !important;
    }
  }

  &:nth-last-child(1),
  &:nth-last-child(2),
  &:nth-last-child(3) {
    .site-new-card {
      border-bottom-color: transparent;
    }
  }

  &:last-child,
  &:nth-child(2n + 3) {
    .site-new-card {
      border-right-color: transparent !important;
    }
  }

  &:nth-child(n + 4) {
    .site-new-card {
      border-right-color: #ddd !important;
    }
  }
}
</style>
