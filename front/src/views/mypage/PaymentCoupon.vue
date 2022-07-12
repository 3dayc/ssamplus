<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="paymentCoupon">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>쿠폰</h3>
            <div class="summeryTxt single">현재 사용할 수 있는 쿠폰정보를 확인할 수 있습니다.</div>
            <span class="right-po">
              <button class="btnS" @click="popupTrigger = true">쿠폰등록</button>
            </span>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls">
            <!-- listTitle -->
            <div class="thead listGrid">
              <div class="lgItem itemGroup ig1">
                <span class="lgSubGrid">
                  <span class="lgItem item0">쿠폰번호</span>
                  <span class="lgItem item1">적용대상</span>
                </span>
              </div>
              <span class="lgItem item2">쿠폰</span>
              <div class="lgItem itemGroup ig2">
                <span class="lgSubGrid">
                  <span class="lgItem item3">유효기간</span>
                  <span class="lgItem item4">적용상품</span>
                </span>
              </div>
            </div>
            <!-- //listTitle -->
            <!-- list -->
            <div class="tbody">
              <ul>
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0">101839</span>
                      <span class="lgItem item1"><em class="iPro line">교재도서</em></span>
                    </span>
                  </div>
                  <span class="lgItem item2">
                    <strong>[쌤팩 프리미엄 전용] 배송비 무료쿠폰(3)</strong>교재 결제 합계가 15,000원 이상일 경우 배송비 무료
                  </span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span>잔여일수 : <strong>222일</strong></span><span>유효기간 : <strong>2021-10-31까지</strong></span>
                      </span>
                      <span class="lgItem item4">-</span>
                    </span>
                  </div>
                </li>
                <!-- loop -->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0">101838</span>
                      <span class="lgItem item1">
                        <em class="iPro">패키지</em>
                        <em class="iPro">단과</em>
                      </span>
                    </span>
                  </div>
                  <span class="lgItem item2">
                    <strong>[교육학] 김현 선생님 단과 10% 할인쿠폰</strong>쿠폰에 대한 설명을 표시함
                  </span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span>잔여일수 : <strong>222일</strong></span><span>유효기간 : <strong>2021-10-31까지</strong></span>
                      </span>
                      <span class="lgItem item4"><button class="btnCouponLec" :class="{on:toggleTrigger01===true}" @click="toggleTrigger01 = !toggleTrigger01">적용상품보기</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid couponLec" v-if="toggleTrigger01 == true">
                  <div class="lgItem">
                      <ul>
                        <li>2022 키위주스 총정리 강좌</li>
                        <li>키위 기출분석반</li>
                        <li>골드키위반(심화반)</li>
                        <li>그린키위반(한국교육사,서양교육사)</li>
                        <li>[스타트업] 키위 교육학 입문 특강</li>
                      </ul>
                  </div>
                </li>
                <!-- //loop -->
                <li class="listGrid">
                  <div class="lgItem itemGroup ig1">
                    <span class="lgSubGrid">
                      <span class="lgItem item0">101837</span>
                      <span class="lgItem item1"><em class="iPro line">교재도서</em></span>
                    </span>
                  </div>
                  <span class="lgItem item2">
                    <strong>[쌤팩 프리미엄 전용] 배송비 무료쿠폰(1)</strong>교재 결제 합계가 15,000원 이상일 경우 배송비 무료
                  </span>
                  <div class="lgItem itemGroup ig2">
                    <span class="lgSubGrid">
                      <span class="lgItem item3">
                        <span>잔여일수 : <strong>222일</strong></span><span>유효기간 : <strong>2021-10-31까지</strong></span>
                      </span>
                      <span class="lgItem item4">-</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
          <!-- 결제관련 안내사항 -->
          <div class="payInfo">
            <dl>
              <dt>쿠폰 사용 안내</dt>
              <dd>쿠폰은 적용대상이 제한되어 있습니다.</dd>
              <dd>한 상품(강좌, 교재)당 쿠폰 1매만 사용이 가능합니다.</dd>
              <dd>주문 취소 및 환불 시에 유효기간이 남은 쿠폰만 환급됩니다.</dd>
              <dd>쿠폰은 수령 회원 본인만 사용이 가능하며 타인에게 양도할 수 없습니다.</dd>
              <dd>쿠폰 별로 유효기간 및 적용대상이 다르므로 사용시에 유의해 주세요.</dd>
            </dl>
          </div>
          <!-- //결제관련 안내사항 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 쿠폰 등록 Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="couponAddPop">
      <template slot="modalheader">
        <div>
          <h1>쿠폰 등록</h1>
          <button @click="popupTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <!-- 검색 -->
        <div class="popSearch">
          <span class="ipBtn">
            <input type="text" />
            <button class="btnS" @click="popupTrigger = false, alertTrigger = true">등록</button>
          </span>
        </div>
        <!-- //검색 -->
        <p class="fRed">유효하지 않은 쿠폰입니다. 쿠폰번호와 유효기간을 다시 한번 확인해 주세요.</p>
      </template>
    </Popup>
    <!-- //쿠폰 등록 Popup -->
    <!-- 쿠폰 등록 완료 Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>쿠폰을 정상적으로 등록하였습니다.</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM solo" @click="alertTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //쿠폰 등록 완료 Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCoupon',
  components: {
  },
  data() {
    return {
      popupTrigger: false,
      alertTrigger: false,
      toggleTrigger01:false,
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
