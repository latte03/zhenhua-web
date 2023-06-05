export const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:5810'
  : '/cms-api'

interface PageInfo {
  pageSize?: number
  pageIndex?: number
}

export interface PageList<T> {
  pageInfo: PageInfo
  data: T
}
