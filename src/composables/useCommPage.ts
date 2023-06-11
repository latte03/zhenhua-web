const [useProvidePageStore, useCommonPageStore] = createInjectionState(() => {
  const state = useState('commPageState', () => ({
    name: '',
    src: '',
    topChannelCode: ''
  }))

  return { state }
})

export { useProvidePageStore, useCommonPageStore }
