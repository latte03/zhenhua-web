import { defineStore } from 'pinia'
import { Attrs } from '~/server/api/channel'
import type { LocaleCode } from '~/utils/getLocaleData'

export const useChannelStore = defineStore('channel', () => {
  const channel = useState<Attrs[] | null>('channel', () => null)

  // ref<Attrs[] | null>(null)

  //   const KEY = 'value'
  const { locale } = useLang()

  const getChannel = async () => {
    if (!channel.value || channel.value.length < 1) {
      const { data } = await useFetch(`/api/channel`, {
        query: { locale }
      })
      channel.value = data.value

      return data
    }

    return {}
  }

  const channelI18n = computed(() => {
    const getDataByLocale = getLocaleData(locale.value as LocaleCode)

    return channel.value?.map(c => {
      return getDataByLocale(c)
    })
  })
  const channelTree = computed(() => {
    return channelI18n.value ? nest(channelI18n.value) : []
  })

  return { channel, channelTree, getChannel, channelI18n }
})
