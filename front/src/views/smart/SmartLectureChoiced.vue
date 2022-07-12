<template lang="html">
  <div>
    <div class="smartChoiceList lecCase">
      <swiper :options="swiperOption02">
        <swiper-slide>
          <span>
            [교육학 김현] <em>연간쌤팩 베이직</em><strong>1,356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 윤중샘] <em>심화이론반1 심화이론반1</em><strong>356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 윤중샘] <em>심화이론반2</em><strong>356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 김현] <em>연간쌤팩 베이직</em><strong>1,356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 윤중샘] <em>심화이론반1</em><strong>356,600<i>원</i></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            [교육학 윤중샘] 심화이론반2<strong>356,600 <em>원</em></strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"/>
      <div class="swiper-button-next" slot="button-next"/>
    </div>
    <span class="totalPrice">
      예상 결제 금액
      <span><strong>2,068,000</strong> 원</span>
    </span>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartLectureChoiced',
  components: {
  },
  data() {
    return {
      swiperOption02: {
        slidesPerView: 'auto',
        loop:false,
        spaceBetween: 10,
        navigation: { nextEl: '.smartChoiceList.lecCase .swiper-button-next', prevEl: '.smartChoiceList.lecCase .swiper-button-prev' },
      },
    }
  },
}
</script>
