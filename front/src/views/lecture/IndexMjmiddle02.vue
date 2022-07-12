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
            <h3>영어</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle021" class="ssamArea">
                <span class="ssamInfo">
                  <span>누구도 따라올 수 없는 <span>전공영어의 <br/>막강파워</span></span>
                  <em>영어</em>
                  <strong>차류쉘팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle022" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 <span>막강파워!</span></span>
                  <em>영어</em>
                  <strong>차미아</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle023" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어의 <span>막강파워!</span></span>
                  <em>영어</em>
                  <strong>류지원</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En03_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjmiddle024" class="ssamArea">
                <span class="ssamInfo">
                  <span>전공영어 <span> New, <br/>Paradigm shift</span></span>
                  <em>영어</em>
                  <strong>미쉘김</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjmiddle_En04_thum.png`)" alt="" />
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
