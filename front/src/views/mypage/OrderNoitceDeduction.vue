<template lang="html">
  <div>
    <div class="policyDetail">
      <div class="orderRules">
        <ul>
          <li><em>신용카드 결제는 카드 명의자 기준으로 도서 소득공제가 자동 신청</em>됩니다.</li>
          <li>신용카드로 도서 소득공제 대상 상품과 비대상 상품을 함께 주문하는 경우 소득공제 대상 금액과 비대상 금액으로 나누어 2회 결제가 진행 됩니다.</li>
          <li>2회 결제가 진행될 경우 카드사 청구할인 혜택에서 제외 될 수 있으므로, 각 결제금액을 꼭 확인하신 후 도서 소득공제를 신청해주세요.</li>
          <li>도서 소득공제 대상 /비대상 상품 (교재정보에서 "소득공제” 표기를 확인하세요)
              <div>
                <span>- 도서 중 ISBN이 부여된 교재 (도서 소득공제 대상 상품에 수반되는 국내 배송비)</span>
                <span>- 도서 주문 시 발생 되는 비대상 교재의 배송비,반품비, 분철비, 취소수수료 등은 모두 제외</span>
              </div>
          </li>
          <li><em>도서 소득공제는 결제 완료된 후에는 신청이 불가</em>합니다. 도서 소득공제를 받고자 하실 경우 결제 시 꼭 신청해주세요.</li>
          <li>도서 소득공제 신청내역은 별도의 영수증 출력이 불가하며 연말정산 시 간소화 서비스에서 조회가 가능합니다.</li>
          <li>법인 카드로 결제, 현금영수증을 사업자증빙용으로 신청 한 경우 도서 소득공제 적용이 되지 않습니다.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'OrderNoitceDeduction',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
