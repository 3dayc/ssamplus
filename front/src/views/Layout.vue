<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button> <!-- 모바일 대응 이전버튼 -->
    <!-- TopBanner -->
    <div class="topArea" v-if="!this.mobile">
      <!-- 스와이퍼 배너 -->
      <swiper class="topBannerSwiper" :options="swiperOption01">
        <swiper-slide style="background:#ffa49e;"><img :src="require(`@/assets/images/thumbnail/@tmp_sammallBanner01.png`)" alt="희소 Mall"/></swiper-slide>
        <swiper-slide style="background:#c2c6da;"><img :src="require(`@/assets/images/thumbnail/@tmp_sammallBanner02.png`)" alt="희소 Mall"/></swiper-slide>
        <swiper-slide style="background:#d5d9c0;"><img :src="require(`@/assets/images/thumbnail/@tmp_sammallBanner03.png`)" alt="희소 Mall"/></swiper-slide>
        <div class="swiper-pagination" slot="pagination"/>
      </swiper>
      <!-- //스와이퍼 배너 -->
    </div>
    <!-- //TopBanner --> <!-- 배너, 검색 등이 있을 경우에만 추가해주기 : 작업 시 본 주석은 삭제 -->
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content" style="min-height: calc(100vh / 3);">
      <article>
        <!-- page layout -->
        <div class="noClass"> <!-- class는 반드시 넣어주기 : 작업 시 본 주석은 삭제 -->
          서브메인 일 경우 본화면 시작점 입니다.<br/><br/><br/>
          서브메인 화면에서는 중간 배너가 있을 수 있습니다.
          <!-- 서브 중간 배너 -->
          <div class="bandBanner" style="background:#8e659d;">
            <router-link to="/mkup/ssammall/review/book">
              <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner02.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
              <img :src="require(`@/assets/images/thumbnail/@m_banner04.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
            </router-link>
          </div>
          <!-- //서브 중간 배너 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 메인 배너 -->
      <div class="topVisual">
          <img :src="require(`@/assets/images/img_ssammall_main.png`)" alt="" v-if="!this.mobile" />
          <img :src="require(`@/assets/images/m/img_ssammall_main.png`)" alt="" v-else-if="this.mobile" />
      </div>
      <!-- //메인 배너 -->
    </div>
    <!-- //TopBanner --> <!-- 배너, 검색 등이 있을 경우에만 추가해주기 : 작업 시 본 주석은 삭제 -->
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content" style="min-height: calc(100vh / 3);">
      <article>
        <!-- page layout -->
        <div>
           일반 서브일 경우 본화면 시작점 입니다.
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 이미지 배너 -->
      <div class="topBannerSingle" style="background:#f8927d;">
        <router-link to="">
          <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner01.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
          <img :src="require(`@/assets/images/thumbnail/@m_banner05.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
        </router-link>
      </div>
      <!-- //이미지 배너 -->
      <!-- 검색 -->
      <div class="topSearchArea">
        <div class="frameBack">
          <input type="text" placeholder="과목명, 저자명, 교재 명, 기기 브랜드, 기기명으로 검색">
          <button>검색</button>
        </div>
      </div>
      <!-- //검색 -->
    </div>
    <!-- //TopBanner --> <!-- 배너, 검색 등이 있을 경우에만 추가해주기 : 작업 시 본 주석은 삭제 -->
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content" style="min-height: calc(100vh / 3);">
      <article>
        <!-- page layout -->
        <div>
          서브메뉴가 있을 본창에 있을 경우 본화면 시작점 입니다.
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
    <!-- container -->
    <div id="container" class="subMainCase" v-if="this.mobile">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content" style="min-height:200px;">
      <article>
        <!-- page layout -->
        <div>
          모바일의 배너 케이스<br/><br/>
          <!-- Mobile Banner -->
          <div class="slidingBanner">
            <swiper :options="slidingBannerOption">
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner02.png`)" alt=""/></router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner03.png`)" alt=""/></router-link>
              </swiper-slide>
              <span class="swiper-pagination" slot="pagination"/>
            </swiper>
          </div>
          <!-- //Mobile Banner -->
          <!-- Mobile Banner2 -->
          <div class="slidingBannerCase2">
            <strong>진행중인 이벤트</strong>
            <swiper :options="slidingBannerOption2">
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner02.png`)" alt=""/></router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner03.png`)" alt=""/></router-link>
              </swiper-slide>
              <span class="swiper-pagination" slot="pagination"/>
            </swiper>
          </div>
          <!-- //Mobile Banner2 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LayoutDecument',
  components: {
  },
  data() {
    return {
      swiperOption01: {
        loop:true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      slidingBannerOption: {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".slidingBanner .swiper-pagination",
          clickable : true
        },
      },
      slidingBannerOption2: {
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 15,
      },
    }
  },
}
</script>
