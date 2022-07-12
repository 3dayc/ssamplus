<template lang="html">
    <!-- loginWrap -->
	<div id="joinWrap">
		<div class="formBack">
			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
			<div class="whiteBox accountInfo" v-if="goendTrigger">
				<h2>회원가입</h2>
				<h3>회원정보</h3>
				<div class="basicIp">
					<input type="text" id="" name="" placeholder="성명"/>
					<span class="ipBtn mailCase sizeM">
						<input type="text" placeholder="사내 이메일주소" @focus="btnActive"/><em>@kggroup.co.kr</em>
						<button type="button" class="btnM green" id="certyBtn1" disabled @click="ipSecurityTrigger = !ipSecurityTrigger">인증하기</button>
					</span>
					<div class="ipSecurity dupCase sizeM" v-if="ipSecurityTrigger">
						<input type="text" placeholder="인증번호 6자리" />
						<em><strong>9</strong>분 <strong>59</strong>초</em>
						<button class="btnM green" @click="ipSecurityEnd = !ipSecurityEnd">번호인증</button>
						<button class="btnM line">재전송</button>
					</div>
				</div>
				<h3>계정정보</h3>
				<span class="ipBtn sizeM">
					<input type="text" placeholder="아이디 (영문, 숫자를 포함하여 8자 이상)"/>
					<button class="btnM green">중복확인</button>
				</span>
				<p class="infoMsg">사용이 가능한 아이디입니다</p>
				<p class="erMsg">아이디는 영문, 숫자를 포함한 4~12자로 입력해주세요</p>
				<input type="password" id="" name="" placeholder="비밀번호 (영문, 숫자, 특수기호를 포함하여 8자 이상)"/>
				<p class="erMsg">영문, 숫자, 특수기호를 포함하여 8자 이상으로 설정해 주세요.</p>
				<input type="password" id="" name="" placeholder="비밀번호 확인"/>
				<div class="btnArea">
					<router-link to="./login" class="btnL greenline">취소</router-link>
					<button type="button" class="btnL green" @click="goendOpen">회원가입</button>
				</div>
			</div>
			<div class="whiteBox joinEnd" v-if="goendTrigger2">
				<h2>회원가입 완료</h2>
				<p>회원님의 아이디는 <strong>mjpark111</strong> 입니다.</p>
				<p>전체 관리자가 가입 승인 및 권한을 설정한 후부터 <br/>관리자 시스템 이용이 가능합니다. <br/><br/>전체 관리자에게 가입 승인을 요청해주세요. </p>
				<router-link to="./login" class="btnL wFull">로그인 화면으로 이동</router-link>
			</div>
			<p class="loginFooter">
				Copyright © KG Eduone . All rights reserved .
			</p>
		</div>
	</div>
    <!-- //loginWrap -->
</template>

<script>
export default {
  name: 'Join',
  data() {
    return {
      ipSecurityTrigger: false,
	    goendTrigger: true,
	    goendTrigger2: false
    }
  },
  methods: {
		goendOpen(event) {
		 		this.goendTrigger = false;
				this.goendTrigger2 = true;
	  },
		btnActive(event){
		  document.getElementById('certyBtn1').disabled = false;
		}
	},
}
</script>

<style lang="css" scoped>
</style>
