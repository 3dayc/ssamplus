<template lang="html">
	<div>
    <div class="introPresentation">
			<div class="tit">
				<h2><strong>2022 대비</strong> 합격전략 온라인 설명회</h2>
				<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
			</div>
			<div class="introFrame">
				<div class="moveArea">
					<div v-if="iPreTab == 0" class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_introThumb01.png`)" alt=""/></div>
					<div v-if="iPreTab == 1" class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_introThumb02.png`)" alt=""/></div>
					<div v-if="iPreTab == 2" class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_introThumb03.png`)" alt=""/></div>
					<div v-if="iPreTab == 3" class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_introThumb04.png`)" alt=""/></div>
				</div>
				<div class="swiperPersonList">
					<swiper :options="introPreMobile">
					  <swiper-slide :class="{on:iPreTab===0}" @click="iPreTab = 0">
					    <span>교육학 <strong>김현</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt=""  @click="iPreTab = 0"/>
					  </swiper-slide>
					  <swiper-slide :class="{on:iPreTab===1}" @click="iPreTab = 1">
					    <span>교육학 <strong>권구현</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt=""  @click="iPreTab = 1"/>
					  </swiper-slide>
					  <swiper-slide :class="{on:iPreTab===2}" @click="iPreTab = 2">
					    <span>교육학 <strong>윤중샘</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" @click="iPreTab = 2" />
					  </swiper-slide>
					  <swiper-slide :class="{on:iPreTab===3}" @click="iPreTab = 3">
					    <span>유아 <strong>배지윤</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt=""  @click="iPreTab = 3" />
					  </swiper-slide>
					  <swiper-slide>
					    <span>유아 <strong>이동건</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
					  </swiper-slide>
					  <swiper-slide>
					    <span>논술 <strong>양재웅</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
					  </swiper-slide>
					  <swiper-slide>
					    <span>국어 <strong>박노송</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
					  </swiper-slide>
					  <swiper-slide>
					    <span>국어 <strong>송헌</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
					  </swiper-slide>
					  <swiper-slide>
					    <span>국어 <strong>김준</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice09.png`)" alt="" />
					  </swiper-slide>
					</swiper>
				</div>
			</div>
		</div>

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroPresentation',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
      aLinkToMedium:'1',
      aLinkToMedium2:'6',
			iPreTab: 0,
			introPreMobile: {
				slidesPerView: 'auto',
				//loop:true,
				spaceBetween: 10,
			}
    }
  },
}
</script>
