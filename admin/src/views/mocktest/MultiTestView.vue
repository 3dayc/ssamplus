<template lang="html">
  <div>
    <div class="pageTit">
      <h2>희소 모의고사 관리</h2>
      <span><router-link to="/mkup/mocktest/multiTest">모의고사 관리</router-link><router-link to="/mkup/mocktest/multiTest">희소 모의고사 관리</router-link><em>상세</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="multiTestView"><!-- class 없어도 유지 -->
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
              <router-link to="/mkup/mocktest/multiTest" class="btnList">목록으로</router-link>
              <button class="btnM" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">저장</button>
              <router-link to="/mkup/mocktest/multiTest" class="btnM line ml10">삭제</router-link>
            </span>
          </div>
          <div class="tabLayout">
            <div v-if="mockTab == 0" class="tabData">
              <!-- 기본정보 컨텐츠 -->
              <MultiTestViewInfo/>
            </div>
            <div v-if="mockTab == 1" class="tabData">
              <!-- 참여시험 컨텐츠 -->
              <MultiTestViewParpat/>
            </div>
            <div v-if="mockTab == 2" class="tabData">
              <!-- 모집인원 컨텐츠 -->
              <MultiTestViewRecruit/>
            </div>
            <div v-if="mockTab == 3" class="tabData">
              <!-- 안내방송 컨텐츠 -->
              <MultiTestViewAnnounce />
            </div>
            <div v-if="mockTab == 4" class="tabData">
              <!-- 전광판 컨텐츠 -->
              <MultiTestViewEsign />
            </div>
            <div v-if="mockTab == 5" class="tabData">
              <!-- 접수내역 컨텐츠 -->
              <MultiTestViewRegister />
            </div>
            <div v-if="mockTab == 6" class="tabData">
              <!-- 응시내역 컨텐츠 -->
              <MultiTestViewExam/>
            </div>
            <div v-if="mockTab == 7" class="tabData">
              <!-- 공지사항 컨텐츠 -->
              <MultiTestViewNotice />
            </div>
            <div v-if="mockTab == 8" class="tabData">
              <!-- 난이도 설문결과 컨텐츠 -->
              <MultiTestViewSurvey />
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
import MultiTestViewAnnounce from '@/views/mocktest/MultiTestViewAnnounce.vue'
import MultiTestViewEsign from '@/views/mocktest/MultiTestViewEsign.vue'
import MultiTestViewRegister from '@/views/mocktest/MultiTestViewRegister.vue'
import MultiTestViewNotice from '@/views/mocktest/MultiTestViewNotice.vue'
import MultiTestViewInfo from '@/views/mocktest/MultiTestViewInfo.vue'
import MultiTestViewParpat from '@/views/mocktest/MultiTestViewParpat.vue'
import MultiTestViewRecruit from '@/views/mocktest/MultiTestViewRecruit.vue'
import MultiTestViewSurvey from '@/views/mocktest/MultiTestViewSurvey.vue'
import MultiTestViewExam from '@/views/mocktest/MultiTestViewExam.vue'

export default {
  mixins: [Mixin],
  name: 'MultiTestView',
  data() {
    return {
      mockTab: 0,
      noticeWrite:false,
      noticeView:false,
    }
  },
  methods: {
  },
  components: {
    MultiTestViewAnnounce,
    MultiTestViewEsign,
    MultiTestViewRegister,
    MultiTestViewNotice,
    MultiTestViewInfo,
    MultiTestViewParpat,
    MultiTestViewRecruit,
    MultiTestViewSurvey,
    MultiTestViewExam,
  }
}
</script>
