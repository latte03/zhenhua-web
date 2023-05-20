<script lang="ts" setup>
// interface PropsType {}
// const props = defineProps<PropsType>()
defineOptions({ name: 'SiteLayoutNewEnergy' })
</script>

<template>
  <div class="new-energy">
    <div class="relative z-10 content wh-full">
      <slot></slot>
    </div>
    <div class="absolute bg-effect">
      <ToolBgEffect />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-energy {
  --map-height: 900px;
  --map-width: 100%;
  @apply relative;

  height: 900px;
  margin: calc(0px - var(--padding-x)) calc(0px - var(--padding-y));

  //   background: radial-gradient(circle at 1px 1px, #000 2px, transparent 0);
  background: radial-gradient(63% 69% at 50% 52%, #fff 0%, #eff3ff 100%);

  &::after {
    @apply absolute block to-left-top wh-full z-20;

    z-index: 1;
    display: block;
    background: radial-gradient(
      circle at 20px 20px,
      rgba(54, 55, 73, 20%) 1.2px,
      transparent 0
    );
    background-size: 32px 32px;
    mix-blend-mode: darken;
    content: '';
    pointer-events: none;
  }

  .bg-effect {
    @apply absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
