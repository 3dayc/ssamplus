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
            <h3>음악</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle041" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>엘리트 음악교육, 서울대 서정팀!<span></span></span>
                  <em>음악</em>
                  <strong>서정팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle042" class="ssamArea">
                <span class="ssamInfo">
                  <span>기본적인 사항부터 <br/>핵심 적중 내용까지 <span>체계적인 강의</span></span>
                  <em>음악</em>
                  <strong>서민정</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle043" class="ssamArea">
                <span class="ssamInfo">
                  <span>엘리트 음악교육, <span>서울대 서정팀!</span></span>
                  <em>음악</em>
                  <strong>정희원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle044" class="ssamArea">
                <span class="ssamInfo">
                  <span>슬기로운 작곡가 <span>서울대 박서형</span></span>
                  <em>음악</em>
                  <strong>박서형</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Music04_thum.png`)" alt="" />
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
