<template lang="html">
  <div>
		<div class="pageTit">
			<h2>쿠폰 등록/발급</h2>
			<span><router-link to="/mkup/payment/paymentMgt">결제</router-link><router-link to="/mkup/payment/couponMgt">쿠폰 관리</router-link><em>쿠폰 등록/발급</em></span>
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="couponMgt">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">카테고리</option>
                      <option value="">이벤트</option>
                      <option value="">대학제휴</option>
                      <option value="">복지할인</option>
                      <option value="">선생님요청</option>
                      <option value="">협력사</option>
                      <option value="">배송비</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="쿠폰번호, 쿠폰명 검색" />
                  <button type="button" class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button type="button" class="btnRefresh">초기화</button>
              </div>
            </div>
            <router-link to="/mkup/payment/couponMgt/write" class="btnAdd right">신규등록</router-link>
          </div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="90" />
                <col width="80" />
                <col width="400" />
                <col width="210" />
                <col width="80" />
                <col width="220" />
                <col width="100" />
                <col width="130" />
              </colgroup>
              <thead>
                <tr>
                  <th>카테고리</th>
                  <th>쿠폰번호</th>
                  <th>쿠폰명</th>
                  <th>할인혜택/조건</th>
                  <th>중복할인</th>
                  <th>사용기준</th>
                  <th>쿠폰발급</th>
                  <th>사용/총발급</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>이벤트</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</router-link></td>
                  <td>10%<br/>최대 1,000,000원 할인</td>
                  <td>가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr>
                  <td>대학제휴</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">이동건 해설편 배송비 쿠폰</router-link></td>
                  <td>10%<br/>최대 1,000,000원 할인</td>
                  <td>불가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr class="blue">
                  <td>배송비</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">이동건 해설편 배송비 쿠폰</router-link></td>
                  <td>2,500원</td>
                  <td>불가능</td>
                  <td>2021-01-04 ~ 2021-02-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr>
                  <td>선생님요청</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</router-link></td>
                  <td>100,000원<br/>최소 주문금액 20,000원</td>
                  <td>가능</td>
                  <td>발급 후 10일</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>협력사</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view2">LG Gram_5만원 할인쿠폰</router-link></td>
                  <td>10%<br/>최대 1,000,000원 할인</td>
                  <td>가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>난수쿠폰</td>
                  <td>
                    <a @click="PaymentCouponRandom()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <!-- 2021-09-02 사물함 case 추가 -->
                <tr>
                  <td>사물함</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">사물함 1개월 할인 쿠폰</router-link></td>
                  <td>100%<br/>최대 5,000원 할인</td>
                  <td>불가능</td>
                  <td>발급 후 30일</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <!-- //2021-09-02 사물함 case 추가 -->
                <tr class="blue">
                  <td>대학제휴</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</router-link></td>
                  <td>50,000<br/>최소 주문금액 500,000원</td>
                  <td>가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr>
                  <td>배송비</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">이동건 해설편 배송비 쿠폰</router-link></td>
                  <td>2,500원</td>
                  <td>불가능</td>
                  <td>2021-01-04 ~ 2021-02-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr>
                  <td>복지할인</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">LG Gram_5만원 할인쿠폰</router-link></td>
                  <td>10%<br/>최대 1,000,000원 할인</td>
                  <td>가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <tr>
                  <td>선생님요청</td>
                  <td>101234</td>
                  <td><router-link to="/mkup/payment/couponMgt/view">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</router-link></td>
                  <td>100,000원<br/>최소 주문금액 20,000원</td>
                  <td>불가능</td>
                  <td>2021-05-04 ~ 2021-06-15</td>
                  <td>
                    <button type="button" class="btnS line" @click="PaymentCouponOffering()">쿠폰발급</button>
                  </td>
                  <td>
                    <a @click="PaymentCouponUsing()">1/10<br/>(사용률 10%)</a>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
          <Paginate />
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
  name: 'CouponMgt',
  data() {
    return {
    }
  },
  methods: {
    PaymentCouponOffering() {
      let routeData = this.$router.resolve({name: 'PaymentCouponOffering', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponOffering', '_blank', `width=1100,height=900`);
    },
    PaymentCouponUsing() {
      let routeData = this.$router.resolve({name: 'PaymentCouponUsing', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponUsing', '_blank', `width=850,height=20000`);
    },
    PaymentCouponRandom() {
      let routeData = this.$router.resolve({name: 'PaymentCouponRandom', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtCouponRandom', '_blank', `width=850,height=20000`);
    },
    fileUpload(event) {
      this.fileName = event.target.value;
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
