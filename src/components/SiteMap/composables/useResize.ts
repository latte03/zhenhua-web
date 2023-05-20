import { EChartVC } from '../type'

export function useResize(
  chatRef: Ref<EChartVC | null>,
  registered: Ref<boolean>,
  callBack: () => void
) {
  function addResize() {
    window.addEventListener('resize', resize)
  }

  onUnmounted(() => {
    window.removeEventListener('reset', resize)
  })
  function resize() {
    chatRef.value?.resize()
    callBack && callBack()
  }

  watch(registered, () => {
    addResize()
  })
}

export default {}
