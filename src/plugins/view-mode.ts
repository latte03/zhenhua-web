export default defineNuxtPlugin(nuxtApp => {
  const isLargeScreen = ref(true)

  nuxtApp.hook('app:mounted', () => {
    watchEffect(() => {
      isLargeScreen.value = useMediaQuery('(min-width: 768px)').value
    })
  })
  return {
    provide: {
      isLargeScreen: computed(() => isLargeScreen.value)
    }
  }
})
