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
            <h3>가정</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle101" class="ssamArea">
                <span class="ssamInfo">
                  <span>가정 임용의 <span>절대강자!</span></span>
                  <em>가정</em>
                  <strong>문영은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Home01_thum.png`)" alt="" />
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
