<template lang="html">
  <div>
    <swiper :options="mainOption042">
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 김현</em>
              <strong>2021학년도 전공A형 1번</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요. 마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare02.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 한경</em>
              <strong>교육과정B 5번</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare03.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 한경</em>
              <strong>미술 평판화 연마과정</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare04.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 한경</em>
              <strong>미술 평판화 연마과정</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare05.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 한경</em>
              <strong>미술 평판화 연마과정</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="/mkup/special/hit/view1">
          <div class="picBox">
            <span class="pic"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare06.png`)" alt=""/></span>
            <span class="txt">
              <em>교육학 한경</em>
              <strong>미술 평판화 연마과정</strong>
            </span>
          </div>
          <div class="intro">
            마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.
          </div>
        </router-link>
      </swiper-slide>
      <!-- <span class="swiper-pagination dotCase" slot="pagination"/> -->
    </swiper>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainHitM',
  components: {
  },
  data() {
    return {
      mainOption042: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        loop:true,
        // pagination: {
        //   el: ".mainHit .swiper-pagination",
        //   clickable : true
        // },
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
