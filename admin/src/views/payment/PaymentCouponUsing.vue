<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
        <h1>쿠폰 발급 및 사용현황</h1>
        <span class="supTxt">* 기 발급한 쿠폰의 상세 정보 및 발급내역을 확인할 수 있음</span>
    </div>
    <div class="winContent">
      <!-- 쿠폰 상세정보 -->
      <h3><strong>쿠폰 상세정보</strong></h3>
      <div class="tvs">
        <table>
          <colgroup>
            <col width="100"/>
            <col width="200"/>
            <col width="100"/>
            <col width="200"/>
            <col width="100"/>
            <col width="200"/>
          </colgroup>
          <tbody>
            <tr>
              <th>카테고리</th>
              <td>이벤트</td>
              <th>쿠폰번호</th>
              <td>101234</td>
              <th>발행기간</th>
              <td>2021-02-04 (발급 후 10일)</td>
            </tr>
            <tr>
              <th>할인혜택</th>
              <td>10%</td>
              <th>할인조건</th>
              <td>최대 1,000,000원 할인</td>
              <th>중복할인</th>
              <td class="tC">불가능</td><!-- 2021-09-02 -->
            </tr>
            <tr>
              <th>쿠폰명</th>
              <td colspan="5" class="tL">[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //쿠폰 상세정보 -->
      <!-- 쿠폰 발급내역 -->
      <div class="boardTop mt10">
        <div class="left-po"><h3><strong>쿠폰 발급내역</strong></h3></div>
        <div class="right-po">
          <dl>
            <dt>총 발급</dt>
            <dd>10건</dd>
          </dl>
          <button class="btnDownload">다운로드</button> <!--2021-06-30-->
        </div>
      </div>
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="160"/>
            <col width="240"/>
            <col width="160"/>
            <col width="100"/>
          </colgroup>
          <thead>
            <tr>
              <th>No.</th>
              <th>이름/아이디</th>
              <th>발급일자</th>
              <th>사용여부</th>
              <th>발급취소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>9</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>8</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <tr>
              <td>1</td>
              <td>김*수<br/>(k******)</td>
              <td>2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
              <td><button class="btnDelete" @click="alertTrigger = true">삭제</button></td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //쿠폰 발급내역 -->
    </div>
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        발급을 취소하면 발급내역에서 삭제되며, 해당 회원의 마이페이지에도 쿠폰이 삭제됩니다. 삭제 하시겠습니까?
      </template>
    </Alert>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCouponUsing',
  data() {
    return {
      popTrigger: false,
      alertTrigger: false,
      closeBtn: false,
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
