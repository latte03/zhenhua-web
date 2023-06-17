<script lang="ts" name="SiteFooter" setup>
const { t, locale } = useLang()
</script>

<template>
  <div class="site-footer" :class="locale">
    <SiteContent class="site-footer-content">
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
          <li class="mb-2 md:w-1/2 w-1/1">
            <span class="opacity-50 label">{{ t('contract.emil') }}:</span>
            <span class="pl-2 font-mon">info@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="mb-2 md:w-1/2 w-1/1">
            <span class="opacity-50 label">{{ t('contract.commerce') }}:</span>
            <span class="pl-2 font-mon">commerce@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="mb-2 md:w-1/2 w-1/1">
            <span class="opacity-50 label">{{ t('contract.finance') }}:</span>
            <span class="pl-2 font-mon">finance@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="md:w-1/2 w-1/1">
            <span class="opacity-50 label">{{ t('contract.hr') }}:</span>
            <span class="pl-2 font-mon">HR@zhenhuadl.onaliyun.com</span>
          </li>
        </ul>
      </div>
      <div class="logo"><SiteLogo width="186px" height="46px" white /></div>
    </SiteContent>
    <SiteContent class="flex py-3 text-xs copy-right">
      <span class="text-xs opacity-50">
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

  .site-footer-content {
    @apply flex justify-between pt-12 pt-12 pb-8;
    @media screen and (width <= 767px) {
      flex-wrap: wrap-reverse;
    }
  }

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
    @media screen and (width <= 767px) {
      flex-wrap: wrap;
      width: 100%;
    }
  }

  .copy-right {
    background: var(--primary-dark-color);
  }

  .logo {
    @media screen and (width <= 767px) {
      margin-bottom: 24px;
    }
  }
}
</style>
