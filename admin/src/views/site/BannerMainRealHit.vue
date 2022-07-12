<template lang="html">
	<div>
		<!-- 목록 -->
		<div class="listView" v-if="view == 'list'">
			<div class="boxBrown msgBtnSet">
				<p class="msg fGreen">※ 노출되는 컨텐츠의 개수 제한은 없으며 자동 롤링 주기로 높은 번호를 첫번째 순서로 하여 컨텐츠를 노출함</p>
				<span class="btnSet">
					<button class="btnAdd" @click="view = 'write'">신규등록</button>
				</span>
			</div>
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
			<div class="tls mt20">
				<table>
					<colgroup>
						<col width="100"/>
						<col width="100"/>
						<col width="500"/>
						<col width="250"/>
						<col width="80"/>
						<col width="80"/>
						<col width="100"/>
						<col width="150"/>
					</colgroup>
					<thead>
						<tr>
							<th>노출여부</th>
							<th>번호</th>
							<th>제목</th>
							<th>노출기간</th>
							<th>클릭 수<br>(PC)</th>
							<th>클릭 수<br>(Mobile)</th>
							<th>작성일</th>
							<th>순서변경</th>
						</tr>
					</thead>
					<tbody>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show01" checked>
									<label for="show01">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>100</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 100)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-25</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show02" checked>
									<label for="show02">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>99</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 99)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-20</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show03" checked>
									<label for="show03">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>98</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 98)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-19</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show04" checked>
									<label for="show04">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>97</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 97)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-15</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show05" checked>
									<label for="show05">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>96</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 96)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-13</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show06" checked>
									<label for="show06">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>95</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 95)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-05-10</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr class="red">
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show07" checked>
									<label for="show07">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>94</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 94)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-30</td>
							<td>
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show08">
									<label for="show08">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>93</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 93)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-29</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show09">
									<label for="show09">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>92</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 92)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-29</td>
							<td></td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show10">
									<label for="show10">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<td>91</td>
							<td class="tL"><a @click="view = 'detail'">리얼적중 제목을 표시합니다 (이벤트 91)</a></td>
							<td>2021-08-01 09:00 ~ 2021-08-31  24:00</td>
							<td>9,999</td>
							<td>9,999</td>
							<td>2021-04-20</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<Paginate/>
		</div>
		<!-- //목록 -->
		<!-- 신규등록 -->
		<div class="writeView" v-else-if="view == 'write'">
			<div class="subTit">
				<h3>신규등록</h3>
				<span class="right">
					<button class="btnM green" @click="view = 'detail'">등록</button>
					<button class="btnM ml10 gray" @click="view = 'list'">취소</button>
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
							<th>노출여부 <sup>필수</sup></th>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show00">
									<label for="show00">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<th>노출기간 <sup>필수</sup></th>
							<td>
								<VCalendar class="calSet mr5" v-model="date00" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
								<em class="inBlock mlr5">~</em>
								<VCalendar class="calSet mr5" v-model="date01" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>제목 <sup>필수</sup></th>
							<td><input type="text" placeholder="제목을 입력해 주세요."/></td>
							<td colspan="2"><p class="infoMsg fGreen">* 컨텐츠를 관리하기 위한 제목으로 화면에서 사용되는 데이터가 아님</p></td>
						</tr>
					</tbody>
				</table>
			</div>
			<strong class="leafLabel mt20">공통/PC</strong>
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
							<th rowspan="2">선생님 이미지 <sup>필수</sup></th>
							<td rowspan="2">
								<span class="uploadMulty">
									<span class="thumb"><em>등록된 이미지가 없습니다.</em></span>
								</span>
								<button class="btnS line" @click="SiteTeacherImage();">선생님 이미지</button>
								<span class="ml5">(등록된 이미지가 없습니다)</span>
							</td>
							<th>과목/선생님 <sup>필수</sup></th>
							<td>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">과목 선택</option>
									</select>
								</span>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">선생님 선택</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>문항 <sup>필수</sup></th>
							<td><input type="text" placeholder="리얼적중 문항을 입력해 주세요"/></td>
						</tr>
						<tr>
							<th>적중제목 <sup>필수</sup></th>
							<td colspan="3"><input type="text" placeholder="적중제목을 입력해 주세요."/></td>
						</tr>
						<tr>
							<th>적중내용 <sup>필수</sup></th>
							<td colspan="3">
								<textarea placeholder="리얼적중 내용을 입력해 주세요"></textarea>
								<div class="right">
									<span class="fRed">※ 적중 내용은 최대 150자 이내를 권장함</span>
									<span class="counter ml5"><em class="">45/75</em></span>
								</div>
							</td>
						</tr>
						<!-- 2021-12-01 URL 컬럼 추가 -->
						<tr>
							<th>URL <sup>필수</sup></th>
							<td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
						<!-- //2021-12-01 URL 컬럼 추가 -->
					</tbody>
				</table>
			</div>
			<strong class="leafLabel blue mt20">Mobile</strong>
			<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
		</div>
		<!-- //신규등록 -->
		<!-- 상세/수정 -->
		<div class="detailView" v-else-if="view == 'detail'">
			<div class="subTit">
				<h3>상세/수정</h3>
				<span class="right">
					<button class="btnM green">저장</button>
					<button class="btnM ml10 gray" @click="view = 'list'">취소</button>
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
							<th>노출여부 <sup>필수</sup></th>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="show00">
									<label for="show00">
										<span>숨김</span>
										<span>노출</span>
									</label>
								</span>
							</td>
							<th>노출기간 <sup>필수</sup></th>
							<td>
								<VCalendar class="calSet mr5" v-model="date00" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
								<em class="inBlock mlr5">~</em>
								<VCalendar class="calSet mr5" v-model="date01" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
								<span class="selectSet">
									<select name="" id="">
										<option v-for="option in timeOptions" v-bind:value="option.value">
											{{ option.text }}
										</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>제목 <sup>필수</sup></th>
							<td><input type="text" placeholder="제목을 입력해 주세요." value="교육과정 운영 관점에 대한 출제 PICK"/></td>
							<td colspan="2"><p class="infoMsg fGreen">* 컨텐츠를 관리하기 위한 제목으로 화면에서 사용되는 데이터가 아님</p></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<strong class="leafLabel mt20">공통/PC</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
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
							<th rowspan="2">선생님 이미지 <sup>필수</sup></th>
							<td rowspan="2">
								<span class="uploadMulty">
									<span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" @click="popupPreviewImg = true"/><em style="display:none;">등록된 이미지가 없습니다.</em></span>
								</span>
								<button class="btnS line" @click="SiteTeacherImage();">선생님 이미지</button>
								<span class="ml5">(A. 기본 이미지, 520 * 400)</span>
							</td>
							<th>과목/선생님 <sup>필수</sup></th>
							<td>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">과목 선택</option>
									</select>
								</span>
								<span class="selectSet mr5">
									<select name="" id="">
										<option value="no" class="label">선생님 선택</option>
									</select>
								</span>
							</td>
						</tr>
						<tr>
							<th>문항 <sup>필수</sup></th>
							<td><input type="text" placeholder="리얼적중 문항을 입력해 주세요" value="교육과정B 5번"/></td>
						</tr>
						<tr>
							<th>적중제목 <sup>필수</sup></th>
							<td colspan="3"><input type="text" placeholder="적중제목을 입력해 주세요." value="언택트 교육학"/></td>
						</tr>
						<tr>
							<th>적중내용 <sup>필수</sup></th>
							<td colspan="3">
								<textarea placeholder="리얼적중 내용을 입력해 주세요">첫번째 문제의 교육과정 운영 관점에 대해 출제하신 문제입니다. 이론 수업 시간에도 교육과정 운영 관점을 스킬백의 학교 중심 교육과정 설계와 관련하여 항상 강조 하셨습니다.</textarea>
								<div class="right">
									<span class="fRed">※ 적중 내용은 최대 150자 이내를 권장함</span>
									<span class="counter ml5"><em class="">45/75</em></span>
								</div>
							</td>
						</tr>
						<!-- 2021-12-01 URL 컬럼 추가 -->
						<tr>
							<th>URL <sup>필수</sup></th>
							<td colspan="3">
								<LandingTypeComponent></LandingTypeComponent>
							</td>
						</tr>
						<!-- //2021-12-01 URL 컬럼 추가 -->
					</tbody>
				</table>
			</div>
			<div>
				<strong class="leafLabel blue mt20">Mobile</strong>
				<span class="clickNum ml10">클릭 수 <b>9,999</b></span>
			</div>
			<p class="infoMsg fBlue">* PC에서 등록된 컨텐츠를 사용함</p>
			<!-- 관리 -->
			<div class="subTit"><h3>관리</h3></div>
			<div class="tvs record">
				<table>
					<colgroup>
						<col width="160"/>
						<col width="1420"/>
					</colgroup>
					<tbody>
						<tr>
							<th>수정 이력</th>
							<td>
								<ul class="recordList">
									<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
									<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- //관리 -->
		</div>
		<!-- 상세/수정 -->

		<!-- Popup -->
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
  name: 'BannerMainRealHit',
	data() {
			return {
				view: 'list',
				ipBtnStatus: true,
	      timeOptions: [
	        { text: '00시', value: '00' },
	        { text: '01시', value: '01' },
	        { text: '02시', value: '02' },
	        { text: '03시', value: '03' },
	        { text: '04시', value: '04' },
	        { text: '05시', value: '05' },
	        { text: '06시', value: '06' },
	        { text: '07시', value: '07' },
	        { text: '08시', value: '08' },
	        { text: '09시', value: '09' },
	        { text: '10시', value: '10' },
	        { text: '11시', value: '11' },
	        { text: '12시', value: '12' },
	        { text: '13시', value: '13' },
	        { text: '14시', value: '14' },
	        { text: '15시', value: '15' },
	        { text: '16시', value: '16' },
	        { text: '17시', value: '17' },
	        { text: '18시', value: '18' },
	        { text: '19시', value: '19' },
	        { text: '20시', value: '20' },
	        { text: '21시', value: '21' },
	        { text: '22시', value: '22' },
	        { text: '23시', value: '23' },
	        { text: '24시', value: '24' },
	      ],
	      minuteOptions: [
	        { text: '00분', value: '00' },
	        { text: '01분', value: '01' },
	        { text: '02분', value: '02' },
	        { text: '03분', value: '03' },
	        { text: '04분', value: '04' },
	        { text: '05분', value: '05' },
	        { text: '06분', value: '06' },
	        { text: '07분', value: '07' },
	        { text: '08분', value: '08' },
	        { text: '09분', value: '09' },
	        { text: '10분', value: '10' },
	        { text: '11분', value: '11' },
	        { text: '12분', value: '12' },
	        { text: '13분', value: '13' },
	        { text: '14분', value: '14' },
	        { text: '15분', value: '15' },
	        { text: '16분', value: '16' },
	        { text: '17분', value: '17' },
	        { text: '18분', value: '18' },
	        { text: '19분', value: '19' },
	        { text: '20분', value: '20' },
	        { text: '21분', value: '21' },
	        { text: '22분', value: '22' },
	        { text: '23분', value: '23' },
	        { text: '24분', value: '24' },
	        { text: '25분', value: '25' },
	        { text: '26분', value: '26' },
	        { text: '27분', value: '27' },
	        { text: '28분', value: '28' },
	        { text: '29분', value: '29' },
	        { text: '30분', value: '30' },
	        { text: '31분', value: '31' },
	        { text: '32분', value: '32' },
	        { text: '33분', value: '33' },
	        { text: '34분', value: '34' },
	        { text: '35분', value: '35' },
	        { text: '36분', value: '36' },
	        { text: '37분', value: '37' },
	        { text: '38분', value: '38' },
	        { text: '39분', value: '39' },
	        { text: '40분', value: '40' },
	        { text: '41분', value: '41' },
	        { text: '42분', value: '42' },
	        { text: '43분', value: '43' },
	        { text: '44분', value: '44' },
	        { text: '45분', value: '45' },
	        { text: '46분', value: '46' },
	        { text: '47분', value: '47' },
	        { text: '48분', value: '48' },
	        { text: '49분', value: '49' },
	        { text: '50분', value: '50' },
	        { text: '51분', value: '51' },
	        { text: '52분', value: '52' },
	        { text: '53분', value: '53' },
	        { text: '54분', value: '54' },
	        { text: '55분', value: '55' },
	        { text: '56분', value: '56' },
	        { text: '57분', value: '57' },
	        { text: '58분', value: '58' },
	        { text: '59분', value: '59' },
	      ],
				multyFuleName: '파일첨부',
				alertfileDelete: false,
	      classPreview: "imgPreviewPop",
				popupPreviewImg: false,
	      classValue: "siteMgtPop fullCase",
				popupSitemgt:false,
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
