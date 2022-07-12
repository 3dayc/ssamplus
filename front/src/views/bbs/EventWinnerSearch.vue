<template lang="html">
  <div class="eventWinner">
    <!-- 반응형 목록 -->
    <div class="resTls">
      <!-- listTitle -->
      <div class="thead listGrid">
        <span class="lgItem item0">발표일</span>
        <span class="lgItem">제목</span>
        <span class="lgItem item1">파일</span>
        <span class="lgItem item2">이벤트 기간</span>
      </div>
      <!-- //listTitle -->
      <!-- //list -->
      <div class="tbody">
        <ul>
          <!--Loop-->
          <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit"><em class="searchTxt">강의</em> 무료 제공된다고 했는데 어떻게 신청하나요?</router-link>
            </span>
            <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
            <span class="lgItem item2">2021-01-22 ~ <em>미정</em></span>
          </li>
          <!--//Loop-->
          <li class="listGrid new">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">개강일보다 <em class="searchTxt">강의</em>가 먼저 시작해요. 어떻게 해야 하나요?</router-link>
            </span>
            <span class="lgItem item1"></span>
            <span class="lgItem item2">2021-01-22 ~ 2021-02-01</span>
          </li>
          <li class="listGrid">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">[재도전 응원] 연간쌤팩 3월 신규<em class="searchTxt">강의</em> 할인 혜택!</router-link>
            </span>
            <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
            <span class="lgItem item2">2021-01-22 ~ 2021-02-01</span>
          </li>
          <li class="listGrid">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">보너스 <em class="searchTxt">강의</em>가 무엇인가요
              ? 어떻게 신청하나요?</router-link>
            </span>
            <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
            <span class="lgItem item2">2021-01-22 ~ <em>미정</em></span>
          </li>
          <li class="listGrid new">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">개강일보다 <em class="searchTxt">강의</em>가 먼저 시작해요. 어떻게 해야 하나요?</router-link>
            </span>
            <span class="lgItem item1"></span>
            <span class="lgItem item2">2021-01-22 ~ 2021-02-01</span>
          </li>
          <li class="listGrid">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">[재도전 응원] 연간쌤팩 3월 신규<em class="searchTxt">강의</em> 할인 혜택!</router-link>
            </span>
            <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
            <span class="lgItem item2">2021-01-22 ~ 2021-02-01</span>
          </li>
          <li class="listGrid">
            <span class="lgItem item0">2021-01-22</span>
            <span class="lgItem tL">
              <router-link to="/mkup/bbs/event/winner" class="tit">보너스 <em class="searchTxt">강의</em>가 무엇인가요
              ? 어떻게 신청하나요?</router-link>
            </span>
            <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
            <span class="lgItem item2">2021-01-22 ~ <em>미정</em></span>
          </li>
        </ul>
      </div>
      <!-- //list -->
    </div>
    <!-- //반응형 목록 -->
    <div class="paging">
      <Paginate v-if="!this.mobile" />
      <div class="moreBtnWrap" v-if="this.mobile">
        <button class="mobileMore">더보기</button>
      </div>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'EventWinnerSearch',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
