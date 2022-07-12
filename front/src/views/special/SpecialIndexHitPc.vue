<template lang="html">
  <div>
  <swiper :options="swiperOption02">
    <swiper-slide>
      <router-link to="/mkup/special/hit/view1">
        <span class="picBox">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
          <strong class="txt">
            <em>교육학 김현</em>2021학년도 전공A형 1번
          </strong>
        </span>
        <p>스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 김현 선생님의 놀라운 적중률. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 김현 선생님의 놀라운 적중률</p>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/mkup/special/hit/view1">
        <span class="picBox">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare02.png`)" alt=""/></span>
          <strong class="txt">
            <em>교육학 한경</em>교육과정B 5번
          </strong>
        </span>
        <p>스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다.</p>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/mkup/special/hit/view1">
        <span class="picBox">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
          <strong class="txt">
            <em>교육학 김현</em>2021학년도 전공A형 1번
          </strong>
        </span>
        <p>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등 맞힐 수 있었습니다. 합격해서 찾아뵙겠습니다. 코로나 조심하시고, 항상 건강하세요.</p>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/mkup/special/hit/view1">
        <span class="picBox">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
          <strong class="txt">
            <em>교육학 김현</em>2021학년도 전공A형 1번
          </strong>
        </span>
        <p>스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다.</p>
      </router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/mkup/special/hit/view1">
        <span class="picBox">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt=""/></span>
          <strong class="txt">
            <em>교육학 김현</em>2021학년도 전공A형 1번
          </strong>
        </span>
        <p>스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 스나이더 충실관점부터 온라인학습, 의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다.</p>
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
  name: 'SpecialIndexHitPc',
  components: {
  },
  data() {
    return {
      swiperOption02: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: { nextEl: '.spRealHit .swiper-button-next', prevEl: '.spRealHit .swiper-button-prev' },
      },
    }
  },
}
</script>
