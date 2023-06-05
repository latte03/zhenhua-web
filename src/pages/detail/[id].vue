<script lang="ts" setup>
defineOptions({ name: 'PageDetail' })
definePageMeta({
  layout: 'inner-page'
})
const { t } = useLang()

const route = useRoute()

const id = computed(() => {
  return route.params.id
})

const { data } = useFetch(`/api/article/detail/${id.value}`)
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
            <span class="pr-1">{{ t('release_time') }}:</span>
            <span>{{ data?.release_time }}</span>
          </div>
        </NSpace>
      </div>
      <div class="container-main">
        <div class="text-center">
          <AgImage class="w-1/2 m-auto mb-6" :src="data?.thumbnail" alt="" />
        </div>
        <div v-html="data?.content"></div>
      </div>
      <!-- <div class="flex mt-8">
        <SiteContainerTabBtn type="prev" class="flex-grow" />
        <SiteContainerTabBtn type="next" class="flex-grow" />
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-detail {
  // @apply pb-14 pt-20;
  margin-bottom: -24px;
  background-color: var(--color-fill-light);
}

.container-head {
  border-bottom: 1px solid var(--color-border-2);
}

.container {
  background-color: var(--color-bg-100);
}

.container-title {
  font-weight: bold;
  font-size: 24px;
}
</style>
