export interface ILocales {
  name: string
  iso: string
  flag: string
}

export const availableLocales: ILocales[] = [
  {
    name: '中文',
    iso: 'zh',
    flag: 'twemoji:flag-china'
  },
  {
    name: 'English',
    iso: 'en',
    flag: 'twemoji:flag-us-outlying-islands'
  }
]
