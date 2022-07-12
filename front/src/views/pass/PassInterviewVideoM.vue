<template lang="html">
  <div>
    <div class="passInterviewVideo">
      <div class="bothArrows">
        <swiper :options="swiperOption03">
          <swiper-slide>
            <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
            <p>
              <strong>경북 초수, 수석 합격자의 합격비결</strong>
              2021학년도 경북 합격자
            </p>
          </swiper-slide>
          <swiper-slide>
            <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
            <p>
              <strong>경북 초수, 수석 합격자의 합격비결</strong>
              2021학년도 경북 합격자
            </p>
          </swiper-slide>
          <swiper-slide>
            <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
            <p>
              <strong>경북 초수, 수석 합격자의 합격비결</strong>
              2021학년도 경북 합격자
            </p>
          </swiper-slide>
        </swiper>
        <div class="mbPage">
          <span class="swiper-pagination dotCase" slot="pagination"/>
        </div>
      </div>
      <!---->
      <PassInterviewVideoList />
    </div>
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PassInterviewVideoList from '@/views/pass/PassInterviewVideoList.vue';

export default {
  mixins: [Mixin],
  name: 'PassInterviewVideo',
  components: {
    PassInterviewVideoList
  },
  data() {
    return {
      videoPopTrigger01: false,
      swiperOption03: {
        slidesPerView: 'auto',
        loop:true,
        spaceBetween:20,
        //speed:2500,
        centeredSlides: true,
        autoplay: false,
        pagination: {
          el: ".passInterviewVideo .swiper-pagination",
          clickable : true
        },
        //navigation: { nextEl: '.passInterviewVideo .swiper-button-next', prevEl: '.passInterviewVideo .swiper-button-prev' },
      },
    }
  },
}
</script>
