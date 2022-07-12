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
        <div class="directLocation">
          <!-- 서브 타이틀 -->
          <div class="subTit noLine">
            <h3>학원위치 안내</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- tab-wrap -->
          <div class="directTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">서울 이데아관</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">서울 아이비관</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <DirectLocationIdea /> <!-- 서울 이데아관 -->
              </div>
              <div v-if="currentTab == 1" class="tabData">
                <DirectLocationIvy /><!-- 서울 아이비관 -->
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
import DirectLocationIdea from '@/views/counsel/DirectLocationIdea.vue';
import DirectLocationIvy from '@/views/counsel/DirectLocationIvy.vue';

export default {
  mixins: [Mixin],
  name: 'DirectLocation',
  components: {
    DirectLocationIdea,
    DirectLocationIvy,
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
