<script lang="ts" setup>
import { ECElementEvent } from 'echarts/core'
import VChart from 'vue-echarts'
import { CurrentMap, MapData } from './type'
import { use2DMap, useECharts, useRegister } from './composables/use2DMap'
import { useResize } from './composables/useResize'

// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'SiteMap' })
useECharts()
const data = ref<Array<MapData>>([])
const { chatRef, option, toolTips, updateMap, setTooltips } = use2DMap()
const { registered } = useRegister()
useResize(chatRef, registered, () => {
  setTooltips(data.value)
})

const animate = ref(false)
const eventPos = reactive({
  x: 0,
  y: 0
})
const show3D = ref(false)
const currentSelect = ref<CurrentMap | undefined>(undefined)
// {
//   name: '河南省',
//   adcode: '410000'
// }
// provide(THEME_KEY, 'dark')

onMounted(() => {
  setTimeout(() => {
    data.value = [
      {
        name: '河南省',
        value: [113.665412, 34.757975],

        data: {
          adcode: '410000',
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

function onChatClick(e: ECElementEvent) {
  if (e.data && typeof e.data === 'object' && e.seriesType === 'map') {
    const item = data.value.find(d => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return d.name === e.data.name
    })

    if (!item) {
      return
    }

    currentSelect.value = {
      name: item.name,
      adcode: item.data.adcode
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
      class="wh-full"
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

  width: var(--map-width);
  height: var(--map-height);
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
