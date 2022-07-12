<template lang="html">
  <div>
    <div class="smartChoiceList lecCase last">
      <swiper :options="swiperOption03">
        <swiper-slide>
          <span>
            [교육학 김현] <em>류지원 영어교육학 기출문제집</em><strong>1,356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 윤중샘] <em>기출문제집</em><strong>356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"/>
      <div class="swiper-button-next" slot="button-next"/>
    </div>
    <span class="totalPrice">
      예상 결제 금액
      <span><strong>46,000</strong> 원</span>
    </span>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartBookChoiced',
  components: {
  },
  data() {
    return {
      swiperOption03: {
        slidesPerView: 'auto',
        loop:false,
        spaceBetween: 10,
        navigation: { nextEl: '.smartChoiceList.lecCase.last .swiper-button-next', prevEl: '.smartChoiceList.lecCase.last .swiper-button-prev' },
      },
    }
  },
}
</script>
