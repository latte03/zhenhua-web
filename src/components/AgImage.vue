<script lang="ts" setup>
import { computed } from 'vue'
import { transformURL } from '~/utils'

interface PropsType {
  src?: string
}
const props = defineProps<PropsType>()

const _src = computed(() => {
  return props.src ? transformURL(props.src) : props.src
})
</script>

<template>
  <img :src="_src" class="object-cover ag-image" v-bind="$attrs" />
</template>
