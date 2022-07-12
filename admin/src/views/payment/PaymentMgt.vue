<template lang="html">
	<div>
		<div class="pageTit">
			<h2>결제 내역</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/paymentMgt">결제 관리</router-link><em>결제 내역</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="paymentMgt"><!-- class 없어도 유지 -->
					<!-- 검색 -->
					<div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
	                  <strong class="title">결제일</strong>
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
												<option value="no" class="label">결제여부</option>
												<option value="">전체</option>
												<option value="">미결제</option>
												<option value="">결제완료</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<span class="selectSet lCase">
											<select name="" id="">
												<option value="no" class="label">결제수단</option>
												<option value="">전체</option>
												<option value="">가상계좌</option>
												<option value="">현금</option>
												<option value="">학원현금</option>
												<option value="">학원카드</option>
												<option value="">키오스크</option>
												<option value="">0원수강</option>
											</select>
										</span>
									</span>
									<span class="lsItem">
										<input type="text" placeholder="주문자 이름, 아이디, 주문내용" />
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
								<col width="170"/>
								<col width="150"/>
								<col width="260"/>
								<col width="100"/>
								<col width="100"/>
								<col width="80"/>
								<col width="180"/>
								<col width="80"/>
								<col width="80"/>
							</colgroup>
							<thead>
								<tr>
									<th>주문일 / 주문번호</th>
									<th>주문자 : 회원번호<br/>(아이디)</th>
									<th>주문내용</th>
									<th>개별금액<br/><span class="fRed">(환불금액)</span></th>
									<th>총 금액<br/><span class="fRed">(환불총액)</span></th>
									<th>쿠폰적용</th>
									<th>결제방법<br/>결제상태</th>
									<th>관리</th>
									<th>메모</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet sky">단과</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000</td>
									<td>(5,600)</td>
									<td><strong>카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<!-- 패키지 일 경우 -->
								<tr>
									<td rowspan="4" class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">M202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td rowspan="4"><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet blue">패키지</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">1,110,000</td>
									<td rowspan="4" class="tR">1,162,500</td>
									<td rowspan="4"></td>
									<td rowspan="4"><strong>가상계좌</strong><br/>미결제</td>
									<td rowspan="4"></td>
									<td rowspan="4"><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr>
									<td class="tL">
										<em class="iSet purple">교재</em><br/>
										장영희 적중 모의고사 모음집 1
									</td>
									<td class="tR">25,000</td>
								</tr>
								<tr>
									<td class="tL">
										<em class="iSet purple">교재</em><br/>
										장영희 적중 모의고사 모음집 2
									</td>
									<td class="tR">25,000</td>
								</tr>
								<tr>
									<td class="tL"><em class="iSet lilac">배송료</em></td>
									<td class="tR">2,500</td>
								</tr>
								<!-- //패키지 일 경우 -->
								<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet sky">단과</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000</td>
									<td></td>
									<td><strong>학원카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">메모</button></td>
								</tr>
								<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet sky">단과</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000</td>
									<td></td>
									<td><strong>학원현금</strong><br/>2021-02-05(금)</td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">메모</button></td>
								</tr>
								<tr class="cancel"> <!-- 환불 일 경우 -->
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet sky">단과</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000<br/><em class="fRed">(560,000)</em></td>
									<td></td>
									<td>
										<strong>학원현금</strong><br/>2021-02-01(월) 08:57:06<br/>
										<strong class="fRed">학원현금 환불</strong><br/>2021-02-05(금) 22:32:48<br/>
										<strong class="fRed">학원현금 환불2</strong><br/>2021-02-08(월) 09:49:15
									</td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">환불</button></td>
									<td></td>
								</tr>
								<tr>
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">K202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet green">학습기기</em><br/>
										iPad Pro 2세대 + Apple pencil 2세대
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000</td>
									<td>(5,600)</td>
									<td><strong>카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<!---->
								<tr>
									<td class="tL" rowspan="3">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td rowspan="3"><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet green">학습기기</em><br/>
										iPad Pro 2세대 + Apple pencil 2세대
									</td>
									<td class="tR">1,110,000</td>
									<td rowspan="3" class="tR">1,137,500</td>
									<td rowspan="3">(113,700)</td>
									<td rowspan="3"><strong>가상계좌</strong><br/>미결제</td>
									<td rowspan="3"></td>
									<td rowspan="3"><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr>
									<td class="tL">
										<em class="iSet purple">소득공제</em><br/>
										장영희 적중 모의고사 모음집 1
									</td>
									<td class="tR">25,000</td>
								</tr>
								<tr>
									<td class="tL"><em class="iSet lilac">배송료</em></td>
									<td class="tR">2,500</td>
								</tr>
								<!--//-->
								<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">K202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet sky">단과</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">560,000</td>
									<td class="tR">560,000</td>
									<td></td>
									<td><strong>키오스크</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT line" @click="PaymentOrderDirect()">환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr>
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet orange">모의고사</em><br/>
										제 15회 희소온라인 모의고사 체육 김용호
									</td>
									<td class="tR">35,000</td>
									<td class="tR">35,000</td>
									<td></td>
									<td><strong>가상계좌</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr>
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">M202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet line">재수강</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">15,700</td>
									<td class="tR">15,700</td>
									<td></td>
									<td><strong>카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT redline" disabled>환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr>
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">K202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet line">기간연장</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">15,700</td>
									<td class="tR">15,700</td>
									<td></td>
									<td><strong>카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT redline" disabled>환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<tr class="notOnline"> <!-- 학원 강좌/교재 일 경우 -->
									<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H202102250000</a></td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
									<td class="tL">
										<em class="iSet line">보충강의</em><br/>
										[21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
									</td>
									<td class="tR">17,000</td>
									<td class="tR">17,000</td>
									<td></td>
									<td><strong>카드</strong><br/>2021-02-05(금) 22:32:48</td>
									<td><button class="btnT redline" disabled>환불</button></td>
									<td><button class="btnT line" @click="PaymentOrderOnline()">메모</button></td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'PaymentMgt',
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
