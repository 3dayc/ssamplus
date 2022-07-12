<template lang="html">
	<div>
		<div class="pageTit">
			<h2>설문 결과</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/surveyMgt">설문조사</router-link><router-link to="/mkup/site/surveyResult">설문 결과</router-link><em>상세</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="surveyResultView"><!-- class 없어도 유지 -->
					<div class="boardTop">
						<span class="right">
							<router-link to="/mkup/site/surveyResult" class="btnList">목록으로</router-link>
						</span>
					</div>
					<div class="subTit">
						<h3>설문조사 기본정보 :</h3>
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
									<th>제목</th>
									<td colspan="3">2021년 쌤플러스 마감 설문</td>
								</tr>
								<tr>
									<th>설문조사 기간</th>
									<td>2021-08-15  00:00  ~  2021-09-15  24:00</td>
									<th>노출 여부</th>
									<td>노출</td>
								</tr>
								<tr>
									<th>설문조사 URL</th>
									<td colspan="3">https://www.ssamplus.com/survey/?scnf_seq=3&new_win=Y</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="surveyQuestion mt20">
						<div class="subTit">
							<h3>질문 (1)</h3>
				      <span class="right">(총 <span class="fRed fBold">156</span>명 참여)</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>질문</th>
										<td class="fBold">2021학년도 대비 교원임용 설명회를 참여한 이유는?</td>
									</tr>
									<tr>
										<th>답변</th>
										<td>
											<div class="tls quesResultList">
												<table>
													<colgroup>
														<col width="50">
														<col width="*">
														<col width="200">
														<col width="120">
														<col width="120">
														<col width="150">
													</colgroup>
													<tbody>
														<tr>
															<th>1</th>
															<td class="tL">2021학년도 대비 임용시험제도 파악</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:30%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">30 %</td>
															<td class="tR">52 명</td>
															<td></td>
														</tr>
														<tr>
															<th>2</th>
															<td class="tL">원하는 강사의 연간 커리큘럼 파악</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:33%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">33 %</td>
															<td class="tR">46 명</td>
															<td></td>
														</tr>
														<tr>
															<th>3</th>
															<td class="tL">과목별 학습계획/학습전략 파악</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:6%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">6 %</td>
															<td class="tR">9 명</td>
															<td></td>
														</tr>
														<tr>
															<th>4</th>
															<td class="tL">선생님과의 1:1 상담</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:19%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">19 %</td>
															<td class="tR">29 명</td>
															<td></td>
														</tr>
														<tr>
															<th>5</th>
															<td class="tL">참석 후 강의 할인혜택을 받기 위해</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:7%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">7 %</td>
															<td class="tR">11 명</td>
															<td></td>
														</tr>
														<tr>
															<th>6</th>
															<td class="tL">기타</td>
															<td>
																<div class="percentBar">
															    <div class="percentBarOutter">
															      <div class="percentBarContents" style="width:6%;"></div>
															    </div>
															  </div>
															</td>
															<td class="tR">6 %</td>
															<td class="tR">9 명</td>
															<td><button class="btnS" @click="popupTrigger01 = true">보기</button></td>
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
					<div class="surveyQuestion mt20">
						<div class="subTit">
							<h3>질문 (2)</h3>
				      <span class="right">(총 <span class="fRed fBold">156</span>명 참여)</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="1420"/>
								</colgroup>
								<tbody>
									<tr>
										<th>질문</th>
										<td class="fBold">이번 설명회의 어떤 부분이 가장 도움 되셨나요?</td>
									</tr>
									<tr>
										<th>답변</th>
										<td><button class="btnS" @click="popupTrigger01 = true">보기</button></td>
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
		<Popup v-if='popupTrigger01' @close="popupTrigger01 = false" :popClass="classValue">
			<h1 slot="modalheader" class="tC">설문 결과</h1>
			<template slot="modalbody">
				<div class="surveyPreview">
					<div class="surveyCts">
						<div class="step">
							<div class="scrollArea">
								<dl class="quesItem">
									<dt>1. 2021학년도 대비 교원임용 설명회를 참여한 이유는?</dt>
									<dd>
										<div class="tls">
											<table>
												<colgroup>
													<col width="50">
													<col width="100">
													<col width="100">
													<col width="100">
													<col width="*">
												</colgroup>
												<tbody>
													<tr>
														<th>1</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
													<tr>
														<th>2</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
													<tr>
														<th>3</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
													<tr>
														<th>4</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
													<tr>
														<th>5</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
													<tr>
														<th>6</th>
														<td>68957</td>
														<td>jihey7</td>
														<td>특수</td>
														<td class="tL">예전 교육학을 광주에서 듣게 되어 알게 되었습니다.</td>
													</tr>
												</tbody>
											</table>
										</div>
									</dd>
								</dl>
							</div>
							<div class="btnArea">
								<button class="btnM" @click="popupTrigger01 = false">닫기</button>
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
  name: 'SurveyResultView',
	data() {
			return {
				classValue: 'surveyPreviewPop',
				popupTrigger01: false,
				date00: '',
				date01: '',
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
