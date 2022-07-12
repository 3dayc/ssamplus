<template lang="html">
	<div>
		<div class="pageTit">
			<h2>설문지 관리</h2>
      <span><router-link to="/mkup/site/bannerGnb">사이트 관리</router-link><router-link to="/mkup/site/surveyMgt">설문조사</router-link><router-link to="/mkup/site/surveyMgt">설문지 관리</router-link><em>신규등록</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="surveyMgtWrite"><!-- class 없어도 유지 -->
					<div class="subTit">
						<h3>설문조사 기본정보 :</h3>
						<span class="right">
							<router-link to="/mkup/site/surveyMgt/view" class="btnM green">저장</router-link>
							<button class="btnM gray ml10">취소</button>
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
							</tbody>
						</table>
					</div>
					<div class="boxBrown msgBtnSet mt20">
						<p class="msg">※ 질문 추가 버튼을 클릭하여 설문조사 양식을 작성해 주세요.</p>
						<span class="btnSet">
							<button class="btnM line">질문 추가</button>
						</span>
					</div>
					<div class="surveyQuestion mt20">
						<div class="subTit">
							<h3>질문 (1)</h3>
							<span class="ml20">
								<button class="btnPosArrow">위로</button>
								<button class="btnPosArrow down">아래로</button>
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
					              <input type="radio" name="qType01" @change="qType = !qType"/>
					              <label for=""><i></i>주관식</label>
					            </span>
					            <span class="radioSet">
					              <input type="radio" name="qType01" @change="qType = !qType" checked/>
					              <label for=""><i></i>객관식</label>
					            </span>
										</td>
									</tr>
									<tr>
										<th>질문 <sup>필수</sup></th>
										<td><input type="text" placeholder="질문을 입력해 주세요."/></td>
									</tr>
									<tr v-if="qType == true">
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
													</tbody>
												</table>
											</div>
										</td>
									</tr>
									<tr v-if="qType == false">
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
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SurveyMgtWrite',
	data() {
			return {
				qType: true,
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
