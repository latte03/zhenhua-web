import { NuxtLink } from '#components'
import { Attrs, ChannelAttrs } from '~/server/api/channel'

export function useMenuOptions() {
  const localePath = useLocalePath()
  function transformMenuDataToOptions(menus: ChannelAttrs[]) {
    return menus.map(menu => {
      return {
        label: () => (
          <div class="">
            <NuxtLink
              class="block head-menu-item"
              target={menu.link_type === 'link' ? '_blank' : '_self'}
              to={menu.link_type === 'path' ? localePath(menu.link) : menu.link}
            >
              {menu.name}
            </NuxtLink>
          </div>
        ),
        key: menu.name
      }
    })
  }

  return transformMenuDataToOptions
}

export function useMenus(channelTree: Ref<(Attrs & { children: Attrs[] })[]>) {
  const transform = useMenuOptions()

  const localePath = useLocalePath()

  return computed(() => {
    return channelTree.value.map(channel => {
      return {
        ...channel,
        label: () => (
          <div class="">
            <NuxtLink
              class="block head-menu-item"
              target={channel.link_type === 'link' ? '_blank' : '_self'}
              to={
                channel.link_type === 'path'
                  ? localePath(channel.link)
                  : channel.link
              }
            >
              {channel.name}
            </NuxtLink>
          </div>
        ),
        children: transform(channel.children)
      }
    })
  })
}

export default { useMenuOptions }
