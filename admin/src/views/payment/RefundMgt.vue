<template lang="html">
	<div>
		<div class="pageTit">
			<h2>환불 내역</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/refundMgt">환불 관리</router-link><em>환불 내역</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="refundMgt">
					<!-- 검색 -->
					<div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
	                  <strong class="title">환불신청일</strong>
										<VCalendar class="calSet dupCal" v-model="range" is-range color="green">
											<template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
												<em>~</em>
												<input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
											</template>
										</Vcalendar>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">환불여부</option>
												<option value="">전체</option>
												<option value="">환불신청</option>
												<option value="">환불완료</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">환불수단</option>
												<option value="">전체</option>
												<option value="">은행송금</option>
												<option value="">카드취소</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="주문번호, 주문자 이름, 아이디, 예금주" />
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
						</div>
					</div>
					<!-- //검색 -->
					<!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="180" />
								<col width="180" />
								<col width="160" />
								<col width="120" />
								<col width="120" />
								<col width="100" />
								<col width="160" />
								<col width="120" />
								<col width="700" />
								<col width="120" />
							</colgroup>
							<thead class="duble">
								<tr>
									<th rowspan="2">환불신청일<br/>(주문결제일)</th>
									<th rowspan="2">주문일<br/>(주문번호)</th>
									<th rowspan="2">주문자 : 회원번호<br/>(아이디)</th>
									<th rowspan="2">환불구분</th>
									<th colspan="6" class="bgRed">환불정보(은행송금)</th>
								</tr>
								<tr>
									<th>예금주</th>
									<th>은행명</th>
									<th>계좌번호</th>
									<th>환불금액</th>
									<th>환불사유</th>
									<th>환불일자</th>
								</tr>
							</thead>
							<tbody>
								<!-- Loop -->
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(P202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fBlue">은행송금</td>
									<td>홍길동</td>
									<td>국민</td>
									<td>99999999999999</td>
									<td>9,999,999</td>
									<td class="tL">시험포기</td>
									<td></td>
								</tr>
								<!-- //Loop -->
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(M202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fRed">카드취소</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="tL">패키지 부분환불(상품코드9999)</td>
									<td></td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(K202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fRed">카드취소</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="tL">패키지 부분환불</td>
									<td></td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(H202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fBlue">은행송금</td>
									<td>홍길동</td>
									<td>국민</td>
									<td>99999999999999</td>
									<td>9,999,999</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(P202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fBlue">은행송금</td>
									<td>홍길동</td>
									<td>국민</td>
									<td>99999999999999</td>
									<td>9,999,999</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(M202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fBlue">은행송금</td>
									<td>홍길동</td>
									<td>국민</td>
									<td>99999999999999</td>
									<td>9,999,999</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(K202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fRed">카드취소</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(H202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fRed">카드취소</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<tr>
									<td>2021-01-14  12:13:01<br/>(2021-01-16  09:46:55)</td>
									<td><a @click="PaymentOrderOnline()">2021-01-14  12:13:01<br/>(P202101140000)</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td>
										<strong>홍길동 : 348178</strong><br/>(leeminji3030)
									</td>
									<td class="fRed">카드취소</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="bgGray">-</td>
									<td class="tL">패키지 부분환불</td>
									<td>2021-05-14</td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="10" class="noneData">검색된 데이터가 없습니다.</td></tr>
								<!-- //데이터 없을 경우 -->
							</tbody>
						</table>
					</div>
					<Paginate/>
					<!-- //목록 -->
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
  name: 'RefundMgt',
	data() {
		return {
			range: {
				start: null,
				end: null,
			},
		}
	},
	methods: {
		PaymentOrderOnline() {
      let routeData = this.$router.resolve({name: 'PaymentOrderOnline', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtOrderOnline', '_blank', `width=850,height=20000`);
    },
		PaymentOrderDirect() {
      let routeData = this.$router.resolve({name: 'PaymentOrderDirect', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtOrderDirect', '_blank', `width=850,height=20000`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
