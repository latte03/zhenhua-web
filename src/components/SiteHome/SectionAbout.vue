<script lang="ts" setup>
import { useGroupState } from '~/store/groupState'

defineOptions({ name: 'SectionAbout' })

const groupState = useGroupState()
groupState.getGroupInfo()

// if (!groupState.groupInfo?.groupMemo) {
// }
</script>

<template>
  <SiteSection class="about">
    <SiteSectionTitle title="集团介绍" en-title="ABOUT" />
    <div class="flex justify-between mt-6">
      <div class="max-w-2xl mr-6 opacity-50">
        {{ groupState.groupInfo?.groupMemo }}
      </div>
      <div class="relative zh">
        ZHENHUA
        <Icon name="Play" class="absolute icon-play" />
      </div>
    </div>
  </SiteSection>
</template>

<style lang="scss" scoped>
.zh {
  color: transparent;
  font-weight: 900;
  font-size: 120px;
  background-image: url('http://lc-yee5xnhu.cn-n1.lcfile.com/78cb08ed395dec020a3d.jpg');
  background-size: cover;
  background-clip: text;
}

.icon-play {
  top: 50%;
  left: 50%;
  font-size: 48px;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
