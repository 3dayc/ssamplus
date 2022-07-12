<template lang="html">
	<div>
		<div class="subTit">
			<h3>사물함 신청 내역</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="300"/>
					<col width="100"/>
					<col width="150"/>
					<col width="150"/>
					<col width="150"/>
					<col width="150"/>
					<col width="100"/>
				</colgroup>
				<thead>
					<tr>
						<th>신청기간</th>
						<th>위치</th>
						<th>번호</th>
						<th>신청일</th>
						<th>결제금액</th>
						<th>사용여부</th>
						<th>관리</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2021-04-01 ~ 2021-04-30</td>
						<td>아이비</td>
						<td>4열 43번</td>
						<td>2021-04-01</td>
						<td>5,000</td>
						<td>신청완료</td>
						<td><button class="btnT line">사용 취소</button></td>
					</tr>
					<tr>
						<td>2021-04-01 ~ 2021-04-30</td>
						<td>이데아</td>
						<td>4열 43번</td>
						<td>2021-04-01</td>
						<td>0</td><!-- 2021-08-23 사물함 쿠폰을 적용한 경우 -->
						<td>신청완료</td>
						<td><button class="btnT line">사용 취소</button></td>
					</tr>
					<tr class="green"><!-- 2021-08-23 사용 중인 경우 배경색 추가 -->
						<td>2021-04-01 ~ 2021-04-30</td>
						<td>애비뉴</td>
						<td>4열 43번</td>
						<td>2021-04-01</td>
						<td>5,000</td>
						<td class="fRed">사용 중</td>
						<td><button class="btnT line" disabled>사용 취소</button></td>
					</tr>
					<tr>
						<td>2021-04-01 ~ 2021-04-30</td>
						<td>아이비</td>
						<td>4열 43번</td>
						<td>2021-04-01</td>
						<td>2,000</td>
						<td>사용종료</td>
						<td><button class="btnT line" disabled>사용 취소</button></td>
					</tr>
					<tr>
						<td>2021-04-01 ~ 2021-04-30</td>
						<td>이데아</td>
						<td>4열 43번</td>
						<td>2021-04-01</td>
						<td>5,000</td>
						<td class="fRed">사용취소</td>
						<td><button class="btnT line" disabled>사용 취소</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewLocker',
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
