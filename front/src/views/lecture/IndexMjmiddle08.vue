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
            <h3>일본어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle081" class="ssamArea">
                <span class="ssamInfo">
                  <span>일본어 정통의 내공, <span>완벽 이해의 <br/>수업</span></span>
                  <em>일본어</em>
                  <strong>동소현</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ja01_thum.png`)" alt="" />
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
