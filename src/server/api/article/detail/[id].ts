import { ArticleAttrs } from '..'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'
import { BASE_URL } from '~/utils/constant'

export default defineEventHandler(async event => {
  if (!event.context.params?.id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be required '
    })
  }

  const query = getQuery(event)
  const { data } = await $fetch<{ data: ArticleAttrs }>(
    `${BASE_URL}/site/article/detail/${event.context.params.id}`
  )

  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  return getDataByLocale(data)
})
