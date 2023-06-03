import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Attrs } from '~/server/api/channel'

export const useChannelStore = defineStore('channel', () => {
  const channel = ref<Attrs[] | null>(null)
  //   const KEY = 'value'

  const getChannel = async () => {
    const { data } = await useFetch(`/api/channel`)
    channel.value = data.value
  }
  const channelTree = computed(() => {
    return channel.value ? nest(channel.value) : []
  })

  return { channel, channelTree, getChannel }
})
