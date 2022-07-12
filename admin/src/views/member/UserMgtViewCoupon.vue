<template lang="html">
	<div>
		<div class="subTit">
			<h3>쿠폰내역</h3>
			<span class="right"><em>361145 / 김지민 / jimin0123</em> 님의 정보입니다.</span>
		</div>
		<div class="tls">
			<table>
				<colgroup>
					<col width="100"/>
					<col width="90"/>
					<col width="350"/>
					<col width="200"/>
					<col width="90"/>
					<col width="150"/>
					<col width="100"/>
					<col width="90"/>
				</colgroup>
				<thead>
					<tr>
						<th>카테고리</th>
						<th>쿠폰번호</th>
						<th>쿠폰명</th>
						<th>할인혜택 / 조건</th>
						<th>중복할인</th>
						<th>발행기간</th>
						<th>사용여부</th>
						<th>쿠폰정보</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>이벤트</td>
						<td>101234</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td>10%<br/>최대 1,000,000원 할인</td>
						<td>가능</td>
						<td>2021-02-04 ~ 2021-03-15</td>
						<td>사용완료<br/>2021-02-05</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>대학제휴</td>
						<td>101234</td>
						<td>LG Gram_5만원 할인쿠폰</td>
						<td>10%<br/>최대 1,000,000원 할인</td>
						<td>불가능</td>
						<td>2021-02-04 ~ 2021-03-15</td>
						<td>사용완료<br/>2021-02-20</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>배송비</td>
						<td>101234</td>
						<td>이동건 해설편 배송비 쿠폰</td>
						<td>2,500원</td>
						<td>불가능</td>
						<td>2021-02-15 ~ 2021-03-15</td>
						<td>사용완료<br/>2021-02-20</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>선생님요청</td>
						<td>101234</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td>100,000원<br/>최소 주문금액 20,000원</td>
						<td>가능</td>
						<td>2021-01-04 ~ 2021-02-15</td>
						<td>기간만료</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>협력사</td>
						<td>101234</td>
						<td>LG Gram_5만원 할인쿠폰</td>
						<td>10%<br/>최대 1,000,000원 할인</td>
						<td>가능</td>
						<td>2021-02-04 ~ 2021-03-15</td>
						<td>미사용</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<!-- 2021-08-23 내용 추가 -->
					<tr>
						<td>사물함</td>
						<td>101234</td>
						<td>사물함 1개월 할인 쿠폰</td>
						<td>100%<br/>최대 5,000원 할인</td>
						<td>불가능</td>
						<td>2021-02-04 (발급 후 10일)</td>
						<td>미사용</td>
						<td><button class="btnT line" @click="popTrigger = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>이벤트</td>
						<td>CF71317</td>
						<td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
						<td>10%<br/>최대 1,000,000원 할인</td>
						<td>가능</td>
						<td>2021-02-04 ~ 2021-03-15 </td>
						<td>사용완료<br/>2021-02-20</td>
						<td><button class="btnT line" @click="popTrigger02 = true">쿠폰정보</button></td>
					</tr>
					<tr>
						<td>대학제휴</td>
						<td>CD0AFBF</td>
						<td>LG Gram_5만원 할인쿠폰</td>
						<td>10%<br/>최대 1,000,000원 할인</td>
						<td>불가능</td>
						<td>2021-02-04 (발급 후 10일)</td>
						<td>기간만료</td>
						<td><button class="btnT line" @click="popTrigger02 = true">쿠폰정보</button></td>
					</tr>
					<!-- //2021-08-23 내용 추가 -->
					<!-- 데이터 없을 경우 -->
					<tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
					<!-- //데이터 없을 경우 -->
				</tbody>
			</table>
		</div>
		<div class="btnArea">
			<button class="btnM right" @click="MemberCouponGive()">신규 쿠폰 발행</button>
		</div>
		<!-- 쿠폰정보 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>쿠폰정보</h1>
        <span>* 상세 쿠폰정보</span>
      </div>
      <div slot="modalbody">
				<!-- 쿠폰 상세정보 -->
				<div class="subTit"><h3>쿠폰 상세정보</h3></div>
	      <div class="tvs">
	        <table>
	          <colgroup>
	            <col width="100"/>
	            <col width="400"/>
	            <col width="100"/>
	            <col width="400"/>
	          </colgroup>
	          <tbody>
							<tr>
								<th>쿠폰명</th>
								<td colspan="3" class="tL">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
							</tr>
	            <tr>
	              <th>카테고리</th>
	              <td>이벤트</td>
	              <th>쿠폰번호</th>
	              <td>101234</td>
	            </tr>
	            <tr>
	              <th>할인혜택</th>
	              <td>100,000원</br>최소 주문금액 1,000,000원</td>
	              <th>중복할인</th>
	              <td>가능</td>
	            </tr>
	            <tr>
	              <th>발행기간</th>
	              <td colspan="3" class="tL">2021-02-04 ~ 2021-03-15 / 2021-02-04 (발급 후 10일)</td>
	            </tr>
	            <tr>
	              <th>쿠폰설명</th>
	              <td colspan="3" class="tL">김현 선생님 1월 이벤트용 할인 쿠폰</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
				<!-- //쿠폰 상세정보 -->
				<!-- 적용상품 -->
				<div class="subTit"><h3>적용상품</h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="90"/>
              <col width="*"/>
              <col width="120"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>대상</th>
                <th>할인금액</th>
                <th>최소주문금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>강좌</td>
								<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
								<td>20,000</td>
								<td>180,000</td>
              </tr>
              <tr>
                <td>상품</td>
								<td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
								<td>20,000</td>
								<td>180,000</td>
              </tr>
              <tr>
                <td>교재</td>
								<td class="tL">류지원 영어교육학 기출문제집</td>
								<td>-</td>
								<td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
				<!-- //적용상품 -->
				<!-- 제외상품 -->
				<div class="subTit"><h3>제외상품</h3></div>
				<div class="tls w60p">
					<table>
						<colgroup>
							<col width="90"/>
							<col width="*"/>
						</colgroup>
						<thead>
							<tr>
								<th>구분</th>
								<th>대상</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>강좌</td>
								<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
							</tr>
							<tr>
								<td>상품</td>
								<td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
							</tr>
							<tr>
								<td>교재</td>
								<td class="tL">류지원 영어교육학 기출문제집</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //제외상품 -->
      </div>
    </Popup>
		<!-- //쿠폰정보 팝업 -->
		<!-- 2021-08-23 난수쿠폰 정보 팝업 -->
    <Popup v-if='popTrigger02' @close="popTrigger02 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>난수쿠폰 정보</h1>
        <span>* 상세 쿠폰정보</span>
      </div>
      <div slot="modalbody">
				<!-- 쿠폰 상세정보 -->
				<div class="subTit"><h3>난수쿠폰 상세정보</h3></div>
	      <div class="tvs">
	        <table>
	          <colgroup>
	            <col width="100"/>
	            <col width="400"/>
	            <col width="100"/>
	            <col width="400"/>
	          </colgroup>
	          <tbody>
							<tr>
								<th>쿠폰명</th>
								<td colspan="3" class="tL">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
							</tr>
	            <tr>
	              <th>카테고리</th>
	              <td>이벤트</td>
	              <th>쿠폰번호</th>
	              <td>101234</td>
	            </tr>
							<tr>
	              <th>할인혜택</th>
	              <td>100,000원</br>최소 주문금액 1,000,000원</td>
	              <th>중복할인</th>
	              <td>가능</td>
	            </tr>
	            <tr>
	              <th>발행기간</th>
	              <td colspan="3" class="tL">2021-02-04 ~ 2021-03-15 / 발급 후 10 일</td>
	            </tr>
	            <tr>
	              <th>쿠폰설명</th>
	              <td colspan="3" class="tL">김현 선생님 1월 이벤트용 할인 쿠폰</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
				<!-- //쿠폰 상세정보 -->
				<!-- 적용상품 -->
				<div class="subTit"><h3>적용상품</h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="90"/>
              <col width="*"/>
              <col width="120"/>
              <col width="120"/>
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>대상</th>
                <th>할인금액</th>
                <th>최소주문금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>강좌</td>
								<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
								<td>20,000</td>
								<td>180,000</td>
              </tr>
              <tr>
                <td>상품</td>
								<td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
								<td>20,000</td>
								<td>180,000</td>
              </tr>
              <tr>
                <td>교재</td>
								<td class="tL">류지원 영어교육학 기출문제집</td>
								<td>-</td>
								<td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
				<!-- //적용상품 -->
				<!-- 제외상품 -->
				<div class="subTit"><h3>제외상품</h3></div>
				<div class="tls">
					<table>
						<colgroup>
							<col width="90"/>
							<col width="*"/>
						</colgroup>
						<thead>
							<tr>
								<th>구분</th>
								<th>대상</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>강좌</td>
								<td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
							</tr>
							<tr>
								<td>상품</td>
								<td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
							</tr>
							<tr>
								<td>교재</td>
								<td class="tL">류지원 영어교육학 기출문제집</td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //제외상품 -->
      </div>
    </Popup>
		<!-- //2021-08-23 난수쿠폰정보 팝업 -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserMgtViewCoupon',
	data() {
			return {
	      classValue: "couponInfoPop",
	      popTrigger: false,
	      popTrigger02: false,
	      closeBtn: false,
			}
	},
	methods: {
    MemberCouponGive() {
      let routeData = this.$router.resolve({name: 'MemberCouponGive', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrCouponGive', '_blank', `width=1100,height=900`);
    },
	},
	components: {
	},
}
</script>
