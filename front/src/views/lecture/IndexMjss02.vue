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
            <h3>지리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss021" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공지리 Only-One<span></span></span>
                  <em>지리</em>
                  <strong>한무일</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Geo01_thum.png`)" alt="" />
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
