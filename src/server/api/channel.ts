import { BASE_URL } from '~/utils/constant'
import { LocaleCode, getLocaleData } from '~/utils/getLocaleData'

export type LinkType = 'link' | 'path'
export type TemplateType = 'list' | 'page'

export interface Attrs {
  id: number
  order: number
  name: string
  path?: string
  /** 栏目的code， 用于路径 */
  code: string

  description: string
  pid: number
  visible: boolean
  /** 是否是外部链接 */
  link_type: LinkType
  /** 外部链接地址 */
  link: string

  template_type: TemplateType
  /** 栏目关键词 */
  keywords?: string
  /** 栏目描述 */
  content?: string
  /** 栏目背景图 */
  thumbnail: string
  icon?: string
}

export type ChannelAttrs = Attrs
export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: Attrs[] }>(`${BASE_URL}/site/channel`)
  const query = getQuery(event)
  const getDataByLocale = getLocaleData(query.locale as LocaleCode)
  return data.map(d => {
    return getDataByLocale(d)
  })
})
