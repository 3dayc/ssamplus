<template lang="html">
  <div class="payCardKind">
    <ul>
      <li class="sh">
        <strong>
          <span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span>
          <span>7, 8, 9, 10, 11, 12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
          <span>13, 14, 15, 16, 17, 18, 19, 20, 21, 22개월 <em>(100만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="kb">
        <strong>
          <span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span>
          <span>7, 8, 9, 10, 11, 12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
          <span>13, 14, 15, 16, 17, 18, 19, 20, 21, 22개월 <em>(100만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="bc">
        <strong><span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span></strong>
      </li>
      <li class="wr">
        <strong><span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span></strong>
      </li>
      <li class="hd">
        <strong>
          <span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span>
          <span>7,8, 9, 10, 11, 12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
          <span>13, 14, 15, 16, 17, 18, 19, 20, 21, 22개월 <em>(100만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="ss">
        <strong>
          <span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span>
          <span>7,8, 9, 10, 11, 12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
          <span>13, 14, 15, 16, 17, 18, 19, 20, 21, 22개월 <em>(100만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="hn">
        <strong><span>2, 3, 4, 5, 6, 7, 8개월 <em>(5만원 이상)</em></span></strong>
      </li>
      <li class="hnetc">
        <strong><span>2, 3, 4, 5, 6, 7, 8개월 <em>(5만원 이상)</em></span></strong>
      </li>
      <li class="lt">
        <strong>
          <span>6개월 <em>(5만원 이상, SK Pay 전용)</em></span>
          <span>12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
          <span>22개월 <em>(100만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="ct">
        <strong><span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span></strong>
      </li>
      <li class="nh">
        <strong>
          <span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span>
          <span>12개월 <em>(20만원 이상, SK Pay 전용)</em></span>
        </strong>
      </li>
      <li class="sc">
        <strong><span>2, 3, 4, 5, 6개월 <em>(5만원 이상)</em></span></strong>
      </li>
    </ul>
    <dl>
      <dt>제외 품목</dt>
      <dd>순금매장, 아동용쥬얼리, 복지용구(요양보험), e-쿠폰/상품권/이용권 등 (제외품목 상품을 포함하여 할부 결제 시 할부 수수료가 청구됩니다.)</dd>
      <dt>제외 카드</dt>
      <dd>체크/법인/개인사업자/선불/키프트카드 제외/BC계열은 BC카드 무이자할부 적용</dd>
    </dl>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PayCardKind',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
