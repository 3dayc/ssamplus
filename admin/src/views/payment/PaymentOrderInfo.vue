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
            <td>031-9999-9999</td>
            <th scope="row">휴대전화</th>
            <td>010-9999-9999</td>
          </tr>
          <tr>
            <th scope="row">주소</th>
            <td rowspan="3">
              [99999] 서울특별시 중구 통일로 92 <br/>
              KG 아파트 123동 1204호
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //주문자 정보 -->
    <!-- 주문 정보 -->
    <h3 class="mt10"><strong>주문정보</strong></h3>
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
            <th scope="row">주문번호</th>
            <td colspan="3">P202102250000</td><!-- 2021-08-23 수정 -->
          </tr>
          <tr>
            <th scope="row">주문금액(합계)</th>
            <td class="tR fRed">999,999원</td>
            <th scope="row">주문일자</th>
            <td>2021-01-14  12:19:46</td>
          </tr>
          <tr>
            <th scope="row">쿠폰사용(합계)</th>
            <td class="tR fRed">99,999원</td>
            <th scope="row">결제 디바이스</th>
            <td>PC</td>
          </tr>
          <tr class="emphasis">
            <th scope="row">결제금액(합계)</th>
            <td class="tR fRed fBold">999,999원</td><!-- 2021-08-23 수정 -->
            <th scope="row">결제수단</th>
            <td>은행송금</td>
          </tr>
          <tr>
            <th scope="row">쿠폰사용</th>
            <td colspan="3">
              <ul>
                <li>[101868] 21년 대학제휴 강의할인v1 – 20%(1월)</li>
                <li>[881868] 배송비 무료쿠폰</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //주문 정보 -->
    <!-- 결제정보 -->
    <h3 class="mt10"><strong>결제 정보</strong></h3>
    <!-- 가상계좌 -->
    <div>
      <span class="tvsCaption ty01">가상계좌</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>홍길동(hong12345)</td>
            </tr>
            <tr>
              <th scope="row">은행(가상계좌)</th>
              <td>신한은행</td>
              <th scope="row">번호(가상계좌)</th>
              <td>56211106659952</td>
            </tr>
            <tr class="emphasis">
              <th scope="row">입금확인</th>
              <td class="fItalic">미입금</td>
              <th scope="row">입금일자</th>
              <td class="fItalic">YYYY-MM-DD</td>
            </tr>
            <tr>
              <th scope="row">휴대전화(현금영수증)</th>
              <td><input type="text" value="010-9999-9999" class="tC"/></td>
              <th scope="row">현금영수증발행</th>
              <td>
                <span class="fBlue">발행완료</span>
                <button class="btnT line ml10" @click="popupTrigger01 = true">발행하기</button><!-- 단독으로 사용 시 ml10 제거 -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 가상계좌 -->
    <!-- 카드 -->
    <div>
      <span class="tvsCaption ty02">카드</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>온라인</td>
            </tr>
            <tr>
              <th scope="row">카드(할부개월수)</th>
              <td>현대(6)</td>
              <th scope="row">거래일자</th>
              <td>2021-01-14  12:20:06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 카드 -->
    <!-- 학원현금 -->
    <div>
      <span class="tvsCaption noneData">학원 결제의 경우 결제 정보가 표기되지 않습니다.</span>
      <span class="tvsCaption ty03">학원현금</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>온라인</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <th scope="row">거래일자</th>
              <td>2021-01-14  12:20:06</td>
            </tr>
            <tr>
              <th scope="row">휴대전화(현금영수증)</th>
              <td><input type="text" value="010-9999-9999" class="tC"/></td>
              <th scope="row">현금영수증발행</th>
              <td>
                <span class="fBlue">발행완료</span>
                <button class="btnT line ml10" @click="popupTrigger01 = true">발행하기</button><!-- 단독으로 사용 시 ml10 제거 -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 학원현금 -->
    <!-- 학원카드 -->
    <div>
      <span class="tvsCaption noneData">학원 결제의 경우 결제 정보가 표기되지 않습니다.</span>
      <span class="tvsCaption ty04">학원카드</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>온라인</td>
            </tr>
            <tr>
              <th scope="row">카드(할부개월수)</th>
              <td>현대(6)</td>
              <th scope="row">거래일자</th>
              <td>2021-01-14  12:20:06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 학원카드 -->
    <!-- 키오스크 -->
    <div>
      <span class="tvsCaption noneData">키오스크 결제의 경우 결제 정보가 표기되지 않습니다.</span>
      <span class="tvsCaption ty05">키오스크</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>홍길동(hong12345)</td>
            </tr>
            <tr>
              <th scope="row">카드(할부개월수)</th>
              <td>현대(6)</td>
              <th scope="row">거래일자</th>
              <td>2021-01-14  12:20:06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 키오스크 -->
    <!-- 0원 수강 -->
    <div>
      <span class="tvsCaption noneData">0원 수강 결제의 경우 결제 정보가 표기되지 않습니다.</span>
      <span class="tvsCaption ty06">0원 수강</span>
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
              <th scope="row">거래번호</th>
              <td>23781185</td>
              <th scope="row">담당자</th>
              <td>온라인</td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <th scope="row">거래일자</th>
              <td>2021-01-14  12:20:06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 0원 수강 -->
    <!-- //결제정보 -->
    <!-- 환불정보 -->
    <h3 class="mt10"><strong>환불 정보</strong></h3>
    <div class="tls subGreen">
      <table>
        <thead>
          <tr>
            <th scope="col">환불일자</th>
            <th scope="col">환불요청금액 (합계)</th>
            <th scope="col">상품명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021-01-15 18:55:22</td>
            <td class="tR">256,700원</td>
            <td class="tL">
              [전문상담]이진영 - 종합이론1<br/>
              [전문상담]이진영 – 기본이론반
            </td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="3" class="noneData">환불 정보가 존재하지 않습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
    <!-- //환불정보 -->
    <div class="btnArea">
      <button class="btnM">닫기</button>
    </div>

    <!-- Popup -->
    <Popup v-if='popupTrigger01' @close="popupTrigger01 = false" :popClass="classValue">
      <h1 slot="modalheader" class="tC">현금영수증 발행요청</h1>
        <div slot="modalbody">
          <h3><strong>현금영수증 발행정보</strong></h3>
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
          <button class="btnM line wAuto" @click="popupTrigger01 = false">현금영수증 자진발급</button>
          <button class="btnM green wAuto" @click="popupTrigger01 = false">현금영수증 발행</button>
        </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentOrderInfo',
  data() {
    return {
      popupTrigger01: false,
      classValue: "receiptPop",
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
