<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="eventIngView">
          <div class="subTit">
            <h3>진행중인 이벤트</h3>
          </div>
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <span class="boardTit">
                <strong>첫 구매 학습지원 이벤트</strong>
                <div class="boardInfo">
                  <em>이벤트 기간 : <i>2021-05-29 ~ 2021-06-06</i></em>
                  <em>발표일 : <i>2021-06-23</i></em>
                </div>
              </span>
            </div>
            <!-- //제목영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              <!-- 에디터 내용 -->
              <img :src="require(`@/assets/images/thumbnail/@tmp_event01.png`)" alt="이벤트 이미지"/>
              내용이 들어갈 자리
            </div>
            <!-- //내용영역 -->
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
