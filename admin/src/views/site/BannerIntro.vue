<template lang="html">
	<div class="BannerIntro">
		<div class="pageTit">
			<h2>인트로 사이트</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>인트로 사이트</em></span>
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
										<li :class="{on:siteTab===0}"><button @click="siteTab = 0">1_로그인</button></li>
										<li :class="{on:siteTab===1}"><button @click="siteTab = 1">2_이벤트</button></li>
										<li :class="{on:siteTab===2}"><button @click="siteTab = 2">3_합격수기</button></li>
										<li :class="{on:siteTab===3}"><button @click="siteTab = 3">4_설명회</button></li>
										<li :class="{on:siteTab===4}"><button @click="siteTab = 4">5_리얼적중</button></li>
										<li :class="{on:siteTab===5}"><button @click="siteTab = 5">6_맞춤전략</button></li>
										<li :class="{on:siteTab===6}"><button @click="siteTab = 6">7_자주하는질문</button></li>
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="siteTab == 0" class="tabData">
								<BannerIntroLogin />
              </div>
              <div v-if="siteTab == 1" class="tabData">
								<BannerIntroEvent />
              </div>
              <div v-if="siteTab == 2" class="tabData">
								<BannerIntroPassReview />
              </div>
              <div v-if="siteTab == 3" class="tabData">
								<BannerIntroBriefing />
              </div>
              <div v-if="siteTab == 4" class="tabData">
								<BannerIntroRealHit />
              </div>
              <div v-if="siteTab == 5" class="tabData">
								<BannerIntroStrategy />
              </div>
              <div v-if="siteTab == 6" class="tabData">
								<BannerIntroFaq />
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
import BannerIntroLogin from '@/views/site/BannerIntroLogin.vue'
import BannerIntroEvent from '@/views/site/BannerIntroEvent.vue'
import BannerIntroPassReview from '@/views/site/BannerIntroPassReview.vue'
import BannerIntroBriefing from '@/views/site/BannerIntroBriefing.vue'
import BannerIntroRealHit from '@/views/site/BannerIntroRealHit.vue'
import BannerIntroStrategy from '@/views/site/BannerIntroStrategy.vue'
import BannerIntroFaq from '@/views/site/BannerIntroFaq.vue'

export default {
  mixins: [Mixin],
  name: 'BannerIntro',
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
			BannerIntroLogin,
			BannerIntroEvent,
			BannerIntroPassReview,
			BannerIntroBriefing,
			BannerIntroRealHit,
			BannerIntroStrategy,
			BannerIntroFaq,
	},
}
</script>
