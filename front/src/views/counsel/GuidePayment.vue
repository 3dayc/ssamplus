<template lang="html">
  <div>
    <div class="guideList">
      <div class="guidData">
          <swiper :options="guideSwiper" v-if="guideTab == 0" ref="playSwiper" @reachEnd="replay = true;">
            <swiper-slide>
              <img :src="require(`@/assets/images/guide/payment/payment.gif`)" alt="" id="guideImg" @click="imgClick()"/>
              <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup1.png`)" alt="" /> -->
            </swiper-slide>
          </swiper>
          <swiper :options="guideSwiper" v-if="guideTab == 1">
            <swiper-slide>
              <img :src="require(`@/assets/images/guide/delivery/delivery.gif`)" alt="" id="guideImg" @click="imgClick()"/>
              <!-- <img :src="require(`@/assets/images/thumbnail/img_guide_mockup2.png`)" alt="" /> -->
            </swiper-slide>
          </swiper>
          <!-- <span class="swiper-button-prev" slot="button-prev"/>
          <span class="swiper-button-next" slot="button-next"/> -->
      </div>
      <div class="guideSnb">
        <span :class="{on:guideTab===0}"><button @click="guideTab = 0">결제하기</button></span>
        <span :class="{on:guideTab===1}"><button @click="guideTab = 1">교재배송 확인</button></span>
        <p>결제하기 팁을 확인해 보세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'GuidePayment',
  components: {
  },
  data() {
    return {
      guideTab: 0,
      guideSwiper: {
        slidesPerView: "auto",
        centeredSlides: true,
        navigation: { nextEl: '.guidData .swiper-button-next', prevEl: '.guidData .swiper-button-prev' },
      },
    }
  },
   methods: {
    imgClick(){
      var imgSrc = document.getElementById("guideImg").src;
      console.log(imgSrc);      
      document.getElementById("guideImg").src = imgSrc+'?number='+Math.random()*1000;
    }
	},
  computed: {
		swiper() {
			return this.$refs.playSwiper.$swiper;
		}
  },
  mounted() {    
  },
}
</script>
