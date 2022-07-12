<template lang="html">
  <div>
    <div class="smartSubject">
      <!---->
      <div class="ssMList">
        <ul>
          <li class="on" ref="listOpen1"> <!--선생님 목록이 선택되어 있는 경우 on -->
            <span class="checkSet" @click="gotoSection($event, 'listOpen1')">
              <label>
                <i></i><strong>교육학</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
            <span class="choiceSsam"><em>김현 (교육학)</em></span>
          </li>
          <li ref="listOpen2">
            <span class="checkSet" @click="gotoSection($event, 'listOpen2')">
              <label>
                <i></i><strong>유아</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li ref="listOpen3">
            <span class="checkSet" @click="gotoSection($event, 'listOpen3')">
              <label>
                <i></i><strong>초등</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li class="on" ref="listOpen4">
            <span class="checkSet" @click="gotoSection($event, 'listOpen4')">
              <label>
                <i></i><strong>중등</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
            <span class="choiceSsam"><em>희소중국어팀(중국어), 한정은(중국어), 이해진(중국어), 류지원(영어)</em></span>
          </li>
          <li ref="listOpen5"> <!--선생님 목록이 선택되어 있는 경우 on -->
            <span class="checkSet" @click="gotoSection($event, 'listOpen5')">
              <label>
                <i></i><strong>사회/과학</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList" ref="listOpen5">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li ref="listOpen6">
            <span class="checkSet" @click="gotoSection($event, 'listOpen6')">
              <label>
                <i></i><strong>보건/특수</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li ref="listOpen7">
            <span class="checkSet" @click="gotoSection($event, 'listOpen7')">
              <label>
                <i></i><strong>논술/면접</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li ref="listOpen8">
            <span class="checkSet" @click="gotoSection($event, 'listOpen8')">
              <label>
                <i></i><strong>한능검</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
          <li ref="listOpen9">
            <span class="checkSet" @click="gotoSection($event, 'listOpen9')">
              <label>
                <i></i><strong>사서직</strong>
              </label>
            </span>
            <!-- 과목별 선생님 목록 -->
            <div class="ssKindList">
              <SmartSubjectKindList />
            </div>
            <!-- //과목별 선생님 목록 -->
          </li>
        </ul>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmartSubjectKindList from '@/views/smart/SmartSubjectKindList.vue';

export default {
  mixins: [Mixin],
  name: 'SmartSubjectM',
  components: {
    SmartSubjectKindList
  },
  data() {
    return {
      currentTab: 0,
      ssMListTab: 0
    }
  },
  methods: {
    gotoSection(event, refName) {
      if (event) {
        this.active = !this.active;
        let element = this.$refs[refName];
        this.active ? element.classList.add("open") : element.classList.remove("open");
      }
    }
  }
}
</script>
