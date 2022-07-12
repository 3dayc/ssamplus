<template lang="html">
<div>
  <!-- 합격선배의 이유있는 선택 -->
  <div class="ElderCheck_wrap1">
    <!-- 슬라이드 -->
    <div class="swiper-container">
      <swiper class="swiper-wrapper" :options="s0202pc">
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            교재 무배 쿠폰이 3개나 제공되어<br />유용하게 쓸 수 있었습니다.
          </p>
          <h6 class="ElderCheck-Id1">- wja***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            프리미엄 회원들만을 위한 소통 채널이 따로 있어서<br />챙김 받는 기분이
            듭니다.
          </p>
          <h6 class="ElderCheck-Id1">- pok***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            빨리 마감되는 희소 모의고사를<br />무료로 응시할 수 있게 해주셔서
            감사합니다.
          </p>
          <h6 class="ElderCheck-Id1">- hyn***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            전담 매니저가 있어서 가까이에서<br />소통이 원활하게 이루어지는 점이
            좋습니다.
          </p>
          <h6 class="ElderCheck-Id1">- yuj***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            상반기 이론 복습용 강의를<br />전부 무료로 제공한 점이 만족스럽습니다.
          </p>
          <h6 class="ElderCheck-Id1">- ysr***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            필요할 때 직, 인강 전환이 자유로운 점이<br />학습에 유용했습니다.
          </p>
          <h6 class="ElderCheck-Id1">- plu***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            관리 받는 기분이 들어 신기합니다.<br />세심한 부분에 늘 감사드립니다.
          </p>
          <h6 class="ElderCheck-Id1">- alw***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            유료 결제가 필요한 기간 연장 서비스를<br />무료로 제공받을 수 있는 점이
            최고입니다.
          </p>
          <h6 class="ElderCheck-Id1">- dnf***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            희소와 프리미엄 회원들 만의 상호작용이 좋았습니다.
          </p>
          <h6 class="ElderCheck-Id1">- hbk***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            프리미엄 회원만 들어갈 수 있는 전용 라운지가 있어<br />특별한 느낌을
            받았습니다.
          </p>
          <h6 class="ElderCheck-Id1">- nov***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            교재 무배 쿠폰이 3개나 제공되어<br />유용하게 쓸 수 있었습니다.
          </p>
          <h6 class="ElderCheck-Id1">- wja***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content1">
            프리미엄 회원들만을 위한 소통 채널이 따로 있어서<br />챙김 받는 기분이
            듭니다.
          </p>
          <h6 class="ElderCheck-Id1">- pok***** -</h6>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 슬라이드 //-->
  </div>
  <!-- 합격선배의 이유있는 선택 //-->
  <img :src="require(`@/assets/images/ssampackEvent/cnt_0202.jpg`)" alt="" />
</div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0202Pc",
  data() {
    return {
      s0202pc : {
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        slidesPerView : 1,
        loop:true,
        spaceBetween : 0,
        speed: 2000,
        autoplay : {
          delay: 2500,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
      },
    };
  },
};
</script>
