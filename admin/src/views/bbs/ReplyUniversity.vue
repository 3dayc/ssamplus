<template lang="html">
  <div>
    <div class="pageTit">
			<h2>대학제휴 문의</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>대학제휴 문의</em></span>
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
                  <li :class="{on:replyTab===0}">
                    <button @click="replyTab = 0">대학제휴</button>
                  </li>
                  <li :class="{on:replyTab===1}">
                    <button @click="replyTab = 1">설명회&특강</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 신고 목록 -->
            <div v-if="replyTab == 0" class="tabData">
              <ReplyUniversityPartner />
            </div>
            <!-- //신고 목록 -->
            <!-- 명단 공개 -->
            <div v-if="replyTab == 1" class="tabData">
              <ReplyUniversitySpecial />
            </div>
            <!-- //명단 공개 -->
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
import ReplyUniversityPartner from '@/views/bbs/ReplyUniversityPartner.vue'
import ReplyUniversitySpecial from '@/views/bbs/ReplyUniversitySpecial.vue'

export default {
  mixins: [Mixin],
  name: 'ReplyClean',
  data() {
    return {
      replyTab: 0,
    }
  },
  methods: {
  },
  components: {
    ReplyUniversityPartner,
    ReplyUniversitySpecial
  },
}
</script>

<style lang="css" scoped>
</style>
