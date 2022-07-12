<template lang="html">
  <div>
    <!-- 모바일용 -->
    <div class="mainBannerMcase">
      <swiper :options="mainOption01" ref="mainSwiper" @slideChange="slideChange">
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM7.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/special/event/view1"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM8.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/special/event/view3"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM3.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM4.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM5.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSampleM6.png`)" alt="" /></router-link>
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
    <!-- //모바일용 -->
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
        slidesPerView: "1",
        centeredSlides: true,
        loop:true,
        swiperPlayToggle: false,
        speed: 1000,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".mainBannerMcase .swiper-pagination",
          clickable : true,
          renderBullet: function (index, className) {
            let menu = ['5~6월 온라인 청강','교육학 필수특강 확인','OMR 노트','재학생 썸머스쿨','2022대비 하반기쌤팩','문풀/모고 하반기 합격전략!'];
            return '<span class="' + className + '"><em>' + (menu[index]) + '</em></span>';
          },
        },
        navigation: { nextEl: '.mainBannerMcase .swiper-button-next', prevEl: '.mainBannerMcase .swiper-button-prev' },
      },
    }
  },
  methods: {
    slideChange() {
      this.aLinkToMedium = this.$refs.mainSwiper.$swiper.realIndex+1;
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
  },
  mounted() {
  }
}
</script>
