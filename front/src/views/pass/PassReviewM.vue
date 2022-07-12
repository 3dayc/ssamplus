<template lang="html">
  <div>
    <div class="passReview">
      <IndexMsgM />
      <!---->
      <div class="msgback"><PassReviewList /></div>
    </div>
    <!-- 합격수기 상세내용 Popup -->
    <Popup v-if='popupTrigger1' @close="popupTrigger1 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>합격수기</h1>
          <button @click="popupTrigger1 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PassReviewDetail />
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger1 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //합격수기 상세내용 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import IndexMsgM from '@/views/pass/IndexMsgM.vue';
import PassReviewList from '@/views/pass/PassReviewList.vue';
import PassReviewDetail from '@/views/pass/PassReviewDetail.vue';

export default {
  mixins: [Mixin],
  name: 'PassReviewM',
  components: {
    PassReviewList,
    PassReviewDetail,
    IndexMsgM
  },
  data() {
    return {
      popupTrigger1: false,
      swiperOption03: {
        slidesPerView: 'auto',
        loop:true,
        spaceBetween: 15,
        speed: 3500,
        centeredSlides: true,
        autoplay: false,
        navigation: { nextEl: '.passReview .swiper-button-next', prevEl: '.passReview .swiper-button-prev' },
      },
    }
  },
}
</script>
