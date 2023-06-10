<script lang="ts" setup>
defineOptions({ name: 'ContactPage' })
definePageMeta({
  layout: 'inner-page'
})

const { t } = useLang()
useInnerPageContent({
  name: t('contract.contract_us'),
  slogan: t('contract.contract_us'),
  hasPageBar: false,
  topChannelCode: 'contact',
  pageChannelCode: 'contact'
})!

useSeoMeta({
  title: t('contract.contract_us'),
  description:
    '镇华建设集团有限公司,地址：信阳市羊山新区新七大道龙飞山城二期.天玺7号楼9层'
})
</script>

<template>
  <div class="flex contact-page">
    <div class="contact-section contact-section--white">
      <div class="mb-8 text-2xl font-bold title-after">
        {{ t('contract.company') }}
      </div>
      <ul>
        <li class="mb-3">
          <span class="opacity-60">{{ t('contract.address') }}：</span>
          <span>{{ t('contract.address_detail') }}</span>
        </li>
        <li class="mb-3">
          <span class="opacity-60">{{ t('contract.phone') }}：</span>
          <span>0376-6278889 0376-6177919</span>
        </li>
        <li class="mb-3">
          <span class="opacity-60">{{ t('contract.emil') }}：</span>
          <span>info@zhenhuadl.onaliyun.com</span>
        </li>
      </ul>
    </div>
    <div class="contact-section contact-section--blue">
      <ul>
        <li class="mb-6">
          <div class="mb-1 text-sm">{{ t('contract.hotline') }}</div>
          <div class="text-2xl font-bold">0376-6278889</div>
        </li>

        <li class="mb-6">
          <div class="mb-1 text-sm">
            {{ t('contract.commerce') }} {{ t('contract.emil') }}
          </div>
          <div class="text-2xl font-bold">commerce@zhenhuadl.onaliyun.com</div>
        </li>

        <li class="mb-6">
          <div class="mb-1 text-sm">
            {{ t('contract.finance') }} {{ t('contract.emil') }}
          </div>
          <div class="text-2xl font-bold">finance@zhenhuadl.onaliyun.com</div>
        </li>
        <li class="mb-6">
          <div class="mb-1 text-sm">
            {{ t('contract.hr') }} {{ t('contract.emil') }}
          </div>
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

.contact-section--blue {
  color: var(--white);
  background-color: var(--primary-color);
}
</style>
