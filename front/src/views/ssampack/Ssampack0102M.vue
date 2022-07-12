<template lang="html">
  <div class="ElderCheckm_wrap">
    <!-- 슬라이드 -->
    <div class="swiper-container s0102m" >
      <swiper class="swiper-wrapper" :options="s0102m">
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/cnt_0102_01m.jpg`)"alt="" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/cnt_0102_02m.jpg`)"alt="" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/cnt_0102_03m.jpg`)"alt="" />
        </swiper-slide>
      </swiper>
      <span class="swiper-pagination dotCase" slot="pagination"/>
    </div>
    <!-- 슬라이드 //-->
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0102M",
  data() {
    return {
      s0102m : {
        slidesPerView : 1,
        loop:true,
        spaceBetween : 0,
        speed: 2000,
        autoplay : {
          delay: 2500,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        pagination: {
          el: ".s0102m .swiper-pagination",
          clickable : true,
        },
      },
    };
  },
};
</script>
