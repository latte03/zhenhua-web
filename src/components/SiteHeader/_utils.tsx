import { Menu } from './mock'
import { NuxtLink } from '#components'

export function useMenuOptions() {
  const localePath = useLocalePath()
  function transformMenuDataToOptions(menus: Menu[]) {
    return menus.map(menu => {
      return {
        label: () => (
          <div class="">
            <NuxtLink class="block head-menu-item" to={localePath(menu.path)}>
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
