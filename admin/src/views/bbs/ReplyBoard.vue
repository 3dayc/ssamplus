<template lang="html">
  <div>
    <div class="pageTit">
			<h2>1:1 게시판상담</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>1:1 게시판상담</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyBoard">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:replyBoardTab===0}">
                    <button @click="replyBoardTab = 0">수강/이용/환불</button>
                  </li>
                  <li :class="{on:replyBoardTab===1}">
                    <button @click="replyBoardTab = 1">임용학습상담</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 수강/이용/환불 -->
            <div v-if="replyBoardTab == 0" class="tabData">
              <ReplyBoardUse />
            </div>
            <!-- //수강/이용/환불 -->
            <!-- 임용학습상담 -->
            <div v-if="replyBoardTab == 1" class="tabData">
              <ReplyBoardLicence />
            </div>
            <!-- //임용학습상담 -->
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
import ReplyBoardUse from '@/views/bbs/ReplyBoardUse.vue'
import ReplyBoardLicence from '@/views/bbs/ReplyBoardLicence.vue'

export default {
  mixins: [Mixin],
  name: 'ReplyBoard',
  data() {
    return {
      replyBoardTab: 0,
    }
  },
  methods: {
  },
  components: {
    ReplyBoardUse,
    ReplyBoardLicence,
  }
}
</script>
