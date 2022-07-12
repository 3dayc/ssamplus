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
          <!-- 사회/과학 -->
          <div class="subTit noLine">
            <h3>역사</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss011" class="ssamArea">
                <span class="ssamInfo">
                  <span>최강역사! 교사들의 스승!<span></span></span>
                  <em>역사</em>
                  <strong>이순권</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss012" class="ssamArea">
                <span class="ssamInfo">
                  <span>분석과 집중 知彼知己<span></span></span>
                  <em>역사</em>
                  <strong>반철진</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_History02_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

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

          <div class="subTit noLine">
            <h3>물리</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss031" class="ssamArea">
                <span class="ssamInfo">
                  <span>뼈대부터 다른 진짜 이론물리학자의 CLASS<span></span></span>
                  <em>물리</em>
                  <strong>최만영</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Phy01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

          <div class="subTit noLine">
            <h3>화학</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss041" class="ssamArea">
                <span class="ssamInfo teamCase">
                  <span>출제 예상 영역 완벽대비!!<span></span></span>
                  <em>화학</em>
                  <strong>안병천/권혁팀</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi01_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss042" class="ssamArea">
                <span class="ssamInfo">
                  <span>단순 암기를 탈피한 철저한 이해 위주의 해설식 강의!<span></span></span>
                  <em>화학</em>
                  <strong>안병천</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi02_thum.png`)" alt="" />
              </router-link>
            </li>
            <li>
              <router-link to="/mkup/lecture/teachermjss043" class="ssamArea">
                <span class="ssamInfo">
                  <span>핵심을 짚어주는 강의, 출제 예상 영역 완벽 대비!<span></span></span>
                  <em>화학</em>
                  <strong>권혁</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Chemi03_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>


          <div class="subTit noLine">
            <h3>생물</h3>
          </div>
          <ul>
            <li>
              <router-link to="/mkup/lecture/teachermjss051" class="ssamArea">
                <span class="ssamInfo">
                  <span>방대한 생물학의 이정표가 되어 줄 Biology Master<span></span></span>
                  <em>생물</em>
                  <strong>엄은미</strong>
                </span>
                <img :src="require(`@/assets/images/thumbnail/@tmp_ssamB_mjss_Bio01_thum.png`)" alt="" />
              </router-link>
            </li>
          </ul>

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
