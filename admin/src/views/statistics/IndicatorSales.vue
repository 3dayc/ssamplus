<template lang="html">
  <div>
    <div class="pageTit">
      <h2>매출현황</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link><em>매출현황</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="indicatorSales"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:signupTab===0}">
                    <button @click="signupTab = 0">상품별 조회</button>
                  </li>
                  <li :class="{on:signupTab===1}">
                    <button @click="signupTab = 1">강사별 조회</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 상품별 조회 -->
            <div v-if="signupTab == 0" class="tabData">
              <IndicatorSalesGoods />
            </div>
            <!-- //상품별 조회 -->
            <!-- 강사별 조회 -->
            <div v-if="signupTab == 1" class="tabData">
              <IndicatorSalesTeacher />
            </div>
            <!-- //강사별 조회 -->
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
import IndicatorSalesGoods from '@/views/statistics/IndicatorSalesGoods.vue';
import IndicatorSalesTeacher from '@/views/statistics/IndicatorSalesTeacher.vue';

export default {
  mixins: [Mixin],
  name: 'IndicatorSales',
  data() {
    return {
      signupTab: 0,
    }
  },
  methods: {
  },
  components: {
    IndicatorSalesGoods,
    IndicatorSalesTeacher,
  },
}
</script>
