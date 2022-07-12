<template lang="html">
	<!-- loginWrap -->
	<div id="joinWrap" class="teacherWrap">
		<div class="formBack">
			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
			<div class="whiteBox findAccount">
				<h2>아이디/비밀번호 찾기</h2>
				<div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul>
									<li :class="{on:findAccountTab===0}"><button @click="findAccountTab = 0">아이디 찾기</button></li>
									<li :class="{on:findAccountTab===1}"><button @click="findAccountTab = 1">비밀번호 재설정</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<!-- 아이디 찾기 -->
						<div v-if="findAccountTab == 0" class="tabData" :key="findAccountTab">
							<div class="basicIp">
								<span class="ipBtn sizeM">
									<input type="text" placeholder="강사 등록 시 사용한  휴대전화 번호 입력"  @focus="idMailBtnDisabled = false;" :disabled="idMailDisabled" />
									<button type="button" class="btnM blue" :disabled="idMailBtnDisabled" @click="idMailDisabled = true, idMailBtnDisabled = true, ipSecurityTrigger = true">인증하기</button>
								</span>
								<div class="ipSecurity dupCase sizeM" v-if="ipSecurityTrigger">
									<input type="number" placeholder="인증번호 6자리" @focus="idSecurityDisabled = false;"/>
									<em><strong>9</strong>분 <strong>59</strong>초</em>
									<button class="btnM blue" :disabled="idSecurityDisabled" @click="ipSecurityTrigger = false, ipSecurityEnd = true">번호인증</button>
									<button class="btnM line">재전송</button>
								</div>
								<p class="infoMsg" v-if="ipSecurityEnd">* 회원님의 아이디는 <strong>mjpark111</strong> 입니다.</p>
							</div>
							<div class="btnArea">
								<router-link to="./login" class="btnL blue wFull" v-if="ipSecurityEnd">로그인 하기</router-link>
								<button class="btnL wFull">취소</button>
							</div>
						</div>
						<!-- //아이디 찾기 -->
						<!-- 비밀번호 재설정 -->
						<div v-if="findAccountTab == 1" class="tabData">
							<div class="basicIp">
								<span class="ipBtn sizeM">
									<input type="text" placeholder="강사 등록 시 사용한  휴대전화 번호 입력" @focus="pwMailBtnDisabled = false;" :disabled="pwMailDisabled"/>
									<button class="btnM blue" id="certyBtn2" :disabled="pwMailBtnDisabled" @click="pwMailDisabled = true, pwMailBtnDisabled = true, ipSecurityTrigger2 = true">인증하기</button>
								</span>
								<div class="ipSecurity dupCase sizeM" v-if="ipSecurityTrigger2">
									<input type="number" placeholder="인증번호 6자리" @focus="pwSecurityDisabled = false;"/>
									<em><strong>9</strong>분 <strong>59</strong>초</em>
									<button class="btnM blue" :disabled="pwSecurityDisabled" @click="ipSecurityTrigger2 = false, ipSecurityEnd2 = true">번호인증</button>
									<button class="btnM line">재전송</button>
								</div>
								<input type="password" placeholder="비밀번호 (영문, 숫자, 특수기호를 포함하여 8자 이상)" v-if="ipSecurityEnd2"/>
								<input type="password" placeholder="비밀번호 확인" v-if="ipSecurityEnd2"/>
							</div>
							<div class="btnArea">
								<button class="btnL blue wFull" v-if="ipSecurityEnd2">비밀번호 변경</button>
								<router-link to="./login" class="btnL wFull">취소</router-link>
							</div>
						</div>
						<!-- //비밀번호 재설정 -->
					</div>
				</div>
			</div>
			<p class="loginFooter">
				Copyright © KG Eduone . All rights reserved .
			</p>
		</div>
	</div>
	<!-- //loginWrap -->
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
	mixins: [Mixin],
  name: 'FindAccountTeacher',
	data() {
		return {
			idMailBtnDisabled: true,
			idSecurityDisabled: true,
			pwMailBtnDisabled: true,
			pwSecurityDisabled: true,
      ipSecurityTrigger: false,
	    ipSecurityTrigger2: false,
			findAccountTab: 0,
			ipSecurityEnd: false,
			ipSecurityEnd2: false,
		}
	},
  methods: {
	},
}
</script>

<style lang="css" scoped>
</style>
