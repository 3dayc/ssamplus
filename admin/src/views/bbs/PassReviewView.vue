<template lang="html">
  <div>
    <div class="pageTit">
			<h2>합격자 수기</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/passReview">합격수기</router-link><router-link to="/mkup/bbs/passReview">합격자 수기</router-link><em>상세</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="passReviewView">
        <!-- 설정 -->
        <div class="subTit">
          <h3>설정</h3>
          <span class="right">
            <router-link to="/mkup/bbs/passReview" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
            <router-link to="/mkup/bbs/passReview" class="btnM ml10">삭제</router-link>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="40%">
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th>BEST</th>
                <td>
                  <span class="checkSet">
                    <input type="checkbox" id="" />
                    <label for="one"><i></i>BEST 설정</label>
                  </span>
                </td>
                <th>노출 여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push1" checked>
                    <label for="push1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //설정 -->
        <div class="subTit">
          <h3>합격 수기</h3>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160">
              <col width="40%">
              <col width="160">
              <col width="*">
            </colgroup>
            <tbody>
              <tr>
                <th>ID <sup>필수</sup></th>
                <td><input type="text" class="wHalf" value="abcd1235"/><button class="btnS line ml10">조회</button></td>
                <th>합격연도 <sup>필수</sup></th>
                <td><input type="text" class="wHalf" value="2021"/></td>
              </tr>
              <tr>
                <th>응시 지역 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="" selected>서울</option>
                    </select>
                  </span>
                </td>
                <th>응시 과목 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                      <option value="" selected>유아</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>합격 인증 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="passCerti" id="passCerti1" value="passCerti1" @change="onChange($event)" checked/>
                    <label for="passCerti1"><i></i>수험번호</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="passCerti" id="passCerti2" value="passCerti2" @change="onChange($event)" />
                    <label for="passCerti2"><i></i>합격인증 첨부</label>
                  </span>
                  <div class="mt10">
                    <!-- 수험번호 -->
                    <div v-if="passCertiTr1">
                      <input type="text"/>
                    </div>
                    <!-- //수험번호 -->
                    <!-- 합격인증 첨부 -->
                    <div v-if="passCertiTr2">
                      <span class="uploadFile">
                        <input type="file" id="file"@change="fileUpload">
                        <span class="upload-name">
                          {{ fileName }}
                        </span>
                        <label for="file">불러오기</label>
                      </span>
                      <p class="infoMsg fRed mt10">※10MB까지 첨부 가능하며 jpg, gif 형식을 권장합니다.</p>
                    </div>
                    <!-- //합격인증 첨부 -->
                  </div>
                </td>
              </tr>
              <tr>
                <th>병행 여부 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="parallel" />
                    <label for=""><i></i>직장</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="parallel" checked/>
                    <label for=""><i></i>학업</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="parallel" />
                    <label for=""><i></i>육아</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="parallel" />
                    <label for=""><i></i>임용시험 공부만 전념</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>시험준비 시작 시기 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="startDate" />
                    <label for=""><i></i>대학교 재학 중</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="startDate" />
                    <label for=""><i></i>대학교 졸업 이후</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="startDate" />
                    <label for=""><i></i>대학원 재학 중</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="startDate" checked/>
                    <label for=""><i></i>대학원 졸업 후</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>1차 합격까지 준비기간 <sup>필수</sup></th>
                <td colspan="3">
                  <span class="radioSet">
                    <input type="radio" name="readyDate" />
                    <label for=""><i></i>1년 미만</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="readyDate" checked/>
                    <label for=""><i></i>1년</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="readyDate" />
                    <label for=""><i></i>2년</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="readyDate" />
                    <label for=""><i></i>3년</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="readyDate" />
                    <label for=""><i></i>4년 이상</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q1 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">시험 전까지 이론서를 반복한 횟수는?</p>
                  <span class="radioSet">
                    <input type="radio" name="q1" />
                    <label for=""><i></i>1회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q1" />
                    <label for=""><i></i>2회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q1" checked/>
                    <label for=""><i></i>3회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q1" />
                    <label for=""><i></i>4회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q1" />
                    <label for=""><i></i>5회 이상</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q2 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">기출 문제를 반복한 횟수는?</p>
                  <span class="radioSet">
                    <input type="radio" name="q2" checked/>
                    <label for=""><i></i>1회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q2" />
                    <label for=""><i></i>2회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q2" />
                    <label for=""><i></i>3회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q2" />
                    <label for=""><i></i>4회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q2" />
                    <label for=""><i></i>5회 이상</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q3 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">(1~2월) 기본이론 강의가 합격에 도움이 되었다고 생각하십니까?</p>
                  <span class="radioSet">
                    <input type="radio" name="q3" />
                    <label for=""><i></i>예</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q3" checked/>
                    <label for=""><i></i>아니오</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q4 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">(3~4월) 심화이론 강의가 합격에 도움이 되었다고 생각하십니까?</p>
                  <span class="radioSet">
                    <input type="radio" name="q4" checked/>
                    <label for=""><i></i>예</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q4" />
                    <label for=""><i></i>아니오</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q5 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">(5~6월) 기출분석 강의가 합격에 도움이 되었다고 생각하십니까?</p>
                  <span class="radioSet">
                    <input type="radio" name="q5" />
                    <label for=""><i></i>예</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q5" checked/>
                    <label for=""><i></i>아니오</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q6 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">(7~8월) 문제풀이 강의가 합격에 도움이 되었다고 생각하십니까?</p>
                  <span class="radioSet">
                    <input type="radio" name="q6" checked/>
                    <label for=""><i></i>예</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q6" />
                    <label for=""><i></i>아니오</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q7 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">(9~11월) 모의고사 강의가 합격에 도움이 되었다고 생각하십니까?</p>
                  <span class="radioSet">
                    <input type="radio" name="q7" checked/>
                    <label for=""><i></i>예</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q7" />
                    <label for=""><i></i>아니오</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q8 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">1차 합격을 위해 가장 중요하다고 생각하는 과정은?</p>
                  <span class="radioSet">
                    <input type="radio" name="q8" />
                    <label for=""><i></i>1~2월 기본이론</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q8" />
                    <label for=""><i></i>3~4월 심화이론</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q8" checked/>
                    <label for=""><i></i>5~6월 기출분석</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q8" />
                    <label for=""><i></i>7~8월 문제풀이</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q8" />
                    <label for=""><i></i>9~11월 모의고사</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>Q9 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">희소에서 진행하는 행사 중, 합격에 도움이 된 행사는?</p>
                  <span class="radioSet">
                    <input type="radio" name="q9" />
                    <label for=""><i></i>12월 합격전략 설명회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q9" />
                    <label for=""><i></i>2월 합격자 사례발표</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q9" />
                    <label for=""><i></i>6월 하반기 학습전략 설명회</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q9" />
                    <label for=""><i></i>7월 희소 현장 모의고사</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q9" checked/>
                    <label for=""><i></i>7월 희소 온라인 모의고사</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="q9" />
                    <label for=""><i></i>기타 ()</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>합격수기 제목 <sup>필수</sup></th>
                <td colspan="3">
                  <input type="text"/>
                </td>
              </tr>
              <tr>
                <th>Q10 <sup>필수</sup></th>
                <td colspan="3">
                  <strong>시기별 교직논술/교육학 학습방법</strong>
                  <span class="fRed ml10">※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</span>
                  <textarea class="mt10" rows="5">1~2월 ▶</textarea>
                  <textarea class="mt10" rows="5">3~4월 ▶</textarea>
                  <textarea class="mt10" rows="5">5~6월 ▶</textarea>
                  <textarea class="mt10" rows="5">7~8월 ▶</textarea>
                  <textarea class="mt10" rows="5">9~11월 ▶</textarea>
                </td>
              </tr>
              <tr>
                <th>Q11 <sup>필수</sup></th>
                <td colspan="3">
                  <strong>시기별 교직논술/전공 학습방법</strong>
                  <span class="fRed ml10">※시기별 학습방법에 대해 문항 별로 100자 이상 입력해 주세요.</span>
                  <textarea class="mt10" rows="5">1~2월 ▶</textarea>
                  <textarea class="mt10" rows="5">3~4월 ▶</textarea>
                  <textarea class="mt10" rows="5">5~6월 ▶</textarea>
                  <textarea class="mt10" rows="5">7~8월 ▶</textarea>
                  <textarea class="mt10" rows="5">9~11월 ▶</textarea>
                </td>
              </tr>
              <tr>
                <th>Q12 <sup>필수</sup></th>
                <td colspan="3">
                  <strong>2차 시험 학습 방법</strong>
                  <span class="fRed ml10">※2차 시험 학습 방법에 대해  문항 별로 100자 이상 입력해 주세요.</span>
                  <textarea class="mt10" rows="5">교직적성 심층면접 ▶</textarea>
                  <textarea class="mt10" rows="5">교수학습지도안/수업실연 ▶</textarea>
                  <textarea class="mt10" rows="5">전반적인 학습 방법이나 꿀팁 ▶</textarea>
                </td>
              </tr>
              <tr>
                <th>Q13 <sup>필수</sup></th>
                <td colspan="3">
                  <strong>자신만의 공부방법</strong>
                  <span class="fRed ml10">※슬럼프 극복, 체력관리, 학습 팁 등 다양한 공부 방법을 추천해주세요.</span>
                  <textarea class="mt10" rows="5"></textarea>
                </td>
              </tr>
              <tr>
                <th>Q14 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">합격에 도움이 된 선생님과 강의 활용 후기는?</p>
                  <ul>
                    <li>
                      <div class="clearBh">
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">과목</option>
                          </select>
                        </span>
                        <span class="selectSet ml10">
                          <select name="" id="">
                            <option value="no" class="label">선생님</option>
                          </select>
                        </span>
                        <span class="right">
                          <button class="btnS">선생님 추가</button>
                        </span>
                      </div>
                      <textarea class="mt10" rows="5"></textarea>
                    </li>
                    <li class="mt10">
                      <div class="clearBh">
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">과목</option>
                          </select>
                        </span>
                        <span class="selectSet ml10">
                          <select name="" id="">
                            <option value="no" class="label">선생님</option>
                          </select>
                        </span>
                        <span class="right">
                          <button class="btnS line">삭제</button>
                        </span>
                      </div>
                      <textarea class="mt10" rows="5"></textarea>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Q15 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">선생님께 감사의 편지 쓰기</p>
                  <textarea rows="5"></textarea>
                </td>
              </tr>
              <tr>
                <th>Q16 <sup>필수</sup></th>
                <td colspan="3">
                  <p class="fBold mb10">후배들에게 전하고 싶은 메세지</p>
                  <textarea rows="5"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--관리-->
        <div class="subTit"><h3>관리</h3></div>
        <div class="tvs record">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수정 이력</th>
                <td>
                  <ul class="recordList">
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   제목 변경 </li>
                    <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong>   BEST설정 변경 </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--//관리-->
        <!-- front URL -->
        <div class="frontUrlInfo mt20">Front URL : <a href="https://ssamplus.com/pass/123456" target="_blank">https://ssamplus.com/pass/123456</a></div>
        <!-- //front URL -->
      </div>
      <!-- //page layout -->
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'passReviewView',
  data() {
    return {
      passCertiTr1: true,
      passCertiTr2: false,
      fileName: '',
    }
  },
  methods: {
    onChange(event) {
      let optionText = event.target.value;

      this.passCertiTr1 = false;
      this.passCertiTr2 = false;

      if (optionText == 'passCerti1') {
        this.passCertiTr1 = true;
      } else {
        this.passCertiTr2 = true;
      }
    },
    fileUpload(event) {
      this.fileName = event.target.value;
    }, // 파일 업로드
  },
  components: {
  }
}
</script>
