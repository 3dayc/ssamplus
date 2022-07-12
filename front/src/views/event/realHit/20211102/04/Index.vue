<template lang="html">
  <div>
    <div class="realHitBox">
      <div class="topArea">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_top.jpg`)" alt="2017학년도 기출 적중 사례"/>
      </div>
      <div class="contentsArea">
        <div class="bgBack">
          <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_bg.jpg`)" alt="전문상담 이진영"/>
        </div>
        <!-- realHitTab -->
        <div class="realHitTab">
          <!-- tab -->
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:realHitTab===0}"><button @click="realHitTab = 0">기출 적중 사례</button></li>
                  <li :class="{on:realHitTab===1}"><button @click="realHitTab = 1">연간 커리큘럼</button></li>
                  <li :class="{on:realHitTab===2}"><router-link to="/mkup/lecture/teachermjnomj01" target="_blank">수강신청</router-link></li>
                </ul>
              </nav>
            </div>
          </div>
          <!--// tab -->
          <div class="tabLayout">
            <div v-if="realHitTab == 0" class="tabData tabData01" :key="realHitTab">
              <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_title.png`)" alt="기출 적중 사례 살펴보기"/>
              <div class="hitThumbnail">
                <ul>
                  <li><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_thumbnail01.png`)" alt="기출 적중 사례1" @click="imgPopTrigger1 = true"></li>
                  <li><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_thumbnail02.png`)" alt="기출 적중 사례2" @click="imgPopTrigger2 = true"></li>
                  <li><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_thumbnail03.png`)" alt="기출 적중 사례3" @click="imgPopTrigger3 = true"></li>
                  <li><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_thumbnail04.png`)" alt="기출 적중 사례4" @click="imgPopTrigger4 = true"></li>
                  <li><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_thumbnail05.png`)" alt="기출 적중 사례5" @click="imgPopTrigger5 = true"></li>
                </ul>
              </div>
              <a href="/event/realHit/20211102/04/ljy_realHit.pdf" class="btnHitDownload" target="_blank"><img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_btn.png`)" alt="기출 적중사례 파일 다운로드"/></a>
            </div>
            <div v-if="realHitTab == 1" class="tabData">
              <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab02Con.jpg`)" alt="2018학년도 대비 연간 커리큘럼"/>
            </div>
          </div>
        </div>
        <!-- //realHitTab -->
      </div>
    </div>

    <ImgPopup v-if='imgPopTrigger1' @close="imgPopTrigger1 = false">
      <div slot="modalbody">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_view01.jpg`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger2' @close="imgPopTrigger2 = false">
      <div slot="modalbody">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_view02.jpg`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger3' @close="imgPopTrigger3 = false">
      <div slot="modalbody">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_view03.jpg`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger4' @close="imgPopTrigger4 = false">
      <div slot="modalbody">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_view04.jpg`)" alt=""/>
      </div>
    </ImgPopup>
    <ImgPopup v-if='imgPopTrigger5' @close="imgPopTrigger5 = false">
      <div slot="modalbody">
        <img :src="require(`@/views/event/realHit/20211102/04/images/ljy_tab01Con_view05.jpg`)" alt=""/>
      </div>
    </ImgPopup>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Index',
  data() {
    return {
      realHitTab: 0,
      imgPopTrigger1: false,
      imgPopTrigger2: false,
      imgPopTrigger3: false,
      imgPopTrigger4: false,
      imgPopTrigger5: false,
    }
  },
  components: {
  },
  methods: {
    realHitDetail04() {
      let routeData = this.$router.resolve({name: 'realHitDetail04', query: {data: ""}});
      window.open('/mkup/windowPopup/realHitDetail04', '_blank', `width=607,height=867`);
    }, // 윈도우팝업 호출
	},
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped src="@/views/event/realHit/20211102/04/css/common.css"></style>
