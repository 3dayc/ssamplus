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
            <h3>국어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle011" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>박사와 교사가 <span>만났다.</span></span>
                  <em>국어</em>
                  <strong>송헌/김준팀 </strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle012" class="ssamArea">
                <span class="ssamInfo">
                  <span>출제자의 눈으로 <span>국어의 핵심을 <br/>찌르다!</span></span>
                  <em>국어</em>
                  <strong>송헌</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle013" class="ssamArea">
                <span class="ssamInfo">
                  <span>문법을 관통하는 <span>시원하고 거침없는 <br/>질주</span></span>
                  <em>국어</em>
                  <strong>김준</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle014" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공국어 <span>神의 한수</span></span>
                  <em>국어</em>
                  <strong>박노송</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_Ko04_thum.png`)" alt="" />
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
