<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'SiteIntroduceSubsidiary' })
</script>

<template>
  <div class="site-introduce flex-center flex-col p-6">
    <div class="logo mb-1"></div>
    <div class="font-bold mb-4">奔月电气有限公司</div>
    <div class="text-xs opacity-50">
      专业生产研发、销售高、低压电气设备的高新综合性技术企业。奔月电气不断坚持科技创新，取得多项国家专利，在新产品研发和科技创新方面收获斐然。
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-introduce {
  width: 274px;
  height: 274px;
  background: var(--color-fill-light);
  border-radius: 16px;
  opacity: 1;
}
</style>
