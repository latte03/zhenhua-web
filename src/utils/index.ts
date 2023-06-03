import numeral from 'numeral'

export function formatNumber(value: string | number) {
  return numeral(value).format('00')
}
export function nest<T extends Record<string, any>>(
  items: T[],
  id = 0,
  link = 'pid'
): Array<T & { children: T[] }> {
  return items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))
}
