import { values } from 'lodash-es'
import { BASE_URL } from '~/utils/constant'
import { KeyValue } from '~/types'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'

export interface Sub {
  group_memo: KeyValue
}
export default defineEventHandler(async event => {
  const query = getQuery(event)
  const getDataByLocale = getLocaleData(query.locale as LocaleCode)

  const { data } = await $fetch<{ data: Sub }>(`${BASE_URL}/comm/subsidiaries`)

  const value = values(data) || []
  return value.map(v => {
    return getDataByLocale(v)
  })
})
