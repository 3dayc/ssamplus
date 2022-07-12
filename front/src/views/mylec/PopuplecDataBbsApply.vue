<template lang="html">
  <div>
    <div class="lecDataBbs" v-if='listTrigger'>
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">강의일자</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item1">파일</span>
          <span class="lgItem item2">인쇄횟수제한</span>
          <span class="lgItem item3">작성일</span>
          <span class="lgItem item4">조회수</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>0/3</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>2/3</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>3/3</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="listTrigger = false">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄횟수제한</em>FREE</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
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
    <div v-else>
      <div class="boardDetail">
        <!-- 제목영역 -->
        <div class="boardHead">
          <div class="lecKind">김현 선생님/ Making Map 교육학</div>
          <strong>2021-03-01 / 강의자료</strong>
          <div class="boardInfo">
            <em>작성일 : <i>2021-05-29</i></em>
            <em>조회수 : <i>222</i></em>
          </div>
        </div>
        <!-- //제목영역 -->
        <!-- 파일영역 -->
        <div class="boardFile">
          <ul class="uploadFileList">
            <li class="printCase">
              <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
              <span class="btnBox">
                <em>(인쇄횟수제한 : <strong>3</strong>/5)</em>
                <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
              </span>
            </li>
          </ul>
        </div>
        <!-- //파일영역 -->
        <!-- 내용영역 -->
        <div class="boardView">
          <pre>
            안녕하세요.
            교사의 꿈을 위한 수험 동반자,
             KG에듀원 교원임용 희소/쌤플러스 입니다.
          </pre>
        </div>
        <!-- //내용영역 -->
      </div>
      <!-- 상세 네비게이션영역 -->
      <div class="boardNavi">
        <a href="#none;" class="prev">
          <strong>PREV</strong>
          <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
        </a>
        <button class="btnList" @click="listTrigger = true">목록</button>
        <a href="#none;" class="next">
          <strong>NEXT</strong>
          <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
        </a>
      </div>
      <!-- //상세 네비게이션영역 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopuplecDataBbsApply',
  components: {
  },
  data() {
    return {
      listTrigger: true,
    }
  },
  mounted() {
  },
}
</script>
