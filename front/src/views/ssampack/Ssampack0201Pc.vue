<template>
<div>
  <!-- 합격에 필요한 모든것 -->
  <div class="PassSubjectWrap">
    <!-- 슬라이드 -->
    <div class="swiper-container s0201pc">
      <swiper class="swiper-wrapper" :options="s0201pc">
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_01.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_02.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_03.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_04.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_05.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_06.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_07.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_08.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_09.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_10.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_11.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_12.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_13.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_14.jpg`)"
            alt=""
          />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img
            :src="require(`@/assets/images/ssampackEvent/img_PassSubjec_15.jpg`)"
            alt=""
          />
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
    <!-- 슬라이드 //-->
  </div>
  <!-- 합격에 필요한 모든것 //-->
  <img :src="require(`@/assets/images/ssampackEvent/cnt_0201.jpg`)" alt="" />
</div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0201Pc",
  data() {
    return {
      s0201pc: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        pagenation: {
          el: ".s0201pc .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".s0201pc .swiper-button-next",
          prevEl: ".s0201pc .swiper-button-prev",
        },
      },
    };
  },
};
</script>
