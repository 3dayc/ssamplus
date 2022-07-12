<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="mockStareView">
          <div class="subTit">
            <h3>응시 모의고사 관리</h3>
          </div>
          <div class="boardDetail">
            <div class="boardHead mockCase">
              <em class="iMockSet">응시가능</em>
              <div class="lecKind">현장 응시 모의고사</div>
              <strong>제 16회 희소 모의고사 (현장 응시, 2022학년도)</strong>
              <div class="boardInfo">
                <em>1교시 : <i>교육학(김현)</i></em>
                <em>2교시 : <i>국어(김준)</i></em>
                <em>3교시 : <i>국어(김준)</i></em>
                <em><i>응시기간  </i> : 2021-08-01</em>
              </div>
            </div>
            <div class="mockInfo">
              <dl :class="{on:kindTrigger == true}">
                <dt @click="kindTrigger = !kindTrigger">유의사항</dt>
                <dd v-if="kindTrigger == true">
                  <span>정해진 시간까지 결제를 완료해 주시기 바랍니다. 결제 미완료 시신청내역이 삭제됩니다. <br/>선 접수/ 일반 접수 : 신청 당일 자정(24:00)까지 결제 완료 (신청 마지막 날은 23:00까지 결제완료)</span>
                  <span>현장 모의고사 신청 후 온라인 모의고사로 전환 불가합니다. (역의 경우도 동일)</span>
                  <span>모의고사 환불은 2021-07-15  18:00까지만 가능하면 그 이후에는 환불이 불가합니다.</span>
                  <span>신청 마감된 과목의 경우 환불 불가능합니다.</span>
                </dd>
              </dl>
            </div>
          </div>
          <!-- 진행 현황 --><!-- //진행 현황 -->
          <!-- 공지사항 & Q&A -->
          <div class="tabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul>
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">진행 현황</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">모의고사 공지사항</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout ">
              <!-- 진행 현황 -->
              <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                <div class="resTls mockTestSchedule">
                  <!-- //list -->
                  <div class="tbody">
                    <ul>
                      <!--현장 -->
                      <li class="listGrid">
                        <span class="lgItem item0">신청 및 결제 완료</span>
                        <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                        <span class="lgItem item2"></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">수험표 출력</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31</span>
                        <span class="lgItem item2">
                          <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                          <em>수험표 출력 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                        <span class="lgItem item0">고사장 방문</span>
                        <span class="lgItem item1"><em class="mTit">수험일자 : </em>2021-08-01</span>
                        <span class="lgItem item2"></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">해설 강의</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31 </span>
                        <span class="lgItem item2"><em>해설 강의 기간이 아닙니다</em></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">성적표 확인</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 <em>추후 발표 예정</em></span>
                        <span class="lgItem item2"><em>성적표 확인 기간이 아닙니다</em></span>
                      </li>
                      <!--//현장 -->
                    </ul>
                    <ul>
                      <!-- 온라인/ 봉투, 채점 O -->
                      <li class="listGrid">
                        <span class="lgItem item0">신청 및 결제 완료</span>
                        <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                        <span class="lgItem item2"></span>
                      </li>
                      <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                        <span class="lgItem item0">수험표 출력</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31 </span>
                        <span class="lgItem item2">
                          <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                          <em>수험표 출력 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">시험지 배송</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-01 ~ 2021-08-08</span>
                        <span class="lgItem item2"><button class="btnS" @click="popupTrigger2 = true, scrollHiden($event)">배송 정보 확인</button></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">시험 응시</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31</span>
                        <span class="lgItem item2">
                          <button class="btnS red" @click="morkupExamStartTrigger = true">시험 시작</button>
                          <em>시험 응시 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">답안지 업로드</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-09-07</span>
                        <span class="lgItem item2">
                          <button class="btnS" @click="popupTrigger3 = true, scrollHiden($event)">답안지 업로드</button>
                          <em>답안지 업로드기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">해설 강의</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-09-08 ~ 2021-09-22</span>
                        <span class="lgItem item2"><em>모의고사 성적/해설 메뉴에서 확인해 주세요</em></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">성적표 확인</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-09-08</span>
                        <span class="lgItem item2"><em>모의고사 성적/해설 메뉴에서 확인해 주세요</em></span>
                      </li>
                      <!-- //온라인/ 봉투, 채점 O -->
                    </ul>
                    <ul>
                      <!-- 온라인/ 비봉투, 채점 X -->
                      <li class="listGrid">
                        <span class="lgItem item0">신청 및 결제 완료</span>
                        <span class="lgItem item1"><em class="mTit">마감일자 : </em>2021-06-25</span>
                        <span class="lgItem item2"></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">수험표 출력</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-07-25 ~ 2021-07-31</span>
                        <span class="lgItem item2">
                          <button class="btnPrint" @click="popupTrigger = true, scrollHiden($event)">수험표 출력</button>
                          <em>수험표 출력 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">시험지 출력</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-01 ~ 2021-08-08</span>
                        <span class="lgItem item2">
                          <button class="btnPrint" @click="popupTrigger6 = true, scrollHiden($event)">시험지/답안지 출력(3)</button>
                          <em>시험지/답안지 출력 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid ing"> <!-- 진행중 일 경우 -->
                        <span class="lgItem item0">시험 응시</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-08-31</span>
                        <span class="lgItem item2">
                          <button class="btnS red" @click="morkupExamStartTrigger = true">시험 시작</button>
                          <em>시험 응시 기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">자가 채점 입력</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15 ~ 2021-09-07</span>
                        <span class="lgItem item2">
                          <button class="btnS" @click="popupTrigger5 = true, scrollHiden($event)">자가 채점 입력</button>
                          <em>자가 채점 입력기간이 아닙니다</em>
                        </span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">해설 강의</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15</span>
                        <span class="lgItem item2"><em>모의고사 성적/해설 메뉴에서 확인해 주세요</em></span>
                      </li>
                      <li class="listGrid">
                        <span class="lgItem item0">성적표 확인</span>
                        <span class="lgItem item1"><em class="mTit">기간 : </em>2021-08-15</span>
                        <span class="lgItem item2"><em>모의고사 성적/해설 메뉴에서 확인해 주세요</em></span>
                      </li>
                    </ul>
                    <!-- //온라인/ 비봉투, 채점 X -->
                  </div>
                  <!-- //list -->
                </div>
              </div>
              <!-- //진행 현황 -->
              <!-- 모의고사 공지사항 -->
              <div v-if="currentTab == 1" class="tabData">
                <MockNotice />
              </div>
              <!-- //모의고사 공지사항 -->
            </div>
          </div>
          <!-- //공지사항 & Q&A -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 수험표확인 팝업 -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" class="examTicketPopup">
      <template slot="modalheader">
        <div>
          <h1>수험표 확인</h1>
        </div>
      </template>
      <template slot="modalbody">
        <!--온라인 수험표 // -->
        <!-- <div class="modal_onLine">
          <div class="resTls subCase">
            <table class="tbody">
              <thead>
                <tr>
                  <td colspan="6">
                    수 험 표 <span class="number">[1차 시험]</span><br/>
                    <span class="tit">2022학년도 대비 희소 모의고사</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>교과</th>
                  <td>유아(배지윤)</td>
                  <th>성명</th>
                  <td>박나현</td>
                  <th>성별</th>
                  <td>여</td>
                </tr>
                <tr>
                  <th>수험번호</th>
                  <td>21010012</td>
                  <th>시험장소</th>
                  <td colspan="3">쌤플러스 온라인</td>
                </tr>
              </tbody>
            </table>
            <div class="tfoot">
              <span><img :src="require(`@/assets/images/kg_logo.svg`)" alt="" /></span>
              <span class="tel">교원임용 희소/쌤플러스 | 1544-0678 |</span>
            </div>
          </div>
          <dl>
            <dt>※ 응 시 자 유 의 사 항</dt>
            <dd>
              1. 시험일자
              <span>- 중등, 중등특수 : 2021-06-14(월) ~ 2021-06-21(월)</span>
            </dd>
            <dd>
              2. 준비사항
              <span>- 수험표(낙서 및 메모 금지, 응시자 유의사항 확인용)</span>
              <span>- 번지거나 지워지지 않는 동일한 종류의 검은색 필기구(사인펜, 연필 사용 금지)</span>
            </dd>
            <dd>
              3. 유의사항
              <span>
                - 응시자는 시험 종료 이전에는 일절 퇴실할 수 없습니다. 응시자는 시험 도중 화장실 출입 등 모든 행동이 통제되오니 건강관리에 유의하시기 바라며, 시험시작 전 또는 휴식시간을 활용하시기 바랍니다.
              </span><br/>
              <span>
                - 답안작성은 <em class="red">지워지거나 번지지 않는 동일한 종류의 검은색 필기구만을 사용해야 하며, 연필로 작성하거나 답안 작성 란에 불필요한 표시(성명, 수험번호 등)를 한 답안은 채점하지 않습니다.</em>
              </span>
            </dd>
          </dl>
          <dl class="required">
            <dt><strong class="blue">※ 온라인 모의고사 응시자 필독사항 ※</strong></dt>
            <dd>
              1. 온라인 모의고사 시스템은 1회만 응시 가능합니다. 기간 내 원하는 시간 어느 때나 시험응시가 가능하오나, 실제 시험과 동일한 오전 시간 시험을 응시하는 것을 추천드립니다.<br>
              <em class="blue">(온라인 모의고사 시스템은 1교시 시작 25분 전부터 시작됩니다. 실제 시험과 동일한 시간에 응시를 원하는 경우 오전 8시 35분 부터 응시 시작을 해주시기 바랍니다.)</em>
            </dd>
            <dd>
              2. 시험 응시 시작버튼 클릭과 동시에 시험이 바로 시작되오니 준비가 완료 된 상태에서 시험을 시작 해주시기 바랍니다.<br> 시험 중간에 브라우저 창을 닫아도, 처음 시작하기 버튼을 누른 시간부터 시험은 계속됩니다.
            </dd>
            <dd>
              3. 온라인 모의고사는 실제 시험 진행 시간에 맞게 음성 안내가 진행되오니, 스피커 음량을 조절하신 후 시험에 응시하시기 바랍니다.
            </dd>
            <dd>
              4. <em class="red">온라인 채점 응시자의 경우 (중등) 2022-06-16  23:00까지 답안 업로드가 완료</em>되어야 채점이 가능하오니 기간 내에 답안지를 업로드 해주시기 바랍니다. 또한, 1,2,3교시 답안을 모두 제출했을 경우에만 채점이 제공됩니다. (한 교시라도 답안 미제출 시 전제 답안 미채점 됩니다.)<br>
              <em class="red"> 단, 1교시 미채점 되는 일부 과목의 경우 2, 3교시 답안지를 제출 하시면 채점 및 성적표가 제공됩니다.</em>
            </dd>
            <dd>
              5. <em class="red">답안 제출 시에는 업로드 된 답안 이미지를 미리 확인 하셔야 하며, 답안을 알아볼 수 없게 업로드 된 경우, 규정에 맞게 업로드 되지 않은 경우에는 채점이 진행되지 않습니다.</em>
            </dd>
          </dl>
        </div> -->
        <!-- <div style="page-break-before:always"></div> -->
        <!--현장 수험표 // -->
        <div class="modal_onSite">
          <div class="resTls subCase">
            <div class="overflow_x">
              <table class="tbody">
                <thead>
                  <tr>
                    <td colspan="6">
                      수 험 표 <span class="number">[1차 시험]</span><br/>
                      <span class="tit">2022학년도 대비 희소 모의고사</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>교과</th>
                    <td>유아(배지윤)</td>
                    <th>성명</th>
                    <td>박나현</td>
                    <th>성별</th>
                    <td>여</td>
                  </tr>
                  <tr>
                    <th>수험번호</th>
                    <td>21010012</td>
                    <th>시험장소</th>
                    <td>쌤플러스 온라인</td>
                    <th>시험실</th>
                    <td>제1시험실</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="tfoot">
              <span><img :src="require(`@/assets/images/kg_logo.svg`)" alt="" /></span>
              <span class="tel">교원임용 희소/쌤플러스 | 1544-0678 |</span>
            </div>
          </div>
          <dl>
            <dt>※ 응 시 자 유 의 사 항</dt>
            <dd>
              1. 응시자는 시험 당일 <em class="red">수험표와 신분증을 반드시 지참하여 시험시작 30분 전까지 해당 시험실에 입실</em>하여야 하며, 수험표를 지참하지 않았을 경우 시험시작 40분전까지 신분증을 지참하여 지정된 장소에서 재발급 받아야 합니다.<br>
              * 시험 당일 모든 응시자는 발열체크 후 시험장 입실함에 따라 입실 시간이 지체될 수 있으므로 시험장에
              여유롭게 도착해주시기 바랍니다.
            </dd>
            <dd>
              2. 시험 당일 발열(37.5도 이상)이 있는 경우 출입이 제한되오며, 발열 또는 호흡기 이상 등 특이사항이 있는 경우 반드시
              도중 화장실 출입 등 모든 행동이 통제되오니 건강관리에 유의하시기 바라며, 시험시작 전 또는 휴식시간을 활용하시기 바랍니다.<br>
              ※ 단, 부득이한 사정(생리현상 등)으로 퇴실을 할 경우 <em class="red">재입실이 불가, 시험이 종료되며 채점이 진행되지<br/>
              않습니다.</em>
            </dd>
            <dd>
              3. 답안작성은 <em class="red">지워지거나 번지지 않는 동일한 종류의</em> 검은색 <em class="red">필기구만을 사용해야하며, 연필로 작성하거나</em> 감독관에게 알려 주시기 바랍니다.
            </dd>
            <dd>
              4. 시험장 안팎에서 불필요한 대화를 자제하여 주시기 바랍니다.
            </dd>
            <dd>
              5. 채점 및 성적표 제공은 1, 2, 3교시 답안을 모두 제출했을 경우에만 진행됩니다. (한 교시라도 답안 미제출시 전체 답안 미채점 됩니다.)<br>
              <em class="red">- 1교시 미채점 되는 일부 과목의 경우 2, 3교시 답안지를 제출하시면 채점 및 성적표가 제공됩니다.</em>
            </dd>
            <dd>
              6. 간식(도시락)은 개인별로 준비하시기 바라며, 별도의 중식시간이 없으므로 평가위원 휴식시간(점심시간)에 시험실(대기실) 내 지정된 본인 좌석에서 섭취하시기 바랍니다.
            </dd>
            <dd>
              7. 시험 당일 시험장의 주차시설 부족 및 교통 혼잡이 예상되오니, 가능한 한 대중교통을 이용하시기 바랍니다.
            </dd>
            <dd>
              8. 다음 각 호의 사항을 부정행위라 하며, 부정행위 적발 시 즉시 퇴실조치 합니다.
              <span>1) 다른 수험생의 답안지를 보거나 본인의 답안지를 보여주는 행위</span>
              <span>2) 통신기기, 그 밖의 신호 등을 이용하여 당해 시험내용에 관하여 다른 사람과 의사소통 하는 행위</span>
              <span>3) 부정한 자료를 가지고 있거나 이용하는 행위</span>
              <span>4) 그 밖에 부정한 수단으로 본인 또는 다른 사람의 시험 결과에 중대한 영향을 미치는 행위</span>
              <span>5) 시험 시작 전 또는 종료 후에 답안을 작성하는 행위</span>
              <span>6) 그 밖에 시험의 공정한 관리에 영향을 미치는 아래 행위 등</span>
                  <span>- 감독관의 본인확인 및 소지품 검색 요구에 따르지 않는 행위</span>
                  <span><em class="red">- 시험실에 소지(반입)금지 물품을 반입하여 시험 시작 전 감독관에게 이를 제출하지 않는 행위</em></span>
                  <span><em class="red">※ 소지(반입) 금지물품: 휴대폰(통신기기), 태블릿PC, 노트북, 넷북, MP3, 전자계산기, 스마트 워치 등 모든 전자기기</em></span>
            </dd>
          </dl>
          <dl class="required">
            <dt><strong class="blue">※ 코로나 19 대응 수험생 행동수칙 ※</strong></dt>
            <dd>
              1. 수험생은 시험장 출입 전 반드시 <em class="blue">손 소독제로 손을 소독한 후, 발열검사를 받아야 하며, 개인 마스크를 착용해야 합니다.</em><br>
              * 마스크 미 착용시 입실, 응시가 불가능하며, 시험진행 중 ‘코로나19’ 예방수칙을 준수하지 않거나, 감독관의 정당한 통제에 불응하는 경우 퇴실 될 수 있습니다.
            </dd>
            <dd>
              2. 시험 당일 발열(37.5도 이상)이 있는 경우 출입이 제한되오며, 발열 또는 호흡기 이상 등 특이사항이 있는 경우 반드시 
              감독관에게 알려 주시기 바랍니다.
            </dd>
            <dd>
              3. 시험장 안팎에서 불필요한 대화를 자제하여 주시기 바랍니다.
            </dd>
          </dl>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn" id="app">
          <button class="btnL line" @click="popupTrigger = false, scrollHiden($event)" >닫기</button>
          <button class="btnL" v-if="!this.mobile" @click="printWindow">인쇄</button>
        </div>
      </template>
    </Popup>

    <!-- //수험표확인 팝업 -->
    <!-- 배송지 정보 Popup -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="deliveryAddressPop">
      <template slot="modalheader">
        <div>
          <h1>배송지 정보</h1>
          <button @click="popupTrigger2 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardWrite">
          <dl>
            <dt>수령인(이름)</dt>
            <dd><input type="text" /></dd>
          </dl>
          <dl>
            <dt>연락처</dt>
            <dd><input type="text" placeholder="- (하이픈)을 제외하고 입력" /></dd>
          </dl>
          <dl>
            <dt>배송 주소</dt>
            <dd>
              <div class="addressSet">
                <div @click="agencyOKTrigger = true">
                  <span v-if="!this.addressRecord">우편번호 찾기</span>
                  <p v-if="addressRecord">[00000] 서울특별시 마포구 상암동</p>
                </div>
                <input type="text" placeholder="상세주소" v-if="addressRecord" />
              </div>
            </dd>
          </dl>
        </div>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger2 = false, scrollHiden($event)">취소</button>
          <button class="btnL" @click="popupTrigger2 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- 배송지 정보 Popup -->
    <!-- 우편번호 검색 예시  -->
    <Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
      <template slot="modalbody">
        <img :src="require(`@/assets/images/img_agencyOK2.png`)" alt="" @click="agencyOKTrigger = false; addressRecord = true" />
      </template>
    </Popup>
    <!-- //우편번호 검색 예시 -->
    <!-- 답안지 업로드 팝업 -->
    <Popup v-if='popupTrigger3' @close="popupTrigger3 = false" class="examEndUploadPopup">
      <template slot="modalheader">
        <div>
          <h1>답안지 제출</h1>
          <button @click="popupTrigger3 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <div class="box">
            <span class="uploadFile verM">
              <i>파일명 규칙은 <strong>수험번호(응시자성명).pdf</strong> 입니다.</i>
              <span>
                <input type="file" id="fileUpload"/>
                <label for="fileUpload">+ 파일첨부</label>
              </span>
            </span>
            <ul class="uploadFileList">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>※ 1. 답안지는 제출기한 내에 제출해 주세요 (기한만료 후 제출 불가)</span>
          <span>※ 2. 파일명 명명 규칙을 준수하여 업로드 해 주세요.</span>
          <span>※ 3. 답안지는 1개의 pdf 파일로 제출이 가능합니다.</span>
          <span>※ 4. 여러 번 파일을 제출할 경우 최종 파일로 채점이 됩니다.</span>
        </p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger3 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger3 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //답안지 업로드 팝업 -->
    <!-- 자가 채점 입력 팝업 -->
    <Popup v-if='popupTrigger5' @close="popupTrigger5 = false" class="large examSelfResultPopup">
      <template slot="modalheader">
        <div>
          <h1>자가 채점 입력 <em>10010001 / 홍길동</em></h1>
          <button @click="popupTrigger5 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <MorkExamSelfResult />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line"  @click="popupTrigger5 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger5 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //자가 채점 입력 팝업 -->
    <!-- 시험지/답안지 출력 팝업 -->
    <Popup v-if='popupTrigger6' @close="popupTrigger6 = false" class="examPrintPopup">
      <template slot="modalheader">
        <div>
          <h1>시험지/답안지 출력</h1>
          <button @click="popupTrigger6 = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail write">
          <div class="box">
            <ul class="uploadFileList">
              <li class="printCase">
                <i>시험지</i>
                <span class="name">10010001(홍길동).PDF</span>
                <span class="btnBox">
                  <em>(인쇄횟수제한 : <strong>3</strong>/5)</em>
                  <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                </span>
              </li>
              <li class="printCase">
                <i>답안지</i>
                <span class="name">10010001(홍길동).PDF</span>
                <span class="btnBox">
                  <em>(인쇄횟수제한 : <strong>0</strong>/5)</em>
                  <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>※ 1. 인쇄에 횟수제한이 있을 경우 지정 횟수 이상으로 인쇄할 수 없습니다. <em>인쇄 횟수에 유의해 주세요</em></span>
        </p>
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger6 = false, scrollHiden($event)">취소</button>
          <button class="btnL"  @click="popupTrigger6 = false, scrollHiden($event)">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //시험지/답안지 출력 팝업 -->
    <!-- 강의자료 모바일 안내 -->
    <Alert v-if='morkupExamStartTrigger' @close="morkupExamStartTrigger = false">
      <template slot="modalbody">
        <div class="leftTxtNoty">
          <p>
            쉬는 시간 설정을 할 수 있습니다.<br/>쉬는 시간 있음 : 실제시험과 동일<br/>쉬는 시간 없음 : 쉬는시간을 스킵함
          </p>
        </div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="morkupExamStartTrigger = false">쉬는 시간 없음</button>
        <button class="btnM" @click="morkupExamStartTrigger = false, morkupExamStartPopupTrigger = true, scrollHiden($event)">쉬는 시간 있음</button>
      </template>
    </Alert>
    <!-- //강의자료 모바일 안내-->
    <!-- 시험응시 팝업-->
    <div v-if='morkupExamStartPopupTrigger' @close="morkupExamStartPopupTrigger = false" class="morkupExamStartPopup">
      <div class="back">
        <div class="modalheader">
          <h1>제 16회 희소 쌤플러스 온라인 모의고사</h1>
          <span>
            <button class="go" v-if="gostopTrigger === true" @click="gostopTrigger = !gostopTrigger">시험진행<em>(00:00 / 20:00)</em></button>
            <button class="stop" v-if="gostopTrigger === false" @click="gostopTrigger = !gostopTrigger">일시정지<em>(12:55 / 20:00)</em></button>
          </span>
          <button @click="morkupExamStartPopupTrigger = false, scrollHiden($event)" class="modalClose">close</button>
        </div>
        <MorkExamPaper />
      </div>
    </div>
    <!-- //시험응시 팝업 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import MockNotice from '@/views/mylec/MockNotice.vue';
import MorkExamPaper from '@/views/mylec/MorkExamPaper.vue';
import MorkExamSelfResult from '@/views/mylec/MorkExamSelfResult.vue';

export default {
  mixins: [Mixin],
  name: 'MockStareView',
  components: {
    MockNotice,
    MorkExamPaper,
    MorkExamSelfResult
  },
  data() {
    return {
      currentTab: 0,
      kindTrigger: true,
      popupTrigger: false,
      popupTrigger2: false,
      popupTrigger3: false,
      popupTrigger5: false,
      popupTrigger6: false,
      agencyOKTrigger: false,
      addressRecord: false,
      morkupExamStartTrigger: false,
      morkupExamStartPopupTrigger: false,
      gostopTrigger: true,
    }
  },
  methods:{
    printWindow: function () {		
      window.print();
    }
  }
}
</script>