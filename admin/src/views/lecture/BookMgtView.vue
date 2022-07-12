<template lang="html">
	<div>
		<div class="pageTit">
			<h2>교재 등록/현황</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><router-link to="/mkup/lecture/bookMgt">교재 등록/현황</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bookMgtView">
					<!-- tab-wrap -->
					<div class="tabwrap">
						<!-- tab -->
						<div class="tabBack">
							<div class="tabNav">
								<nav>
									<ul>
										<li :class="{on:bookMgtTab===0}"><button @click="bookMgtTab = 0">교재 정보</button></li>
										<li :class="{on:bookMgtTab===1}"><button @click="bookMgtTab = 1">입/출고 이력</button></li>
									</ul>
								</nav>
							</div>
							<div class="btnArea">
	            	<router-link to="/mkup/lecture/bookMgt" class="btnList">목록으로</router-link>
								<button class="btnM green">저장</button> <!-- 클릭시 alertpop open -->
								<button class="btnM line ml10" @click="alertTrigger = true">삭제</button> <!-- 클릭시 alertpop open -->
							</div>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="bookMgtTab == 0" class="tabData">
								<BookMgtViewInfo />
              </div>
              <div v-if="bookMgtTab == 1" class="tabData">
								<BookMgtViewStock />
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
		<!-- 교재 미리보기 -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="popClass">
			<h1 slot="modalheader" class="tC" >교재 사진 미리보기</h1>
			<div slot="modalbody">
				<img img :src="require(`@/assets/images/txtBook.png`)" alt="교재"/>
				<span class="bookTxt">사이즈: 80 * 109</span>
			</div>
			<div slot="modalfooter" class="modalfooter"></div>
		</Popup>
		<!-- //교재 미리보기 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import BookMgtViewInfo from '@/views/lecture/BookMgtViewInfo.vue';
import BookMgtViewStock from '@/views/lecture/BookMgtViewStock.vue';

export default {
  mixins: [Mixin],
  name: 'BookMgtView',
	data() {
			return {
				bookMgtTab: 0,
				alertTrigger: false,
				popupTrigger: false,
				popClass: 'textBookPop',
        date: new Date(),
				fileName: '류지원_영어교육학_기출문제집_표지.png',
			}
	},
	methods: {
		fileUpload(event) {
			this.fileName = event.target.value;
		},
	},
	components: {
		BookMgtViewInfo,
		BookMgtViewStock,
	},
}
</script>

<style lang="css" scoped>
</style>
