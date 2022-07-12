<template lang="html">
  <div>
    <button class="openlayNotice" @click="PopInfo = true">최종합격 시 환급 유의사항</button>
    <img :src="require(`@/assets/images/ssampackEvent/cnt_0302.jpg`)" alt="" />
    <!-- 최종합격 시 환급 유의사항 -->
    <div class="layNotice" v-if='PopInfo'>
      <h4>최종합격 시 환급 유의사항</h4>
      <p>* 환급은 쌤팩 프리미엄 금액(50만 원)에 대해서 제공됩니다.</p>
      <h5>환급 대상</h5>
      <ul>
        <li>2023학년도 임용시험 최종 합격자 중 환급 기준 도달한 프리미엄 회원</li>
      </ul>
      <h5>환급 기준</h5>
      <ul>
        <li>최종 합격자 발표 후 7일 이내 합격수기를 자사 양식에 맞춰 자사 이메일로 제출</li>
        <li>교원임용 카페에 합격수기 등록 후 게시글 URL 인증(카페 리스트 : 최종 합격 발표일 맞춰 안내 예정)</li>
        <li>합격자 인터뷰 영상 촬영(얼굴 노출 동의)</li>
        <li>합격자 사례발표 촬영(얼굴 공개 동의)</li>
        <li>환급 신청서, 합격인증 서류 제출, 응시 수험표, 신분증 사본, 통장 사본, 합격수기 제출</li>
        <li>자사 마케팅 시 제출된 합격수기, 인터뷰 영상, 합격 정보 등 개인정보 활용에 동의</li>
      </ul>
      <h5>지급 기준</h5>
      <ul>
        <li>환급 기준 충족하여 신청 완료 시, 신청 후 30일 이내 프리미엄 (50만 원)의 60% 금액에서 제세공과금 22% 공제된 금액<br>(234,000원)이 지급됩니다.
        </li><li>프리미엄 상품 구매 아이디(회원정보)와 합격인증 서류, 신분증 이름(실명)이 동일해야 지급됩니다.</li>
      </ul>
      <div class="close_layNotice">
        <button @click="PopInfo = false"><img :src="require(`@/assets/images/ssampackEvent/btn_close_layNotice.jpg`)" alt="닫기" /></button>
      </div>
    </div>
    <!-- 최종합격 시 환급 유의사항 //-->
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack0302Pc",
  data() {
    return {
      PopInfo: false,
    }
  },
};
</script>
