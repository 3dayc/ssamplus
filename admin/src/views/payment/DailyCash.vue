<template lang="html">
	<div>
		<div class="pageTit">
			<h2>일별 현금결제</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><em>일별 현금결제</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="dailyCash">
					<!-- 검색 -->
					<div class="boardTop">
						<div class="listSearch">
							<div class="back">
								<div class="bdLine">
									<span class="lsItem">
	                  <strong class="title">결제일(환불일)</strong>
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
						<div class="right-po"><button class="btnDownload">다운로드</button> <!--2021-06-30--></div>
					</div>
					<!-- //검색 -->
					<!-- 목록 -->
					<div class="tls">
						<table>
							<thead>
								<tr>
									<th>결제일(환불일)</th>
									<th>매출처</th>
									<th>학원(강좌)</th>
									<th>온라인(강좌)</th>
									<th>교재</th>
									<th class="bgRed">결제금액(합계)</th>
									<th class="bgBlue">환불금액(합계)</th>
									<th>학원(강좌)</th>
									<th>온라인(강좌)</th>
									<th>교재</th>
								</tr>
							</thead>
							<tbody>
								<!-- Loop -->
								<tr>
									<td rowspan="5">2021-01-01</td>
									<th class="bgGray">이데아(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">아이비(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">애비뉴(대구)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">비전관</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr class="trBgYellow">
									<th>소계</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold"></td>
									<td class="tR bgBlue fBlue fBold"></td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<!-- //Loop -->
								<tr>
									<td rowspan="5">2021-01-02</td>
									<th class="bgGray">이데아(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">아이비(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">애비뉴(대구)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">비전관</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr class="trBgYellow">
									<th>소계</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold"></td>
									<td class="tR bgBlue fBlue fBold"></td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<td rowspan="5">2021-01-01</td>
									<th class="bgGray">이데아(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">아이비(서울)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">애비뉴(대구)</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr>
									<th class="bgGray">비전관</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold">999,999,999</td>
									<td class="tR bgBlue fBlue fBold">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<tr class="trBgYellow">
									<th>소계</th>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR bgRed fRed fBold"></td>
									<td class="tR bgBlue fBlue fBold"></td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
									<td class="tR">999,999,999</td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="10" class="noneData">검색된 데이터가 없습니다.</td></tr>
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
  name: 'DailyCash',
	data() {
		return {
			range: {
				start: new Date(),
				end: new Date(),
			},
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
