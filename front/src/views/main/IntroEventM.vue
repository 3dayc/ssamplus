<template lang="html">
	<div>
    <div class="introEvent">
			<div class="tit">
				<h2>2022 쌤플러스 이벤트</h2>
				<p>로그인 하시면 더 많은 이벤트를 확인하실 수 있습니다.</p>
				<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
			</div>
			<div class="iEvent">
				<!--목록-->
				<div class="iEventSwiperList">
					<swiper :options="iEVListOption">
							<swiper-slide>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet01_1.png`)" alt="" /></button>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet02_1.png`)" alt="" /></button>
							</swiper-slide>
							<swiper-slide>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet03_1.png`)" alt="" /></button>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet04_1.png`)" alt="" /></button>
							</swiper-slide>
							<swiper-slide>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet05_1.png`)" alt="" /></button>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet06_1.png`)" alt="" /></button>
							</swiper-slide>
							<swiper-slide>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet01_1.png`)" alt="" /></button>
								<button @click="evetTab = 1"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet02_1.png`)" alt="" /></button>
							</swiper-slide>
					</swiper>
				</div>
				<!--목록-->
				<!--상세-->
				<div class="iEventView" style="display:none;">
					<div class="tR"><button @click="evetTab = 0">목록으로</button></div>
					<div class="iEventDetail" >
						<swiper :options="iEVdetailOption" ref="iEventSwiper" @slideChange="slideChange">
							<swiper-slide>
								<router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet09.png`)" alt="" /></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link to="/mkup/bbs/event/ing2"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet10.png`)" alt="" /></router-link>
							</swiper-slide>
							<swiper-slide>
								<router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@tmp_intro_envet11.png`)" alt="" /></router-link>
							</swiper-slide>
						</swiper>
						<div class="pageSet">
							<span class="left">
								<strong v-html="eventTit"></strong>
								<em v-html="eventDate"></em>
							</span>
              <div class="swiper-button-prev" slot="button-prev"/>
              <div class="swiper-button-next" slot="button-next"/>
						</div>
					</div>
				</div>
				<!--//상세-->
			</div>
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroEventM',
  components: {
  },
  data() {
    return {
			evetTab:0,
      eventTit:'첫구매 학습지원 이벤트',
      eventDate:'2021-08-31 ~ 2021-09-23',
			iEVdetailOption:{
				spaceBetween: 0,
				loop:true,
        // autoplay: {
        //   delay: 4500,
        //   disableOnInteraction: false
        // },
				speed: 1500,
				navigation: { nextEl: '.iEventView .swiper-button-next', prevEl: '.iEventView .swiper-button-prev' },
			},
			iEVListOption:{
        slidesPerView: 'auto',
				spaceBetween: 10,
				loop:true,
			}
    }
  },
  methods: {
    slideChange() {
			let indexNum = this.$refs.iEventSwiper.$swiper.realIndex+1;
			if (indexNum == 1){
				this.eventTit = '첫구매 학습지원 이벤트';
				this.eventDate = '2021-08-31 ~ 2021-09-23';
			} else if (indexNum == 2){
				this.eventTit = '첫구매 학습지원 이벤트2';
				this.eventDate = '2021-09-24 ~ 2021-10-23';
			} else if (indexNum == 3){
				this.eventTit = '첫구매 학습지원 이벤트3';
				this.eventDate = '2021-10-24 ~ 2021-11-23';
			}
    },
	},
}
</script>
