<template lang="html">
	<div>
		<div class="pageTit">
			<h2>메인 화면</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>메인 화면</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bannerMain"><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:siteTab===0}"><button @click="siteTab = 0">1_팝업</button></li>
										<li :class="{on:siteTab===1}"><button @click="siteTab = 1">2_메인배너</button></li>
										<li :class="{on:siteTab===2}"><button @click="siteTab = 2">3_좌측광고</button></li>
										<li :class="{on:siteTab===3}"><button @click="siteTab = 3">4_게시판 옆 광고</button></li>
										<li :class="{on:siteTab===4}"><button @click="siteTab = 4">5_중간 띠 배너(1)</button></li>
										<li :class="{on:siteTab===5}"><button @click="siteTab = 5">6_선생님 영역</button></li>
										<li :class="{on:siteTab===6}"><button @click="siteTab = 6">7_중간 띠 배너(2)</button></li>
										<li :class="{on:siteTab===7}"><button @click="siteTab = 7">8_추천 컨텐츠</button></li>
										<li :class="{on:siteTab===8}"><button @click="siteTab = 8">9_리얼적중</button></li>
									</ul>
								</nav>
							</div>
							<!-- <span class="btnArea">
								<button class="btnPreview">미리보기</button>
							</span> -->
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="siteTab == 0" class="tabData">
								<BannerMainPopup />
              </div>
              <div v-if="siteTab == 1" class="tabData">
								<BannerMainCenter />
              </div>
              <div v-if="siteTab == 2" class="tabData">
								<BannerMainLeft />
              </div>
              <div v-if="siteTab == 3" class="tabData">
								<BannerMainBbs />
              </div>
              <div v-if="siteTab == 4" class="tabData">
								<BannerMainLine />
              </div>
              <div v-if="siteTab == 5" class="tabData">
								<BannerMainTeacher />
              </div>
              <div v-if="siteTab == 6" class="tabData">
								<BannerMainLine2 />
              </div>
              <div v-if="siteTab == 7" class="tabData">
								<BannerMainRecommend />
              </div>
              <div v-if="siteTab == 8" class="tabData">
								<BannerMainRealHit />
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
import BannerMainPopup from '@/views/site/BannerMainPopup.vue'
import BannerMainCenter from '@/views/site/BannerMainCenter.vue'
import BannerMainLeft from '@/views/site/BannerMainLeft.vue'
import BannerMainBbs from '@/views/site/BannerMainBbs.vue'
import BannerMainRecommend from '@/views/site/BannerMainRecommend.vue'
import BannerMainLine from '@/views/site/BannerMainLine.vue'
import BannerMainTeacher from '@/views/site/BannerMainTeacher.vue'
import BannerMainLine2 from '@/views/site/BannerMainLine2.vue'
import BannerMainSuccess from '@/views/site/BannerMainSuccess.vue'
import BannerMainRealHit from '@/views/site/BannerMainRealHit.vue'

export default {
  mixins: [Mixin],
  name: 'BannerMain',
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
			BannerMainPopup,
			BannerMainCenter,
			BannerMainLeft,
			BannerMainBbs,
			BannerMainRecommend,
			BannerMainLine,
			BannerMainTeacher,
			BannerMainLine2,
			BannerMainSuccess,
			BannerMainRealHit,
	},
}
</script>
