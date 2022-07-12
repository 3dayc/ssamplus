<template lang="html">
	<div>
		<!-- 북센 배송 -->
		<div class="subTit">
			<h3>북센 배송</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="170"/>
					<col width="280"/>
					<col width="80"/>
					<col width="160"/>
					<col width="160"/>
					<col width="100"/>
				</colgroup>
				<thead>
					<tr>
						<th>주문일 / 주문번호</th>
						<th>주문내용</th>
						<th>개별금액<br/><span class="fRed">(환불금액)</span></th>
						<th>배송 상태</th>
						<th>송장번호</th>
						<th>메모</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tL" rowspan="3">2021-02-05(금) 22:32:48<br/><a>P202102250000</a></td>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 1</td>
						<td class="tR">25,000</td>
						<td>배송 준비중</td>
						<td><a href="#">125-783-19283</a></td>
						<td rowspan="3"><button class="btnT line">메모</button></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 2</td>
						<td class="tR">25,000</td>
						<td>배송 준비중</td>
						<td><a href="#">125-783-19283</a></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet lilac">배송료</em></td>
						<td class="tR">2,500</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr class="blue">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>H202102250000</a></td>
						<td class="tL"><em class="iSet green">수강기기</em><br/>갤럭시 S21 울트라</td>
						<td class="tR">35,000</td>
						<td>배송중</td>
						<td><a href="#">125-783-19283</a></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>M202102250000</a></td>
						<td class="tL"><em class="iSet caribGreen">기타</em><br/>애플 아이패드</td>
						<td class="tR">35,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a href="#">125-783-19283</a></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
					<tr class="red">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>K202102250000</a></td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2021 이동건 유아임용 연도별 기출문제집</td>
						<td class="tR">40,000<br/><span class="fRed">(40,000)</span></td>
						<td class="fRed">보류</td>
						<td></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
					<tr>
						<td class="tL" rowspan="2">2021-02-05(금) 22:32:48<br/><a>P202102250000</a></td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">15,000</td>
						<td>배송 준비중</td>
						<td><a href="#">125-783-19283</a></td>
						<td rowspan="2"><button class="btnT line">메모</button></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">12,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a href="#">125-783-19283</a></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //북센 배송 -->
		<!-- 학원 배송 -->
		<div class="subTit">
			<h3>학원 배송</h3>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="170"/>
					<col width="280"/>
					<col width="80"/>
					<col width="100"/>
					<col width="120"/>
					<col width="140"/>
					<col width="100"/>
				</colgroup>
				<thead>
					<tr>
						<th>주문일 / 주문번호</th>
						<th>주문내용</th>
						<th>개별금액<br/><span class="fRed">(환불금액)</span></th>
						<th>배송처</th>
						<th>배송 상태</th>
						<th>송장번호</th>
						<th>메모</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tL" rowspan="3">2021-02-05(금) 22:32:48<br/><a>P202102250000</a></td>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 1</td>
						<td class="tR">25,000</td>
						<td>이데아관</td>
						<td>배송 준비중</td>
						<td><a href="#">125-783-19283</a></td>
						<td rowspan="3"><button class="btnT line">메모</button></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 2</td>
						<td class="tR">25,000</td>
						<td>이데아관</td>
						<td>배송 준비중</td>
						<td>
							<button class="btnT line mr10">주문 다운로드</button>
							<button class="btnT line" @click="alertTrigger = true">번호 입력</button>
						</td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet lilac">배송료</em></td>
						<td class="tR">2,500</td>
						<td>-</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr class="blue">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>H202102250000</a></td>
						<td class="tL"><em class="iSet green">수강기기</em><br/>갤럭시 S21 울트라</td>
						<td class="tR">35,000</td>
						<td>KT상암센터</td>
						<td>배송중</td>
						<td><a href="#">125-783-19283</a></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>M202102250000</a></td>
						<td class="tL"><em class="iSet caribGreen">기타</em><br/>애플 아이패드</td>
						<td class="tR">35,000</td>
						<td>이데아관</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a href="#">125-783-19283</a></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
					<tr class="red">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a>K202102250000</a></td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2021 이동건 유아임용 연도별 기출문제집</td>
						<td class="tR">40,000<br/><span class="fRed">(40,000)</span></td>
						<td class="fRed">-</td>
						<td class="fRed">보류</td>
						<td></td>
						<td><button class="btnT line">메모</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //학원 배송 -->

		<!-- Popup -->
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
      	<p>송장번호를 입력해주세요</p>
				<input type="text" class="mt10" placeholder="송장번호 입력">
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">입력</button>
      </template>
    </Alert>
    <!-- // Layer Popup -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewShopping',
	data() {
		return {
			alertTrigger: false,
		}
	},
	methods: {
	},
	components: {
	},
}
</script>
