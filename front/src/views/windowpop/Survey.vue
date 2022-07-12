<template lang="html">
  <div id="windowLayout" class="survey">
    <div class="winHeader">
      <h1>설문조사</h1>
    </div>
    <div class="winContent">
      <div class="surveyList">
        <dl>
          <dt>1. 재학생/졸업생입니까?</dt>
          <dd>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>1학년</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>2학년</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>3학년</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>4학년</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>교육대학원 재학생</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>졸업생</label>
            </span>
          </dd>
        </dl>
        <dl>
          <dt>2. 2021학년도 대비 교원임용 설명회를 참여한 이유는?</dt>
          <dd>
            <span class="radioSet">
              <input type="radio" name="radio2" />
              <label for=""><i></i>2021학년도 대비 임용시험제도 파악</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio2" />
              <label for=""><i></i>원하는 강사의 연간 커리큘럼 파악</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio2" />
              <label for=""><i></i>과목별 학습계획/학습전략 파악</label>
            </span>
            <div class="etc">
              <span class="radioSet">
                <input type="radio" name="radio2"/>
                <label for=""><i></i>직접입력</label>
              </span>
              <input type="text"/>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>3. 이번 설명회의 어떤 부분이 가장 도움 되셨나요?</dt>
          <dd>
            <textarea></textarea>
          </dd>
        </dl>
      </div>
    </div>
    <div class="winBtn">
      <button class="btnL line">취소</button>
      <button class="btnL">완료</button>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Survey',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
