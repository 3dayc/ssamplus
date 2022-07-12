<template lang="html">
  <div class="rollinTeacher">
    <!-- Slider main container -->
    <div class="swiper-container">
      <!-- Additional required wrapper -->
      <swiper class="swiper-wrapper" :options="s0103pc">
        <!-- Slides -->
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_01.png`)" alt="유아" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_02.png`)" alt="교육학" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_03.png`)" alt="국어" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_04.png`)" alt="수학" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_05.png`)" alt="음악" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_06.png`)" alt="미술" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_07.png`)" alt="쳬육" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_08.png`)" alt="중`)국어/일본어" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_09.png`)" alt="한문/가정/미용" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_10.png`)" alt="전문상담/보건" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_11.png`)" alt="역사/지리" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_12.png`)" alt="`)화학/생물" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_13.png`)" alt="특수" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img :src="require(`@/assets/images/ssampackEvent/rollin_Teacher_14.png`)" alt="한국사" />
        </swiper-slide>
      </swiper>
      <!-- If we need pagination -->
      <div class="swiper-pagination" slot="pagination">
        <!-- <span>유아</span>
        <span>교육학</span>
        <span>국어</span>
        <span>수학</span>
        <span>음악</span>
        <span>미술</span>
        <span>체육</span>
        <span>중국어 / 일본어</span>
        <span>한문 / 가정 / 미용</span>
        <span>전문상담 / 보건</span>
        <span>역사 / 지리</span>
        <span>화학 / 생물</span>
        <span>특수</span>
        <span>한국사</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0103Pc",
  data() {
    return {
      s0103pc: {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        spaceBetween: 0,
        pagination: {
          el: ".cnt_0103 .swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            let bullet = [
              "유아",
              "교육학",
              "국어",
              "수학",
              "음악",
              "미술",
              "체육",
              "중국어 / 일본어",
              "한문 / 가정 / 미용",
              "전문상담 / 보건",
              "역사 / 지리",
              "화학 / 생물",
              "특수",
              "한국사",
            ];
            return '<div class="' + className + '"><span>' + bullet[index] + "</span></div>";
          },
        },
      },
    };
  },
};
</script>
