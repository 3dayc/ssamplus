<template lang="html">
	<div>
	   <!-- loginWrap -->
		<div id="joinWrap">
	  	<div class="formBack loginCase">
	  		<div class="whiteBox">
	    		<div class="loginWrap">
	    			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
	    			<div :class="{mHeight:this.mobile}">
	  					<div class="basicIp">
	  						<input type="text" id="" name="" placeholder="아이디"/>
	  						<div class="eyeSet">
									<input :type="eye ? 'text' : 'password'" id="" placeholder="비밀번호" @focus="inputActive = false"/>
									<button class="btnEye" :class="{on:eye===true}" @click="eye = !eye">비밀번호 보이기</button>
								</div>
	              <div class="tL">
	                <span class="checkSet">
	                  <input type="checkbox" id="one"/>
	                  <label for="one"><i></i>아이디 저장</label>
	                </span>
	                <span class="checkSet">
	                  <input type="checkbox" id="one2"/>
	                  <label for="one2"><i></i>로그인 상태 유지</label>
	                </span>
	              </div>
	  						<p class="erMsg" style="display:none">* 로그인 정보가 올바르지 않습니다.</p>
	            </div>
	            <router-link to="./main" class="btnL" :class="{off:inputActive===true}">로그인</router-link>
	    				<span class="goJoin">
	    					<router-link to="./findAccount">아이디 찾기</router-link>
	    					<router-link to="./findAccount">비밀번호 재설정</router-link>
	    					<router-link to="./join">회원가입</router-link>
	    				</span>
	    			</div>
						<div class="snsArea">
							<router-link to="/mkup/loginNaver" class="btnSns naver"><em>네이버 로그인</em></router-link>
							<router-link to="/mkup/loginKakao" class="btnSns kakao"><em>카카오 로그인</em></router-link>
						</div>
	    		</div>
	        <div class="loginBanner">
	          <img :src="require(`@/assets/images/thumbnail/@tmp_loginBanner.png`)" alt="" />
	        </div>
	      </div>
	      <div class="joinFooter">
	        <a href="http://kgeduone.co.kr/" target="_blank">회사소개</a>
	        <button @click="popupTrigger = true, currentTab = 0">이용약관</button>
	        <button @click="popupTrigger = true, currentTab = 1">개인정보처리방침</button>
	      </div>
	    </div>
		</div>
	  <!-- //loginWrap -->

		<!-- 동의 본문 팝업 Popup -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" class="agreePop">
			<template slot="modalbody">
				<button @click="popupTrigger = false" class="modalClose">close</button>
				<!-- tab-wrap2 -->
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul class="lineTab">
									<li :class="{on:currentTab===0}"><button @click="currentTab = 0">이용약관</button></li>
									<li :class="{on:currentTab===1}"><button @click="currentTab = 1">개인정보 수집 및 이용약관</button></li>
									<li :class="{on:currentTab===2}"><button @click="currentTab = 2">SNS 마케팅 수신동의</button></li>
									<li :class="{on:currentTab===3}"><button @click="currentTab = 3">이메일 마케팅 수신동의</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<div v-if="currentTab == 0" class="tabData" :key="currentTab"><PolicyService /></div>
						<div v-if="currentTab == 1" class="tabData"><PolicyPrivacy /></div>
						<div v-if="currentTab == 2" class="tabData"><PolicySms /></div>
						<div v-if="currentTab == 3" class="tabData"><PolicyEmail /></div>
					</div>
				</div>
				<!-- //tab-wrap -->
			</template>
		</Popup>
		<!-- 동의 본문 팝업 Popup -->
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PolicyService from '@/views/main/PolicyService.vue';
import PolicyPrivacy from '@/views/main/PolicyPrivacy.vue';
import PolicySms from '@/views/main/PolicySms.vue';
import PolicyEmail from '@/views/main/PolicyEmail.vue';

export default {
  mixins: [Mixin],
  name: 'Login',
  components: {
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
  data() {
    return {
			popupTrigger: false,
			currentTab: 0,
			inputActive: true,
			eye: false,
    }
  },
}
</script>
