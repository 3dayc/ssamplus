<template lang="html">
  <div>
    <div class="guideList">
      <div class="guidData">
        <swiper :options="guideSwiper" v-if="guideTab == 0" ref="playSwiper">
        <swiper-slide>
            <img :src="require(`@/assets/images/guide/lecture/lecture.gif`)" id="guideImg" alt="" @click="imgClick()" />
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
        <!--<swiper :options="guideSwiper" v-if="guideTab == 1" ref="playSwiper" @reachEnd="replay = true;">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lecture_play01_sample.png`)" alt="" />
          </swiper-slide>
          <swiper-slide>
            <div class="basicBg"><img :src="require(`@/assets/images/guide/lecture_play02.png`)" alt="" /></div>
            <span class="point" data-swiper-parallax="-300"><img class="imgPoint" :src="require(`@/assets/images/guide/lecture_play02_point.png`)" alt="" /></span>
          </swiper-slide>
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lecture_play03.png`)" alt="" />
            <span class="point"><img class="imgPoint" :src="require(`@/assets/images/guide/lecture_play03_point.png`)" alt="" /></span>
          </swiper-slide>
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lecture_play04.png`)" alt="" />
            <span class="point"><img class="imgPoint" :src="require(`@/assets/images/guide/lecture_play04_point.png`)" alt="" /></span>
          </swiper-slide>
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lecture_play01_sample.png`)" alt="" />
          </swiper-slide>
        </swiper>-->
        <swiper :options="guideSwiper" v-if="guideTab == 1">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lectureDateChange/lectureDateChange.gif`)" id="guideImg" alt="" @click="imgClick()"/>
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
        <swiper :options="guideSwiper" v-if="guideTab == 2">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/lectureBoard/lectureBoard.gif`)" id="guideImg" alt="" @click="imgClick()"/>
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
        <swiper :options="guideSwiper" v-if="guideTab == 3">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/supplement/supplement.gif`)" id="guideImg" alt="" @click="imgClick()"/>
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
        <swiper :options="guideSwiper" v-if="guideTab == 4">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/player/player.gif`)" id="guideImg" alt="" @click="imgClick()"/>
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
         <swiper :options="guideSwiper" v-if="guideTab == 5">
          <swiper-slide>
            <img :src="require(`@/assets/images/guide/player/player.gif`)" id="guideImg" alt="" @click="imgClick()"/>
            <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
          </swiper-slide>
        </swiper>
        <div class="replay" v-show="replay" :class="{show:replay}">
          <button class="btnReplay" @click="swiperReplay()">다시 재생</button>
        </div>
        <!-- <span class="swiper-button-prev" slot="button-prev"/>
        <span class="swiper-button-next" slot="button-next"/> -->
      </div>
      <div class="guideSnb">
        <span :class="{on:guideTab===0}"><button @click="guideTab = 0">강좌수강</button></span>
        <span :class="{on:guideTab===1}"><button @click="guideTab = 1">수강시작일 변경/홀딩</button></span>
        <span :class="{on:guideTab===2}"><button @click="guideTab = 2">첨삭게시판</button></span>
        <span :class="{on:guideTab===3}"><button @click="guideTab = 3">무료 보충강의</button></span>
        <span :class="{on:guideTab===4}"><button @click="guideTab = 4">플레이어 창</button></span>
        <p>강의수강 PLAY 팁을 확인해 보세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'GuideLecture',
  components: {
  },
  data() {
    return {
      guideTab: 0,
      replay: false,
      guideSwiper: {
        effect: 'fade',
        slidesPerView: 1,
        touchRatio: 0,
        centeredSlides: true,
        autoHeight : true,
        resistance : false,
        loop: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        },
        // navigation: { nextEl: '.guidData .swiper-button-next', prevEl: '.guidData .swiper-button-prev' },       
      },
    }
  },
  methods: {
    swiperReplay() {
      this.replay = false;
      this.$refs.playSwiper.$swiper.slideTo(0, 0);
      this.$refs.playSwiper.$swiper.autoplay.start();
    },
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
  }
}
</script>
