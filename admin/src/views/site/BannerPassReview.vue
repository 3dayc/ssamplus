<template lang="html">
	<div class="bannerPassReview">
		<div class="pageTit">
			<h2>합격수기</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>합격수기</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:siteTab===0}"><button @click="siteTab = 0">1_홈(합격자 명단)</button></li>
										<li :class="{on:siteTab===1}"><button @click="siteTab = 1">1_홈(CasebyCase)</button></li>
										<li :class="{on:siteTab===2}"><button @click="siteTab = 2">1_홈(합격인터뷰)</button></li>
										<li :class="{on:siteTab===3}"><button @click="siteTab = 3">1_홈(합격수기)</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="siteTab == 0" class="tabData">
								<BannerPassReviewSuccess />
              </div>
              <div v-if="siteTab == 1" class="tabData">
								<BannerPassReviewCase />
              </div>
              <div v-if="siteTab == 2" class="tabData">
								<BannerPassReviewInterview />
              </div>
              <div v-if="siteTab == 3" class="tabData">
								<BannerPassReviewPass />
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
import BannerPassReviewInterview from '@/views/site/BannerPassReviewInterview.vue'
import BannerPassReviewCase from '@/views/site/BannerPassReviewCase.vue'
import BannerPassReviewPass from '@/views/site/BannerPassReviewPass.vue'
import BannerPassReviewSuccess from '@/views/site/BannerPassReviewSuccess.vue'

export default {
  mixins: [Mixin],
  name: 'BannerPassReview',
	data() {
			return {
				siteTab: 0,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
		},
	},
	components: {
			BannerPassReviewInterview,
			BannerPassReviewCase,
			BannerPassReviewPass,
			BannerPassReviewSuccess,
	},
}
</script>
