// import { computed, ref } from 'vue'
import { createInjectionState } from '@vueuse/shared'

interface InnerPageState {
  topChannelCode?: string
  pageChannelCode?: string
  name?: string
  slogan?: string
  hasPageBar?: boolean
  src?: string
}

function useInnerPageState() {
  return useState<InnerPageState>('innerPageState', () => ({
    hasPageBar: false
  }))
}

const [useProvideInnerPageStore, useInnerPageStore] = createInjectionState(
  (initialValue: InnerPageState) => {
    const state = useInnerPageState()
    state.value = {
      ...initialValue
    }
    // const state = ref({ ...initialValue, hasPageBar: false })

    // actions
    function setState(value: Partial<InnerPageState>) {
      state.value = {
        ...state.value,
        ...value
      }
    }

    return { state, setState }
  }
)

export { useProvideInnerPageStore }
// If you want to hide `useCounterStore` and wrap it in default value logic or throw error logic, please don't export `useCounterStore`
export { useInnerPageStore }

export function useInnerPageContent(value?: Partial<InnerPageState>) {
  const { state, setState } = useInnerPageStore()!
  if (value) {
    setState({
      ...value,
      hasPageBar: value.hasPageBar !== false
    })
  }
  return { state, setState }
}

export function useInnerPageStoreWithDefaultValue() {
  return (
    useInnerPageStore() ?? {
      name: '',
      slogan: ''
    }
  )
}

export function useInnerPageStoreOrThrow() {
  const store = useInnerPageStore()
  if (store == null)
    throw new Error(
      'Please call `useProvideInnerPageStore` on the appropriate parent component'
    )
  return store
}
