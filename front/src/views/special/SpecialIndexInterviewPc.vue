<template lang="html">
  <div class="spInterviewArea">
    <swiper class="interviewSwiper" :options="swiperOption03">
      <swiper-slide>
        <span class="img videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamInterview01.png`)" alt=""/></span>
        <router-link to="/mkup/special/interview">
          <span class="introBox">
            <strong>좋은 선생님은 좋은 사람</strong>
            <span class="introTxt">예시의 여왕 키위 교육학 김현 선생님의 모습을 영상으로 만나보세요.</span>
          </span>
        </router-link>
        <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">교육학 / 김현 선생님</router-link>
      </swiper-slide>
      <swiper-slide>
        <span class="img videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamInterview02.png`)" alt=""/></span>
        <router-link to="/mkup/special/interview">
          <span class="introBox">
            <strong>물리의 매력에 빠지다!</strong>
            <span class="introTxt">전공물리 최민영 선생님의 물리교육의 가치관에 대해 만나봅니다.</span>
          </span>
        </router-link>
        <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">중등 / 물리 최민영 선생님</router-link>
      </swiper-slide>
      <swiper-slide>
        <span class="img videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamInterview03.png`)" alt=""/></span>
        <router-link to="/mkup/special/interview">
          <span class="introBox">
            <strong>교육학 선생님의 나침반</strong>
            <span class="introTxt">교육학 논술의 권위자, 권구현 선생님의 때로는 진지하고 때로는 유머러스한 모습, 지금 영상으로 만나봅니다.</span>
          </span>
        </router-link>
        <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">교육학 / 권구현 선생님</router-link>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"/>
    <div class="swiper-button-next" slot="button-next"/>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SpecialIndexInterviewPc',
  components: {
  },
  data() {
    return {
      swiperOption03: {
        slidesPerView: 3,
        spaceBetween: 25,
        loop:true,
        navigation: { nextEl: '.spInterviewArea .swiper-button-next', prevEl: '.spInterviewArea .swiper-button-prev' },
      },
    }
  },
}
</script>
