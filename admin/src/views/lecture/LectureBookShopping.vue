<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>주문정보</h1>
      <span class="supTxt">* 해당 주문번호의 상세 주문정보를 표시</span>
    </div>
    <div class="winContent">
      <h3><strong>주문/결제 정보</strong></h3>
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
  						<th>주문번호</th>
  						<td>20210225-0151343330</td>
  						<th>주문 회원</th>
  						<td>김지민 ┃  jimin0123</td>
  					</tr>
  					<tr>
  						<th>주문금액</th>
  						<td>22,300원</td>
  						<th>신청일</th>
  						<td>2021-02-05(금) 22:32:48</td>
  					</tr>
  					<tr>
  						<th>결제방법</th>
  						<td>카드  ┃ 삼성카드 (6개월)</td>
  						<th>거래번호</th>
  						<td>65539728</td>
  					</tr>
  					<tr>
  						<th>결제상태</th>
  						<td colspan="3">결제완료 ┃  2021-02-05(금) 22:32:48</td>
  					</tr>
  				</tbody>
  			</table>
  		</div>

      <h3 class="mt10"><strong>주문 상세정보</strong></h3>
      <div class="tls subGreen w600">
  			<table>
  				<colgroup>
  					<col width="80"/>
            <col width="*"/>
  					<col width="160"/>
  				</colgroup>
          <thead>
            <tr>
              <th>구분</th>
              <th>주문내용</th>
              <th>총 금액</th>
            </tr>
          </thead>
  				<tbody>
  					<tr>
              <td>교재</td>
              <td class="tL">[2021 이동건 유아임용 연도별 기출문제집</td>
              <td class="tR">22,300</td>
  					</tr>
  				</tbody>
  			</table>
  		</div>

      <h3 class="mt10"><strong>관리</strong></h3>
  		<div class="tvs record">
  			<table>
  				<colgroup>
  					<col width="160"/>
  					<col width="*"/>
  				</colgroup>
  				<tbody>
  					<tr>
  						<th>메모</th>
  						<td>
  							<span class="ipBtn sizeM">
  								<input type="text" />
  								<button class="btnM line">저장</button>
  							</span>
  							<ul class="recordList">
  								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. <button class="btnDelete">삭제</button></li>
  								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
  								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong>   수강료 장기 연체 고객입니다. 현재 무통장 입금으로 계좌번호 전달한 상태임. </li>
  							</ul>
  						</td>
  					</tr>
  				</tbody>
  			</table>
  		</div>

    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureBookShopping',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
