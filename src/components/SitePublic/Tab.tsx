import { Icon } from '#components'

export function PublicTab(options: { icon: string; name: string }) {
  const { icon, name } = options
  return (
    <div class="public-tab color-inherit">
      <Icon name={icon}></Icon>
      <span>{name}</span>
    </div>
  )
}

export default {}
