<template lang="html">
  <div>
    <div class="successfulSwiper">
      <div class="tt">희소/쌤플러스 2020 최종 합격자 명단</div>
      <swiper :options="successSwiperOption">
        <swiper-slide>
          <span>2021 보건 부산 합격자 공*정</span>
          <span>2021 전문상담 인천 합격자 이*수</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 유아 경기 합격자 심*연</span>
          <span>2021 보건 서울 합격자 김*희</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 초등특수 서울 합격자 옥*미</span>
          <span>2021 보건 경기 합격자 김*희</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 보건 대구 합격자 김*은</span>
          <span>2021 중등특수 경기 합격자 조*진</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 국어 서울 합격자 변*진</span>
          <span>2021 보건 서울 합격자 김*진</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 보건 전남 합격자 정*민</span>
          <span>2021 역사 전북 합격자 이*희</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 유아특수 충북 합격자 송*빈</span>
          <span>2021 가정 경기 합격자 정*아</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 보건 서울 합격자 노*령</span>
          <span>2021 유아 서울 합격자 이*슬</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 초등특수 인천 합격자 박*진</span>
          <span>2021 중등특수 경기 합격자 윤*암</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 중등특수 대전 합격자 이*샘</span>
          <span>2021 일본어 전북 합격자 김*하</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 보건 부산 합격자 백*미</span>
          <span>2021 전문상담 서울 합격자 성*은</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 지리 경기 합격자 강*정</span>
          <span>2021 일반사회 제주 합격자 김*리</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 보건 서울 합격자 손*진</span>
          <span>2021 국어 제주 합격자 김*주</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 유아 서울 합격자 김*선</span>
          <span>2021 역사 강원 합격자 위*우</span>
        </swiper-slide>
        <swiper-slide>
          <span>2021 국어 서울 합격자 김*재</span>
          <span>2021 미술 울산 합격자 김*윤</span>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'successfulSwiperM',
  components: {
  },
  data() {
    return {
      menuTab:0,
      currentTab: 0,
      currentTab2: 0,
      currentTab3: 0,
      successSwiperOption: {
        slidesPerView: 7,
        spaceBetween: 6,
        loop:true,
        direction: "vertical",
        speed: 1300,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        touchRatio: 0, //드래그 금지
        mousewheel: {
          invert: false,
          forceToAxis: false,
        },
        controller: {
          inverse: false,
        },
      },
    }
  },
  methods: {
  },
  mounted() {
  },
  destroyed() {
  },
}
</script>
