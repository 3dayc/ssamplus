<template lang="html">
  <div>
    <div class="guideList">
      <div class="guidData">
          <swiper :options="guideSwiper" v-if="guideTab == 0" ref="playSwiper" @reachEnd="replay = true;" >
            <swiper-slide>
              <img :src="require(`@/assets/images/guide/mobileWeb/mobileWeb.gif`)" alt="" id="guideImg" @click="imgClick()"/>
              <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup3.png`)" alt="" /> -->
            </swiper-slide>
          </swiper>
          <swiper :options="guideSwiper" v-if="guideTab == 1">
            <swiper-slide>
              <img :src="require(`@/assets/images/guide/mobileApp/mobileApp.gif`)" alt="" id="guideImg" @click="imgClick()"/>
              <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup4.png`)" alt="" /> -->
            </swiper-slide>
          </swiper>
          <!-- <span class="swiper-button-prev" slot="button-prev"/>
          <span class="swiper-button-next" slot="button-next"/> -->
      </div>
      <div class="guideSnb">
        <span :class="{on:guideTab===0}"><button @click="guideTab = 0">모바일 웹</button></span>
        <span :class="{on:guideTab===1}"><button @click="guideTab = 1">모바일 APP</button></span>
        <p>모바일 웹 이용 팁을 확인해 보세요!</p>
      </div>
      <div class="guideMTxt" v-if="guideTab == 0">
        <div>
          <strong>모바일 웹 URL</strong>
          <span>m.ssamplus.com</span>
        </div>
      </div>
      <div class="guideMTxt" v-if="guideTab == 1">
        <div>
          <strong class="long">모바일 APP</strong>
          <a href=""><em>ANDROID</em> 다운로드</a>
          <a href="" class="ios"><em>IOS</em> 다운로드</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'GuideMobile',
  components: {
  },
  data() {
    return {
      guideTab: 0,
      guideSwiper: {
        slidesPerView: "auto",
        centeredSlides: true,
        navigation: { nextEl: '.guidData .swiper-button-next', prevEl: '.guidData .swiper-button-prev' },
      },
    }
  },
   methods: {
    imgClick(){
      var imgSrc = document.getElementById("guideImg").src;
      console.log(imgSrc);      
      document.getElementById("guideImg").src = imgSrc+'?number='+Math.random()*1000;
    }
	},
  computed: {
		swiper() {
			return this.$refs.playSwiper.$swiper;
		}
  },
  mounted() {
  },
}
</script>
