<template lang="html">
  <div>
		<div class="pageTit">
			<h2>사물함 관리</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><em>사물함 관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="lockerMgt"><!-- class 없어도 유지 -->
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
            <span class="btnArea">
              <router-link to="/mkup/school/lockerMgtExtension" class="btnM ml10">기간연장 가능 내역</router-link>
            </span>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 이데아관 -->
            <div v-if="lockerTab == 0" class="tabData">
              <LockerMgtIdea />
            </div>
            <!-- //이데아관 -->
            <!-- 아이비관 -->
            <div v-if="lockerTab == 1" class="tabData">
              <LockerMgtIvy />
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
import LockerMgtIdea from '@/views/school/LockerMgtIdea.vue'
import LockerMgtIvy from '@/views/school/LockerMgtIvy.vue'

export default {
  mixins: [Mixin],
  name: 'LockerMgt',
  data() {
    return {
      lockerTab: 0,
    }
  },
  methods: {
  },
  components: {
    LockerMgtIdea,
    LockerMgtIvy,
  },
}
</script>
