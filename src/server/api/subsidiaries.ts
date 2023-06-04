import { values } from 'lodash-es'
import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'

export interface Sub {
  group_memo: KeyValue
}
export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: Sub }>(`${BASE_URL}/comm/subsidiaries`)

  return values(data) || []
})
