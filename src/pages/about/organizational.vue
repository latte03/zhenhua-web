<script lang="ts" setup>
interface PropsType {}
const props = defineProps<PropsType>()
defineOptions({ name: 'AboutOrganizational' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '镇华集团', slogan: '123213' }
})
</script>

<template>
  <div class="AboutOrganizational">AboutOrganizational</div>
</template>

<style lang="scss" scoped>
.AboutOrganizational {
}
</style>
