<script lang="ts" setup>
interface Data {
  name: string
  icon: string
  desc: string
  id: number
  thumbnail: string
  link: string
  link_type: string
  code: string
}
interface PropsType {
  data: Data
}
defineProps<PropsType>()
defineOptions({ name: 'BusinessCard' })
</script>

<template>
  <div class="cursor-pointer gi-item">
    <div class="absolute item-icon flex-center">
      <AgImage :src="data.icon" class="object-cover w-5 h-5 md:w-6 md:h-6" />
    </div>
    <div class="absolute z-10 item-content">
      <div>
        <div class="item-title">
          {{ data.name }}
        </div>
        <div class="text-center item-desc">{{ data.desc }}</div>
      </div>
      <NuxtLink
        :to="`/business/engineering/${data.code}`"
        class="absolute item-button"
      >
        <span class="button-text">查看更多</span>
        <ClientOnly>
          <Icon name="solar:arrow-right-broken" size="24px" />
        </ClientOnly>
      </NuxtLink>
    </div>
    <AgImage
      class="object-cover bg-img to-left-top wh-full"
      :src="data.thumbnail"
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
  border-radius: 4px;

  .item-content {
    @apply w-full p-6 bottom-0;

    height: 100px;
    background: var(--color-black-bg-40);
    backdrop-filter: blur(10px);
    transition: all 0.6s ease;
  }

  .item-title {
    @apply mt-6 md:mt-4 text-base text-center md:text-lg;
  }

  .item-icon {
    @apply z-12 w-12 h-12  md:w-14 md:h-14 opacity-100;

    bottom: 0;
    left: calc(50% - 28px);
    color: var(--black);
    background-color: var(--white);
    border-radius: 50%;
    transform: translateY(-70px);
    transition: all 0.6s ease;
  }

  .item-button {
    @apply transition-base opacity-0 flex bottom-6  px-4 py-2 md:px-6 md:py-3 rounded-full;

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

  .bg-img {
    @apply transition-base;
  }

  &:hover {
    .item-content {
      @apply h-full;

      padding-top: 7.08vw;
    }

    .item-icon {
      // top: 3.8vw;

      transform: translateY(calc(var(--span) * -4vw));
      transition: all 0.6s ease;
    }

    .item-desc {
      @apply mt-1 md:mt-4 opacity-70;

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

    .bg-img {
      transform: scale(1.2);
    }
  }
}
</style>
