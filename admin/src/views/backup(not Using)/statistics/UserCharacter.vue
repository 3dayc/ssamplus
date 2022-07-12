<template lang="html">
  <div>
    <div class="pageTit">
      <h2>지표 관리</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/userSignup">회원 통계</router-link><em>지표 관리</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userCharacter"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:typeTab===0}">
                    <button @click="typeTab = 0">온라인</button>
                  </li>
                  <li :class="{on:typeTab===1}">
                    <button @click="typeTab = 1">서울학원</button>
                  </li>
                  <li :class="{on:typeTab===2}">
                    <button @click="typeTab = 2">대구학원</button>
                  </li>
                </ul>
                <span class="btnArea"><button class="btnDownload">다운로드</button> <!--2021-06-30--></span>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 온라인 -->
            <div v-if="typeTab == 0" class="tabData">
              <UserCharacterOnline />
            </div>
            <!-- //온라인 -->
            <!-- 서울학원 -->
            <div v-if="typeTab == 1" class="tabData">
              <UserCharacterSeoul />
            </div>
            <!-- //서울학원 -->
            <!-- 대구학원 -->
            <div v-if="typeTab == 2" class="tabData">
              <UserCharacterDaegu />
            </div>
            <!-- //대구학원 -->
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
import UserCharacterOnline from '@/views/statistics/UserCharacterOnline.vue'
import UserCharacterSeoul from '@/views/statistics/UserCharacterSeoul.vue'
import UserCharacterDaegu from '@/views/statistics/UserCharacterDaegu.vue'

export default {
  mixins: [Mixin],
  name: 'UserCharacter',
  data() {
    return {
      typeTab: 0,
    }
  },
  methods: {
  },
  components: {
    UserCharacterOnline,
    UserCharacterSeoul,
    UserCharacterDaegu,
  },
}
</script>
