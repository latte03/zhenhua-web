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

  const { data } = useFetch('/api/article/list', {
    method: 'post',
    body: {
      pageInfo: {
        pageIndex: 1,
        pageSize: 5
      },
      data: {
        channel_code: code
      }
    }
  })

  const content = computed(() => {
    return data.value?.rows || []
  })
  const page = ref(1)
  const count = computed(() => {
    return data.value?.count || 0
  })
  return { content, page, count }
}
