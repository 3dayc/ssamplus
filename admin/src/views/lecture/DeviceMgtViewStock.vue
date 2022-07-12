<template lang="html">
	<div class="bookMgtView">
		<!-- 학습기기 입고 및 판매/출고 이력 -->
		<div class="subTit">
			<h3>학습기기 입고 및 판매/출고 이력</h3>
		</div>
		<!-- 상품분류가 노트북, 태블릿, 스마트폰일 경우 -->
		<div class="tls">
			<table>
				<colgroup>
					<col width="240"/>
					<col width="150"/>
					<col width="120"/>
					<col width="120"/>
					<col width="120"/>
					<col width="300"/>
					<col width="*"/>
				</colgroup>
				<thead>
					<tr>
						<th scope="col">일시</th>
						<th scope="col">입고처<br/>판매/출고처</th>
						<th scope="col">구분</th>
						<th scope="col">수량</th>
						<th scope="col">잔여재고</th>
						<th scope="col">주문번호</th>
						<th scope="col">비고</th>
					</tr>
				</thead>
				<tbody>
					<!--Loop-->
					<tr>
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>입고</td>
						<td>200</td>
						<td>348</td>
						<td>-</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">메모추가</button></td>
					</tr>
					<!--//Loop-->
					<tr>
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>판매</td>
						<td>-1</td>
						<td>148</td>
						<td><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td></td>
					</tr>
					<tr class="red">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>환불</td>
						<td>1</td>
						<td>149</td>
						<td><a @click="PaymentOrderOnline()">M-20210225-0000</a></td>
						<td><button class="btnS line" @click="alertTrigger02 = true">메모추가</button></td>
					</tr>
					<tr>
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>출고(기타)</td>
						<td>-1</td>
						<td>148</td>
						<td>-</td>
						<td>2021-03-10 박미진 | 이데아관 재고 부족으로 아이비관에서 이동시킴</td>
					</tr>
					<tr class="blue">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>학원</td>
						<td>판매</td>
						<td>-1</td>
						<td>관리 안 함</td>
						<td></td>
						<td></td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //상품분류가 노트북, 태블릿, 스마트폰일 경우 -->
		<!-- 상품분류가 기타일 경우 -->
		<div class="tls mt20">
			<table>
				<colgroup>
					<col width="240"/>
					<col width="150"/>
					<col width="120"/>
					<col width="120"/>
					<col width="120"/>
					<col width="300"/>
					<col width="*"/>
				</colgroup>
				<thead>
					<tr>
						<th scope="col">일시</th>
						<th scope="col">입고처<br/>판매/출고처</th>
						<th scope="col">구분</th>
						<th scope="col">수량</th>
						<th scope="col">잔여재고</th>
						<th scope="col">주문번호</th>
						<th scope="col">비고</th>
					</tr>
				</thead>
				<tbody>
					<!--Loop-->
					<tr>
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>입고</td>
						<td>200</td>
						<td>348</td>
						<td>-</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">메모추가</button></td>
					</tr>
					<!--//Loop-->
					<tr class="blue">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>아이비관</td>
						<td>판매</td>
						<td>-1</td>
						<td>59</td>
						<td><a @click="PaymentOrderDirect()">H-20210225-0000</a></td>
						<td></td>
					</tr>
					<tr class="blue">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>이데아관</td>
						<td>출고(기타)</td>
						<td>-20</td>
						<td>30</td>
						<td>-</td>
						<td><button class="btnS line" @click="alertTrigger02 = true">메모추가</button></td>
					</tr>
					<tr>
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>판매</td>
						<td>-1</td>
						<td>148</td>
						<td><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td></td>
					</tr>
					<tr class="red">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>환불</td>
						<td>1</td>
						<td>149</td>
						<td><a @click="PaymentOrderOnline()">M-20210225-0000</a></td>
						<td></td>
					</tr>
					<tr class="blue">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>온라인</td>
						<td>출고(기타)</td>
						<td>-1</td>
						<td>59</td>
						<td><a @click="PaymentOrderOnline()">P-20210225-0000</a></td>
						<td><button class="btnS line" @click="alertTrigger02 = true">메모추가</button></td>
					</tr>
					<tr class="blue">
						<td>2021-03-10 (수)  08:41:23</td>
						<td>아이비관</td>
						<td>입고</td>
						<td>30</td>
						<td>60</td>
						<td>-</td>
						<td>2021-03-10 박미진 | 이데아관 재고 부족으로 아이비관에서 이동시킴</td>
					</tr>
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<!-- //상품분류가 기타일 경우 -->
		<!-- //학습기기 입고 및 판매/출고 이력 -->

		<!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				정보를 모두 삭제합니다. <br/>실행 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">아니오</button>
        <button class="btnM green" @click="alertTrigger = false">예</button>
      </template>
    </Alert>
		<!-- 메모 팝업 -->
		<Alert v-if='alertTrigger02' @close="alertTrigger02 = false">
			<template slot="modalbody">
				<p>메모는 한 건만 추가 가능합니다.</p>
				<textarea rows="2" placeholder="메모 입력" class="mt10"></textarea>
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger02 = false">취소</button>
        <button class="btnM green" @click="alertTrigger02 = false">추가</button>
			</template>
		</Alert>
		<!-- //메모 팝업 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'DeviceMgtViewStock',
	data() {
		return {
			alertTrigger: false,
			alertTrigger02: false,
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
