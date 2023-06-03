import { Attrs } from '.'
import { PageList } from '~/utils/constant'

export default defineEventHandler(async event => {
  const body = await readBody<
    PageList<{
      title?: string
      channel_id: number
    }>
  >(event)

  const { data } = await $fetch<{ data: { rows: Attrs[] } }>(
    `${BASE_URL}/site/article/list/`,
    {
      method: 'post',
      body
    }
  )
  return data
})
