import { BASE_URL } from '~/utils/constant'

export interface ArticleAttrs {
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
   * 类型，
   */
  type?: string
  /**
   * 额外的链接
   */
  link?: string
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
  const { data } = await $fetch<{ data: ArticleAttrs[] }>(
    `${BASE_URL}/site/article`
  )
  return data
})
