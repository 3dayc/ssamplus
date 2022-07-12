<template lang="html">
	<div>
		<div class="subTit">
			<h3>장바구니 내역</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="400"/>
					<col width="100"/>
					<col width="400"/>
					<col width="80"/>
				</colgroup>
				<thead>
					<tr>
						<th>항목</th>
						<th>금액</th>
						<th>적용가능쿠폰</th>
						<th>관리</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tL">
							<em class="iSet sky">단과</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>560,000</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰<br/>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet blue">패키지</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>560,000</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰<br/>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
						<td class="tL">
							<em class="iSet sky">단과</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>560,000</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
						<td class="tL">
							<em class="iSet blue">패키지</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>560,000</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet green">학습기기</em><br/>iPad Pro 2세대 + Apple pencil 2세대
						</td>
						<td>350,000</td>
						<td>-</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 1
						</td>
						<td>15,700</td>
						<td>이동건 해설편 배송비 쿠폰</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet orange">모의고사</em><br/>제 15회 희소온라인 모의고사 체육 김용호
						</td>
						<td>25,000</td>
						<td>-</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet line">재수강</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>15,700</td>
						<td>-</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet line">기간연장</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>15,700</td>
						<td>-</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<tr>
						<td class="tL">
							<em class="iSet line">보충강의</em><br/>[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
						</td>
						<td>17,000</td>
						<td>-</td>
						<td><button class="btnT line">삭제</button></td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewCart',
	data() {
			return {
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
