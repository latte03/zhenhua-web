<script lang="ts" setup>
interface PropsType {
  show: boolean
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:show'])
defineOptions({ name: 'SiteSearch' })
const router = useRouter()
const { t } = useLang()
const showSearch = useVModel(props, 'show', emit)
const value = ref('')
const localPath = useLocalePath()

function onSearch() {
  router.push({
    path: localPath('/search'),
    query: {
      q: value.value
    }
  })
  showSearch.value = false
}
</script>

<template>
  <n-modal v-model:show="showSearch" class="search-modal">
    <div style="width: 60vw">
      <n-input
        v-model:value="value"
        class="search-input"
        :placeholder="t('search-some-news')"
        size="large"
        @keyup.enter="onSearch"
      >
        <template #suffix>
          <n-button class="-mr-1" quaternary @click="onSearch">
            <Icon name="solar:rounded-magnifer-linear" />
          </n-button>
        </template>
      </n-input>
    </div>
  </n-modal>
</template>

<style lang="scss" scoped>
.search-modal {
  //   transform: translateY(-20vh);

  .search-input {
    --n-height: 60px;
    --n-color: rgba(255, 255, 255, 80%);

    backdrop-filter: blur(10px);
  }
}
</style>
