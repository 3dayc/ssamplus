<template lang="html">
	<div class="bannerSpecial">
		<div class="pageTit">
			<h2>선생님 스폐셜</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>선생님 스폐셜</em></span>
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
										<li :class="{on:siteTab===0}"><button @click="siteTab = 0">1_홈 이벤트</button></li>
										<li :class="{on:siteTab===1}"><button @click="siteTab = 1">2_홈 리얼적중</button></li>
										<li :class="{on:siteTab===2}"><button @click="siteTab = 2">3_홈 인터뷰</button></li>
										<li :class="{on:siteTab===3}"><button @click="siteTab = 3">4_홈 수강후기</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="siteTab == 0" class="tabData">
								<BannerSpecialHome />
              </div>
              <div v-if="siteTab == 1" class="tabData">
								<BannerSpecialRealHit />
              </div>
              <div v-if="siteTab == 2" class="tabData">
								<BannerSpecialInterview />
              </div>
              <div v-if="siteTab == 3" class="tabData">
								<BannerSpecialReview />
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
import BannerSpecialHome from '@/views/site/BannerSpecialHome.vue'
import BannerSpecialRealHit from '@/views/site/BannerSpecialRealHit.vue'
import BannerSpecialInterview from '@/views/site/BannerSpecialInterview.vue'
import BannerSpecialReview from '@/views/site/BannerSpecialReview.vue'

export default {
  mixins: [Mixin],
  name: 'BannerSpecial',
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
		BannerSpecialHome,
		BannerSpecialRealHit,
		BannerSpecialInterview,
		BannerSpecialReview,
	},
}
</script>
