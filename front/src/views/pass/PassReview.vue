<template lang="html">
  <div>
    <div class="passReview">
      <div class="bothArrows">
        <swiper :options="swiperOption03">
          <swiper-slide class="passBest">
            <div @click="popupTrigger1 = true">
              <span class="tt">
                <em>2021학년도 전문상담</em>
                <strong>반복과 막판 스퍼트가 가장 중요!</strong>
                <span><i>das*****</i> 선생님</span>
              </span>
              <span class="txt">안녕하세요 경북 수석으로 합격한 초수생입니다. 합격수기를 쓰는 날이 저에게도 오다니 너무 감격스럽습니다. 제 글이 임용을 준비하는 분들에게 조금이나마 도움이 되길 바라면서, 지난 1년을 열심히 작성해 보았습니다. 저의 지난 1년이 대단치는 못하지만, 이</span>
              <span class="date">2021-04-09</span>
            </div>
          </swiper-slide>
          <swiper-slide class="passBest">
            <div @click="popupTrigger1 = true">
              <span class="tt male">
                <em>2021학년도 중등국어</em>
                <strong>1차 커트라인 뒤집기 성공! 포기하지 말고 공부하세요!</strong>
                <span><i>5ki*****</i> 선생님</span>
              </span>
              <span class="txt">안녕하세요 경북 수석으로 합격한 초수생입니다. 합격수기를 쓰는 날이 저에게도 오다니 너무 감격스럽습니다. 제 글이 임용을 준비하는 분들에게 조금이나마 도움이 되길 바라면서, 지난 1년을 열심히 작성해 보았습니다. 합격수기를 쓰는 날이 저에게도 오다니 너무 감격스럽습니다. 제 글이 임용을 준비하는 분들에게 조금이나마 도움이 되길 바라면서, 지난 1년을 열심히 작성해 보았습니다.</span>
              <span class="date">2021-04-09</span>
            </div>
          </swiper-slide>
        </swiper>
        <div class="mbPage">
          <span class="swiper-button-prev" slot="button-prev"/>
          <span class="swiper-button-next" slot="button-next"/>
        </div>
      </div>
      <!---->
      <PassReviewList />
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
import PassReviewList from '@/views/pass/PassReviewList.vue';
import PassReviewDetail from '@/views/pass/PassReviewDetail.vue';

export default {
  mixins: [Mixin],
  name: 'PassReview',
  components: {
    PassReviewList,
    PassReviewDetail
  },
  data() {
    return {
      popupTrigger1: false,
      swiperOption03: {
        slidesPerView: 2,
        loop:true,
        spaceBetween: 20,
        speed: 3500,
        autoplay: false,
        navigation: { nextEl: '.passReview .swiper-button-next', prevEl: '.passReview .swiper-button-prev' },
      },
    }
  },
}
</script>
