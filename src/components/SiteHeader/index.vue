<script lang="ts" name="SiteHeader" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

function onScroll(e: Event) {
  console.log('%c Line:5 🍔 e', 'color:#93c0a4', e)
}

onMounted(() => {
  nextTick(() => {
    document.addEventListener('scroll', onScroll)
  })
})
</script>

<template>
  <div class="fixed z-50 w-screen px-10 site-header">
    <div class="flex items-center justify-between">
      <div class="logo">logo</div>
      <ul class="flex items-center head-menu">
        <li>
          <NuxtLink class="block head-menu-item" to="/">首页</NuxtLink>
        </li>

        <Menu
          v-slot="{ open }"
          as="li"
          class="relative inline-block text-left hover:cursor-pointer head-menu-item"
        >
          <MenuButton as="span" :class="{ 'is-open': open }">
            业务板块
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="p-1">
                <MenuItem v-slot="{ active }">
                  <NuxtLink
                    :class="{ 'bg-blue-500': active }"
                    to="/business/engineering"
                  >
                    工程建设
                  </NuxtLink>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>

        <li class="p-6">lang</li>
        <li class="p-6">search</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.site-header {
  background-color: transparent;
  // background-color: var(--color-fill-1);
}

.head-menu-item {
  padding: 24px;
  &.router-link-active {
    background-color: #ddd;
  }
}
</style>
