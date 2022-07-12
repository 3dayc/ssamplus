<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="infoCompetition">
          <div class="subTit noLine">
            <h3>모집인원 및 경쟁률</h3>
          </div>

          <div class="conditionMainKind">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:kindTab===0}"><button @click="kindTab = 0">유/초등</button></li>
                    <li :class="{on:kindTab===1}"><button @click="kindTab = 1">중등</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <!-- 유/초등 -->
              <div v-if="kindTab == 0" class="tabData" :key="kindTab">
                <InfoCompetitionChild/>
              </div>
              <!-- //유/초등 -->
              <!-- 중등 -->
              <div v-if="kindTab == 1" class="tabData">
                <InfoCompetitionMedium/>
              </div>
              <!-- //중등 -->
            </div>
          </div>
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
import InfoCompetitionChild from '@/views/exam/InfoCompetitionChild.vue';
import InfoCompetitionMedium from '@/views/exam/InfoCompetitionMedium.vue';

export default {
  mixins: [Mixin],
  name: 'InfoCompetition',
  components: {
    InfoCompetitionChild,
    InfoCompetitionMedium,
  },
  data() {
    return {
      kindTab:0,
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
