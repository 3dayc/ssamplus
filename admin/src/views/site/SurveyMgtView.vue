<template lang="html">
	<div>
		<div class="pageTit">
			<h2>설문지 관리</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/surveyMgt">설문조사</router-link><router-link to="/mkup/site/surveyMgt">설문지 관리</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="surveyMgtView"><!-- class 없어도 유지 -->
					<div class="boardTop">
						<span class="right">
							<router-link to="/mkup/site/surveyMgt" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5" @click="popupTrigger01 = true">미리보기</button>
						</span>
					</div>
					<div class="subTit">
						<h3>설문조사 기본정보 :</h3>
						<span class="right">
							<button class="btnS">수정</button>
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
									<th>제목 <sup>필수</sup></th>
									<td colspan="3"><input type="text" value="2021년 쌤플러스 마감 설문" /></td>
								</tr>
								<tr>
									<th>설문조사 기간 <sup>필수</sup></th>
									<td>
										<VCalendar class="calSet mr5" v-model="date00" color="green">
											<template v-slot="{ inputValue, togglePopover }">
												<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
											</template>
										</VCalendar>
										<span class="selectSet mr5">
											<select name="" id="">
												<option v-for="option in timeOptions" v-bind:value="option.value">
													{{ option.text }}
												</option>
											</select>
										</span>
										<span class="selectSet">
											<select name="" id="">
												<option v-for="option in minuteOptions" v-bind:value="option.value">
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
										<span class="selectSet mr5">
											<select name="" id="">
												<option v-for="option in timeOptions" v-bind:value="option.value">
													{{ option.text }}
												</option>
											</select>
										</span>
										<span class="selectSet">
											<select name="" id="">
												<option v-for="option in minuteOptions" v-bind:value="option.value">
													{{ option.text }}
												</option>
											</select>
										</span>
									</td>
									<th>노출 여부</th>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="show" checked>
											<label for="show">
												<span>숨김</span>
												<span>노출</span>
											</label>
										</span>
									</td>
								</tr>
								<tr>
									<th>설문조사 URL <sup>필수</sup></th>
									<td colspan="3">https://www.ssamplus.com/survey/?scnf_seq=3&new_win=Y</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="boxBrown msgBtnSet mt20">
						<p class="msg">※ 질문 추가 버튼을 클릭하여 설문조사 양식을 작성해 주세요.</p>
						<span class="btnSet">
							<button class="btnM line">질문 추가</button>
						</span>
					</div>
					<div class="surveyQuestion mt20" v-if="servey01Mode">
						<div class="subTit">
							<h3>질문 (1)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
				      <span class="right">
				        <button class="btnS redline" @click="alertTrigger01 = true">삭제</button>
				        <button class="btnS ml5" @click="servey01Mode = !servey01Mode">저장</button>
				      </span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>구분 <sup>필수</sup></th>
										<td>
											<span class="radioSet">
					              <input type="radio" name="qType01"/>
					              <label for=""><i></i>주관식</label>
					            </span>
					            <span class="radioSet">
					              <input type="radio" name="qType01" checked/>
					              <label for=""><i></i>객관식</label>
					            </span>
										</td>
									</tr>
									<tr>
										<th>질문 <sup>필수</sup></th>
										<td><input type="text" placeholder="질문을 입력해 주세요." value="2021학년도 대비 교원임용 설명회를 참여한 이유는?"/></td>
									</tr>
									<tr>
										<th>답변 <sup>필수</sup></th>
										<td>
											<div class="tls">
												<table>
													<colgroup>
														<col width="80">
														<col width="*">
														<col width="80">
														<col width="80">
													</colgroup>
													<thead>
														<tr>
															<th>No</th>
															<th>답변</th>
															<th>직접입력</th>
															<th>삭제</th>
														</tr>
													</thead>
													<tbody>
														<tr class="blue">
															<td>신규</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요"/></td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>1</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요" value="원하는 강사의 연간커리큘럼 파악"/></td>
															<td>
										            <span class="checkSet noLabel">
										              <input type="checkbox"/>
										              <label for=""><i></i></label>
										            </span>
															</td>
															<td><button class="btnDelete">삭제</button></td>
														</tr>
														<tr>
															<td>2</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요" value="과목별 학습계획/학습전략 파악"/></td>
															<td>
										            <span class="checkSet noLabel">
										              <input type="checkbox"/>
										              <label for=""><i></i></label>
										            </span>
															</td>
															<td><button class="btnDelete">삭제</button></td>
														</tr>
														<tr>
															<td>3</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요" value="선생님과의 1:1 상담"/></td>
															<td>
										            <span class="checkSet noLabel">
										              <input type="checkbox"/>
										              <label for=""><i></i></label>
										            </span>
															</td>
															<td><button class="btnDelete">삭제</button></td>
														</tr>
														<tr>
															<td>4</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요" value="참석 후 강의 할인혜택을 받기 위해"/></td>
															<td>
										            <span class="checkSet noLabel">
										              <input type="checkbox"/>
										              <label for=""><i></i></label>
										            </span>
															</td>
															<td><button class="btnDelete">삭제</button></td>
														</tr>
														<tr>
															<td>5</td>
															<td><input type="text" placeholder="답변의 보기를 입력해 주세요" value="참석 후 강의 할인혜택을 받기 위해"/></td>
															<td>
										            <span class="checkSet noLabel">
										              <input type="checkbox" checked/>
										              <label for=""><i></i></label>
										            </span>
															</td>
															<td><button class="btnDelete">삭제</button></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="surveyQuestion mt20" v-else="servey01Mode">
						<div class="subTit">
							<h3>질문 (1)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
				      <span class="right">
				        <button class="btnS ml5" @click="servey01Mode = !servey01Mode">수정</button>
				      </span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>구분 <sup>필수</sup></th>
										<td>
											<span class="radioSet">
					              <input type="radio" name="qType01" disabled/>
					              <label for=""><i></i>주관식</label>
					            </span>
					            <span class="radioSet">
					              <input type="radio" name="qType01" checked disabled/>
					              <label for=""><i></i>객관식</label>
					            </span>
										</td>
									</tr>
									<tr>
										<th>질문 <sup>필수</sup></th>
										<td class="fBold">2021학년도 대비 교원임용 설명회를 참여한 이유는?</td>
									</tr>
									<tr>
										<th>답변 <sup>필수</sup></th>
										<td>
											<div class="tls">
												<table>
													<colgroup>
														<col width="80">
														<col width="*">
														<col width="80">
														<col width="80">
													</colgroup>
													<thead>
														<tr>
															<th>No</th>
															<th>답변</th>
															<th>직접입력</th>
															<th>삭제</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>1</td>
															<td class="tL">원하는 강사의 연간커리큘럼 파악</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>2</td>
															<td class="tL">원하는 강사의 연간 커리큘럼 파악</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>3</td>
															<td class="tL">과목별 학습계획/학습전략 파악</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>4</td>
															<td class="tL">선생님과의 1:1 상담</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>5</td>
															<td class="tL">참석 후 강의 할인혜택을 받기 위해</td>
															<td></td>
															<td></td>
														</tr>
														<tr>
															<td>6</td>
															<td class="tL">기타</td>
															<td>허용</td>
															<td></td>
														</tr>
													</tbody>
												</table>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="surveyQuestion mt20" v-if="servey02Mode">
						<div class="subTit">
							<h3>질문 (2)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
				      <span class="right">
				        <button class="btnS redline" @click="alertTrigger01 = true">삭제</button>
				        <button class="btnS ml5" @click="servey02Mode = !servey02Mode">저장</button>
				      </span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>구분 <sup>필수</sup></th>
										<td>
											<span class="radioSet">
					              <input type="radio" name="qType02" checked/>
					              <label for=""><i></i>주관식</label>
					            </span>
					            <span class="radioSet">
					              <input type="radio" name="qType02"/>
					              <label for=""><i></i>객관식</label>
					            </span>
										</td>
									</tr>
									<tr>
										<th>질문 <sup>필수</sup></th>
										<td><input type="text" placeholder="질문을 입력해 주세요." value="이번 설명회의 어떤 부분이 가장 도움 되셨나요?"/></td>
									</tr>
									<tr>
										<th>답변 <sup>필수</sup></th>
										<td class="fGray">주관식은 답변을 등록하지 않습니다.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="surveyQuestion mt20" v-else="servey02Mode">
						<div class="subTit">
							<h3>질문 (2)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
							</span>
				      <span class="right">
				        <button class="btnS ml5" @click="servey02Mode = !servey02Mode">수정</button>
				      </span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>구분 <sup>필수</sup></th>
										<td>
											<span class="radioSet">
					              <input type="radio" name="qType02" checked disabled/>
					              <label for=""><i></i>주관식</label>
					            </span>
					            <span class="radioSet">
					              <input type="radio" name="qType02" disabled/>
					              <label for=""><i></i>객관식</label>
					            </span>
										</td>
									</tr>
									<tr>
										<th>질문 <sup>필수</sup></th>
										<td class="fBold">이번 설명회의 어떤 부분이 가장 도움 되셨나요?</td>
									</tr>
									<tr>
										<th>답변 <sup>필수</sup></th>
										<td class="fGray">주관식은 답변을 등록하지 않습니다.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<Alert v-if='alertTrigger01' @close="alertTrigger01 = false">
			<template slot="modalbody">해당 질문을 삭제하시겠습니까?</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger01 = false">취소</button>
				<button class="btnM green" @click="alertTrigger01 = false">확인</button>
			</template>
		</Alert>
		<Popup v-if='popupTrigger01' @close="popupTrigger01 = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">설문 조사</h1>
			<template slot="modalbody">
				<div class="surveyPreview">
					<div class="surveyHead">
						<p class="boxBrown">수강생 여러분의 의견을 들려주세요<br/>보다 편리한 시스템, 보다 양질의 강의서비스를 제공하기 위한 기초자료로 사용하도록 하겠습니다.</p>
					</div>
					<div class="surveyCts">
						<div class="step" v-if="survey == 0">
							<div class="scrollArea">
								<dl class="quesItem">
									<dt>1. 재학생/졸업생입니까?</dt>
									<dd>
										<ul>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>① 1학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>② 2학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>③ 3학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>④ 4학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑤ 교육대학원 재학생</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑥ 졸업생</label>
												</span>
											</li>											
											<li>
												<span class="radioSet direct">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑦ 직접입력</label>
												</span>
												<span class="direct__input">
													<input type="text" name="q1"/>
												</span>
											</li>
										</ul>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>2. 2021학년도 대비 교원임용 설명회를 참여한 이유는?</dt>
									<dd>
										<ul>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>① 2021학년도 대비 임용시험제도 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>② 원하는 강사의 연간 커리큘럼 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>③ 과목별 학습계획/학습전략 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>④ 4학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑤ 교육대학원 재학생</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑥ 졸업생</label>
												</span>
											</li>											
											<li>
												<span class="radioSet direct">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑦ 직접입력</label>
												</span>
												<span class="direct__input">
													<input type="text" name="q1"/>
												</span>
											</li>
										</ul>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>3. 이번 설명회의 어떤 부분이 가장 도움 되셨나요?</dt>
									<dd>
										<textarea rows="4"></textarea>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>1. 재학생/졸업생입니까?</dt>
									<dd>
										<ul>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>① 1학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>② 2학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>③ 3학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>④ 4학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑤ 교육대학원 재학생</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑥ 졸업생</label>
												</span>
											</li>											
											<li>
												<span class="radioSet direct">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑦ 직접입력</label>
												</span>
												<span class="direct__input">
													<input type="text" name="q1"/>
												</span>
											</li>
										</ul>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>2. 2021학년도 대비 교원임용 설명회를 참여한 이유는?</dt>
									<dd>
										<ul>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>① 2021학년도 대비 임용시험제도 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>② 원하는 강사의 연간 커리큘럼 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>③ 과목별 학습계획/학습전략 파악</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>④ 4학년</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑤ 교육대학원 재학생</label>
												</span>
											</li>
											<li>
												<span class="radioSet">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑥ 졸업생</label>
												</span>
											</li>											
											<li>
												<span class="radioSet direct">
													<input type="radio" name="q1"/>
													<label for=""><i></i>⑦ 직접입력</label>
												</span>
												<span class="direct__input">
													<input type="text" name="q1"/>
												</span>
											</li>
										</ul>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>3. 이번 설명회의 어떤 부분이 가장 도움 되셨나요?</dt>
									<dd>
										<textarea rows="4"></textarea>
									</dd>
								</dl>
								<dl class="quesItem">
									<dt>4. 이번 설명회의 어떤 부분이 가장 도움 되셨나요?</dt>
									<dd>
										<input type="text">
									</dd>
								</dl>
							</div>
							<div class="btnArea">
								<button class="btnM line">취소</button>
								<button class="btnM green" @click="survey = 1">확인</button>
							</div>
						</div>
						<div class="step end" v-else-if="survey == 1">
							<strong>설문조사에 응해주셔서 감사합니다.</strong>
							<div class="btnArea">
								<button class="btnM" @click="{popupTrigger01 = false, survey = 0}">닫기</button>
							</div>
						</div>
					</div>
				</div>
			</template>
		</Popup>
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SurveyMgtView',
	data() {
			return {
				classValue: 'surveyPreviewPop',
				survey: 0,
				alertTrigger01: false,
				popupTrigger01: false,
				servey01Mode: true,
				servey02Mode: true,
				date00: '',
				date01: '',
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
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
