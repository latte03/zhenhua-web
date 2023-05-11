import numeral from 'numeral'

export function formatNumber(value: string | number) {
  return numeral(value).format('00')
}
