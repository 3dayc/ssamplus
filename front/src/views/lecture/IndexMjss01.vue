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
            <h3>역사</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss011" class="ssamArea">
                <span class="ssamInfo">
                  <span>최강역사! 교사들의 스승!<span></span></span>
                  <em>역사</em>
                  <strong>이순권</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss012" class="ssamArea">
                <span class="ssamInfo">
                  <span>분석과 집중 知彼知己<span></span></span>
                  <em>역사</em>
                  <strong>반철진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History02_thum.png`)" alt="" />
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
