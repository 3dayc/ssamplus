<template lang="html">
  <div>
		<div class="pageTit">
			<h2>관리자 계정</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/accountManager">계정 관리</router-link><em>관리자 계정</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="accountManager">
        <!-- tab-wrap -->
        <div class="tabwrap">
					<!-- tab -->
					<div class="tabBack">
						<div class="tabNav">
							<nav>
								<ul>
									<li :class="{on:accountManagerTab===0}"><button @click="accountManagerTab = 0">관리자 목록</button></li>
									<li :class="{on:accountManagerTab===1}" class="newCaption"><button @click="accountManagerTab = 1">승인 대기</button></li>
								</ul>
							</nav>
						</div>
					</div>
					<!--// tab -->
					<div class="tabLayout">
						<div v-if="accountManagerTab == 0" class="tabData">
              <AccountManagerList />
						</div>
						<div v-if="accountManagerTab == 1" class="tabData">
              <AccountManagerApproval />
						</div>
					</div>
				</div>
        <!-- //tab-wrap -->
      </div>
    </article>
    </div>

    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        선택한 회원을 삭제 하시겠습니까?<br/>삭제 시 해당 계정은 관리자 시스템에<br/>접속할 수 없습니다
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">삭제</button>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import AccountManagerList from '@/views/manager/AccountManagerList.vue'
import AccountManagerApproval from '@/views/manager/AccountManagerApproval.vue'

export default {
  mixins: [Mixin],
  name: 'accountManager',
  data() {
    return {
      alertTrigger: false,
      accountManagerTab: 0,
    }
  },
  methods: {
  },
  components: {
    AccountManagerList,
    AccountManagerApproval,
  }
}
</script>
