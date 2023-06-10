<script lang="ts" setup>
import { useChannelStore } from '~/store/channelState'

defineOptions({ name: 'SectionBusiness' })

const channelStore = useChannelStore()

const business = computed(() => {
  const businessParent = channelStore.channelTree?.find(
    c => c.code === 'business'
  )
  return businessParent ? businessParent.children : []
})
const localePath = useLocalePath()
</script>

<template>
  <div class="relative section-business text-color">
    <SiteSectionTitle
      title="业务模块"
      en-title="Business SECTOR"
      class="absolute z-10 section-business-title text-color"
    />
    <div class="flex h-full business-body">
      <div
        v-for="(d, index) in business"
        :key="d.name"
        class="relative flex-col overflow-hidden text-center cursor-pointer transition-base flex-center business-item"
      >
        <div class="relative z-10 transition-base info">
          <div class="mb-6 text-4xl font-bold inf-name">{{ d.name }}</div>
          <div class="info-desc text-base-sm opacity-80">
            {{ d.description }}
          </div>

          <NuxtLink
            :to="localePath(d.link || '')"
            class="px-6 py-2 mt-8 info-button flex-center transition-base"
          >
            <span class="mr-2 transition-base">{{ $t('view-details') }}</span>
            <Icon size="20px" name="solar:arrow-right-line-duotone" />
          </NuxtLink>
        </div>
        <div class="absolute opacity-50 index z-2">0{{ index + 1 }}</div>
        <div class="to-left-top wh-full mask-cover z-1"></div>
        <AgImage
          class="to-left-top wh-full transition-base img"
          :src="d.thumbnail"
          :alt="d.name"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-color {
  --text-color: #fff;

  color: var(--text-color);
}

:deep(.en-title) {
  opacity: 0.7;
}

.section-business {
  height: 45vw;

  &-title {
    top: 72px;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
  }

  .business-item {
    --blur: 0px;

    width: 25%;
    background-color: #000;

    .info-button {
      display: inline-block;
      border: 1px solid transparent;
      border-radius: 99px;
      transform: scale(0);
      opacity: 0;

      &:hover {
        border: 1px solid #fff;
      }
    }

    .info {
      width: 20vw;
    }

    .mask-cover {
      background-color: rgb(0 0 0 / 80%);
      transition: all 0.3s ease;
    }

    .index {
      right: 48px;
      bottom: 48px;
      font-weight: 700;
      font-size: 36px;
      font-family: Montserrat-Bold, Montserrat, Arial, Helvetica, sans-serif;
      line-height: 44px;
      transition: all 0.3s ease;
    }

    &:hover {
      --blur: 5px;

      width: 26%;

      .mask-cover {
        background-color: rgb(0 0 0 / 70%);
      }

      .index {
        font-size: 56px;
      }

      .info {
        transform: translateY(-40px);
      }

      .info-button {
        transform: scale(1);
        opacity: 1;
      }

      .img {
        transform: scale(1.2);
        filter: blur(var(--blur));
      }
    }
  }
}
</style>
