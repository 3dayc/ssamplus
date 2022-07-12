<template lang="html">
  <div>
    <div class="pageTit">
      <h2>가입/탈퇴 이력</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>가입/탈퇴 이력</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userSignup"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:signupTab===0}">
                    <button @click="signupTab = 0">신규가입</button>
                  </li>
                  <li :class="{on:signupTab===1}">
                    <button @click="signupTab = 1">탈퇴</button>
                  </li>
                  <li :class="{on:signupTab===2}">
                    <button @click="signupTab = 2">합계</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 신규가입 -->
            <div v-if="signupTab == 0" class="tabData">
              <UserSignupJoin />
            </div>
            <!-- //신규가입 -->
            <!-- 탈퇴 -->
            <div v-if="signupTab == 1" class="tabData">
              <UserSignupLeave />
            </div>
            <!-- //탈퇴 -->
            <!-- 합계 -->
            <div v-if="signupTab == 2" class="tabData">
              <UserSignupTotal />
            </div>
            <!-- //합계 -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import UserSignupJoin from '@/views/statistics/UserSignupJoin.vue';
import UserSignupLeave from '@/views/statistics/UserSignupLeave.vue';
import UserSignupTotal from '@/views/statistics/UserSignupTotal.vue';

export default {
  mixins: [Mixin],
  name: 'UserSignup',
  data() {
    return {
      signupTab: 0,
    }
  },
  methods: {
  },
  components: {
    UserSignupJoin,
    UserSignupLeave,
    UserSignupTotal,
  },
}
</script>
