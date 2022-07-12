<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="guideIndex">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>사이트 이용가이드</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- tab-wrap -->
          <div class="guideTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab case3">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">강좌수강</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">결제/배송</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">모바일</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <GuideLecture /> <!-- 강좌수강 -->
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <GuidePayment /><!-- 결제/배송 -->
              </div>
              <div v-if="currentTab == 2" class="tabData">
                <GuideMobile /><!-- 모바일 -->
              </div>
            </div>
          </div>
          <!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import GuideLecture from '@/views/counsel/GuideLecture.vue';
import GuidePayment from '@/views/counsel/GuidePayment.vue';
import GuideMobile from '@/views/counsel/GuideMobile.vue';

export default {
  mixins: [Mixin],
  name: 'Guide',
  components: {
    GuideLecture,
    GuidePayment,
    GuideMobile
  },
  data() {
    return {
      currentTab: 0,
    }
  },
  mounted() {
  },
}
</script>
