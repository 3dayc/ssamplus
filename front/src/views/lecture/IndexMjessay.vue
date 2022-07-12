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
          <!-- 논술·면접 -->
          <div class="subTit noLine">
            <h3>면접</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjessay01" class="ssamArea">
                <span class="ssamInfo">
                  <span>EBS 교육학 논술 전문가의 적중 강의<span></span></span>
                  <em>면접</em>
                  <strong>양재웅</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjessay02" class="ssamArea">
                <span class="ssamInfo">
                  <span>키워주기 위한 교육학<span></span></span>
                  <em>면접</em>
                  <strong>권구현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjessay03" class="ssamArea">
                <span class="ssamInfo">
                  <span>이해중심! 쉽게 설명하는 교육학!<span></span></span>
                  <em>면접</em>
                  <strong>윤중샘</strong>
                </span>

                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjessay03_thum.png`)" alt="" />
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
  name: 'IndexMjessay',
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
