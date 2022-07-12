<template lang="html">
	<div>
    <!-- loginWrap -->
		<div id="joinWrap">
	  	<div class="formBack">
	  		<div class="whiteBox">
	    		<div class="snsLoginSetting">
	    			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
	    			<div class="soloUsing" v-if="snsOk">
							<p>
								<strong>카카오 인증이 완료되었습니다.</strong>
								<span>약관동의 후, 쌤플러스 아이디로 로그인하세요. <br/>다음부터는 <em>카카오 간편인증</em>을 통해 로그인이 가능해집니다.</span>
							</p>
	  					<div class="basicIp">
	  						<input type="text" id="" name="" placeholder="아이디" @focus="alertTrigger = true" @blur="alertTrigger = false" />
	  						<input type="password" id="" name="" placeholder="비밀번호"/>
	  						<p class="erMsg" style="display:none;">* 로그인 정보가 올바르지 않습니다.</p>
	            </div>
	            <button class="btnL black" @click="snsOk = false, snsGo = true">로그인</button>
	            <router-link to="./login" class="btnL line">취소</router-link>
	    			</div>
	    			<div class="otherUsing" v-if="snsGo">
							<p>
								입력하신 정보는 이미 <strong>네이버 간편 로그인 회원</strong>으로 가입되어 있습니다.
								<span>기존 아이디 : <em>don***</em></span>
							</p>
							<router-link to="/mkup/main" class="btnSns naver"><em>계속 네이버로 간편 로그인</em></router-link>
	            <div>
	              <router-link to="/mkup/login" class="btnSns">쌤플러스 아이디로 로그인</router-link>
								쌤플러스 아이디로 로그인 연결을 원하시면 버튼을 클릭해주세요.
	            </div>
	            <router-link to="./login" class="btnL line">취소</router-link>
	    			</div>
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

		<!-- 기관인증  -->
		<Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
			<template slot="modalbody">
				<img :src="require(`@/assets/images/img_agencyOK3.png`)" alt="" @click="agencyOKTrigger = false" />
			</template>
		</Popup>
		<!-- //기관인증  -->
		<!-- 간편로그인 필수제공항목 팝업 Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false" class="snsLoginPop">
			<template slot="modalbody">
				<p>다음의 필수 제공 항목을 체크해지 하시면<br/> 쌤플러스 회원 확인절차를 진행할 수 없습니다.</p>
				<dl>
					<dt>필수제공항목</dt>
					<dd>(1) 이름, (2) 전화번호, (3) 생년월일, (4) 성별</dd>
				</dl>
				<span>필수 제공 항목의 정보를 제공하도록 해 주세요.</span>
			</template>
			<template slot="modalfooter">
				<button class="btnM" @click="alertTrigger02 = false">확인</button>
			</template>
    </Alert>
		<!-- //간편로그인 필수제공항목 팝업 Popup -->
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
  name: 'LoginSnsKaKao',
  components: {
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
  data() {
    return {
			alertTrigger: false,
			popupTrigger: false,
			currentTab: 0,
      snsOk: true,
			snsGo: false,
			agencyOKTrigger: true,
    }
  },
  methods: {
		snsOpen(event) {
		 		this.snsOk = false;
				this.snsGo = true;
	  },
	},
}
</script>
