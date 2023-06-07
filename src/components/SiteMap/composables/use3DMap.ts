import { getMap, registerMap, use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import type { MaybeRefOrGetter } from '@vueuse/shared'
import { toRef } from '@vueuse/shared'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Map3DChart, Scatter3DChart } from 'echarts-gl/charts'
import {
  Geo3DComponent,
  Mapbox3DComponent,
  Maptalks3DComponent
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
} from 'echarts-gl/components'

import { TooltipComponent } from 'echarts/components'
import { values } from 'lodash-es'
import { CurrentMap, EChartVC } from '../type'
import { getMap3DSetting } from '../_utils'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MapIcon from '@/assets/images/map-icon.svg'
import { EnergyAttrs } from '~/server/api/new-energy'

export function use3DMap(value: MaybeRefOrGetter<CurrentMap>) {
  const viewControl = {
    // 禁止缩放
    zoomSensitivity: 0,
    alpha: 20,
    distance: 120,
    maxDistance: 200,
    minDistance: 100
  }
  const valueRef = toRef(value)
  const chatRef = ref<EChartVC | null>(null)
  const chargingData = computed(() => {
    const cache: Record<string, any> = {}
    valueRef.value.list.forEach(d => {
      if (!cache[d.city_id]) {
        cache[d.city_id] = {
          name: `${d.cn_city_name}`,
          value: d.city_point.split(','),
          data: [d]
        }
      } else {
        cache[d.city_id].data.push(d)
      }
    })
    return values(cache)
  })

  const option = computed(() => {
    return {
      tooltip: {
        trigger: 'item',
        triggerOn: 'click',
        // backgroundColor: 'rgba(255,255,255,0)',

        formatter(params: { data: { value: any; data: EnergyAttrs[] } }) {
          if (params.data.value) {
            const { data } = params.data
            return `
     <div class="font-semibold charging-title">充电桩地址</div>
     <ul class="mt-2">
        ${data
          .map(d => {
            return `
              <li class="charging-address">
                <i class='icon-charge' ></i>
                <span>${d.cn_address}</span>
              </li>
            `
          })
          .join(' ')}
      </ul>
      `
          }
          return null
        }
      },
      geo3D: [
        {
          // show: false,
          map: valueRef.value.name,
          ...getMap3DSetting(),
          zlevel: -1,
          viewControl
        }
      ],
      series: [
        {
          type: 'map3D',
          name: 'map3D',
          map: valueRef.value.name,
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
          symbolSize: [20, 32],
          itemStyle: {
            color: 'transparent'
          },
          label: {
            show: true,
            position: 'top',
            distance: -20,
            color: 'transparent',
            padding: [26, 18],
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
    }
    await nextTick()
    registered.value = true
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
