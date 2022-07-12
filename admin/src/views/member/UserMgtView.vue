<template lang="html">
	<div>
		<div class="pageTit">
			<h2>회원 조회</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/userMgt">회원 관리</router-link><router-link to="/mkup/member/userMgt">회원 조회</router-link><em>상세</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userMgtView">
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:memberTab===0}"><button @click="memberTab = 0">회원정보</button></li>
										<li :class="{on:memberTab===1}"><button @click="memberTab = 1">수강강좌</button></li>
										<li :class="{on:memberTab===2}"><button @click="memberTab = 2">결제내역</button></li>
										<li :class="{on:memberTab===3}"><button @click="memberTab = 3">주문배송</button></li>
										<li :class="{on:memberTab===4}"><button @click="memberTab = 4">1:1상담내역</button></li>
										<li :class="{on:memberTab===5}"><button @click="memberTab = 5">쿠폰내역</button></li>
										<li :class="{on:memberTab===6}"><button @click="memberTab = 6">장바구니</button></li><!-- 2021-07-14 탭명 변경 -->
										<li :class="{on:memberTab===7}"><button @click="memberTab = 7">사물함</button></li>
									</ul>
								</nav>
							</div>
							<span class="btnArea">
								<router-link to="./" class="btnList">목록으로</router-link>
								<button class="btnMsg" @click="MemberMsgSend()">메세지발송</button>
							</span>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="memberTab == 0" class="tabData">
								<UserMgtViewInfo />
              </div>
              <div v-if="memberTab == 1" class="tabData">
								<UserMgtViewLecture />
              </div>
              <div v-if="memberTab == 2" class="tabData">
								<UserMgtViewPayment />
              </div>
              <div v-if="memberTab == 3" class="tabData">
								<UserMgtViewShopping />
              </div>
              <div v-if="memberTab == 4" class="tabData">
								<UserMgtViewOnetoone />
              </div>
              <div v-if="memberTab == 5" class="tabData">
								<UserMgtViewCoupon />
              </div>
              <div v-if="memberTab == 6" class="tabData">
								<UserMgtViewCart />
              </div>
							<div v-if="memberTab == 7" class="tabData">
								<UserMgtViewLocker />
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
				</div>
				<!-- //page layout -->
			</article>
		</div>
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import UserMgtViewInfo from '@/views/member/UserMgtViewInfo.vue';
import UserMgtViewLecture from '@/views/member/UserMgtViewLecture.vue';
import UserMgtViewPayment from '@/views/member/UserMgtViewPayment.vue';
import UserMgtViewShopping from '@/views/member/UserMgtViewShopping.vue';
import UserMgtViewOnetoone from '@/views/member/UserMgtViewOnetoone.vue';
import UserMgtViewCoupon from '@/views/member/UserMgtViewCoupon.vue';
import UserMgtViewCart from '@/views/member/UserMgtViewCart.vue'
import UserMgtViewLocker from '@/views/member/UserMgtViewLocker.vue'

export default {
  mixins: [Mixin],
  name: 'UserMgtView',
	data() {
			return {
					memberTab: 0,
			}
	},
	methods: {
		MemberMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrMsgSend', '_blank', `width=850,height=20000`);
    },
	},
	components: {
			UserMgtViewInfo,
			UserMgtViewLecture,
			UserMgtViewPayment,
			UserMgtViewShopping,
			UserMgtViewOnetoone,
			UserMgtViewCoupon,
			UserMgtViewCart,
			UserMgtViewLocker,
	},
}
</script>
