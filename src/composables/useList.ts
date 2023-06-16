import { MaybeRefOrGetter } from 'nuxt/dist/app/compat/capi'

interface Option {
  props?: {
    code?: string
  }
}
export function useListByRouteCode(option?: Option) {
  const { props } = option || {}
  const { code = 'code' } = props || {}
  const route = useRoute()
  const { content, page, count } = useListByCode({
    code: route.params[code] as string
  })

  return { content, page, count }
}
interface Option {
  url?: URL
  pageSize?: number
}

export function useListByCode(option: Option & { code: string }) {
  const { code, ...rest } = option

  const { content, page, count } = useListByAny(
    {
      channel_code: code
    },
    rest
  )

  return { content, page, count }
}

type URL = '/api/article/list' | '/api/article/search'

export function useListByAny(_data: MaybeRefOrGetter<any>, option: Option) {
  const { pageSize = 10, url = '/api/article/list' } = option
  const page = ref(1)
  const { locale } = useI18n()

  const dataRef = toRef(_data)
  const body = computed(() => {
    return {
      pageInfo: {
        pageIndex: page.value,
        pageSize
      },
      data: dataRef.value
    }
  })
  const { data } = useFetch(url, {
    method: 'post',
    body,
    query: {
      locale
    }
  })

  const content = computed(() => {
    return data.value?.rows || []
  })

  const count = computed(() => {
    return data.value?.count || 0
  })
  return { content, page, count }
}
