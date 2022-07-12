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
        <div class="myInfoPw">
          <div class="back">
            <em>내 정보 확인을 위해</em> <strong>비밀번호를 다시 한번 입력</strong>해 주세요.
            <p>
              <span>본인 확인을 위해 현재 사용하고 있는 회원님의 비밀번호를</span> 한 번 더 입력해 주세요.
            </p>
            <input type="text" />
            <span class="fRed">비밀번호가 일치하지 않습니다.</span>
          </div>
          <router-link to="/mkup/mypage/myinfo/modify" class="btnL">확인</router-link>
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
  name: 'MyInfoPw',
  components: {
  },
  data() {
    return {
      popupTrigger01: false,
    }
  },
  mounted() {
  },
}
</script>
