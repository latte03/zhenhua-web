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

export function useListByCode(option: { code: string }) {
  const { code } = option

  const { content, page, count } = useListByAny({
    channel_code: code
  })

  return { content, page, count }
}

type URL = '/api/article/list' | '/api/article/search'
export function useListByAny(
  _data: MaybeRefOrGetter<any>,
  url: URL = '/api/article/list'
) {
  const page = ref(1)
  const { locale } = useI18n()

  const dataRef = toRef(_data)
  const body = computed(() => {
    return {
      pageInfo: {
        pageIndex: page.value,
        pageSize: 10
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
