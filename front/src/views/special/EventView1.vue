<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialEventView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>선생님 이벤트</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 상세 -->
          <div class="boardDetail">
            <!-- 제목영역 -->
            <div class="boardHead">
              <strong><span>[특수 박해인]</span> 합격을 위한 이벤트</strong>
              <div class="boardInfo">
                <em>작성일 : <i>2021-05-29</i></em>
              </div>
              <router-link to="/mkup/lecture/teachermjmiddle044" class="btnTcHomeName">선생님 홈 <em>바로가기</em></router-link>
            </div>
            <!-- //제목영역 -->
            <!-- 내용영역 -->
            <div class="boardView">
              <img :src="require(`@/assets/images/thumbnail/@tmp_detail01.png`)" alt="슬기로운 청음 바다"/>
              <br/><br/>
              안녕하세요.
              <br/>
              교사의 꿈을 위한 동반자 쌤플러스입니다.
            </div>
            <!-- //내용영역 -->
            <!-- 상세 네비게이션영역 -->
            <div class="boardNavi">
              <a href="#none;" class="prev">
                <strong>PREV</strong>
                <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
              </a>
              <router-link to="/mkup/special/event" class="btnList">목록</router-link>
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
  name: 'EventView',
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
