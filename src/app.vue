<script lang="ts" setup>
import { dateZhCN, zhCN } from 'naive-ui'
import { lightTheme } from './utils/theme'
import { InitApp } from '~/utils/initApp'

InitApp()
const { locale } = useI18n()

const themeOverrides = lightTheme
</script>

<template>
  <Html :lang="locale">
    <Body class="antialiased transition-colors duration-300 bg-white">
      <NConfigProvider
        :locale="zhCN"
        :date-locale="dateZhCN"
        :theme-overrides="themeOverrides"
        inline-theme-disabled
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
