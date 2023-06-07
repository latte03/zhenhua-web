import VChart from 'vue-echarts'
import { EnergyAttrs } from '~/server/api/new-energy'

export type EChartVC = InstanceType<typeof VChart>

export interface CurrentMap {
  name: string
  adcode: string
  list: EnergyAttrs[]
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
