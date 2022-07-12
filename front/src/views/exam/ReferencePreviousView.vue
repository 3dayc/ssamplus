<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="referencePreviousView">
          <div class="subTit">
            <h3>기출문제</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong><em class="iSbjSetMini">중국어</em>2021학년도 중등 임용시험 1차 시험 중등특수 문제</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>1,999</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 파일영역 -->
            <div class="boardFile">
              <ul class="uploadFileList">
                <li>
                  <span class="name">2021학년도 전문상담_전공 A.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
                <li>
                  <span class="name">2021학년도 전문상담_전공 B.pdf</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              내용이 들어갈 자리<br/><br/>
              <pre>
  안녕하세요~

  교사의 꿈을 위한 수험 동반자, KG에듀원 교원임용 희소고시학원 쌤플러스입니다.

  2021학년도 중등 임용시험 1차 시험 전문상담 기출문제입니다.

  여러분의 합격을 진심으로 기원합니다.
              </pre>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/exam/reference/previous" class="btnList">목록</router-link>
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
  name: 'ReferencePreviousView',
  components: {
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>
