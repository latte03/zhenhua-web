<script lang="ts" setup>
defineOptions({
  name: 'Business'
})

definePageMeta({
  layout: 'inner-page'
})

useInnerPageContent({
  name: '业务板块',
  slogan: '123213'
})
const data = ref([
  {
    icon: '11',
    id: '1',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '2',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '3',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '4',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '5',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '6',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  },
  {
    icon: '11',
    id: '7',
    name: '电力工程',
    desc: '业务介绍文字，千古江山，英雄无觅孙仲谋处。舞榭歌台，风流总被雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。'
  }
])
</script>

<template>
  <div class="business-page">
    <n-grid x-gap="32" y-gap="48" :layout-shift-disabled="true" :cols="4">
      <n-gi v-for="d in data" :key="d.id">
        <BusinessCard :data="d" />
      </n-gi>
    </n-grid>
  </div>
</template>

<style lang="scss" scoped>
/** */
</style>
