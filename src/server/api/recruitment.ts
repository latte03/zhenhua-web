import { BASE_URL } from '~/utils/constant'
/**
 * 招聘
 */
export interface RecruitMentModel {
  /**
   * 招聘岗位
   */
  title: string
  en_title: string
  /**
   * 人数
   */
  num: string
  /**
   * 学历
   */
  education: string
  en_education: string
  /**
   * 经验要求
   */
  experience: string
  /**
   * 具体内容
   */
  cn_content: string
  /**
   * 具体内容
   */
  en_content: string
  /**
   * 索引
   */
  id: number
  /**
   * 顺序
   */
  order?: number
  /**
   * 是否显示
   */
  visible?: boolean
  create_time: string
}

export default defineEventHandler(async event => {
  const { data } = await $fetch<{ data: RecruitMentModel[] }>(
    `${BASE_URL}/site/recruitment/all`
  )
  return data
})
