<script lang="ts" setup>
import { omit } from 'lodash-es'
import { computed } from 'vue'
import { transformURL } from '~/utils'

interface PropsType {
  src?: string
  preview?: boolean
  lazy?: boolean
  className?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}
const props = withDefaults(defineProps<PropsType>(), {
  objectFit: 'cover',
  lazy: true
})

const _src = computed(() => {
  return props.src ? transformURL(props.src) : props.src
})
</script>

<template>
  <n-image
    :lazy="lazy"
    :src="_src"
    :preview-disabled="!preview"
    class="ag-image"
    :img-props="{
      class: className
    }"
    :object-fit="objectFit"
    :previewed-img-props="{
      style: { border: '8px solid white', maxWidth: '60vw' }
    }"
    v-bind="omit($attrs, 'class')"
  />
</template>
