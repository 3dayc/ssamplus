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
        <div class="paymentDelivery">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>주문배송</h3>
            <div class="summeryTxt">배송상품 정보를 확인할 수 있습니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls paymentCase">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem orderDate">주문/결제일시</span>
              <div class="lgRow">
                <span class="lgSubGrid ig1">
                  <span class="lgItem kind">구분</span>
                  <span class="lgItem name">주문내역</span>
                </span>
                <span class="lgSubGrid ig3">
                  <span class="lgItem deliveryNum">송장번호</span>
                  <span class="lgItem state">상태</span>
                  <span class="lgItem etc">비고</span>
                </span>
              </div>
            </div>
            <!-- //listTitle -->
            <!-- list -->
            <div class="tbody">
              <ul>
                <!-- loop -->
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (기본이론반)</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet pending">입금 대기중</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <!-- //loop -->
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iSet line">태블릿</em></span>
                      <router-link to="" class="lgItem name tL">삼성 갤럭시 20S</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliveryIng">배송중</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반)</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliverEnd">배송 완료</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반) 배송상품의 이름이 길어질 경우 이와같이 나타납니다</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet finished">결제 완료</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (기본이론반)</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliverEnd">배송 완료</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iSet line">태블릿</em></span>
                      <router-link to="" class="lgItem name tL">삼성 갤럭시 20S</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliveryIng">배송중</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반)</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet received">환불 접수</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반) 배송상품의 이름이 길어질 경우 이와같이 나타납니다</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet refundEnd">환불 완료</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iPro line">교재</em></span>
                      <router-link to="" class="lgItem name tL">키위 교육학 (기본이론반)</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliverEnd">배송 완료</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i></span>
                  <div class="lgRow">
                    <span class="lgSubGrid ig1">
                      <span class="lgItem kind"><em class="iSet line">태블릿</em></span>
                      <router-link to="" class="lgItem name tL">삼성 갤럭시 20S</router-link>
                    </span>
                    <span class="lgSubGrid ig3">
                      <span class="lgItem deliveryNum"><em>9876543210987654</em><span>배송사 : CJ 대한통운</span></span>
                      <span class="lgItem state"><em class="ipaySet deliveryIng">배송중</em></span>
                      <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <!-- //list -->
          </div>
          <!-- //반응형 목록 -->
            <div class="paging">
              <Paginate v-if="!this.mobile" />
              <div class="moreBtnWrap" v-if="this.mobile">
                <button class="mobileMore">더보기</button>
              </div>
            </div>
            <span class="hrLine"></span>
          <!-- 결제관련 안내사항 -->
          <div class="payInfo">
            <dl>
              <dt>배송안내</dt>
              <dd>배송출발: 정오(낮 12시)전에 결제완료가 되면 당일 발송되며 이후 시간의 건은 익일 발송됩니다.</dd>
              <dd>배송기간: 발송일자 기준으로 영업일 기준 1~2일 내에 수령하실 수 있습니다.<br/>
                 <span>(금요일 혹은 공휴일 전일 낮 12시 이후 결제된 내역은 월요일 혹은 공휴일 다음날에 발송됩니다)</span>
               </dd>
              <dd>택배사의 사정으로 인해 배송이 늦어지는 경우가 있을 수 있습니다.</dd>
            </dl>
            <dl>
              <dt>은행송금(무통장입금) 안내</dt>
              <dd>송금 금액과 결제 금액이 일치하지 않는 경우에는 승인 처리되지 않습니다.</dd>
              <dd>은행 송금은 입금 계좌를 문자 메세지로 안내하며 지정된 기간 내에 지정 계좌로 입금되지 않으면 결제완료 확인이 되지 않습니다.</dd>
            </dl>
            <dl>
              <dt>수강확인증 안내</dt>
              <dd>수강확인증은 수강 시작일을 기준으로 8일 후부터 출력이 가능합니다.</dd>
            </dl>
            <dl>
              <dt>도서소득공제</dt>
              <dd>도서소득공제는 결제완료 된 후에는 신청이 불가능합니다.</dd>
              <dd>도서소득공제는 현금영수증, 세금계산서와 중복 발행할 수 없습니다.</dd>
              <dd>법인 카드로 결제하거나 현금구매 후 현금영수증을 사업자 증빙용으로 신청하는 경우에는 도서소득공제가 적용이 되지 않습니다.</dd>
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

    <!-- 배송추적 Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="deliveryTracking">
      <template slot="modalheader">
        <div></div>
      </template>
      <template slot="modalbody">
        <PaymentDeliveryTracking />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL" @click="popupTrigger = false">닫기</button>
        </div>
      </template>
    </Popup>
    <!-- 배송추적 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PaymentDeliveryTracking from '@/views/mypage/PaymentDeliveryTracking.vue';

export default {
  mixins: [Mixin],
  name: 'PaymentOrderDelivery',
  components: {
    PaymentDeliveryTracking
  },
  data() {
    return {
      popupTrigger: false
    }
  },
  mounted() {
  },
}
</script>
