<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>단과검색</h1>
      <span class="supTxt">* 단과 강좌를 검색 및 선택할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <!-- 검색조건 -->
          <div class="boardTop">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">직/인강</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">연도</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">선생님</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="" disabled>
                        <option value="no" class="label">단과</option>
                        <option value="">패키지</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="강좌명, 강좌번호 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
              </div>
              <span class="checkSet">
                <input type="checkbox" id="sorting" checked>
                <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
              </span>
            </div>
          </div>
          <!-- //검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60">
                  <col width="80">
                  <col width="120"><!-- 2021-12-29 너비 수정 -->
                  <col width="120"><!-- 2021-12-29 너비 수정 -->
                  <col width="*">
                  <col width="150">
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">직/인강</th>
                    <th>강좌번호</th>
                    <th>선생님</th>
                    <th>강좌명</th>
                    <th>수강료</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk2">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk3">
                        <label for="chk3"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk2">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk3">
                        <label for="chk3"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk2">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk3">
                        <label for="chk3"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                  <!-- //데이터 없을 경우 -->
                </tbody>
              </table>
            </div>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- 선택내역 -->
        <div class="chView">
          <h3>
            <strong>선택내역</strong>
            <span class="right">
              <button class="btnM green" @click="toastPop('error', '선택된 강좌가 없습니다.')">완료</button>
              <button class="btnM gray">취소</button>
              <button class="btnM line">선택삭제</button>
            </span>
          </h3>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="80">
                <col width="120"><!-- 2021-12-29 너비 수정 -->
                <col width="120"><!-- 2021-12-29 너비 수정 -->
                <col width="*">
                <col width="150">
                <col width="60">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">직/인강</th>
                  <th scope="col">강좌번호</th>
                  <th scope="col">선생님</th>
                  <th scope="col">강좌명</th>
                  <th scope="col" colspan="2">수강료</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk2">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk2">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk2">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk2">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk2">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
        <!-- //선택내역 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureCourseSearch',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
