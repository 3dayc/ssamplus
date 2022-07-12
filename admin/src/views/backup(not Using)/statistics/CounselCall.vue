<template lang="html">
  <div>
    <div class="pageTit">
      <h2>전화상담 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><em>전화상담 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselCall"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">전체</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">회원/로그인</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">사이트오류</button>
                  </li>
                  <li :class="{on:typeTab===3}">
                    <button @click="typeTab = 3">교재/학습자료</button>
                  </li>
                  <li :class="{on:typeTab===4}">
                    <button @click="typeTab = 4">강좌관련</button>
                  </li>
                  <li :class="{on:typeTab===5}">
                    <button @click="typeTab = 5">결제/환불</button>
                  </li>
                  <li :class="{on:typeTab===6}">
                    <button @click="typeTab = 6">학원(직강)</button>
                  </li>
                  <li :class="{on:typeTab===7}">
                    <button @click="typeTab = 7">기타/건의사항</button>
                  </li>
                </ul>
                <span class="btnArea"><button class="btnDownload">다운로드</button> <!--2021-06-30--></span>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 전체 -->
            <div v-if="typeTab == 0" class="tabData">
              <CounselCallTotal />
            </div>
            <!-- //전체 -->
            <!-- 회원/로그인 -->
            <div v-if="typeTab == 1" class="tabData">
              <CounselCallUser />
            </div>
            <!-- //회원/로그인 -->
            <!-- 사이트오류 -->
            <div v-if="typeTab == 2" class="tabData">
              <CounselCallSite />
            </div>
            <!-- //사이트오류 -->
            <!-- 교재/학습자료 -->
            <div v-if="typeTab == 3" class="tabData">
              <CounselCallBook />
            </div>
            <!-- //교재/학습자료 -->
            <!-- 강좌관련 -->
            <div v-if="typeTab == 4" class="tabData">
              <CounselCallLecture />
            </div>
            <!-- //강좌관련 -->
            <!-- 결제/환불 -->
            <div v-if="typeTab == 5" class="tabData">
              <CounselCallPay />
            </div>
            <!-- //결제/환불 -->
            <!-- 학원(직강) -->
            <div v-if="typeTab == 6" class="tabData">
              <CounselCallDirect />
            </div>
            <!-- //학원(직강) -->
            <!-- 기타/건의사항 -->
            <div v-if="typeTab == 7" class="tabData">
              <CounselCallEtc />
            </div>
            <!-- //기타/건의사항 -->
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
import CounselCallTotal from '@/views/statistics/CounselCallTotal.vue'
import CounselCallUser from '@/views/statistics/CounselCallUser.vue'
import CounselCallSite from '@/views/statistics/CounselCallSite.vue'
import CounselCallBook from '@/views/statistics/CounselCallBook.vue'
import CounselCallLecture from '@/views/statistics/CounselCallLecture.vue'
import CounselCallPay from '@/views/statistics/CounselCallPay.vue'
import CounselCallDirect from '@/views/statistics/CounselCallDirect.vue'
import CounselCallEtc from '@/views/statistics/CounselCallEtc.vue'

export default {
  mixins: [Mixin],
  name: 'CounselCall',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    CounselCallTotal,
    CounselCallUser,
    CounselCallSite,
    CounselCallBook,
    CounselCallLecture,
    CounselCallPay,
    CounselCallDirect,
    CounselCallEtc
  },
}
</script>
