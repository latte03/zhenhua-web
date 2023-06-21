<script lang="ts" setup>
import { omit } from 'lodash-es'
import { computed } from 'vue'
import { transformURL } from '~/utils'

interface PropsType {
  src?: string
  preview?: boolean
  className?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}
const props = withDefaults(defineProps<PropsType>(), {
  objectFit: 'cover'
})

const _src = computed(() => {
  return props.src ? transformURL(props.src) : props.src
})
</script>

<template>
  <n-image
    lazy
    :src="_src"
    :preview-disabled="!preview"
    class="ag-image"
    :img-props="{
      class: className
    }"
    :object-fit="objectFit"
    :previewed-img-props="{
      style: { border: '8px solid white', width: '60vw' }
    }"
    v-bind="omit($attrs, 'class')"
  />
</template>
