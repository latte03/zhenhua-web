import { NuxtLink } from '#components'
import { ChannelAttrs } from '~/server/api/channel'

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

export default { useMenuOptions }
