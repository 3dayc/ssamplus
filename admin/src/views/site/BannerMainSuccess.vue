<template lang="html">
	<div class="bannerMainDetail">
		<p class="mt20 boxBrown pd10">※ 등록된 이미지는 합격자 명단 배경화면으로 표시되며, 명단 csv 파일 내 합격자는 파싱하여 상하로 스크롤링 됨</p>
		<!-- 합격자 배경 -->
		<div class="bannerSet" v-if="bannerSet01">
			<div class="subTit">
				<h3>합격자 배경</h3>
				<span class="labelToggleSet ml10">
					<input type="checkbox" id="push1" checked>
					<label for="push1">
						<span>숨김</span>
						<span>노출</span>
					</label>
				</span>
				<span class="right">
					<button class="btnS redline">삭제</button>
					<button class="btnS ml5" @click="bannerSet01 = !bannerSet01">수정</button>
				</span>
			</div>
			<div class="tvs">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="630"/>
						<col width="160"/>
						<col width="630"/>
					</colgroup>
					<tbody>
						<tr>
							<th>노출기간 <sup>필수</sup></th>
							<td colspan="3">2021-01-01  09:00   ~   2021-12-31  24:00</td>
						</tr>
						<tr>
							<th>배경 이미지 <sup>필수</sup></th>
							<td>
		            <span class="uploadMulty">
				          <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
		              <span class="fileChoice" style="display:none;">
		                <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
		                <em>* 권장 이미지 사이즈: 1600 X 800</em>
		              </span>
									<span class="fileModify">01_login_bgimage01.png<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
		            </span>
							</td>
							<th>합격자 명단<br/>타이틀 <sup>필수</sup></th>
							<td>합격으로 증명하는 희소 쌤플러스 2,300명 합격자 발표<br/>희소/쌤플러스가 전하는 임용합격소식! 다음의 주인공은 당신입니다.</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="bannerSet" v-else>
			<div class="subTit">
				<h3>합격자 배경</h3>
				<span class="labelToggleSet ml10">
					<input type="checkbox" id="push1" checked>
					<label for="push1">
						<span>숨김</span>
						<span>노출</span>
					</label>
				</span>
				<span class="right"><button class="btnS" @click="bannerSet01 = !bannerSet01">저장</button></span>
			</div>
			<div class="tvs">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="630"/>
						<col width="160"/>
						<col width="630"/>
					</colgroup>
					<tbody>
						<tr>
							<th>노출기간 <sup>필수</sup></th>
							<td colspan="3">
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
							<th>배경 이미지 <sup>필수</sup></th>
							<td>
								<span class="uploadMulty">
									<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
									<span class="fileChoice" v-show="showFileChoice">
										<strong><input type="file" id="fileMulty21" @change="uploadMulty" /><label for="fileMulty21">파일 첨부</label></strong>
										<em>* 권장 이미지 사이즈: 1600 X 800</em>
									</span>
									<span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete" @click="alertfileDelete = true">삭제</button></span>
								</span>
							</td>
							<th>합격자 명단<br/>타이틀 <sup>필수</sup></th>
							<td>
								<input type="text" value="합격으로 증명하는 희소 쌤플러스 2,300명 합격자 발표">
								<input type="text" class="mt5" value="희소/쌤플러스가 전하는 임용합격소식! 다음의 주인공은 당신입니다.">
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<!-- //합격자 배경 -->
		<div class="subTit">
			<h3>자동 롤링 주기</h3>
			<span class="selectSet ml10 mr5">
				<select name="" id="">
					<option value="no" class="label">선택</option>
					<option value="">0</option>
					<option value="">1</option>
					<option value="">1.5</option>
					<option value="" selected>2</option>
					<option value="">2.5</option>
					<option value="">3</option>
					<option value="">3.5</option>
					<option value="">4</option>
					<option value="">4.5</option>
					<option value="">5</option>
				</select>
			</span> 초
		</div>
		<!-- 합격자 명단 -->
		<div class="subTit">
			<h3>합격자 명단</h3>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160">
					<col width="*">
				</colgroup>
				<tbody>
					<th>파일 첨부 <sup>필수</sup></th>
					<td>
						<button class="btnS line">+ 파일추가</button>
						<p class="infoMsg fRed mt5">※csv 파일만 등록 가능합니다.</p>
						<ul class="fileList writeCase">
							<li><span><a href="#" download>2021 개정 누리 과정.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
						</ul>
						<div class="tls wHalf mt20">
							<table>
								<colgroup>
									<col width="80"/>
									<col width="100"/>
									<col width="100"/>
									<col width="100"/>
									<col width="100"/>
								</colgroup>
								<thead>
									<tr>
										<th>번호</th>
										<th>연도</th>
										<th>과목</th>
										<th>지역</th>
										<th>이름</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>2021</td>
										<td>보건</td>
										<td>부산</td>
										<td>홍*동</td>
									</tr>
									<tr>
										<td>2</td>
										<td>2021</td>
										<td>전문상담</td>
										<td>인천</td>
										<td>김*동</td>
									</tr>
									<tr>
										<td>3</td>
										<td>2021</td>
										<td>유아</td>
										<td>경기</td>
										<td>고*동</td>
									</tr>
									<tr>
										<td>4</td>
										<td>2021</td>
										<td>보건</td>
										<td>부산</td>
										<td>홍*동</td>
									</tr>
									<tr>
										<td>5</td>
										<td>2021</td>
										<td>전문상담</td>
										<td>인천</td>
										<td>김*동</td>
									</tr>
									<tr>
										<td>6</td>
										<td>2021</td>
										<td>유아</td>
										<td>경기</td>
										<td>고*동</td>
									</tr>
									<tr>
										<td>7</td>
										<td>2021</td>
										<td>보건</td>
										<td>부산</td>
										<td>홍*동</td>
									</tr>
									<tr>
										<td>8</td>
										<td>2021</td>
										<td>전문상담</td>
										<td>인천</td>
										<td>김*동</td>
									</tr>
									<tr>
										<td>9</td>
										<td>2021</td>
										<td>유아</td>
										<td>경기</td>
										<td>고*동</td>
									</tr>
								</tbody>
							</table>
						</div>
					</td>
				</tbody>
			</table>
		</div>
		<!-- //합격자 명단 -->

		<!-- Popup -->
		<!-- 사이트관리 내 공통사용 팝업 -->
		<Popup v-if='popupTargetURL' @close="popupTargetURL = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">좌측 배너(1)</h1>
			<div slot="modalbody">
				<div class="gridSet">
					<div class="gridItem">
						<div class="previewArea"></div>
					</div>
					<div class="gridItem">
						<dl>
							<dt>배너 사이즈 선택</dt>
							<dd>
								<div class="ptb10">
			            <span class="radioSet">
			              <input type="radio" name="radio1" id="rd1" />
			              <label for="rd1"><i></i>1 X 1</label>
			            </span>
			            <span class="radioSet">
			              <input type="radio" name="radio1" id="rd2" />
			              <label for="rd2"><i></i>1 X 2</label>
			            </span>
			            <span class="radioSet">
			              <input type="radio" name="radio1" id="rd3" />
			              <label for="rd3"><i></i>1 X 3</label>
			            </span>
								</div>
							</dd>
						</dl>
						<dl>
							<dt>Target URL</dt>
							<dd>
								<input type="text" value="http://www.ssamplus.com/inc/fullsize/251462.do" class="wFull"/>
								<p>※ 해당 화면을 클릭했을 때 이동할 상세내용 화면 URL을 등록함</p>
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
  name: 'BannerMainLeft',
	data() {
			return {
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupSitemgt:false,
				popupTargetURL: false,
				popupMenuColor: false,
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
