<script lang="ts" setup>
interface PropsType {
  data: any[]
  count?: number
  page: number
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:page'])
defineOptions({ name: 'SiteList' })
const router = useRouter()
const localePath = useLocalePath()
const modelPage = useVModel(props, 'page', emit)
function onBackHome() {
  router.push(localePath('/'))
}
</script>

<template>
  <div class="site-list">
    <template v-if="data?.length > 0">
      <ag-row :span="[8, 24]">
        <ag-col v-for="d in data" :key="d.id" class="site-new--col">
          <SiteNewsCard :content="d" class="p-6" />
        </ag-col>
      </ag-row>

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

    <div v-else class="px-5 py-8">
      <n-config-provider
        :theme-overrides="{
          Empty: { iconSizeHuge: '150px' }
        }"
      >
        <n-empty size="huge">
          <template #icon>
            <Icon name="Empty" size="150px" />
          </template>
          <template #extra>
            <n-button type="primary" tertiary @click="onBackHome">
              返回首页
            </n-button>
          </template>
        </n-empty>
      </n-config-provider>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-new-card {
  border: 1px solid transparent;
  border-right-color: #f5f5f5;
  border-bottom-color: #f5f5f5;
  @media screen and (width <= 767px) {
    border: 0;
    border-bottom: 1px solid #f5f5f5 !important;
  }
}

.site-new--col {
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    .site-new-card {
      border-bottom-color: #f5f5f5 !important;
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
      border-right-color: #f5f5f5 !important;
    }
  }
}
</style>
