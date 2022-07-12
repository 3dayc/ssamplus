<template lang="html">
	<div class="bannerSammall">
		<div class="pageTit">
			<h2>쌤몰</h2>
      <span><router-link to="/mkup/site/subjectMgt">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>쌤몰</em></span>
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
										<li :class="{on:ssammallTab===0}"><button @click="ssammallTab = 0">1_홈(메인배너)</button></li>
										<li :class="{on:ssammallTab===1}"><button @click="ssammallTab = 1">1_홈(좌측광고)</button></li>
										<li :class="{on:ssammallTab===2}"><button @click="ssammallTab = 2">1_홈(중간띠배너)</button></li>
										<li :class="{on:ssammallTab===3}"><button @click="ssammallTab = 3">1_홈(검색결과광고)</button></li>
										<li :class="{on:ssammallTab===4}"><button @click="ssammallTab = 4">2_교재도서</button></li>
										<!-- <li :class="{on:ssammallTab===5}"><button @click="ssammallTab = 5">3_학습기기</button></li>
										<li :class="{on:ssammallTab===6}"><button @click="ssammallTab = 6">4_백퍼후기</button></li> 2021-12-01 학습기기, 백퍼후기 탭 삭제 -->
									</ul>
								</nav>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="ssammallTab == 0" class="tabData">
								<BannerSammallHome />
              </div>
              <div v-if="ssammallTab == 1" class="tabData">
								<BannerSammallHomeLeft />
              </div>
              <div v-if="ssammallTab == 2" class="tabData">
								<BannerSammallHomeBand />
              </div>
              <div v-if="ssammallTab == 3" class="tabData">
								<BannerSammallSearch />
              </div>
              <div v-if="ssammallTab == 4" class="tabData">
								<BannerSammallBook />
              </div>
              <div v-if="ssammallTab == 5" class="tabData">
								<BannerSammallGoods />
              </div>
              <div v-if="ssammallTab == 6" class="tabData">
								<BannerSammallReview />
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
import BannerSammallHome from '@/views/site/BannerSammallHome.vue'
import BannerSammallHomeLeft from '@/views/site/BannerSammallHomeLeft.vue'
import BannerSammallHomeBand from '@/views/site/BannerSammallHomeBand.vue'
import BannerSammallBook from '@/views/site/BannerSammallBook.vue'
import BannerSammallGoods from '@/views/site/BannerSammallGoods.vue'
import BannerSammallSearch from '@/views/site/BannerSammallSearch.vue'
import BannerSammallReview from '@/views/site/BannerSammallReview.vue'

export default {
  mixins: [Mixin],
  name: 'BannerSammall',
	data() {
			return {
					ssammallTab: 0,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
		},
	},
	components: {
			BannerSammallHome,
			BannerSammallHomeLeft,
			BannerSammallHomeBand,
			BannerSammallBook,
			BannerSammallGoods,
			BannerSammallSearch,
			BannerSammallReview,
	},
}
</script>
