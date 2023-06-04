import { defineStore } from 'pinia'
import { GroupInfo } from '~/server/api/group-info'

export const useGroupState = defineStore('group-info', () => {
  const groupInfoSource = useState<GroupInfo | null>(
    'groupInfoSource',
    () => null
  )

  // ref<GroupInfo | null>(null)
  const KEY = 'value'
  const groupInfo = computed(() => {
    if (!groupInfoSource.value) {
      return {}
    }

    return {
      groupMemo: groupInfoSource.value.group_memo[KEY],
      groupPic: groupInfoSource.value.group_pic[KEY].split(','),
      groupVideo: groupInfoSource.value.group_video[KEY],
      buildTime: groupInfoSource.value.build_time[KEY],
      qualificationNum: groupInfoSource.value.qualification_num[KEY],
      registeredCapital: groupInfoSource.value.registered_capital[KEY],
      staffNum: groupInfoSource.value.staff_num[KEY]
    }
  })
  const getGroupInfo = async () => {
    const { data } = await useFetch(`/api/group-info`)
    groupInfoSource.value = data.value
  }

  return { groupInfo, groupInfoSource, getGroupInfo }
})
