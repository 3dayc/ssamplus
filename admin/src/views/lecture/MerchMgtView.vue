<template lang="html">
	<div>
		<div class="pageTit">
			<h2>굿즈 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/굿즈</router-link><router-link to="/mkup/lecture/merchMgt">굿즈 관리</router-link><router-link to="/mkup/lecture/merchMgt">굿즈 등록/현황</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="merchMgtView">
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:merchMgtTab===0}"><button @click="merchMgtTab = 0">굿즈 정보</button></li>
										<li :class="{on:merchMgtTab===1}"><button @click="merchMgtTab = 1">입/출고 이력</button></li>
									</ul>
								</nav>
							</div>
							<div class="btnArea">
	            	<router-link to="/mkup/lecture/merchMgt" class="btnList">목록으로</router-link>
								<button class="btnM green">저장</button> <!-- 클릭시 alertpop open -->
								<button class="btnM line ml10" @click="alertTrigger = true">삭제</button> <!-- 클릭시 alertpop open -->
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="merchMgtTab == 0" class="tabData">
								<MerchMgtViewInfo />
              </div>
              <div v-if="merchMgtTab == 1" class="tabData">
								<MerchMgtViewStock />
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				정보를 모두 삭제합니다. <br/>실행 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">아니오</button>
        <button class="btnM green" @click="alertTrigger = false">예</button>
      </template>
    </Alert>
		<!-- 굿즈 미리보기 -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
			<h1 slot="modalheader" class="tC" >굿즈 사진 미리보기</h1>
			<div slot="modalbody">
				<img img :src="require(`@/assets/images/txtBook.png`)" alt="굿즈"/>
				<span class="bookTxt">사이즈: 80 * 109</span>
			</div>
			<div slot="modalfooter" class="modalfooter"></div>
		</Popup>
		<!-- //굿즈 미리보기 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import MerchMgtViewInfo from '@/views/lecture/MerchMgtViewInfo.vue';
import MerchMgtViewStock from '@/views/lecture/MerchMgtViewStock.vue';

export default {
  mixins: [Mixin],
  name: 'MerchMgtView',
	data() {
			return {
				merchMgtTab: 0,
				alertTrigger: false,
				popupTrigger: false,
				popClass: 'textBookPop',
        date: new Date(),
				fileName: '류지원_영어교육학_기출문제집_표지.png',
			}
	},
	methods: {

	},
	components: {
		MerchMgtViewInfo,
		MerchMgtViewStock,
	},
}
</script>

<style lang="css" scoped>
</style>
