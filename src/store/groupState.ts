import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GroupInfo } from '~/server/api/group-info'

export const useGroupState = defineStore('group-info', () => {
  const groupInfoSource = ref<GroupInfo | null>(null)
  const KEY = 'value'
  const groupInfo = computed(() => {
    if (!groupInfoSource.value) {
      return {}
    }

    return {
      groupMemo: groupInfoSource.value.group_memo[KEY]
    }
  })
  const getGroupInfo = async () => {
    const { data } = await useFetch(`/api/group-info`)
    groupInfoSource.value = data.value
  }

  return { groupInfo, getGroupInfo }
})
