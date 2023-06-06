import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'

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
  const { data } = await $fetch<{ data: SiteInfo }>(
    `${BASE_URL}/comm/site-info`
  )
  return data
})
