import { BASE_URL } from '~/utils/constant'

export interface Attrs {
  /**
   * 摘要
   */
  abstract: string
  /**
   * 作者
   */
  author?: string
  /**
   * 栏目id
   */
  channel_id: number

  sync_channel_ids?: string
  /**
   * 详情
   */
  content: string

  /**
   * 索引
   */
  id: number
  /**
   * 顺序
   */
  order?: number
  /**
   * 缩略图
   */
  thumbnail?: string
  /**
   * 标题
   */
  title: string
  /**
   * 类型，是否放到首页当轮播图链接
   */
  type?: string
  /**
   * 置顶
   */
  top?: boolean
  /**
   * 是否显示
   */
  visible?: boolean
  /**
   * 文章发布时间
   */
  release_time: string

  en_abstract: string
  en_content: string
  en_title: string
}
export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: Attrs[] }>(`${BASE_URL}/site/article`)
  return data
})
