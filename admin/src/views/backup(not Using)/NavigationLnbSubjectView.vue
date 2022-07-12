<template lang="html">
	<div>
		<div class="pageTit">
			<h2>과목 (LNB)</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/bannerGnb">GNB/SNB 관리</router-link><router-link to="/mkup/site/bannerLnbSubject">과목 (LNB)</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bannerLnbSubjectView"><!-- class 없어도 유지 -->
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
							<span class="btnArea">
	            	<router-link to="/mkup/site/bannerLnbSubject" class="btnList">목록으로</router-link>
								<button class="btnM green ml10">저장</button>
							</span>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="lnbSubjectTab == 0" class="tabData">
								<NavigationLnbSubjectViewLecture/>
              </div>
              <div v-if="lnbSubjectTab == 1" class="tabData">
								<NavigationLnbSubjectViewMall/>
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
import NavigationLnbSubjectViewLecture from '@/views/site/NavigationLnbSubjectViewLecture.vue'
import NavigationLnbSubjectViewMall from '@/views/site/NavigationLnbSubjectViewMall.vue'

export default {
  mixins: [Mixin],
  name: 'NavigationLnbSubjectView',
	data() {
			return {
				lnbSubjectTab: 0,
			}
	},
	methods: {
	},
	components: {
		NavigationLnbSubjectViewLecture,
		NavigationLnbSubjectViewMall,
	},
}
</script>
