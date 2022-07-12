<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>강좌검색</h1><!-- 2021-12-23 타이틀 명 수정 -->
      <span class="supTxt">* 쌤플러스 강좌 검색</span>
      <span class="btnArea">
        <button class="btnM green" @click="toastPop('error', '선택된 강좌가 없습니다.')">선택</button>
        <button class="btnM gray">취소</button>
      </span>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <div class="boardTop">
            <div class="left-po">
              <div class="listSearch">
                <div class="back">
                  <div class="bdLine">
                    <span class="lsItem">
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">직/인강</option>
                          <option value="">직강</option>
                          <option value="">인강</option>
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
                          <option value="">교육학</option>
                          <option value="">국어</option>
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
                    <span class="checkSet">
                      <input type="checkbox" id="check" checked/>
                      <label for="check"><i></i>현재 오픈된 데이터만 조회</label>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60">
                  <col width="100">
                  <col width="*">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" colspan="2">강좌번호</th>
                    <th scope="col">강좌명</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>12345</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>12345</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>12345</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>12345</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>12345</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                  <!-- //데이터 없을 경우 -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="chView">
          <h3><strong>선택내역</strong></h3>
          <div class="tls subGreen wHalf">
            <table>
              <colgroup>
                <col width="100px;">
                <col>
                <col width="80px;">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">강좌번호</th>
                  <th scope="col">강좌명</th>
                  <th scope="col">삭제</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>12345</td>
                  <td class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <!--//Loop-->
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MsgLecture',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
