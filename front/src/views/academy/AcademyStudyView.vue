<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="academyStudyView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>스터디 모집</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong>스터디원 구합니다.</strong>
              <div class="boardInfo">
                <em>작성자 : gu*****</em>
                <em>작성일 : <i>2021-05-29</i></em>
                <em>조회수 : <i>222</i></em>
              </div>
            </div>
            <!-- //제목영역 -->
            <div class="asDetail tableList">
              <dl>
                <dt>스터디 과목</dt>
                <dd>미술</dd>
              </dl>
              <dl>
                <dt>구분</dt>
                <dd>오프라인</dd>
              </dl>
              <dl>
                <dt>지역</dt>
                <dd>서울시 마포구</dd>
              </dl>
              <dl>
                <dt>요일</dt>
                <dd>월,화,수,목,금,토</dd>
              </dl>
              <dl>
                <dt>시간</dt>
                <dd>협의</dd>
              </dl>
              <dl>
                <dt>인원</dt>
                <dd>2명</dd>
              </dl>
              <dl>
                <dt>성별</dt>
                <dd>무관</dd>
              </dl>
              <dl>
                <dt>마감여부</dt>
                <dd><span class="iSet green">모집 중</span></dd>
              </dl>
            </div>
            <!-- 내용영역 -->
            <div class="boardView">
              - 연락처 또는 카카오톡 ID : hhhhh00<br/>
              - 스터디 내용<br/>
              1. 강의가 올라오는 매주 목,토 오후 11:59까지 강의 수강 인증. 1분이라도 늦으면 지각처리<br/>
              2. 복습 인증(백지인출) 평일 매일 오후 11:59까지<br/><br/>
              강의 밀리지 않고 열심히 같이 으쌰으쌰하면서 짝스터디 하실 분 구합니다!<br/>
              혹시 인출 방법이나 수강 인증 시간을 조율하고 싶으신 분들은 카톡아이디로 문의주세요!<br/>
              조율 가능합니다. 편하게 연락주세요 :)
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/academy/study" class="btnList">목록</router-link>
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
  name: 'AcademyStudyView',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
