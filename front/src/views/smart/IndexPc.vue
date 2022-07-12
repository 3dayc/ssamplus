<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="smartIndex">
          <div class="frameBack">
            <!-- 서브 타이틀 -->
            <div class="subTit noLine">
              <h2>SMART 수강신청</h2>
            </div>
            <!-- //서브 타이틀 -->
          </div>
          <div class="smartStep">
            <div class="frameBack">
              <button class="btnSRefresh" @click="currentTab = 0">새로고침</button>
              <ol>
                <li class="step01" :class="{on:currentTab===0, end:currentTab!=0}">
                  <strong @click="currentTab = 0">과목, 선생님</strong>
                  <div>김현(교육학), 윤중샘(교육학), 희소중국어팀(중국어), 한정은(중국어), 이해진(중국어), 류지원(영어), 김현(교육학)</div>
                </li>
                <li class="step02" :class="{on:currentTab===1, end:currentTab>1}">
                  <strong @click="currentTab = 1">강좌</strong>
                  <div>연간쌤팩 베이직, 심화이론반1</div>
                </li>
                <li class="step03" :class="{on:currentTab===2, end:currentTab>2}">
                  <strong @click="currentTab = 2">교재</strong>
                  <div>그린키위 교육학 (그린편 상권), 키위잼</div>
                </li>
                <li class="step04" :class="{on:currentTab===3}">
                  <strong @click="currentTab = 3">수강신청</strong>
                  <div>1,805,000원</div>
                </li>
              </ol>
            </div>
          </div>
          <div class="frameBack">
            <div v-if="currentTab == 0">
              <SmartSubject /><!--과목, 선생님-->
            </div>
            <div v-if="currentTab == 1">
              <SmartLecture /><!--강좌-->
            </div>
            <div v-if="currentTab == 2">
              <SmartBook /><!--교재-->
            </div>
            <div v-if="currentTab == 3">
              <SmartApply /><!--수강신청-->
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 0">
            <div class="frameBack">
              <button class="pageGo prev" disabled>이전</button>
              <div class="choiceArea">
                <SmartSubjectChoiced /><!--과목, 선생님-->
              </div>
              <button class="pageGo next" @click="currentTab = 1">다음</button>
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 1">
            <div class="frameBack">
              <button class="pageGo prev" @click="currentTab = 0">이전</button>
              <div class="choiceArea">
                <SmartLectureChoiced /><!--강좌-->
              </div>
              <button class="pageGo next" @click="currentTab = 2">다음</button>
            </div>
          </div>
          <div class="smartFoot" v-if="currentTab == 2">
            <div class="frameBack">
              <button class="pageGo prev" @click="currentTab = 1">이전</button>
              <div class="choiceArea">
                <SmartBookChoiced /><!---교재-->
              </div>
              <button class="pageGo next" @click="currentTab = 3">다음</button>
            </div>
          </div>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmartSubject from '@/views/smart/SmartSubject.vue';
import SmartLecture from '@/views/smart/SmartLecture.vue';
import SmartBook from '@/views/smart/SmartBook.vue';
import SmartApply from '@/views/smart/SmartApply.vue';
import SmartSubjectChoiced from '@/views/smart/SmartSubjectChoiced.vue';
import SmartLectureChoiced from '@/views/smart/SmartLectureChoiced.vue';
import SmartBookChoiced from '@/views/smart/SmartBookChoiced.vue';

export default {
  mixins: [Mixin],
  name: 'IndexPc',
  components: {
    SmartSubject,
    SmartLecture,
    SmartBook,
    SmartApply,
    SmartSubjectChoiced,
    SmartLectureChoiced,
    SmartBookChoiced
  },
  data() {
    return {
      currentTab: 0,
    }
  },
}
</script>
