import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'

export interface GroupInfo {
  group_memo: KeyValue
  build_time: KeyValue
  group_pic: KeyValue
  group_video: KeyValue
  /** 资质数量 */
  qualification_num: KeyValue
  /** 注册资本 */
  registered_capital: KeyValue
  /** 员工数量 */
  staff_num: KeyValue
}
// 多语言在store 处理了
export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: GroupInfo }>(
    `${BASE_URL}/comm/group-info`
  )
  return data
})
