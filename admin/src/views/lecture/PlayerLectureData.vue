<template lang="html">
  <div>
    <div class="lecDataBbs">
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">직강일</span>
          <span class="lgItem item5">자료제목</span>
          <span class="lgItem item1">파일</span>
          <span class="lgItem item2">인쇄전용여부</span>
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
              <span class="lgItem tL item5">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료 강의자료  강의자료 강의자료 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>N</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>N</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>N</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>N</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="mTit">강의일자</em>2021-03-01</span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger = true">[0312] 강의자료</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">인쇄전용여부</em>Y</span>
              <span class="lgItem item3"><em class="mTit">작성일</em>2021-05-04</span>
              <span class="lgItem item4"><em class="mTit line">조회수</em>999</span>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <!-- //반응형 목록 -->
      <Paginate />
    </div>

    <!-- 상세내용 Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>강의자료</h1>
          <button @click="popupTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
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
                  <em>(인쇄전용여부 : Y)</em>
                </span>
              </li>
            </ul>
          </div>
          <!-- //파일영역 -->
          <!-- 내용영역 -->
          <div class="boardView">
            <!-- 에디터 내용 -->
            <pre>
              안녕하세요.
              교사의 꿈을 위한 수험 동반자,
               KG에듀원 교원임용 희소/쌤플러스 입니다.
            </pre>
          </div>
          <!-- //내용영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //상세내용 Popup -->
    <!-- 강의자료 모바일 안내 -->
    <!-- <Alert v-if='popupTrigger' @close="popupTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty">
          <p>
            강의자료는 PC버전 홈페이지에서 확인 가능합니다.
          </p>
        </div>
      </template>
      <template slot="modalfooter">
        <button class="btnM" @click="popupTrigger = false">확인</button>
      </template>
    </Alert> -->
    <!-- //강의자료 모바일 안내-->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PlayerLectureData.vue',
  components: {
  },
  data() {
    return {
      popupTrigger: false,
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
