<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lectureSsamList">
          <!-- 중등 -->
          <div class="subTit noLine">
            <h3>수학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle031" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>수학과 합격의 <span>연결고리!</span></span>
                  <em>수학</em>
                  <strong>이정훈/안후상팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle032" class="ssamArea">
                <span class="ssamInfo">
                  <span>함께 만드는 합격! <span>임용 수학 <br/>러닝메이트</span></span>
                  <em>수학</em>
                  <strong>이정훈</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle033" class="ssamArea">
                <span class="ssamInfo">
                  <span>수교론의 정석! <span>완벽 이해!</span></span>
                  <em>수학</em>
                  <strong>안후상</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle034" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본부터 고득점까지 <span>모든 것을 충족시키는 <br/>수교론</span></span>
                  <em>수학</em>
                  <strong>김지혜</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Math04_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>
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
  name: 'IndexMjmiddle',
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
