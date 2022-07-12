<template lang="html">
  <div>
    <div class="pageTit">
			<h2>프리미엄 회원 지원</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/userMgt">회원 관리</router-link><em>프리미엄 회원 지원</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="userPremium"><!-- class 없어도 유지 -->
          <!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:teacherTab===0}"><button @click="teacherTab = 0">직/인강 전환</button></li>
										<li :class="{on:teacherTab===1}"><button @click="teacherTab = 1">기상인증</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="teacherTab == 0" class="tabData">
								<UserPremiumChange />
              </div>
              <div v-if="teacherTab == 1" class="tabData">
								<UserPremiumGetup />
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mixin from '@/plugins/mixins/Mixins.js';
import UserPremiumChange from '@/views/member/UserPremiumChange.vue'
import UserPremiumGetup from '@/views/member/UserPremiumGetup.vue'

export default {
  mixins: [Mixin],
  name: 'UserPremium',
  data() {
    return {
      teacherTab:0,
    }
  },
  methods: {
  },
  components: {
    UserPremiumChange,
    UserPremiumGetup,
  }
}
</script>

<style lang="css" scoped>
</style>
