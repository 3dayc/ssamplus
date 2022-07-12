<template lang="html">
  <div>
    <div class="pageTit">
      <h2>회원유형 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>회원유형 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userType"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">준비중인 시험</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">대학</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">나이</button>
                  </li>
                  <li :class="{on:typeTab===3}">
                    <button @click="typeTab = 3">지역</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 시험 -->
            <div v-if="typeTab == 0" class="tabData">
              <UserTypeTest />
            </div>
            <!-- //시험 -->
            <!-- 학교 -->
            <div v-if="typeTab == 1" class="tabData">
              <UserTypeUniversity />
            </div>
            <!-- //학교 -->
            <!-- 나이 -->
            <div v-if="typeTab == 2" class="tabData">
              <UserTypeAge />
            </div>
            <!-- //나이 -->
            <!-- 지역 -->
            <div v-if="typeTab == 3" class="tabData">
              <UserTypeArea />
            </div>
            <!-- //지역 -->
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
import UserTypeTest from '@/views/statistics/UserTypeTest.vue'
import UserTypeUniversity from '@/views/statistics/UserTypeUniversity.vue'
import UserTypeAge from '@/views/statistics/UserTypeAge.vue'
import UserTypeArea from '@/views/statistics/UserTypeArea.vue'

export default {
  mixins: [Mixin],
  name: 'UserType',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    UserTypeTest,
    UserTypeUniversity,
    UserTypeAge,
    UserTypeArea
  },
}
</script>
