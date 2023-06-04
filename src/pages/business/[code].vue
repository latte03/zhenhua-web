<script lang="ts" setup>
defineOptions({ name: 'NewsPage' })
definePageMeta({
  layout: 'inner-page'
})
const route = useRoute()
useInnerPageContent({
  name: '业务板块',
  slogan: '业务板块',
  topChannelCode: 'business',
  pageChannelCode: route.params.code as string,
  hasPageBar: true
})!

const { data } = useFetch('/api/article/list', {
  method: 'post',
  body: {
    pageInfo: {
      pageIndex: 1,
      pageSize: 5
    },
    data: {
      channel_code: route.params.code as string
    }
  }
})

const content = computed(() => {
  return data.value?.rows
})
const page = ref(1)
</script>

<template>
  <div class="news">
    <template v-if="content?.length > 0">
      <n-row>
        <n-col
          v-for="d in content"
          :key="d.title"
          :span="8"
          class="site-new--col"
        >
          <SiteNewsCard :content="d" class="p-6" />
        </n-col>
      </n-row>

      <n-pagination
        v-model:page="page"
        class="mt-20"
        :page-count="data?.count || 0"
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
