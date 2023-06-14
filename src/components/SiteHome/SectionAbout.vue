<script lang="ts" setup>
import { useGroupState } from '~/store/groupState'

defineOptions({ name: 'SectionAbout' })

const groupState = useGroupState()
groupState.getGroupInfo()

const [showModal, toggleShow] = useToggle()
const canPlay = ref(false)
function doVideoPlay() {
  toggleShow(true)
}

function onCanPlay() {
  canPlay.value = true
}
</script>

<template>
  <SiteSection class="about">
    <SiteSectionTitle title="集团介绍" en-title="ABOUT" />
    <div class="about-container">
      <div class="max-w-2xl opacity-50 md:mr-6">
        {{ groupState.groupInfo?.groupMemo }}
      </div>
      <div class="relative">
        <div class="relative zh video-wrap">
          <!-- <span class="font-mon">ZHENHUA</span> -->
          <video
            class="absolute video-body"
            :src="transformURL(groupState.groupInfo.groupVideo || '')"
            controls
          ></video>
        </div>
        <!-- SVG Reference -->

        <svg height="0px" width="0px">
          <defs>
            <clipPath id="svgPath">
              <path
                d="M33.5154,120.329L68.4525,33.2509L68.4525,0L1.10178,0L1.10178,41.9737L34.9371,41.9737L0,129.052L0,162.229L70.194,162.229L70.194,120.329L33.5154,120.329ZM127.344,0L127.344,57.2571L103.567,57.2571L103.567,0L77.7999,0L77.7999,162.229L103.567,162.229L103.567,101.766L127.344,101.766L127.344,162.229L153.112,162.229L153.112,0L127.344,0ZM191.816,121.522L191.816,100.2L224.159,100.2L224.159,61.283L191.816,61.283L191.816,40.7808L228.637,40.7808L228.637,0L166.511,0L166.511,162.229L230.059,162.229L230.059,121.522L191.816,121.522ZM289.519,0L289.519,73.7335L260.482,0L239.299,0L239.299,162.229L264.392,162.229L264.392,88.5696L293.429,162.229L314.611,162.229L314.611,0L289.519,0ZM377.555,0L377.555,57.2571L353.778,57.2571L353.778,0L328.011,0L328.011,162.229L353.778,162.229L353.778,101.766L377.555,101.766L377.555,162.229L403.323,162.229L403.323,0L377.555,0ZM453.294,167C476.751,167,490.505,139.341,490.505,90.4335L490.505,0L465.2,0L465.2,88.7933C465.2,113.918,460.722,123.312,453.507,123.312C446.292,123.312,441.814,113.918,441.814,88.7933L441.814,0L416.046,0L416.046,90.4335C416.046,139.341,429.801,167,453.294,167ZM560.344,162.229L587,162.229L553.591,0L528.25,0L494.841,162.229L521.035,162.229L526.189,133.6L555.226,133.6L560.344,162.229ZM533.297,94.683L540.69,53.8277L548.118,94.683L533.297,94.683Z"
                fill="#FFFFFF"
                fill-opacity="1"
              />
            </clipPath>
          </defs>
        </svg>
        <svg height="0px" width="0px">
          <defs>
            <clipPath id="svgMobilePath">
              <path
                d="M36.5397,64.9285L74.6292,17.9418L74.6292,0L1.2012,0L1.2012,22.6485L38.0896,22.6485L0,69.6352L0,87.5368L76.5279,87.5368L76.5279,64.9285L36.5397,64.9285ZM138.835,0L138.835,30.8953L112.913,30.8953L112.913,0L84.8201,0L84.8201,87.5368L112.913,87.5368L112.913,54.9116L138.835,54.9116L138.835,87.5368L166.928,87.5368L166.928,0L138.835,0ZM209.125,65.5721L209.125,54.0668L244.386,54.0668L244.386,33.0676L209.125,33.0676L209.125,22.0049L249.268,22.0049L249.268,0L181.536,0L181.536,87.5368L250.818,87.5368L250.818,65.5721L209.125,65.5721ZM315.644,0L315.644,39.7858L283.986,0L260.892,0L260.892,87.5368L288.249,87.5368L288.249,47.7912L319.906,87.5368L343,87.5368L343,0L315.644,0ZM126.506,93.8887L126.506,142.686C126.506,169.075,141.501,184,167.114,184C192.688,184,207.684,169.075,207.684,142.686L207.684,93.8887L180.095,93.8887L180.095,141.801C180.095,155.357,175.213,160.426,167.347,160.426C159.481,160.426,154.598,155.357,154.598,141.801L154.598,93.8887L126.506,93.8887ZM30.5264,93.8887L30.5264,181.425L58.6188,181.425L58.6188,148.8L84.5415,148.8L84.5415,181.425L112.634,181.425L112.634,93.8887L84.5415,93.8887L84.5415,124.784L58.6188,124.784L58.6188,93.8887L30.5264,93.8887ZM212.411,181.425L240.968,181.425L246.587,165.978L278.244,165.978L283.824,181.425L312.885,181.425L276.462,93.8887L248.834,93.8887L212.411,181.425Z"
                fill="#FFFFFF"
                fill-opacity="1"
              />
            </clipPath>
          </defs>
        </svg>

        <!-- SVG Reference -->
        <Icon name="Play" class="absolute icon-play" @click="doVideoPlay" />
      </div>
    </div>
    <n-config-provider
      abstract
      :theme-overrides="{
        Card: {
          paddingHuge: '1px'
        }
      }"
    >
      <n-modal v-model:show="showModal" display-directive="show">
        <n-card
          style="width: 60vw; min-height: calc(60vw * 0.56); padding: 1px"
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
        >
          <video
            v-show="canPlay"
            class="video-body"
            :src="groupState.groupInfo.groupVideo"
            controls
            @canplay="onCanPlay"
          ></video>
        </n-card>
      </n-modal>
    </n-config-provider>
  </SiteSection>
</template>

<style lang="scss" scoped>
.zh {
  color: transparent;
  font-weight: 900;
  font-size: 120px;
  clip-path: url('#svgPath');
  @media screen and (width <= 767px) {
    clip-path: url('#svgMobilePath');
  }
}

.icon-play {
  top: 50%;
  left: 50%;
  font-size: 48px;
  border: 1px solid #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.about-container {
  @apply flex justify-between mt-6;
  @media screen and (width <= 767px) {
    flex-wrap: wrap;
  }
}

.video-body {
  transform: translateY(-25%);

  video {
    @apply wh-full;
  }
}

.video-wrap {
  width: 160px * 3.7;
  height: 90px * 1.85;
  @media screen and (width <= 767px) {
    @apply mt-6;

    width: calc(100vw - 50px);
    height: calc((100vw - 50px) * 0.56);

    .video-body {
      transform: translateY(0%);
    }
  }
}
</style>
