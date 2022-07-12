<template lang="html">
  <div>
    <div class="pageTit">
      <h2>수강 및 이용</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><router-link to="/mkup/statistics/counselCall">전화상담 통계</router-link><em>수강 및 이용</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselCallUse"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">전체</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">회원정보</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">사이트 문의</button>
                  </li>
                  <li :class="{on:typeTab===3}">
                    <button @click="typeTab = 3">온라인 강의</button>
                  </li>
                  <li :class="{on:typeTab===4}">
                    <button @click="typeTab = 4">학원 강의(직강)</button>
                  </li>
                  <li :class="{on:typeTab===5}">
                    <button @click="typeTab = 5">교재/학습자료</button>
                  </li>
                  <li :class="{on:typeTab===6}">
                    <button @click="typeTab = 6">결제</button>
                  </li>
                  <li :class="{on:typeTab===7}">
                    <button @click="typeTab = 7">기타/건의사항</button>
                  </li>
                  <li :class="{on:typeTab===8}">
                    <button @click="typeTab = 8">모의고사</button>
                  </li>
                  <li :class="{on:typeTab===9}">
                    <button @click="typeTab = 9">설명회</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 전체 -->
            <div v-if="typeTab == 0" class="tabData">
              <CounselCallUseTotal />
            </div>
            <!-- //전체 -->
            <!-- 회원정보 -->
            <div v-if="typeTab == 1" class="tabData">
              <CounselCallUseUser />
            </div>
            <!-- //회원정보 -->
            <!-- 사이트 문의 -->
            <div v-if="typeTab == 2" class="tabData">
              <CounselCallUseSite />
            </div>
            <!-- //사이트 문의 -->
            <!-- 온라인 강의 -->
            <div v-if="typeTab == 3" class="tabData">
              <CounselCallUseVideo />
            </div>
            <!-- //온라인 강의 -->
            <!-- 학원 강의(직강) -->
            <div v-if="typeTab == 4" class="tabData">
              <CounselCallUseDirect />
            </div>
            <!-- //학원 강의(직강) -->
            <!-- 교재/학습자료 -->
            <div v-if="typeTab == 5" class="tabData">
              <CounselCallUseBook />
            </div>
            <!-- //교재/학습자료 -->
            <!-- 결제 -->
            <div v-if="typeTab == 6" class="tabData">
              <CounselCallUsePay />
            </div>
            <!-- //결제 -->
            <!-- 기타/건의사항 -->
            <div v-if="typeTab == 7" class="tabData">
              <CounselCallUseEtc />
            </div>
            <!-- //기타/건의사항 -->
            <!-- 모의고사 -->
            <div v-if="typeTab == 8" class="tabData">
              <CounselCallUseTest />
            </div>
            <!-- //모의고사 -->
            <!-- 설명회 -->
            <div v-if="typeTab == 9" class="tabData">
              <CounselCallUsePresentation />
            </div>
            <!-- //설명회 -->
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
import CounselCallUseTotal from '@/views/statistics/CounselCallUseTotal.vue'
import CounselCallUseUser from '@/views/statistics/CounselCallUseUser.vue'
import CounselCallUseSite from '@/views/statistics/CounselCallUseSite.vue'
import CounselCallUseBook from '@/views/statistics/CounselCallUseBook.vue'
import CounselCallLecture from '@/views/statistics/CounselCallLecture.vue'
import CounselCallUsePay from '@/views/statistics/CounselCallUsePay.vue'
import CounselCallUseDirect from '@/views/statistics/CounselCallUseDirect.vue'
import CounselCallUseVideo from '@/views/statistics/CounselCallUseVideo.vue'
import CounselCallUseEtc from '@/views/statistics/CounselCallUseEtc.vue'
import CounselCallUseTest from '@/views/statistics/CounselCallUseTest.vue'
import CounselCallUsePresentation from '@/views/statistics/CounselCallUsePresentation.vue'

export default {
  mixins: [Mixin],
  name: 'CounselCallUse',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    CounselCallUseTotal,
    CounselCallUseUser,
    CounselCallUseSite,
    CounselCallUseBook,
    CounselCallLecture,
    CounselCallUsePay,
    CounselCallUseDirect,
    CounselCallUseVideo,
    CounselCallUseEtc,
    CounselCallUseTest,
    CounselCallUsePresentation,
  },
}
</script>
