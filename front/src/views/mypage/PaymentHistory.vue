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
        <div class="paymentHistory">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>결제내역</h3>
            <div class="summeryTxt">내가 결제한 결제내역을 확인할 수 있습니다.</div>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 반응형 목록 -->
          <div class="resTls paymentCase">
            <!-- listTitle -->
            <div class="thead listGrid">
              <span class="lgItem orderDate">주문/결제일시<br/>(주문번호)</span>
              <div class="lgItem itemGroup">
                <div class="lgRow">
                  <div class="lgSubGrid ig1">
                    <span class="lgItem kind">구분</span>
                    <span class="lgItem name">주문내역</span>
                  </div>
                  <div class="lgSubGrid ig2">
                    <span class="lgItem payPrice">결제금액</span>
                    <span class="lgItem payKind">결제방법</span>
                    <span class="lgItem state">상태</span>
                    <span class="lgItem etc">비고</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- //listTitle -->
            <!-- list -->
            <div class="tbody">
              <ul>
                <!-- loop -->
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro">패키지</em></span>
                        <router-link to="" class="lgItem name tL">연간 쌤팩(베이직)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">1,789,000원</span>
                        <span class="lgItem payKind">은행송금</span>
                        <span class="lgItem state"><em class="ipaySet pending">입금 대기중</em></span>
                        <span class="lgItem etc"><button class="btnOrderCancel" @click="popupTrigger2 = true">주문취소</button></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                    <!---->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">키위 교육학 (기본이론반)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">-</span>
                        <span class="lgItem payKind">-</span>
                        <span class="lgItem state"><em class="ipaySet finished">결제 완료</em></span>
                        <span class="lgItem etc"></span>
                      </span>
                    </div>
                    <!--//-->
                  </div>
                </li>
                <!-- //loop -->
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro">패키지</em></span>
                        <router-link to="" class="lgItem name tL">3~11월 연간 쌤팩(프리미엄)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">2,568,000원</span>
                        <span class="lgItem payKind">카드결제</span>
                        <span class="lgItem state"><em class="ipaySet deliveryIng">배송중</em></span>
                        <span class="lgItem etc"><button class="btnDeliveryCancel" @click="popupTrigger = true">배송추적</button></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                    <!---->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">학습기기</em></span>
                        <router-link to="" class="lgItem name tL">삼성 갤럭시 20S</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">-</span>
                        <span class="lgItem payKind">-</span>
                        <span class="lgItem state"><em class="ipaySet deliverEnd">배송 완료</em></span>
                        <span class="lgItem etc"></span>
                      </span>
                    </div>
                    <!--//-->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro">단과</em></span>
                        <router-link to="" class="lgItem name tL">Map 구조도(내용학)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">655,000원</span>
                        <span class="lgItem payKind">학원/현금</span>
                        <span class="lgItem state"><em class="ipaySet selfPickup">직접 수령</em></span>
                        <span class="lgItem etc"><button class="btnPrintCancel" @click='lecCompletion()'>수강확인증</button></span>
                      </span>
                    </div>
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">569,000원</span>
                        <span class="lgItem payKind">키오스크</span>
                        <span class="lgItem state"><em class="ipaySet received">취소 접수</em></span>
                        <span class="lgItem etc"></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro">단과</em></span>
                        <router-link to="" class="lgItem name tL">Map 구조도(내용학) 입니다 단과명이 길어질 경우입니다 길어질 경우에는 이와 같이 표현됩니다</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">655,000원</span>
                        <span class="lgItem payKind">학원/현금</span>
                        <span class="lgItem state"><em class="ipaySet selfPickup">직접 수령</em></span>
                        <span class="lgItem etc"><button class="btnPrintCancel" @click='lecCompletion()'>수강확인증</button></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">키위 교육학 (문제풀이반) 키위 교육학 (문제풀이반)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">569,000원</span>
                        <span class="lgItem payKind">키오스크</span>
                        <span class="lgItem state"><em class="ipaySet cancelEnd">취소 완료</em></span>
                        <span class="lgItem etc"></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">학습기기</em></span>
                        <router-link to="" class="lgItem name tL">삼성 갤럭시 노트10.1</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">1,568,000원</span>
                        <span class="lgItem payKind">카드결제</span>
                        <span class="lgItem state"><em class="ipaySet received">환불 접수</em></span>
                        <span class="lgItem etc tL">환불접수 : 2021-03-25 <br/>(3~5영업일 소요됨)</span>
                      </span>
                      <span class="mCase">환불접수 : 2021-03-25 (3~5영업일 소요됨)</span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <!---->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">아이패드 프로</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">-</span>
                        <span class="lgItem payKind">-</span>
                        <span class="lgItem state"><em class="ipaySet refundEnd">환불 완료</em></span>
                        <span class="lgItem etc tL">환불완료 : 2021-03-28 <br/>환불금액 : 2,495,000원</span>
                      </span>
                      <span class="mCase">환불완료 : 2021-03-28 환불금액 : 2,495,000원</span>
                    </div>
                    <!--//-->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro">패키지</em></span>
                        <router-link to="" class="lgItem name tL">연간 쌤팩(베이직)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">1,789,000원</span>
                        <span class="lgItem payKind">은행송금</span>
                        <span class="lgItem state"><em class="ipaySet pending">입금 대기중</em></span>
                        <span class="lgItem etc"><button class="btnOrderCancel" @click="popupTrigger2 = true">주문취소</button></span>
                      </span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                    <!---->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">키위 교육학 (기본이론반)</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">-</span>
                        <span class="lgItem payKind">-</span>
                        <span class="lgItem state"><em class="ipaySet finished">결제 완료</em></span>
                        <span class="lgItem etc"></span>
                      </span>
                    </div>
                    <!--//-->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">학습기기</em></span>
                        <router-link to="" class="lgItem name tL">삼성 갤럭시 노트10.1</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">1,568,000원</span>
                        <span class="lgItem payKind">카드결제</span>
                        <span class="lgItem state"><em class="ipaySet received">환불 접수</em></span>
                        <span class="lgItem etc tL">환불접수 : 2021-03-25 <br/>(3~5영업일 소요됨)</span>
                      </span>
                      <span class="mCase">환불접수 : 2021-03-25 (3~5영업일 소요됨)</span>
                    </div>
                    <!-- //loop : 주민번호 1개당 결제항목 -->
                  </div>
                </li>
                <li class="listGrid">
                  <span class="lgItem orderDate">2021-03-31 <i>15:56:03</i><span>(<em>주문번호</em> : 9999999999)</span></span>
                  <div class="lgItem itemGroup">
                    <!-- loop : 주민번호 1개당 결제항목 -->
                    <!---->
                    <div class="lgRow">
                      <span class="lgSubGrid ig1">
                        <span class="lgItem kind"><em class="iPro line">교재도서</em></span>
                        <router-link to="" class="lgItem name tL">아이패드 프로</router-link>
                      </span>
                      <span class="lgSubGrid ig2">
                        <span class="lgItem payPrice tR">-</span>
                        <span class="lgItem payKind">-</span>
                        <span class="lgItem state"><em class="ipaySet refundEnd">환불 완료</em></span>
                        <span class="lgItem etc tL">환불완료 : 2021-03-28 <br/>환불금액 : 2,495,000원</span>
                      </span>
                      <span class="mCase">환불완료 : 2021-03-28 환불금액 : 2,495,000원</span>
                    </div>
                    <!--//-->
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
          <!-- 결제관련 안내사항 -->
            <span class="hrLine"></span>
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
    <!-- 결제 취소 -->
    <Alert v-if='popupTrigger2' @close="popupTrigger2 = false" class="leftTxtNoty">
      <template slot="modalbody">
        <p>
          <strong>주문을 취소 하시겠습니까?</strong>
          주문취소가 완료 되기까지 약간의<br/>시간이 소요될 수 있습니다.
        </p>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="popupTrigger2 = false">취소</button>
        <button class="btnM" @click="popupTrigger2 = false">확인</button>
      </template>
    </Alert>
    <!-- //결제 취소 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PaymentDeliveryTracking from '@/views/mypage/PaymentDeliveryTracking.vue';

export default {
  mixins: [Mixin],
  name: 'PaymentHistory',
  components: {
    PaymentDeliveryTracking
  },
  data() {
    return {
      popupTrigger: false,
      popupTrigger2: false,
    }
  },
  methods: {
    lecCompletion() {
      let routeData = this.$router.resolve({name: 'LecCompletion', query: {data: ""}});
      window.open('/mkup/windowPopup/lecCompletion', '_blank', `width=760,height=800`);
    }, // 윈도우팝업 호출
  },
  mounted() {
  },
}
</script>
