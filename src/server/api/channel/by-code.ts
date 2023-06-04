import { ChannelAttrs } from '../channel'
import { BASE_URL } from '~/utils/constant'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const { data } = await $fetch<{ data: ChannelAttrs }>(
    `${BASE_URL}/site/channel/byCode/${query.code}`
  )
  return data
})
