<script lang="ts" name="SiteFooter" setup>
const { t } = useLang()

const d = useI18n()
</script>

<template>
  <div class="site-footer" :class="d.locale.value">
    <SiteContent class="flex justify-between pt-12 pb-8">
      <div class="opacity-80">
        <ul class="mb-6">
          <li class="mb-2">
            <span class="text-justify opacity-50 label">
              {{ t('contract.address') }}:
            </span>
            <span class="pl-2">
              {{ t('contract.address_detail') }}
            </span>
          </li>
          <li>
            <span class="opacity-50 label">{{ t('contract.phone') }}:</span>
            <span class="pl-2 font-mon">
              <span>0376-6278889</span>
              <span class="pl-6">0376-6177919</span>
            </span>
          </li>
        </ul>
        <ul class="flex flex-wrap emails">
          <li class="w-1/2 mb-2">
            <span class="opacity-50 label">{{ t('contract.emil') }}:</span>
            <span class="pl-2 font-mon">info@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2 mb-2">
            <span class="opacity-50 label">
              {{ t('contract.commerce') }} {{ t('contract.emil') }}:
            </span>
            <span class="pl-2 font-mon">commerce@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2 mb-2">
            <span class="opacity-50 label">
              {{ t('contract.finance') }} {{ t('contract.emil') }}:
            </span>
            <span class="pl-2 font-mon">finance@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2">
            <span class="opacity-50 label">
              {{ t('contract.hr') }} {{ t('contract.emil') }}:
            </span>
            <span class="pl-2 font-mon">HR@zhenhuadl.onaliyun.com</span>
          </li>
        </ul>
      </div>
      <div class="logo"><SiteLogo width="186px" height="46px" white /></div>
    </SiteContent>
    <SiteContent class="flex py-3 text-xs copy-right">
      <span class="opacity-50">
        镇华集团@2023 Zhenhua Group. All rights re­served. 备案号:xxxx
      </span>
    </SiteContent>
  </div>
</template>

<style lang="postcss">
.site-footer {
  padding-bottom: 0;
  color: var(--white);
  font-size: 13px;
  background-color: var(--primary-color);

  .label {
    display: inline-block;
    width: 56px;
    text-align: justify;
    text-align-last: justify;
  }

  &.en {
    .label {
      width: auto;
    }
  }

  .emails {
    width: 720px;
  }

  .copy-right {
    background: var(--primary-dark-color);
  }
}
</style>
