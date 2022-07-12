<template lang="html">
  <div>
    <div class="pageTit">
      <h2>결제현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>결제현황</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorPayment"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:iPayTab===0}">
                    <button @click="iPayTab = 0">날짜별 조회</button>
                  </li>
                  <li :class="{on:iPayTab===1}">
                    <button @click="iPayTab = 1">상품별 조회</button>
                  </li>
                  <li :class="{on:iPayTab===2}">
                    <button @click="iPayTab = 2">강사별 - 강좌</button>
                  </li>
                  <li :class="{on:iPayTab===3}">
                    <button @click="iPayTab = 3">강사별 - 교재</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 날짜별 조회 -->
            <div v-if="iPayTab == 0" class="tabData">
              <IndicatorPaymentDay />
            </div>
            <!-- //날짜별 조회 -->
            <!-- 상품별 조회 -->
            <div v-if="iPayTab == 1" class="tabData">
              <IndicatorPaymentGoods />
            </div>
            <!-- //상품별 조회 -->
            <!-- 강사별 - 강좌 -->
            <div v-if="iPayTab == 2" class="tabData">
              <IndicatorPaymentTeacherCourse />
            </div>
            <!-- //강사별 - 강좌 -->
            <!-- 강사별 - 교재 -->
            <div v-if="iPayTab == 3" class="tabData">
              <IndicatorPaymentTeacherBook />
            </div>
            <!-- //강사별 - 교재 -->
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
import IndicatorPaymentDay from '@/views/statistics/IndicatorPaymentDay.vue'
import IndicatorPaymentGoods from '@/views/statistics/IndicatorPaymentGoods.vue'
import IndicatorPaymentTeacherCourse from '@/views/statistics/IndicatorPaymentTeacherCourse.vue'
import IndicatorPaymentTeacherBook from '@/views/statistics/IndicatorPaymentTeacherBook.vue'

export default {
  mixins: [Mixin],
  name: 'IndicatorPayment',
  data() {
    return {
      iPayTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorPaymentDay,
    IndicatorPaymentGoods,
    IndicatorPaymentTeacherCourse,
    IndicatorPaymentTeacherBook,
  },
}
</script>
