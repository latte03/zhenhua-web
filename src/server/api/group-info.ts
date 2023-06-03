import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'

export interface GroupInfo {
  group_memo: KeyValue
}
export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: GroupInfo }>(
    `${BASE_URL}/comm/group-info`
  )
  return data
})
