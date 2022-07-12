<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>제외강좌</h1>
      <span class="supTxt">* 쿠폰 적용에서 제외할 강좌를 선택할 수 있습니다</span>
      <div class="btnArea">
        <button class="btnM green">선택</button>
        <button class="btnM ml10">취소</button>
      </div>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <div class="boardTop">
            <div class="listSearch left">
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
                        <option value="no" class="label">교수</option>
                        <option value="">과목에 따른 교수 표출</option>
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
                    <input type="checkbox" checked>
                    <label for=""><i></i>현재 오픈된 데이터만 조회</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60"/>
                  <col width="120"/>
                  <col width="*"/>
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">강좌번호</th>
                    <th>강좌명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>H2201000010</td>
                    <td><div class="tL">[21 1~2월]<em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
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
          <div class="tls subGreen">
            <!-- 2021-07-06 -->
            <table> 
              <colgroup>
                <col width="120"/>
                <col width="*"/>
                <col width="60"/>
              </colgroup>
              <thead>
                <tr>
                  <th>강좌번호</th>
                  <th>강좌명</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td>H2201000010</td>
                  <td><div class="tL">[21 1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</div></td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우   -->
              </tbody>
            </table>
            <!-- //2021-07-06 -->
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
  name: 'PaymentCouponLectureExc',
  data() {
    return {
      popTrigger: false,
      closeBtn: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
