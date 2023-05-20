import { registerMap, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { EffectScatterChart, MapChart } from 'echarts/charts'
import {
  GeoComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components'
import { EChartVC, MapData, ToolTipData } from '../type'
import { ECOption, getItemStyle, getOption } from '~/components/SiteMap/_utils'

export function useECharts() {
  use([
    CanvasRenderer,
    MapChart,
    EffectScatterChart,
    GeoComponent,
    TooltipComponent,
    LegendComponent
  ])
}

export function use2DMap() {
  const option = ref(getOption())
  const chatRef = ref<EChartVC | null>(null)

  const toolTips = ref<Array<ToolTipData>>([])

  function updateMap(data: MapData[]) {
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
    setTooltips(data)
  }

  function setTooltips(data: MapData[]) {
    toolTips.value = data.map(i => {
      return {
        ...i,
        rect: chatRef.value?.convertToPixel('geo', i.value)
      }
    })
  }

  return { chatRef, option, toolTips, updateMap, setTooltips }
}

export function useRegister() {
  const registered = ref(false)

  onMounted(async () => {
    registered.value = false
    const data = await $fetch<string>('/china.json')

    registerMap('china', data)
    registered.value = true
  })

  return { registered }
}
export default {}
