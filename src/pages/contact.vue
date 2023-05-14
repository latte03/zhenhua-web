<script lang="ts" setup>
defineOptions({ name: 'ContactPage' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '联系我们', slogan: '123213' }
})

useInnerPageContent({
  name: '联系我们',
  slogan: '112312434',
  hasPageBar: false
})!
</script>

<template>
  <div class="contact-page flex">
    <div class="contact-section contact-section--white">
      <div class="text-2xl font-bold mb-8 title-after">
        镇华建设集团有限公司
      </div>
      <ul>
        <li class="mb-3">
          <span class="opacity-60">地址：</span>
          <span>信阳市羊山新区新七大道龙飞山城二期.天玺7号楼9层</span>
        </li>
        <li class="mb-3">
          <span class="opacity-60">电话：</span>
          <span>0376-6278889 0376-6177919</span>
        </li>
        <li class="mb-3">
          <span class="opacity-60">邮箱：</span>
          <span>info@zhenhuadl.onaliyun.com</span>
        </li>
      </ul>
    </div>
    <div class="contact-section contact-section--blue">
      <ul>
        <li class="mb-6">
          <div class="text-sm mb-1">市场业务热线</div>
          <div class="text-2xl font-bold">0376-6278889</div>
        </li>

        <li class="mb-6">
          <div class="text-sm mb-1">商务部邮箱</div>
          <div class="text-2xl font-bold">commerce@zhenhuadl.onaliyun.com</div>
        </li>

        <li class="mb-6">
          <div class="text-sm mb-1">财务部邮箱</div>
          <div class="text-2xl font-bold">finance@zhenhuadl.onaliyun.com</div>
        </li>
        <li class="mb-6">
          <div class="text-sm mb-1">人力资源部</div>
          <div class="text-2xl font-bold">HR@zhenhuadl.onaliyun.com</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.contact-page {
  margin: -56px -40px;
}

.title-after {
  &::after {
    @apply mt-32px;

    z-index: 1;
    display: block;

    /* 矩形 1 */

    width: 24px;
    height: 2px;

    /* primary-color-1 */
    background: var(--primary-color);
    opacity: 1;
    content: '';
  }
}

.contact-section {
  @apply p-20 flex-grow;

  width: 50%;
}

.contact-section-white {
}

.contact-section--blue {
  color: var(--white);
  background-color: var(--primary-color);
}
</style>
