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
          <!-- 사서직(공무원) -->
          <div class="subTit noLine">
            <h3>사서직(공무원)</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjlibr01" class="ssamArea">
                <span class="ssamInfo">
                  <span><span></span></span>
                  <em>사서직(공무원)</em>
                  <strong>신인수</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjLib01_thum.png`)" alt="" />
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
  name: 'IndexMjlibr',
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
