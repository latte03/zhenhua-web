<script lang="ts" setup>
// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'SiteNewsCard' })
</script>

<template>
  <div class="siteNews">
    <div class="new-img ratio-16/9 rounded mb-8">
      <img
        src="https://img.liblibai.com/web/6442628756b2c.jpg?image_process=format,webp&x-oss-process=image/resize,w_600,m_lfit/format,webp"
        alt=""
        class="ratio-img"
      />
    </div>
    <div class="new-info">
      <div class="new-title text-base font-bold mb-2">
        <n-ellipsis
          class="w-full"
          :tooltip="{
            contentStyle: {
              maxWidth: '30vw'
            }
          }"
        >
          关爱员工，体检护航—集团公司组织员工进行202.关爱员工，体检护航—集团公司组织员工进行202.
        </n-ellipsis>
      </div>
      <div class="new-desc opacity-50 text-sm mb-8">
        <n-ellipsis
          class="w-full"
          :line-clamp="2"
          :tooltip="{
            contentStyle: {
              maxWidth: '30vw'
            }
          }"
        >
          为保障公司员工身体健康，持续提升员工幸福指数，使广大员工以饱满的精神状态、健康的体魄投入到工作中。为保障公司员工身体健康，持续提升员工幸福指数，使广大员工以饱满的精神状态、健康的体魄投入到工作中。
        </n-ellipsis>
      </div>

      <div class="flex justify-between">
        <div class="new-time flex-i-center">
          <Icon
            name="solar:clock-circle-line-duotone"
            class="opacity-50"
            size="16px"
          />
          <span class="font-mon opacity-40 pl-2">2023-04-06</span>
        </div>
        <div class="new-more flex-i-center">
          <span class="pr-2 opacity-50">查看详情</span>
          <Icon name="solar:arrow-right-line-duotone" class="opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.siteNews {
}
</style>
