<script lang="tsx" setup>
import { availableLocales } from '~/locales/availableLocales'
import { Icon, NuxtLink } from '#components'

// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'LanguageSwitch' })
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const langs = computed(() => {
  return availableLocales.map(lang => {
    return {
      key: lang.iso,
      label: () => (
        <NuxtLink
          replace
          to={{
            path: switchLocalePath(lang.iso)
          }}
        >
          <span>{lang.name}</span>
        </NuxtLink>
      ),
      props: {
        class: locale.value === lang.iso ? 'opacity-100' : 'opacity-70'
      },
      icon: () => <Icon name={lang.flag}></Icon>
    }
  })
})
</script>

<template>
  <n-dropdown
    size="large"
    class="language-switch"
    trigger="click"
    :options="langs"
  >
    <slot></slot>
  </n-dropdown>
</template>
