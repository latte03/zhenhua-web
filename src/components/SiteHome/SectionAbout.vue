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
    <div class="flex justify-between mt-6">
      <div class="max-w-2xl mr-6 opacity-50">
        {{ groupState.groupInfo?.groupMemo }}
      </div>
      <div class="relative">
        <div class="relative zh video-wrap">
          <!-- <span class="font-mon">ZHENHUA</span> -->
          <video
            class="absolute video-body"
            :src="groupState.groupInfo.groupVideo"
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

.video-wrap {
  width: 160px * 3.7;
  height: 90px * 1.85;

  .video-body {
    transform: translateY(-25%);
  }
}

.video-body {
}
</style>
