import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'

export interface SiteInfo {
  title: KeyValue
  logo: KeyValue
  keywords: KeyValue
  description: KeyValue
  /** 资质数量 */
  copyright: KeyValue
  /** 注册资本 */
  public_network_security: KeyValue
  /** 员工数量 */
  icp: KeyValue
}
export default defineEventHandler(async event => {
  const query = getQuery(event)

  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  const { data } = await $fetch<{ data: SiteInfo }>(
    `${BASE_URL}/comm/site-info`
  )

  for (const key in data) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error

    data[key] = getDataByLocale(data[key])
  }
  return data
})
