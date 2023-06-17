import { toString } from 'lodash-es'

export type LocaleCode = 'zh' | 'en'
const localeMap = {
  zh: 'cn',
  en: 'en'
}
export function getLocaleData(locale: LocaleCode) {
  const localePrefix = localeMap[locale]

  /**
   * 查找是否含有 locale 前缀的值 没有就返回不带前缀的值
   *
   * @template T
   * @param {T} data
   * @param {keyof T} key
   */
  function getValue<T extends Record<string, any>>(data: T, key: keyof T) {
    const value = data[`${localePrefix}_${toString(key)}`] as T[keyof T]
    return value || data[key]
  }

  /**
   *
   * 通过 data 返回 经过处理的 值
   * @param {object} data
   */
  function getDataByLocale<T extends object>(data: T) {
    const keys = getMutilateKey(data)
    const cloneData = cloneAndSetCN(data, keys)
    keys.forEach(key => {
      const value = getValue(cloneData, key)
      cloneData[key] = value
    })

    return cloneData
  }
  return getDataByLocale
}

function cloneAndSetCN<T extends Record<string, any>>(
  data: T,
  keys: Array<keyof T>
) {
  const _data = { ...data }
  keys.forEach(k => {
    const _k = toString(k)
    if (!_data[`${localeMap.zh}_${_k}`]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      _data[`${localeMap.zh}_${_k}`] = data[`${_k}`]
    }
  })

  return _data
}

/**
 * 获取需要进行多语言分离的key
 *
 * @template T
 * @param {T} data
 * @return {Array<keyof T>}
 */
function getMutilateKey<T>(data: T): Array<keyof T> {
  type Key = keyof T
  const keys: Array<Key> = []
  for (const key in data) {
    if (key.startsWith('en')) {
      keys.push(key.replace('en_', '') as Key)
    }
  }

  return keys
}
