<template lang="html">
	<div>
		<div class="pageTit">
			<h2>선생님 (LNB)</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/bannerGnb">GNB/SNB 관리</router-link><em>선생님 (LNB)</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bannerLnbTeacher"><!-- class 없어도 유지 -->
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:lnbTeacherTab===0}"><button @click="lnbTeacherTab = 0">수강신청 LNB</button></li>
										<li :class="{on:lnbTeacherTab===1}"><button @click="lnbTeacherTab = 1">쌤몰 LNB</button></li>
									</ul>
								</nav>
							</div>
							<span class="btnArea">
	            	<router-link to="/mkup/site/bannerLnbTeacher" class="btnList">목록으로</router-link>
								<button class="btnM green ml10">저장</button>
							</span>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="lnbTeacherTab == 0" class="tabData">
								<NavigationLnbTeacherLecture/>
								<NavigationLnbTeacherLectureView/>
              </div>
              <div v-if="lnbTeacherTab == 1" class="tabData">
								<NavigationLnbTeacherLecture/>
								<NavigationLnbTeacherLectureView/>
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
import NavigationLnbTeacherLecture from '@/views/site/NavigationLnbTeacherLecture.vue'
import NavigationLnbTeacherLectureView from '@/views/site/NavigationLnbTeacherLectureView.vue'

export default {
  mixins: [Mixin],
  name: 'BannerLnbTeacher',
	data() {
			return {
				lnbTeacherTab: 0,
			}
	},
	methods: {
	},
	components: {
		NavigationLnbTeacherLecture,
		NavigationLnbTeacherLectureView,
	},
}
</script>
