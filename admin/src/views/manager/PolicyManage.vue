<template lang="html">
  <div>
    <div class="pageTit">
			<h2>정책 관리</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/menuManage">메뉴/정책 관리</router-link><em>정책 관리</em></span>
		</div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="policyManage"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:logTab===0}">
                    <button @click="logTab = 0">강좌 정책</button>
                  </li>
                  <li :class="{on:logTab===1}">
                    <button @click="logTab = 1">결제 정책</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 액션 로그 -->
            <div v-if="logTab == 0" class="tabData">
              <PolicyManageLecture />
            </div>
            <!-- //액션 로그 -->
            <!-- 접속 로그 -->
            <div v-if="logTab == 1" class="tabData">
              <PolicyManagePayment />
            </div>
            <!-- //접속 로그 -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PolicyManageLecture from '@/views/manager/PolicyManageLecture.vue'
import PolicyManagePayment from '@/views/manager/PolicyManagePayment.vue'

export default {
  mixins: [Mixin],
  name: 'PolicyManage',
  data() {
    return {
      logTab: 0,
    }
  },
  methods: {
  },
  components: {
    PolicyManageLecture,
    PolicyManagePayment,
  },
}
</script>
