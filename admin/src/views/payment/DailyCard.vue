<template lang="html">
	<div>
		<div class="pageTit">
			<h2>일별 카드결제</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><em>일별 카드결제</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="dailyCard">
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
										<button class="btnSearch">검색</button>
									</span>
								</div>
								<div>
									<span class="monthCheckSet ml10">
										<span>
											<input type="radio" name="day" id="month1" />
											<label for="month1">오늘</label>
										</span>
										<span>
											<input type="radio" name="day" id="month2" />
											<label for="month2">어제</label>
										</span>
										<span>
											<input type="radio" name="day" id="month3" />
											<label for="month3">이번 달</label>
										</span>
										<span>
											<input type="radio" name="day" id="month4" />
											<label for="month4">지난 달</label>
										</span>
									</span>
									<button class="btnRefresh">초기화</button>
								</div>
							</div>
							<span class="block fGreen tL mt10">※ 검색기간은 1개월 이내로 해주세요</span>
						</div>
					</div>
					<!-- //검색 -->
					<!-- 검색기간의 결제금액 합계 -->
					<div class="grayBox">
						결제금액 :  <strong>40,815,690</strong> 원 <em>(당일 결제 당일 취소금액 포함)</em>
						<a href="http://pgweb.dacom.net" class="btnM ml10" target="_blank">데이콤 바로가기</a>
						<button class="btnM ml5" @click="CheckGuide()">검산가이드</button>
					</div>
					<!-- //검색기간의 결제금액 합계 -->
					<!-- summery -->
					<div class="listSummery">
            <div class="left">
              <strong>※ 결제자 목록 보기</strong>
							<span class="labelToggleSet">
	              <input type="checkbox" id="push5" checked>
	              <label for="push5">
	                <span>미허용</span>
	                <span>허용</span>
	              </label>
	            </span>
            </div>
          </div>
					<!-- //summery -->
					<!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="80" />
								<col width="180" />
								<col width="180" />
								<col width="150" />
								<col width="300" />
								<col width="150" />
								<col width="150" />
							</colgroup>
							<thead>
								<tr>
									<th>번호</th>
									<th>결제일시</th>
									<th>주문번호</th>
									<th>회원번호</th>
									<th>아이디</th>
									<th>결제자</th>
									<th>결제금액</th>
								</tr>
							</thead>
							<tbody>
								<!-- Loop -->
								<tr>
									<td><strong>9999</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>P202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<!-- //Loop -->
								<tr>
									<td><strong>7</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>M202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>6</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>K202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>5</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>H202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>4</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>P202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>3</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>M202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>2</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>K202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<tr>
									<td><strong>1</strong></td><!-- 2021-09-02 bold 처리 -->
									<td><strong>2021-01-14  12:13:56</strong></td><!-- 2021-09-02 bold 처리 -->
									<td>K202101140000</td><!-- 2021-09-02 주문번호 수정 -->
									<td><strong>348178</strong></td>
									<td>leeminji3030</td>
									<td><strong>홍길동</strong></td>
									<td class="tR"><strong>999,999,999</strong></td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="7" class="noneData">검색된 데이터가 없습니다.</td></tr>
								<!-- //데이터 없을 경우 -->
							</tbody>
						</table>
					</div>
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
  name: 'DailyCard',
	data() {
		return {
			range: {
				start: null,
				end: null,
			},
		}
	},
	methods: {
		CheckGuide() {
			let routeData = this.$router.resolve({name: 'CheckGuide', query: {data: "someData"}});
			window.open('/mkup/windowPopup/chkGuide', '_blank', `width=570,height=750`);
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
