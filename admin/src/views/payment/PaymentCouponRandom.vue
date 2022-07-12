<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
        <h1>난수쿠폰 등록 및 사용 현황</h1>
        <span class="supTxt">* 기 발급한 난수쿠폰의 상세 정보 및 발급내역을 확인할 수 있음</span>
    </div>
    <div class="winContent">
      <!-- 난수쿠폰 상세정보 -->
      <h3><strong>난수쿠폰 상세정보</strong></h3>
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
              <th>사용가능기간</th><!-- 2021-09-02 텍스트 수정 -->
              <td>2021-02-04 ~ 2021-03-15</td>
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
      <!-- //난수쿠폰 상세정보 -->
      <!-- 쿠폰 발급내역 -->
      <div class="boardTop tL mt10">
        <h3><strong>쿠폰 발급내역</strong></h3>
        <div class="right-po">
          <dl>
            <dt>총 등록</dt>
            <dd><strong>10</strong>건</dd>
          </dl>
          <dl>
            <dt>총 발급</dt>
            <dd>100건</dd>
          </dl>
          <button class="btnDownload">다운로드</button> <!--2021-06-30-->
        </div>
      </div>
      <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="160"/>
            <col width="160"/>
            <col width="240"/>
            <col width="140"/>
          </colgroup>
          <thead>
            <tr>
              <th>No.</th>
              <th>난수번호</th>
              <th>이름/아이디</th>
              <th>등록일자</th>
              <th>사용여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>18920B5</td>
              <td class="fBlue">김*수<br/>(k******)</td>
              <td class="fBlue">2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
            </tr>
            <tr>
              <td>9</td>
              <td>CF71317</td>
              <td class="fBlue">김*수<br/>(k******)</td>
              <td class="fBlue">2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
            </tr>
            <tr>
              <td>8</td>
              <td>CD0AFBF</td>
              <td class="fBlue">김*수<br/>(k******)</td>
              <td class="fBlue">2021-05-02 11:05:35</td>
              <td class="fBlue">N</td>
            </tr>
            <tr>
              <td>7</td>
              <td>18920B5</td>
              <td class="fBlue">김*수<br/>(k******)</td>
              <td class="fBlue">2021-05-02 11:05:35</td>
              <td class="fBlue">Y</td>
            </tr>
            <tr>
              <td>6</td>
              <td>CF71317</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>5</td>
              <td>CD0AFBF</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>5</td>
              <td>18920B5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>4</td>
              <td>18920B5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>18920B5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>18920B5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>1</td>
              <td>18920B5</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
          </tbody>
        </table>
      </div>
      <!-- //쿠폰 발급내역 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCouponRandom',
  data() {
    return {
      popTrigger: false,
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
