<template lang="html">
	<div>
		<div class="pageTit">
	  	<h2>기관 관리</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/partnerAgency">대학제휴 회원</router-link><router-link to="/mkup/member/partnerAgency">기관 관리</router-link><em>상세</em></span><!-- 2021-07-14 메뉴명 변경 -->
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="partnerAgencyView"><!-- class 없어도 유지 -->
					<!-- 기관 정보 -->
		      <div class="subTit">
						<h3>기관 정보</h3>
						<span class="right">
							<button class="btnM green">저장</button>
							<router-link to="/mkup/member/partnerAgency" class="btnM ml10">취소</router-link>
							<router-link to="/mkup/member/partnerAgency" class="btnM line ml10">삭제</router-link>
						</span>
					</div>
					<div class="tvs">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="500"/>
								<col width="160"/>
								<col width="500"/>
							</colgroup>
							<tbody>
								<tr>
									<th>기관명<sup>필수</sup></th>
									<td><input type="text" placeholder="학교 및 부처(학과)를 입력" value="서울대학교 사범대학"/></td>
									<th>기관코드</th>
									<td>210101-001</td>
								</tr>
								<tr>
									<th>담당자명<sup>필수</sup></th>
									<td><input type="text" value="한희정"/></td>
									<th>담당자 연락처<sup>필수</sup></th>
									<td><input type="text" placeholder="숫자만 입력" value="010-1234-5678"/></td>
								</tr>
								<tr>
									<th>담당자 이메일<sup>필수</sup></th>
									<td><input type="text" value="hhj1234@sample.ac.kr"/></td>
									<th>제휴기간<sup>필수</sup></th>
									<td>
										<span class="calDupSet">
				              <VCalendar class="calSet" v-model="date02" color="green">
				                <template v-slot="{ inputValue, togglePopover }">
				                  <input :value="inputValue" @click="togglePopover()" readonly/>
				                </template>
				              </VCalendar>
				              <em>~</em>
				              <VCalendar class="calSet" v-model="date03" color="green">
				                <template v-slot="{ inputValue, togglePopover }">
				                  <input :value="inputValue" @click="togglePopover()" readonly/>
				                </template>
				              </VCalendar>
				            </span>
									</td>
								</tr>
								<tr>
									<th>기관 주소<sup>필수</sup></th>
									<td colspan="3">
            				<div class="address">
            				  <span class="zipcode">
            				    <input type="number" placeholder="우편번호" readonly/>
            				    <button class="btnSearch">검색</button>
            				  </span>
            				  <input type="text" class="ml5 w350"/>
            				  <input type="text" class="ml5 w600" placeholder="상세주소 입력"/>
            				</div>
									</td>
								</tr>
								<!-- 2021-08-23 관리자 항목 추가 -->
								<tr>
									<th>관리자<sup>필수</sup></th>
									<td colspan="3">
										<span class="selectSet">
											<select class="" name="">
												<option value="">선택</option>
												<option value="" selected>관리자 1</option>
												<option value="">관리자 2</option>
											</select>
										</span>
									</td>
								</tr>
								<!-- //2021-08-23 관리자 항목 추가 -->
							</tbody>
						</table>
					</div>
					<!-- //기관 정보 -->
					<!-- 2021-08-23 쿠폰 내역 -->
					<div class="subTit">
						<h3>쿠폰 내역</h3>
					</div>
					<div class="tls">
						<table>
							<colgroup>
								<col width="120">
								<col width="100">
								<col width="*">
								<col width="250">
								<col width="120">
								<col width="250">
								<col width="150">
							</colgroup>
							<thead>
								<tr>
									<th>카테고리</th>
									<th>쿠폰번호</th>
									<th>쿠폰명</th>
									<th>할인혜택 / 조건</th>
									<th>중복할인</th>
									<th>사용기준</th>
									<th>사용/총발급</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>대학제휴</td>
									<td>101234</td>
									<td><a href="#">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</a></td>
									<td>10%<br/>최대 1,000,000원 할인</td>
									<td>가능</td>
									<td>2021-05-04 ~ 2021-06-15 </td>
									<td><a href="#">1/10<br/>(사용률 10%)</a></td>
								</tr>
								<tr>
									<td>대학제휴</td>
									<td>101234</td>
									<td><a href="#">LG Gram_5만원 할인쿠폰</a></td>
									<td>10%<br/>최대 1,000,000원 할인</td>
									<td>불가능</td>
									<td>2021-05-04 ~ 2021-06-15 </td>
									<td><a href="#">1/10<br/>(사용률 10%)</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //2021-08-23 쿠폰 내역 -->
					<!-- 관리 -->
					<div class="subTit"><h3>관리</h3></div>
					<div class="tvs record">
						<table>
							<colgroup>
								<col width="160"/>
								<col width="1160"/>
							</colgroup>
							<tbody>
								<tr>
									<th>비고</th>
									<td>
										<div class="ipBtn sizeM">
											<input type="text"/>
											<button class="btnM line">저장</button>
										</div>
										<ul class="recordList">
                      <li><strong>[2021-02-23 15:35 / 박미진]</strong> 제휴기간 만료 예정이므로 제휴 갱신 여부 확인 차 담당자에게 연락했으나, 부재중이었음. <button class="btnDelete">삭제</button></li>
                      <li><strong>[2021-02-23 15:35 / 박미진]</strong> 파일 업로드 통해 제휴회원을 등록함. <button class="btnDelete">삭제</button></li>
                    </ul>
									</td>
								</tr>
								<tr>
									<th>수정 이력</th>
									<td>
		                <ul class="recordList">
		                  <li><strong>박미진  ┃  mjpark111  ┃  2021-02-15 14:25</strong></li>
		                </ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //관리 -->
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
  name: 'PartnerAgencyView',
	data() {
			return {
        date02: '2021-03-01',
        date03: '2021-03-31',
			}
	},
	methods: {
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
