import { defineStore } from 'pinia'
import { GroupInfo } from '~/server/api/group-info'

export const useGroupState = defineStore('group-info', () => {
  const groupInfoSource = useState<GroupInfo | null>(
    'groupInfoSource',
    () => null
  )

  const { locale } = useI18n()
  // ref<GroupInfo | null>(null)
  // const KEY = 'value'
  const KeyRef = computed(() => {
    return locale.value === 'en' ? 'en_value' : 'value'
  })
  const groupInfo = computed(() => {
    if (!groupInfoSource.value) {
      return {}
    }
    const KEY = KeyRef.value

    return {
      groupMemo: groupInfoSource.value.group_memo[KEY],
      groupPic: groupInfoSource.value.group_pic.value.split(','),
      groupVideo: groupInfoSource.value.group_video.value,
      buildTime: groupInfoSource.value.build_time.value,
      qualificationNum: groupInfoSource.value.qualification_num.value,
      registeredCapital: groupInfoSource.value.registered_capital.value,
      staffNum: groupInfoSource.value.staff_num.value
    }
  })
  const getGroupInfo = async () => {
    const { data } = await useFetch(`/api/group-info`)
    groupInfoSource.value = data.value
  }

  return { groupInfo, groupInfoSource, getGroupInfo }
})
