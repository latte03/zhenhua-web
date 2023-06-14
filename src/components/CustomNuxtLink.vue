<script setup lang="ts">
const props = defineProps<{ to: any; className?: any }>()
const emit = defineEmits(['click'])
// sorry, not efficient in typescript

function handlerClick($ev: MouseEvent) {
  console.log('%c Line:7 🥒 $ev', 'color:#33a5ff', $ev)
  emit('click', $ev)
}
function onLinkClick(event: MouseEvent, navigate: (event: MouseEvent) => void) {
  navigate(event) // vou router goto
  event.preventDefault()
  event.stopImmediatePropagation()
}
</script>

<template>
  <NuxtLink v-slot="{ href, navigate }" :to="props.to" :custom="true">
    <a :class="className" :href="href" @click="$ev => handlerClick($ev)">
      <slot></slot>
    </a>
  </NuxtLink>
</template>
