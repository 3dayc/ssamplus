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
          <!-- 비교과 -->
          <div class="subTit noLine">
            <h3>전문상담</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjnomj01" class="ssamArea">
                <span class="ssamInfo">
                  <span>현직 상담교사들이 가장 많이 추천하는 강의<span></span></span>
                  <em>전문상담</em>
                  <strong>이진영</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjnomj_Counsel01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>보건</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjnomj02" class="ssamArea">
                <span class="ssamInfo">
                  <span>마이-맵으로 완성하는 최단기 보건합격!<span></span></span>
                  <em>보건</em>
                  <strong>임수진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjnomj_Health01_thum.png`)" alt="" />
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
  name: 'IndexMjnomj',
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
