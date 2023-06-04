import { defineStore } from 'pinia'
import { Attrs } from '~/server/api/channel'

export const useChannelStore = defineStore('channel', () => {
  const channel = useState<Attrs[] | null>('channel', () => null)

  // ref<Attrs[] | null>(null)

  //   const KEY = 'value'

  const getChannel = async () => {
    if (!channel.value || channel.value.length < 1) {
      const { data } = await useFetch(`/api/channel`)
      channel.value = data.value

      return data
    }

    return {}
  }
  const channelTree = computed(() => {
    return channel.value ? nest(channel.value) : []
  })

  return { channel, channelTree, getChannel }
})
