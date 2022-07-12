<template lang="html">
  <div>
    <div class="smartChoiceList">
      <swiper :options="swiperOption01">
        <swiper-slide>
          <span>
            교육학<strong>김현</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            교육학<strong>윤중샘</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            중국어<strong>희소중국어팀</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            중국어<strong>한정은</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            중국어<strong>이해진</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
        <swiper-slide>
          <span>
            영어<strong>류지원</strong>
            <button class="btnDelete">삭제</button>
          </span>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"/>
      <div class="swiper-button-next" slot="button-next"/>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartSubjectChoiced',
  components: {
  },
  data() {
    return {
      swiperOption01: {
        slidesPerView: 'auto',
        loop:false,
        spaceBetween: 10,
        navigation: { nextEl: '.smartChoiceList .swiper-button-next', prevEl: '.smartChoiceList .swiper-button-prev' },
      },
    }
  },
}
</script>
