export const BASE_URL = 'http://localhost:5810'
// ? 'http://localhost:5810'
// : 'http://106.14.27.158/cms-api'

interface PageInfo {
  pageSize?: number
  pageIndex?: number
}

export interface PageList<T> {
  pageInfo: PageInfo
  data: T
}
