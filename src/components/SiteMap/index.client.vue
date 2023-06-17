<script lang="ts" setup>
import { ECElementEvent } from 'echarts/core'
import VChart from 'vue-echarts'
import { toNumber, values } from 'lodash-es'
import { CurrentMap } from './type'
import { use2DMap, useECharts, useRegister } from './composables/use2DMap'
import { useResize } from './composables/useResize'
import { EnergyAttrs } from '~/server/api/new-energy'

interface PropsType {
  data?: EnergyAttrs[] | null
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SiteMap' })
useECharts()

const energyData = computed(() => {
  const cache: Record<string, any> = {}
  props.data?.forEach(d => {
    if (!cache[d.province_id]) {
      cache[d.province_id] = {
        name: `${d.cn_province_name}`,
        value: d.province_point.split(',').map(p => toNumber(p)),
        data: {
          adcode: d.province_id,
          value: 1,
          list: [d]
        }
      }
    } else {
      cache[d.province_id].data.value++
      cache[d.province_id].data.list.push(d)
    }
  })

  return values(cache)
})

// const data = ref<Array<MapData>>([])
const { chatRef, option, toolTips, updateMap, setTooltips } = use2DMap()
const { registered } = useRegister()

useResize(chatRef, registered, () => {
  setTooltips(energyData.value)
})

const animate = ref(false)
const eventPos = reactive({
  x: 0,
  y: 0
})
const show3D = ref(false)
const currentSelect = ref<CurrentMap | undefined>(undefined)

watch(
  [registered, energyData],
  async ([r, d]) => {
    if (r && d.length > 0) {
      // merge option
      await nextTick()
      updateMap(d)
    }
  },
  { immediate: true }
)

function onChatClick(e: ECElementEvent) {
  if (e.data && typeof e.data === 'object' && e.seriesType === 'map') {
    const item = energyData.value.find(d => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return d.name === e.data.name
    })

    if (!item) {
      return
    }

    currentSelect.value = {
      name: item.name,
      adcode: item.data.adcode,
      list: item.data.list
    }
    eventPos.x = e.event?.offsetX || 0
    eventPos.y = e.event?.offsetY || 0
    animate.value = true

    setTimeout(() => {
      animate.value = false
      eventPos.y = 0
      eventPos.x = 0
      show3D.value = true
    }, 1000)
  }
}

async function on3DBack() {
  show3D.value = false
  currentSelect.value = undefined
  await nextTick()
  // updateMap(data.value)
  chatRef.value?.resize()
}
</script>

<template>
  <div class="site-map">
    <div
      v-if="registered"
      class="relative wh-full"
      :class="{ animate }"
      :style="{
        display: show3D ? 'none' : 'block',
        '--click-x': `${eventPos.x}px`,
        '--click-y': `${eventPos.y}px`
      }"
    >
      <SiteMapTooltip v-for="tool in toolTips" :key="tool.name" :data="tool" />
      <VChart
        ref="chatRef"
        class="chart"
        :option="option"
        @click="onChatClick"
      />
    </div>

    <SiteMapThreeMap
      v-if="currentSelect"
      :value="currentSelect"
      class="client"
      @back="on3DBack"
    />
  </div>
</template>

<style lang="scss">
.chart,
.site-map {
  @apply relative overflow-hidden;

  width: var(--map-width, 100%);
  height: var(--map-height, 900px);
}

.chart {
  position: absolute;
  width: 100%;
  height: 100%;
}

.animate {
  transform-origin: var(--click-x) var(--click-y);
  animation: zoom 1s ease forwards;
}

@keyframes zoom {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
