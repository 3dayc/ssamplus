<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="insideIndex">
          <!---->
          <div class="insideMainSlogan">
            <div class="frameBack fitstArea">
              <p class="mainCopy"><span data-aos="fade-up" data-aos-duration="1000">선생님을 향한 꿈,</span> <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"><strong>희소/쌤플러스</strong>가 동행합니다.</span></p>
              <p class="subTxt">
                <span data-aos="fade-in" data-aos-delay="300">선생님의 꿈을 함께 하는 것은</span><br/>
                <span data-aos="fade-in" data-aos-delay="450">우리를 가장 행복하게 하는 일이자</span><br/>
                <span data-aos="fade-in" data-aos-delay="600">우리가 가장 잘 하는 일입니다.</span>
              </p>
              <div class="cut" data-aos="fade-in" data-aos-delay="500">
                <div><img :src="require(`@/assets/images/img_inside_mainSlogan01.png`)" alt=""/></div>
                <span><img :src="require(`@/assets/images/img_inside_mainSlogan02.png`)" alt=""/></span>
              </div>
            </div>
            <div class="back">
              <div class="frameBack">
                <p class="mainCopy" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700"><strong>우리의 목표</strong>는 <span>분명합니다.</span></p>
                <p class="subTxt">
                  <span data-aos="fade-in" data-aos-delay="800">예비 임고생의 쉽고 편한 “첫 시작”,</span><br/>
                  <span data-aos="fade-in" data-aos-delay="950">그리고 합격으로 가는 올바른 학습의 “과정”</span>
                </p>
                <p class="andTxt">
                  <span data-aos="fade-in" data-aos-delay="1000">희소/쌤플러스는 여러분에게 약속합니다.</span><br/>
                  <span data-aos="fade-in" data-aos-delay="1150">쉽고, 편한 첫 시작을 위한 확실한 가이드를 제시해 준다는 약속,</span><br/>
                  <span data-aos="fade-in" data-aos-delay="1300">합격으로 가는 과정을 의미 있고 즐겁게 만들겠다는 약속,</span><br/>
                  <span data-aos="fade-in" data-aos-delay="1450">여러분의 “첫 시작”과 합격으로 가는 “과정”에 <br/>희소/쌤플러스가 함께 하겠습니다.</span><br/>
                  <i data-aos="fade-in" data-aos-delay="1600">- 희소/쌤플러스 임직원 일동</i>
                </p>
                <div class="inforNumber">
                  <span class="num1" data-aos="fade-up"  data-aos-duration="800" data-aos-delay="800">
                    <em>개원일</em>
                    <strong>1995</strong>년 <strong>12</strong>월
                  </span>
                  <span class="num2" data-aos="fade-up"  data-aos-duration="800" data-aos-delay="900">
                    <em>국가 서비스 대상</em>
                    <i>교원임용 부문</i> <strong>1</strong>위
                  </span>
                  <span class="num3" data-aos="fade-up"  data-aos-duration="800" data-aos-delay="1000">
                    <em>브랜드고객충성도 대상</em>
                    <strong>2</strong>년 연속 <strong>1</strong>위
                  </span>
                  <span class="num4" data-aos="fade-up"  data-aos-duration="800" data-aos-delay="1100">
                    <em>누적 수강생</em>
                    <strong>360,000</strong> 명
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <div class="insideTopBtn" id="scrollTab">
            <div class="frameBack">
              <span :class="{on:menuTab===0}"><button @click="gotoSection('insideTrigger01')"><em>희소/쌤플러스 소개</em></button></span>
              <span :class="{on:menuTab===1}"><button @click="gotoSection('insideTrigger02')"><em>히스토리</em></button></span>
              <span :class="{on:menuTab===2}"><button @click="gotoSection('insideTrigger03')"><em>장학제도</em></button></span>
              <span :class="{on:menuTab===3}"><button @click="gotoSection('insideTrigger04')"><em>대학제휴</em></button></span>
              <span :class="{on:menuTab===4}"><button @click="gotoSection('insideTrigger05')"><em>강사모집</em></button></span>
            </div>
          </div>
          <!-- 희소/쌤플러스 소개 -->
          <div class="ssamplusInfo" id="inside01Loc" ref="insideTrigger01">
            <!---->
            <div class="infoGuide">
              <div class="frameBack">
                <p class="sloganTxt">
                  우리의 목표는 보다 분명합니다.<br/>임용시험으로의 <strong>첫 발을 내딛을 때</strong>에 불안함과 두려움을 느끼지 않도록 돕는 것입니다.
                </p>
                <h3><span>쉽고 편한 첫 시작을 돕는</span> 확실한 가이드</h3>
                <!-- tab-wrap -->
                <div class="tabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul>
                          <li :class="{on:currentTab===0}"><button @click="currentTab = 0">설명회</button></li>
                          <li :class="{on:currentTab===1}"><button @click="currentTab = 1">교원임용 입문서</button></li>
                          <li :class="{on:currentTab===2}"><button @click="currentTab = 2">합격자 사례발표</button></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 0" class="tabData guide01" :key="currentTab">
                      <span class="tit">
                        확실한 <b>전략</b>이 완벽한 <b>결과</b>를 만든다
                        <strong>합격전략 설명회</strong>
                        <router-link to="" class="btnL">신청하기</router-link>
                      </span>
                      <div class="detail">
                        <dl>
                          <dt>
                            <span>진행 횟수</span>
                            <strong>25</strong> 회
                            <em>※개원이래 설명회 진행 횟수</em>
                          </dt>
                          <dd><strong>임용시험 제도</strong> 분석 <br/>필수내용 안내</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>참석자</span>
                            <strong>1</strong> 만명
                            <em>※2018~2020 학년도 기준</em>
                          </dt>
                          <dd>합격을 위한 <strong>과목별</strong> 분석 <br/>합격 데이터를 통한 <strong>전략 수립</strong></dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>만족도</span>
                            <strong>98</strong> %
                            <em>※2020학년도 설명회 설문조사</em>
                          </dt>
                          <dd><strong>학습 설계</strong> 방법 <br/>연간 커리큘럼 안내</dd>
                        </dl>
                      </div>
                      <router-link to="" class="btnL rnd">신청하기</router-link>
                    </div>
                    <!---->
                    <div v-if="currentTab == 1" class="tabData guide02">
                      <span class="tit">
                        시크릿 합격 레시피
                        <strong>교원임용입문서</strong>
                        <router-link to="" class="btnL ">자세히보기</router-link>
                      </span>
                      <div class="detail">
                        <span>
                          <img :src="require(`@/assets/images/img_inside_infoGuide01.png`)" alt=""/>
                          <img :src="require(`@/assets/images/img_inside_infoGuide02.png`)" alt=""/>
                        </span>
                        <div>
                          <dl>
                            <dt><strong>공통</strong> 가이드북</dt>
                            <dd>- 임용시험 제도 <br/>- 1, 2차 효과적인 공부법 <br/>- 컨디션/생활관리법 <br/>- 연간/월별 학습법 <br/>- 희소/쌤플러스 소개</dd>
                          </dl>
                          <dl>
                            <dt><strong>전공</strong> 가이드북</dt>
                            <dd>- 선생님별 연간 커리큘럼 <br/>- 과목별 학습 전략 <br/>- 합격 수기 <br/>- 시크릿 합격 포인트</dd>
                          </dl>
                        </div>
                      </div>
                      <router-link to="" class="btnL">자세히보기</router-link>
                    </div>
                    <!---->
                    <div v-if="currentTab == 2" class="tabData guide03">
                      <span class="tit">
                        희소 합격생이 직접 전하는 합격 노하우, <span>그 진심이 담긴 이야기</span>
                        <strong>합격자 사례발표</strong>
                        <router-link to="" class="btnL">자세히보기</router-link>
                      </span>
                      <div class="detail">
                        <p>다음 합격사례의 <strong>주인공은 바로 여러분</strong>입니다!</p>
                        <successfulSwiperPc v-if="!this.mobile"/>
                        <successfulSwiperM v-else-if="this.mobile" />
                        <div class="case">
                          <dl>
                            <dt>상황에 따른 <strong>임용 학습법</strong></dt>
                            <dd>#시기별 학습전략<br/> #자신만의 TIP<br/> #진솔한 합격후기</dd>
                          </dl>
                          <dl>
                            <dt>특별한 <strong>합격 CASE</strong></dt>
                            <dd class="hashtag"><span><small>#초수생</small><small>#장수생</small></span><span><small>#대학교 졸업반</small> <small>#육아맘</small></span> <span><small>#시간 강사</small><small>#기간제</small></span></dd>
                            <dd class="last">직장/학업/육아 + 시험 준비 무려 <strong>46</strong> %</dd>
                          </dl>
                        </div>
                      </div>
                      <router-link to="" class="btnL rnd">자세히보기</router-link>
                    </div>
                    <!--//-->
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
            </div>
            <!---->
            <div class="inforSsampack">
              <div class="frameBack">
                <p class="sloganTxt">
                  시작부터 끝까지 학습에만 집중할 수 있도록 고민했습니다. <br/>고민의 끝, 가장 완벽한 학습전략은 <strong>연간쌤팩</strong>입니다.
                </p>
                <h3>
                  <em>수강생 80%가 선택한 가장 안정적인 학습</em> 연간 쌤팩
                </h3>
                <div class="detail">
                  <div>
                    <dl class="col1">
                      <dt>
                        <em>01</em>
                        첫 시작부터 끝까지 <span>함께 하는 <strong>학습지원</strong>과</span>
                      </dt>
                      <dd class="list">
                        <span class="txt01">수강료 부담을 <em>낮춘 <strong>할인</strong></em></span>
                        <span class="txt02">이론~모고까지 <em><strong>전 강좌 수강</strong></em></span>
                        <span class="txt03">자유로운 <em><strong>직/인강 교차 수강</strong></em></span>
                      </dd>
                    </dl>
                    <dl class="col2">
                      <dt>
                        <em>02</em>
                        새롭게 선보이는 <span><strong>NEW 쌤팩</strong>과 함께라면</span>
                      </dt>
                      <dd class="list">
                        <span class="txt04">수강기기 + 쌤팩 <em><strong>결합 강의</strong></em></span>
                        <span class="txt05">복습 강의, 배송비 등 <em><strong>학습지원</strong></em></span>
                        <span class="txt06">기상,출석, 상담 등 <em><strong>학습 관리</strong></em></span>
                      </dd>
                    </dl>
                    <dl class="col3">
                      <dt>
                        <em>03</em>
                        여러분의 학습과정은 <span><strong>절대 힘들지 않습니다</strong></span>
                      </dt>
                      <dd class="graph">
                        <p>
                          수험기간 1년 미만 단기합격자
                          <strong>2명중 1명은 쌤팩 수강</strong>
                        </p>
                        <span>
                          2020학년도 희소/쌤플러스 합격생
                          <em>※ 19년 합격인증이벤트 참여 결과</em>
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="gobanner">
                  <router-link to="/mkup/ssampack/index" class="goImage">
                    <img :src="require(`@/assets/images/img_inside_inforSsampackBanner.png`)" alt="" v-if="!this.mobile" />
                    <img :src="require(`@/assets/images/m/img_inside_inforSsampackBanner.png`)" alt="" v-else-if="this.mobile" />
                  </router-link>
                  <router-link to="/mkup/ssampack/index" class="btnL">더 강력해진 쌤팩 자세히보기</router-link>
                </div>
              </div>
            </div>
            <!---->
            <div class="infroMockExam">
              <div class="frameBack">
                <p class="sloganTxt">
                  합격으로 가는 과정에서 늘 불안하고 두려울 것입니다. <br/>학습 과정을 점검할 수 있는 기회, <strong>희소/쌤플러스 모의고사</strong>입니다.
                </p>
                <h3>
                  <em>8,278명이 선택하고 98%가 만족한 <i>(※ 2021년 기준)</i></em>
                  희소/쌤플러스 모의고사
                </h3>
                <div class="detail">
                  <dl>
                    <dt>
                      <em>Since 2015 ~</em>
                      <strong>
                        <span>실제와 같은 시험 환경 재현</span>
                        학교 대관, 현장 모의고사
                      </strong>
                    </dt>
                    <dd>
                      <em>업계최초</em>
                      <span class="first">실제 시험 현장 재현을 통한 <strong>최적의 실전경험</strong></span>
                      <span>최신 기출 경향 반영 <strong>고퀄리티 예상 문제/해설</strong></span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <em>Since 2019 ~</em>
                      <strong>
                        <span>응시 과목 상세 분석</span>
                        성적분석 서비스
                      </strong>
                    </dt>
                    <dd>
                      <em>업계최초</em>
                      <span class="first">과목별 성적통계를 통한 <strong>평가 영역별 점수/석차 비교</strong></span>
                      <span>상세 성적 분석을 통한 <strong>전체 석차 및 난이도 파악</strong></span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>
                      <em>Since 2020 ~</em>
                      <strong>
                        <span>내가 있는 곳이 곧 시험장</span>
                        온라인 모의고사 시스템
                      </strong>
                    </dt>
                    <dd>
                      <em>업계최초</em>
                      <span class="first">실제 시험 현장을 <strong>온라인에 그대로 재현</strong></span>
                      <span>현장과 동일한 혜택 <strong>시험지, 답안지 배송 서비스</strong></span>
                    </dd>
                  </dl>
                </div>
                <p class="txt">올바른 <strong>방향</strong>으로 갈 수 있게, 보다 완벽한 <strong>실력 점검</strong>을 위해 <strong>희소/쌤플러스 모의고사가 여러분을 기다립니다.</strong></p>
              </div>
            </div>
            <!---->
            <div class="infoCounsel">
              <div class="frameBack">
                <p class="sloganTxt">
                  힘든 수험생활, 잠시 벗어나도 옆에는 희소가 있습니다. <br/>다시 한 번, 올바른 과정을 밟도록 <strong>늘 함께</strong> 하겠습니다.
                </p>
                <h3>
                  <em>임용 전문가가 제공하는 명쾌한 학습 정보</em>
                  학습 지원<span>수강 지원</span>1:1 상담
                </h3>
                <div class="detail">
                  <div class="back">
                    <div class="col1">
                      <img :src="require(`@/assets/images/img_infoCounsel01.png`)" alt="" />
                      <span>
                        <strong>선생님 1:1 상담</strong>
                        희소/쌤플러스 선생님과 함께하는 심층 학습 상담<br/>
                        <router-link to="/mkup/counsel/bbswrite" class="btnL line">자세히 보기</router-link>
                      </span>
                    </div>
                    <div class="col2">
                      <img :src="require(`@/assets/images/img_infoCounsel02.png`)" alt="" />
                      <span>
                        <strong>전문가 상담</strong>
                        희소/쌤플러스 임용 전문가와의 학습/수강 상담<br/>
                        <router-link to="/mkup/counsel/reserve" class="btnL line">자세히 보기</router-link>
                      </span>
                    </div>
                    <div class="col3">
                      <img :src="require(`@/assets/images/img_infoCounsel03.png`)" alt="" />
                      <span>
                        <!-- <i>new</i> -->
                        <strong>카카오톡 채널 상담<em>교원임용 희소</em></strong>
                        사소한 궁금증까지 해결 빠르고 간편한 상담<br/>
                        <a href="https://pf.kakao.com/_WPrLl" target="_blank" class="btnL line">자세히 보기</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <div class="infoLife">
              <div class="frameBack">
                <p class="sloganTxt">
                  또한 합격으로 가는 학습과정에 <strong>작은 즐거움과 편함</strong>을 느낄 수 있도록 <br/>슬기로운 임용 생활을 소개합니다.
                </p>
                <h3>
                  <em>업그레이드 임용라이프</em>
                  희소/쌤플러스 모바일<span>시험 정보</span>이벤트
                </h3>
                <div class="detail">
                  <dl>
                    <dt>
                      내 손 안의 강의실
                      <strong>희소/쌤플러스 모바일</strong>
                      <em>모바일 플랫폼을 통한 쉽고 간편한 학습</em>
                    </dt>
                    <dd class="data"><img :src="require(`@/assets/images/img_inside_infoLife01.png`)" alt="" /></dd>
                    <dd><router-link to="/mkup/counsel/guide" class="btnL line">자세히 보기</router-link></dd>
                  </dl>
                  <dl>
                    <dt>
                      임용 속으로 푹 빠지다
                      <strong>시험정보</strong>
                      <em>정확한 임용 정보가 올바른 학습의 시작</em>
                    </dt>
                    <dd class="data center">
                      <div>
                        <strong>임용 시험정보</strong>
                        <span>시험공고/교육계 소식 </span>시험일정/모집인원/경쟁률
                      </div>
                      <div>
                        <strong>임용 자료실</strong>
                        <span>기출문제/교육과정 자료 </span>1, 2차 수험자료
                      </div>
                      <div>
                        <strong>임용 컬럼</strong>
                        <span>매월 전하는 꿀잼 희소식 부터 전문가의</span>알짜배기 임용 정보 총 망라
                      </div>
                    </dd>
                    <dd><router-link to="/mkup/exam/info/guide" class="btnL line">자세히 보기</router-link></dd>
                  </dl>
                  <dl>
                    <dt>
                      과목·선생님별 학습방법&amp;TIP
                      <strong>선생님 스페셜</strong>
                      <em>월별 학습 꿀 TIP을 알아보는 즐거운 시간</em>
                    </dt>
                    <dd class="data last"><img :src="require(`@/assets/images/img_inside_infoLife03.png`)" alt="" /></dd>
                    <dd><router-link to="/mkup/special/event" class="btnL line">자세히 보기</router-link></dd>
                  </dl>
                </div>
              </div>
            </div>
            <!---->
            <div class="infoTeacher">
              <p class="sloganTxt">
                그리고 목표를 함께 이루어나갈 동반자<br/> <strong>희소/썜플러스 최고의 강사진</strong>이 한 걸음 앞서 여러분을 기다립니다.
              </p>
              <h3>
                <em>한 사람의 좋은 교사를 만들기 위한 깨달음, 그 결과</em>
                희소/쌤플러스 최고의 강사진
              </h3>
              <p class="ssamDot">
                <img :src="require(`@/assets/images/m/bg_inside_infoTeacher_1.png`)" alt="" v-if="this.mobile" />
                <em>가르치는 것은 두 번 배우는 것이다. -J. 주베르 "명상록"</em>
                희소와 강사진은 가르침을 통해 새롭게 깨닫고 발전합니다.
              </p>
              <div class="txt">
                <p>
                  예비 선생님들과 함께한 스물 다섯 해, 매년 새롭게, 또 다르게<br/>
                  “첫 시작”의 설렘, “과정”의 불안과 두려움
                  <strong>
                    <em>이 모든 것을</em> 여러분<em>과</em> 함께 <em>하겠습니다.</em><br/>
                    <i>희소/쌤플러스 안에서 여러분은 이미 훌륭한 선생님입니다.</i>
                  </strong>
                </p>
              </div>
            </div>
            <!--//-->
          </div>
          <!-- //희소/쌤플러스 소개 -->
          <!-- 히스토리 -->
          <div class="ssamplusHistory" id="inside02Loc" ref="insideTrigger02">
            <p class="sloganTxt">선생님의 꿈을 위해 <strong>희소/쌤플러스</strong>는 <span>쉬지 않고 계속 걸어가겠습니다.</span></p>
            <!-- tab-wrap -->
            <div class="tabwrap frameBack">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul>
                      <li :class="{on:currentTab2===0}"><button @click="currentTab2 = 0">2017 - 2021</button></li>
                      <li :class="{on:currentTab2===1}"><button @click="currentTab2 = 1">2013 - 2016</button></li>
                      <li :class="{on:currentTab2===2}"><button @click="currentTab2 = 2">1996 - 2012</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">
                  <dl class="y2021 now">
                    <em></em>
                    <dt>2021</dt>
                    <dd>
                      <span>· 브랜드 고객충성도 대상 2년 연속 수상</span>
                      <span>· 국가서비스 대상 수상</span>
                    </dd>
                  </dl>
                  <dl class="y2020">
                    <em></em>
                    <dt>2020</dt>
                    <dd><span>· 업계 최초 온라인 모의고사 시스템 실시</span></dd>
                  </dl>
                  <dl class="y2019">
                    <em></em>
                    <dt>2019</dt>
                    <dd><span>· ‘2019 제 13회 대한민국 교육산업대상’ 수상(학원 부문)</span></dd>
                  </dl>
                  <dl class="y2018">
                    <em></em>
                    <dt>2018</dt>
                    <dd>
                      <span>· KG패스원 KG에듀원으로 사명변경</span>
                      <span>· KG에듀원 교원임용 희소/쌤플러스 BI변경</span>
                      <span>· 시각장애인 권리 보장 “제 39회 흰지팡이의날” 고용노동부장관 표창</span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>2017</dt>
                    <dd><span>· 서울 노량진 아이비관 확장 개원</span></dd>
                  </dl>
                </div>
                <div v-if="currentTab2 == 1" class="tabData">
                  <dl class="y2016">
                    <em></em>
                    <dt>2016</dt>
                    <dd><span>· 대구지역 최초 임용전문 고시학원 개원</span></dd>
                  </dl>
                  <dl class="y2015">
                    <em></em>
                    <dt>2015</dt>
                    <dd><span>· 제 10회 전국모의고사 업계최초 실제 시험장에서 실시</span></dd>
                  </dl>
                  <dl>
                    <dt>2014</dt>
                    <dd>
                      <span>· 쌤플러스-희소 강의수강 및 수험정보 앱 출시</span>
                      <span>· 업계최초 전과목 강좌 모바일 서비스 진행</span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>2013</dt>
                    <dd>
                      <span>· 교원임용고시 전문 분야 업계 최초 1위 인증</span>
                      <span>· KG패스원 교원임용 대표 브랜드 “희소/쌤플러스:로 단일화</span>
                      <span>· ‘2014 대한민국 혁신선도 중견기업상’ 인재육성부문상 수상</span>
                    </dd>
                  </dl>
                </div>
                <div v-if="currentTab2 == 2" class="tabData">
                    <dl>
                      <dt>2012</dt>
                      <dd>
                        <span>· 교원임용 전문성과 다양성을 목표로 웅진패스원과 통합</span>
                        <span>· 웅진패스원 KG패스원으로 사명 변경</span>
                      </dd>
                    </dl>
                      <dl>
                      <dt>2006</dt>
                      <dd>
                        <span>· 전국 13개 사범대학과 통합 최초의 전국 모의고사 진행</span>
                        <span>· 전국모의고사 응시 재학생 2만명 기록 수립</span>
                      </dd>
                    </dl>
                    <dl>
                      <dt>2003</dt>
                      <dd><span>· 업계 최초 교원임용 동영상 전문 사이트 썜플러스 오픈</span></dd>
                    </dl>
                    <dl>
                      <dt>1996</dt>
                      <dd><span>· 교원임용 전문학원 전국 최초 개원</span></dd>
                    </dl>
                </div>
              </div>
            </div>
            <!-- //tab-wrap -->
          </div>
          <!-- //히스토리 -->
          <!-- 장학제도 -->
          <div class="ssamplusScholarship" id="inside03Loc" ref="insideTrigger03">
            <p class="sloganTxt">더 멋진 세상을 만들어갈 선생님을 <span>응원하는 <strong>희소/쌤플러스 장학제도</strong>를 확인해 보세요</span></p>
            <scholarshipKindPc v-if="!this.mobile" />
            <scholarshipKindM v-else-if="this.mobile" />
          </div>
          <!-- //장학제도 -->
          <!-- 대학제휴 -->
          <div class="ssamplusUniversity" id="inside04Loc" ref="insideTrigger04">
            <p class="sloganTxt">대학 재학중인 임용고시 준비생과 <span><strong>희소/쌤플러스</strong>가 함께합니다.</span></p>
            <!-- tab-wrap3 -->
            <div class="tabwrap frameBack">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul class="blackLineTab">
                      <li :class="{on:currentTab3===0}"><button @click="currentTab3 = 0">대학 제휴 프로그램</button></li>
                      <li :class="{on:currentTab3===1}"><button @click="currentTab3 = 1">설명회&amp;특강</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab3 == 0" class="tabData" :key="currentTab3">
                  <universityProgramPc v-if="!this.mobile" />
                  <universityProgramM v-else-if="this.mobile" />
                </div>
                <div v-if="currentTab3 == 1" class="tabData">
                  <universityOpenPc v-if="!this.mobile" />
                  <universityOpenM v-else-if="this.mobile" />
                </div>
              </div>
            </div>
            <!-- //tab-wrap3 -->
            <div class="inquiry">
              <div class="alliance">
                <div class="frameBack">
                  <p>
                    <strong>대학 제휴 문의</strong>
                    대학 제휴에 대해 궁금한 점이 있다면<br class="mBr"/> 무엇이든지 문의 해주세요.<br/>
                    문의 내용에 대한 답변을 이메일 주소로 보내드립니다.
                  </p>
                  <div class="inputArea">
                    <div>
        							<span><input type="text" placeholder="이메일" /></span>
        							<span><input type="text" placeholder="연락처" /></span>
        							<span class="autoCom">
        								<input type="text" placeholder="학교" value="" />
        							</span>
        							<span class="autoCom">
        								<input type="text" placeholder="전공" value="" />
        							</span>
                    </div>
                    <input type="text" placeholder="제목을 입력해 주세요." class="tit" />
                    <textarea placeholder="내용을 입력해 주세요."></textarea>
                  </div>
                  <!-- 2021-12-02 동의란 추가 -->
                  <div class="checkArea">
                    <span class="checkSet">
                      <input type="checkbox" id="chk01" />
                      <label for="chk01"><i></i>대학제휴 문의를 위한 개인정보 활용에 동의합니다.</label>
                    </span>
                  </div>
                  <!-- //2021-12-02 동의란 추가 -->
                  <button class="btnL">문의 접수하기</button>
                </div>
              </div>
              <div class="base">
                <div class="frameBack">
                  <p>
                    <strong>설명회 &amp; 특강 문의</strong>
                    설명회&amp;특강에 대해 궁금한 점이 있다면<br class="mBr"/> 무엇이든지 문의 해주세요.<br/>
                    문의 내용에 대한 답변을 이메일 주소로 보내드립니다.
                  </p>
                  <div class="inputArea">
                    <div class="radioArea">
                      <span class="radioSet">
                        <input type="radio" name="radio1" checked id="radio11"/>
                        <label for="radio11"><i></i>Welcome to 희소설명회&amp;특강</label>
                      </span>
                      <span class="radioSet">
                        <input type="radio" name="radio1" checked id="radio12" />
                        <label for="radio12"><i></i>찾아가는 설명회&amp;특강</label>
                      </span>
                    </div>
                    <div>
                      <span><input type="text" placeholder="이메일" /></span>
                      <span><input type="text" placeholder="연락처" /></span>
                      <span class="autoCom">
                        <input type="text" placeholder="학교" value="" />
                      </span>
                      <span class="autoCom">
                        <input type="text" placeholder="전공" value="" />
                      </span>
                    </div>
                    <input type="text" placeholder="제목을 입력해 주세요." class="tit" />
                    <textarea placeholder="내용을 입력해 주세요."></textarea>
                  </div>
                  <!-- 2021-12-02 동의란 추가 -->
                  <div class="checkArea">
                    <span class="checkSet">
                      <input type="checkbox" id="chk02" />
                      <label for="chk02"><i></i>설명회&특강 문의를 위한 개인정보 활용에 동의합니다.</label>
                    </span>
                  </div>
                  <!-- //2021-12-02 동의란 추가 -->
                  <button class="btnL">문의 접수하기</button>
                </div>
              </div>
            </div>
          </div>
          <!-- //대학제휴 -->
          <!-- 강사모집 -->
          <div class="ssamplusRecruit" id="inside05Loc" ref="insideTrigger05">
            <div class="sloganTxt">
              <p>
                <span>희소와 함께 교사를 꿈꾸는 이의 </span><strong>미래를 열어줄 분들의 지원</strong>을 기다립니다.
              </p>
            </div>
            <div class="frameBack">
              <p class="sloganTxt2">
                <span>희소와 함께하실 <strong>열정과</strong> </span><strong>실력을 겸비하신 분</strong>들의 많은 지원 바랍니다.
                <em>
                  희소/쌤플러스는 교사를 꿈꾸는 수험생들을 위한 교원임용 전문 학원 입니다<br/>
                  예비 선생님들의 미래를 열어줄 전문 지식과 열의를 갖추신 분들의 지원을 기다립니다
                </em>
              </p>
              <h3>교원임용강의 강사초빙</h3>
              <div class="recruit tableData">
                <div>
                  <dl>
                    <dt class="item0">자격요건</dt>
                    <dd class="item1">
                      <span>초빙과목 전공자 <em>*석사 및 박사과정 포함</em></span>
                      <span>전·현직 전문학원 강사, 전직교사</span>
                      <span>임용 수험 경력자 우대</span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">초빙과목</dt>
                    <dd class="item1">초등교육과정,지구과학,사회,기술 외 전공과목</dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt class="item0">지원방법</dt>
                    <dd class="item1">이력서 첨부 E-mail 접수 <strong>heeso@kggroup.co.kr</strong></dd>
                  </dl>
                  <dl>
                    <dt class="item0">문의사항</dt>
                    <dd class="item1">희소/쌤플러스 채용담당 <strong>02-811-4040/4041</strong></dd>
                  </dl>
                </div>
                <dl>
                  <dt class="item0">제출서류</dt>
                  <dd class="item1">이력서(최종합격자에 한해 졸업증명서 등 추가 서류 제출)</dd>
                </dl>
              </div>
            </div>
          </div>
          <!-- //강사모집 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import Aos from '@/plugins/aos';
import successfulSwiperPc from '@/views/inside/successfulSwiperPc.vue';
import successfulSwiperM from '@/views/inside/successfulSwiperM.vue';
import scholarshipKindPc from '@/views/inside/scholarshipKindPc.vue';
import scholarshipKindM from '@/views/inside/scholarshipKindM.vue';
import universityProgramPc from '@/views/inside/universityProgramPc.vue';
import universityProgramM from '@/views/inside/universityProgramM.vue';
import universityOpenPc from '@/views/inside/universityOpenPc.vue';
import universityOpenM from '@/views/inside/universityOpenM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    successfulSwiperPc,
    successfulSwiperM,
    scholarshipKindPc,
    scholarshipKindM,
    universityProgramPc,
    universityProgramM,
    universityOpenPc,
    universityOpenM
  },
  data() {
    return {
      menuTab:0,
      currentTab: 0,
      currentTab2: 0,
      currentTab3: 0,
      swiperOption02: {
        effect: "coverflow",
        slidesPerView: "auto",
        centeredSlides: true,
        loop:true,
        grabCursor: true,
        swiperPlayToggle: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 270,
          depth: 80,
          modifier: 4.3,
          slideShadows: true
        },
        autoplay: {
          delay: 4500,
          disableOnInteraction: false
        },
        navigation: { nextEl: '.scholarshipKind .swiper-button-next', prevEl: '.scholarshipKind .swiper-button-prev' },
      },
    }
  },
  methods: {
    gotoSection(refName) {
      var element = this.$refs[refName];
      if (this.mobile){
        var topPos = element.offsetTop + 0;
      } else {
        var topPos = element.offsetTop + 35;
      }
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let beforeTabPos = document.getElementById("scrollTab");

      let inside01LocTop = document.querySelector("#inside01Loc").offsetTop + 0;
      let inside02LocTop = document.querySelector("#inside02Loc").offsetTop + 0;
      let inside03LocTop = document.querySelector("#inside03Loc").offsetTop + 0;
      let inside04LocTop = document.querySelector("#inside04Loc").offsetTop + 0;
      let inside05LocTop = document.querySelector("#inside05Loc").offsetTop + 0;

      if (this.beforeTabPosLoc <= scrollLocation) {
        if (inside01LocTop <= scrollLocation && inside02LocTop > scrollLocation) {
          this.menuTab = 0;
        } else if (inside02LocTop <= scrollLocation && inside03LocTop > scrollLocation) {
          this.menuTab = 1;
        } else if (inside03LocTop <= scrollLocation && inside04LocTop > scrollLocation) {
          this.menuTab = 2;
        } else if (inside04LocTop <= scrollLocation && inside05LocTop > scrollLocation) {
          this.menuTab = 3;
        } else if (inside05LocTop <= scrollLocation) {
          this.menuTab = 4;
        }
      } else if (this.beforeTabPosLoc+50 > scrollLocation) {
        this.menuTab = null;
      }
    }
  },
  mounted() {
    if (this.mobile){
      this.beforeTabPosLoc = document.querySelector("#scrollTab").offsetTop + 40;
    } else {
      this.beforeTabPosLoc = document.querySelector("#scrollTab").offsetTop + 80;
    }
    window.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  },
}
</script>
