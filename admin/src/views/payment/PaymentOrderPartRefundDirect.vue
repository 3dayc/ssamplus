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
    <!-- 환불정보 -->
    <h3 class="mt10"><strong>환불정보 <span>(1)</span></strong></h3>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <!-- -->
          <tr>
            <th scope="row">주문번호</th>
            <td colspan="3">P202102250000</td><!-- 2021-08-23 수정 -->
          </tr>
          <tr>
            <th scope="row">주문구분</th>
            <td colspan="3"><span class="fGreen">학원</span> / 패키지</td>
          </tr>
          <tr>
            <th scope="row">주문내역</th>
            <td colspan="3">이진영 연간쌤팩 ['21 1~11월]</td>
          </tr>
          <tr>
            <th scope="row">결제금액</th>
            <td class="tR fBlue">1,563,000 원</td>
            <th scope="row">환불가능금액</th>
            <td class="tR">1,563,000 원</td>
          </tr>
          <tr class="emphasis">
            <th scope="row">환불요청금액</th>
            <td class="tR">
              <span class="unit wAuto">
                <input type="text" class="fRed" value="233,000"><em>원</em>
              </span>
            </td>
            <!-- 강좌 -->
            <td colspan="2">
              <span class="radioSet">
                <input type="radio" name="radio1" />
                <label for="radio1"><i></i>주 단위</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio2" />
                <label for="radio2"><i></i>강의 단위</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio3" />
                <label for="radio3"><i></i>직접입력</label>
              </span>
            </td>
            <!-- //강좌 -->
            <!-- 교재, 학습기기, 기타(굿즈) -->
            <th scope="row" style="display:none;">환불요청수량</th>
            <td class="tR" style="display:none;">
              <span class="unit wAuto">
                <input type="text" value="1"><em>권</em>
              </span>
            </td>
            <!-- //교재, 학습기기, 기타(굿즈) -->
          </tr>
          <!-- -->
          <tr class="emphasis">
            <th scope="row">승인요청금액</th>
            <td class="tR">1,330,000 원</td>
            <td colspan="2" class="fRed">※ (승인요청금액 = 환불가능금액 – 환불요청금액)</td>
          </tr>
          <tr>
            <th scope="row">강좌 닫기</th>
            <td colspan="3">
              <ul>
                <li class="mb10">
                  <span class="checkSet">
                    <input type="checkbox" id="one" @change="onChange"/>
                    <label for="one" class="fRed fBold"><i></i>[전문상담]이진영 – 기본이론반</label>
                  </span>
                  (진도율: 7/8)<br/>
                  <span class="inBlock mt5 pl26">
                    수강기간: 2021-05-01 (70일) / 수강종료일:
                    <VCalendar class="calSet ml10" v-model="date" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </li>
                <li class="mb10">
                  <span class="checkSet">
                    <input type="checkbox" id="two" />
                    <label for="two" class="fRed fBold"><i></i>[전문상담]이진영 – 종합이론1</label>
                  </span>
                  (진도율: 1/16)<br/>
                  <span class="inBlock mt5 pl26">
                    수강기간: 2021-05-01 (60일) / 수강종료일:
                    <VCalendar class="calSet ml10" v-model="date" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </li>
                <li>
                  <span class="checkSet">
                    <input type="checkbox" id="three" />
                    <label for="three" class="fBold"><i></i>[전문상담]이진영 – 종합이론2</label>
                  </span>
                  (진도율: 5/10)<br/>
                  <span class="inBlock mt5 pl26">
                    수강시작일: 2021-05-01 (60일) / 수강종료일:
                  </span>
                </li>
                <li>
                  <span class="checkSet">
                    <input type="checkbox" id="four" />
                    <label for="four" class="fBold"><i></i>[전문상담]이진영 - 영역별 문제풀이반</label>
                  </span>
                  (진도율: 0/8)<br/>
                  <span class="inBlock mt5 pl26">
                    수강시작일: 2021-05-25 (50일) / 수강종료일:
                  </span>
                </li>
                <li>
                  <span class="checkSet">
                    <input type="checkbox" id="four" />
                    <label for="four" class="fBold"><i></i>[전문상담]이진영 - 실전모의고사반</label>
                  </span>
                  (진도율: 3/12) : 제작 완료<br/>
                  <span class="inBlock mt5 pl26">
                    수강시작일: 2021-05-01 (70일) / 수강종료일:
                  </span>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //환불정보 -->
    <!-- 선택한 강좌 -->
    <div class="tls mt10" v-if="lectureTrigger">
      <table>
        <colgroup>
          <col width="230"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col">강좌명</th>
            <th scope="col">정가</th>
            <th scope="col">판매가</th>
            <th scope="col" class="bgRed">환불요청금액</th>
            <th scope="col">승인요청금액</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td>합계</td>
            <td class="tR">1,930,000</td>
            <td class="tR">1,563,000</td>
            <td class="tR bgRed fRed"></td>
            <td class="tR"></td>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td class="tL"><span class="ellipsis01 w230">[전문상담]이진영 – 기본이론반 강좌명이 길면[전문상담]이진영 – 기본이론반 강좌명이 길면[전문상담]이진영 – 기본이론반 강좌명이 길면</span></td>
            <td class="tR">380,000</td>
            <td class="tR">263,000</td>
            <td class="bgRed"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td class="tL"><span class="ellipsis01 w230">[전문상담]이진영 - 종합이론1</span></td>
            <td class="tR">350,000</td>
            <td class="tR">300,000</td>
            <td class="bgRed"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td class="tL"><span class="ellipsis01 w230">[전문상담]이진영 - 종합이론2</span></td>
            <td class="tR">500,000</td>
            <td class="tR">400,000</td>
            <td class="bgRed"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td class="tL"><span class="ellipsis01 w230">[전문상담]이진영 – 기본이론반 강좌명이 길면[전문상담]이진영 – 기본이론반 강좌명이 길면[전문상담]이진영 – 기본이론반 강좌명이 길면</span></td>
            <td class="tR">300,000</td>
            <td class="tR">250,000</td>
            <td class="bgRed"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td class="tL"><span class="ellipsis01 w230">[전문상담]이진영 - 실전모의고사반</span></td>
            <td class="tR">400,000</td>
            <td class="tR">350,000</td>
            <td class="bgRed"></td>
            <td class="tR"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //선택한 강좌 -->
    <!-- 2021-08-23 환불정보2 -->
    <h3 class="mt10"><strong>환불정보 <span>(2)</span></strong></h3>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <!-- -->
          <tr>
            <th scope="row">주문번호</th>
            <td colspan="3">P202102250000</td>
          </tr>
          <tr>
            <th scope="row">주문구분</th>
            <td colspan="3"><span class="fBlue">교재</span></td>
          </tr>
          <tr>
            <th scope="row">주문내역</th>
            <td colspan="3" class="fBold">2021 이진영 전문상담 손진기(손에 잡히는 진단기준)</td>
          </tr>
          <tr>
            <th scope="row">결제금액</th>
            <td class="tR fBlue">5,000 원</td>
            <th scope="row">환불가능금액</th>
            <td class="tR">5,000 원</td>
          </tr>
          <tr class="emphasis">
            <th scope="row">환불요청금액</th>
            <td class="tR">
              <span class="unit wAuto">
                <input type="text" class="fRed" value="233,000"><em>원</em>
              </span>
            </td>
            <!-- 강좌 -->
            <td colspan="2" style="display:none;">
              <span class="radioSet">
                <input type="radio" name="radio1" />
                <label for="radio1"><i></i>일 단위</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio2" />
                <label for="radio2"><i></i>강의 단위</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio3" />
                <label for="radio3"><i></i>직접입력</label>
              </span>
            </td>
            <!-- //강좌 -->
            <!-- 교재, 학습기기, 기타(굿즈) -->
            <th scope="row">환불요청수량</th>
            <td class="tR">
              <span class="unit wAuto">
                <input type="text" value="1"><em>권</em>
              </span>
            </td>
            <!-- //교재, 학습기기, 기타(굿즈) -->
          </tr>
          <!-- -->
          <tr class="emphasis">
            <th scope="row">승인요청금액</th>
            <td class="tR">0 원</td>
            <td colspan="2" class="fRed">※ (승인요청금액 = 환불가능금액 – 환불요청금액)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //2021-08-23 환불정보2 -->
    <!-- 2021-08-23 환불정보3 -->
    <h3 class="mt10"><strong>환불정보 <span>(3)</span></strong></h3>
    <div class="tvs">
      <table>
        <colgroup>
          <col width="160"/>
          <col width="230"/>
          <col width="160"/>
          <col width="230"/>
        </colgroup>
        <tbody>
          <!-- -->
          <tr>
            <th scope="row">주문번호</th>
            <td colspan="3">P202102250000</td>
          </tr>
          <tr>
            <th scope="row">주문구분</th>
            <td colspan="3"><span class="fBlue">배송</span></td>
          </tr>
          <tr>
            <th scope="row">주문내역</th>
            <td colspan="3" class="fBold">교재 배송료</td>
          </tr>
          <tr>
            <th scope="row">결제금액</th>
            <td class="tR fBlue">2,500 원</td>
            <th scope="row">환불가능금액</th>
            <td class="tR">2,500 원</td>
          </tr>
          <tr class="emphasis">
            <th scope="row">환불요청금액</th>
            <td class="tR">
              <span class="unit wAuto">
                <input type="text" class="fRed" value="2,500"><em>원</em>
              </span>
            </td>
            <td colspan="2"></td>
          </tr>
          <!-- -->
          <tr class="emphasis">
            <th scope="row">승인요청금액</th>
            <td class="tR">0 원</td>
            <td colspan="2" class="fRed">※ (승인요청금액 = 환불가능금액 – 환불요청금액)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //2021-08-23 환불정보3 -->
    <!-- 총 환불정보 -->
    <h3 class="mt10"><strong>총 환불정보</strong></h3>
    <span class="tvsCaption ty02">카드</span><!-- 카드 -->
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
            <td class="tR fBlue">1,570,500 원</td>
            <th scope="row">총 환불가능금액</th>
            <td class="tR">1,570,500 원</td>
          </tr>
          <tr class="emphasis02">
            <th scope="row">총 환불요청금액</th>
            <td class="tR fRed">240,500 원</td>
            <th scope="row">총 환불요청수량</th>
            <td class="tR">1 권</td>
          </tr>
          <tr class="emphasis02">
            <th scope="row">총 승인요청금액</th>
            <td class="tR">1,330,000 원</td>
            <td colspan="2" class="fRed">※ (총 승인요청금액 = 총 환불가능금액 – 총 환불요청금액)</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    <!-- //총 환불정보 -->
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
      date:new Date(),
      lectureTrigger: false,
    }
  },
  methods: {
    onChange(event) {
      let checked = event.target.checked;
      checked ? this.lectureTrigger = true : this.lectureTrigger = false;
    },
  },
  components: {
  },
}
</script>
