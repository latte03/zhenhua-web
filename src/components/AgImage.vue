<script lang="ts" setup>
import { computed } from 'vue'
import { transformURL } from '~/utils'

interface PropsType {
  src?: string
  preview?: boolean
}
const props = defineProps<PropsType>()

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
    v-bind="$attrs"
  />
</template>
