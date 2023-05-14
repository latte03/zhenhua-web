<script lang="ts" setup>
defineOptions({ name: 'SectionAbout' })
</script>

<template>
  <SiteSection class="about">
    <SiteSectionTitle title="集团介绍" en-title="ABOUT" />
    <div class="flex justify-between mt-6">
      <div class="max-w-2xl mr-6 opacity-50">
        镇华电力建设集团有限公司成立于2010年，公司注册资金贰亿壹仟捌佰万元，现有员工三百八十余人（含各子公司）。天下大事做于细，天下难事做于易，自公司成立至今培养出了一支高素质、高效率的专业技术施工团队。承载使命，和歌而行，经历数载风雨洗礼，公司现已发展成为由多个子公司组建而成的集团公司，所涉行业有:建设类--电力、机电、水利水电、建筑、钢结构、消防、装饰装修、市政工程等，设备生产制造类--高低压电气设备研发与生产、智能装备生产与研发。
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
