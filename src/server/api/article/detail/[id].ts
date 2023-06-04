import { ArticleAttrs } from '..'
import { BASE_URL } from '~/utils/constant'

export default defineEventHandler(async event => {
  if (!event.context.params?.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be required '
    })
  }
  const { data } = await $fetch<{ data: ArticleAttrs }>(
    `${BASE_URL}/site/article/detail/${event.context.params.id}`
  )
  return data
})
