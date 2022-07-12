<template lang="html">
  <div>
    <!-- page layout -->
    <div class="monthTestViewRegister"><!-- class 없어도 유지 -->
      <div class="subTit">
        <span class="right">
          <em> M-99999999999 |  단일  |  국어  |  박노송  |  2.3교시 타입  |  박노송 전공국어 – 월별 모의고사</em>입니다.
        </span>
      </div>
      <div class="boardTop">
        <span class="radioSet">
          <input type="radio" name="radio1" checked @click="mtrTrigger = false" />
          <label for=""><i></i>접수현황</label>
        </span>
        <span class="radioSet">
          <input type="radio" name="radio1"  @click="mtrTrigger = true" />
          <label for=""><i></i>접수상세내역</label>
        </span>
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">응시 구분 </option>
                    <option value="">전체</option>
                    <option value="">현장</option>
                    <option value="">온라인</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">채점 여부 </option>
                    <option value="">전체</option>
                    <option value="">채점</option>
                    <option value="">자가채점</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">결제 구분 </option>
                    <option value="">전체</option>
                    <option value="">결제완료</option>
                    <option value="">미결제</option>
                    <option value="">환불</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <input type="text" placeholder="수험번호, 회원번호, 아이디, 이름" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
            <div><button class="btnRefresh">초기화</button></div>
          </div>
        </div>
      </div>
      <!-- 접수현황 -->
      <div v-show="!mtrTrigger" class="tls current">
        <table>
          <colgroup><col><col style="width:5%;" span="1"><col><col style="width:5%;" span="1"></colgroup>
          <thead class="duble">
            <tr>
              <th scope="col" rowspan="2">회차</th>
              <th scope="col" rowspan="2">과목</th>
              <th scope="col" rowspan="2">선생님</th>
              <th scope="col" rowspan="2">마감여부</th>
              <th scope="col" colspan="3" class="darkblue">전체 접수인원 / 모집인원<br/>(매출 합계)</th>
              <th scope="col" colspan="3">일반 접수인원 / 모집인원<br/>(매출 합계)</th>
              <th scope="col" colspan="3">사전 접수인원 / 모집인원<br/>(매출 합계)</th>
            </tr>
            <tr>
              <th scope="col" class="blue">현장 응시 (채점)</th>
              <th scope="col" class="blue">온라인 (채점)</th>
              <th scope="col" class="blue">온라인 (자가채점)</th>
              <th scope="col">현장 응시 (채점)</th>
              <th scope="col">온라인 (채점)</th>
              <th scope="col">온라인 (자가채점)</th>
              <th scope="col">현장 응시 (채점)</th>
              <th scope="col">온라인 (채점)</th>
              <th scope="col">온라인 (자가채점)</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>1</td>
              <td>국어</td>
              <td>박노송</td>
              <td></td>
              <td><strong class="fBlue">65 </strong>/ 70 명<br/>(999,999,999원)</td>
              <td><strong class="fBlue">42 </strong>/ 50 명<br/>(999,999,999원)</td>
              <td class="lightGray">- / - 명<br/>( - 원)</td>
              <td><strong class="fBlue">50 </strong>/ 55 명<br/>(999,999,999원)</td>
              <td><strong class="fBlue">27 </strong>/ 35 명<br/>(999,999,999원)</td>
              <td class="lightGray">- / - 명<br/>( - 원)</td>
              <td><strong class="fBlue">15 </strong>/ 20 명<br/>(999,999,999원)</td>
              <td><strong class="fBlue">15 </strong>/ 20 명<br/>(999,999,999원)</td>
              <td class="lightGray">- / - 명<br/>( - 원)</td>
            </tr>
            <!--//Loop-->
            <tr class="red">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><strong class="fBlue">200 </strong>/ 210 명<br/>(999,999,999원)</td>
              <td><strong class="fBlue">42 </strong>/ 150 명<br/>(999,999,999원)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="13" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //접수현황 -->
      <!-- 접수상세내역 -->
      <div v-show="mtrTrigger" class="listSummery">
        <div class="left">
          <button class="btnAdd" @click="alertTrigger = true">수험번호 생성</button>
        </div>
        <div class="right">
          <button class="btnDownload" @click="MocktestChange()">현장/온라인 전환</button>
          <a href="#" class="btnDownload ml10">목록 다운로드</a>
        </div>
      </div>
      <div v-show="mtrTrigger" class="tls detail">
        <table>
          <colgroup><col><col style="width:6%;" span="1"></colgroup>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">수험번호</th>
              <th scope="col">회원번호</th>
              <th scope="col">이름<br/>(아이디)</th>
              <th scope="col">휴대전화</th>
              <th scope="col">SMS</th>
              <th scope="col">판매유형</th>
              <th scope="col">과목(2)</th>
              <th scope="col">선생님(2)</th>
              <th scope="col">과목(3)</th>
              <th scope="col">선생님(3)</th>
              <th scope="col">응시구문</th>
              <th scope="col">채점여부</th>
              <th scope="col">결재금액 (원)<br/><span class="fRed">(환불총액)</span></th>
              <th scope="col">결제일시</th>
            </tr>
          </thead>
          <tbody>
            <!--Loop-->
            <tr>
              <td>10</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">온라인</strong></td>
              <td>채점</td>
              <td>25,000</td>
              <td><strong>카드</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <!--//Loop-->
            <tr>
              <td>9</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">온라인</strong></td>
              <td>채점</td>
              <td>-</td>
              <td><strong>미결제</strong></td>
            </tr>
            <tr class="gray">
              <td>8</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">현장</strong></td>
              <td>자가채점</td>
              <td>560,000<br/><span class="fRed">(560,000)</span></td>
              <td><strong class="fRed">환불</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">현장</strong></td>
              <td>채점</td>
              <td>25,000</td>
              <td><strong>학원카드</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>N</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">현장</strong></td>
              <td>채점</td>
              <td>25,000</td>
              <td><strong>학원현금</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>N</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">온라인</strong></td>
              <td>자가채점</td>
              <td>20,000</td>
              <td><strong>가상계좌</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td></td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">온라인</strong></td>
              <td>자가채점</td>
              <td>20,000</td>
              <td><strong>카드</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">온라인</strong></td>
              <td>자가채점</td>
              <td>20,000</td>
              <td><strong>학원카드</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">현장</strong></td>
              <td>자가채점</td>
              <td>20,000</td>
              <td><strong>학원현금</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <tr>
              <td>1</td>
              <td></td>
              <td>361145</td>
              <td>김*민<br/>(jim******)</td>
              <td>010-9999-9999</td>
              <td>Y</td>
              <td>단일</td>
              <td>국어</td>
              <td>박노송</td>
              <td>국어</td>
              <td>박노송</td>
              <td><strong @click="MocktestChange()">현장</strong></td>
              <td>자가채점</td>
              <td>20,000</td>
              <td><strong>가상계좌</strong><br/>2021-05-03 22:32:48</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="15" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //접수상세내역 -->
    </div>
    <!-- //page layout -->

    <!-- Popup -->
    <Alert v-if="alertTrigger" @close="alertTrigger = false">
      <div slot="modalbody">수험번호 생성 규칙에따라<br/> 자동으로 수험번호를 생성합니다.<br/>수험번호를 생성 하시겠습니까?</div>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MonthTestViewRegister',
  data() {
    return {
      alertTrigger: false,
      mtrTrigger: false,
    }
  },
  methods: {
    MocktestChange() {
      let routeData = this.$router.resolve({name: 'MocktestChange', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mocktestChange', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
