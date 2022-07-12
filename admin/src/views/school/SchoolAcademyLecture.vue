<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>학원 강좌 수강신청</h1>
      <span class="supTxt">* 수강신청 할 강좌를 선택할 수 있습니다.</span>
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
                      <select name="" id="" disabled>
                        <option value="no" class="label">직/인강</option>
                        <option value=""selected>직강</option>
                        <option value="">인강</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">제작년도</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">제작월</option>
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="">3월</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                        <option value="">중국어</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label"selected>선생님</option>
                        <option value="">장영희</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label" selected>강좌유형</option>
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
                </div>
              </div>
              <span class="checkSet">
                <input type="checkbox" id="sorting">
                <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
              </span>
            </div>
          </div>
          <!-- 검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60">
                  <col width="80">
                  <col width="100">
                  <col width="100">
                  <col>
                  <col width="120">
                  <col width="80">
                  <col width="160">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" colspan="2">직/인강</th>
                    <th scope="col">강좌번호</th>
                    <th scope="col">선생님</th>
                    <th scope="col">강좌명</th>
                    <th scope="col">개강-종강일</th>
                    <th scope="col">수강기간</th>
                    <th scope="col">수강료</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr class="yellow">
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet blue">패키지</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>2021-03-01</td>
                    <td>-</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>530,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>450,500</strong>원<em class="dc">15<b>%</b></em>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk2">
                        <label for="chk2"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>S2105000022</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>2021-03-01 ~<br/>2021-06-30</td>
                    <td>-</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>50,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>47,500</strong>원<em class="dc">15<b>%</b></em>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk3">
                        <label for="chk3"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>S2105000022</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>2021-03-01 ~<br/>2021-06-30</td>
                    <td>-</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>50,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>45,000</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk4">
                        <label for="chk4"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>S2105000022</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>2021-03-01 ~<br/>2021-06-30</td>
                    <td>-</td>
                    <td>50,000원</td>
                  </tr>
                  <tr class="yellow">
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet blue">패키지</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>2021-03-01</td>
                    <td>-</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>530,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>450,500</strong>원<em class="dc">15<b>%</b></em>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
              <button class="btnM green">완료</button>
              <button class="btnM gray">취소</button>
              <button class="btnM line">선택삭제</button>
            </span>
          </h3>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="80">
                <col width="100">
                <col width="100">
                <col>
                <col width="120">
                <col width="80">
                <col width="160">
                <col width="60">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">직/인강</th>
                  <th scope="col">강좌번호</th>
                  <th scope="col">선생님</th>
                  <th scope="col">강좌명</th>
                  <th scope="col">개강-종강일</th>
                  <th scope="col">수강기간</th>
                  <th scope="col" colspan="2">수강료</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan="6">Total</th>
                  <td colspan="2">250,000원</td>
                </tr>
              </tfoot>
              <tbody>
                <!--Loop-->
                <tr class="yellow">
                  <td>직강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월] <em class="iSet blue">패키지</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>2021-03-01</td>
                  <td>-</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>530,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>450,500</strong>원<em class="dc">15<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk21">
                      <label for="chk21"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>직강</td>
                  <td>S2105000022</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>2021-03-01 ~<br/>2021-06-30</td>
                  <td>70일</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>50,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>47,500</strong>원<em class="dc">15<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk22">
                      <label for="chk22"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>직강</td>
                  <td>S2105000022</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월] <em class="iSet sky">단과</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>2021-03-01 ~<br/>2021-06-30</td>
                  <td>70일</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>50,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>45,000</strong>원<em class="dc">10<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk23">
                      <label for="chk23"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'SchoolAcademyLecture',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
