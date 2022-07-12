<template>
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- TopBanner -->
    <div class="topArea">
      <!-- 메인 배너 -->
      <!-- <div class="topVisual">
        <swiper :options="mainOption01" class="topSwiper">
          <swiper-slide>
            <router-link to="/mkup/bbs/event/ing">
              <img :src="require(`@/assets/images/img_ssammall_main_2.png`)" alt="" v-if="!this.mobile"/>
              <img :src="require(`@/assets/images/m/img_ssammall_main.png`)" alt="" v-else-if="this.mobile"/>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="/mkup/special/event/view1">
              <img :src="require(`@/assets/images/img_ssammall_main_2.png`)" alt="" v-if="!this.mobile" />
              <img :src="require(`@/assets/images/m/img_ssammall_main.png`)" alt="" v-else-if="this.mobile" />
            </router-link>
          </swiper-slide>
        </swiper>
      </div> -->
      <!-- 20220317 수정 : 삭제 -->
      <div class="topVisual">
          <router-link to="/mkup/bbs/event/ing">
            <img :src="require(`@/assets/images/img_ssammall_main_2.png`)" alt="" v-if="!this.mobile"/>
            <img :src="require(`@/assets/images/m/img_ssammall_main.png`)" alt="" v-else-if="this.mobile"/>
          </router-link>
      </div>
      <!-- //메인 배너 -->
      <!-- LeftBanner -->
      <div class="leftAdArea ssammallCase" v-if="!this.mobile">
        <span class="adItem type1x2">
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner01.png`)" alt=""/></router-link>
        </span>
        <span class="adItem type1x2">
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner02.png`)" alt=""/></router-link>
        </span>
        <span class="adItem type1x1">
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner07.png`)" alt=""/></router-link>
        </span>
      </div>
      <!-- //LeftBanner -->
      <!-- Mobile Banner (Pc버전의 LeftBanner 대체) -->
      <div class="slidingBannerCase2" v-if="this.mobile">
        <strong>진행중인 이벤트</strong>
        <swiper :options="slidingBannerOption2">
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner02.png`)" alt=""/></router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
          </swiper-slide>
        </swiper>
      </div>
      <!-- //Mobile Banner (Pc버전의 LeftBanner 대체) -->
      <!-- 검색 -->
      <div class="topSearchArea">
        <div :class="{listSearch:this.mobile === true, frameBack:!this.mobile === true}">
          <input type="text" placeholder="과목명, 저자명, 교재 명, 기기 브랜드, 기기명으로 검색">
          <!-- <button>검색</button> -->
          <router-link to="/mkup/ssammall/search" :class="{btnSearch:this.mobile === true}">검색</router-link>
        </div>
      </div>
      <!-- //검색 -->
    </div>
    <!-- //TopBanner -->
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="ssammallIndex">
          <!-- 핵심을 찌르는 신간 교재 -->
          <div class="newBook">
            <div class="frameBack" v-if="!this.mobile">
              <IndexNewBookPc />
            </div>
            <div class="frameBack" v-else-if="this.mobile">
              <IndexNewBookM />
            </div>
          </div>
          <!-- //핵심을 찌르는 신간 교재 -->
          <!-- 백퍼 추천하는 솔직 후기 -->
          <div class="bestReview">
            <div class="frameBack" v-if="!this.mobile">
                <IndexBestReviewPc />
            </div>
            <div class="frameBack" v-else-if="this.mobile">
                <IndexBestReviewM />
            </div>
          </div>
          <!-- //백퍼 추천하는 솔직 후기 -->
          <!-- 서브 중간 배너 -->
          <div class="bandBanner">
            <router-link to="/mkup/ssammall/review/book">
              <img :src="require(`@/assets/images/thumbnail/@tmp_bandBanner02.png`)" alt="백퍼후기 이벤트"  v-if="!this.mobile" />
              <img :src="require(`@/assets/images/thumbnail/@m_banner04.png`)" alt="백퍼후기 이벤트"  v-else-if="this.mobile" />
            </router-link>
          </div>
          <!-- //서브 중간 배너 -->
          <!-- 온라인 강의를 위한 추천 기기 -->
          <div class="bestDevice">
            <div class="frameBack">
              <div class="subTit noLine"><h3>온라인 강의를 위한 추천 기기</h3></div>
              <IndexBestDevicePc v-if="!this.mobile" />
              <IndexBestDeviceM v-else-if="this.mobile"/>
            </div>

          </div>
          <!-- //온라인 강의를 위한 추천 기기 -->
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
import IndexNewBookPc from '@/views/ssammall/IndexNewBookPc.vue';
import IndexNewBookM from '@/views/ssammall/IndexNewBookM.vue';
import IndexBestReviewPc from '@/views/ssammall/IndexBestReviewPc.vue';
import IndexBestReviewM from '@/views/ssammall/IndexBestReviewM.vue';
import IndexBestDevicePc from '@/views/ssammall/IndexBestDevicePc.vue';
import IndexBestDeviceM from '@/views/ssammall/IndexBestDeviceM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    IndexNewBookPc,
    IndexNewBookM,
    IndexBestReviewPc,
    IndexBestReviewM,
    IndexBestDevicePc,
    IndexBestDeviceM,
  },
  data() {
    return {
      // mainOption01: {
      //   centeredSlides: true,
      //   spaceBetween: 0,
      //   slidesPerView: 1,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false
      //   },
      //   loop:true,
      // }, // 20220317 수정 : 삭제
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
        // speed: 2000,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        // pagination: {
        //   el: ".slidingBanner .swiper-pagination",
        //   clickable : true
        // },
      },
    }
  },
}
</script>
