<template lang="html">
	<div>
		<div class="pageTit">
			<h2>기관 관리</h2>
			<span><router-link to="/mkup/member/userMgt">회원/선생님</router-link><router-link to="/mkup/member/partnerAgency">대학제휴 회원</router-link><router-link to="/mkup/member/partnerAgency">기관 관리</router-link><em>신규등록</em></span>
		</div>
		<div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="partnerAgencyWrite"><!-- class 없어도 유지 -->
					<!-- 기관 정보 -->
		      <div class="subTit">
						<h3>기관 정보</h3>
						<span class="right">
							<router-link to="/mkup/member/partnerAgency/view" class="btnM green">저장</router-link>
							<router-link to="/mkup/member/partnerAgency" class="btnM ml10">취소</router-link>
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
									<td><input type="text" placeholder="학교 및 부처(학과)를 입력"/></td>
									<th>기관코드</th>
									<td></td>
								</tr>
								<tr>
									<th>담당자명<sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>담당자 연락처<sup>필수</sup></th>
									<td><input type="text" placeholder="숫자만 입력"/></td>
								</tr>
								<tr>
									<th>담당자 이메일<sup>필수</sup></th>
									<td><input type="text"/></td>
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
												<option value="">관리자 1</option>
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
									</td>
								</tr>
								<tr>
									<th>수정 이력</th>
									<td></td>
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
  name: 'PartnerAgencyWrite',
	data() {
			return {
        date02: '',
        date03: '',
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
