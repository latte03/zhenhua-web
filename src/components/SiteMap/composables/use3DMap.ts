import { getMap, registerMap, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { Map3DChart, Scatter3DChart } from 'echarts-gl/charts'
import {
  Geo3DComponent,
  Mapbox3DComponent,
  Maptalks3DComponent
} from 'echarts-gl/components'

import { TooltipComponent } from 'echarts/components'
import { CurrentMap, EChartVC } from '../type'
import { getMap3DSetting } from '../_utils'
import MapIcon from '@/assets/images/map-icon.svg'

export function use3DMap(value: CurrentMap) {
  const viewControl = {
    // 禁止缩放
    // zoomSensitivity: 0,
    alpha: 20,
    distance: 120,
    maxDistance: 200,
    minDistance: 100
  }
  const chatRef = ref<EChartVC | null>(null)
  const chargingData = ref()
  const option = computed(() => {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        // backgroundColor: 'rgba(255,255,255,0)',

        formatter(params) {
          if (params.data.value) {
            return `
     <div>充电桩地址</div>
     <ul>
      <li>
        <i class='icon-charge'>
          <span>ddddd</span>
        </li>
         </ul>
      `
          }
          return null
        }
      },
      geo3D: [
        {
          // show: false,
          map: value.name,
          ...getMap3DSetting(),
          zlevel: -1,
          viewControl
        }
      ],
      series: [
        {
          type: 'map3D',
          name: 'map3D',
          map: value.name,
          itemStyle: {
            color: [1, 1, 1, 0]
          },
          emphasis: {
            itemStyle: {
              color: [1, 1, 1, 0]
            }
          },
          data: chargingData.value,
          viewControl
        },
        {
          type: 'scatter3D',
          name: 'scatter3D',
          coordinateSystem: 'geo3D',
          symbol: 'circle',
          symbolSize: [20, 29],
          itemStyle: {
            color: 'transparent'
          },
          label: {
            show: true,
            position: 'top',
            distance: -20,
            color: 'transparent',
            padding: [13, 15],
            backgroundColor: {
              image: MapIcon
            }
          },
          zIndex: 10,
          data: chargingData.value
          // symbol
        }
      ]
    }
  })

  return { chatRef, option, chargingData }
}
export function useRegister(value: CurrentMap) {
  const registered = ref(false)
  onMounted(async () => {
    registered.value = false
    const mapData = getMap(value.name)

    if (!mapData) {
      const data = await $fetch<string>(
        `https://geo.datav.aliyun.com/areas_v3/bound/${value.adcode}_full.json`
      )
      registerMap(value.name, data)
      registered.value = true
    }
  })

  return { registered }
}

export function useECharts() {
  use([
    CanvasRenderer,
    Map3DChart,
    Scatter3DChart,
    TooltipComponent,
    Mapbox3DComponent,
    Maptalks3DComponent,
    Geo3DComponent
  ])
}
export default {}
