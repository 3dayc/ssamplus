<template lang="html">
    <!-- loginWrap -->
	<div id="joinWrap">
		<div class="formBack">
			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
			<div class="whiteBox accountInfo" v-if="goendTrigger">
				<h2>회원가입</h2>
				<h3>회원정보</h3>
				<div class="basicIp">
					<input type="text"  placeholder="성명" v-model="joinForm.name"/>
					<p class="erMsg" v-if="valiFlag.nameVali">성명을 입력해주세요</p>
					<span class="ipBtn mailCase sizeM">
						<input type="text" placeholder="사내 이메일주소" @focus="emailFocusOn()" @blur="emailFocusOut()" v-model="joinForm.email" /><em>@kggroup.co.kr</em>
						<button type="button" class="btnM green"  :disabled="emailTrigger"  @click="emailCert()">인증하기</button>
					</span>
					<p class="erMsg" v-if="valiFlag.emailVali">사내 이메일주소를 입력해주세요</p>
					<div class="ipSecurity dupCase sizeM" v-if="ipSecurityTrigger">
						<input type="text" placeholder="인증번호 6자리를 입력해 주세요." />
						<vue-countdown :time="1000 * 60 * 10" v-slot="{ minutes, seconds }">
							<em><strong>{{ minutes }}</strong>분 <strong>{{ seconds }}</strong>초</em>
							<button class="btnM green" @click="ipSecurityEnd = !ipSecurityEnd">번호인증</button>
							<button class="btnM line">재전송</button>
						</vue-countdown>
					</div>
				</div>
				<h3>계정정보</h3>
				<span class="ipBtn sizeM">
					<input type="text" placeholder="아이디 (영문, 숫자를 포함하여 8자 이상)" v-model="joinForm.memId"/>
					<button class="btnM green" @click="idDupCheck()">중복확인</button>
				</span>
				<p class="infoMsg" v-if="id_cert">사용이 가능한 아이디입니다</p>
				<p class="erMsg" v-if="valiFlag.idVali">{{ valiMsg }}</p>
				<input type="password" id="" name="" placeholder="비밀번호 (영문, 숫자, 특수기호를 포함하여 8자 이상)" v-model="joinForm.pwd"/>
				<p class="erMsg" v-if="pw_form">영문, 숫자, 특수기호를 포함하여 8자 이상으로 설정해 주세요.</p>
				<input type="password" id="" name="" placeholder="비밀번호 확인" v-model="joinForm.pwd2"/>
				<div class="btnArea">
					<button type="button" class="btnL greenline" @click="back">취소</button>
					
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
				Copyright © KG Eduone . All rights
			</p>
		</div>
	</div>
    <!-- //loginWrap -->
</template>

<script>
//아이디는 영문, 숫자를 포함한 4~12자로 입력해주세요
export default {
  name: 'Join',
  data() {
    return {
      ipSecurityTrigger: false,
	  emailTrigger : true,
	    goendTrigger: true,
	    goendTrigger2: false,
		id_cert: false,
		valiFlag: {
			nameVali:false,
			idVali: false,
			emailVali: false
		},
		pw_form:false,				
		joinForm : {
			memId:"",
			pwd:"",
			pwd2:"",
			name: "",
			email: ""
		},
		num: 3,
		input: 0
    }
  },
  methods: {
		goendOpen(event) {
			if( this.joinForm.name == '') {
				this.valiFlag.nameVali = true;
				return;
			}else{
				this.valiFlag.nameVali = false;
			}
			
		},
		emailFocusOn(){
			this.emailTrigger = false;
			
		},
		emailFocusOut() {
			if(this.joinForm.email == '') {
				this.emailTrigger = true;
			}
		},
		back(){
			this.$router.go(-1);
		},
		idDupCheck() {
			alert('중복확인 ');
		},
		emailCert() {
			if(this.joinForm.email == '') {
				this.valiFlag.emailVali = true;
				return;
			}else{
				this.valiFlag.emailVali = false;
			}

		}
	},
	computed: {
		
	},
	watch: {
		ipSecurityTrigger: function () {
			alert();
		}
	}
}


</script>

<style lang="css" scoped>
</style>
