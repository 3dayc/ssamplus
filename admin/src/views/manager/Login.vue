<template lang="html">
    <!-- loginWrap -->
	<div id="joinWrap">
		<div class="formBack">
			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
			<div class="whiteBox login">
				<h2>관리자 시스템</h2>
				<div id="basicLogin" v-if="basicLogin">
					<div class="basicIp">

						<!-- <ValidationProvider rules="email" v-slot="{ errors }">
							<input id="email" type="text" placeholder="이메일" v-model="email" />
							<p class="erMsg">{{ errors[0] }}</p>
						</ValidationProvider>
						<ValidationProvider rules="numeric" v-slot="{ errors }">
							<input id="number" type="text" placeholder="숫자" v-model="password" />
							<p class="erMsg">{{ errors[0] }}</p>
						</ValidationProvider> 2021-06-07 유효성체크 개발용 샘플 -->

						<input type="text" id="" name="" placeholder="아이디"/>
						<input type="password" id="" name="" placeholder="비밀번호"/>

						<p class="erMsg">* 아이디 , 비밀번호가 일치하지 않습니다.</p>
						<p class="erMsg" style="display:none;">* 승인되지 않은 계정입니다. 전체 관리자에게 가입 승인을 요청해주세요.</p>
					</div>
					<button type="button" class="btnL green wFull" @click="loginOpen">로그인</button>
				</div>
				<div id="outLogin" v-if="outLogin">
					<div class="basicIp">
						<input type="text" id="" name="" placeholder="아이디"/>
						<input type="password" id="" name="" placeholder="비밀번호"/>
						<div class="ipSecurity sizeM">
							<input type="text" placeholder="인증번호 6자리" />
							<em><strong>9</strong>분 <strong>59</strong>초</em>
							<button class="btnM">재발송</button>
						</div>
					</div>
					<p class="erMsg">* 미등록된 IP 로 추가 인증이 필요합니다 . 사내 메신저로 인증번호를 발송하였으니 인증번호를 입력하여 로그인해주세요 . (최대 5 분 소요)</p>
					<a href="/mkup/member/userMgt" class="btnL green wFull">로그인</a>
				</div>
				<div class="goJoin">
					<span class="checkSet">
						<input type="checkbox" id="one"/>
						<label for="one"><i></i>아이디 저장</label>
					</span>
					<router-link to="./join">회원가입</router-link>
					<router-link to="./findAccount">아이디찾기/비밀번호 재설정</router-link>
				</div>
			</div>
			<p class="loginFooter">
				이 시스템의 사용은 승인된 사용자로 제한됩니다 . 사용자의 사용정보는 모니터링 되며 기록 됩니다.<br/>
				이 시스템을 사용하는 모든 사용자는 명시적으로 이러한 모니터링 및 기록에 동의하여 처리되며<br/>
				범죄활동이 검출되면 해당 행정 법률 기관에 시스템 레코드와 개인정보가 제공될 수 있습니다.<br/>
				Copyright © KG Eduone . All rights reserved .
			</p>
		</div>
	</div>
    <!-- //loginWrap -->
</template>

<script>
import { extend } from 'vee-validate';
import { email } from 'vee-validate/dist/rules';
extend('email', {
  ...email,
  message: '이메일을 확인해주세요.'
});

export default {
  name: 'Login',
  data() {
    return {
      basicLogin: true,
			outLogin: false,
			email: '',
			password: ''
    }
  },
  methods: {
		loginOpen(event) {
		 		this.basicLogin = false;
				this.outLogin = true;
	  },
	},
}
</script>

<style lang="css" scoped>
</style>
