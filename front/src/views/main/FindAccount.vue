<template lang="html">
	<div>
    <!-- loginWrap -->
		<div id="joinWrap">
	  	<div class="formBack">
	  		<div class="whiteBox">
	    		<div class="findAccount">
	    			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
						<div class="tabwrap">
							<!-- tab -->
							<div class="tabBack">
								<div class="tabNav">
									<nav>
										<ul class="lineTab">
											<li :class="{on:findAccountTab===0}"><button @click="findAccountTab = 0">아이디 찾기</button></li>
											<li :class="{on:findAccountTab===1}"><button @click="findAccountTab = 1">비밀번호 재설정</button></li>
										</ul>
									</nav>
								</div>
							</div>
							<!--// tab -->
							<!-- tabLayout -->
							<div class="tabLayout">
								<!--아이디 찾기-->
								<div v-if="findAccountTab == 0" class="tabData idCase" :key="findAccountTab">
									<div class="findId" v-if="findId == 0">
										<div class="findkindChoice">
											<div>
												<em>일치하는 회원정보가 존재하지 않습니다.</em>
												<button type="button" name="button" class="btnSnsKind phone" @click="findId = 1">휴대폰인증</button>
												<button type="button" name="button" class="btnSnsKind email" @click="findId = 2">이메일</button>
												<button type="button" name="button" class="btnSnsKind sns" @click="findId = 2">문자인증</button>
											</div>
										</div>
										<div class="noti">
											<ol>
												<li>법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</li>
												<li>본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.</li>
											</ol>
											<p>
												- NICE평가정보(주) 고객센터 : 1600-1522<br/>
												- 코리아크레딧뷰로(주) 고객센터 : 02-708-1000
											</p>
										</div>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
									<div class="findEnd" v-if="findId == 1">
										<div class="back">
											<span class="endTxt" v-if="findIdCase == 0">회원님의 아이디는 <strong>don******</strong> 입니다.</span>
											<div class="endTxt2" v-if="findIdCase == 1">
												조회되는 회원님의 아이디가 복수 개 입니다.
												<div>
													<ul>
														<li>don***</li>
														<li>hgo******</li>
														<li>Ert**********</li>
													</ul>
												</div>
												<!-- <div>
							            <span class="radioSet">
							              <input type="radio" name="radio1" id="idmulty01" checked />
							              <label for="idmulty01"><i></i>don***</label>
							            </span>
							            <span class="radioSet">
							              <input type="radio" name="radio1" id="idmulty02" />
							              <label for="idmulty02"><i></i>hgo******</label>
							            </span>
							            <span class="radioSet">
							              <input type="radio" name="radio1" id="idmulty03" />
							              <label for="idmulty03"><i></i>Ert**********</label>
							            </span>
												</div> -->
											</div>
										</div>
										<button class="btnL" @click="findIdCase = 1" v-if="findIdCase == 0">로그인</button>
										<router-link to="./login" class="btnL" v-if="findIdCase == 1">로그인</router-link>
										<button class="btnL line" @click="findAccountTab = 1, findPw = 0, findId = 0">비밀번호 재설정</button>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
									<div class="findEnd notFind" v-if="findId == 2">
										<div class="back">
											<span class="endTxt">일치하는 회원정보가 존재하지 않습니다.</span>
										</div>
										<button class="btnL line" @click="findId = 0">아이디 찾기</button>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
								</div>
								<!--//아이디 찾기-->
								<!--비밀번호 재설정-->
								<div v-if="findAccountTab == 1" class="tabData pwCase">
									<div class="findPw" v-if="findPw == 0">
										<div class="pwInput">
											<input type="text" id="" name="" placeholder="아이디"/>
											<em>일치하는 회원정보가 존재하지 않습니다.</em>
										</div>
										<div class="findkindChoice">
											<div>
												<button type="button" name="button" class="btnSnsKind phone" @click="findPw = 1">휴대폰인증</button>
												<button type="button" name="button" class="btnSnsKind email" @click="findPw = 2">이메일</button>
												<button type="button" name="button" class="btnSnsKind sns" @click="findPw = 2">문자인증</button>
											</div>
										</div>
										<div class="noti">
											<ol>
												<li>본인인증을 사용할 수 없는 사용자라면 고객센터로 문의해주세요.</li>
												<li>법인폰 사용자는 법인폰 개인인증 서비스 신청 후 휴대폰 인증을 하실 수 있습니다.</li>
												<li>본인인증이 잘 되지 않으시면 본인인증기관 고객센터로 문의 해주세요.</li>
											</ol>
											<p>
												- 쌤플러스 고객센터 : 1544-0678<br/>
												- NICE평가정보(주) 고객센터 : 1600-1522<br/>
												- 코리아크레딧뷰로(주) 고객센터 : 02-708-1000
											</p>
										</div>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
									<div class="pwChange" v-if="findPw == 1">
										<div class="back">
											<div class="basicIp">
												<input type="password" id="" name="" placeholder="신규 비밀번호" class="pwCheck" :class="{ok:pwcase1===true}" @blur="pwcase1 = true"/>
												<p class="erMsg" style="display:none;">* 영문, 숫자, 특수기호를 포함하여 8자리 이상으로 입력해 주세요.</p>
												<input type="password" id="" name="" placeholder="신규 비밀번호 확인" class="pwCheck" :class="{error:pwcase2===true}" @blur="pwcase2 = true"/>
												<p class="erMsg" v-if="pwcase2 == true">* 비밀번호가 일치하지 않습니다.</p>
												<p class="info">비밀번호는 영문, 숫자, 특수기호를 포함하여 8자리 이상으로 입력해 주세요.</p>
											</div>
										</div>
										<router-link to="./login" class="btnL">확인</router-link>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
									<div class="findEnd" v-if="findPw == 2">
										<div class="back">
											<span class="endTxt">일치하는 회원정보가 존재하지 않습니다.</span>
										</div>
										<router-link to="./login" class="btnL">로그인</router-link>
										<button class="btnL line" @click="findPw = 0">비밀번호 재설정</button>
										<router-link to="./login" class="btnL line">취소</router-link>
									</div>
								</div>
								<!--//비밀번호 재설정-->
							</div>
							<!--// tabLayout -->
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
  name: 'FindAccount',
  components: {
		PolicyService,
		PolicyPrivacy,
		PolicySms,
		PolicyEmail,
  },
	data() {
		return {
			popupTrigger: false,
			currentTab: 1,
			findAccountTab: 0,
			findId: 0,
			findPw: 0,
			findIdCase: 0,
			pwcase1:false,
			pwcase2:false,
		}
	},
  methods: {
	},
}
</script>
