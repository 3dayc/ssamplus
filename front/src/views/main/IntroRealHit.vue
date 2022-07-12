<template lang="html">
	<div>
    <div class="introRealHit">
			<!-- 목록 -->
			<div class="iRHitList" v-if="iRHTab == 0">
				<div class="tit">
					<h2>시험 적중! 전공별 선생님</h2>
					<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
				</div>
				<swiper :options="introHitOption">
					<swiper-slide>
						<ul>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>교육학<br/> <strong>김현</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 1">
						    <span>
									<em>교육학<br/><strong>권구현</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 2">
						    <span>
									<em>교육학<br/><strong>윤중샘</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>유아<br/><strong>배지윤</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>유아<br/><strong>이동건</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다. 스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>논술<br/><strong>양재웅</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>국어<br/><strong>박노송</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>국어<br/><strong>송헌</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
						  </li>
						</ul>
					</swiper-slide>
					<swiper-slide>
						<ul>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>교육학<br/> <strong>김현</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 1">
						    <span>
									<em>교육학<br/><strong>권구현</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 2">
						    <span>
									<em>교육학<br/><strong>윤중샘</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>유아<br/><strong>배지윤</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>유아<br/><strong>이동건</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다. 스나이더 충실관점에서 온라인 학습, 의사결정 모든 게 교수님 모고에서 다뤄 주셔서 답안 작성시에 문제가 없었습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>논술<br/><strong>양재웅</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>마지막에 주신 기출기반 출제예상 자료를 공부해서 자기결정 교수학습 모델, 어음명료도검사, 키가드, PECS 등등</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>국어<br/><strong>박노송</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>모고에서 나온 문제들 태선화, 안전사고, 최고노출기준, 충수염, 폐렴 등 다 한번씩 봤던 문제들이라 신기했습니다.</span></p>
						  </li>
						  <li @click="iRHTab = 1, issamHit = 0">
						    <span>
									<em>국어<br/><strong>송헌</strong><i>선생님</i></em>
						      <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
						    </span>
						    <p><strong>적중제보</strong><span>의사결정 모든게 모고에서 다뤄주셔서 답안 작성 시 막힘이 없었습니다. 배지윤 선생님의 놀라운 적중률</span></p>
						  </li>
						</ul>
					</swiper-slide>
				</swiper>
				<div class="mbPage">
					<span class="swiper-button-prev" slot="button-prev"/>
					<span class="swiper-button-next" slot="button-next"/>
				</div>
			</div>
			<!-- //목록 -->
			<!-- 상세 -->
			<div v-if="iRHTab == 1" class="iRHDetail">
				<div class="ssamHit" v-if="issamHit == 0">
					<div class="withSsam">
						<p>
							압도적인 명성을 증명하다!
							<strong>2022학년도 교육학은 김현선생님과 함께!</strong>
						</p>
					</div>
					<div>
						<swiper :options="introHitOption2">
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
							</swiper-slide>
						</swiper>
						<div class="mbPage">
							<span class="swiper-button-prev" slot="button-prev"/>
							<span class="swiper-button-next" slot="button-next"/>
						</div>
					</div>
					<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
				</div>
				<div class="ssamHit" v-if="issamHit == 1">
					<div class="withSsam">
						<p>
							압도적인 명성을 증명하다!
							<strong>2022학년도 교육학은 권구현선생님과 함께!</strong>
						</p>
					</div>
					<div>
						<swiper :options="introHitOption2">
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
							</swiper-slide>
						</swiper>
						<div class="mbPage">
							<span class="swiper-button-prev" slot="button-prev"/>
							<span class="swiper-button-next" slot="button-next"/>
						</div>
					</div>
					<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
				</div>
				<div class="ssamHit" v-if="issamHit == 2">
					<div class="withSsam">
						<p>
							압도적인 명성을 증명하다!
							<strong>2022학년도 교육학은 윤중샘선생님과 함께!</strong>
						</p>
					</div>
					<div>
						<swiper :options="introHitOption2">
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb201.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb202.png`)" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img :src="require(`@/assets/images/thumbnail/@tmp_introThumb203.png`)" alt="" />
							</swiper-slide>
						</swiper>
						<div class="mbPage">
							<span class="swiper-button-prev" slot="button-prev"/>
							<span class="swiper-button-next" slot="button-next"/>
						</div>
					</div>
					<router-link to="" class="btnTcHomeName">선생님 홈 바로가기</router-link>
				</div>
				<div>
					<ul>
						<li>
							<button @click="iRHTab = 0">목록보기</button>
						</li>
					  <li :class="{active:issamHit===0}" @click="issamHit = 0">
					    <span>교육학 <strong>김현</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt="" />
					  </li>
					  <li :class="{active:issamHit===1}" @click="issamHit = 1">
					    <span>교육학 <strong>권구현</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt="" />
					  </li>
					  <li :class="{active:issamHit===2}" @click="issamHit = 2">
					    <span>교육학 <strong>윤중샘</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt="" />
					  </li>
					  <li>
					    <span>유아 <strong>배지윤</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice04.png`)" alt="" />
					  </li>
					  <li>
					    <span>유아 <strong>이동건</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice05.png`)" alt="" />
					  </li>
					  <li>
					    <span>논술 <strong>양재웅</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice06.png`)" alt="" />
					  </li>
					  <li>
					    <span>국어 <strong>박노송</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice07.png`)" alt="" />
					  </li>
					  <li>
					    <span>국어 <strong>송헌</strong></span>
					    <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice08.png`)" alt="" />
					  </li>
					</ul>
				</div>
			</div>
			<!-- //상세 -->
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroRealHit',
  components: {
  },
  data() {
    return {
			iRHTab:0,
			issamHit:0,
			introHitOption: {
        slidesPerView: 1,
				loop:false,
				spaceBetween: 20,
				navigation: { nextEl: '.introRealHit .swiper-button-next', prevEl: '.introRealHit .swiper-button-prev' },
			},
			introHitOption2: {
        slidesPerView: 1,
				loop:false,
				spaceBetween: 20,
				navigation: { nextEl: '.ssamHit .swiper-button-next', prevEl: '.ssamHit .swiper-button-prev' },
			}
    }
  },
}
</script>
