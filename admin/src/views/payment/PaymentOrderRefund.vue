<template lang="html">
  <div>
    <!-- 주문자 정보 -->
    <h3><strong>주문자 정보</strong></h3>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">성명(회원번호)</th>
            <td>홍길동</td>
            <th scope="row">아이디</th>
            <td>tiwitch69856</td>
          </tr>
          <tr>
            <th scope="row">전화번호</th>
            <td>031-9888-9997</td>
            <th scope="row">휴대전화</th>
            <td>031-9888-9997</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //주문자 정보 -->
    <!-- 환불상품정보 -->
    <h3 class="mt10"><strong>환불상품정보</strong></h3>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="*"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">주문번호</th>
            <td>P202102250000</td><!-- 2021-09-02 주문번호 수정 -->
          </tr>
          <tr>
            <th scope="row">주문구분</th>
            <td class="fBlue">패키지, 교재, 배송료</td>
          </tr>
          <tr>
            <th scope="row">주문내역</th>
            <td>
              이진영 연간쌤팩 ['21 1~11월] <br/>
              2021 이진영 전문상담 손진기(손에 잡히는 진단기준) <br/>
              교재 배송료
            </td>
          </tr>
          <tr>
            <th scope="row">강좌처리</th>
            <td>모든 강좌를 닫습니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //환불상품정보 -->
    <!-- 환불금액(전액) -->
    <h3 class="mt10"><strong>환불금액 <span class="fGreen">(전액)</span></strong></h3>
    <div class="tvs mb20">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">주문번호</th>
            <td colspan="3">20210114015789536</td>
          </tr>
          <tr>
            <th scope="row">총 결제금액</th>
            <td class="tR">1,570,500 원</td>
            <th scope="row">총 환불가능금액</th>
            <td class="tR">1,570,500 원</td>
          </tr>
          <tr class="emphasis02">
            <th scope="row">총 환불요청금액</th>
            <td class="tR fRed">1,570,500 원</td>
            <th scope="row">총 환불요청 수량</th>
            <td class="tR">1 권</td>
          </tr>
          <tr class="emphasis02">
            <th scope="row">총 승인요청금액</th>
            <td class="tR">0 원</td>
            <td colspan="2" class="fRed">※ (승인요청금액 = 환불가능금액 – 환불요청금액)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span class="tvsCaption ty01">가상계좌</span><!-- 가상계좌 -->
    <span class="tvsCaption ty02">카드</span><!-- 카드 -->
    <span class="tvsCaption ty03">학원현금</span><!-- 학원현금 -->
    <span class="tvsCaption ty04">학원카드</span><!-- 학원카드 -->
    <span class="tvsCaption ty05">키오스크</span><!-- 키오스크 -->
    <span class="tvsCaption ty06">0원 수강</span><!-- 0원 수강 -->
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <tr class="emphasis">
            <th scope="row">환불요청일</th>
            <td>
              <VCalendar class="calSet" v-model="date" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
            </td>
            <th scope="row">환불구분</th>
            <td>카드취소</td>
          </tr>
          <tr class="emphasis">
            <th scope="row">환불사유</th>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">환불사유 선택</option>
                </select>
              </span>
            </td>
            <td colspan="2"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //환불금액(전액) -->
    <div class="btnArea">
      <button class="btnM">신청</button>
      <button class="btnM gray">취소</button>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentOrderRefund',
  data() {
    return {
      date:'',
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
