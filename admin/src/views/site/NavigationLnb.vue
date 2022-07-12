<template lang="html">
	<div>
		<div class="pageTit">
			<h2>LNB 설정</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/navigationGnb">GNB/SNB 관리</router-link><em>LNB 설정</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="navigationLnb"><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:lnbSubjectTab===0}"><button @click="lnbSubjectTab = 0">수강신청 LNB</button></li>
										<li :class="{on:lnbSubjectTab===1}"><button @click="lnbSubjectTab = 1">쌤몰 LNB</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="lnbSubjectTab == 0" class="tabData">
								<NavigationLnbViewCourse/>
              </div>
              <div v-if="lnbSubjectTab == 1" class="tabData">
								<NavigationLnbViewMall/>
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
import NavigationLnbViewCourse from '@/views/site/NavigationLnbViewCourse.vue'
import NavigationLnbViewMall from '@/views/site/NavigationLnbViewMall.vue'

export default {
  mixins: [Mixin],
  name: 'NavigationLnb',
	data() {
			return {
				lnbSubjectTab: 0,
			}
	},
	methods: {
	},
	components: {
		NavigationLnbViewCourse,
		NavigationLnbViewMall,
	},
}
</script>
