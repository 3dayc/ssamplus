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
        <div class="referenceTakerView">
          <div class="subTit">
            <h3>수험 자료실</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong><em class="round">1차 / 중등</em>2021학년도 교사임용시험(제n차 시험) 문제지 표지(응시자 유의사항)</strong>
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
                  <span class="name">2021개정시기_특수교육(2018.07)_특수교육 교과_영역A.zip</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
                <li>
                  <span class="name">2021개정시기_특수교육(2018.07)_특수교육 교과_영역B.zip</span>
                  <span class="btnBox">
                    <button class="btnDownload">다운로드</button>
                  </span>
                </li>
              </ul>
            </div>
            <!-- //파일영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              내용이 들어갈 자리 (자료실에는 내용이 안들어가는 경우가 많아요)<br/><br/>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/exam/reference/taker" class="btnList">목록</router-link>
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
  name: 'ReferenceTakerView',
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
