<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>회원권한 - 교재</h1>
      <span class="supTxt">* 교재 구매 시 할인 받을 수 있는 회원 권한을 설정할 수 있습니다. </span>
      <strong class="right boxGray fBlue">류지원 영어교육학 기출문제집  |  25,000원</strong>
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
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
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
                        <option value="">장영희</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">강좌유형</option>
                        <option value="">단과</option>
                        <option value="">패키지</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="강좌명, 강좌번호 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                  <span class="checkSet">
                    <input type="checkbox" id="sorting">
                    <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- 검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60">
                  <col width="100">
                  <col width="120">
                  <col width="120">
                  <col>
                  <col width="120">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" colspan="2">직/인강</th>
                    <th scope="col">강좌번호</th>
                    <th scope="col">선생님</th>
                    <th scope="col">강좌명</th>
                    <th scope="col">인원</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5" checked>
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>10명</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>20명</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5" checked>
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>32명</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>10명</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>20명</td>
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
                <col>
                <col width="100">
                <col width="150">
                <col width="200">
                <col width="80">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">대상</th>
                  <th scope="col">할인율</th>
                  <th scope="col">할인금액</th>
                  <th scope="col" colspan="2">본 교재 실결제금액</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td class="tL">일반회원</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="2,500"/></td>
                  <td><input type="text" class="tR" value="22,500"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="2,500"/></td>
                  <td><input type="text" class="tR" value="22,500"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka22" checked>
                      <label for="chka22"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tL">[21 1-6월]<br/>2021 장영희 연간쌤팩</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="2,500"/></td>
                  <td><input type="text" class="tR" value="22,500"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka23">
                      <label for="chka23"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tL">[21 1-6월]<br/>2021 장영희 연간쌤팩</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="2,500"/></td>
                  <td><input type="text" class="tR" value="22,500"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka24">
                      <label for="chka24"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="2,500"/></td>
                  <td><input type="text" class="tR" value="22,500"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka25">
                      <label for="chka25"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'LectureUserChoiceBook',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
