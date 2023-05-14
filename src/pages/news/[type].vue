<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'NewsPage' })
definePageMeta({
  layout: 'inner-page'
})

const { setState } = useInnerPageStore()!

setState({
  name: '新闻资讯',
  slogan: '112312434'
})

const data = ref([
  {
    name: '1',
    desc: '112',
    createdTime: '1',
    updatedTime: '1'
  }
])

const page = ref(1)
</script>

<template>
  <div class="news">
    <n-row>
      <n-col v-for="d in data" :key="d.name" :span="8">
        <SiteNewsCard />
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
.news {
}
</style>
