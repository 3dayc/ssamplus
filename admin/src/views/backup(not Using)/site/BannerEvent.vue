<template lang="html">
	<div class="bannerEvent">
		<div class="pageTit">
			<h2>이벤트</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><em>이벤트</em></span>
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
										<li :class="{on:siteTab===0}"><button @click="siteTab = 0">1_이벤트배너</button></li>
									</ul>
								</nav>
							</div>
							<span class="btnArea">
								<button class="btnPreview">미리보기</button>
							</span>
						</div>
						<!--// tab -->
						<div class="tabLayout">
              <div v-if="siteTab == 0" class="tabData">
								<div class="boxBrown pd10">
										※ 진행중인 이벤트 페이지의 메인 배너로 3초 간격으로 롤링됨
									<button class="btnS line right">추가</button>
								</div>
								<!-- Loop : 데이터가 있는 경우 -->
								<div class="bannerSet">
									<div class="subTit">
										<h3>상단 배너 (1)</h3>
										<span class="ml20">
											<button class="btnPosArrow">위로</button>
											<button class="btnPosArrow down">아래로</button>
										</span>
										<span class="right">
											<button class="btnS redline">삭제</button>
											<button class="btnT ml5" @click="popupTargetURL = true">수정</button>
										</span>
									</div>
									<div class="tvs">
										<table>
											<colgroup>
												<col width="160"/>
												<col width="40%"/>
												<col width="160"/>
												<col width="*"/>
											</colgroup>
											<tbody>
												<tr>
													<th>상세 이미지(1)</th>
													<td>
								            <span class="uploadMulty">
										          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
								              <span class="fileChoice" style="display:none;">
								                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
								                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
								              </span>
															<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								            </span>
													</td>
													<th>Target URL</th>
													<td>http://www.ssamplus.com/inc/fullsize/251462.do</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- //Loop : 데이터가 있는 경우 -->
								<!-- Loop : 데이터가 없는 경우 -->
								<div class="bannerSet">
									<div class="subTit">
										<h3>상단 배너 (2)</h3>
										<span class="ml20">
											<button class="btnPosArrow">위로</button>
											<button class="btnPosArrow down">아래로</button>
										</span>
										<span class="right">
											<button class="btnS" @click="popupTargetURL = true">등록</button>
										</span>
									</div>
									<div class="tvs">
										<table>
											<colgroup>
												<col width="160"/>
												<col width="40%"/>
												<col width="160"/>
												<col width="*"/>
											</colgroup>
											<tbody>
												<tr>
													<th>상세 이미지(1)</th>
													<td>
								            <span class="uploadMulty">
															<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
															<span class="fileChoice">
								                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
								                <em>* 권장 이미지 사이즈: 2048 X 1024</em>
								              </span>
															<span class="fileModify" style="display:none;">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								            </span>
													</td>
													<th>Target URL</th>
													<td>http://www.ssamplus.com/inc/fullsize/251462.do</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- //Loop : 데이터가 없는 경우 -->
              </div>
						</div>
					</div>
					<!-- //tab-wrap -->
				</div>
				<!-- //page layout -->
			</article>
		</div>
		<!-- Popup -->
		<!--사이트관리 내 공통사용 팝업 -->
		<Popup v-if='popupTargetURL' @close="popupTargetURL = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">상단 배너</h1>
			<div slot="modalbody">
				<div class="gridSet">
					<div class="gridItem">
						<div class="previewArea"></div>
					</div>
					<div class="gridItem">
						<dl>
							<dt>Target URL</dt>
							<dd>
								<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
								<p>※ 이미지를 클릭했을 때 이동할 상세내용 화면 URL을 등록함</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupTargetURL = false">취소</button>
				<button class="btnM green" @click="popupTargetURL = false">저장</button>
			</div>
		</Popup>
		<!-- //사이트관리 내 공통사용 팝업 -->
		<!-- 이미지 미리보기 팝업 -->
		<Popup v-if='popupPreviewImg' @close="popupPreviewImg = false" :popClass="classPreview">
			<div slot="modalheader"></div>
			<div slot="modalbody"><img img :src="require(`@/assets/images/img_view_sample.png`)" alt="" /></div>
		</Popup>
		<!-- //이미지 미리보기 팝업 -->
		<!-- 이미지 삭제 확인 -->
		<Alert v-if='alertfileDelete' @close="alertfileDelete = false">
			<div slot="modalbody">해당 정보를 삭제합니다.<br/>실행 하시겠습니까?</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM gray" @click="alertfileDelete = false">취소</button>
				<button class="btnM green" @click="alertfileDelete = false">삭제</button>
			</div>
		</Alert>
		<!-- //이미지 삭제 확인 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BannerEvent',
	data() {
			return {
				siteTab: 0,
				multyFuleName: '파일첨부',
				alertfileDelete: false,
				classPreview: "imgPreviewPop",
				popupPreviewImg: false,
				classValue: "siteMgtPop fullCase",
				popupTargetURL: false,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
		},
	},
	components: {
	},
}
</script>
