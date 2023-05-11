<script lang="ts" name="SiteFooter" setup></script>

<template>
  <div class="site-footer">
    <SiteContent class="flex justify-between py-12">
      <div>
        <ul class="mb-6">
          <li class="mb-2">
            <span class="opacity-50">地址:</span>
            <span class="pl-2">
              信阳市羊山新区新七大道龙飞山城二期.天玺7号楼9层
            </span>
          </li>
          <li>
            <span class="opacity-50">联系电话:</span>
            <span class="pl-2 font-mon">
              <span>0376-6278889</span>
              <span class="pl-6">0376-6177919</span>
            </span>
          </li>
        </ul>
        <ul class="flex flex-wrap emails">
          <li class="w-1/2 mb-2">
            <span class="opacity-50">公司邮箱:</span>
            <span class="pl-2 font-mon">info@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2 mb-2">
            <span class="opacity-50">商务邮箱:</span>
            <span class="pl-2 font-mon">commerce@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2 mb-2">
            <span class="opacity-50">财务邮箱:</span>
            <span class="pl-2 font-mon">finance@zhenhuadl.onaliyun.com</span>
          </li>
          <li class="w-1/2">
            <span class="opacity-50">人力资源:</span>
            <span class="pl-2 font-mon">HR@zhenhuadl.onaliyun.com</span>
          </li>
        </ul>
      </div>
      <div class="logo">zhenhua</div>
    </SiteContent>
    <SiteContent class="flex py-3 text-xs copy-right">
      <span class="opacity-50">
        镇华集团@2023 Zhenhua Group. All rights re­served. 备案号:xxxx
      </span>
    </SiteContent>
  </div>
</template>

<style lang="postcss" scoped>
.site-footer {
  background-color: var(--primary-color);
  color: var(--white);
  padding-bottom: 0;
}
.emails {
  width: 720px;
}
.copy-right {
  background: var(--primary-dark-color);
}
</style>
