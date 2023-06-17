// siblings

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
  const { data } = await $fetch<{
    data: { prevRecord: ArticleAttrs | null; nextRecord: ArticleAttrs | null }
  }>(`${BASE_URL}/site/article/siblings/${event.context.params?.id}`, {
    method: 'get'
  })

  const query = getQuery(event)

  const getDataByLocale = getLocaleData(query.locale as LocaleCode)

  return {
    prevRecord: data.prevRecord ? getDataByLocale(data.prevRecord) : null,
    nextRecord: data.nextRecord ? getDataByLocale(data.nextRecord) : null
  }
})
