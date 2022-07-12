<template lang="html">
<div>
  <div class="ElderCheck_wrap">
    <!-- 슬라이드 -->
    <div class="swiper-container">
      <swiper class="swiper-wrapper" :options="s0102pc">
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩을 듣고 1년 동안 참 행복했습니다.</p>
          <h6 class="ElderCheck-Id">- dal***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">썜팩은 전체 내용을 이해하는 데 가장 좋았습니다.</p>
          <h6 class="ElderCheck-Id">- alw***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩을 듣고 1년 동안 참 행복했습니다.</p>
          <h6 class="ElderCheck-Id">- dal***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">
            쌤팩으로 중요한 부분을 잘 알려주셔서 끝까지 따라갈 수 있었습니다.
          </p>
          <h6 class="ElderCheck-Id">- jcl***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩을 통해 기본이론부터 천천히 시작할 수 있었습니다.</p>
          <h6 class="ElderCheck-Id">- dae***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩이 있어 1년 안에 초수합격을 할 수 있었습니다.</p>
          <h6 class="ElderCheck-Id">- jis***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">
            쌤팩을 들으니 강의를 놓치지 않고 따라가려는 습관이 생겼습니다.
          </p>
          <h6 class="ElderCheck-Id">- min***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩으로 꼼꼼하게 학습해 높은 점수로 합격했습니다.</p>
          <h6 class="ElderCheck-Id">- sae***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">
            공부한 지 오래되어 막막했지만 쌤팩으로 명확한 학습이 가능했습니다.
          </p>
          <h6 class="ElderCheck-Id">- dan***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">
            쌤팩을 통해 출제자가 원하는 키워드가 무엇인지를 깨달았습니다.
          </p>
          <h6 class="ElderCheck-Id">- hjo***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩 선택은 최고의 선택이었다고 생각합니다.</p>
          <h6 class="ElderCheck-Id">- jmk***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩을 통해 단순 암기가 아닌 이해하는 습관을 들였습니다.</p>
          <h6 class="ElderCheck-Id">- hyn***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩은 체계적인 학습을 가능하게 만들어줍니다.</p>
          <h6 class="ElderCheck-Id">- kim***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">쌤팩을 듣고 1년 동안 참 행복했습니다.</p>
          <h6 class="ElderCheck-Id">- dal***** -</h6>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <p class="ElderCheck-content">썜팩은 전체 내용을 이해하는 데 가장 좋았습니다.</p>
          <h6 class="ElderCheck-Id">- alw***** -</h6>
        </swiper-slide>
      </swiper>
      <span class="swiper-notification"></span>
    </div>
    <!-- 슬라이드 //-->
  </div>
  <!-- 합격선배의 이유있는 선택 //-->
  <img :src="require(`@/assets/images/ssampackEvent/cnt_0102.jpg`)" alt="" />
</div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0102Pc",
  data() {
    return {
      s0102pc : {
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
