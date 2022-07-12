<template lang="html">
  <div>
    <div class="pageTit">
      <h2>미결제 회원 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>미결제 회원 통계</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userNonePay"><!-- class 없어도 유지 -->

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'UserNonePay',
  data() {
    return {

    }
  },
  methods: {
  },
  components: {
  },
}
</script>
