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
        <div class="premiumCounselView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>프리미엄 회원상담</h3>
            <div class="summeryTxt">프리미엄 회원전담 상담사가 답변을 드립니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead stateCase">
              <em class="iBbsSet end">답변완료</em>
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
              프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다. 프리미엄 회원의 상담내용을 표시합니다.
            </div>
            <!-- //내용영역 -->
            <!-- 답변 영역 -->
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
            <!-- //답변 영역 -->
            <!-- 파일영역 -->
            <!-- <div class="boardFile">
              <ul class="uploadFileList">
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
                <li>
                  <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
              </ul>
            </div> -->
            <!-- //파일영역 -->
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <button class="btnL" @click="popupTrigger01 = true">삭제</button>
            </div>
            <!-- //상세 버튼영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/mylec/premium/counsel" class="btnList">목록</router-link>
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
  name: 'premiumCounselViewComplete',
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
