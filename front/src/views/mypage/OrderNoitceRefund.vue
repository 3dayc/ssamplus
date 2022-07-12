<template lang="html">
  <div>
    <div class="policyDetail">
      <div class="orderRules">
        <strong>동영상 강의</strong>
        <ul>
          <li>수강 시작일로부터 7일이 경과되지 않고 샘플강의제외 1강 수강한 경우 전액 환불 가능합니다.</li>
          <li>7일이 경과 되었거나 1강 이상 수강한 경우에는 환불규정<router-link to="">바로가기</router-link>에 따라 부분환불 됩니다.</li>
          <li>자료를 이용한 경우 강의 수강과 동일하게 간주되어 수강료가 차감됩니다.</li>
          <li>수강료 공제는 강의시작일 기준이며, 이용기간이 개시되었기 때문에 실제 강의를 수강하지 않았더라도 기간이 지나면 수강한 것으로 간주되어 수강료가 차감됩니다</li>
          <li>패키지강좌 및 특별강좌 등의 할인상품 환불 시에는 수강한 상품의 정가를 기준으로 공제하고 환불함을 원칙으로 합니다.</li>
          <li>상품 판매 시 환불에 관한 특별한 안내가 포함되어 있는 경우 그에 따릅니다.</li>
        </ul>
        <strong>학원 오프라인 강의</strong>
        <ul>
          <li>개강 이전에는 수강료 전액이 환불되며 개강 이후에는 경과 기간에 따라 부분환불 진행됩니다. <router-link to="">바로가기</router-link></li>
        </ul>
        <strong>교재</strong>
        <ul>
          <li>교재는 수령일 기준하여 7일 이내에만 취소 접수가 가능합니다. <router-link to="">바로가기</router-link></li>
          <li>수강생에게만 제공되는 교재의 경우 사용여부를 떠나 무조건 당사로 반입되어야 하며, 새 책 상태로 반입된 경우에만 교재 환불이 가능합니다.</li>
        </ul>
        <strong>아이디 공유</strong>
        <ul>
          <li>아이디 불법 공유, 콘텐츠물 불법복제 및 판매시에는 쌤플러스 아이디 공유 정책에 따라 처리됩니다. <router-link to="">바로가기</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: '환불규정 및 안내사항',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
