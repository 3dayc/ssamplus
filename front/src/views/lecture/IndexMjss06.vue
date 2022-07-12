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
            <h3>과학교육론</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss061" class="ssamArea">
                <span class="ssamInfo">
                  <span>전국유일! 과교론 전문강사<span></span></span>
                  <em>과학교육론</em>
                  <strong>김창만</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Sc01_thum.png`)" alt="" />
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
