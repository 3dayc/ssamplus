<template lang="html">
<div class="bestReviewBack bothArrows">
  <div class="subTit noLine"><h3>백퍼 추천하는 솔직 후기</h3></div>
  <swiper :options="swiperOption03" class="reviewBoxList">
    <swiper-slide class="reviewBox">
      <router-link to="/mkup/ssammall/review/book/view">
        <div class="reviewImg">
          <img :src="require(`@/assets/images/thumbnail/@tmp_review01.png`)" alt=""/>
        </div>
        <div class="reviewInfo">
          <em class="iSbjSetMini">중국어</em>
          <strong>중국현대문학사 이해</strong>
          <p>중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재 중국현대문학사의 개요부터 중국현대시까지 한 권의 교재에 총정리된 알알이 알찬 교재</p>
          <span class="author">jyr******</span>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide class="reviewBox">
      <router-link to="/mkup/ssammall/review/book/view">
        <div class="reviewImg">
          <img :src="require(`@/assets/images/thumbnail/@tmp_review02.png`)" alt=""/>
        </div>
        <div class="reviewInfo">
          <em class="iSbjSetMini">교육학</em>
          <strong>2022 김현 키위주스</strong>
          <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
          <span class="author">hhe******</span>
        </div>
      </router-link>
    </swiper-slide>
    <swiper-slide class="reviewBox">
      <router-link to="/mkup/ssammall/review/book/view">
        <div class="reviewImg">
          <img :src="require(`@/assets/images/thumbnail/@tmp_review03.png`)" alt=""/>
        </div>
        <div class="reviewInfo">
          <em class="iSbjSetMini">교육학</em>
          <strong>2022 김현 키위주스</strong>
          <p>실전 연습용으로 필요해서 구매했어요. 김현교수님의 명성답게 잘 만들어진 교재입니다. 출제 가능성이 ...</p>
          <span class="author">hhe******</span>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
  <div class="swiper-button-prev" slot="button-prev"/>
  <div class="swiper-button-next" slot="button-next"/>
</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndexBestReviewPc',
  components: {
  },
  data() {
    return {
      swiperOption03: {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 25,
        navigation: { nextEl: '.bestReviewBack .swiper-button-next', prevEl: '.bestReviewBack .swiper-button-prev' },
      },
    }
  },
}
</script>
