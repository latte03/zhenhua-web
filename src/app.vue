<script lang="ts" setup>
import { InitApp } from '~/utils/initApp'

InitApp()
const locale = useState<string>('locale.i18n')
</script>

<template>
  <Html :lang="locale">
    <Body class="antialiased transition-colors duration-300 bg-white">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
/* @import url("./styles/index.scss"); */
body {
  @apply bg-gray-50 dark:bg-gray-800;
  color: var(--color-text-1);
}

.global-text {
  @apply text-gray-900 dark:text-gray-50;
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
