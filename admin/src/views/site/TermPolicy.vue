<template lang="html">
	<div>
		<div class="pageTit">
			<h2>이용약관 등</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/termPolicy">사이트 약관 관리</router-link><em>이용약관 등</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="termPolicy"><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:policyTab===0}"><button @click="policyTab = 0">이용약관</button></li>
										<li :class="{on:policyTab===1}"><button @click="policyTab = 1">개인정보 수집 및 이용약관</button></li>
										<li :class="{on:policyTab===2}"><button @click="policyTab = 2">SNS 마케팅 수신동의</button></li>
										<li :class="{on:policyTab===3}"><button @click="policyTab = 3">이메일 마케팅 수신동의</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="policyTab == 0" class="tabData">
								<TermPolicySite/>
              </div>
              <div v-if="policyTab == 1" class="tabData">
								<TermPolicyPersonal/>
              </div>
              <div v-if="policyTab == 2" class="tabData">
								<TermPolicySns/>
              </div>
              <div v-if="policyTab == 3" class="tabData">
								<TermPolicyEmail/>
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
import Mixin from '@/plugins/mixins/Mixins.js';
import TermPolicySite from '@/views/site/TermPolicySite.vue'
import TermPolicyPersonal from '@/views/site/TermPolicyPersonal.vue'
import TermPolicySns from '@/views/site/TermPolicySns.vue'
import TermPolicyEmail from '@/views/site/TermPolicyEmail.vue'

export default {
  mixins: [Mixin],
  name: 'TermPolicy',
	data() {
			return {
				policyTab: 0,
			}
	},
	methods: {
	},
	components: {
		TermPolicySite,
		TermPolicyPersonal,
		TermPolicySns,
		TermPolicyEmail,
	},
}
</script>
