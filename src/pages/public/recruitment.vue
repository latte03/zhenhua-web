<script lang="ts" setup>
import { ColProps } from 'naive-ui'
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'PublicRecruitment' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '信息公开',
  slogan: '123213'
})

const SPAN: Record<string, ColProps['span']> = {
  POST: 8,
  NUM: 4,
  EDU: 4,
  EXP: 4,
  OTHER: 4
}
</script>
<template>
  <div class="public-recruitment">
    <div class="mb-6">
      <n-row class="re-header">
        <n-col :span="SPAN.POST">
          <div class="header-item re-header-layout">招聘岗位</div>
        </n-col>
        <n-col :span="SPAN.NUM">
          <div class="header-item re-header-layout">人数</div>
        </n-col>
        <n-col :span="SPAN.EDU">
          <div class="header-item re-header-layout">学历</div>
        </n-col>
        <n-col :span="SPAN.EXP">
          <div class="header-item re-header-layout">经验要求</div>
        </n-col>
        <n-col :span="SPAN.OTHER">
          <div class="header-item re-header-layout"></div>
        </n-col>
      </n-row>
    </div>
    <n-collapse>
      <n-collapse-item name="3">
        <template #header>
          <n-row class="collapse-head">
            <n-col :span="SPAN.POST">
              <div class="header-item font-bold re-header-layout">招聘岗位</div>
            </n-col>
            <n-col :span="SPAN.NUM">
              <div class="header-item re-header-layout">2</div>
            </n-col>
            <n-col :span="SPAN.EDU">
              <div class="header-item re-header-layout">本科</div>
            </n-col>
            <n-col :span="SPAN.EXP">
              <div class="header-item re-header-layout">2年</div>
            </n-col>
            <n-col :span="SPAN.OTHER">
              <div
                class="header-item flex items-center justify-end re-header-layout opacity-50"
              >
                <div class="mr-4 text-sm">2022年12月5日</div>
                <div><Icon name="solar:alt-arrow-up-line-duotone"></Icon></div>
              </div>
            </n-col>
          </n-row>
        </template>
        <div class="content">
          <div class="content-body">11</div>
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<style lang="scss" scoped>
:deep(.n-collapse-item-arrow) {
  display: none !important;
}

.re-header-layout {
  @apply py-3 px-8;

  font-size: 15px;
}

.re-header {
  @apply font-bold;

  color: var(--white);
  background-color: var(--primary-color);
}

.collapse-head {
  @apply py-3;

  background-color: #f5f9ff;
}

.content {
  @apply px-6 py-4;

  margin-top: -16px;
  background-color: #f5f9ff;

  &-body {
    @apply p-6;

    background-color: var(--color-bg-100);
  }
}

:deep(.n-collapse-item__header) {
  border-bottom: 1px solid transparent;

  &.n-collapse-item__header--active {
    border-color: var(--color-border-2);
  }
}
</style>
