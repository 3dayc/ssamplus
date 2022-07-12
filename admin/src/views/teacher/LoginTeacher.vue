<template lang="html">
  <!-- loginWrap -->
	<div id="joinWrap" class="teacherWrap">
		<div class="formBack">
			<h1><img :src="require(`@/assets/images/i_logo_login.svg`)" alt="KG에듀원 쌤플러스" /></h1>
			<div class="whiteBox login">
				<div id="basicLogin" v-if="basicLogin">
					<h2>강사용 시스템</h2>
					<div class="basicIp">
						<input type="text" id="" name="" placeholder="아이디"/>
						<input type="password" id="" name="" placeholder="비밀번호"/>
						<p class="erMsg">* 아이디 , 비밀번호가 일치하지 않습니다.</p>
						<p class="erMsg" style="display:none;">* 승인되지 않은 계정입니다. 전체 관리자에게 가입 승인을 요청해주세요.</p>
					</div>
					<button type="button" style="display:none;" class="btnL gray wFull" @click="loginOpen">로그인</button><!-- 비활성화 -->
					<button type="button" class="btnL blue wFull" @click="loginOpen">로그인</button><!-- 활성화 -->
					<div class="goJoin">
						<span class="checkSet">
							<input type="checkbox" id="one"/>
							<label for="one"><i></i>아이디 저장</label>
						</span>
						<router-link to="/mkup/findAccountT">아이디찾기/비밀번호 재설정</router-link>
					</div>
				</div>
				<!-- 최초 로그인시 비밀번호 설정 -->
				<div id="pwSetting" v-if="pwSetting">
					<div class="basicIp">
						<input type="password" id="" name="" placeholder="현재 비밀번호"/>
						<input type="password" id="" name="" placeholder="신규 비밀번호"/>
						<input type="password" id="" name="" placeholder="신규 비밀번호 확인"/>
					</div>
					<button type="button" class="btnL blue wFull" @click="loginOpen02">비밀번호 변경</button>
				</div>
				<!-- //최초 로그인시 비밀번호 설정 -->
				<div class="pwSettingEnd" v-if="pwSettingEnd">
					<h2>비밀번호 설정 완료</h2>
					<p>비밀번호가 설정되었습니다. <br/>강사용 시스템을 이용할 수 있습니다. </p>
					<a href="/mkup/teacher/statsDaily" class="btnL blue wFull">메인 화면으로 이동</a>
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
export default {
  name: 'LoginTeacher',
  data() {
    return {
      basicLogin: true,
			pwSetting: false,
			pwSettingEnd: false,
    }
  },
  methods: {
		loginOpen() {
		 		this.basicLogin = false;
				this.pwSetting = true;
				this.pwSettingEnd = false;
	  },
		loginOpen02() {
		 		this.basicLogin = false;
				this.pwSetting = false;
				this.pwSettingEnd = true;
	  },

	},
}
</script>

<style lang="css" scoped>
</style>
