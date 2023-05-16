<script lang="ts" setup>
interface PropsType {
  data: any[]
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SitePublicBidding' })
</script>

<template>
  <ul class="site-public-bidding">
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
        <Icon name="solar:arrow-right-line-duotone" />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.bidding-item {
  @apply pb-6;

  border-bottom: 1px solid var(--color-border-2);
}
</style>
