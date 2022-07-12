<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>현장/온라인 전환</h1>
      <div class="btnArea">
        <strong class="right boxGray fBlue">장 A20210101010 |  복합  |  1,2.3교시 타입  |  2022년 상반기 희소 모의고사</strong>
      </div>
    </div>
    <div class="winContent">
      <div class="boardTop tL">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <input type="text" value="11210002" class="w150"/>
              </span>
              <span class="lsItem">
                <input type="text" value="김*민(jim******)" class="w300"/>
                <button class="btnSearch">검색</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="120">
            <col width="200">
            <col width="120">
            <col width="200">
            <col width="120">
            <col width="200">
          </colgroup>
          <tbody>
            <tr>
              <th class="bgBlue">응시구분</th>
              <td class="tC">현장 응시(채점)</td>
              <th class="bgBlue">응시전환</th>
              <td class="tC" colspan="3">
                <div>
                  <span class="radioSet">
                    <input type="radio" name="radio1"/>
                    <label for=""><i></i><span class="fGray">현장 응시(채점)</span> &#8702; <strong>온라인 응시(채점)</strong></label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="radio1"/>
                    <label for=""><i></i><span class="fGray">현장 응시(채점)</span> &#8702; <strong>온라인 응시(자가채점)</strong></label>
                  </span>
                </div>
                <div class="mt5">
                  <span class="radioSet">
                    <input type="radio" name="radio1"/>
                    <label for=""><i></i><span class="fGray">온라인 응시(채점)</span> &#8702; <strong>현장 응시(채점)</strong></label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="radio1"/>
                    <label for=""><i></i><span class="fGray">온라인 응시(자가채점)</span> &#8702; <strong>현장 응시(채점)</strong></label>
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <th>이름(아이디)</th>
              <td class="tC">김*민<br/>(jim******)</td>
              <th>회원번호</th>
              <td class="tC">361145</td>
              <th>휴대전화(SMS)</th>
              <td class="tC">010-9999-9999</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tvs mt10">
        <table>
          <colgroup>
            <col width="120">
            <col width="200">
            <col width="120">
            <col width="200">
            <col width="120">
            <col width="200">
          </colgroup>
          <tbody>
            <tr>
              <th>수험번호</th>
              <td class="tC">10210001</td>
              <th>회차</th>
              <td class="tC">1</td>
              <th class="bgRed">판매유형</th>
              <td class="tC">복합</td>
            </tr>
            <tr>
              <th>과목(1)</th>
              <td class="tC">교육학</td>
              <th>선생님(1)</th>
              <td class="tC">김현</td>
              <th class="bgRed">채점여부</th>
              <td class="tC">채점</td>
            </tr>
            <tr>
              <th>과목(2)</th>
              <td class="tC">국어</td>
              <th>선생님(2)</th>
              <td class="tC">박노송</td>
              <th class="bgRed">결제금액(원)<br/><span class="fRed">(환불총액)</span></th>
              <td class="tC">25,000</td>
            </tr>
            <tr>
              <th>과목(3)</th>
              <td class="tC">국어</td>
              <th class="tC">선생님(3)</th>
              <td class="tC">박노송</td>
              <th class="bgRed">결제일시</th>
              <td class="tC"><strong>카드</strong><br/>2021-05-03 22:32:48</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="mt20"><strong>전환 전 점검사항</strong></h3>
      <div class="tvsWhite">
        <table>
          <tbody>
            <tr>
              <td>
                <div class="pb10">
                  <span class="checkSet">
                    <input type="checkbox" />
                    <label for="" class="fRed"><i></i>(필수) 응시 전환 시 기존에 접수된 모의고사는 바로 취소됨을 안내하였습니다.</label>
                  </span>
                </div>
                <span class="checkSet">
                  <input type="checkbox" />
                  <label for="" class="fRed"><i></i>(필수) 환불 불가 및 재전환 불가 유의사항을 안내하였습니다.</label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btnArea">
        <button class="btnM">전환하기</button>
        <button class="btnM gray">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MocktestChange',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
