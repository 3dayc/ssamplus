<template lang="html">
  <!-- 설문조사 폼 박스 -->
  <div class="serveyWrapper">
    <div class="serveyForm">
      <!-- 헤더 -->
      <div class="serveyHeader">
        <h1>설문조사</h1>
        <div class="serveyEx">
          <p>수강생 여러분의 의견을 들려주세요.</p>
          <p>
            보다 편리한 시스템, 보다 양질의 강의 서비스를 제공하기 위한 기초자료로 사용하도록
            하겠습니다.
          </p>
        </div>
        <button @click="serveyTrigger = false" class="modalClose"></button>
      </div>
      <div class="serveyBody modalbody">
        <article class="serveyItem">
          <dl>
              <dt>
                <p>1. 재학생/졸업생입니까?</p>
              </dt>
              <dd>
                <ul>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey1" name="radioServey" checked />
                      <label for="radioServey1"><i></i>1학년</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey2" name="radioServey"/>
                      <label for="radioServey2"><i></i>2학년</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey3" name="radioServey" />
                      <label for="radioServey3"><i></i>3학년</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey4" name="radioServey" />
                      <label for="radioServey4"><i></i>4학년</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey5" name="radioServey" />
                      <label for="radioServey5"><i></i>교육대학원 재학생</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServey6" name="radioServey"  />
                      <label for="radioServey6"><i></i>졸업생</label>
                    </span>
                  </li>
                </ul>
              </dd>
            </dl>
        </article>
        <article class="serveyItem">
          <dl>
              <dt>
                <p>2. 2021학년도 대비 교원임용 설명회를 참여한 이유는?</p>
              </dt>
              <dd>
                <ul>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson1" name="reasonServey" checked />
                      <label for="radioServeyReson1"><i></i>22021학년도 대비 임용 시험제도 파악</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson2" name="reasonServey"  />
                      <label for="radioServeyReson2"><i></i>원하는 강사의 연간 커리큘럼 파악</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson3" name="reasonServey"  />
                      <label for="radioServeyReson3"><i></i>과목별 학습계획/학습전략 파악</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson4" name="reasonServey"  />
                      <label for="radioServeyReson4"><i></i>선생님과의 1:1 상담</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson5" name="reasonServey"  />
                      <label for="radioServeyReson5"><i></i>참석후 강의 할인 혜택을 받기 위해</label>
                    </span
                    >
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson6" name="reasonServey"  />
                      <label for="radioServeyReson6"><i></i>학원 시설 및 시스템을 알아보기 위해</label>
                    </span>
                  </li>
                  <li>
                    <span class="radioSet">
                      <input type="radio" id="radioServeyReson7" name="reasonServey"  />
                      <label for="radioServeyReson7"><i></i>기타</label>
                    </span>
                    <span class="textSet"><input type="text" /></span>
                  </li>
                </ul>
              </dd>
            </dl>
        </article>
      </div>
      <!-- //내용영역 -->
      <div class="boardBtn noLine">
        <button class="btnL line">취소</button>
        <button class="btnL">설문조사 완료</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupServey",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {},
};
</script>
