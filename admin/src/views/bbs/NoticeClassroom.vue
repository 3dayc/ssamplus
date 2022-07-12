<template lang="html">
  <div>
    <div class="pageTit">
			<h2>강의실 배정표</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link><em>강의실 배정표</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyClean">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:notiClassroomTab===0}">
                    <button @click="notiClassroomTab = 0">이데아</button>
                  </li>
                  <li :class="{on:notiClassroomTab===1}">
                    <button @click="notiClassroomTab = 1">아이비</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 이데아 -->
            <div v-if="notiClassroomTab == 0" class="tabData">
              <NoticeClassroomIdea />
            </div>
            <!-- //이데아 -->
            <!-- 아이비 -->
            <div v-if="notiClassroomTab == 1" class="tabData">
              <NoticeClassroomIvy />
            </div>
            <!-- //아이비 -->
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
import NoticeClassroomIdea from '@/views/bbs/NoticeClassroomIdea.vue'
import NoticeClassroomIvy from '@/views/bbs/NoticeClassroomIvy.vue'

export default {
  mixins: [Mixin],
  name: 'NoticeClassroom',
  data() {
    return {
      notiClassroomTab: 0,
    }
  },
  methods: {
  },
  components: {
    NoticeClassroomIdea,
    NoticeClassroomIvy,
  },
}
</script>

<style lang="css" scoped>
</style>
