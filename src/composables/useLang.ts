import { useI18n } from 'vue-i18n'

export function useLang() {
  const { t, locale } = useI18n()
  return {
    t,
    locale
  }
}
