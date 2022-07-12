<template lang="html">
  <div>
    <div class="bothArrows scholarshipKind">
      <swiper :options="swiperOption02">
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_inside_scholarship.png`)" alt="" /></router-link>
        </swiper-slide>
      </swiper>
      <div class="mbPage">
        <span class="swiper-button-prev" slot="button-prev"/>
        <span class="swiper-button-next" slot="button-next"/>
      </div>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import Aos from '@/plugins/aos';

export default {
  mixins: [Mixin],
  name: 'scholarshipKindPc',
  components: {
  },
  data() {
    return {
      swiperOption02: {
        effect: "coverflow",
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
        grabCursor: true,
        swiperPlayToggle: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 270,
          depth: 80,
          modifier: 4.3,
          slideShadows: true
        },
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        navigation: { nextEl: '.scholarshipKind .swiper-button-next', prevEl: '.scholarshipKind .swiper-button-prev' },
      }
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
