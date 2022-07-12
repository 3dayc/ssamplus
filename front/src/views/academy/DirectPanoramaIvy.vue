<template lang="html">
  <div>
    <div class="panorama02">
      <swiper :options="swiperSubOption02">
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama01.png`)" alt="" /></div>
          <em>접수 및 상담 안내 데스크</em>
        </swiper-slide>
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama02.png`)" alt="" /></div>
          <em>자율학습공간</em>
        </swiper-slide>
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama03.png`)" alt="" /></div>
          <em>스터디 공간</em>
        </swiper-slide>
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama01.png`)" alt="" /></div>
          <em>접수 및 상담 안내 데스크</em>
        </swiper-slide>
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama02.png`)" alt="" /></div>
          <em>자율학습공간</em>
        </swiper-slide>
        <swiper-slide>
          <div><img :src="require(`@/assets/images/thumbnail/@tmp_academy_panorama03.png`)" alt="" /></div>
          <em>스터디 공간</em>
        </swiper-slide>
      </swiper>
      <div class="swiperProgressSet">
        <span class="swiper-pagination" slot="pagination"/></span>
        <span class="swiper-button-prev" slot="button-prev"/></span>
        <span class="swiper-button-next" slot="button-next"/></span>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'DirectPanoramaIvy',
  components: {
  },
  data() {
    return {
      swiperSubOption02: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
        loop:true,
        pagination: {
          el: ".panorama02 .swiper-pagination",
          type: "fraction"
        },
        autoplay: true,
        navigation: { nextEl: '.panorama02 .swiper-button-next', prevEl: '.panorama02 .swiper-button-prev' }
      },
    }
  },
}
</script>
