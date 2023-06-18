import { BASE_URL } from '~/utils/constant'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'

export interface SiteSubsidiary {
  id: number
  logo?: string
  title: string
  content?: string
  en_title: string
  en_content?: string
  visible?: boolean
  order: number
  type: string
}

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const getDataByLocale = getLocaleData(query.locale as LocaleCode)

  const { data } = await $fetch<{ data: SiteSubsidiary[] }>(
    `${BASE_URL}/site/subsidiaries/all`
  )

  return data.map(v => {
    return getDataByLocale(v)
  })
})
