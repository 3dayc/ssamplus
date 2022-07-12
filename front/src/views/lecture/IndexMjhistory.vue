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
          <!-- 한국사 -->
          <div class="subTit noLine">
            <h3>한국사</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermhistory01" class="ssamArea">
                <span class="ssamInfo">
                  <span>합격 선(線)을 넘는<span>한국사</span></span>
                  <em>한국사</em>
                  <strong>정재학</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjhistory01_thum.png`)" alt="" />
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
  name: 'IndexMjhistory',
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
