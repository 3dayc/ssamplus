<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강생 판매</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><router-link to="/mkup/school/userSale">수강생 판매</router-link><router-link to="/mkup/school/userSale/locker">사물함 신청</router-link><em>결제</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="userSaleLockerPay">
					<!-- 강좌/교/상품 상단 -->
					<div class="saleTop">
						<div class="left">
							<div class="subTit">
								<h3>361154  |  jimin0123  |  김지민</h3>
							</div>
						</div>
						<span class="right">
							<button class="btnM line" @click="popupTrigger = true">보유 쿠폰 적용</button>
						</span>
					</div>
					<!-- //강좌/교/상품 상단 -->
					<!--사물함 -->
					<div class="saleItem">
						<div class="saleItemInfo">
							<span class="left">
								<strong>사물함</strong>
							</span>
							<span class="right">
								<span class="total">TOTAL
									<span class="price">
										<span class="dcPlus">
											<strong>10,000</strong>원
											<em class="dc">5,000<b>원</b></em>
										</span>
									</span>
								</span>
		            <button class="btnDelete">삭제</button>
							</span>
						</div>
						<div class="tls w900">
							<table>
								<colgroup>
									<col width="100"/>
									<col width="200"/>
									<col width="*"/>
									<col width="150"/>
									<col width="100"/>
									<col width="80"/>
									<col width="100"/>
								</colgroup>
								<thead>
									<tr>
										<th>구분</th>
										<th>사물함 위치</th>
										<th>신청기간</th>
										<th>정가/판매가</th>
										<th colspan="2">추가할인</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>사물함</td>
										<td>4층 A구역  |  16번</td>
										<td>2021-05-15 ~ 2021-05-31</td>
										<td>
											<span class="price">
												<span class="origin"><del><strong>5,000</strong>원</del></span>
												<span class="dcPlus">
													<strong>0</strong>원
													<em class="dc">100<b>%</b></em>
												</span>
											</span>
										</td>
										<td><span class="unit w70"><input type="text"><em>%</em></span></td>
										<td class="tR">원</td>
										<td><button class="btnDelete">삭제</button></td>
									</tr>
									<tr>
										<td>사물함</td>
										<td>4층 A구역  |  16번</td>
										<td>2021-05-15 ~ 2021-05-31</td>
										<td>5,000원</td>
										<td></td>
										<td></td>
										<td><button class="btnDelete">삭제</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- //사물함 -->
					<div class="payBox">
						<div class="left">
							<div class="subTit">
								<h3>결제</h3>
							</div>
							<div class="tvs">
								<table>
									<colgroup>
										<col width="160">
										<col width="*">
									</colgroup>
									<tbody>
										<tr>
											<th>결제방법 <sup>필수</sup></th>
											<td>
												<span class="radioSet">
													<input type="radio" name="payway" />
													<label for=""><i></i>학원카드</label>
												</span>
												<span class="radioSet">
													<input type="radio" name="payway" />
													<label for=""><i></i>학원현금</label>
												</span>
												<span class="checkSet">
													<input type="checkbox"/>
													<label for=""><i></i>영수증 출력</label>
												</span>
												<span class="checkSet">
													<input type="checkbox"/>
													<label for=""><i></i>교재 소득공제</label>
												</span>
											</td>
										</tr>
										<tr>
											<th>단말기번호</th>
											<td><input type="text" class="wHalf" value="8830050406"></td>
										</tr>
										<tr>
											<th>납부방식(할부)</th>
											<td>
												<span class="selectSet">
						              <select name="" id="">
						                <option value="" selected>일시불</option>
						                <option value="">1개월</option>
						                <option value="">2개월</option>
						                <option value="">3개월</option>
						                <option value="">4개월</option>
						                <option value="">5개월</option>
						                <option value="">6개월</option>
						                <option value="">7개월</option>
						                <option value="">8개월</option>
						                <option value="">9개월</option>
						                <option value="">10개월</option>
						                <option value="">11개월</option>
						                <option value="">12개월</option>
						              </select>
						            </span>
											</td>
										</tr>
										<tr>
											<th>비고</th>
											<td><textarea rows="3"></textarea></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="bill">
							<strong>결제 금액</strong>
							<div class="billDetail">
								<dl>
									<dt>총 상품금액</dt>
									<dd>10,000원</dd>
								</dl>
								<dl>
									<dt>할인금액</dt>
									<dd class="fBlue">0원</dd>
								</dl>
								<dl>
									<dt>추가할인 & 쿠폰할인</dt>
									<dd class="fRed">-5,000원</dd>
								</dl>
								<dl>
									<dt>배송비</dt>
									<dd>0원</dd>
								</dl>
								<dl class="total">
									<dt>합계</dt>
									<dd>5,000원</dd>
								</dl>
							</div>
							<div class="btnArea">
								<button class="btnL red">결제하기</button>
								<button class="btnL gray">취소</button>
							</div>
						</div>
					</div>
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
		<Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
	    <div slot="modalheader" class="tL">
	      <h1>쿠폰 적용</h1>
	      <span>* 결제 대기 항목에 회원 보유 쿠폰을 적용할 수 있습니다.</span>
	    </div>
	    <div slot="modalbody">
				<div class="choiceStyle">
					<!-- 보유 쿠폰 -->
					<div class="chSearch">
			    	<div class="subTit">
			    		<h3>보유 쿠폰</h3>
							<span class="right"><em>361154  |  jimin0123  |  김지민</em>님의 정보입니다.</span>
			    	</div>
						<!-- 쿠폰 목록 -->
						<div class="chListArea">
							<div class="tls subBrown">
								<table>
									<colgroup>
										<col width="80">
										<col width="120">
										<col>
										<col width="200">
										<col width="100">
										<col width="200">
									</colgroup>
									<thead>
										<tr>
											<th scope="col"></th>
											<th scope="col">쿠폰번호</th>
											<th scope="col">쿠폰명</th>
											<th scope="col">할인혜택 / 조건</th>
											<th scope="col">중복할인</th>
											<th scope="col">발행기간</th>
										</tr>
									</thead>
									<tbody>
										<!--Loop-->
										<tr>
											<td>
												<span class="radioSet noLabel">
						              <input type="radio" name="radio1" checked/>
						              <label for=""><i></i></label>
						            </span>
											</td>
											<td>101234</td>
											<td>사물함 1개월 할인 쿠폰</td>
											<td>100%<br/>최대 5,000원 할인</td>
											<td>불가능</td>
											<td>2021-05-04 ~ 2021-06-15</td>
										</tr>
										<!--//Loop-->
										<!-- 데이터 없을 경우 -->
										<tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
										<!-- //데이터 없을 경우 -->
									</tbody>
								</table>
							</div>
						</div>
						<!-- //쿠폰 목록 -->
					</div>
					<!-- //보유 쿠폰 -->
					<!-- 적용 가능 대상 -->
					<div class="chView">
						<div class="subTit">
							<h3>적용 가능 대상</h3>
						</div>
						<div class="tls subGreen">
							<table>
								<colgroup>
									<col width="80">
									<col width="120">
									<col>
									<col width="340">
									<col width="140">
								</colgroup>
								<thead>
									<tr>
										<th></th>
										<th>구분</th>
										<th>사물함 위치</th>
										<th>신청기간</th>
										<th>금액</th>
									</tr>
								</thead>
								<tbody>
									<!--Loop-->
									<tr>
										<td>
											<span class="radioSet noLabel">
												<input type="radio" name="radio2" checked/>
												<label for=""><i></i></label>
											</span>
										</td>
										<td>사물함</td>
										<td>4층 A구역  |  16번</td>
										<td>2021-05-15 ~ 2021-05-31</td>
										<td>5,000원</td>
									</tr>
									<!--//Loop-->
									<tr>
										<td>
											<span class="radioSet noLabel">
												<input type="radio" name="radio2" />
												<label for=""><i></i></label>
											</span>
										</td>
										<td>사물함</td>
										<td>4층 A구역  |  16번</td>
										<td>2021-05-15 ~ 2021-05-31</td>
										<td>5,000원</td>
									</tr>
									<!-- 데이터 없을 경우 -->
									<tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
									<!-- //데이터 없을 경우 -->
								</tbody>
							</table>
						</div>
						<div class="grayBgMsg mt10">적용 가능한 결제 대기 항목이 없습니다.</div>
					</div>
					<!-- //적용 가능 대상 -->
				</div>
	    </div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM line" @click="popupTrigger = false">취소</button>
				<button class="btnM" @click="popupTrigger = false">쿠폰 적용</button>
			</div>
	  </Popup>
		<Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue02">
      <h1 slot="modalheader" class="tC">현금영수증 발행요청</h1>
      <div slot="modalbody">
				<div class="subTit">
					<h3>현금영수증 발행정보</h3>
				</div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="130"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>상품명 <sup>필수</sup></th>
                <td><input type="text" value="희소학원강좌"/></td>
              </tr>
              <tr>
                <th>결제금액 <sup>필수</sup></th>
                <td>
                  <input type="text" value="560,000"/>
                  <p class="infoMsg mt5 fGreen">* 현금결제 총 금액 = 공급가 + 부가세 + 봉사료</p>
                </td>
              </tr>
              <tr>
                <th>공급가액 <sup>필수</sup></th>
                <td><input type="text" value="560,000"/></td>
              </tr>
              <tr>
                <th>구매자명 <sup>필수</sup></th>
                <td><input type="text" value="김지민"/></td>
              </tr>
              <tr>
                <th>E-mail <sup>필수</sup></th>
                <td><input type="text" value="jimin1234@naver.com"/></td>
              </tr>
              <tr>
                <th>휴대폰번호 <sup>필수</sup></th>
                <td><input type="text" value="01012345678"/></td>
              </tr>
              <tr>
                <th>발행용도 <sup>필수</sup></th>
                <td>
                  <span class="radioSet">
                    <input type="radio" name="purpose" id="purpose1"/>
                    <label for="purpose1"><i></i>소득공제용</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="purpose" id="purpose2"/>
                    <label for="purpose2"><i></i>지출증빙용</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>현금영수증 발행번호 <sup>필수</sup></th>
                <td>
                  <input type="text" value="01012345678"/>
                  <p class="infoMsg mt5 fGreen">* ‘-’ 뺀 숫자만 입력하세요</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="infoMsg mt10 fGray">※ e-mail과 휴대폰번호를 입력 받는 것은 고객님의 결제성공 내역을 e-mail 또는 sms로 알려 드리기 위함이오니 반드시 기입하시기 바랍니다<br/><br/>※ 소득공제용 (개인소득공제) – 주민등록번호와 휴대폰번호로 발급 가능<br/>※ 지출증빙용 (개인사업자) – 주민등록번호, 휴대폰번호, 사업자등록번호로 발급 가능<br/>※ 자진발급 번호(국세청) – 0100001234</p>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM line wAuto" @click="popupTrigger02 = false">현금영수증 자진발급</button>
        <button class="btnM green wAuto" @click="popupTrigger02 = false">현금영수증 발행</button>
      </div>
    </Popup>
		<Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
				학원현금 결제가 완료되었습니다.<br/>현금영수증을 발행 하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="[popupTrigger02 = true, alertTrigger = false]">발행</button>
      </template>
    </Alert>
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'UserSaleProductPay',
	data() {
		return {
			popupTrigger: false,
			popupTrigger02: false,
			alertTrigger: false,
			classValue: 'couponPop',
      classValue02: "receiptPop",
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
