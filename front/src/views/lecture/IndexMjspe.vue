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
          <!-- 특수 -->
          <!-- <div class="subTit noLine">
            <h3>유아특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>초등특수</em>
                  <strong></strong>
                </span>
              </router-link>
            </li>
          </ul>
          <div class="subTit noLine">
            <h3>초등특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teacher" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>초등특수</em>
                  <strong></strong>
                </span>
              </router-link>
            </li>
          </ul> -->
          <div class="subTit noLine">
            <h3>중등특수</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjspe01" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격 PLAN을 경험하라<span></span></span>
                  <em>중등특수</em>
                  <strong>한경</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjspe_Middle01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjspe02" class="ssamArea">
                <span class="ssamInfo">
                  <span>철저한 분석, 체계적인 명품 특수 강의<span></span></span>
                  <em>중등특수</em>
                  <strong>박해인</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjspe_Middle02_thum.png`)" alt="" />
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
  name: 'IndexMjspe',
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
