export default function useScroll() {
  const isScroll = ref(false)

  function scroll() {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 10) {
      isScroll.value = true
    } else {
      isScroll.value = false
    }
  }

  onMounted(() => {
    scroll()
    window.addEventListener('scroll', scroll)
  })

  return { isScroll }
}
