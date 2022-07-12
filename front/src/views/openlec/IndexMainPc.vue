<template lang="html">
  <div>
    <!-- 메인슬라이드 -->
    <div class="indexMain">
      <swiper :options="swiperOption01" ref="mainSwiper">
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video2.png`)" alt="" /></span>
        </swiper-slide>
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video3.png`)" alt="" /></span>
        </swiper-slide>
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video1.png`)" alt="" /></span>
        </swiper-slide>
      </swiper>
      <div class="mbPage">
        <span class="swiper-button-prev" slot="button-prev"/>
        <span class="swiper-button-next" slot="button-next"/>
      </div>
      <span class="swiper-pagination" slot="pagination"/>
    </div>
    <!-- //메인슬라이드 -->
    <!-- 하이라이트 -->
    <div class="indexHighlight">
      <div class="frameBack">
        <div class="subTit">
          <!-- <img src="/img/openlec_icon1.png" alt=""> -->
          <h3>핵심만 모아보자, <strong>강의 하이라이트</strong></h3>
        </div>
        <div class="bothArrows">
          <swiper :options="swiperOption02">
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle022" class="btnTcHomeName"><i>영어</i> 차미아 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teacher" class="btnTcHomeName"><i>국어</i> 이정훈 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle042" class="btnTcHomeName"><i>음악</i> 서민정 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle042" class="btnTcHomeName"><i>음악</i> 서민정 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"/>
          <div class="swiper-button-next" slot="button-next"/>
        </div>
        <router-link to="/mkup/openlec/highlight" class="btnL line rnd">강의 하이라이트 더보기</router-link>
      </div>
    </div>
    <!-- //하이라이트 -->
    <!-- 기출 -->
    <div class="indexComment">
      <div class="frameBack">
        <div class="subTit">
          <h3>다 알려 줄게, <strong>기출해설</strong></h3>
        </div>
        <div class="bothArrows">
          <swiper :options="swiperOption03">
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle022" class="btnTcHomeName"><i>영어</i> 차미아 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teacher" class="btnTcHomeName"><i>국어</i> 이정훈 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle042" class="btnTcHomeName"><i>음악</i> 서민정 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"/>
          <div class="swiper-button-next" slot="button-next"/>
        </div>
        <router-link to="/mkup/openlec/comment" class="btnL line rnd">기출해설 더보기</router-link>
      </div>
    </div>
    <!-- //기출 -->
    <!-- //설명회 -->
    <div class="indexPresentation">
      <div class="frameBack">
        <div class="subTit">
          <h3>임린이들이 챙겨봐야 할 <strong>설명회</strong></h3>
        </div>
        <div class="bothArrows">
          <swiper :options="swiperOption04">
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle022" class="btnTcHomeName"><i>영어</i> 차미아 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teacher" class="btnTcHomeName"><i>국어</i> 이정훈 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle042" class="btnTcHomeName"><i>음악</i> 서민정 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="openLecThumbnail">
                <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"/>
          <div class="swiper-button-next" slot="button-next"/>
        </div>
        <router-link to="/mkup/openlec/presentation" class="btnL line rnd">설명회 더보기</router-link>
      </div>
    </div>
    <!-- //설명회 -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndexMainPc',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
      swiperOption01: {
        effect: "coverflow",
        slidesPerView: 'auto',
        centeredSlides: true,
        loop:true,
        grabCursor: true,
        swiperPlayToggle: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 138,
          depth: 60,
          modifier: 3.0,
          slideShadows: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".indexMain .swiper-pagination",
          clickable : true,
          renderBullet: function (index, className) {
            let menu = ['<strong>국어</strong> 고득점을 원한다면 <strong>송헌 선생님</strong>의 하이라이트 체크는 필수','<strong>역사</strong> 고득점을 원한다면 <strong>반철진 선생님</strong>의 하이라이트 체크는 필수','<strong>교육학</strong> 고득점을 원한다면 <strong>김현 선생님</strong>의 하이라이트 체크는 필수<strong>국어</strong> 고득점을 원한다면 <strong>송헌 선생님</strong>의 하이라이트 체크는 필수'];
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          },
        },
        navigation: { nextEl: '.indexMain .swiper-button-next', prevEl: '.indexMain .swiper-button-prev' },
      },
      swiperOption02: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop:true,
        spaceBetween: 26,
        navigation: { nextEl: '.indexHighlight .swiper-button-next', prevEl: '.indexHighlight .swiper-button-prev' },
      },
      swiperOption03: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop:true,
        spaceBetween: 26,
        navigation: { nextEl: '.indexComment .swiper-button-next', prevEl: '.indexComment .swiper-button-prev' },
      },
      swiperOption04: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop:true,
        spaceBetween: 26,
        navigation: { nextEl: '.indexPresentation .swiper-button-next', prevEl: '.indexPresentation .swiper-button-prev' },
      },
    }
  },
}
</script>
