<template lang="html">
  <div>
    <div class="subTit noTxt">
      <span class="listSearch wFull playerSearch">
        <input type="text" placeholder="제목, 내용으로 검색">
        <button class="btnSearch">검색</button>
      </span>
    </div>
    <div class="notice">
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">제목</span>
          <span class="lgItem item1">파일</span>
          <span class="lgItem item2">조회수</span>
          <span class="lgItem item3">작성일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0 stateCase tL">
                <em class="iBbsSet notice">공지</em>
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0 stateCase tL">
                <em class="iBbsSet notice">공지</em>
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. 공지사항의 내용이 2줄 이상 길어질 경우에는 말줄임 없이 모두 노출하여 이렇게 나오게 됩니다. </span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid new">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0 tL">
                <span class="tit" @click="popupTrigger3 = true">[재도전 응원] 연간쌤팩 3월 신규강의 할인 혜택!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">조회수</em>2,005</span>
              <span class="lgItem item3"><em class="mTit line">작성일</em>2021-01-22</span>
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

    <!-- 상세내용 Popup -->
    <Popup v-if='popupTrigger3' @close="popupTrigger3 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>선생님 공지</h1>
          <button @click="popupTrigger3 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail">
          <!-- 제목영역 -->
          <div class="boardHead stateCase">
            <em class="iBbsSet notice">공지</em>
            <strong>[국어 송헌/김준팀] 3~4월 신간교재 무료증정 (공지사항 공지)</strong>
            <div class="boardInfo">
              <em>작성일 : <i>2021-05-29</i></em>
              <em>조회수 : <i>222</i></em>
            </div>
          </div>
          <!-- //제목영역 -->
          <!-- 파일영역 -->
          <div class="boardFile">
            <ul class="uploadFileList">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                </span>
              </li>
            </ul>
          </div>
          <!-- //파일영역 -->
          <!-- 내용영역 -->
          <div class="boardView">
            <pre>
              안녕하세요.
              교사의 꿈을 위한 수험동반자,

              KG애듀원 희소/쌤플러스 입니다.

              현직교사들이 추천하는 강의!

              전문상담 이진영선생님의 합격을 부르는 비법!
              2021 New 엄선키워드212 해설강의 이벤트가 재오픈 되었습니다.

              전문상담 점수 상승의 핵심 키워드!
              엄선 키워드 212는?

              #2021학년도 출제 영역 반영
              #출제 빈도가 높은 키워드만 정리
              #중요하지만 눈에 띄지 않았던 키워드 정리

              거기에, 새로운 해설강의와 함께 엄선키워드 212교재도 업그레이드!!

              미래의 전문상담선생님을 꿈꾸시는 예비선생님이라면!
              할인된 수강료로 핵심 키워드를 잡을 수 있는 기회 놓치지 마세요!!
            </pre>
            <!-- //에디터 내용 -->
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
          <button class="btnList" @click="popupTrigger3 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //상세내용 Popup -->

  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PlayerNotice.vue',
  components: {
  },
  data() {
    return {
      popupTrigger3: false,
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
