<script lang="ts" setup>
interface PropsType {
  type?: 'prev' | 'next'
  data?: {
    name: string
    link: string
  }
}
const props = defineProps<PropsType>()
defineOptions({ name: 'SiteContainerTabBtn' })
</script>

<template>
  <div class="site-container-tab-btn">
    <div class="tab-btn p-6" :class="`post-${type}`">
      <NSpace class="tab-space" align="center">
        <div class="arrow">
          <Icon
            :name="
              type === 'prev'
                ? 'solar:alt-arrow-left-linear'
                : 'solar:alt-arrow-right-linear'
            "
            class="before transition-base"
            size="16px"
          />
          <Icon
            :name="
              type === 'prev'
                ? 'solar:alt-arrow-left-linear'
                : 'solar:alt-arrow-right-linear'
            "
            class="after transition-base"
            size="16px"
          />
        </div>
        <NDivider vertical />
        <div>ddddddddd</div>
      </NSpace>
    </div>
  </div>
</template>

<style lang="scss">
.site-container-tab-btn {
  .tab-btn {
    @apply transition-base cursor-pointer;

    --translate-x: calc(-100% + -24px);

    background-color: var(--color-fill-light);

    .arrow {
      @apply relative overflow-hidden whitespace-nowrap w-8 h-4;

      .before,
      .after {
        @apply absolute;
      }

      .before {
        @apply left-2;
      }

      .after {
        @apply left-12;
      }
    }

    &.post-next {
      --translate-x: calc(100% + 24px);

      .after {
        @apply right-2;

        left: auto;
      }

      .before {
        @apply right-12;

        left: auto;
      }

      .tab-space {
        flex-flow: row-reverse wrap !important;
      }
    }

    &:hover {
      color: var(--white);
      background-color: var(--primary-color);

      .before,
      .after {
        transform: translateX(var(--translate-x));
      }
    }
  }
}
</style>
