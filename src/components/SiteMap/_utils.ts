import { ComposeOption } from 'echarts/core'
import { EffectScatterSeriesOption, MapSeriesOption } from 'echarts/charts'
import { GeoComponentOption, TooltipComponentOption } from 'echarts/components'
import { ref } from 'vue'
import da from '@/assets/images/bumpy_worn_ground_albedo.png'

export type ECOption = ComposeOption<
  | MapSeriesOption
  | TooltipComponentOption
  | GeoComponentOption
  | EffectScatterSeriesOption
>

export function getOption() {
  const option = ref<ECOption>({
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    //   legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
    //   },
    geo: [
      {
        map: 'china',
        show: true,
        zoom: 1.2,
        top: 130,
        label: {
          show: false
        },
        itemStyle: {
          shadowColor: 'rgba(11, 30, 71, 0.15)',
          shadowBlur: 26,
          shadowOffsetX: 0,
          shadowOffsetY: 8
        }
      }
    ],
    series: [
      {
        name: '中国地图',
        map: 'china',
        type: 'map',
        zoom: 1.2,
        label: {
          show: true,
          color: '#5370AF',
          fontWeight: 500,
          fontSize: 10,
          textShadowColor: 'rgba(7, 19, 47, 0.19)',
          textShadowBlur: 4,
          textShadowOffsetY: 2,
          textBorderColor: 'rgba(255,255,255,0.5)',
          textBorderWidth: 1
        },
        top: 130,
        itemStyle: {
          areaColor: '#fff',
          color: '#fff',
          borderColor: 'rgba(6, 49, 144, 0.42)',
          borderWidth: 1
        },
        select: {
          disabled: true
        },
        emphasis: {
          disabled: true
        },
        data: []
      },
      {
        type: 'effectScatter',
        name: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: 8,
        label: {
          show: false
        },
        itemStyle: {
          color: '#063190'
        }
      }
    ]
  })
  return option
}

export function getItemStyle() {
  return {
    itemStyle: {
      areaColor: '#E7F0FF'
    },
    select: {
      disabled: false,
      itemStyle: {
        areaColor: '#76A4F0'
      },
      label: {
        color: '#063190'
      }
    }
  }
}

export function getMap3DSetting() {
  return {
    label: {
      show: true,
      distance: 0,
      // textStyle: {
      color: '#063190',
      textBorderWidth: 1,
      textBorderColor: '#fff',
      textShadowColor: 'rgba(7, 19, 47, 0.1)',
      textShadowBlur: 4,
      textShadowOffsetY: 2
      // }
    },
    itemStyle: {
      color: [1, 1, 1, 1],
      borderWidth: 1,
      borderColor: '#fff'
    },

    emphasis: {
      itemStyle: {
        color: [0.91, 0.92, 0.97, 1],
        borderWidth: 1,
        borderColor: '#fff'
      }
    },

    shading: 'lambert',
    lambertMaterial: {
      detailTexture: da,
      // textureTiling: 3,
      roughness: 0.3
      // metalness: 1
      // normalTexture: Normal
    },
    light: {
      main: {
        color: '#DEE6F8',
        intensity: 0.8
      },
      ambient: {
        color: '#DEE6F8',
        intensity: 0.6
      }
    },
    postEffect: {
      // enable: true,
      colorCorrection: {
        enable: true
        // lookupTexture: crispwinter
      }
    }
  }
}
export default {}
