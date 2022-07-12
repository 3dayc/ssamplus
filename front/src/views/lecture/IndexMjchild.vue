<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lectureSsamList">
          <div class="subTit noLine">
            <h3>유아</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjchild01" class="ssamArea">
                <span class="ssamInfo">
                  <span>결과가 다른 시작, <br/>기대한다면 <span>합격예감</span></span>
                  <em>유아</em>
                  <strong>배지윤</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjchild02" class="ssamArea">
                <span class="ssamInfo">
                  <span>핵심 콕! <span>이해 쏙!</span></span>
                  <em>유아</em>
                  <strong>이동건</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjchild03" class="ssamArea">
                <span class="ssamInfo">
                  <span>20년 현장 경험과 <br/>완벽한 분석을 통한 <span>실전 강의</span></span>
                  <em>유아</em>
                  <strong>양재웅</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjchild03_thum.png`)" alt="" />
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
  name: 'IndexMjchild',
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
