<template lang="html">
  <div>
    <div class="subTit noTxt">
      <div class="wfullBtn">
        <span class="listSearch QnA">
          <input type="text" placeholder="제목, 내용으로 검색">
          <button class="btnSearch">검색</button>
        </span>
        <button class="btnM black ml10" @click="popupTrigger23 = true">글쓰기</button>
      </div>
    </div>
    <div class="counselBbs">
      <!-- 반응형 목록 -->
      <div class="resTls">
        <!-- listTitle -->
        <div class="thead listGrid">
          <span class="lgItem item0">상태</span>
          <span class="lgItem">제목</span>
          <span class="lgItem item1">파일</span>
          <span class="lgItem item2">작성일</span>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger2 = true">작년 강의의 커리큘럼이 수정된 이유가 궁금합니다!</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <!--//Loop-->
            <li class="listGrid new"> <!-- 새 글일 경우 new 클래스 추가 -->
              <span class="lgItem item0"><em class="iBbsSet">대기중</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger2 = true">강의를 듣고있는데, 4월 28일 누락 문제에 대한 문듸드립니다.</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">올해 5~6월 인강 자료 질문 드립니다.</span>
              </span>
              <span class="lgItem item1"></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">교육심리 동기-외재적 동기와 내재적 동기에 대해 질문이 있어 글 올립니다.</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">특강 자료 문의</span>
              </span>
              <span class="lgItem item1"></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">2021학년도 책을 2022학년도 기본반 수업 때도 쓸 수 있을까요?</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">2021 교재 문의 드립니다.</span>
              </span>
              <span class="lgItem item1"></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">올해 5~6월 인강 자료 질문 드립니다.</span>
              </span>
              <span class="lgItem item1"></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">교육심리 동기-외재적 동기와 내재적 동기에 대해 질문이 있어 글 올립니다.</span>
              </span>
              <span class="lgItem item1"><em class="iFile">첨부파일</em></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
            <li class="listGrid">
              <span class="lgItem item0"><em class="iBbsSet end">답변완료</em></span>
              <span class="lgItem tL">
                <span class="tit" @click="popupTrigger22 = true">특강 자료 문의</span>
              </span>
              <span class="lgItem item1"></span>
              <span class="lgItem item2"><em class="mTit">작성일</em>2021-05-04</span>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <!-- //반응형 목록 -->
      <Paginate />
    </div>
    <!-- 상세내용 Popup -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>학습 Q&amp;A</h1>
          <button @click="popupTrigger2 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail">
          <!-- 제목영역 -->
          <div class="boardHead stateCase">
            <em class="iBbsSet">대기중</em>
            <div class="lecKind">김현 선생님/ Making Map 교육학</div>
            <strong>종합문제 답안은 어디서 볼 수 있나요?</strong>
            <div class="boardInfo">
              <em>작성일 : <i>2021-05-29</i></em>
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
              교사의 꿈을 위한 수험 동반자,
               KG에듀원 교원임용 희소/쌤플러스 입니다.
            </pre>
          </div>
          <!-- //내용영역 -->
          <!-- 상세 버튼영역 -->
          <div class="boardBtn">
            <button class="btnM line">삭제</button>
            <button class="btnM" @click="popupTrigger2 = false, popupTrigger24 = true">수정</button>
          </div>
          <!-- //상세 버튼영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger2 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //상세내용 Popup -->
    <!-- 상세내용 - 답변완료 Popup -->
    <Popup v-if='popupTrigger22' @close="popupTrigger22 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>학습 Q&amp;A</h1>
          <button @click="popupTrigger22 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail">
          <!-- 제목영역 -->
          <div class="boardHead stateCase">
            <em class="iBbsSet end">답변완료</em>
            <div class="lecKind">김현 선생님/ Making Map 교육학</div>
            <strong>종합문제 답안은 어디서 볼 수 있나요?</strong>
            <div class="boardInfo">
              <em>작성일 : <i>2021-05-29</i></em>
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
              교사의 꿈을 위한 수험 동반자,
               KG에듀원 교원임용 희소/쌤플러스 입니다.
            </pre>
          </div>
          <!-- //내용영역 -->
          <!-- 답변영역 -->
          <div class="boardViewReply">
            <em class="iBbsSet answer">답변</em>
            <div class="replyDate">
              <em>작성일 : <i>2021-05-19</i></em>
            </div>
            <div class="replyFull">
              의견 올려줘서 고마와요.. 며칠전까지 이해가 잘 안되고 뭔가 잘못된 게 아닌가 했는데 이제 이해가 되네요.....<br/>
              그 문제는 일단 그냥 넘어가려 했는데 ,,수업 때 다시 언급할게요!!! 이런 문제는 운동 게임을 즐겨보지 않는 여성에게는 어렵겠네요....<br/>
              게임 룰에 대한 전 후 충분한 설명이 있어야 공평하겠네요... 열공!!!
            </div>
          </div>
          <!-- //답변영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger22 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //상세내용 - 답변완료  Popup -->
    <!-- 등록 Popup -->
    <Popup v-if='popupTrigger23' @close="popupTrigger23 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>학습 Q&amp;A</h1>
          <button @click="popupTrigger23 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <!-- 내용영역 -->
          <div class="writeLecKind">
            <span>글쓰기</span>
            <em>교육학 김현</em> <strong>키위 교육학 (실전)</strong>
          </div>
          <div class="box">
            <input type="text" placeholder="제목을 입력해 주세요.">
          </div>
          <div class="box">
            <textarea></textarea>
          </div>
          <div class="box">
            <span class="uploadFile">
              <!-- <em>첨부파일</em> -->
              <span>
                <input type="file" id="fileUpload"/>
                <label for="fileUpload">+ 파일첨부</label>
              </span>
              <i class="fRed">※ 첨부파일은 최대 5개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
            </span>
            <ul class="uploadFileList mt10" style="display:none;">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
            </ul>
          </div>
          <!-- //내용영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger23 = false">취소</button>
          <button class="btnL" @click="popupTrigger23 = false, popupTrigger2 = true">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //등록 Popup -->
    <!-- 수정 Popup -->
    <Popup v-if='popupTrigger24' @close="popupTrigger24 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>학습 Q&amp;A</h1>
          <button @click="popupTrigger22 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <!-- 내용영역 -->
          <div class="writeLecKind">
            <span>글수정</span>
            <em>교육학 김현</em> <strong>키위 교육학 (실전)</strong>
          </div>
          <div class="box">
            <input type="text" value="종합문제 답안은 어디서 볼 수 있나요?" placeholder="제목을 입력해 주세요.">
          </div>
          <div class="box">
            <textarea>
              안녕하세요.
              교사의 꿈을 위한 수험 동반자,
              KG에듀원 교원임용 희소/쌤플러스 입니다.
            </textarea>
          </div>
          <div class="box">
            <span class="uploadFile">
              <!-- <em>첨부파일</em> -->
              <span>
                <input type="file" id="fileUpload"/>
                <label for="fileUpload">+ 파일첨부</label>
              </span>
              <i class="fRed">※ 첨부파일은 최대 5개까지로 압축파일(zip)은 첨부할 수 없습니다</i>
            </span>
            <ul class="uploadFileList mt10">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
            </ul>
          </div>
          <!-- //내용영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger24 = false">취소</button>
          <button class="btnL" @click="popupTrigger24 = false, popupTrigger2 = true">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //수정 Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PlayerQnA.vue',
  components: {
  },
  data() {
    return {
      popupTrigger2: false,
      popupTrigger22: false,
      popupTrigger23: false,
      popupTrigger24: false,
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
