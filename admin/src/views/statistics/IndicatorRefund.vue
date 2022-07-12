<template lang="html">
  <div>
    <div class="pageTit">
      <h2>환불현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>환불현황</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="IndicatorRefund"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:iRefundTab===0}">
                    <button @click="iRefundTab = 0">월별 환불율</button>
                  </li>
                  <li :class="{on:iRefundTab===1}">
                    <button @click="iRefundTab = 1">환불사유별</button>
                  </li>
                  <li :class="{on:iRefundTab===2}">
                    <button @click="iRefundTab = 2">강사별</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 월별 환불율 -->
            <div v-if="iRefundTab == 0" class="tabData">
              <IndicatorRefundMonth />
            </div>
            <!-- //월별 환불율 -->
            <!-- 환불사유별 -->
            <div v-if="iRefundTab == 1" class="tabData">
              <IndicatorRefundReason />
            </div>
            <!-- //환불사유별 -->
            <!-- 강사별 -->
            <div v-if="iRefundTab == 2" class="tabData">
              <IndicatorRefundTeacher />
            </div>
            <!-- //강사별 -->
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
import IndicatorRefundMonth from '@/views/statistics/IndicatorRefundMonth.vue'
import IndicatorRefundReason from '@/views/statistics/IndicatorRefundReason.vue'
import IndicatorRefundTeacher from '@/views/statistics/IndicatorRefundTeacher.vue'

export default {
  mixins: [Mixin],
  name: 'IndicatorPayment',
  data() {
    return {
      iRefundTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorRefundMonth,
    IndicatorRefundReason,
    IndicatorRefundTeacher,
  },
}
</script>
