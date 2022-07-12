<template lang="html">
	<div>
    <div class="introLocation">
	    <div class="introFrame">
				<div class="tit">
					<h2>학원 위치 안내 및 SNS</h2>
					<!-- <router-link to="/mkup/login" class="btnAll">로그인 후, <strong>전체보기</strong></router-link> -->
				</div>
				<div class="iLBack">
					<div class="iLTabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul class="blackLineTab">
										<li :class="{on:iLTab===0}"><button @click="iLTab = 0">서울학원 아이비관</button></li>
										<li :class="{on:iLTab===1}"><button @click="iLTab = 1">서울학원 이데아관</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
							<div v-if="iLTab == 0" class="tabData" :key="iLTab">
								<div><img :src="require(`@/assets/images/img_intro_location03.jpg`)" alt="" /></div>
								<dl class="address">
									<dt>주소</dt>
									<dd>
										<strong>도로명 주소</strong> 서울특별시 동작구 장승배기로 171 아이비빌딩 5층<br/>
										<strong>지번 주소</strong> 서울특별시 동작구 노량진동 45-3 아이비빌딩 5층
									</dd>
								</dl>
								<dl class="time">
									<dt>업무시간</dt>
									<dd>
										<strong>월~토요일</strong> <span>08:00 ~ 20:00</span>
										<strong>일요일</strong> <span>08:00 ~ 18:00</span>
									</dd>
								</dl>
								<dl class="number">
									<dt>상담전화</dt>
									<dd><strong>02-811-4040</strong></dd>
								</dl>
								<dl class="subway">
									<dt>아이비관 찾아오시는 길</dt>
									<dd>
										<p>
											<strong>1,9 호선 노량진역</strong>
											노량진역 5번 출구 → 지하 아이비빌딩으로 연결(1층 롯데리아) → 5층 희소고시학원 아이비관 도착
										</p>
									</dd>
								</dl>
							</div>
							<div v-if="iLTab == 1" class="tabData">
								<div>
									<img :src="require(`@/assets/images/img_intro_location04.jpg`)" alt="" />
								</div>
								<dl class="address">
									<dt>주소</dt>
									<dd>
										<strong>도로명 주소</strong> 서울특별시 동작구 노량진로 146 이데아빌딩 4층<br/>
										<strong>지번 주소</strong> 서울특별시 동작구 노량진동 71-2 이데아빌딩 4층
									</dd>
								</dl>
								<dl class="time">
									<dt>업무시간</dt>
									<dd>
										<strong>월~토요일</strong> <span>08:00 ~ 20:00</span>
										<strong>일요일</strong> <span>08:00 ~ 18:00</span>
									</dd>
								</dl>
								<dl class="number">
									<dt>상담전화</dt>
									<dd><strong>02-817-4041</strong></dd>
								</dl>
								<dl class="subway">
									<dt>이데아관 찾아오시는 길</dt>
									<dd>
										<p>
											<strong>1호선 노량진역</strong>
											1호선 노량진역 1번 출구 → 횡단보도를 건너 오른쪽으로 이동 → 경찰서를 지나 이데아빌딩 도착 → 엘리베이터를 타고 4층 이데아관 도착
										</p>
										<p>
											<strong>9호선 노량진역</strong>
											9호선 노량진역 3번 출구 → 지하 이데아빌딩으로 이동 → 엘리베이터를 타고 4층 이데아관 도착
										</p>
									</dd>
								</dl>
							</div>
							<dl class="sns">
								<dt>쌤플러스 SNS</dt>
								<dd>
									<a href="https://www.facebook.com/KGeduoneheeso/" target="_blank"><img :src="require(`@/assets/images/btn_intro_Location_facebook.png`)" alt="" /></a>
									<a href="https://www.instagram.com/kgeduone_heeso/" target="_blank"><img :src="require(`@/assets/images/btn_intro_Location_instagram.png`)" alt="" /></a>
									<a href="https://blog.naver.com/myheeso" target="_blank"><img :src="require(`@/assets/images/btn_intro_Location_blog.png`)" alt="" /></a>
									<a href="https://www.youtube.com/channel/UCrKs4hCEUOeFQV-O2NSE_Wg" target="_blank"><img :src="require(`@/assets/images/btn_intro_Location_youtube.png`)" alt="" /></a>
									<a href="https://pf.kakao.com/_WPrLl" target="_blank"><img :src="require(`@/assets/images/btn_intro_Location_talk.svg`)" alt="" /></a>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroLocation',
  components: {
  },
  data() {
    return {
			iLTab:0
    }
  },
}
</script>
