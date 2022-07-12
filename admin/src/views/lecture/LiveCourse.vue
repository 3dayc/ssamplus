<template lang="html">
  <div>
		<div class="pageTit">
			<h2>라이브 채널 강좌</h2><!-- 2021-07-14 타이틀 수정 -->
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>라이브 채널 관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="liveCourse">
        <!-- 라이브 채널 관리 -->
        <div class="subTit">
          <h3>라이브 채널 관리</h3>
          <span class="right">
            <button class="btnM green">저장</button>
            <button class="btnM gray ml10">취소</button>
          </span>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="200"/>
              <col width="60"/>
              <col width="70"/>
              <col width="70"/>
              <col width="50"/>
              <col width="50"/>
              <col width="60"/>
              <col width="60"/>
              <col width="140"/>
              <col width="60"/>
              <col width="60"/>
              <col width="50"/>
            </colgroup>
            <thead>
              <tr>
                <th>노출</th>
                <th>강좌명</th>
                <th>교수명</th>
                <th>채널</th>
                <th>호실</th>
                <th>시작일</th>
                <th>종료일</th>
                <th>요일</th>
                <th>열림</th>
                <th>시작-종료</th>
                <th>닫힘</th>
                <th>출석</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  9123<br/>
                  <span class="labelToggleSet small">
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>장영희</td>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>월, 수, 금</td>
                <td><input type="text" class="tC" value="10:50"/></td>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <td><input type="text" class="tC" value="14:30"/></td>
                <td><button class="btnS line"><router-link to="/mkup/lecture/singleCourse/live" target="_blank">출석</router-link></button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>
                  9123<br/>
                  <span class="labelToggleSet small">
                    <input type="checkbox" id="toggle2">
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>장영희</td>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>화. 목</td>
                <td><input type="text" class="tC" value="10:50"/></td>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <td><input type="text" class="tC" value="14:30"/></td>
                <td><button class="btnS line"><router-link to="/mkup/lecture/singleCourse/live" target="_blank">출석</router-link></button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>
                  9123<br/>
                  <span class="labelToggleSet small">
                    <input type="checkbox" id="toggle3">
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>장영희</td>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>월, 수, 금</td>
                <td><input type="text" class="tC" value="10:50"/></td>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <td><input type="text" class="tC" value="14:30"/></td>
                <td><button class="btnS line"><router-link to="/mkup/lecture/singleCourse/live" target="_blank">출석</router-link></button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>
                  9123<br/>
                  <span class="labelToggleSet small">
                    <input type="checkbox" id="toggle4">
                    <label for="toggle4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>장영희</td>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>화. 목</td>
                <td><input type="text" class="tC" value="10:50"/></td>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <td><input type="text" class="tC" value="14:30"/></td>
                <td><button class="btnS line"><router-link to="/mkup/lecture/singleCourse/live" target="_blank">출석</router-link></button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
              <tr>
                <td>
                  9123<br/>
                  <span class="labelToggleSet small">
                    <input type="checkbox" id="toggle5">
                    <label for="toggle5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>장영희</td>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">선택</option>
                      <option value="">1번</option>
                      <option value="">2번</option>
                      <option value="">3번</option>
                      <option value="">4번</option>
                      <option value="">5번</option>
                      <option value="">6번</option>
                      <option value="">7번</option>
                      <option value="">8번</option>
                      <option value="">9번</option>
                      <option value="">10번</option>
                      <option value="">11번</option>
                      <option value="" selected>12번</option>
                    </select>
                  </span>
                </td>
                <td>
                  <span class="unit small">
                    <input type="number" value="1101"/>
                    <em>호</em>
                  </span>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>
                  <VCalendar class="calSet soloCal" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly/>
                    </template>
                  </VCalendar>
                </td>
                <td>월, 수, 금</td>
                <td><input type="text" class="tC" value="10:50"/></td>
                <td>
                  <span class="rangeInput">
                    <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
                  </span>
                </td>
                <td><input type="text" class="tC" value="14:30"/></td>
                <td><button class="btnS line"><router-link to="/mkup/lecture/singleCourse/live" target="_blank">출석</router-link></button></td>
                <td><button class="btnDelete">삭제</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //라이브 채널 관리 -->
        <!-- 강좌 등록 -->
        <div class="subTit">
          <h3>강좌 등록</h3>
        </div>
        <div class="choiceStyle">
          <div class="chSearch">
            <div class="boardTop">
              <div class="left-po">
                <div class="listSearch">
                  <div class="back">
                    <div class="bdLine">
                      <span class="lsItem">
                        <span class="selectSet lCase">
                          <select name="" id="" disabled>
                            <option value="" selected>직강</option>
                          </select>
                        </span>
                      </span>
                      <span class="lsItem">
                        <span class="selectSet lCase">
                          <select name="" id="">
                            <option value="no" class="label">연도</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
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
                            <option value="" selected>단과</option>
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
                        <input type="checkbox" name="chk1" checked/>
                        <label for="chk1"><i></i>현재 오픈된 데이터만 조회</label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="right-po">
                <button class="btnM black">라이브 등록</button>
              </div>
            </div>
            <div class="chListArea">
              <div class="gridSet grid2">
                <div class="gridItem">
                  <div class="tls subBrown">
                    <table>
                      <colgroup>
                        <col width="80">
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
                          <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
                          <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
                        <col width="80">
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
                          <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
                          <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
          </div>
        </div>
        <!-- //강좌 등록 -->
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LiveCourse',
  data() {
    return {
      date: '예)2021-01-01',
      date01: '2021-02-03',
      date02: '2021-03-03',
    }
  },
  methods: {
    
  },
  components: {
  }
}
</script>
