<template lang="html">
  <div>
    <!-- 메인비쥬얼 이미지 -->
    <div class="mainBanner tC">
      <swiper :options="mainOption01" ref="mainSwiper" @slideChange="slideChange">
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample1.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/special/event/view1"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample2.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/special/event/view3"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample3.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample4.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample5.jpg`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample6.png`)" alt="" /></router-link>
        </swiper-slide>
      </swiper>
      <div class="mbPage">
        <span class="swiper-pagination" slot="pagination"/>
        <span class="swiperPlayToggle">
          <button class="btnSToggle stop" v-if="swiperPlayToggle == false" @click="stopAuto()" >정지</button>
          <button class="btnSToggle play" v-if="swiperPlayToggle == true" @click="playAuto()">재생</button>
          <span><strong v-html="aLinkToMedium">1</strong>/<em v-html="aLinkToMedium2">6</em></span>
        </span>
        <span class="swiper-button-prev" slot="button-prev"/>
        <span class="swiper-button-next" slot="button-next"/>
      </div>
    </div>
    <!-- //메인비쥬얼 이미지 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainBanner.vue',
  components: {
  },
  data() {
    return {
      aLinkToMedium:'1',
      aLinkToMedium2:'6',
      swiperPlayToggle: false,
      mainOption01: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop:true,
        coverflowEffect: {
          rotate: 0,
          stretch: 205,
          depth: 50,
          modifier: 4,
          slideShadows: false
        },
        pagination: {
          el: ".mainBanner .swiper-pagination",
          clickable : true,
          renderBullet: function (index, className) {
            let menu = ['5~6월 온라인 청강','교육학 필수특강 할인','OMR 노트','재학생 썸머스쿨','2022대비 하반기쌤팩','문풀/모고 하반기 합격전략!'];
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          },
        },
        navigation: { nextEl: '.mainBanner .swiper-button-next', prevEl: '.mainBanner .swiper-button-prev' },
      },
    }
  },
  methods: {
    slideChange() {
      this.aLinkToMedium = this.$refs.mainSwiper.$swiper.realIndex+1;
      this.aLinkToMedium2 = this.$refs.mainSwiper.$swiper.loopedSlides;
    },
    stopAuto() {
      this.swiperPlayToggle = true;
      this.$refs.mainSwiper.$swiper.autoplay.stop();
    },
    playAuto() {
      this.swiperPlayToggle = false;
      this.$refs.mainSwiper.$swiper.autoplay.start();
    },
	},
  computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		}
  },
  mounted() {
  }
}
</script>
