<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="passReviewWrite">
          <div class="subTit">
            <h3>합격수기 작성</h3>
          </div>
          <div class="reviewPoll">
            <dl class="first">
              <dt class="hidden">과목</dt>
              <dd>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">응시지역</option>
                    <option value="">Select Option 2</option>
                    <option value="">Select Option 3</option>
                    <option value="">Select Option 4</option>
                  </select>
                </span>
                <!-- <multiselect 
                  class="baseMultiSelect" 
                  v-model="multiValue2" 
                  :options="optionsMulti2" 
                  :multiple="false" 
                  :close-on-select="true" 
                  group-values="dep2" 
                  group-label="dep1" 
                  :group-select="false" 
                  :searchable="false"
                  placeholder="응시과목" 
                  track-by="name" 
                  label="name">
                  <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                </multiselect> -->
                <!-- <span class="selectSet">
                  <select name="" id="">
                    <option value="">분류</option>
                    <option value="">전체</option>
                  </select>
                </span> -->
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">분류</option>
                    <option value="">전체</option>
                  </select>
                </span>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">전공</option>
                    <option value="">유아</option>
                    <option value="">교육학</option>
                    <option value="">국어</option>
                    <option value="">수학</option>
                    <option value="">중국어</option>
                    <option value="">음악</option>
                  </select>
                </span>
                <!-- <input type="number" placeholder="합격연도 (숫자 4자리)"  v-if="!this.mobile" /> -->
              </dd>
            </dl>
            <dl v-if="this.mobile">
              <dt>합격연도 <sup>(필수항목)</sup></dt>
              <dd>
                <input type="number" placeholder="숫자 4자리 입력 가능" />
              </dd>
            </dl>
            <dl class="proofCase">
              <dt>
                <span :class="{radioSet:!this.mobile,on:proofTrigger01 === true}">
                  <input type="radio" name="radio0" id="rd001" value="proof1" checked @change="onChange($event)" />
                  <label for="rd001"><i></i>수험번호</label>
                </span>
                <span :class="{radioSet:!this.mobile, on:proofTrigger02 === true}">
                  <input type="radio" name="radio0" id="rd002" value="proof2" @change="onChange($event)" />
                  <label for="rd002"><i></i>합격인증 첨부</label>
                </span>
              </dt>
              <dd v-if="proofTrigger01"><input type="text" /></dd>
              <dd v-if="proofTrigger02">
                <div class="uploadFileSet">
                  <em></em>
                  <span class="uploadFile">
                    <input type="file" id="fileUpload"/>
                    <label for="fileUpload">첨부파일</label>
                  </span>
                </div>
                <p>※10MB까지 첨부 가능하며 jpg, gif 형식을 권장합니다.</p>
              </dd>
            </dl>
            <dl>
              <dt>병행 여부 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd101" />
                  <label for="rd101"><i></i>직장</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd102" />
                  <label for="rd102"><i></i>학업</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd103" />
                  <label for="rd103"><i></i>육아</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd104" />
                  <label for="rd104"><i></i>임용시험</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio1" id="rd105" />
                  <label for="rd105"><i></i>공부만 전념</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>시험준비시작 시기 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd201" />
                  <label for="rd201"><i></i>대학교 재학 중</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd202" />
                  <label for="rd202"><i></i>대학교 졸업 이후</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd203" />
                  <label for="rd203"><i></i>대학원 재학 중</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio2" id="rd204" />
                  <label for="rd204"><i></i>대학원 졸업 이후</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>1차 합격까지 준비기간 <sup>(필수항목)</sup></dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd301" />
                  <label for="rd301"><i></i>1년 미만</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd302" />
                  <label for="rd302"><i></i>1년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd303" />
                  <label for="rd303"><i></i>2년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd304" />
                  <label for="rd304"><i></i>3년</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio3" id="rd305" />
                  <label for="rd305"><i></i>4년 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q1. 시험 전까지 이론서를 반복한 횟수는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd401" />
                  <label for="rd401"><i></i>1회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd402" />
                  <label for="rd402"><i></i>2회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd403" />
                  <label for="rd403"><i></i>3회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd404" />
                  <label for="rd404"><i></i>4회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio4" id="rd405" />
                  <label for="rd405"><i></i>5회 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q2. 기출 문제를 반복한 횟수는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd501" />
                  <label for="rd501"><i></i>1회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd502" />
                  <label for="rd502"><i></i>2회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd503" />
                  <label for="rd503"><i></i>3회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd504" />
                  <label for="rd504"><i></i>4회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio5" id="rd505" />
                  <label for="rd505"><i></i>5회 이상</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q3. (1~2월) 기본이론 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio6" id="rd601" />
                  <label for="rd601"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio6" id="rd602" />
                  <label for="rd602"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q4. (3~4월) 심화이론 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio7" id="rd701" />
                  <label for="rd701"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio7" id="rd702" />
                  <label for="rd702"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q5. (5~6월) 기출분석 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio8" id="rd801" />
                  <label for="rd801"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio8" id="rd802" />
                  <label for="rd802"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q6. (7~8월) 문제풀이 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio9" id="rd901" />
                  <label for="rd901"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio9" id="rd902" />
                  <label for="rd902"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q7. (9~11월) 모의고사 강의가 합격에 도움이 되었다고 생각하십니까?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio10" id="rd1001" />
                  <label for="rd1001"><i></i>예</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio10" id="rd1002" />
                  <label for="rd1002"><i></i>아니오</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q8. 1차 합격을 위해 가장 중요하다고 생각하는 과정은?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1101" />
                  <label for="rd1101"><i></i>1~2월 기본이론</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1102" />
                  <label for="rd1102"><i></i>3~4월 심화이론</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1103" />
                  <label for="rd1103"><i></i>5~6월 기출분석</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1104" />
                  <label for="rd1104"><i></i>7~8월 문제풀이</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio11" id="rd1105" />
                  <label for="rd1105"><i></i>9~11월 모의고사</label>
                </span>
              </dd>
            </dl>
            <dl>
              <dt>Q9. 희소에서 진행하는 행사 중, 합격에 도움이 된 행사는?</dt>
              <dd>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1201" />
                  <label for="rd1201"><i></i>12월 합격전략 설명회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1202" />
                  <label for="rd1202"><i></i>2월 합격자 사례발표</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1203" />
                  <label for="rd1203"><i></i>6월 하반기 학습전략 설명회</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1204" />
                  <label for="rd1204"><i></i>7월 희소 현장 모의고사</label>
                </span>
                <span class="radioSet">
                  <input type="radio" name="radio12" id="rd1205" />
                  <label for="rd1205"><i></i>7월 희소 온라인 모의고사</label>
                </span>
                <div class="etc">
                  <span class="radioSet">
                    <input type="radio" name="radio12" id="rd1206" />
                    <label for="rd1206"><i></i>기타</label>
                  </span>
                  <input type="text" />
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="hidden">합격 수기 제목 입력</dt>
              <dd class="tit"><input type="text" placeholder="합격 수기 제목 입력" /></dd>
            </dl>
            <dl>
              <dt>Q10. 시기별 교직논술/교육학 학습방법
              <p>※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>1~2월</span>
                <div v-if="!this.mobile"><textarea></textarea></div> <!-- 2021-11-18 PC버전으로 분기적용 (이하 모두 동일) -->
                <div v-else-if="this.mobile" class="mTextArea" @click="month1 = 1, recordPop1 = true"><div>내용의 일부가 들어갈것 같습니다. 최대 높이가 있어서 자동으로 줄바꿈이 되고 팝업에서 Full로 보이게 될거예요. <br/>최대 3줄까지로 고려하고 있습니다. 입력할 때의 줄바꿈은 꼭 적용해주세요.</div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>3~4월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month1 = 2, recordPop1 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>5~6월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month1 = 3, recordPop1 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>7~8월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month1 = 4, recordPop1 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>9~11월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month1 = 5, recordPop1 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl>
              <dt>Q11. 시기별 교직논술/전공 학습방법
              <p>※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>1~2월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month2 = 1, recordPop2 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>3~4월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month2 = 2, recordPop2 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>5~6월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month2 = 3, recordPop2 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>7~8월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month2 = 4, recordPop2 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>9~11월</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="month2 = 5, recordPop2 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl>
              <dt>Q12. 2차 시험 학습 방법
              <p>※2차 시험 학습 방법에 대해 문항 별로 100자 이상 입력해 주세요.</p></dt>
              <dd class="multyTextarea">
                <span>교직적성 심층면접</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="way = 1, recordPop3 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>교수학습지도안/수업실연</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="way = 2, recordPop3 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
                <span>전반적인 학습 방법이나 꿀팁</span>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="way = 3, recordPop3 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl>
              <dt>Q13. 자신만의 공부방법
              <p>※슬럼프 극복, 체력관리, 학습 팁 등 다양한 공부 방법을 추천해주세요.</p></dt>
              <dd>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="recordPop4 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl class="helpSsam">
              <dt>Q14. 합격에 도움이 된 선생님과 강의 활용 후기는?</dt>
              <dd>
                <!-- 2021-11-18 PC버전으로 분기적용 (이하 모두 동일) -->
                <div v-if="!this.mobile">
                  <!--Loop-->
                  <div class="first">
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">응시지역</option>
                        <option value="">Select Option 2</option>
                        <option value="">Select Option 3</option>
                        <option value="">Select Option 4</option>
                      </select>
                    </span>
                    <multiselect 
                      class="baseMultiSelect" 
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      :close-on-select="true" 
                      group-values="dep2" 
                      group-label="dep1" 
                      :group-select="false" 
                      :searchable="false"
                      placeholder="응시과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                    <textarea class="mt10"></textarea>
                    <button class="btnM line">선생님 추가</button>
                  </div>
                  <!--//Loop-->
                  <div>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">응시지역</option>
                        <option value="">Select Option 2</option>
                        <option value="">Select Option 3</option>
                        <option value="">Select Option 4</option>
                      </select>
                    </span>
                    <multiselect 
                      class="baseMultiSelect" 
                      v-model="multiValue2" 
                      :options="optionsMulti2" 
                      :multiple="false" 
                      :close-on-select="true" 
                      group-values="dep2" 
                      group-label="dep1" 
                      :group-select="false" 
                      :searchable="false"
                      placeholder="응시과목" 
                      track-by="name" 
                      label="name">
                      <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                    </multiselect>
                    <textarea class="mt10"></textarea>
                    <button class="btnM line del">선생님 삭제</button>
                    <!-- <button class="btnM line">선생님추가</button> -->
                  </div>
                </div>
                <!-- //2021-11-18 PC버전으로 분기적용 (이하 모두 동일) -->
                <!-- 2021-11-18 모바일 버전 적용 -->
                <div v-else-if="this.mobile" class="mHelpSsam">
                  <!--Loop-->
                  <div class="first">
                    <span @click="ssamRecordTrigger = 1, recordPop5 = true">
                      <span class="selectSet">응시지역</span>
                      <span class="selectSet">응시과목</span>
                      <div class="mTextArea"><div></div></div>
                      <button class="btnM line">선생님 추가</button>
                    </span>
                  </div>
                  <!--//Loop-->
                  <div>
                    <span class="addSet" @click="ssamRecordTrigger = 2, recordPop5 = true">
                      <span class="selectSet">응시지역</span>
                      <span class="selectSet">응시과목</span>
                      <div class="mTextArea"><div></div></div>
                    </span>
                    <button class="btnM line del">선생님 삭제</button>
                  </div>
                </div>
                 <!-- //2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl>
              <dt>Q15. 선생님께 감사의 편지 쓰기</dt>
              <dd>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="recordPop6 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
            <dl>
              <dt>Q16. 후배들에게 전하고 싶은 메세지</dt>
              <dd>
                <div v-if="!this.mobile"><textarea></textarea></div>
                <div v-else-if="this.mobile" class="mTextArea" @click="recordPop7 = true"><div></div></div> <!-- 2021-11-18 모바일 버전 적용 -->
              </dd>
            </dl>
          </div>
          <!-- 상세 버튼영역 -->
          <div class="boardBtn noLine">
            <router-link to="/mkup/mypage/counsel/bbs" class="btnL line">취소</router-link>
            <router-link to="/mkup/mypage/counsel/bbs" class="btnL">확인</router-link>
          </div>
          <!-- //상세 버튼영역 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

  <!-- 2021-11-18 모바일용 Popup -->
  <Popup v-if='recordPop1' @close="recordPop1 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q10. 시기별 교직논술/교육학 학습방법</h1>
      </div>
      <button @click="recordPop1 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <div v-if="month1 == 1">
        <strong>1~2월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month1 == 2">
        <strong>3~4월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month1 == 3">
        <strong>5~6월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month1 == 4">
        <strong>7~8월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month1 == 5">
        <strong>9~11월</strong>
        <textarea></textarea>
      </div>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnL line" v-if="month1 == 2" @click="month1 = 1">이전</button>
        <button class="btnL line" v-if="month1 == 3" @click="month1 = 2">이전</button>
        <button class="btnL line" v-if="month1 == 4" @click="month1 = 3">이전</button>
        <button class="btnL line" v-if="month1 == 5" @click="month1 = 4">이전</button>
        <button class="btnL" @click="recordPop1 = false">확인</button>
        <button class="btnL line" v-if="month1 == 1" @click="month1 = 2">다음</button>
        <button class="btnL line" v-if="month1 == 2" @click="month1 = 3">다음</button>
        <button class="btnL line" v-if="month1 == 3" @click="month1 = 4">다음</button>
        <button class="btnL line" v-if="month1 == 4" @click="month1 = 5">다음</button>
        <button class="btnL line" v-if="month1 == 5" @click="recordPop1 = false, recordPop2 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop2' @close="recordPop2 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q11. 시기별 교직논술/전공 학습방법</h1>
      </div>
      <button @click="recordPop2 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <div v-if="month2 == 1">
        <strong>1~2월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month2 == 2">
        <strong>3~4월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month2 == 3">
        <strong>5~6월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month2 == 4">
        <strong>7~8월</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="month2 == 5">
        <strong>9~11월</strong>
        <textarea></textarea>
      </div>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" v-if="month2 == 1" @click="month1 = 5, recordPop1 = true, recordPop2 = false">이전</button>
        <button class="btnM line" v-if="month2 == 2" @click="month2 = 1">이전</button>
        <button class="btnM line" v-if="month2 == 3" @click="month2 = 2">이전</button>
        <button class="btnM line" v-if="month2 == 4" @click="month2 = 3">이전</button>
        <button class="btnM line" v-if="month2 == 5" @click="month2 = 4">이전</button>
        <button class="btnM" @click="recordPop2 = false">확인</button>
        <button class="btnM line" v-if="month2 == 1" @click="month2 = 2">다음</button>
        <button class="btnM line" v-if="month2 == 2" @click="month2 = 3">다음</button>
        <button class="btnM line" v-if="month2 == 3" @click="month2 = 4">다음</button>
        <button class="btnM line" v-if="month2 == 4" @click="month2 = 5">다음</button>
        <button class="btnM line" v-if="month2 == 5" @click="recordPop2 = false, recordPop3 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop3' @close="recordPop3 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q12. 2차 시험 학습 방법</h1>
      </div>
      <button @click="recordPop3 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <div v-if="way == 1">
        <strong>교직적성 심층면접</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="way == 2">
        <strong>교수학습지도안/수업실연</strong>
        <textarea></textarea>
      </div>
      <div v-else-if="way == 3">
        <strong>전반적인 학습 방법이나 꿀팁</strong>
        <textarea></textarea>
      </div>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" v-if="way == 1" @click="month1 = 5, recordPop2 = true, recordPop3 = false">이전</button>
        <button class="btnM line" v-if="way == 2" @click="way = 1">이전</button>
        <button class="btnM line" v-if="way == 3" @click="way = 2">이전</button>
        <button class="btnM" @click="recordPop3 = false">확인</button>
        <button class="btnM line" v-if="way == 1" @click="way = 2">다음</button>
        <button class="btnM line" v-if="way == 2" @click="way = 3">다음</button>
        <button class="btnM line" v-if="way == 3" @click="recordPop3 = false, recordPop4 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop4' @close="recordPop4 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q13. 자신만의 공부방법</h1>
      </div>
      <button @click="recordPop4 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <textarea></textarea>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" @click="way = 3, recordPop3 = true, recordPop4 = false">이전</button>
        <button class="btnM" @click="recordPop4 = false">확인</button>
        <button class="btnM line" @click="recordPop4 = false, recordPop5 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop5' @close="recordPop5 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q14. 합격에 도움이 된 선생님과 강의 활용 후기는?</h1>
      </div>
      <button @click="recordPop5 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <div class="ssamRecord">
        <div class="first" v-if="ssamRecordTrigger == 1">
          <span class="selectSet">
            <select name="" id="">
              <option value="">응시지역</option>
              <option value="">Select Option 2</option>
              <option value="">Select Option 3</option>
              <option value="">Select Option 4</option>
            </select>
          </span>
          <span class="selectSet">
            <select name="" id="">
              <option value="">응시과목</option>
              <option value="">Select Option 2</option>
              <option value="">Select Option 3</option>
              <option value="">Select Option 4</option>
            </select>
          </span>
          <textarea class="mt10"></textarea>
        </div>
        <div v-if="ssamRecordTrigger == 2">
          <span class="selectSet">
            <select name="" id="">
              <option value="">응시지역</option>
              <option value="">Select Option 2</option>
              <option value="">Select Option 3</option>
              <option value="">Select Option 4</option>
            </select>
          </span>
          <span class="selectSet">
            <select name="" id="">
              <option value="">응시과목</option>
              <option value="">Select Option 2</option>
              <option value="">Select Option 3</option>
              <option value="">Select Option 4</option>
            </select>
          </span>
          <textarea class="mt10"></textarea>
          <button class="btnDelete">삭제</button>
        </div>
      </div>
      <button class="btnM line mt10" v-if="ssamRecordTrigger == 1" @click="ssamRecordTrigger = 2">+ 선생님추가</button>
      <button class="btnM line mt10" v-if="ssamRecordTrigger == 2" >+ 선생님추가</button>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" v-if="ssamRecordTrigger == 1" @click="recordPop4 = true, recordPop5 = false">이전</button>
        <button class="btnM line" v-if="ssamRecordTrigger == 2" @click="ssamRecordTrigger = 1">이전</button>
        <button class="btnM" @click="recordPop5 = false">확인</button>
        <button class="btnM line" v-if="ssamRecordTrigger == 1" @click="ssamRecordTrigger = 2">다음</button>
        <button class="btnM line" v-if="ssamRecordTrigger == 2" @click="recordPop5 = false, recordPop6 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop6' @close="recordPop6 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q15. 선생님께 감사의 편지 쓰기</h1>
      </div>
      <button @click="recordPop6 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <textarea></textarea>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" @click="ssamRecordTrigger = 1, recordPop5 = true, recordPop6 = false">이전</button>
        <button class="btnM" @click="recordPop6 = false">확인</button>
        <button class="btnM line" @click="recordPop6 = false, recordPop7 = true">다음</button>
      </div>
    </template>
  </Popup>
  <Popup v-if='recordPop7' @close="recordPop7 = false" class="passAfterPop">
    <template slot="modalheader">
      <div>
        <h1>Q16. 후배들에게 전하고 싶은 메세지</h1>
      </div>
      <button @click="recordPop7 = false" class="modalClose">close</button>
    </template>
    <template slot="modalbody">
      <textarea></textarea>
    </template>
    <template slot="modalfooter">
      <div class="modalBtn">
        <button class="btnM line" @click="recordPop6 = true, recordPop7 = false">이전</button>
        <button class="btnM" @click="recordPop7 = false">확인</button>
      </div>
    </template>
  </Popup>
  <!-- // 2021-11-18 모바일용 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PassReviewWrite',
  components: {
  },
  data() {
    return {
      proofTrigger01:true,
      proofTrigger02:false,
      recordPop1 :false,
      recordPop2 :false,
      recordPop3 :false,
      recordPop4 :false,
      recordPop5 :false,
      recordPop6 :false,
      recordPop7 :false,
      month1 : 1,
      month2 : 1,
      way : 1,
      ssamRecordTrigger : 1,
      multiValue2: null,
      optionsMulti2: [
        {
          dep1: '교육학',
          dep2: [
            { name: '교육학', category: 'subject01' },
          ]
        },
        {
          dep1: '논술·면접',
          dep2: [
            { name: '면접', category: 'subject02' },
            { name: '논술', category: 'subject02' },
          ]
        },
        {
          dep1: '유아',
          dep2: [
            { name: '유아', category: 'subject03' },
          ]
        },
        {
          dep1: '초등',
          dep2: [
            { name: '초등', category: 'subject04' },
          ]
        },
        {
          dep1: '중등',
          dep2: [
            { name: '국어', category: 'subject05' },
            { name: '영어', category: 'subject05' },
            { name: '수학교육론', category: 'subject05' },
          ]
        }
      ],
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;
        this.proofTrigger01 = true;
        this.proofTrigger02 = false;

      if (optionText == 'proof1') {
        this.proofTrigger01 = true;
        this.proofTrigger02 = false;
      } else {
        this.proofTrigger01 = false;
        this.proofTrigger02 = true;
      }
    },
  },
}
</script>
