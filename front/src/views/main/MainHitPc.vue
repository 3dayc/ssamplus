<template lang="html">
  <div>
    <swiper class="cardSwiper" :options="mainOption04">
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">언택트 특수교육학</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
            <span class="txt">
              <strong>#특수 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">교육과정 운영</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare02.png`)" alt=""/></span>
            <span class="txt">
              <strong>#교육학 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">미술 평판화 연마과정</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare03.png`)" alt=""/></span>
            <span class="txt">
              <strong>#교육학 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">미술 평판화 연마과정</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare04.png`)" alt=""/></span>
            <span class="txt">
              <strong>#교육학 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">언택트 특수교육학</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare05.png`)" alt=""/></span>
            <span class="txt">
              <strong>#교육학 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <span class="tit">교육과정 운영</span>
          <span class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </span>
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare06.png`)" alt=""/></span>
            <span class="txt">
              <strong>#교육학 한경</strong>
              <em>#교육과정B 5번</em>
            </span>
          </div>
        </router-link>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"/>
      <div class="swiper-button-next" slot="button-next"/>
    </swiper>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainHitPc.vue',
  components: {
  },
  data() {
    return {
      mainOption04: {
        effect: "coverflow",
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
        grabCursor: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 149,
          depth: 190,
          // modifier: 1,
          slideShadows: true
        },
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false
        // },
        navigation: { nextEl: '.mainHit .swiper-button-next', prevEl: '.mainHit .swiper-button-prev' },
      }
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
