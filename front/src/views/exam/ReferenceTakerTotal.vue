<template lang="html">
  <div>
    <div class="referenceTakerList">
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">분류</span>
          <span class="lgItem item1">과목</span>
          <span class="lgItem item2">지역</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item3">파일</span>
          <span class="lgItem item4">조회수</span>
          <span class="lgItem item5">작성일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">국어</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">영어</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">수학</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">음악</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">체육</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">중국어</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">미술</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">일본어</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">미술</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0">1차</span>
              <span class="lgItem item1">일본어</span>
              <span class="lgItem item2">서울</span>
              <router-link to="/mkup/exam/reference/taker/view" class="lgItem tL">
                <span class="tit">2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)	</span>
              </router-link>
              <span class="lgItem item3"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item4"><em class="mTit">조회수</em>99</span>
              <span class="lgItem item5"><em class="mTit line">작성일</em>2021-01-22</span>
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
  name: 'ReferenceTakerTotal',
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
