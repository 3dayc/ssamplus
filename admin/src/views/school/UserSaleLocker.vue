<template lang="html">
  <div>
		<div class="pageTit">
			<h2>수강생 판매</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><router-link to="/mkup/school/userSale">수강생 판매</router-link><em>사물함 신청</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="userSaleLocker"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:lockerTab===0}">
                    <button @click="lockerTab = 0">이데아관</button>
                  </li>
                  <li :class="{on:lockerTab===1}">
                    <button @click="lockerTab = 1">아이비관</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 이데아관 -->
            <div v-if="lockerTab == 0" class="tabData">
              <UserSaleLockerIdea />
            </div>
            <!-- //이데아관 -->
            <!-- 아이비관 -->
            <div v-if="lockerTab == 1" class="tabData">
              <UserSaleLockerIvy />
            </div>
            <!-- //아이비관 -->
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
import UserSaleLockerIdea from '@/views/school/UserSaleLockerIdea.vue'
import UserSaleLockerIvy from '@/views/school/UserSaleLockerIvy.vue'

export default {
  mixins: [Mixin],
  name: 'UserSaleLocker',
  data() {
    return {
      lockerTab: 0,
    }
  },
  methods: {
  },
  components: {
    UserSaleLockerIdea,
    UserSaleLockerIvy,
  },
}
</script>
