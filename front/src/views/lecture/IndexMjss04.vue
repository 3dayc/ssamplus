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
          <!-- 사회/과학 -->
          <div class="subTit noLine">
            <h3>화학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss041" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>출제 예상 영역 완벽대비!!<span></span></span>
                  <em>화학</em>
                  <strong>안병천/권혁팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss042" class="ssamArea">
                <span class="ssamInfo">
                  <span>단순 암기를 탈피한 철저한 이해 위주의 해설식 강의!<span></span></span>
                  <em>화학</em>
                  <strong>안병천</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss043" class="ssamArea">
                <span class="ssamInfo">
                  <span>핵심을 짚어주는 강의, 출제 예상 영역 완벽 대비!<span></span></span>
                  <em>화학</em>
                  <strong>권혁</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi03_thum.png`)" alt="" />
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
  name: 'IndexMjss',
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
