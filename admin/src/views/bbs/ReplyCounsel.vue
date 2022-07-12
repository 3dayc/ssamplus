<template lang="html">
  <div>
    <div class="pageTit">
			<h2>1:1 상담</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>1:1 상담</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyCounsel">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:replyTab===0}">
                    <button @click="replyTab = 0">학원 상담</button>
                  </li>
                  <li :class="{on:replyTab===1}">
                    <button @click="replyTab = 1">선생님 상담</button>
                  </li>
                  <li :class="{on:replyTab===2}">
                    <button @click="replyTab = 2">상담자 일정</button>
                  </li>
                  <li :class="{on:replyTab===3}">
                    <button @click="replyTab = 3">선생님 일정</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 관리자 발송 -->
            <div v-if="replyTab == 0" class="tabData">
              <ReplyCounselDirect />
            </div>
            <!-- //관리자 발송 -->
            <!-- 매크로 발송 -->
            <div v-if="replyTab == 1" class="tabData">
              <ReplyCounselTeacher />
            </div>
            <!-- //매크로 발송 -->
            <!-- 시스템 발송 목록 -->
            <div v-if="replyTab == 2" class="tabData">
              <ReplyCounselSchedule />
            </div>
            <!-- //시스템 발송 목록 -->
            <!-- 시스템 발송 목록 -->
            <div v-if="replyTab == 3" class="tabData">
              <ReplyCounselScheduleTeacher />
            </div>
            <!-- //시스템 발송 목록 -->
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
import ReplyCounselDirect from '@/views/bbs/ReplyCounselDirect.vue'
import ReplyCounselTeacher from '@/views/bbs/ReplyCounselTeacher.vue'
import ReplyCounselSchedule from '@/views/bbs/ReplyCounselSchedule.vue'
import ReplyCounselScheduleTeacher from '@/views/bbs/ReplyCounselScheduleTeacher.vue'

export default {
  mixins: [Mixin],
  name: 'ReplyCounsel',
  data() {
    return {
      replyTab: 0,
    }
  },
  methods: {
  },
  components: {
    ReplyCounselDirect,
    ReplyCounselTeacher,
    ReplyCounselSchedule,
    ReplyCounselScheduleTeacher,
  },
}
</script>

<style lang="css" scoped>
</style>
