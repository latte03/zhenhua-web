<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'NewsPage' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '业务板块',
  slogan: '112312434',
  hasPageBar: true
})!

const data = ref([
  {
    name: '1',
    desc: '112',
    createdTime: '1',
    updatedTime: '1'
  },
  {
    name: '13',
    desc: '112',
    createdTime: '1',
    updatedTime: '1'
  },
  {
    name: '14',
    desc: '1112',
    createdTime: '1',
    updatedTime: '1'
  },
  {
    name: '135',
    desc: '112',
    createdTime: '1',
    updatedTime: '1'
  }
  // {
  //   name: '1355',
  //   desc: '112',
  //   createdTime: '1',
  //   updatedTime: '1'
  // }
])

const page = ref(1)
</script>

<template>
  <div class="news">
    <n-row>
      <n-col v-for="d in data" :key="d.name" :span="8" class="site-new--col">
        <SiteNewsCard class="p-6" />
      </n-col>
    </n-row>

    <n-pagination
      v-model:page="page"
      class="mt-20"
      :page-count="101"
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
