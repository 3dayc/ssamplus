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
			<div class="introMobileFrame">
				<swiper :options="introPassMOption">
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
					<swiper-slide>
						<span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
						<p>
							<span><i>"반복, 또 계속 반복 할 것"</i> 이동건 선생님 자료만 봤어요. 1차는 반복이 답, 2차는 만능 틀 활용하기</span>
							<span><em>유아 이동건</em><strong>육아병행 2차 뒤집기 합격</strong></span>
						</p>
					</swiper-slide>
				</swiper>
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
  name: 'IntroPassM',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
		introPassMOption: {
			slidesPerView: "auto",
			spaceBetween: 10,
			centeredSlides: true,
			loop:true,
        	// effect: "coverflow",
        	grabCursor: true,
        	centeredSlides: true,
        	// coverflowEffect: {
			// 	rotate: 40,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 1,
			// 	slideShadows: false
			// },
		},
    }
  },
}
</script>
