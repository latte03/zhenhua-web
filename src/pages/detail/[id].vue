<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'PageDetail' })
definePageMeta({
  layout: 'inner-page'
})

const content =
  '  近日，由集团公司承建的220kV国投淖毛湖南汇集站扩建工程项目建设稳中有序推进中。'
</script>

<template>
  <div class="page-detail">
    <div class="container m-auto">
      <div class="container-head mb-6">
        <div class="container-title text-center">
          第六届中国国防信息化装备展2
        </div>
        <NSpace class="container-extra py-4 opacity-50" justify="center">
          <div>
            <span class="pr-1">发布时间:</span>
            <span>1111</span>
          </div>
        </NSpace>
      </div>
      <div class="container-main">
        <div v-html="content"></div>
      </div>
      <div class="flex mt-8">
        <SiteContainerTabBtn type="prev" class="flex-grow" />
        <SiteContainerTabBtn type="next" class="flex-grow" />
      </div>
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
