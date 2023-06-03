export const BASE_URL = 'http://localhost:5810'

interface PageInfo {
  pageSize?: number
  pageIndex?: number
}

export interface PageList<T> {
  pageInfo: PageInfo
  data: T
}
