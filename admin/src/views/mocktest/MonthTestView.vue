<template lang="html">
  <div>
    <div class="pageTit">
      <h2>월별 모의고사 관리</h2>
      <span><router-link to="/mkup/mocktest/monthTest">모의고사 관리</router-link><router-link to="/mkup/mocktest/monthTest">월별 모의고사 관리</router-link><em>상세</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="monthTestView"><!-- class 없어도 유지 -->
        <!-- tab-wrap -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:mockTab===0}"><button @click="mockTab = 0">기본정보</button></li>
                  <li :class="{on:mockTab===1}"><button @click="mockTab = 1">참여시험</button></li>
                  <li :class="{on:mockTab===2}"><button @click="mockTab = 2">모집인원</button></li>
                  <li :class="{on:mockTab===3}"><button @click="mockTab = 3">안내방송</button></li>
                  <li :class="{on:mockTab===4}"><button @click="mockTab = 4">전광판</button></li>
                  <li :class="{on:mockTab===5}"><button @click="mockTab = 5">접수내역</button></li>
                  <li :class="{on:mockTab===6}"><button @click="mockTab = 6">응시내역</button></li>
                  <li :class="{on:mockTab===7}"><button @click="mockTab = 7">공지사항</button></li>
                  <li :class="{on:mockTab===8}"><button @click="mockTab = 8">난이도 설문결과</button></li>
                </ul>
              </nav>
            </div>
            <span class="btnArea">
              <router-link to="/mkup/mocktest/monthTest" class="btnList">목록으로</router-link>
              <button class="btnM" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">저장</button>
              <router-link to="/mkup/mocktest/monthTest" class="btnM line ml10">삭제</router-link>
            </span>
          </div>
          <div class="tabLayout">
            <div v-if="mockTab == 0" class="tabData">
              <!-- 기본정보 컨텐츠 -->
              <MonthTestViewInfo/>
            </div>
            <div v-if="mockTab == 1" class="tabData">
              <!-- 참여시험 컨텐츠 -->
              <MonthTestViewParpat/>
            </div>
            <div v-if="mockTab == 2" class="tabData">
              <!-- 모집인원 컨텐츠 -->
              <MonthTestViewRecruit/>
            </div>
            <div v-if="mockTab == 3" class="tabData">
              <!-- 안내방송 컨텐츠 -->
              <MonthTestViewAnnounce />
            </div>
            <div v-if="mockTab == 4" class="tabData">
              <!-- 전광판 컨텐츠 -->
              <MonthTestViewEsign />
            </div>
            <div v-if="mockTab == 5" class="tabData">
              <!-- 접수내역 컨텐츠 -->
              <MonthTestViewRegister />
            </div>
            <div v-if="mockTab == 6" class="tabData">
              <!-- 응시내역 컨텐츠 -->
              <MonthTestViewExam />
            </div>
            <div v-if="mockTab == 7" class="tabData">
              <!-- 공지사항 컨텐츠 -->
              <MonthTestViewNotice />
            </div>
            <div v-if="mockTab == 8" class="tabData">
              <!-- 난이도 설문결과 컨텐츠 -->
              <MonthTestViewSurvey />
            </div>
          </div>
        </div>
        <!-- //tab-wrap -->
      </div>
      <!-- //page layout -->
    </article>
    </div>

    <!-- Popup -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import MonthTestViewInfo from '@/views/mocktest/MonthTestViewInfo.vue'
import MonthTestViewParpat from '@/views/mocktest/MonthTestViewParpat.vue'
import MonthTestViewRecruit from '@/views/mocktest/MonthTestViewRecruit.vue'
import MonthTestViewAnnounce from '@/views/mocktest/MonthTestViewAnnounce.vue'
import MonthTestViewEsign from '@/views/mocktest/MonthTestViewEsign.vue'
import MonthTestViewRegister from '@/views/mocktest/MonthTestViewRegister.vue'
import MonthTestViewExam from '@/views/mocktest/MonthTestViewExam.vue'
import MonthTestViewNotice from '@/views/mocktest/MonthTestViewNotice.vue'
import MonthTestViewSurvey from '@/views/mocktest/MonthTestViewSurvey.vue'


export default {
  mixins: [Mixin],
  name: 'MonthTestView',
  data() {
    return {
      mockTab: 0,
    }
  },
  methods: {
  },
  components: {
    MonthTestViewInfo,
    MonthTestViewParpat,
    MonthTestViewRecruit,
    MonthTestViewAnnounce,
    MonthTestViewEsign,
    MonthTestViewRegister,
    MonthTestViewExam,
    MonthTestViewNotice,
    MonthTestViewSurvey,
  }
}
</script>
