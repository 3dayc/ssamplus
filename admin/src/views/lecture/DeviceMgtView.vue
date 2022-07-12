<template lang="html">
	<div>
		<div class="pageTit">
			<h2>학습기기 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 관리</router-link><router-link to="/mkup/lecture/deviceMgt">학습기기 등록/현황</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="goodsMgtView">
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:goodsMgtTab===0}"><button @click="goodsMgtTab = 0">학습기기 정보</button></li>
										<li :class="{on:goodsMgtTab===1}"><button @click="goodsMgtTab = 1">입/출고 이력</button></li>
									</ul>
								</nav>
							</div>
							<div class="btnArea">
								<router-link to="/mkup/lecture/deviceMgt" class="btnList">목록으로</router-link>
								<button class="btnM green">저장</button>
								<button class="btnM line ml10" @click="alertTrigger = true">삭제</button>
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
							<div v-if="goodsMgtTab == 0" class="tabData">
								<DeviceMgtViewInfo />
							</div>
							<div v-if="goodsMgtTab == 1" class="tabData">
								<DeviceMgtViewStock />
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
import DeviceMgtViewInfo from '@/views/lecture/DeviceMgtViewInfo.vue';
import DeviceMgtViewStock from '@/views/lecture/DeviceMgtViewStock.vue';

export default {
  mixins: [Mixin],
  name: 'DeviceMgtView',
	data() {
			return {
				goodsMgtTab: 0,
			}
	},
	methods: {
	},
	components: {
		DeviceMgtViewInfo,
		DeviceMgtViewStock,
	},
}
</script>

<style lang="css" scoped>
</style>
