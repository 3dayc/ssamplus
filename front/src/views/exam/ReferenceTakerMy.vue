<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <div class="referenceTakerList">
      <div class="sortSet">
        <span>
          <input type="radio" id="radioTab21" name="tadioTab2" checked /><label for="radioTab21">교육학</label>
        </span>
        <span>
          <input type="radio" id="radioTab22" name="tadioTab2" /><label for="radioTab22">중등중국어</label>
        </span>
      </div>
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">적용년도</span>
          <span class="lgItem item1">과목</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item3">파일</span>
          <span class="lgItem item4">작성일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">교육학</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">교육학</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">교육학</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중등중국어</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중등중국어</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중등중국어</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중등중국어</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중등중국어</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4">2021-01-22</span>
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
  name: 'ReferenceTakerFirst',
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
