import { BASE_URL } from '~/utils/constant'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'

export interface EnergyAttrs {
  id: number
  /**
   * key 键名
   */
  name: string

  /** 省份 */
  province_id: number
  province_point: string
  cn_province_name: string
  en_province_name: string

  /**
   * 市
   */
  city_id: number
  city_point: string
  cn_city_name: string
  en_city_name: string
  /**
   * 是否可见
   */
  visible?: boolean
  /**
   * 地址
   */
  cn_address: string
  /**
   * 地址
   */
  en_address?: string
}

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  const { data } = await $fetch<{ data: EnergyAttrs[] }>(
    `${BASE_URL}/site/new-energy/all`
  )
  return data.map(d => {
    return getDataByLocale(d)
  })
})
