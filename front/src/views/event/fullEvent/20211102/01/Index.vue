<template lang="html">
<div class="fullEventBox event2021110101">
  <div class="eventHead">
    <img :src="require(`@/views/event/fullEvent/20211102/01/images/img_head_event2021110101.jpg`)" alt="2020학년도 On-Line 교원임용 합격전략 온라인 설명회"/>
  </div>
  <div class="eventContents">
    <div class="frameBack">
      <div class="selectForm">
        <div class="selectArea">
          <span class="kind">
            <label>과목</label>
            <span class="selectSet">
              <select name="" id="">
                <option value="">과목을 선택해주세요</option>
                <option value="">중국어</option>
              </select>
            </span>
          </span>
          <span class="kind">
            <label>선생님</label>
            <span class="selectSet">
              <select name="" id="" @change="onChange($event)">
                <option value="0">선생님을 선택해주세요</option>
                <option value="1">희소 중국어팀</option>
              </select>
            </span>
          </span>
        </div>
      </div>
      <div class="annualPlan" v-if="choice == 1">
        <strong>2021년 대비 연간 계획</strong>
        <div class="planList">
          <div>
            <dl>
              <dt>01. 기본이론 <em>1-2월</em></dt>
              <dd>
                <strong>교육과정 총론반</strong>
                <span>
                  유아 임용고시를 처음 시작하는 수험생을 위한 기본이론 강의
                </span>
              </dd>
              <dd>
                <strong>교직논술 기초 첨삭반</strong>
                <span>
                  교직논술 왕초보 모여라!<br/>
                  글쓰기가 낯선 수험생, 그리고 올해 교직논술을 만점 받고 싶은 수험생 대상
                </span>
              </dd>
            </dl>
            <dl>
              <dt>02. 심화이론 <em>3-5월</em></dt>
              <dd>
                <strong>교육과정 각론반</strong>
                <span>
                  각론서 읽기 수준의 상세하고 깊이 있는 교재 읽기 및 설명
                </span>
              </dd>
              <dd>
                <strong>교직논술 및 서답식 답안쓰기 첨삭반</strong>
                <span>
                  600자 5회, 1200자 5회 논제 읽기/쓰기의 기본을 넘어 유능한 쓰기를 연습하고자 하는 수험생 대상
                </span>
              </dd>
            </dl>
            <dl>
              <dt>03. 문제풀이 <em>6-8월</em></dt>
              <dd>
                <strong>서답식 영역별 <strong>총정리 문제풀이</strong></strong>
                <span>
                  문제 형식으로 전 범위 총정리 <br/>실전 대비 이해/암기/적용 총정리 문제풀이반
                </span>
                </dd>
              </span>
              <dd>
                <strong>24년간 영역별 <strong>기출문제 분석반</strong></strong>
                <span>
                  24년간 기출문제 총정리<br/>
                  최근 기출 경향 이상의 꼼꼼한 기출 내용을 확인해보는 기회, 임용시험 고득점을 위한 탁월한 선택
                </span>
              </dd>
            </dl>
            <dl>
              <dt>04. 실전모고 <em>9-11월</em></dt>
              <dd class="long">
                <strong>실전 모의고사반</strong>
                <span>
                  실전 분위기의 교직논술(1200자) + 서답식 실전 모의고사 암기 및 이해한 내용을 적용해 볼 수 있는 실전 수준의 응용문제로 구성
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <!-- 강의 리스트 -->
      <div class="tabwrap" v-if="choice == 1">
        <!-- tab -->
        <div class="tabBack">
          <div class="tabNav">
            <nav>
              <ul class="blackLineTab">
                <li :class="{on:lectureTab===0}"><button @click="lectureTab = 0">서울 학원 강의</button></li>
                <li :class="{on:lectureTab===1}"><button @click="lectureTab = 1">대구 학원 강의</button></li>
                <li :class="{on:lectureTab===2}"><button @click="lectureTab = 2">동영상 강의</button></li>
              </ul>
            </nav>
          </div>
        </div>
        <!--// tab -->
        <div class="tabLayout">
          <div v-if="lectureTab == 0" class="tabData" :key="lectureTab">
            <!-- 선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
            <div class="subjectSet">
              <div class="ssamSet">
                <div class="ssamBasic gridSet">
                  <div class="gridItem name">
                    <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamL_mjmiddle_Zh01.png`)" alt="" /></span>
                    <div>
                      <em class="iSbjSetMini">중국어</em><strong>희소 중국어팀</strong>
                      <span class="msg">영역별 전문가의 고품격 명강의</span>
                    </div>
                  </div>
                  <div class="gridItem goBtn">
                    <span>
                      <router-link to="" class="ssamHome">선생님 홈</router-link>
                      <router-link to="" class="curriculum">연간 커리큘럼</router-link>
                      <router-link to="" class="ssamNotice">선생님 공지사항</router-link>
                    </span>
                  </div>
                </div>
                <div class="ssamLecList">
                  <ul>
                    <!--Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            상반기쌤팩
                            <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button class="btnPgOpner" :class="{on:toggleTrigger01===true}" @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button>
                            <button @click="benefitsPop = true">수강혜택</button>
                            <button @click="discountTipsPop = true" class="lecSale">수강할인 팁</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <!---->
                      <div class="inPackage" :class="{on:toggleTrigger01===true}">
                        <div class="widthList">
                          <ol>
                            <!--Loop-->
                            <li>
                              <div class="singleLec"> <!-- 패키지 내 단과일 경우 -->
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 1</em>
                                    <strong>키위 마인드맵반<i class="division">면접실연</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                              <div class="item">
                                <span class="tL">
                                  <em class="iPro book">교재</em>
                                  <strong>키위 마인드맵 설정</strong>
                                </span>
                                <span class="tR">
                                  <span class="price">
                                    <del>2,568,000</del>
                                    <strong>1,356,600<i>원</i></strong>
                                  </span>
                                  <span class="checkSet">
                                    <input type="checkbox" id="book01" />
                                    <label for="book01"><i></i>교재 구매</label>
                                  </span>
                                </span>
                              </div>
                            </li>
                            <!--//Loop-->
                            <li>
                              <div class="singleLec">
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 2</em>
                                    <strong>키위 최종 모의고사반<i class="division">기타특강</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div class="openerLine"><button @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button></div>
                        </div>
                      </div>
                      <!--//-->
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            이론핵심정리 및 문제풀이반<i class="division">이론강의</i>
                            <span class="msg">출제 포인트에 맞춘 영역별 핵심 문제&키워드 정리</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button @click="lecturePop2 = true">맛보기</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" disabled />
                            <label for="price01">
                              <i></i><em>교재(0)</em>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            하프모고반<i class="division">모의고사</i>
                            <span class="msg">강의 진도에 맞춘 기출과 자체 출제 문제 풀이를 통한 복습과 문제풀이 능력 향상</span>
                          </strong>
                          <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div>
                          <!---->
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- //선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
          </div>
          <div v-if="lectureTab == 1" class="tabData">
            <!-- 선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
            <div class="subjectSet">
              <div class="ssamSet">
                <div class="ssamBasic gridSet">
                  <div class="gridItem name">
                    <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamL_mjmiddle_Zh01.png`)" alt="" /></span>
                    <div>
                      <em class="iSbjSetMini">중국어</em><strong>희소 중국어팀</strong>
                      <span class="msg">영역별 전문가의 고품격 명강의</span>
                    </div>
                  </div>
                  <div class="gridItem goBtn">
                    <span>
                      <router-link to="" class="ssamHome">선생님 홈</router-link>
                      <router-link to="" class="curriculum">연간 커리큘럼</router-link>
                      <router-link to="" class="ssamNotice">선생님 공지사항</router-link>
                    </span>
                  </div>
                </div>
                <div class="ssamLecList">
                  <ul>
                    <!--Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            상반기쌤팩
                            <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button class="btnPgOpner" :class="{on:toggleTrigger01===true}" @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button>
                            <button @click="benefitsPop = true">수강혜택</button>
                            <button @click="discountTipsPop = true" class="lecSale">수강할인 팁</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <!---->
                      <div class="inPackage" :class="{on:toggleTrigger01===true}">
                        <div class="widthList">
                          <ol>
                            <!--Loop-->
                            <li>
                              <div class="singleLec"> <!-- 패키지 내 단과일 경우 -->
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 1</em>
                                    <strong>키위 마인드맵반<i class="division">면접실연</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                              <div class="item">
                                <span class="tL">
                                  <em class="iPro book">교재</em>
                                  <strong>키위 마인드맵 설정</strong>
                                </span>
                                <span class="tR">
                                  <span class="price">
                                    <del>2,568,000</del>
                                    <strong>1,356,600<i>원</i></strong>
                                  </span>
                                  <span class="checkSet">
                                    <input type="checkbox" id="book01" />
                                    <label for="book01"><i></i>교재 구매</label>
                                  </span>
                                </span>
                              </div>
                            </li>
                            <!--//Loop-->
                            <li>
                              <div class="singleLec">
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 2</em>
                                    <strong>키위 최종 모의고사반<i class="division">기타특강</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div class="openerLine"><button @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button></div>
                        </div>
                      </div>
                      <!--//-->
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            이론핵심정리 및 문제풀이반<i class="division">이론강의</i>
                            <span class="msg">출제 포인트에 맞춘 영역별 핵심 문제&키워드 정리</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button @click="lecturePop2 = true">맛보기</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" disabled />
                            <label for="price01">
                              <i></i><em>교재(0)</em>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            하프모고반<i class="division">모의고사</i>
                            <span class="msg">강의 진도에 맞춘 기출과 자체 출제 문제 풀이를 통한 복습과 문제풀이 능력 향상</span>
                          </strong>
                          <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div>
                          <!---->
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- //선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
          </div>
          <div v-if="lectureTab == 2" class="tabData">
            <!-- 선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
            <div class="subjectSet">
              <div class="ssamSet">
                <div class="ssamBasic gridSet">
                  <div class="gridItem name">
                    <span class="ssamImg"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamL_mjmiddle_Zh01.png`)" alt="" /></span>
                    <div>
                      <em class="iSbjSetMini">중국어</em><strong>희소 중국어팀</strong>
                      <span class="msg">영역별 전문가의 고품격 명강의</span>
                    </div>
                  </div>
                  <div class="gridItem goBtn">
                    <span>
                      <router-link to="" class="ssamHome">선생님 홈</router-link>
                      <router-link to="" class="curriculum">연간 커리큘럼</router-link>
                      <router-link to="" class="ssamNotice">선생님 공지사항</router-link>
                    </span>
                  </div>
                </div>
                <div class="ssamLecList">
                  <ul>
                    <!--Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            상반기쌤팩
                            <span class="msg">키위 마인드맵반 맛보기 강의 외</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button class="btnPgOpner" :class="{on:toggleTrigger01===true}" @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button>
                            <button @click="benefitsPop = true">수강혜택</button>
                            <button @click="discountTipsPop = true" class="lecSale">수강할인 팁</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <!---->
                      <div class="inPackage" :class="{on:toggleTrigger01===true}">
                        <div class="widthList">
                          <ol>
                            <!--Loop-->
                            <li>
                              <div class="singleLec"> <!-- 패키지 내 단과일 경우 -->
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 1</em>
                                    <strong>키위 마인드맵반<i class="division">면접실연</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                              <div class="item">
                                <span class="tL">
                                  <em class="iPro book">교재</em>
                                  <strong>키위 마인드맵 설정</strong>
                                </span>
                                <span class="tR">
                                  <span class="price">
                                    <del>2,568,000</del>
                                    <strong>1,356,600<i>원</i></strong>
                                  </span>
                                  <span class="checkSet">
                                    <input type="checkbox" id="book01" />
                                    <label for="book01"><i></i>교재 구매</label>
                                  </span>
                                </span>
                              </div>
                            </li>
                            <!--//Loop-->
                            <li>
                              <div class="singleLec">
                                <div class="item">
                                  <span class="tL">
                                    <em class="iPro">강좌 2</em>
                                    <strong>키위 최종 모의고사반<i class="division">기타특강</i></strong>
                                  </span>
                                  <span class="tR">
                                    <span class="lecLimit">
                                      <em>70일간</em><em>1.4배수</em><em>제작중</em>
                                    </span>
                                  </span>
                                </div>
                                <div class="lecBtnSet">
                                  <button @click="lecturePop = true, lecturePopTab = 0">맛보기</button>
                                  <button @click="lecturePop = true, lecturePopTab = 1">강좌소개</button>
                                  <button @click="lecturePop = true, lecturePopTab = 2">강좌리스트</button>
                                </div>
                              </div>
                            </li>
                          </ol>
                          <div class="openerLine"><button @click="toggleTrigger01 = !toggleTrigger01">포함 강좌 및 교재</button></div>
                        </div>
                      </div>
                      <!--//-->
                    </li>
                    <!--//Loop-->
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            이론핵심정리 및 문제풀이반<i class="division">이론강의</i>
                            <span class="msg">출제 포인트에 맞춘 영역별 핵심 문제&키워드 정리</span>
                          </strong>
                          <div class="lecBtnSet">
                            <button @click="lecturePop2 = true">맛보기</button>
                          </div>
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" disabled />
                            <label for="price01">
                              <i></i><em>교재(0)</em>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="lecBasic">
                        <div class="lecTt">
                          <strong class="tt">
                            하프모고반<i class="division">모의고사</i>
                            <span class="msg">강의 진도에 맞춘 기출과 자체 출제 문제 풀이를 통한 복습과 문제풀이 능력 향상</span>
                          </strong>
                          <div class="tL">
                            <em class="iPro book">교재</em>그린키위 교육학(기본)
                          </div>
                          <!---->
                        </div>
                        <div class="choice">
                          <span class="priceCheck">
                            <input type="checkbox" id="price0" checked />
                            <label for="price0">
                              <i></i><em>강좌(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>0<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                          <span class="priceCheck">
                            <input type="checkbox" id="price01" />
                            <label for="price01">
                              <i></i><em>교재(1)</em>
                              <span class="price">
                                <del>2,568,000</del>
                                <strong>1,356,600<i>원</i></strong>
                              </span>
                            </label>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- //선생님 수강신청 간략 버전 (ex - 쌤팩, 무료강의) -->
          </div>
        </div>
      </div>
      <!-- //강의 리스트 -->
    </div>
  </div>
</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
  },
  data() {
    return {
      choice:0,
      popupTrigger01:false,
      popupTrigger02:false,
      toggleTrigger01:false,
      discountTipsPop:false,
      lecturePop2:false,
      benefitsPop:false,
      lecturePop:false,
      videoPopTrigger01:false,
      unOpenPopupTrigger:false,
      lecturePopTab:0,
      lecturePopTab2:0,
      lectureTab: 0,
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == '0') this.choice = 0;
      else if (value == '1') this.choice = 1;
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>
<style lang="css" scoped src="@/views/event/fullEvent/20211102/01/css/common.css"></style>
