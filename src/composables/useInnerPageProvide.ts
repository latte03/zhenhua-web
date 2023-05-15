// import { computed, ref } from 'vue'
// import { createInjectionState } from '@vueuse/shared'

interface InnerPageState {
  name: string
  slogan: string
  hasPageBar?: boolean
}

const [useProvideInnerPageStore, useInnerPageStore] = createInjectionState(
  (initialValue: InnerPageState) => {
    // state
    const state = ref({ ...initialValue, hasPageBar: true })

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
// export { useInnerPageStore }

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
