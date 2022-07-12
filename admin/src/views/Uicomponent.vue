<template lang="html">
  <div id="componentWrap">
    <div class="tab">
      <button :class="{on:tab===1}" @click="tab = 1">Text & Colorchip</button>
      <button :class="{on:tab===2}" @click="tab = 2">Button</button>
      <button :class="{on:tab===3}" @click="tab = 3">Form</button>
      <button :class="{on:tab===4}" @click="tab = 4">Label & Icon</button>
      <button :class="{on:tab===5}" @click="tab = 5">Tab & Area</button>
      <button :class="{on:tab===6}" @click="tab = 6">Popup</button>
    </div>
    <div class="tabContents" v-if="tab == 1">
      <div class="cptTable">
        <table>
          <tr>
            <th>Text</th>
          </tr>
          <tr>
            <td>
              <p style="font-weight:100;font-size:20px;">NotoSansKr - font-weight:100;</p>
              <p style="font-weight:200;font-size:20px;">NotoSansKr - font-weight:200;</p>
              <p style="font-weight:300;font-size:20px;">NotoSansKr - font-weight:300;</p>
              <p style="font-weight:400;font-size:20px;">NotoSansKr - font-weight:400;</p>
              <p style="font-weight:600;font-size:20px;">NotoSansKr - font-weight:600;</p>
              <p style="font-weight:800;font-size:20px;">NotoSansKr - font-weight:800;</p>
              <p style="font-weight:900;font-size:20px;">NotoSansKr - font-weight:900;</p>
            </td>
          </tr>
          <tr>
            <th>Color Chip</th>
          </tr>
          <tr>
            <td>
              <div class="colorchips">
                <div class="colorchip" style="background:#ffffff;">$whiteColor #ffffff</div>
                <div class="colorchip" style="background:#ccc;">$grayColor #cccccc</div>
                <div class="colorchip" style="color:#fff;background:#666;">$lightBlackColor #666666</div>
                <div class="colorchip" style="color:#fff;background:#111;">$BlackColor #111111</div>
              </div>
              <div class="colorchips">
                <div class="colorchip" style="color:#fff;background:#00a46c;">$greenColor #00a46c</div>
                <div class="colorchip" style="color:#fff;background:#087d55;">$darkGreenColor #087d55</div>
              </div>
              <div class="colorchips">
                <div class="colorchip" style="color:#fff;background:#3079ff;">$blueColor #3079ff</div>
                <div class="colorchip" style="color:#fff;background:#1c5ed5;">$darkBlueColor #1c5ed5</div>
              </div>
              <div class="colorchips">
                <div class="colorchip" style="color:#fff;background:#ea5461;">$redColor #ea5461</div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tabContents" v-if="tab == 2">
      <div class="cptTable">
        <table>
          <tr>
            <th>Button</th>
          </tr>
          <tr>
            <td>
              <strong>large</strong>
              <button class="btnL">btnL - Black</button>&nbsp;
              <button class="btnL line">btnL - Black line</button>&nbsp;
              <button class="btnL green">btnL - Green</button>&nbsp;
              <button class="btnL greenline">btnL - Green line</button>&nbsp;
              <button class="btnL blue">btnL - Blue</button>&nbsp;
              <button class="btnL blueline">btnL - Blue line</button>&nbsp;
              <button class="btnL red">btnL - Red </button>&nbsp;
              <button class="btnL redline">btnL - Red line</button>&nbsp;
              <button class="btnL gray">BUTTON - Gray</button>
              <br /><br />
              <strong>Medium</strong>
              <button class="btnM">btnM - Black</button>&nbsp;
              <button class="btnM line">btnM - Black line</button>&nbsp;
              <button class="btnM green">btnM - Green</button>&nbsp;
              <button class="btnM greenline">btnM - Green line</button>&nbsp;
              <button class="btnM blue">btnM - Blue</button>&nbsp;
              <button class="btnM blueline">btnM - Blue line</button>&nbsp;
              <button class="btnM red">btnM - Red </button>&nbsp;
              <button class="btnM redline">btnM - Red line</button>&nbsp;
              <button class="btnM gray">btnM - Gray</button>
              <br /><br />
              <strong>small</strong>
              <button class="btnS">btnS - Black</button>&nbsp;
              <button class="btnS line">btnS - Black line</button>&nbsp;
              <button class="btnS green">btnS - Green</button>&nbsp;
              <button class="btnS greenline">btnS - Green line</button>&nbsp;
              <button class="btnS blue">btnS - Blue</button>&nbsp;
              <button class="btnS blueline">btnS - Blue line</button>&nbsp;
              <button class="btnS red">btnS - Red </button>&nbsp;
              <button class="btnS redline">btnS - Red line</button>&nbsp;
              <button class="btnS gray">btnS - Gray</button>
              <br /><br />
              <strong>Tiny</strong>
              <button class="btnT">btnT - Black</button>&nbsp;
              <button class="btnT line">btnT - Black line</button>&nbsp;
              <button class="btnT green">btnT - Green</button>&nbsp;
              <button class="btnT greenline">btnT - Green line</button>&nbsp;
              <button class="btnT blue">btnT - Blue</button>&nbsp;
              <button class="btnT blueline">btnT - Blue line</button>&nbsp;
              <button class="btnT red">btnT - Red </button>&nbsp;
              <button class="btnT redline">btnT - Red line</button>&nbsp;
              <button class="btnT gray">btnT - Gray</button>
              <br /><br />
              <strong>disabled</strong>
              <button class="btnL" disabled>BUTTON - Black</button>&nbsp;
              <button class="btnL line" disabled>BUTTON - Black line</button>&nbsp;
              <button class="btnL green" disabled>BUTTON - Green</button>&nbsp;
              <button class="btnL greenline" disabled>BUTTON - Green line</button>&nbsp;
              <button class="btnL blue" disabled>BUTTON - Blue</button>&nbsp;
              <button class="btnL blueline" disabled>BUTTON - Blue line</button>&nbsp;
              <button class="btnL red" disabled>BUTTON - Red </button>&nbsp;
              <button class="btnL redline" disabled>BUTTON - Red line</button>&nbsp;
              <button class="btnL gray" disabled>BUTTON - Gray</button>
            </td>
          </tr>
          <tr>
            <th>Design Button</th>
          </tr>
          <tr>
            <td>
              <button href="#" class="btnDownload">다운로드</button>
              <button class="btnPreview">미리보기</button>
              <button href="#" class="btnAdd">신규등록</button>
              <button class="btnUpdate">업데이트</button>
              <button href="#" class="btnList">목록으로</button>
              <button class="btnMsg">메세지발송</button>
              <button class="btnPrint">인쇄</button>
              <br /><br />
              <button class="btnPlayer">Player</button>&nbsp;
              <button class="btnPlayer" disabled>Player</button>
              <br /><br />
              <button class="btnRefresh">초기화</button>
              <button class="btnRefreshRnd">초기화</button>
              <br /><br />
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
              <br /><br />
              <button class="dropToggle" :class="{on:dropToggle == true}" @click="dropToggle = !dropToggle;">토글 버튼</button>&nbsp;
              <button class="dropToggle" :class="{on:dropToggle2 == true}" @click="dropToggle2 = !dropToggle2;">토글 버튼</button>
              <br /><br />
              <button class="btnDelete">삭제</button>
              <br /><br />
              <button class="btnSort">정렬</button>
              <br /><br />
							<button class="btnSnsKind naver">네이버</button>
							<button class="btnSnsKind kakao">카카오</button>
              <br /><br />
            </td>
          </tr>
          <tr>
            <th>paginate</th>
          </tr>
          <tr>
            <td>
              <div class="paginate">
                <span>
                  <a class="first">처음</a>
                  <a class="prev">이전</a>
                  <a class="on">1</a>
                  <a>2</a>
                  <a>3</a>
                  <a>4</a>
                  <a>5</a>
                  <a>6</a>
                  <a>7</a>
                  <a>8</a>
                  <a>9</a>
                  <a>10</a>
                  <a class="next">다음</a>
                  <a class="last">마지막</a>
                </span>
                <span class="selectSet">
                  <select>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tabContents" v-if="tab == 3">
      <div class="cptTable">
        <table>
          <tr>
            <th>Input, Select, Checkbox, Radio</th>
          </tr>
          <tr>
            <td>
              <table>
                <colgroup>
                  <col width="50%">
                  <col width="50%">
                </colgroup>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" placeholder="Placeholder" />
                      <input type="text" placeholder="Placeholder" value="Value" />
                      <input type="text" placeholder="Readonly" readonly />
                      <input type="text" placeholder="Disabled" disabled />
                      <input type="text" class="error" placeholder="Placeholder" />
                      <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
                    </td>
                    <td>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">선택하세요</option>
                          <option value="" selected>Select Option 1</option>
                          <option value="">Select Option 2</option>
                          <option value="">Select Option 3</option>
                          <option value="">Select Option 4</option>
                        </select>
                      </span>
                      <br/>
                      <span class="selectSet lCase">
                        <select name="" id="">
                          <option value="no" class="label">선택하세요</option><!-- 선택하세요만 색상 변경 > 반드시 value는 no 로 적용 -->
                          <option value="">Select Option 1</option>
                          <option value="">Select Option 2</option>
                          <option value="">Select Option 3</option>
                          <option value="">Select Option 4 Select Option 4Select Option 4Select Option 4Select Option 4Select Option 4Select Option 4Select Option 4</option>
                        </select>
                      </span>
                      <br/>
                      <span class="selectSet">
                        <select name="" id="" disabled>
                          <option value="">Select Option 1</option>
                          <option value="">Select Option 2</option>
                          <option value="">Select Option 3</option>
                          <option value="">Select Option 4</option>
                        </select>
                      </span>
                      <br/>
                      <span>
                        <span class="selectSet error">
                          <select name="" id="">
                            <option value="no" class="label">선택하세요</option>
                            <option value="" selected>Select Option 1</option>
                            <option value="">Select Option 2</option>
                            <option value="">Select Option 3</option>
                            <option value="">Select Option 4</option>
                          </select>
                        </span>
                        <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
                      </span>
                      <br/>
                      <div class="multiselectSet">
                        <div class="selectSet lCase" @click="multiSelect($event)">
                          <select>
                            <option>Select an option</option>
                          </select>
                          <div class="overSelect"></div>
                        </div>
                        <div class="checkArea">
                          <span class="checkSet">
                            <input type="checkbox" id="one" />
                            <label for="one"><i></i>First checkbox</label>
                          </span>
                          <span class="checkSet">
                            <input type="checkbox" id="two" />
                            <label for="two"><i></i>Second checkbox</label>
                          </span>
                          <span class="checkSet">
                            <input type="checkbox" id="three" />
                            <label for="three"><i></i>Third checkbox</label>
                          </span>
                        </div>
                      </div>
                      <br/>
                      <div class="multiselectSet">
                        <div class="selectSet" @click="multiSelect($event)">
                          <select>
                            <option>First checkbox 외 2</option>
                          </select>
                          <div class="overSelect"></div>
                        </div>
                        <div class="checkArea">
                          <span class="checkSet">
                            <input type="checkbox" id="one2" checked />
                            <label for="one2"><i></i>First checkbox</label>
                          </span>
                          <span class="checkSet">
                            <input type="checkbox" id="two2" />
                            <label for="two2"><i></i>Second checkbox</label>
                          </span>
                          <span class="checkSet">
                            <input type="checkbox" id="three2" checked />
                            <label for="three2"><i></i>Third checkbox</label>
                          </span>
                        </div>
                      </div>
                      <br/>
                      <br/>
                      <multiselect v-model="value" :options="options" :close-on-select="true" placeholder="Select one"></multiselect>
                      <br/>
                      <multiselect class="error" v-model="value" :options="options" :close-on-select="true" placeholder="Select one"></multiselect>
                      <br/>
                      <multiselect v-model="multiValue" :options="optionsMulti" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                      </multiselect>
                      <br/>
                      <multiselect 
                        v-model="multiValue2" 
                        :options="optionsMulti2" 
                        :multiple="false" 
                        group-values="dep2" 
                        :close-on-select="true"
                        group-label="dep1" 
                        :group-select="false" 
                        placeholder="과목" 
                        track-by="name" 
                        label="name">
                        <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                      </multiselect>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>요일 없는 캘린더</strong>
                      <VCalendar class="calSet" v-model="date" color="green">
                        <template v-slot="{ inputValue, inputEvents, togglePopover }">
                          <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                        </template>
                      </VCalendar>
                      <br />
                      <!-- <VCalendar class="calSet" v-model="range" is-range color="green">
                        <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                          <input :value="inputValue.start==null?'':inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" v-on="inputEvents" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                        </template>
                      </Vcalendar> -->
                      <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                        <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                          <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                          <em>~</em>
                          <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                        </template>
                      </Vcalendar>
                      <br />
                      <span class="calDupSet">
                        <VCalendar class="calSet" v-model="date02" color="green">
                          <template v-slot="{ inputValue, inputEvents, togglePopover }">
                            <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                          </template>
                        </VCalendar>
                        <em>~</em>
                        <VCalendar class="calSet" v-model="date03" color="green">
                          <template v-slot="{ inputValue, inputEvents, togglePopover }">
                            <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                          </template>
                        </VCalendar>
                      </span>
                      <br/><br/>
                      <strong>요일 있는 캘린더</strong>
                      <VCalendar class="calSet weekday" v-model="date" color="green" :masks="masks">
                        <template v-slot="{ inputValue, inputEvents, togglePopover }">
                          <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                        </template>
                      </VCalendar>
                      <br />
                      <VCalendar class="calSet weekday dupCal" v-model="range" is-range color="green" :masks="masks">
                        <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                          <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                          <em>~</em>
                          <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                        </template>
                      </Vcalendar>
                      <br />
                      <span class="calDupSet">
                        <VCalendar class="calSet weekday" v-model="date02" color="green" :masks="masks">
                          <template v-slot="{ inputValue, inputEvents, togglePopover }">
                            <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                          </template>
                        </VCalendar>
                        <em>~</em>
                        <VCalendar class="calSet weekday" v-model="date03" color="green" :masks="masks">
                          <template v-slot="{ inputValue, inputEvents, togglePopover }">
                            <input :value="inputValue" v-on="inputEvents" @click="togglePopover()" placeholder="일자 선택" />
                          </template>
                        </VCalendar>
                      </span>
                      <br/><br/>
                      <strong>업데이트 일정에서 사용하는 캘린더</strong>
                      <VCalendar color="green" :attributes='attrs' />
                    </td>
                    <td>
                      <strong>Checkbox & Radio</strong>
                      <span class="checkSet">
                        <input type="checkbox" />
                        <label for=""><i></i>checkSet</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" checked />
                        <label for=""><i></i>checkSet</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" disabled />
                        <label for=""><i></i>checkSet</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" checked disabled />
                        <label for=""><i></i>checkSet</label>
                      </span>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                      <br/><br/>
                      <span class="radioSet">
                        <input type="radio" name="radio1" />
                        <label for=""><i></i>radioSet</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio1" checked />
                        <label for=""><i></i>radioSet</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio2" disabled />
                        <label for=""><i></i>radioSet</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio2" checked disabled />
                        <label for=""><i></i>radioSet</label>
                      </span>
                      <br/><br/>
                      <strong>기본 Toggle</strong>
                      <span class="toggleSet">
                        <input type="checkbox" id="push" />
                        <label for="push">
                          <!---->
                        </label>
                      </span>
                      <span class="toggleSet">
                        <input type="checkbox" id="push1" checked />
                        <label for="push1">
                          <!---->
                        </label>
                      </span>
                      <span class="toggleSet">
                        <input type="checkbox" id="push2" disabled />
                        <label for="push2">
                          <!---->
                        </label>
                      </span>
                      <span class="toggleSet">
                        <input type="checkbox" id="push3" checked disabled />
                        <label for="push3">
                          <!---->
                        </label>
                      </span>
                      <br /><br />
                      <strong>Text Toggle</strong>
                      <span class="labelToggleSet">
                        <input type="checkbox" id="push5">
                        <label for="push5">
                          <span>숨김</span>
                          <span>노출</span>
                        </label>
                      </span>
                      <span class="labelToggleSet">
                        <input type="checkbox" id="push4" checked="">
                        <label for="push4">
                          <span>숨김</span>
                          <span>노출</span>
                        </label>
                      </span>
                      <span class="labelToggleSet">
                        <input type="checkbox" id="push7" disabled>
                        <label for="push7">
                          <span>숨김</span>
                          <span>노출</span>
                        </label>
                      </span>
                      <span class="labelToggleSet">
                        <input type="checkbox" id="push6" checked="" disabled>
                        <label for="push6">
                          <span>숨김</span>
                          <span>노출</span>
                        </label>
                      </span>
                      <br /><br />
                      <strong>Text Toggle - 글자수에 따라 별도 클래스 적용</strong>
                      <span class="labelToggleSet tLength3">
                        <input type="checkbox" id="push21">
                        <label for="push21">
                          <span>미허용</span>
                          <span>허용</span>
                        </label>
                      </span>
                      <span class="labelToggleSet long">
                        <input type="checkbox" id="professor">
                        <label for="professor">
                          <span>교수관리자</span>
                          <span>교수관리자</span>
                        </label>
                      </span>
                      <br /><br />
                      <strong>해쉬태그</strong>
                      <div class="hashTagSet">
                        <span>
                          <input type="checkbox" id="has1" checked /><label for="has1">초시생</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has2" /><label for="has2">N수생</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has3" /><label for="has3">학업병행</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has4" /><label for="has4">직장병행</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has5" /><label for="has5">알바병행</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has6" checked /><label for="has6">단기합격</label>
                        </span>
                        <span>
                          <input type="checkbox" id="has7" /><label for="has7">올인합격</label>
                        </span>
                      </div>
                      <br /><br />
                      <div class="hashTagSet favoriteTag">
                        <span>
                          <input type="checkbox" id="favorite1" disabled/><label for="favorite1">중국어 | 희소중국어팀 | 기출문제분석반1</label>
                        </span>
                        <span>
                          <input type="checkbox" id="favorite6" disabled/><label for="favorite6">중국어 | 희소중국어팀 | 기출문제분석반1중국어 | 희소중국어팀 | 기출문제분석반1</label>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th>Unit</th>
          </tr>
          <tr>
            <td>
              <span class="saveBox">010-1234-5678<button>닫기</button></span>
              <span class="saveBox">인쇄횟수<button>닫기</button></span>
              <span class="saveBox">교육학<button>닫기</button></span>
              <br/>
              <div class="selectCase">
                <span class="saveBox"><input type="checkbox" checked id="quick1"><label for="quick1">기본정보</label><button>닫기</button></span>
                <span class="saveBox"><input type="checkbox" id="quick2"><label for="quick2">인쇄횟수</label><button>닫기</button></span>
                <span class="saveBox"><input type="checkbox" id="quick3"><label for="quick3">동시접속</label><button>닫기</button></span>
              </div>
              <br/>
              <div class="telAddBox">
                <div class="innerBox">
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <span class="saveBox">010-2143-1233 <button>닫기</button></span>
                  <input type="text" placeholder="숫자 입력 후 콤마로 구분">
                </div>
              </div>
              <br /><br />
              <div class="address">
                <span class="zipcode">
                  <input type="number" placeholder="우편번호" readonly/>
                  <button class="btnSearch">검색</button>
                </span>
                <span class="base"><input type="text"/></span>
                <div class="mt5">
                  <input type="text" placeholder="상세주소 입력"/>
                </div>
              </div>
              <br /><br />
              <span class="quantityBox">
                <button class="countMinus" @click="counter -= 1">-</button>
                <strong>{{counter}}</strong>
                <button class="countPlus" @click="counter += 1">+</button>
              </span>
              <br /><br />
              <!-- 요일 체크 박스 -->
              <span class="weekCheckSet">
                <span class="all">
                  <input type="checkbox" id="all" />
                  <label for="all">All</label>
                </span>
                <span>
                  <input type="checkbox" id="monday1" />
                  <label for="monday1">월</label>
                </span>
                <span>
                  <input type="checkbox" id="tuesday" />
                  <label for="tuesday">화</label>
                </span>
                <span>
                  <input type="checkbox" id="wednesday" />
                  <label for="wednesday">수</label>
                </span>
                <span>
                  <input type="checkbox" id="thursday" />
                  <label for="thursday">목</label>
                </span>
                <span>
                  <input type="checkbox" id="friday" />
                  <label for="friday">금</label>
                </span>
                <span>
                  <input type="checkbox" id="saturday" />
                  <label for="saturday">토</label>
                </span>
                <span>
                  <input type="checkbox" id="sunday" />
                  <label for="sunday">일</label>
                </span>
              </span>
              <!-- //요일 체크 박스 -->
              <br /><br />
              <!-- 월 체크 박스 -->
              <span class="monthCheckSet">
                <span class="all">
                  <input type="checkbox" id="allMonth" />
                  <label for="allMonth">전체</label>
                </span>
                <span>
                  <input type="checkbox" id="month1" />
                  <label for="month1">1월</label>
                </span>
                <span>
                  <input type="checkbox" id="month2" />
                  <label for="month2">2월</label>
                </span>
                <span>
                  <input type="checkbox" id="month3" />
                  <label for="month3">3월</label>
                </span>
                <span>
                  <input type="checkbox" id="month4" />
                  <label for="month4">4월</label>
                </span>
                <span>
                  <input type="checkbox" id="month5" />
                  <label for="month5">5월</label>
                </span>
                <span>
                  <input type="checkbox" id="month6" />
                  <label for="month6">6월</label>
                </span>
                <span>
                  <input type="checkbox" id="month7" />
                  <label for="month7">7월</label>
                </span>
                <span>
                  <input type="checkbox" id="month8" />
                  <label for="month8">8월</label>
                </span>
                <span>
                  <input type="checkbox" id="month9" />
                  <label for="month9">9월</label>
                </span>
                <span>
                  <input type="checkbox" id="month10" />
                  <label for="month10">10월</label>
                </span>
                <span>
                  <input type="checkbox" id="month11" />
                  <label for="month11">11월</label>
                </span>
                <span>
                  <input type="checkbox" id="month12" />
                  <label for="month12">12월</label>
                </span>
              </span>
              <!-- //월 체크 박스 -->
              <br /><br />
              <span class="ipBtn">
                <input type="text" />
                <button class="btnS">중복확인</button>
              </span>
              <br />
              <span class="ipBtn">
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">Option01</option>
                    <option value="">Option02</option>
                    <option value="">Option03</option>
                    <option value="">Option04</option>
                  </select>
                </span>
                <button class="btnS">중복확인</button>
              </span>
              <br />
              <span class="ipBtn">
                <span class="uploadFile">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">파일 업로드</span>
                  <label for="file">파일첨부</label>
                </span>
                <button class="btnS">중복확인</button>
              </span>
              <br />
              <span class="ipBtn longBtn">
                <input type="text" />
                <button class="btnS">정보 업데이트</button>
              </span>
              <br />
              <span class="ipBtn sizeM"><!-- 버튼 크기에 따라 class 추가 -->
                <input type="text" />
                <button class="btnM">중복확인</button>
              </span>
              <br />
              <span class="ipBtn mailCase sizeM"><!-- 버튼 크기에 따라 class 추가 -->
                <input type="text" placeholder="사내 이메일주소"/><em>@kggroup.co.kr</em>
                <button class="btnM">중복확인</button>
              </span>
              <br />
              <span class="ipBtn sizeL"><!-- 버튼 크기에 따라 class 추가 -->
                <input type="text" />
                <button class="btnL">중복확인</button>
              </span>
              <br />
              <span class="ipSecurity">
                <input type="text" />
                <em><strong>9</strong>분 <strong>59</strong>초</em>
                <button class="btnS black">재발송</button>
              </span>
              <br />
              <span class="ipSecurity dupCase">
                <input type="text" />
                <em><strong>9</strong>분 <strong>59</strong>초</em>
                <button class="btnS black">번호인증</button>
                <button class="btnS line">재발송</button>
              </span>
              <br />
              <span class="ipDel">
                <input type="text" />
                <button class="btnX">삭제</button>
              </span>
              <br />
              <span class="ipDel">
                <span class="selectSet wFull">
                  <select name="" id="">
                    <option value="">Option01</option>
                    <option value="">Option02</option>
                    <option value="">Option03</option>
                    <option value="">Option04</option>
                  </select>
                </span>
                <button class="btnX">삭제</button>
              </span>
              <br />
              <div class="ipSearch">
                <input type="text" placeholder="강사명" />
                <button class="btnSearch">검색</button>
              </div>
              <br />
              <span class="unit"><input type="text" class="tR" placeholder="숫자만 입력"><em>원</em></span>
              <span class="unit small"><input type="text"><em>일</em></span>
              <br />
              <div class="dubUnit">
                <span class="unit"><input type="number" placeholder="숫자" /><em>회</em></span>
                <span class="unit"><input type="number" placeholder="숫자" /><em>일</em></span>
              </div>
              <br /><br />
              <span class="countSet wFull">
                <input type="text"/><span class="counter"><em class="">0/30</em></span>
              </span>
              <div class="countSet fullStyle">
                <textarea rows="3"></textarea>
                <span class="counter"><em class="">0/3,000</em></span>
              </div>
              <br /><br />
              <span class="rangeInput">
                <input type="text" value="11:00"/><em>~</em><input type="text" value="14:00"/>
              </span>
              <br /><br />
              <div class="emailForm">
                <input type="text" />
                <span class="emailDomain">
                  <em>@</em>
                  <span class="selectSet">
                    <select>
                      <option>선택해주세요</option>
                      <option>naver.com</option>
                      <option>gmail.com</option>
                      <option>hanmail.net</option>
                      <option>직접입력</option>
                    </select>
                  </span>
                  <input type="text"/>
                </span>
              </div>
              <br/>
              <div class="autoComplete">
                <input type="text">
                <span class="iSearch">검색</span>
                <ul class="optionList">
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 5월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 6월 출제위원 모의고사 (국어-박노송3)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송2)</li>
                  <li>2021년 7월 출제위원 모의고사 (국어-박노송3)</li>
                </ul>
              </div>
              <br />
              <br />
              <strong>Page Landing Form</strong>
              <LandingTypeComponent></LandingTypeComponent>
            </td>
          </tr>
          <tr>
            <th>FileUpload Style</th>
          </tr>
          <tr>
            <td>
              <!---->
              <span class="uploadThumb">
                <input type="file" id="imgUpload"/>
                <label for="imgUpload">이미지 등록</label>
              </span>
              <span class="uploadThumb after">
                <img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/>
                <button class="btnDelete">삭제</button>
              </span>
              <span class="ml10">(선생님 이미지 업로드 예시)</span><br/><br/>
              <!---->
              <span class="uploadFile">
                <input type="file" id="file" @change="fileUpload">
                <span class="upload-name">파일 업로드 전</span>
                <label for="file">불러오기</label>
              </span>
              <br/><br/>
              <span class="uploadFile">
                <input type="file" id="file" class="upFile" @change="fileUpload">
                <span class="upload-name">파일이 업로드 되었을 때</span>
                <label for="file">불러오기</label>
              </span>
              <br/><br/>
              <span class="uploadFile">
                <input type="file" id="file" @change="fileUpload">
                <span class="upload-name">
                  <ul class="fileList">
                    <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                  </ul>
                </span>
                <label for="file">불러오기</label>
              </span>
              <br/><br/>
              <span class="uploadFileSet">
                <span class="uploadFile">
                  <input type="file" id="file" @change="fileUpload">
                  <span class="upload-name">{{ fileName }}</span>
                  <label for="file">불러오기</label>
                </span>
                <a href="#none;" class="btnS" download>샘플 양식</a>
              </span>
              <br/><br/>
              <span class="uploadFileSet">
                <span class="uploadFile">
                  <input type="file" id="file" class="upFile" @change="fileUpload">
                  <span class="upload-name">fileName.png</span>
                  <label for="file">불러오기</label>
                </span>
                <a href="#none;" class="btnS" download>샘플 양식</a>
                <button class="btnS green">미리보기</button>
              </span>
              <br/><br/>
              <!---->
              <span class="uploadMulty">
                <span class="thumb"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현" style="display:none;"/><em>등록된 이미지가 없습니다.</em></span>
                <span class="fileChoice" v-show="showFileChoice">
                  <strong><input type="file" id="fileMulty" @change="uploadMulty" /><label for="fileMulty">파일 첨부</label></strong>
                  <em>* 권장 이미지 사이즈: 2048 X 1024</em>
                </span>
                <span class="fileModify" v-if="showFileModify">{{ multyFuleName }}<button class="btnDelete">삭제</button></span>
              </span>
              <!---->
              <br/><br/>
              <button class="btnS line">파일첨부</button>
              <ul class="fileList writeCase">
                <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
              </ul>
              <ul class="fileList">
                <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
                <li><span><a href="#" download>합격자안내.pdf</a><button class="btnDelete ml5">삭제</button></span></li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tabContents" v-if="tab == 4">
      <div class="cptTable">
        <table>
          <tr>
            <th>Label</th>
          </tr>
          <tr>
            <td>
              <span class="price">
                <span class="origin"><del><strong>1,323,000</strong>원</del></span>
                <span class="dcBasic">
                  <strong>1,212,000</strong>원
                  <em class="dc">10<b>%</b></em>
                </span>
              </span>
              <br/><br/>
              <span class="price">
                <span class="origin"><del><strong>1,323,000</strong>원</del></span>
                <span class="dcBasic">
                  <del><strong>1,212,000</strong>원</del>
                  <em class="dc">10<b>%</b></em>
                </span>
                <span class="dcPlus">
                  <strong>1,212,000</strong>원
                  <em class="dc">10<b>%</b></em>
                </span>
              </span>
              <br/><br/>
              <strong class="leafLabel">PC</strong>
              <strong class="leafLabel blue">Mobile</strong>
              <br/><br/>
              <div class="percentBar">
                <div class="percentBarOutter">
                  <div class="percentBarContents" style="width:20%;"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>Icon</th>
          </tr>
          <tr>
            <td>
              <span class="iFile">첨부파일</span>
              <br/><br/>
              <img img :src="require(`@/assets/images/i_layout1.png`)" alt="" class="iLayout" />
              <img img :src="require(`@/assets/images/i_layout2.png`)" alt="" class="iLayout" />
              <br/><br/>
            </td>
          </tr>
          <tr>
            <th>Text Icon</th>
          </tr>
          <tr>
            <td>
              <strong>강좌 리스트</strong><br />
              <em class="iSet yellow">이론강의</em>
              <em class="iSet yellow">문제풀이</em>
              <em class="iSet yellow">모의고사</em>
              <em class="iSet yellow">면접실연</em>
              <em class="iSet yellow">기타특강</em>
              <br /><br />
              <strong>결제 리스트</strong><br />
              <em class="iSet sky">단과</em>
              <em class="iSet line">기간연장</em>
              <em class="iSet line">재수강</em>
              <em class="iSet line">보충강의</em>
              <em class="iSet blue">패키지</em>
              <em class="iSet brightBlue">수강생</em>
              <em class="iSet orange">모의고사</em>
              <em class="iSet purple">교재</em>
              <em class="iSet purple">소득공제</em>
              <em class="iSet caribGreen">기타</em>
              <em class="iSet orange">굿즈</em>
              <em class="iSet lilac">배송료</em>
              <em class="iSet violet">무료배송</em>
              <em class="iSet green">학습기기</em>
              <em class="iSet lYellow">사물함</em>
              <em class="iSet skyblue">시간제쿠폰</em>
              <br /><br />
              <strong>교재/상품 주문배송 리스트</strong><br />
              <em class="iSet pink">학원배송</em>
              <em class="iSet rose">업체배송</em>
              <br /><br />
              <strong>상태</strong><br />
              <em class="iSet yellow">제작중</em>
              <em class="iSet orange">제작완료</em>
              <br /><br />
              <strong>결제 팝업 내</strong><br />
              <em class="iSet green">가상계좌</em>
              <em class="iSet blue">카드</em>
              <em class="iSet sky">학원현금</em>
              <em class="iSet violet">학원카드</em>
              <em class="iSet orange">키오스크</em>
              <em class="iSet red">0원 수강</em>
            </td>
          </tr>
          <tr>
            <th>Image</th>
          </tr>
          <tr>
            <td>
              <span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tabContents" v-if="tab == 5">
      <div class="cptTable">
        <table>
          <tr>
            <th>Tab</th>
          </tr>
          <tr>
            <td>
              <!-- tab-wrap -->
              <div class="tabwrap">
                <!-- tab -->
                <div class="tabBack">
                  <div class="tabNav">
                    <nav>
                      <ul>
                        <!-- <li v-for="(tab, index) in tabs" :key="index" :class="{on:currentTab===index}"><button @click="currentTab = index">{{tab}}</button></li> -->
                        <li :class="{on:currentTab===0}"><button @click="currentTab = 0">tab1</button></li>
                        <li class="newCaption" :class="{on:currentTab===1}"><button @click="currentTab = 1">tab2</button></li>
                        <li :class="{on:currentTab===2}"><button @click="currentTab = 2">tab3</button></li>
                      </ul>
                      <span class="btnArea">
                        <a href="#" class="btnList">목록으로</a>
                        <button class="btnMsg">메세지발송</button>
                      </span>
                    </nav>
                  </div>
                </div>
                <!--// tab -->
                <div class="tabLayout">
                  <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                    Tab Menu 0 Data
                  </div>
                  <div v-if="currentTab == 1" class="tabData">Tab Menu 1 Data</div>
                  <div v-if="currentTab == 2" class="tabData">Tab Menu 2 Data</div>
                </div>
              </div>
              <!-- //tab-wrap -->
              <!-- tab-wrap2 -->
              <div class="tabwrap">
                <!-- tab -->
                <div class="tabBack">
                  <div class="tabNav">
                    <nav>
                      <ul class="sub">
                        <li :class="{on:currentTab2===0}"><button @click="currentTab2 = 0">tab1</button></li>
                        <li :class="{on:currentTab2===1}"><button @click="currentTab2 = 1">tab2</button></li>
                        <li :class="{on:currentTab2===2}"><button @click="currentTab2 = 2">tab3</button></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <!--// tab -->
                <div class="tabLayout">
                  <div v-if="currentTab2 == 0" class="tabData" :key="currentTab">
                    Tab Menu 0 Data
                  </div>
                  <div v-if="currentTab2 == 1" class="tabData">Tab Menu 1 Data</div>
                  <div v-if="currentTab2 == 2" class="tabData">Tab Menu 2 Data</div>
                </div>
              </div>
              <!-- //tab-wrap2 -->
            </td>
          </tr>
          <tr>
            <th>Area</th>
          </tr>
          <tr>
            <td>
              <strong>배경색 박스</strong>
              <div class="boxGray">Gray Area<br/>내용내용내용내용내용내용</div>
              <div class="boxBrown">Brown Area<br/>내용내용내용내용내용내용</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="tabContents" v-if="tab == 6">
      <div class="cptTable">
        <table>
          <tr>
            <th>Layer Popup</th>
          </tr>
          <tr>
            <td>
              <button class="btnS gray" @click="popupTrigger = true">타이틀 + 서브텍스트가 있는 경우</button>&nbsp;
              <button class="btnS gray" @click="popupTrigger02 = true">타이틀만 있는 경우</button>&nbsp;

              <!-- Layer Popup -->
              <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
                <div slot="modalheader" class="tL">
                  <h1>다운로드 마스터 - 회원</h1>
                  <span>*다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
                </div>
                <div slot="modalbody">변경된 내용</div>
              </Popup>
              <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue2">
                <h1 slot="modalheader" class="tC">URL</h1>
                <div slot="modalbody">변경된 내용02</div>
                <div slot="modalfooter" class="modalfooter">
                  <button class="btnM line" @click="popupTrigger02 = false">취소</button>
                  <button class="btnM green" @click="popupTrigger02 = false">저장</button>
                </div>
              </Popup>
              <!-- // Layer Popup -->
            </td>
          </tr>
          <tr>
            <th>Alert Popup</th>
          </tr>
          <tr>
            <td>
              <button class="btnS gray" @click="alertTrigger = true">alert 기본 팝업</button>&nbsp;
              <button class="btnS gray" @click="alertTrigger02 = true">alert 팝업</button>&nbsp;
              <button class="btnS gray" @click="alertTrigger03 = true">하단 버튼 1개</button>&nbsp;
              <button class="btnS gray" @click="alertTrigger04 = true">주의문구 팝업</button>&nbsp;
              <!-- Alert Popup -->
              <Alert v-if='alertTrigger' @close="alertTrigger = false"> <!-- 기본 (버튼 2개 - 취소, 확인) case -->
                <div slot="modalbody">내용만 입력하는 Template</div>
              </Alert>
              <Alert v-if='alertTrigger02' @close="alertTrigger02 = false"> <!-- 버튼 Custom case -->
                <template slot="modalbody">
                  하단 버튼의 구성을 변경할 수 있는 Template (소스 확인)
                </template>
                <template slot="modalfooter">
                  <button class="btnM gray" @click="alertTrigger02 = false">취소</button>
                  <button class="btnM green" @click="alertTrigger02 = false">저장</button>
                </template>
              </Alert>
              <Alert v-if='alertTrigger03' @close="alertTrigger03 = false"> <!-- 버튼 1개 case -->
                <template slot="modalbody">
                  메시지가 임시저장 되었습니다. 금일 내에 전송을 완료해주세요. 
                </template>
                <template slot="modalfooter">
                  <button class="btnM green solo" @click="alertTrigger03 = false">확인</button>
                </template>
              </Alert>
              <Alert v-if='alertTrigger04' @close="alertTrigger04 = false"> <!-- 주의문구 -->
                <template slot="modalbody">
                  <p>인강 전환을 취소하시겠습니까?</p>
                  <div class="notice">
                    <p class="red">- 취소 후 직강으로 다시 전환되며, 인강 수강이 불가합니다.</p>
                    <p class="red">- 당일 이전 직강일에 해당하는 인강은 잔여 배수가 유지됩니다.</p>
                  </div>
                </template>
                <template slot="modalfooter">
                  <button class="btnM gray" @click="alertTrigger04 = false">아니오</button>
                  <button class="btnM green" @click="alertTrigger04 = false">예</button>
                </template>
              </Alert>
              <!-- // Alert Popup -->
            </td>
          </tr>
          <tr>
            <th>Widnow Popup</th>
          </tr>
          <tr>
            <td>
              <button class="btnS gray" @click='WindowPopupComponent()'>윈도우 팝업</button>&nbsp;
            </td>
          </tr>
          <tr>
            <th>Toast Popup</th>
          </tr>
          <tr>
            <td>
              <button class="btnS gray" @click="toastPop('default', '안내성 토스트 팝업입니다. 정보안내, 설명 등에 사용합니다.')">안내 토스트 팝업 열기</button>&nbsp;
              <button class="btnS gray" @click="toastPop('error', '에러/실패 토스트 팝업입니다.')">에러 토스트 팝업 열기</button>&nbsp;
              <button class="btnS gray" @click="toastPop('success', '성공/완료 토스트 팝업입니다.')">성공 토스트 팝업 열기</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Mixin from '@/plugins/mixins/Mixins.js';

  export default {
    mixins: [Mixin],
    name: 'Uicomponent',
    data() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      return {
        tab: 1,
        counter: 0,
        attrs: [
          {
            key: 'success01',
            highlight: {
              color: 'green',
              fillMode: 'solid',
            },
            dates: new Date(year, month, 8),
          },
          {
            key: 'success02',
            highlight: {
              color: 'green',
              fillMode: 'solid',
            },
            dates: new Date(year, month, 10),
          },
          {
            key: 'due01',
            highlight: {
              color: 'gray',
              fillMode: 'solid',
            },
            dates: new Date(year, month, 15),
          },
          {
            key: 'due02',
            highlight: {
              color: 'green',
              fillMode: 'outline',
            },
            dates: new Date(year, month, 22),
          },
          {
            key: 'due03',
            highlight: {
              color: 'green',
              fillMode: 'outline',
            },
            dates: new Date(year, month, 24),
          },
          {
            key: 'due04',
            highlight: {
              color: 'green',
              fillMode: 'outline',
            },
            dates: new Date(year, month, 29),
          },
          {
            key: 'holiday01',
            highlight: {
              color: 'gray',
              fillMode: 'solid',
            },
            dates: new Date(year, month, 17),
          },
        ],

        classValue: "downloadPop",
        classValue2: "",
        currentTab: 0,
        currentTab2: 0,
        tabs: ['tab1', 'tab2', 'tab3'],
        popupTrigger: false,
        popupTrigger02: false,
        alertTrigger: false,
        alertTrigger02: false,
        alertTrigger03: false,
        alertTrigger04: false,
        date: '',
        date02: '',
        date03: '',
        dateWeekday: '',
        range: {
          start: '',
          end: '',
        },
        masks: {
          input: 'YYYY.MM.DD (W)',
        },
        dropToggle: false,
        dropToggle2: true,
        fileName: 'png, jpg, gif 파일 권장',
        multyFuleName: '파일업로드 placeholder 샘플',
        showFileChoice: true,
        showFileModify: false,
        //
        value: null,
        options: ['Vue.js', 'Rails', 'Sinatra', 'Laravel', 'Phoenix'],
        multiValue: null,
        multiValue2: null,
        optionsMulti: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Adonis', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP' },
          { name: 'Phoenix', language: 'Elixir' }
        ],
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
      WindowPopupComponent() {
        let routeData = this.$router.resolve({name: 'WindowPopupComponent', query: {data: "someData"}});
        window.open('/mkup/windowPopup/windowPopupComponent', '_blank', `width=1100,height=900`);
      }, // 윈도우팝업 호출
      fileUpload(event) {
        this.fileName = event.target.value;
      }, // 파일 업로드
      uploadMulty(event) {
        this.multyFuleName = event.target.value;
        this.showFileChoice = false;
        this.showFileModify = true;
      }, // 파일 업로드2
      

    },
    computed: {
      attributes() {
        return [
          // Attributes for todos
          ...this.todos.map(todo => ({
            dates: todo.dates,
            dot: {
              color: todo.color,
              class: todo.isComplete ? 'opacity-75' : '',
            },
            popover: {
              label: todo.description,
            },
            customData: todo,
          })),
        ];
      },
    },  
  }
</script>

<style lang="css" scoped>
#componentWrap {padding:10px 10px 100px;}
#componentWrap .tab {padding:15px 0 0;}
#componentWrap .tab:after {content:"";display:block;clear:both;}
#componentWrap .tab * {float:left;width:calc(100% / 3);height:50px;line-height:4;color:#333;text-align:center;border:1px solid #ddd;background:#fafafa;box-sizing:border-box;}
#componentWrap .tab *.on {font-size:14px;line-height:3.5;border:1px solid #666;background:#fff;font-weight:bold;}
#componentWrap .tabContents {padding-top:20px;}
#componentWrap table {width:100%;border:1px solid #eee;border-collapse:collapse;}
#componentWrap table th {border:1px solid #dddddd;padding:0.5rem;text-align:center;font-weight:bold;color:#111;}
#componentWrap table td {border:1px solid #dddddd;padding:0.5rem;}
#componentWrap table td > strong {display:inline-block;width:100%;margin:0 0 5px;}
#componentWrap table td button {vertical-align:top;}

.colorchips {display:flex;flex-direction:row;flex-wrap:wrap;}
.colorchip {display:inline-block;padding:6px 12px;width:25%;box-sizing:border-box;}
</style>
