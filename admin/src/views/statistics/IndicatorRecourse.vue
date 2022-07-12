<template lang="html">
  <div>
    <div class="pageTit">
      <h2>재수강</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>재수강</em></span>
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
                  <li :class="{on:iRecourseTab===0}">
                    <button @click="iRecourseTab = 0">인원 분석</button>
                  </li>
                  <li :class="{on:iRecourseTab===1}">
                    <button @click="iRecourseTab = 1">제작년월 분석</button>
                  </li>
                  <li :class="{on:iRecourseTab===2}">
                    <button @click="iRecourseTab = 2">과목별 분석</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 인원 분석 -->
            <div v-if="iRecourseTab == 0" class="tabData">
              <IndicatorRecourseNumber />
            </div>
            <!-- //인원 분석 -->
            <!-- 제작년월 분석 -->
            <div v-if="iRecourseTab == 1" class="tabData">
              <IndicatorRecourseProduct />
            </div>
            <!-- //제작년월 분석 -->
            <!-- 과목별 분석 -->
            <div v-if="iRecourseTab == 2" class="tabData">
              <IndicatorRecourseSubject />
            </div>
            <!-- //과목별 분석 -->
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
import IndicatorRecourseNumber from '@/views/statistics/IndicatorRecourseNumber.vue'
import IndicatorRecourseProduct from '@/views/statistics/IndicatorRecourseProduct.vue'
import IndicatorRecourseSubject from '@/views/statistics/IndicatorRecourseSubject.vue'

export default {
  mixins: [Mixin],
  name: 'IndicatorRecourse',
  data() {
    return {
      iRecourseTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorRecourseNumber,
    IndicatorRecourseProduct,
    IndicatorRecourseSubject,
  },
}
</script>
