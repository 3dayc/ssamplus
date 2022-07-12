<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>비밀번호 재설정</h1>
    </div>
    <div class="winContent">
      <div id="joinWrap" class="pwChangePop">
    		<div class="formBack">
    			<div class="whiteBox login">
    				<div id="pwSetting" v-if="pwSetting">
    					<div class="basicIp">
    						<input type="password" id="" name="" placeholder="현재 비밀번호"/>
    						<input type="password" id="" name="" placeholder="신규 비밀번호"/>
    						<input type="password" id="" name="" placeholder="신규 비밀번호 확인"/>
    					</div>
    					<button type="button" class="btnL green wFull">비밀번호 변경</button>
            </div>
    				<div class="pwSettingEnd" v-if="!pwSetting">
    					<h2>비밀번호 설정 완료</h2>
    					<p>비밀번호가 설정되었습니다. <br/>관리자 시스템을 이용할 수 있습니다.</p>
    					<a href="#" class="btnL green wFull">메인 화면으로 이동</a>
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
  name: 'AdminPassword',
  data() {
    return {
      pwSetting: true,
    }
  },
  components: {
  }
}
</script>
