<template lang="html">
  <div>
    <div class="faqList">
      <div class="sortSet">
        <span>
          <input type="radio" id="radioTab21" name="tadioTab2" checked /><label for="radioTab21">전체</label>
        </span>
        <span>
          <input type="radio" id="radioTab22" name="tadioTab2" /><label for="radioTab22">시험 자격</label>
        </span>
        <span>
          <input type="radio" id="radioTab23" name="tadioTab2" /><label for="radioTab23">임용 시험 정보</label>
        </span>
        <span>
          <input type="radio" id="radioTab24" name="tadioTab2" /><label for="radioTab24">시험장에서</label>
        </span>
        <span>
          <input type="radio" id="radioTab25" name="tadioTab2" /><label for="radioTab25">학습 방법</label>
        </span>
      </div>
      <!-- 반응형 목록 -->
      <div class="resTls bottomLine">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">분류</span>
          <span class="lgItem item2">제목</span>
          <span class="lgItem item1">조회수</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <span class="lgItem item0">한국사자격증</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">자격증 발급 예정이어도 시험 응시가 가능한가요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>45</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0">임용 시험 정보</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">시험 공고문 일정을 알려주세요.</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>132</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">시험장에서</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">시험 종료 후 시험지도 제출해야 하나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>75</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">학습방법</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">논술작성 시 연습종이를 주나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>90</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">시험장에서</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">필기구는 어떤 것을 사용해야 하나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>8</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">임용시험정보</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">시험의 횟수와 시기가 궁금합니다.</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>23</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">임용시험정보</span>
              <router-link to="/mkup/counsel/faq/view" class="lgItem tL tit">유초등교사 1차 시험은 어떻게 이루어져 있나요?</router-link>
              <span class="lgItem item1"><em class="mTit">조회수</em>60</span>
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'FaqFirst',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
