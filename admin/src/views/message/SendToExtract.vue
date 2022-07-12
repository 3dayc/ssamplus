<template lang="html">
  <div>
    <div class="pageTit">
      <h2>발송대상 추출</h2>
      <span><router-link to="/mkup/message/smsLms">메시지 관리</router-link><router-link to="/mkup/message/smsLms">SMS 관리</router-link><em>발송대상 추출</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="sendToExtract"><!-- class 없어도 유지 -->
        <div class="boardTop">
          <div class="left-po">
            <strong class="infoMsg fGreen">ⓘ 조건을 활용하여 SMS 발송대상을 csv 파일로 추출할 수 있습니다.</strong>
          </div>
          <div class="right-po">
            <button class="btnDownload">다운로드</button>
            <button class="btnUpdate">초기화</button>
          </div>
        </div>
        <!-- 필수 조건 -->
        <div class="contentsBox">
          <div class="optionList">
            <dl>
              <dt>
                <span class="checkSet">
                  <input type="checkbox" id="required" checked disabled/>
                  <label for="required"><i></i>필수 조건</label>
                </span>
              </dt>
              <dd>
                <button class="btnS line" @click="popTrigger = true">준비중인 시험 선택</button>
                <span class="supUtilTxt mt10 fGreen">국어  |  영어  |  수학  |  음악  |  미술  |  체육  |  중국어  |  일본어  |  한문  |  가정  |  도덕윤리  |  미용  |  의상  |  디자인 · 공예  |  전기  |  전자  |  통신  |  정보컴퓨터  |  기술  |  상업  |  기계  |  재료  |  화공  |  섬유</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //필수 조건 -->
        <div class="contentsBox halfBox">
          <!-- 포함하는 회원 -->
          <div>
            <div class="subTit"><h3>포함하는 회원</h3></div>
            <span class="supUtilTxt"> ⓘ 아래에 선택한 조건을 갖고 있는 회원을 포함합니다.</span>
            <div class="optionList">
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="joinDate01" checked/>
                    <label for="joinDate01"><i></i>회원가입일</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date01" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="joinDate01" />
                    <label for="joinDate01"><i></i>최종 로그인 일자</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date01" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="lecture01" />
                    <label for="lecture01"><i></i>수강 강좌</label>
                  </span>
                </dt>
                <dd>
                  <button class="btnS line" @click="MsgLecture()">강좌검색</button><!-- 2021-12-23 버튼 텍스트 수정 -->
                  <div class="tls mt10">
                    <table>
              				<colgroup>
                        <col width="80">
              					<col width="300">
                        <col width="280">
              				</colgroup>
              				<thead>
              					<tr>
              						<th scope="col">강좌번호</th>
              						<th scope="col">강좌명</th>
              						<th scope="col">수강생 구분</th>
              					</tr>
              				</thead>
              				<tbody>
              					<!--Loop-->
              					<tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
              					<!--//Loop-->
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <!-- 데이터 없을 경우 -->
                        <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                        <!-- //데이터 없을 경우 -->
              				</tbody>
              			</table>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="history01" checked/>
                    <label for="history01"><i></i>결제 이력</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date05" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date06" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="history01" />
                    <label for="history01"><i></i>총 결제 금액</label>
                  </span>
                </dt>
                <dd>
                  <span class="unit w150 mr5">
                    <input type="text"/>
                    <em>원</em>
                  </span> 이상
                </dd>
              </dl>
            </div>
          </div>
          <!-- //포함하는 회원 -->
          <!-- 제외하는 회원 -->
          <div>
            <div class="subTit"><h3>제외하는 회원</h3></div>
            <span class="supUtilTxt"> ⓘ 아래에 선택한 조건을 갖고 있는 회원을 제외합니다.</span>
            <div class="optionList">
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="joinDate01" checked/>
                    <label for="joinDate01"><i></i>회원가입일</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date01" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="joinDate01" />
                    <label for="joinDate01"><i></i>최종 로그인 일자</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date01" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="lecture01" />
                    <label for="lecture01"><i></i>수강 강좌</label>
                  </span>
                </dt>
                <dd>
                  <button class="btnS line" @click="MsgLecture()">강좌검색</button><!-- 2021-12-23 버튼 텍스트 수정 -->
                  <div class="tls mt10">
                    <table>
              				<colgroup>
                        <col width="80">
              					<col width="300">
                        <col width="280">
              				</colgroup>
              				<thead>
              					<tr>
              						<th scope="col">강좌번호</th>
              						<th scope="col">강좌명</th>
              						<th scope="col">수강생 구분</th>
              					</tr>
              				</thead>
              				<tbody>
              					<!--Loop-->
              					<tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
              					<!--//Loop-->
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <tr>
              						<td>12345</td>
                          <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                          <td>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>유료 수강생</label>
                            </span>
                            <span class="checkSet">
                              <input type="checkbox" id="chk5">
                              <label for="chk5"><i></i>무료 수강생</label>
                            </span>
                          </td>
              					</tr>
                        <!-- 데이터 없을 경우 -->
                        <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                        <!-- //데이터 없을 경우 -->
              				</tbody>
              			</table>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="history01" checked/>
                    <label for="history01"><i></i>결제 이력</label>
                  </span>
                </dt>
                <dd>
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date05" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date06" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </dd>
              </dl>
              <dl>
                <dt>
                  <span class="checkSet">
                    <input type="checkbox" id="history01" />
                    <label for="history01"><i></i>총 결제 금액</label>
                  </span>
                </dt>
                <dd>
                  <span class="unit w150 mr5">
                    <input type="text"/>
                    <em>원</em>
                  </span> 이상
                </dd>
              </dl>
            </div>
          </div>
          <!-- //제외하는 회원 -->
        </div>

      </div>
    </article>
    </div>

    <!-- Popup -->
    <Popup v-if='popTrigger' @close="popTrigger = false">
      <div slot="modalheader" class="tL">
        <h1>준비중인 시험 선택</h1>
        <span>* 필수 조건으로 적용할 회원의 준비중인 시험을 선택할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col style="width:20%;"/>
              <col>
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </th>
                <th>준비중인 시험</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">유아</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">초등</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">국어</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">영어</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">수학</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">음악</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">미술</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">체육</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">중국어</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">일본어</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">한문</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">가정</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">도덕윤리</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">미용</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">의상</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">디자인ㆍ공예</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">전기</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">전자</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">통신</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">정보컴퓨터</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">기술</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">상업</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">기계</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">재료</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">화공</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">섬유</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">조리</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">조리</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">식물자원,조경</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">연극ㆍ영화</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">동물자원</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">농공</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">관광</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">환경</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">항해</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">기관</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">건설</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">수산ㆍ해양</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">역사</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">지리</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">일반사회</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">물리</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">화학</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">생물</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">지구과학</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">사서</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">영양</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">전문상담</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">보건</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">유아특수</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">초등특수</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="" />
                    <label for=""><i></i></label>
                  </span>
                </td>
                <td class="tL">중등특수</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM green" @click="popTrigger = false">저장</button>
        <button class="btnM line" @click="popTrigger = false">취소</button>
      </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SendToExtract',
  data() {
    return {
      date01: '',
      date02: '',
      date03: '',
      date04: '',
      date05: '',
      date06: '',
      date07: '',
      date08: '',
      date09: '',
      date10: '',
      date11: '',
      date12: '',
      popTrigger: false,
    }
  },
  methods: {
    MsgLecture() {
      let routeData = this.$router.resolve({name: 'MsgLecture', query: {data: "someData"}});
      window.open('/mkup/windowPopup/msgLecture', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },
}
</script>
