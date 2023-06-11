import { ChannelAttrs } from '../channel'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'
import { BASE_URL } from '~/utils/constant'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  const { data } = await $fetch<{ data: ChannelAttrs }>(
    `${BASE_URL}/site/channel/byCode/${query.code}`
  )
  return getDataByLocale(data)
})
