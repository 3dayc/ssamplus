<template lang="html">
	<div class="bannerMainRecommendView">
		<div class="pageTit">
			<h2>5_추천컨텐츠</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><router-link to="/mkup/site/bannerMain">메인 화면</router-link><em>5_추천컨텐츠</em></span>
		</div>
	  <div class="content">
	    <article>
        <!-- page layout -->
        <div><!-- class 없어도 유지 -->
					<div class="boardTop">
						<div class="right">
            	<router-link to="/mkup/site/bannerMain" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5">미리보기</button>
						</div>
					</div>
          <p class="boxBrown pd10">※ 탭 형식으로 표출되는 메뉴 명을 클릭하면 보이는 상세 컨텐츠로 레이아웃 설정에 맞게 표시됨</p>
					<!-- 기본 설정 -->
					<div class="backGreen mt20 mb10 pd10">
						<div v-if="basicSet">
							<div class="subTit">
								<h3>기본 설정</h3>
								<span class="right">
									<button class="btnS" @click="basicSet = !basicSet">수정</button>
								</span>
							</div>
							<div class="tvs">
								<table>
									<colgroup>
										<col width="160">
										<col width="*">
									</colgroup>
									<tbody>
										<tr>
											<th>타이틀</th>
											<td>강의 하이라이트</td>
										</tr>
										<tr>
											<th>레이아웃</th>
											<td>
												<span class="layoutSet">
													<span class="layoutStrong">
														<input type="radio" name="layoutType" id="lt1" checked disabled>
														<label for="lt1">첫 번째 컨텐츠를 강조함</label>
													</span>
														<span class="layoutBasic">
														<input type="radio" name="layoutType" id="lt2" disabled>
														<label for="lt2">모든 컨텐츠를 동일하게 표시함</label>
													</span>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div v-else>
							<div class="subTit">
								<h3>기본 설정</h3>
								<span class="right">
									<button class="btnS" @click="basicSet = !basicSet">저장</button>
								</span>
							</div>
							<div class="tvs">
								<table>
									<colgroup>
										<col width="160">
										<col width="*">
									</colgroup>
									<tbody>
										<tr>
											<th>타이틀</th>
											<td>
												<input type="text" value="강의 하이라이트" class="wHalf"/>
												<span class="infoMsg fRed ml10">※ 타이틀은 최대 8자 이내를 권장함</span>
											</td>
										</tr>
										<tr>
											<th>레이아웃</th>
											<td>
												<span class="layoutSet">
													<span class="layoutStrong">
														<input type="radio" name="layoutType" id="lt1" checked>
														<label for="lt1">첫 번째 컨텐츠를 강조함</label>
													</span>
														<span class="layoutBasic">
														<input type="radio" name="layoutType" id="lt2" >
														<label for="lt2">모든 컨텐츠를 동일하게 표시함</label>
													</span>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<!-- //기본 설정 -->
					<!-- 추천컨텐츠 1 -->
					<div class="bannerSet" v-if="bannerSet01">
						<div class="subTit">
							<h3>추천컨텐츠 (1)</h3>
							<span class="labelToggleSet ml10">
								<input type="checkbox" id="push1" checked>
								<label for="push1">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="bannerSet01 = !bannerSet01">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="550"/>
									<col width="80"/>
									<col width="160"/>
									<col width="630"/>
								</colgroup>
								<tbody>
									<tr>
										<th>노출기간 <sup>필수</sup></th>
										<td colspan="4">2021-01-01  09:00   ~   2021-12-31  24:00</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
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
										<td class="bgRed tC">클릭 수<br/><strong>9,999</strong></td>
										<th>추천컨텐츠<br/>타이틀 <sup>필수</sup></th>
										<td>교육과정 총론 부모 교육론<br/>단기합격 최다배출 명료한 유아강의!</td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="4">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="bannerSet" v-else>
						<div class="subTit">
							<h3>추천컨텐츠 (1)</h3>
							<span class="labelToggleSet ml10">
								<input type="checkbox" id="push1" checked>
								<label for="push1">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
							<span class="right">
								<button class="btnT ml5" @click="bannerSet01 = !bannerSet01">저장</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="550"/>
									<col width="80"/>
									<col width="160"/>
									<col width="630"/>
								</colgroup>
								<tbody>
									<tr>
										<th>노출기간 <sup>필수</sup></th>
										<td colspan="4">
											<VCalendar class="calSet" v-model="date" color="green">
												<template v-slot="{ inputValue, togglePopover }">
													<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
												</template>
											</VCalendar>
											<span class="selectSet ml5">
												<select name="" id="">
													<option value="">00시</option>
												</select>
											</span> ~
											<VCalendar class="calSet" v-model="date" color="green">
												<template v-slot="{ inputValue, togglePopover }">
													<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
												</template>
											</VCalendar>
											<span class="selectSet ml5">
												<select name="" id="">
													<option value="">00시</option>
												</select>
											</span>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
										<td colspan="2">
											<span class="uploadMulty">
												<span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" style="display:none;">
													<strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 2048 X 1024</em>
												</span>
												<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<th>추천컨텐츠<br/>타이틀 <sup>필수</sup></th>
										<td>
											<input type="text"/>
											<input type="text" class="mt5"/>
										</td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="4">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //추천컨텐츠 1 -->
					<!-- 추가 -->
					<div class="bannerSet">
						<div class="subTit">
							<h3>추천컨텐츠 (2)</h3>
							<span class="labelToggleSet ml10">
								<input type="checkbox" id="push2" >
								<label for="push2">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
							<span class="right">
								<button class="btnT ml5">등록</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="550"/>
									<col width="80"/>
									<col width="160"/>
									<col width="630"/>
								</colgroup>
								<tbody>
									<tr>
										<th>노출기간 <sup>필수</sup></th>
										<td colspan="4">
											<VCalendar class="calSet" v-model="date" color="green">
												<template v-slot="{ inputValue, togglePopover }">
													<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
												</template>
											</VCalendar>
											<span class="selectSet ml5">
												<select name="" id="">
													<option value="">00시</option>
												</select>
											</span> ~
											<VCalendar class="calSet" v-model="date" color="green">
												<template v-slot="{ inputValue, togglePopover }">
													<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
												</template>
											</VCalendar>
											<span class="selectSet ml5">
												<select name="" id="">
													<option value="">00시</option>
												</select>
											</span>
										</td>
									</tr>
									<tr>
										<th>썸네일 이미지 <sup>필수</sup></th>
										<td colspan="2">
											<span class="uploadMulty">
												<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
												<span class="fileChoice" v-show="showFileChoice">
													<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
													<em>* 권장 이미지 사이즈: 1600 X 180</em>
												</span>
												<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
											</span>
										</td>
										<th>추천컨텐츠<br/>타이틀 <sup>필수</sup></th>
										<td>
											<input type="text"/>
											<input type="text" class="mt5"/>
										</td>
									</tr>
									<tr>
										<th>URL <sup>필수</sup></th>
										<td colspan="4">
											<LandingTypeComponent></LandingTypeComponent>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //추가 -->
        </div>
        <!-- //page layout -->
    </article>
  </div>

	<!-- Popup -->
	<!-- 사이트관리 내 공통사용 팝업 -->
	<Popup v-if='popupModify1' @close="popupModify1 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">영상 컨텐츠(1)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 최대 15자 이내 입력을 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<div class="ptb10">
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd1" />
									<label for="rd1"><i></i>외부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd2" />
									<label for="rd2"><i></i>내부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd3" />
									<label for="rd3"><i></i>직접등록</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd4" />
									<label for="rd4"><i></i>타겟 화면 없음</label>
								</span>
							</div>
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 이미지를 클릭했을 때 재생할 영상 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify1 = false">취소</button>
			<button class="btnM green" @click="popupModify1 = false">저장</button>
		</div>
	</Popup> <!--영상컨텐츠 1~4 & 추천 컨텐츠 1 -->
	<Popup v-if='popupModify2' @close="popupModify2 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">추천 컨텐츠(3)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>컨텐츠 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 타이틀은 최대 20자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>시험 명</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 영상의 하단에 표기될 시험 명을 입력함</p>
						</dd>
					</dl>
					<dl>
						<dt>영상 서브 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 시험 명 하단에 표기될 서브 타이틀을 입력함</p>
						</dd>
					</dl>
					<dl>
						<dt>영상 메인 타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 최대 10자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<div class="ptb10">
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd21" />
									<label for="rd21"><i></i>외부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd22" />
									<label for="rd22"><i></i>내부 URL</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd23" />
									<label for="rd23"><i></i>직접등록</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="radio1" id="rd24" />
									<label for="rd24"><i></i>타겟 화면 없음</label>
								</span>
							</div>
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 이미지를 클릭했을 때 재생할 영상 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify2 = false">취소</button>
			<button class="btnM green" @click="popupModify2 = false">저장</button>
		</div>
	</Popup> <!-- 추천 컨텐츠 2~4  -->
	<Popup v-if='popupModify3' @close="popupModify3 = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">추천 컨텐츠(5)</h1>
		<div slot="modalbody">
			<div class="gridSet">
				<div class="gridItem">
					<div class="previewArea"></div>
				</div>
				<div class="gridItem">
					<dl>
						<dt>타이틀</dt>
						<dd>
							<input type="text" value="" class="wFull"/>
							<p>※ 타이틀은 최대 20자 이내를 권장함</p>
						</dd>
					</dl>
					<dl>
						<dt>URL</dt>
						<dd>
							<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
							<p>※ 해당 화면을 클릭했을 때 이동할 상세내용 화면 URL을 등록함</p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify3 = false">취소</button>
			<button class="btnM green" @click="popupModify3 = false">저장</button>
		</div>
	</Popup> <!-- 추천 컨텐츠 5 -->
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
  name: 'BannerMainRecommendView',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupModify1: false,
				popupModify2: false,
				popupModify3: false,
				basicSet: true,
				bannerSet01: true,
				showFileChoice: true,
        showFileModify: false,
			}
	},
	methods: {
		uploadMulty(event) {
			this.multyFuleName = event.target.value;
			this.showFileChoice = false;
			this.showFileModify = true;
		}, // 파일 업로드2
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
