<template lang="html">
  <div>
    <div class="subTit noTxt">
      <span class="listSearch wFull playerSearch">
        <input type="text" placeholder="제목, 내용으로 검색">
        <button class="btnSearch">검색</button>
      </span>
    </div>
    <div class="testBbs">
      <!-- 반응형 목록 -->
      <div class="resTls pdListM">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">상태</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item1">문제</span>
          <span class="lgItem item2">답안지 제출</span>
          <span class="lgItem item3">답안제출 마감일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="iBbsSet end">첨삭완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">1회 모의고사</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>제출완료</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <!--//Loop-->
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">첨삭완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">2회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>제출완료</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">첨삭완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">4회 문제(비첨삭)</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">첨삭완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">5회 문제(비첨삭)</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">첨삭완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">6회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet">대기 중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">7회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>제출완료</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet">대기 중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">8회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet">대기 중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">9회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet">대기 중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">10회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>제출완료</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet">대기 중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger4 = true">11회 문제</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">답안지 </em>미제출</span>
              <span class="lgItem item3"><em class="mTit">답안제출 마감일</em>2021-03-01  23:59:00</span>
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
    <Popup v-if='popupTrigger4' @close="popupTrigger4 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>첨삭게시판</h1>
          <button @click="popupTrigger4 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div>
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead stateCase">
              <em class="iBbsSet">대기중</em>
              <div class="lecKind">김현 선생님/ Making Map 교육학</div>
              <strong>1회 모의고사</strong>
              <div class="boardInfo">
                <em>답안제출 마감일 : <i>2021-05-31 23:59:00</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 파일영역 -->
            <div class="boardFile">
              <!-- 문제 -->
              <ul class="uploadFileList">
                <li>
                  <span class="name">문제파일_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload show">다운로드</button>
                  </span>
                </li>
              </ul>
              <!-- //문제 -->
              <!-- 답안제출 -->
              <ul class="uploadFileList answerCase btnF">
                <li>
                  <em class="iSet black">답안제출</em>
                  <span class="uploadEndFile">
                    신간교재 목차 정리.pdf <button class="btnDelete">삭제</button>
                  </span>
                  <span class="uploadDate">
                    답안제출일 : <i>2021-05-30 23:45:08</i>
                  </span>
                  <span class="uploadFile">
                    <span>
                      <input type="file" id="fileUpload"/>
                      <label for="fileUpload">+ 파일첨부</label>
                    </span>
                  </span>
                </li>
                <li class="info">
                  파일 용량이 큰 경우 업로드에 시간이 걸리므로 제출파일명이 표시될 때까지 기다려 주세요<br/>
                  2개 이상의 파일을 업로드하는 경우 압축하여 1개의 파일로 등록해 주세요.<br/>
                  파일명은 공백 없이 지정형식에 따라 작성해 주세요.<br/>
                  <p>
                    ※ 파일명형식 : 작성자명_회차명(주제번호)_답안제출.hwp(doc)<br/>
                     예)홍길동_6회차(1번)_답안제출.hwp<br/>
                  </p>
                </li>
              </ul>
              <!-- //답안제출 -->
              <!-- 첨삭결과 -->
              <ul class="uploadFileList end">
                <li>
                  <em class="iSet green">첨삭결과</em>
                  <span>첨삭결과파일.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload show">다운로드</button>
                  </span>
                </li>
              </ul>
              <!-- //첨삭결과 -->
            </div>
            <!-- //파일영역 -->
          </div>
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
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PlayerBoard.vue',
  components: {
  },
  data() {
    return {
      popupTrigger4: false,
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
