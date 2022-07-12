<template lang="html">
		<div id="introContainer">
			<div class="introTop">
				<div class="introFrame">
					<h1>쌤플러스</h1>
					<span class="right">
						<router-link to="/mkup/main" class="introHome">홈으로</router-link>
						<router-link to="/mkup/login" class="introLogin">로그인</router-link>
						<button class="introNavOpner" :class="{on:introTrigger == true}" @click="introTrigger = !introTrigger">인트로 네비</button>
					</span>
				</div>
			</div>
			<div class="introNavArea" :class="{on:introTrigger == true}">
				<ul class="swiper-pagination" slot="pagination" />
			</div>
			<swiper class="introSwiper" :options="introSwiperOption" ref="introSwiper" @slideChange="slideChanged">
				<!-- 메인 비쥬얼 -->
				<swiper-slide>
					<article>
						<div class="introVisual">
							<div class="goLogin">
								<router-link to="/mkup/login" class="btnL line introLogin">로그인</router-link>
								<i>
									<router-link to="/mkup/findAccount">아이디 찾기</router-link>
									<router-link to="/mkup/findAccount">비밀번호 재설정</router-link>
									<router-link to="/mkup/join">회원가입</router-link>
								</i>
							</div>
							<swiper :options="swiperOption01">
								<swiper-slide>
									<div class="txtBox">
										<div class="introFrame">
											<span>
												중요한 것은 가능성에 관한 <br/>의심이 아닌 확신! <br/><strong>쌤플러스가 같이 고민하고 준비하겠습니다.</strong>
											</span>
										</div>
									</div>
									<div class="imgBox">
							    	<img :src="require(`@/assets/images/img_intro_visual01.png`)" alt="" />
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="txtBox">
										<div class="introFrame">
											<span>
												할 수 있다고 생각하면 <br/>꿈!이 아니라 내일의 현실! <br/><strong>결승점까지 쌤플러스가 함께 뛰겠습니다.</strong>
											</span>
										</div>
									</div>
									<div class="imgBox">
							    	<img :src="require(`@/assets/images/img_intro_visual02.png`)" alt="" />
									</div>
								</swiper-slide>
								<swiper-slide>
									<div class="txtBox">
										<div class="introFrame">
											<span>
												<strong>당신의 임용 합격을 <br/>축하합니다! <br/>당신의 기쁨이 쌤 플러스의 기쁨입니다.</strong>
											</span>
										</div>
									</div>
									<div class="imgBox">
							    	<img :src="require(`@/assets/images/img_intro_visual03.png`)" alt="" />
									</div>
								</swiper-slide>
							</swiper>
							<div class="pageSet">
								<div class="area">
									<div class="swiper-pagination" slot="pagination"/>
									<div class="swiper-button-prev" slot="button-prev"/>
									<div class="swiper-button-next" slot="button-next"/>
								</div>
							</div>
						</div>
					</article>
					<div class="mouseSet">
						<span class="mouse black"></span>
					</div>
				</swiper-slide>
				<!-- //메인 비쥬얼 -->
				<!-- 쌤플러스 이벤트 -->
				<swiper-slide class="introEventBack">
					<article>
						<IntroEvent />
					</article>
					<div class="mouseSet">
						<span class="mouse black"></span>
					</div>
				</swiper-slide>
				<!-- //쌤플러스 이벤트 -->
				<!-- 2021 합격수기 -->
				<swiper-slide class="introPassBack">
					<article>
						<IntroPass />
					</article>
					<div class="mouseSet">
						<span class="mouse white"></span>
					</div>
				</swiper-slide>
				<!-- //2021 합격수기 -->
				<!-- 2022 대비 합격전략 온라인 설명회 -->
				<swiper-slide>
					<article>
						<IntroPresentation />
					</article>
					<div class="mouseSet">
						<span class="mouse black"></span>
					</div>
				</swiper-slide>
				<!--// 2022 대비 합격전략 온라인 설명회 -->
				<!-- 시험 적중! 전공별 선생님 -->
				<swiper-slide class="introRealHitBack">
					<article>
						<IntroRealHit />
					</article>
					<div class="mouseSet">
						<span class="mouse black"></span>
					</div>
				</swiper-slide>
				<!-- 맞춤 합격전략 -->
				<swiper-slide>
					<article>
						<IntroDirection />
					</article>
					<div class="mouseSet">
						<span class="mouse white"></span>
					</div>
				</swiper-slide>
				<!-- 자주 하는 질문 -->
				<swiper-slide class="introFaqBack">
					<article>
				    <div class="introFaq">
							<div class="introFrame">
								<div class="tit">
									<h2>자주 하는 질문</h2>
									<router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link>
								</div>
								<swiper :options="intrfaqOption">
									<swiper-slide class="active">
										<em>결제</em>
										<strong>쿠폰이 있는데 사용 방법이 어떻게 되나요?</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>회원정보관리</em>
										<strong>아이디/패스워드를 찾고 싶어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>사이트이용</em>
										<strong>한개의 기기에서 수강했는데 동시접속이 발생했어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>패키지 강의</em>
										<strong>일부 강의를 직강(인강)으로 변경하고 싶어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>결제</em>
										<strong>쿠폰이 있는데 사용 방법이 어떻게 되나요?</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>회원정보관리</em>
										<strong>아이디/패스워드를 찾고 싶어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>사이트이용</em>
										<strong>한개의 기기에서 수강했는데 동시접속이 발생했어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
									<swiper-slide>
										<em>패키지 강의</em>
										<strong>일부 강의를 직강(인강)으로 변경하고 싶어요.</strong>
										<p>사용가능한 쿠폰은 결제 마지막단계에서 선택하여 적용할 수 있습니다. <br/>내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.</p>
										<button @click="introFaqPopTrigger = true">자세히 보기</button>
									</swiper-slide>
								</swiper>
					      <div class="swiperProgressSet">
					        <span class="swiper-pagination" slot="pagination"/></span>
					        <span class="swiper-button-prev" slot="button-prev"/></span>
					        <span class="swiper-button-next" slot="button-next"/></span>
					      </div>
							</div>
						</div>
					</article>
				</swiper-slide>
				<!-- 위치 안내 -->
				<swiper-slide>
					<article>
						<IntroLocation />
					</article>
				</swiper-slide>
			</swiper>

			<!-- FAQ 팝업 -->
			<Popup v-if='introFaqPopTrigger' @close="introFaqPopTrigger = false" class="introFaqPop">
	      <template slot="modalheader">
	        <div>
						<button @click="introFaqPopTrigger = false" class="modalClose">close</button>
	        </div>
	      </template>
				<template slot="modalbody">
					<em>결제</em>
					<strong>쿠폰이 있는데<br/>사용 방법이 어떻게 되나요?</strong>
					<div>
						<p>
							내 강의실의 [쿠폰조회]에는 쿠폰이 있는데 결제과정에서 쿠폰 사용여부를 묻지 않는다면 주문하려는 강의는 해당 쿠폰이 적용되지 않는 강의입니다.<br/><br/>
							쌤플러스에서 발행되는 쿠폰은 일부 강좌에 한정되거나 사용 시기가 제한되어 있습니다.<br/>
							해당 강좌에 적용이 되지 않는 쿠폰은 결제시 보여지지 않으니 참고하시기 바랍니다.<br/><br/>
							혹시 강좌에 적용되는 쿠폰인데 결제 과정에서 쿠폰사용여부를 묻지 않는다면 결제과정에서 오류 및 주문취소로 인해 해당 쿠폰이 잘못 사용되거나 삭제된것은 아닌지 내 강의실의 [쿠폰조회]에서 확인해 보시기 바랍니다.<br/><br/>
							결제 오류에 의한 쿠폰삭제 시 쌤플러스 고객센터나 1:1 상담으로 문의 주시면 안내 도와드리겠습니다.
						</p>
					</div>
				</template>
			</Popup>
			<!-- //FAQ 팝업 -->
		</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import IntroEvent from '@/views/main/IntroEvent.vue';
import IntroPass from '@/views/main/IntroPass.vue';
import IntroPresentation from '@/views/main/IntroPresentation.vue';
import IntroRealHit from '@/views/main/IntroRealHit.vue';
import IntroDirection from '@/views/main/IntroDirection.vue';
import IntroLocation from '@/views/main/IntroLocation.vue';

export default {
  mixins: [Mixin],
  name: 'IntroPc',
  components: {
		IntroEvent,
		IntroPass,
		IntroPresentation,
		IntroRealHit,
		IntroDirection,
		IntroLocation
  },
  data() {
    return {
			introTrigger:false,
			introSwiperOption: {
        direction: "vertical",
				slidesPerView: "1",
				mousewheel: true,
        pagination: {
          el: ".introNavArea .swiper-pagination",
          clickable : true,
          renderBullet: function (index, className) {
            let menu = ['홈', '쌤플러스 이벤트', '2021 합격수기', '2022 대비 합격전략 온라인 설명회', '시험 적중! 전공별 선생님', '맞춤 합격전략', '자주 하는 질문', '위치 안내'];
            return '<li class="' + className + '" >' + (menu[index]) + '</li>';
          }
        },
			},
			swiperOption01: {
				effect: "fade",
				spaceBetween: 0,
				loop:true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
				speed: 500,
				pagination: {
					el: ".introVisual .swiper-pagination",
					clickable: true,
				},
				navigation: { nextEl: '.introVisual .swiper-button-next', prevEl: '.introVisual .swiper-button-prev' },
			},
			introFaqPopTrigger: false,
			intrfaqOption: {
				slidesPerView: "auto",
				spaceBetween: 20,
        pagination: {
          el: ".introFaq .swiper-pagination",
          type: "progressbar"
        },
				navigation: { nextEl: '.introFaq .swiper-button-next', prevEl: '.introFaq .swiper-button-prev' },
			}
    }
  },
	methods: {
		slideChanged() {
			this.introTrigger = false;
		},
	},
  mounted() {
  }
}
</script>
