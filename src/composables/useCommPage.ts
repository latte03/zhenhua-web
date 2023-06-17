const [useProvidePageStore, useCommonPageStore] = createInjectionState(() => {
  const state = useState('commPageState', () => ({
    name: '',
    src: '',
    topChannelCode: '',
    channel_id: undefined
  }))

  return { state }
})

export { useProvidePageStore, useCommonPageStore }
