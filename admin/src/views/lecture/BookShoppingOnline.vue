<template lang="html">
	<div>
		<!-- 검색 -->
		<div class="boardTop">
			<div class="left-po">
				<strong>회원 개인정보 표출</strong>
				<span class="labelToggleSet">
					<input type="checkbox" id="push" />
					<label for="push">
						<span>차단</span>
						<span>허용</span>
					</label>
				</span>
			</div>
			<div class="listSearch">
				<div class="back">
					<div class="bdLine">
						<span class="lsItem">
							<div class="multiselectSet">
								<div class="selectSet lCase" @click="multiSelect($event)">
									<select>
										<option>배송 상태</option>
									</select>
									<div class="overSelect"></div>
								</div>
								<div class="checkArea">
									<span class="checkSet">
										<input type="checkbox" id="one" checked/>
										<label for="one"><i></i>배송 준비중</label>
									</span>
									<span class="checkSet">
										<input type="checkbox" id="two" checked/>
										<label for="two"><i></i>배송중</label>
									</span>
									<span class="checkSet">
										<input type="checkbox" id="three" checked/>
										<label for="three"><i></i>배송완료</label>
									</span>
									<span class="checkSet">
										<input type="checkbox" id="four" checked/>
										<label for="four"><i></i>보류</label>
									</span>
								</div>
							</div>
						</span>
						<span class="lsItem">
							<input type="text" placeholder="주문번호, 교재명 검색" />
							<button class="btnSearch">검색</button>
						</span>
					</div>
					<div>
						<button class="btnRefresh">초기화</button>
					</div>
				</div>
			</div>
			<span class="right-po"><button class="btnDownload" @click="popTrigger = true">다운로드</button></span>
		</div>
		<!-- //검색 -->
		<!-- 목록 -->
		<div class="tls">
			<table>
				<colgroup>
					<col width="140"/>
					<col width="100"/>
					<col width="260"/>
					<col width="80"/>
					<col width="100"/>
					<col width="100"/>
					<col width="80"/>
				</colgroup>
				<thead>
					<tr>
						<th>주문일 / 주문번호</th>
						<th>주문자 : 회원번호<br/>(아이디)</th>
						<th>주문내용</th>
						<th>개별금액<br/><span class="fRed">(환불금액)</span></th>
						<th>배송 상태</th>
						<th>송장번호</th>
						<th>메모</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tL" rowspan="3">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td rowspan="3"><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 1</td>
						<td class="tR">25,000</td>
						<td>배송 준비중</td>
						<td><a>125-783-19283</a></td>
						<td rowspan="3"><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 2</td>
						<td class="tR">25,000</td>
						<td>배송 준비중</td>
						<td><a>125-783-19283</a></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet lilac">배송료</em></td>
						<td class="tR">2,500</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr class="blue">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2021 이동건 유아임용 연도별 기출문제집</td>
						<td class="tR">35,000</td>
						<td>배송중</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderDirect()">메모</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">M-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2021 이동건 유아임용 연도별 기출문제집</td>
						<td class="tR">35,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr class="red">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">K-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">40,000<br/><span class="fRed">(40,000)</span></td>
						<td class="fRed">보류</td>
						<td></td>
						<td><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr>
						<td class="tL" rowspan="3">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td rowspan="3"><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">15,000</td>
						<td>배송 준비중</td>
						<td><a>125-783-19283</a></td>
						<td rowspan="3"><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet purple">교재</em><br/>장영희 적중 모의고사 모음집 2</td>
						<td class="tR">12,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a>125-783-19283</a></td>
					</tr>
					<tr>
						<td class="tL"><em class="iSet lilac">배송료</em></td>
						<td class="tR">2,500</td>
						<td>-</td>
						<td>-</td>
					</tr>
					<tr class="blue">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">35,000</td>
						<td>배송 준비중</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderDirect()">메모</button></td>
					</tr>
					<tr>
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">M-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">35,000</td>
						<td>배송중</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">35,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr class="expiry">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderOnline()">K-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">35,000</td>
						<td>배송완료<br/>2021-02-06(토) 16:00</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderOnline()">메모</button></td>
					</tr>
					<tr class="blue">
						<td class="tL">2021-02-05(금) 22:32:48<br/><a @click="PaymentOrderDirect()">H-20210225-0000</a></td>
						<td><strong>홍길동 : 348178</strong><br/>(leeminji3030)</td>
						<td class="tL"><em class="iSet purple">교재</em><br/>2022 전공일본어 완전공략 가이드</td>
						<td class="tR">35,000</td>
						<td>배송 준비중</td>
						<td><a>125-783-19283</a></td>
						<td><button class="btnS line" @click="PaymentOrderDirect()">메모</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<Paginate/>
		<!-- //목록 -->

		<!-- 다운로드 마스터 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>다운로드 마스터 – 회원</h1>
        <span>* 다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
				<!-- 항목선택 -->
				<div class="downloadForm">
					<dl>
						<dt>조건1</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">가입기간</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건2</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강구분</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">유료수강</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강교수</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">교육학</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">김현</option>
	                <option value="" >Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<a class="btnDownload" download>다운로드</a>
				</div>
				<!-- //항목선택 -->
      </div>
    </Popup>
		<!-- //다운로드 마스터 팝업 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BookShoppingOnline',
	data() {
			return {
	      classValue: "downloadPop",
	      popTrigger: false,
        downloadCal1: '',
        downloadCal2: '',
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
