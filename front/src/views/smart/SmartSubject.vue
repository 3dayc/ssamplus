<template lang="html">
  <div>
    <div class="smartSubject gridSet">
      <!---->
      <div class="gridItem ssList">
        <h3>과목, 선생님</h3>
        <ul>
          <li :class="{on:ssListTab===1}" @click="ssListTab = 1">
            <span class="checkSet">
              <input type="checkbox" id="sscheck1" checked />
              <label for="sscheck1">
                <i></i><strong>교육학</strong>
                <span><em><div>김현(교육학), 윤중샘(교육학)</div></em></span>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===2}" @click="ssListTab = 2">
            <span class="checkSet">
              <input type="checkbox" id="sscheck2" />
              <label for="sscheck2">
                <i></i><strong>유아</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===3}" @click="ssListTab = 3">
            <span class="checkSet">
              <input type="checkbox" id="sscheck3" />
              <label for="sscheck3">
                <i></i><strong>초등</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===4}" @click="ssListTab = 4">
            <span class="checkSet">
              <input type="checkbox" id="sscheck4" checked />
              <label for="sscheck4">
                <i></i><strong>중등</strong>
                <span><em><div>희소중국어팀(중국어), 한정은(중국어), 이해진(중국어), 류지원(영어)</div></em></span>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===5}" @click="ssListTab = 5">
            <span class="checkSet">
              <input type="checkbox" id="sscheck5" />
              <label for="sscheck5">
                <i></i><strong>사회/과학</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===6}" @click="ssListTab = 6">
            <span class="checkSet">
              <input type="checkbox" id="sscheck6" />
              <label for="sscheck6">
                <i></i><strong>보건/특수</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===7}" @click="ssListTab = 7">
            <span class="checkSet">
              <input type="checkbox" id="sscheck7" />
              <label for="sscheck7">
                <i></i><strong>논술/면접</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===8}" @click="ssListTab = 8">
            <span class="checkSet">
              <input type="checkbox" id="sscheck8" />
              <label for="sscheck8">
                <i></i><strong>한능검</strong>
              </label>
            </span>
          </li>
          <li :class="{on:ssListTab===9}" @click="ssListTab = 9">
            <span class="checkSet">
              <input type="checkbox" id="sscheck9" />
              <label for="sscheck9">
                <i></i><strong>사서직</strong>
              </label>
            </span>
          </li>
        </ul>
      </div>
      <!---->
      <div class="gridItem ssKindList">
        <p class="guideBox info">과목별로 수강하고자 하는 선생님을 선택해 주세요. (복수 선택 가능)</p>
        <!-- 과목별 선생님 목록 -->
        <SmartSubjectKindList />
        <!-- //과목별 선생님 목록 -->
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
  name: 'SmartSubject',
  components: {
    SmartSubjectKindList
  },
  data() {
    return {
      currentTab: 0,
      ssListTab:1,
    }
  },
}
</script>
