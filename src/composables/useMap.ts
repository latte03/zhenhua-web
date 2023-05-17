import { registerMap } from 'echarts/core'
import VChart from 'vue-echarts'
import { ECOption, getItemStyle } from '~/components/SiteMap/_utils'

export interface MapData {
  name: string
  value: [number, number]
  data?: any
}

export interface ToolTipData extends MapData {
  rect?: number[]
}
export function useMap() {
  const chatRef = ref<InstanceType<typeof VChart> | null>(null)
  const registered = ref(false)
  const toolTips = ref<Array<ToolTipData>>([])

  onMounted(async () => {
    registered.value = false
    const data = await $fetch<string>('/china.json')
    registerMap('china', data)
    registered.value = true
  })

  function updateMap(data: Data[]) {
    chatRef.value?.setOption({
      series: [
        {
          name: '中国地图',
          data: data.map(i => {
            return {
              name: i.name,
              value: i.value,
              ...getItemStyle()
            }
          })
        },
        {
          // 根据名字对应到相应的系列
          name: 'effectScatter',
          data
        }
      ]
    } as ECOption)
    toolTips.value = data.map(i => {
      return {
        ...i,
        rect: chatRef.value?.convertToPixel('geo', i.value)
      }
    })
  }

  return { registered, chatRef, toolTips, updateMap }
}
