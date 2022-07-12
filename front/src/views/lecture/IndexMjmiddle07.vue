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
            <h3>중국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle071" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>영역별 전문가의 <span>고품격 명강의!</span></span>
                  <em>중국어</em>
                  <strong>희소 중국어팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle072" class="ssamArea">
                <span class="ssamInfo">
                  <span>검증된 중국어 <br/>문법 강의로 <span>정확한 중국어 도출</span></span>
                  <em>중국어</em>
                  <strong>한정은</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle073" class="ssamArea">
                <span class="ssamInfo">
                  <span>풍부한 강의경력으로 <span>이해하기 쉬운 <br/>학습법 제시</span></span>
                  <em>중국어</em>
                  <strong>이해진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Zh03_thum.png`)" alt="" />
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
