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

export function transformURL(url: string | number) {
  if (!url) {
    return ''
  }
  if (typeof url !== 'string') {
    return url.toString()
  }
  if (url.startsWith('data') || url.includes('http') || url.includes('nuxt')) {
    return url
  }

  return `${
    import.meta.env.DEV ? 'http://localhost:5810/assets' : '/assets'
  }/${url}`
}
