export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}

export interface KeyValue {
  id: number
  /**
   * key 键名
   */
  key: string

  /** 类型 */
  type: string
  /**
   * 对应的值
   */
  value: string
  /**
   * 对该行的描述
   */
  desc: string
  /**
   * 图标地址
   */
  icon_url?: string

  visible: boolean
  /**
   * 英文描述
   */
  en_desc: string
  /**
   * 英文值
   */
  en_value: string
}
