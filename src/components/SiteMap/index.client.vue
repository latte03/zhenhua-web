<script lang="ts" setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { EffectScatterChart, MapChart } from 'echarts/charts'
import {
  GeoComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import { getOption } from './_utils'
import { MapData } from '~/composables/useMap'

// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'SiteMap' })

use([
  CanvasRenderer,
  MapChart,
  EffectScatterChart,
  GeoComponent,
  TooltipComponent,
  LegendComponent
])

const data = ref<Array<MapData>>([])
const option = getOption()
const { registered, chatRef, toolTips, updateMap } = useMap()

// provide(THEME_KEY, 'dark')

onMounted(() => {
  setTimeout(() => {
    data.value = [
      {
        name: '河南省',
        value: [113.665412, 34.757975],
        data: {
          value: 1
        }
      }
    ]
  }, 500)
})
watch([registered, data], ([r, d]) => {
  if (r && d.length > 0) {
    // merge option
    updateMap(d)
  }
})
</script>

<template>
  <div v-if="registered" class="site-map">
    <SiteMapTooltip v-for="tool in toolTips" :key="tool.name" :data="tool" />
    <VChart ref="chatRef" class="chart" :option="option" />
  </div>
</template>

<style lang="scss" scoped>
.chart,
.site-map {
  @apply relative;

  width: var(--map-width);
  height: var(--map-height);
}
</style>
