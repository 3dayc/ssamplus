<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>강좌권한 - 온라인</h1>
      <span class="supTxt">* 본 강좌 구매 시 할인 받을 수 있는 강좌 조건을 설정할 수 있습니다. </span>
      <strong class="right boxGray fBlue">장영희 / 전공중국어 – 80점 도약모의고사반  / 수강료 (200,000원)</strong>
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
          <!-- //검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="gridSet grid2">
              <div class="gridItem">
                <div class="tls subBrown">
                  <table>
            				<colgroup>
                      <col width="60">
                      <col width="120">
            					<col>
            				</colgroup>
            				<thead>
            					<tr>
                        <th scope="col">
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chkall">
                            <label for="chkall"><i></i></label>
                          </span>
                        </th>
            						<th scope="col">강좌번호</th>
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
                        <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
                        <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <!-- 데이터 없을 경우 -->
                      <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                      <!-- //데이터 없을 경우 -->
            				</tbody>
            			</table>
                </div>
              </div>
              <div class="gridItem">
                <div class="tls subBrown">
                  <table>
            				<colgroup>
                      <col width="60">
                      <col width="120">
            					<col>
            				</colgroup>
            				<thead>
            					<tr>
                        <th scope="col">
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chkall">
                            <label for="chkall"><i></i></label>
                          </span>
                        </th>
            						<th scope="col">강좌번호</th>
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
                        <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
                        <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <tr>
                        <td>
                          <span class="checkSet noLabel">
                            <input type="checkbox" id="chk5">
                            <label for="chk5"><i></i></label>
                          </span>
                        </td>
                        <td>12345</td>
                        <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
            					</tr>
                      <!-- 데이터 없을 경우 -->
                      <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                      <!-- //데이터 없을 경우 -->
            				</tbody>
            			</table>
                </div>
              </div>
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
                  <th scope="col">본 강좌 실결제금액</th>
                  <th scope="col">
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chkall">
                      <label for="chkall"><i></i></label>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td class="tL">[21 5-6월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="20,000"/></td>
                  <td><input type="text" class="tR" value="180,000"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="20,000"/></td>
                  <td><input type="text" class="tR" value="180,000"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka22">
                      <label for="chka22"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tL">[21 1~6월]<br/>2021 장영희 연간쌤팩</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="20,000"/></td>
                  <td><input type="text" class="tR" value="180,000"/></td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chka23">
                      <label for="chka23"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="tL">[21 1~6월]<br/>2021 장영희 연간쌤팩</td>
                  <td>
                    <span class="unit">
                      <input type="text" value="10">
                      <em>%</em>
                    </span>
                  </td>
                  <td><input type="text" class="tR" value="20,000"/></td>
                  <td><input type="text" class="tR" value="180,000"/></td>
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
                  <td><input type="text" class="tR" value="20,000"/></td>
                  <td><input type="text" class="tR" value="180,000"/></td>
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
  name: 'LectureCourseChoice',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
