export function useBaseRoutePath() {
  const localePath = useLocalePath()
  const route = useRoute()

  const baseRoutePath = computed(() => {
    return localePath(route.path, 'zh')
  })

  return baseRoutePath
}
