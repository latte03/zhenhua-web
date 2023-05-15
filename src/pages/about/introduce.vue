<script lang="ts" setup>
import numeral from 'numeral'

defineOptions({ name: 'AboutIntroducePage' })
definePageMeta({
  layout: 'inner-page',
  data: { name: '联系我们', slogan: '123213' }
})

const swiper = ref([
  {
    id: 1,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd',
    desc: 'ddddddd'
  },
  {
    id: 2,
    img: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
    title: 'dddd22',
    desc: 'dddddd11d'
  }
])

const infoOptions = ref([
  {
    value: '2010',
    label: '成立时间'
  },
  {
    value: numeral(21800).format('0,000'),
    unit: '万元',
    label: '注册资金'
  },
  {
    value: '15',
    label: '国家级资质'
  },
  {
    value: '380',
    unit: '+',
    label: '现有员工'
  }
])

const subsidiary = ref([
  {
    name: '1'
  },
  {
    name: '13'
  },
  {
    name: '14'
  },
  {
    name: '15'
  },
  {
    name: '11'
  }
])
</script>

<template>
  <div class="about-introduce">
    <div class="swiper">
      <SiteCarousel
        v-slot="{ record }"
        size="small"
        class="overflow-hidden about-carousel"
        :data-source="swiper"
      >
        <div class="wh-full">
          <img class="ratio-img carousel-img" :src="record.img" />
        </div>
      </SiteCarousel>
    </div>
    <div class="mt-6">
      <div class="flex w-full">
        <div
          v-for="info in infoOptions"
          :key="info.label"
          class="info-item flex flex-grow items-center justify-between"
        >
          <div>
            <div class="info-value flex">
              <div class="info-value--value">{{ info.value }}</div>
              <div v-if="info.unit" class="info-value--unit">
                {{ info.unit }}
              </div>
            </div>
            <div class="info-label opacity-50">{{ info.label }}</div>
          </div>
          <Icon name="solar:home-2-linear" size="40px" />
        </div>
      </div>
    </div>
    <div class="opacity-75">
      镇华电力建设集团有限公司成立于2010年，公司注册资金贰亿壹仟捌佰万元，现有员工三百八十余人（含各子公司）。天下大事做于细，天下难事做于易，自公司成立至今培养出了一支高素质、高效率的专业技术施工团队。承载使命，和歌而行，经历数载风雨洗礼，公司现已发展成为由多个子公司组建而成的集团公司，所涉行业有:建设类--电力、机电、水利水电、建筑、钢结构、消防、装饰装修、市政工程等；设备生产制造类--高低压电气设备研发与生产、智能装备生产与研发；售电及用电服务类--致力于为电力用户提供高效、优质、领先的用电方案和服务。公司先后取得消防设施工程专业承包壹级、建筑装修装饰工程专业承包壹级、机电工程施工总承包贰级、钢结构工程专业承包贰级、建筑机电安装工程专业承包壹级、输变电工程专业承包贰级、建筑工程施工总承包贰级、水利水电工程施工总承包叁级、电力工程施工总承包贰级、市政公用工程施工总承包贰级、环保工程专业承包贰级、电子与智能化工程专业承包贰级、特种工程（特殊设备起重吊装）专业承包不分等级、劳务施工资质；国家能源局颁发的承装(修、试)电力设施许可证贰级资质。公司设有商务部、财务部、人资部、工程部、成控部、采购部、研发部等部门，拥有各类大中型工程机械设备、测量及检测仪器百余套，拥有各类管理人员，其中：工程师67人、建造师41人、各类专业技术人员280余人，具有丰富的电力、机电、水利水电、建筑、钢结构、消防、装饰装修、市政工程等建设、设备检修经验，同时拥有一批高低压电气设备、智能装备、研发与生产的优秀团队。公司始终坚持“安全第一，预防为主”的方针，规范系统完善的检查流程和严格的管理制度，从公司成立以来从未发生过安全生产事故。公司秉承“以质量求生存”的宗旨，建立了健全的质量管理体系，严把工程施工、安装、调试质量关，已经发展成为一个集高压线路输电工程、变电站施工及试验、高低压设备检修及维护、小区配电工程、光伏发电厂建设、风力发电厂建设为一体的业内优质电力施工企业。近年来连续完成了二十余项35KV至220KV的高压输电线路及变电站新建工程；多座光伏发电站及风力发电站，为绿色能源建设添砖加瓦；同时入围并中标了国家电网公司、中国电建集团等多项电力工程。公司以人才建设为发展根本，以过硬的专业素养赢得了客户的赞誉与认可；求真务实的综合素养为公司未来健康发展的道路提供了强而有力的人才团队以及市场认可的双重保障。
    </div>
    <div class="mt-6">
      <div class="text-center">
        <div class="opacity-50">镇华电力建设集团</div>
        <div class="font-bold text-lg">子公司</div>
      </div>
      <ul class="subsidiary flex-center flex-wrap gap-6">
        <li v-for="sub in subsidiary" :key="sub.name">
          <SiteIntroduceSubsidiary class="logo" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-introduce {
  font-size: 15px;
  line-height: 1.7;

  .swiper {
    @apply -mt-14 -mx-10 ratio-16/9;

    height: 0;
    padding-bottom: 50%;
  }

  .about-carousel {
    @apply ratio-img;
  }

  .info-item {
    @apply relative;

    padding: 24px 32px;

    &:not(:last-child) {
      &::after {
        @apply block h-8;

        width: 1px;
        background-color: var(--color-border);
        content: '';
      }
    }
  }

  .info-value {
    align-items: start;

    &--unit {
      margin-top: 12px;
      margin-left: 8px;
      opacity: 0.6;
    }
  }

  .info-value--value {
    font-weight: bold;
    font-size: 40px;
  }

  .subsidiary {
    @apply m-auto mt-4;

    max-width: 900px;
  }
}
</style>
