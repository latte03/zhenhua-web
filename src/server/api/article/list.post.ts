import { ArticleAttrs } from '.'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'
import { BASE_URL, PageList } from '~/utils/constant'

export default defineEventHandler(async event => {
  const body = await readBody<
    PageList<{
      channel_code?: string
      title?: string
      channel_id: number
    }>
  >(event)

  const { data } = await $fetch<{
    data: { rows: ArticleAttrs[]; count: number }
  }>(`${BASE_URL}/site/article/list/`, {
    method: 'post',
    body
  })

  const query = getQuery(event)

  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  const rows = data.rows.map(d => {
    return getDataByLocale(d)
  })
  return {
    ...data,
    rows
  }
})
