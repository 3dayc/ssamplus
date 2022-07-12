<template lang="html">
  <div>
    <div class="pageTit">
			<h2>관리자 액션로그</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/logManager">로그 관리</router-link><em>관리자 액션로그</em></span>
		</div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="LogManager"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:logTab===0}">
                    <button @click="logTab = 0">액션 로그</button>
                  </li>
                  <li :class="{on:logTab===1}">
                    <button @click="logTab = 1">접속 로그</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 액션 로그 -->
            <div v-if="logTab == 0" class="tabData">
              <LogManagerAction />
            </div>
            <!-- //액션 로그 -->
            <!-- 접속 로그 -->
            <div v-if="logTab == 1" class="tabData">
              <LogManagerAccess />
            </div>
            <!-- //접속 로그 -->
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
import LogManagerAction from '@/views/manager/LogManagerAction.vue'
import LogManagerAccess from '@/views/manager/LogManagerAccess.vue'

export default {
  mixins: [Mixin],
  name: 'LogManager',
  data() {
    return {
      logTab: 0,
    }
  },
  methods: {
  },
  components: {
    LogManagerAction,
    LogManagerAccess,
  },
}
</script>
