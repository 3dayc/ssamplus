<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>쿠폰 설정</h1>
      <span class="supTxt">* 프리미엄 패키지의 수강혜택을 쿠폰으로 지급할 수 있음</span>
      <span class="btnArea">
        <button class="btnM green">완료</button>
        <button class="btnM gray">취소</button>
      </span>
    </div>
    <div class="winContent">
      <div class="tls">
        <table>
          <colgroup>
            <col width="60"/>
            <col width="80"/>
            <col width="80"/>
            <col width="250"/>
            <col width="150"/>
            <col width="80"/>
            <col width="150"/>
          </colgroup>
          <thead>
            <tr>
              <th>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chkall">
                  <label for="chkall"><i></i></label>
                </span>
              </th>
              <th>쿠폰번호</th>
              <th>카테고리</th>
              <th>쿠폰명</th>
              <th>할인혜택 / 조건</th>
              <th>중복할인</th>
              <th>유효기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk1">
                  <label for="chk1"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>배송비</td>
              <td>배송비 Free 쿠폰</td>
              <td>2.500원</td>
              <td>가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk2">
                  <label for="chk2"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>배송비</td>
              <td>이동건 해설편 배송비 쿠폰</td>
              <td>2.500원</td>
              <td>불가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk3">
                  <label for="chk3"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>이벤트</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk4">
                  <label for="chk4"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>대학제휴</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>불가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk5">
                  <label for="chk5"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>배송비</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>불가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk6">
                  <label for="chk6"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>선생님요청</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>가능</td>
              <td>발급 후 10일</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk7">
                  <label for="chk7"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>협력사</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk8">
                  <label for="chk8"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>사물함</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>불가능</td>
              <td>발급 후 30일</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk9">
                  <label for="chk9"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>대학제휴</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk10">
                  <label for="chk10"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>배송비</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>불가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk11">
                  <label for="chk11"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>복지할인</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>100,000원<br/>최소 주문금액 20,000원</td>
              <td>가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chk12">
                  <label for="chk12"><i></i></label>
                </span>
              </td>
              <td>101234</td>
              <td>선생님요청</td>
              <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
              <td>10%<br/>최대 1,000,000원 할인</td>
              <td>불가능</td>
              <td>2021-02-04 ~ 2021-03-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureCouponSet',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
