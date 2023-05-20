import VChart from 'vue-echarts'

export type EChartVC = InstanceType<typeof VChart>

export interface CurrentMap {
  name: string
  adcode: string
}
export interface MapData {
  name: string
  value: [number, number]
  data?: any
}

export interface ToolTipData extends MapData {
  rect?: number[]
}
export default {}
