<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="paymentFinish">
          <div>
            <span><em><strong>홍길동</strong>님</em> 결제가 완료되었습니다.</span>
            <p>쌤플러스는 <strong>홍길동</strong>님이 선생님이 되어 꽃길을 걷는 그날까지 함께하겠습니다.</p>
          </div>
          <router-link to="/mkup/mypage/payment/history" class="btnL">결제 내역 확인하기</router-link>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';


export default {
  mixins: [Mixin],
  name: 'PaymentFinish',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
