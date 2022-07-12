<template lang="html">
	<div>
		<div class="pageTit">
			<h2>거래처 관리</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><router-link to="/mkup/lecture/bookClient">거래처 관리</router-link><em>신규등록</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="bookClientWrite">
					<!-- 거래처 정보 -->
					<div class="subTit">
						<h3>거래처 정보</h3>
						<span class="right">
							<button class="btnM green" @click="toastPop('error', '필수 항목 및 입력 형식을 확인해주세요.')">저장</button>
							<router-link to="/mkup/lecture/bookClient" class="btnM ml10">취소</router-link>
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
									<th>거래처코드 (SAP) <sup>필수</sup></th>
									<td><button class="btnS line" @click="LectureClientSearchSAP()">거래처 검색</button></td>
									<th>거래여부 <sup>필수</sup></th>
									<td>
										<span class="radioSet">
											<input type="radio" name="radio1" checked />
											<label for=""><i></i>거래 중</label>
										</span>
										<span class="radioSet">
											<input type="radio" name="radio1" />
											<label for=""><i></i>거래 종료</label>
										</span>
									</td>
								</tr>
								<tr>
									<th>거래처명 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<td colspan="3"></td>
								</tr>
								<tr>
									<th>주소 <sup>필수</sup></th>
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
								<tr>
									<th>전화 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>FAX <sup>필수</sup></th>
									<td><input type="text"/></td>
								</tr>
								<tr>
									<th>담당자 <sup>필수</sup></th>
									<td><input type="text"/></td>
									<th>담당자 연락처 <sup>필수</sup></th>
									<td><input type="text"/></td>
								</tr>
								<tr>
									<th>매입율 <sup>필수</sup></th>
									<td>
										<span class="unit w100">
											<input type="number"/>
											<em>%</em>
										</span>
									</td>
									<th>당일출고</br>주문완료시간</th>
									<td>
										<input type="text">
									</td>
								</tr>
								<tr>
									<th>비고</th>
									<td colspan="3"><input type="text"/></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //거래처 정보 -->
					<!-- 반품처 정보 -->
					<div class="subTit">
						<h3>반품처 정보</h3>
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
									<th>반품처명</th>
									<td><input type="text"></td>
									<td colspan="2"></td>
								</tr>
								<tr>
									<th>주소</th>
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
								<tr>
									<th>담당자</th>
									<td><input type="text"/></td>
									<th>담당자 연락처</th>
									<td><input type="text"/></td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //반품처 정보 -->
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BookClientWrite',
	data() {
		return {
		}
	},
	methods: {
		LectureClientSearchSAP() {
      let routeData = this.$router.resolve({name: 'LectureClientSearchSAP', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lectureClientSearchSAP', '_blank', `width=570,height=750`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
