<template lang="html">
	<div class="bookMgtView">
		<!-- 교재 기본정보 -->
		<div class="subTit cpRight">
			<h3>교재 기본정보</h3>
			<div class="grayBgBox">
				<span class="checkSet">
					<input type="checkbox" id="bookNew" checked/>
					<label for="bookNew"><i></i>New</label>
				</span>
				<span class="checkSet">
					<input type="checkbox" id="bookBest"/>
					<label for="bookBest"><i></i>BEST</label>
				</span>
			</div>
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
						<th>교재명 <sup>필수</sup></th>
						<td><input type="text" value="류지원 영어교육학 기출문제집"/></td>
						<th>사이트 노출</th>
						<td>
							<span class="labelToggleSet">
								<input type="checkbox" id="siteView" checked>
								<label for="siteView">
									<span>숨김</span>
									<span>노출</span>
								</label>
							</span>
						</td>
					</tr>
					<tr>
						<th>교재분류 <sup>필수</sup></th>
						<td>
							<span class="radioSet">
								<input type="radio" name="radio1" checked />
								<label for=""><i></i>교재</label>
							</span>
							<span class="radioSet">
								<input type="radio" name="radio1" />
								<label for=""><i></i>프린트</label>
							</span>
							<span class="radioSet">
								<input type="radio" name="radio1" />
								<label for=""><i></i>제본교재 (비용처리)</label>
							</span>
						</td>
						<th>출판사 <sup>필수</sup></th>
						<td><input type="text" value="아람출판사"/></td>
					</tr>
					<tr>
						<th>저자 <sup>필수</sup></th>
						<td><input type="text" value="류지원"/></td>
						<th>발행일 <sup>필수</sup></th>
						<td>
							<VCalendar class="calSet" v-model="date" color="green">
								<template v-slot="{ inputValue, togglePopover }">
									<input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" />
								</template>
							</VCalendar>
						</td>
					</tr>
					<tr>
						<th>ISBN <sup>필수</sup></th>
						<td><input type="text" value="2277547920025"/></td>
						<th>교재코드</th>
						<td><input type="text" value="a1520B00008"/></td>
					</tr>
					<tr>
						<th>교재사진 <sup>필수</sup></th>
						<td>
							<span class="uploadFileSet">
								<span class="uploadFile">
									<input type="file" id="file" class="addFile upFile" @change="fileUpload">
									<span class="upload-name">
										{{ fileName }}
									</span>
									<label for="file">불러오기</label>
								</span>
								<button class="btnS" @click="popupTrigger = true" >미리보기</button><!--@click="popupTrigger = true, scrollHiden($event)" :disabled="noFiles == true"-->
							</span>
						</td>
						<th>거래처 <sup>필수</sup></th>
						<td>
							<button class="btnS line" @click="LectureClientSearch()">거래처 검색</button>
							<span class="ml10 vMiddle">㈜웅진패스원 | ㈜아람Books</span>
						</td>
					</tr>
					<tr>
						<th>최소 보유수량 <sup>필수</sup></th>
						<td>
							<input type="text" class="w70 mr5 tR" value="10">권
							<p class="infoMsg fGreen inBlock ml10">* 수량 미달 시 주문 필요 상태로 자동 변경</p>
						</td>
						<th>담당자 <sup>필수</sup></th>
						<td>
							<span class="selectSet w100">
								<select class="" name="">
		              <option value="no" class="label">선택1</option>
								</select>
							</span>
							<span class="selectSet ml5 w100">
								<select class="" name="">
		              <option value="no" class="label">선택2</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<th>교재 소개 <sup>필수</sup></th>
						<td colspan="3">
							<div class="countSet fullStyle">
								<textarea rows="4">에디터가 들어갈 영역입니다.</textarea>
								<span class="counter"><em>0/500</em></span>
							</div>
						</td>
					</tr>
					<tr>
						<th>교재 서명</th>
						<td colspan="3">
							<div class="countSet fullStyle">
								<textarea rows="4">에디터가 들어갈 영역입니다.</textarea>
								<span class="counter"><em>0/500</em></span>
							</div>
						</td>
					</tr>
					<tr>
						<th>목차 <sup>필수</sup></th>
						<td colspan="3">
							<div class="countSet fullStyle">
								<textarea rows="4">에디터가 들어갈 영역입니다.</textarea>
								<span class="counter"><em>0/500</em></span>
							</div>
						</td>
					</tr>
					<tr>
						<th>교재 영상</th>
						<td colspan="3">
							<div class="landingType">
								<span class="radioSet">
									<input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner014" value="player"/>
									<label for="urlLeftBanner014"><i></i>Player 열림</label>
								</span>
								<span class="radioSet">
									<input type="radio" name="urlLeftBanner01" v-model="urlLeftBanner01" id="urlLeftBanner015" value="youtube"/>
									<label for="urlLeftBanner015"><i></i>유튜브 열림</label>
								</span>
								<div class="mt10">
									<template v-if="urlLeftBanner01 === 'player'">
										<div class="landingTypePlayer">
											<span class="selectSet">
												<select name="" id="">
													<option value="no" class="label">게시지점 선택</option>
													<option value=""></option>
												</select>
											</span>
											<span class="selectSet">
												<select name="" id="">
													<option value="no" class="label">연도 선택</option>
													<option value=""></option>
												</select>
											</span>
											<input type="text" placeholder="폴더명 입력"/>
											<input type="text" placeholder="파일명 입력"/>
										</div>
									</template>
									<template v-if="urlLeftBanner01 === 'youtube'">
										<input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
									</template>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //교재 기본정보 -->
		<!-- 교재 사용정보 -->
		<div class="subTit mt10">
			<h3>교재 사용정보</h3>
			<span class="checkSet ml20">
				<input type="checkbox" id="bookNew" checked/>
				<label for="bookNew"><i></i>현재 오픈된 데이터만 조회</label>
			</span>
		</div>
		<div class="tvs">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>과목/선생님 <sup>필수</sup></th>
						<td>
							<ul>
								<li>
									<span class="selectSet ml5">
										<select class="" name="">
											<option value="no" class="label">과목 선택 1</option>
										</select>
									</span>
									<span class="selectSet ml5">
										<select class="" name="">
											<option value="no" class="label">선생님 선택 1</option>
										</select>
									</span>
									<span class="checkSet ml10">
										<input type="checkbox" id="st1"/>
										<label for="st1"><i></i>선생님 약력/저서 사용</label>
									</span>
								</li>
								<li class="mt5">
									<span class="selectSet ml5">
										<select class="" name="">
											<option value="no" class="label">과목 선택 2</option>
										</select>
									</span>
									<span class="selectSet ml5">
										<select class="" name="">
											<option value="no" class="label">선생님 선택 2</option>
										</select>
									</span>
									<span class="checkSet ml10">
										<input type="checkbox" id="st2"/>
										<label for="st2"><i></i>선생님 약력/저서 사용</label>
									</span>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<th>강좌 정보</th>
						<td>
							<button class="btnS line" @click="LectureCourseSearch()">단과검색</button>
							<div class="tls discountList">
								<table>
									<colgroup>
										<col width="160">
										<col width="160">
										<col width="160">
										<col width="260">
										<col width="160">
									</colgroup>
									<thead>
										<tr>
											<th>직/인강</th>
											<th>강좌번호</th>
											<th>선생님</th>
											<th>강좌명</th>
											<th>수강료</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>인강</td>
											<td>12345</td>
											<td>장영희</td>
											<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
											<td>50,000원</td>
										</tr>
										<tr>
											<td>직강</td>
											<td>12345</td>
											<td>장영희</td>
											<td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
											<td>50,000원</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //교재 사용정보 -->
		<!-- 교재 판매정보 -->
		<div class="subTit mt10"><h3>교재 판매정보</h3></div>
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
						<th>정가 <sup>필수</sup></th>
						<td>
							<span class="unit"><input type="text" value="25,000"><em>원</em></span>
							<span class="checkSet ml10">
								<input type="checkbox" id="chkTax" checked/>
								<label for="chkTax"><i></i>소득공제</label>
							</span>
						</td>
						<th>구매제한</th>
						<td>인당<span class="unit w100 ml10"><input type="number" value="1"></span><em class="ml5">권</em></td>
					</tr>
					<tr>
						<th rowspan="2">판매/배송처 <sup>필수</sup></th>
						<td rowspan="2">
							<ul>
								<li>
									<span class="checkSet w100">
										<input type="checkbox" id="sale01" v-model="sale01Detail"/>
										<label for="sale01"><i></i>온라인</label>
									</span>
									<span v-show="sale01Detail">
										<em class="fGray mr10 vMiddle">배송처 :</em>
										<span class="radioSet">
											<input type="radio" id="sale01Detail1" name="sale01Detail" checked/>
											<label for="sale01Detail1"><i></i>북센</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale01Detail2" name="sale01Detail"/>
											<label for="sale01Detail2"><i></i>이데아관</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale01Detail3" name="sale01Detail"/>
											<label for="sale01Detail3"><i></i>아이비관</label>
										</span>
									</span>
								</li>
								<li class="mt10">
									<span class="checkSet w100">
										<input type="checkbox" id="sale02" v-model="sale02Detail"/>
										<label for="sale02"><i></i>이데아관</label>
									</span>
									<span v-show="sale02Detail">
										<em class="fGray mr10 vMiddle">배송처 :</em>
										<span class="radioSet">
											<input type="radio" id="sale02Detail1" name="sale02Detail"/>
											<label for="sale02Detail1"><i></i>북센</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale02Detail2" name="sale02Detail" checked/>
											<label for="sale02Detail2"><i></i>이데아관</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale02Detail3" name="sale02Detail"/>
											<label for="sale02Detail3"><i></i>아이비관</label>
										</span>
									</span>
								</li>
								<li class="mt10">
									<span class="checkSet w100">
										<input type="checkbox" id="sale03" v-model="sale03Detail"/>
										<label for="sale03"><i></i>아이비관</label>
									</span>
									<span v-show="sale03Detail">
										<em class="fGray mr10 vMiddle">배송처 :</em>
										<span class="radioSet">
											<input type="radio" id="sale03Detail1" name="sale03Detail"/>
											<label for="sale03Detail1"><i></i>북센</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale03Detail2" name="sale03Detail"/>
											<label for="sale03Detail2"><i></i>이데아관</label>
										</span>
										<span class="radioSet">
											<input type="radio" id="sale03Detail3" name="sale03Detail" checked/>
											<label for="sale03Detail3"><i></i>아이비관</label>
										</span>
									</span>
								</li>
							</ul>
						</td>
						<th>판매 상태 <sup>필수</sup></th>
						<td>
							<span class="selectSet">
								<select @change="onChange">
									<option value="no" class="label">선택</option>
									<option value="schedule">발간예정</option>
									<option value="retention" selected>판매중</option>
									<option>판매종료</option>
								</select>
							</span>
						</td>
					</tr>
					<tr>
						<th>배송비 <sup>필수</sup></th>
						<td>
							<span class="radioSet mg0">
								<input type="radio" name="feeType"  />
								<label for=""><i></i>유료 (</label>
							</span>
							<span class="unit w100 ml5">
								<input type="text" value="3,000" class="tR">
								<em>원</em>
							</span> )
							<span class="radioSet ml20">
								<input type="radio" name="feeType" />
								<label for=""><i></i>무료</label>
							</span>
						</td>
					</tr>
					<tr>
						<th>구매권한 <sup>필수</sup></th>
						<td colspan="3">
							<button class="btnS line" @click="LectureUserChoiceBook()">회원권한</button>
							<div class="tls discountList mt10">
								<table>
									<colgroup>
										<col width="160"/>
										<col width="260"/>
										<col width="160"/>
										<col width="160"/>
										<col width="160"/>
									</colgroup>
									<thead>
										<tr>
											<th>구분</th>
											<th>대상</th>
											<th>할인율</th>
											<th>할인금액</th>
											<th>본 교재 실결제금액</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>회원</td>
											<td class="tL">일반회원</td>
											<td>10%</td>
											<td>20,000</td>
											<td>180,000</td>
										</tr>
										<tr>
											<td>회원</td>
											<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
											<td>10%</td>
											<td>20,000</td>
											<td>180,000</td>
										</tr>
									</tbody>
								</table>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //교재 판매정보 -->
		<!-- 교재 입/출고 -->
		<template v-if="retentionTrigger">
			<div class="subTit mt10">
				<h3>교재 입/출고</h3>
			</div>
			<div class="tls">
				<table class="wAuto">
					<colgroup>
						<col width="120"/>
						<col width="100"/>
						<col width="400"/>
						<col width="200"/>
						<col width="150"/>
					</colgroup>
					<thead>
						<tr>
							<th>구분</th>
							<th>재고</th>
							<th>입/출고 관리<br><em>* 등록 시에는 입고 수량만 입력 가능합니다</em></th>
							<th>입/출고 수량</th>
							<th>저장</th>
						</tr>
					</thead>
					<tbody>
						<tr v-if="sale01Detail">
							<td>온라인</td>
							<td class="fBlue">200</td>
							<td @change="inOutChange">
								<span class="radioSet">
						      <input type="radio" id="onlineInOut1" name="onlineInOut" checked/>
						      <label for="onlineInOut1"><i></i>입고</label>
						    </span>
								<span class="radioSet">
						      <input type="radio" id="onlineInOut2" name="onlineInOut"/>
						      <label for="onlineInOut2"><i></i>출고 (기타)</label>
						    </span>
								<span class="radioSet">
						      <input type="radio" id="onlineInOut3" name="onlineInOut"/>
						      <label for="onlineInOut3"><i></i>출고 (이동)</label>
						    </span>
							</td>
							<td v-if="onlineMovingIn">
								+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
								<span class="checkSet">
									<input type="checkbox" id="ungjin1"/>
									<label for="ungjin1"><i></i>웅진</label>
								</span>
							</td>
							<td v-if="onlineMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
							<td v-if="onlineMovingInOut">
								- <input type="text" class="w70 mrl5" placeholder="출고량"/>
								<span class="selectSet">
									<select>
										<option value="no" class="label">입고처</option>
										<option value="">아데아관</option>
										<option value="">아이비관</option>
									</select>
								</span>
							</td>
							<td><button class="btnS">저장</button></td>
						</tr>
						<tr v-if="sale02Detail">
							<td>이데아관</td>
							<td class="fBlue">200</td>
							<td @change="inOutChange">
								<span class="radioSet">
					        <input type="radio" id="ideaInOut1" name="ideaInOut" checked/>
					        <label for="ideaInOut1"><i></i>입고</label>
					      </span>
								<span class="radioSet">
					        <input type="radio" id="ideaInOut2" name="ideaInOut"/>
					        <label for="ideaInOut2"><i></i>출고 (기타)</label>
					      </span>
								<span class="radioSet">
					        <input type="radio" id="ideaInOut3" name="ideaInOut"/>
					        <label for="ideaInOut3"><i></i>출고 (이동)</label>
					      </span>
							</td>
							<td v-if="ideaMovingIn">
								+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
								<span class="checkSet">
									<input type="checkbox" id="ungjin2"/>
									<label for="ungjin2"><i></i>웅진</label>
								</span>
							</td>
							<td v-if="ideaMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
							<td v-if="ideaMovingInOut">
								- <input type="text" class="w70 mrl5" placeholder="출고량"/>
								<span class="selectSet">
									<select>
										<option value="no" class="label">입고처</option>
										<option value="">온라인</option>
										<option value="">아이비관</option>
									</select>
								</span>
							</td>
							<td><button class="btnS">저장</button></td>
						</tr>
						<tr v-if="sale03Detail">
							<td>아이비관</td>
							<td class="fBlue">200</td>
							<td @change="inOutChange">
								<span class="radioSet">
					        <input type="radio" id="ivyInOut1" name="ivyInOut" checked/>
					        <label for="ivyInOut1"><i></i>입고</label>
					      </span>
								<span class="radioSet">
					        <input type="radio" id="ivyInOut2" name="ivyInOut"/>
					        <label for="ivyInOut2"><i></i>출고 (기타)</label>
					      </span>
								<span class="radioSet">
					        <input type="radio" id="ivyInOut3" name="ivyInOut"/>
					        <label for="ivyInOut3"><i></i>출고 (이동)</label>
					      </span>
							</td>
							<td v-if="ivyMovingIn">
								+ <input type="text" class="w70 mr10 ml5" placeholder="입고량"/>
								<span class="checkSet">
									<input type="checkbox" id="ungjin3"/>
									<label for="ungjin3"><i></i>웅진</label>
								</span>
							</td>
							<td v-if="ivyMovingOut">- <input type="text" class="w70 ml5" placeholder="출고량"/></td>
							<td v-if="ivyMovingInOut">
								- <input type="text" class="w70 mrl5" placeholder="출고량"/>
								<span class="selectSet">
									<select>
										<option value="no" class="label">입고처</option>
										<option value="">온라인</option>
										<option value="">이데아관</option>
									</select>
								</span>
							</td>
							<td><button class="btnS">저장</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</template>
		<!-- //교재 입/출고 -->
		<!-- 관리 -->
		<div class="subTit mt10"><h3>관리</h3></div>
		<div class="tvs record">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>비고</th>
						<td>
							<span class="ipBtn sizeM">
								<input type="text" />
								<button class="btnM line">저장</button>
							</span>
							<ul class="recordList">
								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 제휴기간 만료 예정이므로 제휴 갱신 여부 확인 차 담당자에게 연락했으나, 부재중이었음 <button class="btnDelete">삭제</button></li>
								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 파일 업로드 통해 제휴회원을 등록함. <button class="btnDelete">삭제</button></li>
							</ul>
						</td>
					</tr>
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
export default {
  mixins: [Mixin],
  name: 'BookMgtViewInfo',
	data() {
		return {
			alertTrigger: false,
			popupTrigger: false,
			retentionTrigger: true,
			popClass: 'textBookPop',
      date: '2020-12-20',
			fileName: '류지원_영어교육학_기출문제집_표지.png',
			sale01Detail: true,
			sale02Detail: true,
			sale03Detail: false,
			noFiles: true,
      urlLeftBanner01: 'player',
			onlineMovingIn: true,
			onlineMovingOut: false,
			onlineMovingInOut: false,
			ideaMovingIn: true,
			ideaMovingOut: false,
			ideaMovingInOut: false,
			ivyMovingIn: true,
			ivyMovingOut: false,
			ivyMovingInOut: false,
		}
	},
	methods: {
		LectureUserChoiceBook() {
      let routeData = this.$router.resolve({name: 'LectureUserChoiceBook', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUserChoiceBook', '_blank', `width=1100,height=900`);
    },
		LectureCourseSearch() {
      let routeData = this.$router.resolve({name: 'LectureCourseSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCourseSearch', '_blank', `width=1100,height=900`);
    },
		LectureClientSearch() {
      let routeData = this.$router.resolve({name: 'LectureClientSearch', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceClientSearch', '_blank', `width=570,height=750`);
    },
		fileUpload(event) {
			this.fileName = event.target.value;
			this.noFiles = !event.target.files.length;
			let upFile = document.getElementsByClassName('addFile')[0];
      upFile.classList.add('upFile');
		},
		onChange(event) {
			this.retentionTrigger = false;
			let value = event.target.value;
			if (value == 'retention') this.retentionTrigger = true;
		},
		inOutChange(event) {
			let id = event.target.id;
				if (id == 'onlineInOut1') {
				this.onlineMovingIn = true;
				this.onlineMovingOut = false;
				this.onlineMovingInOut = false;
			}
			else if (id == 'onlineInOut2') {
				this.onlineMovingIn = false;
				this.onlineMovingOut = true;
				this.onlineMovingInOut = false;
			} 
			else if (id == 'onlineInOut3') {
				this.onlineMovingIn = false;
				this.onlineMovingOut = false;
				this.onlineMovingInOut = true;
			}
			else if (id == 'ideaInOut1') {
				this.ideaMovingIn = true;
				this.ideaMovingOut = false;
				this.ideaMovingInOut = false;
			}
			else if (id == 'ideaInOut2') {
				this.ideaMovingIn = false;
				this.ideaMovingOut = true;
				this.ideaMovingInOut = false;
			} 
			else if (id == 'ideaInOut3') {
				this.ideaMovingIn = false;
				this.ideaMovingOut = false;
				this.ideaMovingInOut = true;
			}
			else if (id == 'ivyInOut1') {
				this.ivyMovingIn = true;
				this.ivyMovingOut = false;
				this.ivyMovingInOut = false;
			}
			else if (id == 'ivyInOut2') {
				this.ivyMovingIn = false;
				this.ivyMovingOut = true;
				this.ivyMovingInOut = false;
			} 
			else if (id == 'ivyInOut3') {
				this.ivyMovingIn = false;
				this.ivyMovingOut = false;
				this.ivyMovingInOut = true;
			}
		}
	},
	components: {
	},
}

</script>

<style lang="css" scoped>
</style>
