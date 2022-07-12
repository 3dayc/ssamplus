<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="studyQnaView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>학습 Q&amp;A</h3>
            <div class="summeryTxt">강의에 대한 궁금한 부분이 있으면 고민하지 마시고 Q&amp;A로 해결하세요!</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
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
              <div class="replyDate">작성일 : <i>2021-05-29</i></div>
              <div class="replyFull">
                의견 올려줘서 고마와요.. 며칠전까지 이해가 잘 안되고 뭔가 잘못된 게 아닌가 했는데 이제 이해가 되네요.....<br/>
                그 문제는 일단 그냥 넘어가려 했는데 ,,수업 때 다시 언급할게요!!! 이런 문제는 운동 게임을 즐겨보지 않는 여성에게는 어렵겠네요....<br/>
                게임 룰에 대한 전 후 충분한 설명이 있어야 공평하겠네요... 열공!!!
              </div>
            </div>
            <!-- //답변영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/mylec/study/qna" class="btnList">목록</router-link>
              <a href="#none;" class="next">
                <strong>NEXT</strong>
                <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
              </a>
            </div>
            <!-- //상세 네비게이션영역 -->
          </div>
          <!-- //상세 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudyQnaView2',
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
