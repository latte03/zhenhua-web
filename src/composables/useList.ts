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

export function useListByAny(_data: any) {
  const page = ref(1)
  const body = computed(() => {
    return {
      pageInfo: {
        pageIndex: page.value,
        pageSize: 10
      },
      data: _data
    }
  })
  const { data } = useFetch('/api/article/list', {
    method: 'post',
    body
  })

  const content = computed(() => {
    return data.value?.rows || []
  })

  const count = computed(() => {
    return data.value?.count || 0
  })
  return { content, page, count }
}
