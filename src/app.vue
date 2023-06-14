<script lang="ts" setup>
import { dateZhCN, zhCN } from 'naive-ui'
import { lightTheme } from './utils/theme'
import { InitApp } from '~/utils/initApp'

InitApp()
const { locale } = useI18n()

const themeOverrides = lightTheme

const { data } = useFetch('/api/site-info', {
  query: {
    locale
  }
})

const title = computed(() => {
  return data.value?.title.value || ''
})
const description = computed(() => {
  return data.value?.description.value || ''
})
const keywords = computed(() => {
  return data.value?.keywords.value || ''
})

useSeoMeta({
  titleTemplate(_title) {
    return _title ? `${_title} | ${title.value} ` : title.value
  },
  description
})
</script>

<template>
  <Html :lang="locale">
    <Head>
      <!-- <Title>{{ title }}</Title> -->

      <Meta name="keywords" :content="keywords" />
    </Head>
    <Body class="antialiased transition-colors duration-300 bg-white">
      <NConfigProvider
        :locale="zhCN"
        :date-locale="dateZhCN"
        :theme-overrides="themeOverrides"
        inline-theme-disabled
        preflight-style-disabled
        :breakpoints="{ xs: 0, s: 640, m: 768, l: 1024, xl: 1280, xxl: 1536 }"
      >
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </NConfigProvider>
    </Body>
  </Html>
</template>

<style lang="postcss">
/* @import url("./styles/index.scss"); */
body {
  @apply bg-gray-50;

  color: var(--color-text-1);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
