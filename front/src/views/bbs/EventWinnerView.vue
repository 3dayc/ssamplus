<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="eventWinnerView">
          <div class="subTit">
            <h3>당첨자 발표</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <span class="boardTit">
                <strong>수강후기 설문조사 12월 당첨자</strong>
                <div class="boardInfo">
                  <em>이벤트 기간 : <i>2021-05-29 ~ 2021-06-06</i></em>
                  <em>발표일 : <i>2021-06-23</i></em>
                </div>
              </span>
            </div>
            <!-- //제목영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              안녕하세요<br/>
              교사의 꿈을 위한 수험동반자<br/>
              KG 에듀원 교원임용 희소/쌤플러스 입니다.<br/><br/>
              수강후기 설문조사에 참여해주신 여러분께 진심으로 감사드립니다.<br/>
              12월 수강후기 설문조사 참여자 이벤트 당첨자 발표 공지입니다.<br/>
            </div>
            <!-- //내용영역 -->
            <!-- 이벤트 당첨자 영역 -->
            <div class="boardOnList">
              <div class="back">
                <strong>당첨자 안내</strong>
                <div class="listNum">
                  <table>
                    <thead>
                      <tr>
                        <th class="item0">순번</th>
                        <th class="item1">이름</th>
                        <th class="item2">아이디</th>
                        <th class="item3">경품</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>김*진</td>
                        <td>ddr******</td>
                        <td>KFC 3만원 상품권</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- //이벤트 당첨자 영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/bbs/event" class="btnList">목록</router-link>
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
  name: 'EventIngView',
  data() {
    return {
      
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
