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
        <div class="infoNewsView">
          <div class="subTit">
            <h3>교육계 소식</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong>초중고 교사 99.2% “학급당 학생 10명 상한제 찬성＂</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <!-- 기사출처 -->
            <div class="boardSource">
              <em>출처</em> <a href="https://www.jbe.go.kr/board/view.jbe?boardId=BBS_0000146&startPage=1&menuCd=DOM_000000102001002000&dataSid=799131" target="_blank">[매일노동뉴스] www.labortoday.co.kr</a>
            </div>
            <!-- //기사출처 -->
            <!-- 내용영역 -->
            <div class="boardView">
              내용이 들어갈 자리<br/><br/>
              <pre>
              2022학년도 전북 공립 유치원.초등학교.특수학교(유치원.초등) 교사 임용후보자 선정경쟁시험 사전 예고 연기 안내

              전국 시ㆍ도교육청에서는 「교육공무원 임용후보자 선정경쟁시험규칙」 제9조제3항에 따라시험 6개월 전까지 사전예고를
              실시할 예정이었으나,교육부와 시ㆍ도교육청 간 교원 수급 조정 등의 사유로 사전예고가 연기될 예정입니다.
              사전예고 일자는 미정이나 교육부와 협의하여 최대한 빠른 시일 내에 예고하도록 하겠습니다.

              * 자세한 사항 점부파일 참고

              (이하 생략)
              </pre>
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/exam/info/news" class="btnList">목록</router-link>
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
  name: 'InfoNewsView',
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
