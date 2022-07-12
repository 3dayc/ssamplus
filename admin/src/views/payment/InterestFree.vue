<template lang="html">
	<div>
		<div class="pageTit">
			<h2>무이자 할부</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/paymentMgt/interestFree">설정</router-link><em>무이자 할부</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="interestFree">
					<span class="supUtilTxt mb20">매월 말 PG 사이트에서 <strong>&lt;신용카드 무이자 할부 정보(행사 카드 정보)&gt;</strong>를 확인하여 정보를 입력하세요. 이 정보는 쌤플러스와 희소 사이트에 동시 적용됩니다.</span>
					<div class="boardTop">
						<div class="left-po"><a href="http://pgweb.dacom.net" target="_blank">▶  [PG사(KG 이니시스) 바로가기]</a></div>
						<div class="right-po"><button class="btnAdd" @click="PaymentCardFreeWrite()">신규등록</button></div>
					</div>
					<!-- 목록 -->
					<div class="tls">
						<table>
							<colgroup>
								<col width="100" />
								<col width="180" />
								<col width="150" />
								<col width="300" />
								<col width="100" />
								<col width="100" />
							</colgroup>
							<thead>
								<tr>
									<th>적용버전</th>
									<th>적용기간</th>
									<th>제목</th>
									<th>내용</th>
									<th>수정일</th>
									<th>삭제</th>
								</tr>
							</thead>
							<tbody>
								<!-- Loop -->
								<tr>
									<td>
										<span class="labelToggleSet">
				              <input type="checkbox" id="push5">
				              <label for="push5">
				                <span>차단</span>
				                <span>허용</span>
				              </label>
				            </span>
									</td>
									<td>2021-06-01~2021-06-30</td>
									<td><a @click="PaymentCardFreeView()">6월 무이자 할부 안내</a></td>
									<td class="tL">
										<a class="notUnderline" @click="PaymentCardFreeView()">
											*5만원이상 결제시 무이자 할부<br/>
											- 별도 신청없이 적용 (PG업종만 제공)<br/>
											- 2~4개월: 롯데카드<br/>
											- 2~5개월: 광주카드<br/>
											- 2~6개월: KB국민, 삼성, 신한, NH농협카드, 비씨, 씨티카드<br/>
											- 2~7개월: 현대<br/>
											- 2~8개월: 하나<br/>
											*부분 무이자 할부<br/>
											-삼성,국민,신한, 하나:별도 신청없이 적용<br/>
											-비씨카드:ARS(1899-5772)사전신청 고객 한함, 하나BC 제외<br/>
											-NH농협카드:ARS(1644-2009) 사전신청 고객 한함
										</a>
									</td>
									<td>2021-05-20</td>
									<td><button class="btnS line" @click="alertTrigger = true">삭제</button></td>
								</tr>
								<!-- //Loop -->
								<tr>
									<td>
										<span class="labelToggleSet">
				              <input type="checkbox" id="push5" checked>
				              <label for="push5">
				                <span>차단</span>
				                <span>허용</span>
				              </label>
				            </span>
									</td>
									<td>2021-06-01~2021-06-30</td>
									<td><a @click="PaymentCardFreeView()">5월 무이자 할부 안내</a></td>
									<td class="tL">
										<a class="notUnderline" @click="PaymentCardFreeView()">
											*5만원이상 결제시 무이자 할부<br/>
											- 별도 신청없이 적용 (PG업종만 제공)<br/>
											- 2~4개월: 롯데카드<br/>
											- 2~5개월: 광주카드<br/>
											- 2~6개월: KB국민, 삼성, 신한, NH농협카드, 비씨, 씨티카드<br/>
											- 2~7개월: 현대<br/>
											- 2~8개월: 하나<br/>
											*부분 무이자 할부<br/>
											-삼성,국민,신한, 하나:별도 신청없이 적용<br/>
											-비씨카드:ARS(1899-5772)사전신청 고객 한함, 하나BC 제외<br/>
											-NH농협카드:ARS(1644-2009) 사전신청 고객 한함
										</a>
									</td>
									<td>2021-05-20</td>
									<td class="fRed">적용 중,<br/>삭제불가</td>
								</tr>
								<tr>
									<td>
										<span class="labelToggleSet">
											<input type="checkbox" id="push5">
											<label for="push5">
												<span>차단</span>
												<span>허용</span>
											</label>
										</span>
									</td>
									<td>2021-06-01~2021-06-30</td>
									<td><a @click="PaymentCardFreeView()">4월 무이자 할부 안내</a></td>
									<td class="tL">
										<a class="notUnderline" @click="PaymentCardFreeView()">
											*5만원이상 결제시 무이자 할부<br/>
											- 별도 신청없이 적용 (PG업종만 제공)<br/>
											- 2~4개월: 롯데카드<br/>
											- 2~5개월: 광주카드<br/>
											- 2~6개월: KB국민, 삼성, 신한, NH농협카드, 비씨, 씨티카드<br/>
											- 2~7개월: 현대<br/>
											- 2~8개월: 하나<br/>
											*부분 무이자 할부<br/>
											-삼성,국민,신한, 하나:별도 신청없이 적용<br/>
											-비씨카드:ARS(1899-5772)사전신청 고객 한함, 하나BC 제외<br/>
											-NH농협카드:ARS(1644-2009) 사전신청 고객 한함
										</a>
									</td>
									<td>2021-05-20</td>
									<td><button class="btnS line" @click="alertTrigger = true">삭제</button></td>
								</tr>
								<!-- 데이터 없을 경우 -->
								<tr style="display:none;"><td colspan="6" class="noneData">검색된 데이터가 없습니다.</td></tr>
								<!-- //데이터 없을 경우 -->
							</tbody>
						</table>
					</div>
					<!-- //목록 -->
					<Paginate />
				</div>
				<!-- //page layout -->
			</article>
		</div>
		<!-- Popup -->
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
			<div slot="modalbody">삭제된 정보는 복구할 수 없습니다.<br/>삭제 하시겠습니까?</div>
		</Alert>
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'DailyCard',
	data() {
		return {
			alertTrigger: false,
			range: {
				start: new Date(),
				end: new Date(),
			},
		}
	},
	methods: {
		PaymentCardFreeWrite() {
			let routeData = this.$router.resolve({name: 'PaymentCardFreeWrite', query: {data: "someData"}});
			window.open('/mkup/windowPopup/pmtCardFreeWrite', '_blank', `width=1100,height=900`);
		},
		PaymentCardFreeView() {
			let routeData = this.$router.resolve({name: 'PaymentCardFreeView', query: {data: "someData"}});
			window.open('/mkup/windowPopup/pmtCardFreeView', '_blank', `width=1100,height=900`);
		},
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
