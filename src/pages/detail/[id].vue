<script lang="ts" setup>
defineOptions({ name: 'PageDetail' })
definePageMeta({
  layout: 'comm-page'
})
const { t, locale } = useLang()

const route = useRoute()

const id = computed(() => {
  return route.params.id
})
const { state } = useCommonPageStore()!
const { data } = useFetch(`/api/article/detail/${id.value}`, {
  query: { locale }
})

const stateName = computed(() => {
  return data.value?.title || ''
})

onMounted(() => {
  state.value.topChannelCode = 'news'
})

useSeoMeta({
  title: stateName
})
</script>

<template>
  <div class="page-detail">
    <div class="container m-auto">
      <div class="mb-6 container-head">
        <div class="text-center container-title">
          {{ data?.title }}
        </div>
        <NSpace class="py-4 opacity-50 container-extra" justify="center">
          <div>
            <span class="pr-1 text-sm">{{ t('release_time') }}:</span>
            <span class="text-sm">{{ data?.release_time }}</span>
          </div>
        </NSpace>
      </div>
      <div class="container-main">
        <div class="text-center">
          <AgImage class="w-1/2 m-auto mb-6" :src="data?.thumbnail" alt="" />
        </div>
        <div class="rich-content new-detail" v-html="data?.content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-detail {
  // @apply pb-14 pt-20;
  margin-bottom: -24px;
  background-color: var(--color-fill-1);
}

.container-head {
  border-bottom: 1px solid var(--color-border-2);
}

.container {
  background-color: var(--color-bg-100);
}

.container-title {
  @apply md:text-2xl text-xl;

  font-weight: bold;
}

.new-detail {
  max-width: 720px;
  margin: 0 auto;
}
</style>
