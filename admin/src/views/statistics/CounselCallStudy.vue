<template lang="html">
  <div>
    <div class="pageTit">
      <h2>임용학습 상담</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><router-link to="/mkup/statistics/counselCall">전화상담 통계</router-link><em>임용학습 상담</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselCallStudy"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">전체</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">초시생</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">N수생</button>
                  </li>
                  <li :class="{on:typeTab===3}">
                    <button @click="typeTab = 3">재학생</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 전체 -->
            <div v-if="typeTab == 0" class="tabData">
              <CounselCallStudyTotal />
            </div>
            <!-- //전체 -->
            <!-- 초시생 -->
            <div v-if="typeTab == 1" class="tabData">
              <CounselCallStudyBegin />
            </div>
            <!-- //초시생 -->
            <!-- N수생 -->
            <div v-if="typeTab == 2" class="tabData">
              <CounselCallStudyN />
            </div>
            <!-- //N수생 -->
            <!-- 재학생 -->
            <div v-if="typeTab == 3" class="tabData">
              <CounselCallStudyRe />
            </div>
            <!-- //재학생 -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import CounselCallStudyTotal from '@/views/statistics/CounselCallStudyTotal.vue'
import CounselCallStudyBegin from '@/views/statistics/CounselCallStudyBegin.vue'
import CounselCallStudyN from '@/views/statistics/CounselCallStudyN.vue'
import CounselCallStudyRe from '@/views/statistics/CounselCallStudyRe.vue'

export default {
  mixins: [Mixin],
  name: 'counselCallStudy',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    CounselCallStudyTotal,
    CounselCallStudyBegin,
    CounselCallStudyN,
    CounselCallStudyRe,
  },
}
</script>
