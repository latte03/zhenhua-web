<script lang="ts" setup>
interface PropsType {
  data: any[]
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SitePublicBidding' })
const page = ref(1)
</script>

<template>
  <div class="site-public-bidding">
    <ul>
      <li v-for="d in data" :key="d.id" class="flex justify-start bidding-item">
        <div class="text-right mr-6">
          <div class="text-2xl font-bold">05-12</div>
          <div class="opacity-50 mt-2">2023</div>
        </div>
        <div class="flex-grow">
          <div class="mb-6">
            <div class="font-bold mb-2">招标信息的标题</div>
            <div class="opacity-50">
              <n-ellipsis class="w-full">
                招标信息的一些详细的内容，招标信息的一些详细的内容等等，招标信息的一些详细的内容等招标信息的一些详细的内容等等，两行，超出两行省略...
              </n-ellipsis>
            </div>
          </div>
          <Icon
            class="arrow transition-base"
            name="solar:arrow-right-line-duotone"
            size="16"
          />
        </div>
      </li>
    </ul>
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
.bidding-item {
  @apply py-4 px-4 cursor-pointer transition-base;

  border-bottom: 1px solid var(--color-border-2);

  &:hover {
    background-color: var(--color-fill-light);

    .arrow {
      transform: translateX(20px);
    }
  }
}
</style>
