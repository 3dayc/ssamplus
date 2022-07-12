<template lang="html">
  <div>
    <div class="pageTit">
			<h2>시험정보</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link><em>시험정보</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="infoExam">
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:infoExamTab===0}">
                    <button @click="infoExamTab = 0">시험공고</button>
                  </li>
                  <li :class="{on:infoExamTab===1}">
                    <button @click="infoExamTab = 1">교육계 소식</button>
                  </li>
                  <li :class="{on:infoExamTab===2}">
                    <button @click="infoExamTab = 2">기출문제</button>
                  </li>
                  <li :class="{on:infoExamTab===3}">
                    <button @click="infoExamTab = 3">교육과정 자료실</button>
                  </li>
                  <li :class="{on:infoExamTab===4}">
                    <button @click="infoExamTab = 4">수험 자료실</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 시험공고 -->
            <div v-if="infoExamTab == 0" class="tabData">
              <InfoExamTest />
            </div>
            <!-- //시험공고 -->
            <!-- 교육계 소식 -->
            <div v-if="infoExamTab == 1" class="tabData">
              <InfoExamNews />
            </div>
            <!-- //교육계 소식 -->
            <!-- 기출문제 -->
            <div v-if="infoExamTab == 2" class="tabData">
              <InfoExamPast />
            </div>
            <!-- //기출문제 -->
            <!-- 교육과정 자료실 -->
            <div v-if="infoExamTab == 3" class="tabData">
              <InfoExamCourse />
            </div>
            <!-- //교육과정 자료실 -->
            <!-- 수험 자료실 -->
            <div v-if="infoExamTab == 4" class="tabData">
              <InfoExamLife />
            </div>
            <!-- //수험 자료실 -->
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
import InfoExamTest from '@/views/bbs/InfoExamTest.vue'
import InfoExamNews from '@/views/bbs/InfoExamNews.vue'
import InfoExamPast from '@/views/bbs/InfoExamPast.vue'
import InfoExamCourse from '@/views/bbs/InfoExamCourse.vue'
import InfoExamLife from '@/views/bbs/InfoExamLife.vue'

export default {
  mixins: [Mixin],
  name: 'InfoExam',
  data() {
    return {
      infoExamTab: 0,
    }
  },
  methods: {
  },
  components: {
    InfoExamTest,
    InfoExamNews,
    InfoExamPast,
    InfoExamCourse,
    InfoExamLife,
  },
}
</script>

<style lang="css" scoped>
</style>
