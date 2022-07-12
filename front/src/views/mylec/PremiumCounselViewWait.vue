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
              <em class="iBbsSet">대기중</em>
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
            <!-- 상세 버튼영역 -->
            <div class="boardBtn">
              <button class="btnL line" @click="popupTrigger01 = true">삭제</button>
              <router-link to="/mkup/mylec/premium/counsel/modify" class="btnL">수정</router-link>
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
  name: 'PremiumCounselViewWait',
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
