<template lang="html">
  <div>
      <div class="popSearch">
        <!-- <label>쿠폰등록</label> -->
        <!-- <em v-if="this.mobile">쿠폰번호를 입력한 후 <등록>버튼을 클릭하여 쿠폰을 추가한 후, 사용해 주세요.</em>
        <span class="ipBtn">
          <input type="text" placeholder="쿠폰번호를 입력한 후 <등록>버튼을 클릭하여 쿠폰을 추가한 후, 사용해 주세요."  v-if="!this.mobile" />
          <input type="text" v-else-if="this.mobile" />
          <button class="btnS">등록</button>
        </span> -->
      </div>
      <!-- //검색 -->
      <!-- 검색결과 -->
      <!-- <strong class="couponAppTit">적용 가능한 쿠폰 <em>3</em>장</strong> -->
      <div class="resTls lineCase">
        <!-- listTitle -->
        <div class="thead listGrid">
          <div class="lgItem itemGroup ig1">
            <span class="lgSubGrid">
              <span class="lgItem item0">선택</span>
              <span class="lgItem item1">쿠폰명/쿠폰번호</span>
            </span>
          </div>
          <div class="lgItem item3">사용조건</div>
          <div class="lgItem itemGroup ig2">
            <span class="lgSubGrid">
              <span class="lgItem item4">할인액(율)</span>
              <span class="lgItem item5">유효기간</span>
            </span>
          </div>
        </div>
        <!-- //listTitle -->
        <!-- //list -->
        <div class="tbody">
          <ul>
            <!--Loop-->
            <li class="listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">
                    <span class="radioSet noLabel">
                      <input type="radio" name="couponSelect" id="cps1" />
                      <label for="cps1"><i></i></label>
                    </span>
                  </span>
                  <span class="lgItem item1"><strong>N수생 재도전 이벤트</strong><span>(210223000)</span></span>
                </span>
              </div>
              <div class="lgItem item3">단과 강좌 구매 시 사용가능</div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item4">1,000원</span>
                  <span class="lgItem item5"><em class="mTit">유효기간</em>2021-01-01~2021-02-02</span>
                </span>
              </div>
            </li>
            <!--//Loop-->
            <li class="listGrid expiry"> <!-- 선택못할 경우 -->
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">
                    <span class="radioSet noLabel">
                      <input type="radio" name="couponSelect" id="cps2" disabled />
                      <label for="cps2"><i></i></label>
                    </span>
                  </span>
                  <span class="lgItem item1"><strong>배송비 무료</strong><span>(210223000)</span></span>
                </span>
              </div>
              <div class="lgItem item3">패키지 강좌 구매시 사용가능</div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item4">24,000원</span>
                  <span class="lgItem item5"><em class="mTit">유효기간</em>2021-01-01~2021-02-02</span>
                </span>
              </div>
            </li>
            <li class="listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">
                    <span class="radioSet noLabel">
                      <input type="radio" name="couponSelect" id="cps3" />
                      <label for="cps3"><i></i></label>
                    </span>
                  </span>
                  <span class="lgItem item1"><strong>교재할인</strong><span>(210223000)</span></span>
                </span>
              </div>
              <div class="lgItem item3">단과 강좌 구매시 사용가능</div>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item4">20,000원</span>
                  <span class="lgItem item5"><em class="mTit">유효기간</em>2021-01-01~2021-02-02</span>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <!-- //list -->
      </div>
      <p>※ 한번 사용된 쿠폰은 주문을 취소할 경우 재발행 되지 않습니다.</p>
      <!-- //검색결과 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentOrderCoupon',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
