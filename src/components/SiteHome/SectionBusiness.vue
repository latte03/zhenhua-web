<script lang="ts" setup>
defineOptions({ name: 'SectionBusiness' })
const data = ref([
  {
    name: '工程建设',
    desc: '关于工程建设等相关的描述词语，可以两到三行的样子就行。'
  },
  {
    name: '新能源建设',
    desc: '关于工程建设等相关的描述词语，可以两到三行的样子就行。'
  },
  {
    name: '智能装备制造',
    desc: '关于工程建设等相关的描述词语，可以两到三行的样子就行。'
  },
  {
    name: '设备生产',
    desc: '关于工程建设等相关的描述词语，可以两到三行的样子就行。'
  }
])
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
        v-for="(d, index) in data"
        :key="d.name"
        class="relative flex-col px-12 text-center flex-center business-item"
      >
        <div class="info">
          <div class="mb-6 text-4xl font-bold inf-name">{{ d.name }}</div>
          <div class="inf-desc text-base-sm opacity-80">{{ d.desc }}</div>
        </div>
        <div class="absolute index">0{{ index + 1 }}</div>
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
  height: 650px;
  &-title {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: 72px;
  }
  .business-item {
    background-color: #000;
    &:hover {
      .index {
        font-size: 56px;
      }
    }
  }
  .index {
    bottom: 48px;
    right: 48px;

    font-size: 36px;
    font-family: Montserrat-Bold, Montserrat;
    font-weight: 700;
    line-height: 44px;
    transition: all 0.3s ease;
  }
}
</style>
