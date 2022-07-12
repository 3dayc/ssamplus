<template lang="html">
  <div>
    <div class="pageTit">
      <h2>1:1 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><em>1:1 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselOne"><!-- class 없어도 유지 -->
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
              <CounselOneTotal />
            </div>
            <!-- //전체 -->
            <!-- 회원/로그인 -->
            <div v-if="typeTab == 1" class="tabData">
              <CounselOneUser />
            </div>
            <!-- //회원/로그인 -->
            <!-- 사이트오류 -->
            <div v-if="typeTab == 2" class="tabData">
              <CounselOneSite />
            </div>
            <!-- //사이트오류 -->
            <!-- 교재/학습자료 -->
            <div v-if="typeTab == 3" class="tabData">
              <CounselOneBook />
            </div>
            <!-- //교재/학습자료 -->
            <!-- 강좌관련 -->
            <div v-if="typeTab == 4" class="tabData">
              <CounselOneLecture />
            </div>
            <!-- //강좌관련 -->
            <!-- 결제/환불 -->
            <div v-if="typeTab == 5" class="tabData">
              <CounselOnePay />
            </div>
            <!-- //결제/환불 -->
            <!-- 학원(직강) -->
            <div v-if="typeTab == 6" class="tabData">
              <CounselOneDirect />
            </div>
            <!-- //학원(직강) -->
            <!-- 기타/건의사항 -->
            <div v-if="typeTab == 7" class="tabData">
              <CounselOneEtc />
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
import CounselOneTotal from '@/views/statistics/CounselOneTotal.vue'
import CounselOneUser from '@/views/statistics/CounselOneUser.vue'
import CounselOneSite from '@/views/statistics/CounselOneSite.vue'
import CounselOneBook from '@/views/statistics/CounselOneBook.vue'
import CounselOneLecture from '@/views/statistics/CounselOneLecture.vue'
import CounselOnePay from '@/views/statistics/CounselOnePay.vue'
import CounselOneDirect from '@/views/statistics/CounselOneDirect.vue'
import CounselOneEtc from '@/views/statistics/CounselOneEtc.vue'

export default {
  mixins: [Mixin],
  name: 'CounselOne',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    CounselOneTotal,
    CounselOneUser,
    CounselOneSite,
    CounselOneBook,
    CounselOneLecture,
    CounselOnePay,
    CounselOneDirect,
    CounselOneEtc
  },
}
</script>
