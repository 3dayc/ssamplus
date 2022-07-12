<template lang="html">
  <div>
    <div class="pageTit">
			<h2>강사 조회로그</h2>
			<span><router-link to="/mkup/manager/accountManager">관리자</router-link><router-link to="/mkup/manager/logManager">로그 관리</router-link><em>강사 조회로그</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="logTeacher"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:logTab===0}">
                    <button @click="logTab = 0">조회 로그</button>
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
              <LogTeacherInquiry />
            </div>
            <!-- //액션 로그 -->
            <!-- 접속 로그 -->
            <div v-if="logTab == 1" class="tabData">
              <LogTeacherAccess />
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
import LogTeacherInquiry from '@/views/manager/LogTeacherInquiry.vue'
import LogTeacherAccess from '@/views/manager/LogTeacherAccess.vue'

export default {
  mixins: [Mixin],
  name: 'LogTeacher',
  data() {
    return {
      logTab: 0,
    }
  },
  methods: {
  },
  components: {
    LogTeacherInquiry,
    LogTeacherAccess,
  },
}
</script>
