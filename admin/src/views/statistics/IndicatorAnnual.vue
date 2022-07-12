<template lang="html">
  <div>
    <div class="pageTit">
      <h2>연도별 현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>연도별 현황</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorAnnual"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:iannualTab===0}">
                    <button @click="iannualTab = 0">결제인원</button>
                  </li>
                  <li :class="{on:iannualTab===1}">
                    <button @click="iannualTab = 1">결제건수</button>
                  </li>
                  <li :class="{on:iannualTab===2}">
                    <button @click="iannualTab = 2">수강중인 인원</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 결제인원 -->
            <div v-if="iannualTab == 0" class="tabData">
              <IndicatorAnnualPayMember />
            </div>
            <!-- //결제인원 -->
            <!-- 결제건수 -->
            <div v-if="iannualTab == 1" class="tabData">
              <IndicatorAnnualPayNumber />
            </div>
            <!-- //결제건수 -->
            <!-- 수강중인 인원 -->
            <div v-if="iannualTab == 2" class="tabData">
              <IndicatorAnnualCourse />
            </div>
            <!-- //수강중인 인원 -->
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
import IndicatorAnnualPayMember from '@/views/statistics/IndicatorAnnualPayMember.vue'
import IndicatorAnnualPayNumber from '@/views/statistics/IndicatorAnnualPayNumber.vue'
import IndicatorAnnualCourse from '@/views/statistics/IndicatorAnnualCourse.vue'

export default {
  mixins: [Mixin],
  name: 'IndicatorAnnual',
  data() {
    return {
      iannualTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorAnnualPayMember,
    IndicatorAnnualPayNumber,
    IndicatorAnnualCourse,
  },
}
</script>
