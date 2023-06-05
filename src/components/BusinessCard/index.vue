<script lang="ts" setup>
interface Data {
  name: string
  icon: string
  desc: string
  id: string
}
interface PropsType {
  data: Data
}
const props = defineProps<PropsType>()
defineOptions({ name: 'BusinessCard' })
</script>

<template>
  <div class="cursor-pointer gi-item">
    <div class="absolute z-10 item-content">
      <div class="absolute item-icon flex-center">
        <ClientOnly>
          <Icon name="solar:paint-roller-line-duotone" size="24px" />
        </ClientOnly>
      </div>
      <div>
        <div class="text-lg text-center item-title">{{ data.name }}</div>
        <div class="text-center item-desc">{{ data.desc }}</div>
      </div>
      <div class="absolute item-button">
        <span class="button-text">查看更多</span>
        <ClientOnly>
          <Icon name="solar:arrow-right-broken" size="24px" />
        </ClientOnly>
      </div>
    </div>
    <AgImage
      class="object-cover to-left-top wh-full"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      :alt="data.name"
    />
  </div>
</template>

<style lang="scss" scoped>
.gi-item {
  @apply relative overflow-hidden;

  height: 0;
  padding-bottom: 152%;
  color: var(--white);

  .item-content {
    @apply w-full p-6 bottom-0;

    height: 100px;
    background: var(--color-black-bg-40);
    backdrop-filter: blur(10px);
    transition: all 0.6s ease;
  }

  .item-title {
    @apply mt-4;
  }

  .item-icon {
    @apply transition-base z-1 w-14 h-14 opacity-100;

    top: -28px;
    left: calc(50% - 28px);
    color: var(--black);
    background-color: var(--white);
    border-radius: 50%;
  }

  .item-button {
    @apply transition-base opacity-0 flex bottom-6 px-6 py-3 rounded-full;

    left: 50%;
    align-items: center;
    width: 64px;
    font-size: 14px;
    background: var(--color-bg-30);
    border: 1px solid var(--color-bg-50);
    transform: translateX(-50%) scale(0);
  }

  .button-text {
    @apply absolute transition-base opacity-0;

    word-break: keep-all;
    transform: translateX(32px);
  }

  .item-desc {
    font-size: 14px;
    transform: scale(0.5);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    .item-content {
      @apply h-full;

      padding-top: 7.08vw;
    }

    .item-icon {
      top: 3.8vw;
      transition: all 0.6s 0.2s ease-in;
    }

    .item-desc {
      @apply mt-4 opacity-70;

      transform: scale(1);
      transition: all 0.6s 0.3s ease;
    }

    .item-button {
      @apply opacity-100;

      transform: translateX(-50%) scale(1);
      transition: all 0.6s ease;

      &:hover {
        width: 140px;

        .button-text {
          @apply relative;

          margin-right: 12px;
          transform: translateX(0);
          opacity: 1;
          transition: transform 1s 0.2s ease, opacity 1s 0.2s ease;
        }
      }
    }
  }
}
</style>
