<template lang="html">
  <div>
    <div class="referenceEduList">
      <div class="sortSet">
        <span>
          <input type="radio" id="radioTab21" name="tadioTab2" checked /><label for="radioTab21">국어</label>
        </span>
        <span>
          <input type="radio" id="radioTab22" name="tadioTab2" /><label for="radioTab22">영어</label>
        </span>
        <span>
          <input type="radio" id="radioTab23" name="tadioTab2" /><label for="radioTab23">수학</label>
        </span>
        <span>
          <input type="radio" id="radioTab24" name="tadioTab2" /><label for="radioTab24">음악</label>
        </span>
        <span>
          <input type="radio" id="radioTab24" name="tadioTab2" /><label for="radioTab24">체육</label>
        </span>
        <span>
          <input type="radio" id="radioTab25" name="tadioTab2" /><label for="radioTab25">중국어</label>
        </span>
        <span>
          <input type="radio" id="radioTab26" name="tadioTab2" /><label for="radioTab26">미술</label>
        </span>
        <span>
          <input type="radio" id="radioTab27" name="tadioTab2" /><label for="radioTab27">일본어</label>
        </span>
        <span>
          <input type="radio" id="radioTab28" name="tadioTab2" /><label for="radioTab28">한문</label>
        </span>
        <span>
          <input type="radio" id="radioTab29" name="tadioTab2" /><label for="radioTab29">가정</label>
        </span>
        <span>
          <input type="radio" id="radioTab30" name="tadioTab2" /><label for="radioTab30">도덕윤리</label>
        </span>
        <span>
          <input type="radio" id="radioTab31" name="tadioTab2" /><label for="radioTab31">미용</label>
        </span>
        <span>
          <input type="radio" id="radioTab32" name="tadioTab2" /><label for="radioTab32">전문상담</label>
        </span>
      </div>
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">적용년도</span>
          <span class="lgItem item1">과목</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item2">파일</span>
          <span class="lgItem item3">조회수</span>
          <span class="lgItem item4">작성일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">국어</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">영어</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">수학</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">음악</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">체육</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">중국어</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">미술</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">일본어</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">미술</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">2022</span>
              <span class="lgItem item1">일본어</span>
              <router-link to="/mkup/exam/reference/edu/view" class="lgItem tL">
                <span class="tit">[교육부 고시 제2020-226호] 교육과정 일부 개정 고시	</span>
              </router-link>
              <span class="lgItem item2"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item3"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item4"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'ReferenceEduMiddle',
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
