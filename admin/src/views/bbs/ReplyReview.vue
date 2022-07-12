<template lang="html">
  <div>
    <div class="pageTit">
			<h2>백퍼후기</h2>
      <span><router-link to="/mkup/bbs/replyReview">게시판 관리</router-link><router-link to="/mkup/bbs/replyReview">답변게시판</router-link><em>백퍼후기</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="replyReview">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:replyReviewTab===0}">
                    <button @click="replyReviewTab = 0">수강후기</button>
                  </li>
                  <li :class="{on:replyReviewTab===2}">
                    <button @click="replyReviewTab = 2">교재도서</button>
                  </li>
                  <li :class="{on:replyReviewTab===1}" class="newCaption">
                    <button @click="replyReviewTab = 1">학습기기</button>
                  </li>
                  <li :class="{on:replyReviewTab===3}">
                    <button @click="replyReviewTab = 3">굿즈</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 수강후기 -->
            <div v-if="replyReviewTab == 0" class="tabData">
              <ReplyReviewCourse />
            </div>
            <!-- //수강후기 -->
            <!-- 학습기기 -->
            <div v-if="replyReviewTab == 1" class="tabData">
              <ReplyReviewDevice />
            </div>
            <!-- //학습기기 -->
            <!-- 교재도서 -->
            <div v-if="replyReviewTab == 2" class="tabData">
              <ReplyReviewGoods />
            </div>
            <!-- //교재도서 -->
            <!-- 굿즈 -->
            <div v-if="replyReviewTab == 3" class="tabData">
              <ReplyReviewEtc />
            </div>
            <!-- //굿즈 -->
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
import ReplyReviewCourse from '@/views/bbs/ReplyReviewCourse.vue'
import ReplyReviewDevice from '@/views/bbs/ReplyReviewDevice.vue'
import ReplyReviewGoods from '@/views/bbs/ReplyReviewGoods.vue'
import ReplyReviewEtc from '@/views/bbs/ReplyReviewEtc.vue'

export default {
  mixins: [Mixin],
  name: 'ReplyReview',
  data() {
    return {
      replyReviewTab: 0,
    }
  },
  methods: {
  },
  components: {
    ReplyReviewCourse,
    ReplyReviewDevice,
    ReplyReviewGoods,
    ReplyReviewEtc,
  }
}
</script>
