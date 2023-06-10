<script lang="ts" setup>
import dayjs from 'dayjs'
import { ColProps } from 'naive-ui'
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'PublicRecruitment' })
definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '信息公开',
  slogan: '信息公开',
  topChannelCode: 'public',
  pageChannelCode: 'recruitment'
})

const SPAN: Record<string, ColProps['span']> = {
  POST: 8,
  NUM: 4,
  EDU: 4,
  EXP: 4,
  OTHER: 4
}

const { data } = useFetch('/api/recruitment')
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
      <n-collapse-item name="3" v-for="d in data" :key="d.id">
        <template #header>
          <n-row class="collapse-head">
            <n-col :span="SPAN.POST">
              <div class="font-bold header-item re-header-layout">
                {{ d.title }}
              </div>
            </n-col>
            <n-col :span="SPAN.NUM">
              <div class="header-item re-header-layout">{{ d.num }}人</div>
            </n-col>
            <n-col :span="SPAN.EDU">
              <div class="header-item re-header-layout">{{ d.education }}</div>
            </n-col>
            <n-col :span="SPAN.EXP">
              <div class="header-item re-header-layout">
                {{ d.experience }}年
              </div>
            </n-col>
            <n-col :span="SPAN.OTHER">
              <div
                class="flex items-center justify-end opacity-50 header-item re-header-layout"
              >
                <div class="mr-4 text-sm">
                  {{ dayjs(d.create_time).format('YYYY-MM-DD') }}
                </div>
                <div><Icon name="solar:alt-arrow-up-line-duotone"></Icon></div>
              </div>
            </n-col>
          </n-row>
        </template>
        <div class="content">
          <div class="content-body" v-html="d.cn_content"></div>
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
