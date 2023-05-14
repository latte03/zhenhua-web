<script lang="ts" setup>
defineOptions({ name: 'InnerPage' })

const src =
  'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg'

const { state } = useProvideInnerPageStore({
  name: '',
  slogan: ''
})

const menuData = ref([
  {
    name: '工程建设',
    id: '1'
  },
  {
    name: '新能源建设',
    id: '2'
  }
])
</script>

<template>
  <div class="web-site-main inner-page">
    <SiteHeader />
    <div class="page-content">
      <SitePageHead :data="state" :src="src" />
      <SiteContent class="page-container--wrap relative z-10">
        <div class="page-nav-bar flex justify-between">
          <SiteBreadcrumb />

          <SitePageMenu active-key="1" :data-source="menuData" />
        </div>
        <div class="page-container">
          <slot></slot>
        </div>
      </SiteContent>
    </div>

    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
.inner-page {
  background-color: var(--color-fill-light);

  .page-content {
    padding-bottom: 56px;
  }

  .page-nav-bar {
    padding: 0 40px;
    background-color: var(--color-bg-100);
    border-bottom: 1px solid var(--color-border-2);
  }

  .page-container--wrap {
    --menu-height: 74px;

    margin-top: calc(0px - var(--menu-height));
  }

  .page-container {
    padding: 56px 40px;
    background-color: var(--color-bg-100);
  }
}
</style>
