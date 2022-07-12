<template lang="html">
  <div>
    <div class="pageTit">
      <h2>환불</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><router-link to="/mkup/statistics/counselOne">1:1 게시판상담 통계</router-link><em>환불</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselOneRefund"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">전체</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">강의수강불편</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">교재이용불편</button>
                  </li>
                  <li :class="{on:typeTab===3}">
                    <button @click="typeTab = 3">변경/결제</button>
                  </li>
                  <li :class="{on:typeTab===4}">
                    <button @click="typeTab = 4">사이트</button>
                  </li>
                  <li :class="{on:typeTab===5}">
                    <button @click="typeTab = 5">상담</button>
                  </li>
                  <li :class="{on:typeTab===6}">
                    <button @click="typeTab = 6">개인사정</button>
                  </li>
                  <li :class="{on:typeTab===7}">
                    <button @click="typeTab = 7">기타</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 전체 -->
            <div v-if="typeTab == 0" class="tabData">
              <CounselCallRefundTotal />
            </div>
            <!-- //전체 -->
            <!-- 강의수강불편 -->
            <div v-if="typeTab == 1" class="tabData">
              <CounselCallRefundLecture />
            </div>
            <!-- //강의수강불편 -->
            <!-- 교재이용불편 -->
            <div v-if="typeTab == 2" class="tabData">
              <CounselCallRefundGoods />
            </div>
            <!-- //교재이용불편 -->
            <!-- 변경/결제 -->
            <div v-if="typeTab == 3" class="tabData">
              <CounselCallRefundChange />
            </div>
            <!-- //변경/결제 -->
            <!-- 사이트 -->
            <div v-if="typeTab == 4" class="tabData">
              <CounselCallRefundSite />
            </div>
            <!-- //사이트 -->
            <!-- 상담 -->
            <div v-if="typeTab == 5" class="tabData">
              <CounselCallRefundAdvice />
            </div>
            <!-- //상담 -->
            <!-- 개인사정 -->
            <div v-if="typeTab == 6" class="tabData">
              <CounselCallRefundPersonal />
            </div>
            <!-- //개인사정 -->
            <!-- 기타 -->
            <div v-if="typeTab == 7" class="tabData">
              <CounselCallRefundEtc />
            </div>
            <!-- //기타 -->
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
import CounselCallRefundTotal from '@/views/statistics/CounselCallRefundTotal.vue'
import CounselCallRefundLecture from '@/views/statistics/CounselCallRefundLecture.vue'
import CounselCallRefundGoods from '@/views/statistics/CounselCallRefundGoods.vue'
import CounselCallRefundAdvice from '@/views/statistics/CounselCallRefundAdvice.vue'
import CounselCallRefundPersonal from '@/views/statistics/CounselCallRefundPersonal.vue'
import CounselCallRefundSite from '@/views/statistics/CounselCallRefundSite.vue'
import CounselCallRefundChange from '@/views/statistics/CounselCallRefundChange.vue'
import CounselCallRefundEtc from '@/views/statistics/CounselCallRefundEtc.vue'

export default {
  mixins: [Mixin],
  name: 'counselOneRefund',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    CounselCallRefundTotal,
    CounselCallRefundLecture,
    CounselCallRefundGoods,
    CounselCallRefundAdvice,
    CounselCallRefundPersonal,
    CounselCallRefundSite,
    CounselCallRefundChange,
    CounselCallRefundEtc,
  },
}
</script>
