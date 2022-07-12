<template lang="html">
  <div>
    <div class="couponSalesSummary">
      <div class="subTit"><h3>최근 4개년 쿠폰 현황</h3></div>
      <div class="tls">
        <table>
          <colgroup>
            <col width="100"/>
            <col width="200"/>
            <col width="200"/>
            <col width="200"/>
            <col width="200"/>
            <col width="200"/>
          </colgroup>
          <thead>
            <tr>
              <th>연도</th>
              <th>발급건수</th>
              <th>사용건수</th>
              <th>미사용건수</th>
              <th>사용률</th>
              <th>결제금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021년</td>
              <td>1,250건</td>
              <td>1,000건</td>
              <td>250건</td>
              <td>80%</td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>2020년</td>
              <td>1,250건</td>
              <td>1,000건</td>
              <td>250건</td>
              <td>80%</td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>2019년</td>
              <td>1,250건</td>
              <td>1,000건</td>
              <td>250건</td>
              <td>80%</td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <tr>
              <td>2018년</td>
              <td>1,250건</td>
              <td>1,000건</td>
              <td>250건</td>
              <td>80%</td>
              <td class="tR fBold">100,000,000원</td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
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
  name: 'CouponSalesSummary'
}
</script>

<style lang="css" scoped>
</style>
