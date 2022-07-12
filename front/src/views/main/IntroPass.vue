<template lang="html">
	<div>
		<div class="introPass">
			<div class="tit">
				<div>
					<h2>2021 합격수기</h2>
					<p>생생한 합격 노하우가 담겨 있는 인터뷰</p>
					<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
				</div>
			</div>
			<div class="introFrame">
				<div class="choicePass bothArrows">
					<span class="swiper-button-prev" slot="button-prev"/>
					<span class="swiper-button-next" slot="button-next"/>
					<span class="videoPlay"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
					<p>
						<span><em>"반복, 또 계속 반복 할 것"</em> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
						<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
					</p>
				</div>
				<div class="swiperBack">
					<swiper :options="introPassOption">
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview2.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview3.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview4.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview2.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview3.png`)" alt="" /></span>
						</swiper-slide>
						<swiper-slide>
							<span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview4.png`)" alt="" /></span>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroPass',
  components: {
  },
  data() {
    return {
			introPassOption: {
				slidesPerView: "auto",
				loop:true,
				spaceBetween: 20,
				navigation: { nextEl: '.introPass .swiper-button-next', prevEl: '.introPass .swiper-button-prev' },
			},
    }
  },
}
</script>
