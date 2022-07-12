<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <div class="infoGuideTop">
      <div class="frameBack">
        <p class="tit">
          <span><strong>임용 시험정보</strong></span>
          교원임용에 관한 뉴스 및 시험정보와 쌤플러스만의 <br/>
          합격전략, 커뮤니티까지 한눈에 접해보세요.
        </p>
        <div class="schedule">
          <dl>
            <dt><strong>2022학년도 국·공립 학교교사</strong> 임용후보자 선정경쟁시험 일정</dt>
            <dd>
              <table>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>유 · 초등</th>
                    <th>중등</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>시험공고</td>
                    <td>09.25 (수)</td>
                    <td>추후 안내</td>
                  </tr>
                  <tr>
                    <td>원서 접수</td>
                    <td>10.04 (월) ~ 10.08 (금)</td>
                    <td>추후 안내</td>
                  </tr>
                  <tr>
                    <td>1차 시험</td>
                    <td>11.13 (토)</td>
                    <td>추후 안내</td>
                  </tr>
                  <tr>
                    <td>2차 시험</td>
                    <td>추후 안내</td>
                    <td>추후 안내</td>
                  </tr>
                </tbody>
              </table>
            </dd>
          </dl>
        </div>
        <div class="examNotice">
          <dl>
            <dt>
              <strong>시험공고</strong>
              <router-link to="/mkup/exam/info/notify" class="btnMore">더보기</router-link>
            </dt>
            <dd>
              <ul>
                <li><router-link to="/mkup/exam/info/notify/view">[종합] 2022학년도 유아/유초특 사전예고 인원 종합</router-link></li>
                <li><router-link to="/mkup/exam/info/notify/view">[종합] 2021학년도 중등/중특 교사 최종 합격선</router-link></li>
                <li><router-link to="/mkup/exam/info/notify/view">[종합] 2021학년도 유아/초등/특수(유, 초) 교사 최종 합격</router-link></li>
                <li><router-link to="/mkup/exam/info/notify/view">2022학년도 전북 공립 유치원, 초등학교, 특수학교, 중등, 고등</router-link></li>
                <li><router-link to="/mkup/exam/info/notify/view">[서울] 2022학년도 공립 유아/유초특 사전예고 안내</router-link></li>
                <li><router-link to="/mkup/exam/info/notify/view">[경기] 2022학년도 공립 중등교사 임용후보자 선정</router-link></li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="infoGuide">
          <div class="subTit">
            <h3>임용시험 안내</h3>
          </div>
          <div class="mainDefine">
            <p>
              <strong>2021학년도 교원임용 시험 시행정보 및 일정 안내</strong>
              교원임용시험의 시험시행 일반원칙 및 유아, 초등, 중등별 세부안내입니다.<br/>
              수험 준비의 편의를 위해서 안내되는 것이므로 각 시도별 공고문을 반드시 확인하시기 바랍니다.
              <em>※ 응시자격/가산특전/장애응시자 시험기간 연장 내용은 2021학년도 기준이며, <em>2022학년도 시행계획 공고 시 업데이트 예정</em></em>
            </p>
          </div>
          <h4 class="noLine">응시자격 확인하기</h4>
          <div class="conditionTabWrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul>
                    <li :class="{on:currentTab===0}"><button @click="currentTab = 0">응시 연령</button></li>
                    <li :class="{on:currentTab===1}"><button @click="currentTab = 1">현역군인 및 재외국민</button></li>
                    <li :class="{on:currentTab===2}"><button @click="currentTab = 2">응시자격 제한</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab == 0" class="tabData case1" :key="currentTab">
                <dl>
                  <dt>응시 연령</dt>
                  <dd class="noDot">응시 연령 제한 없음.<br/>단, 교육공무원법 제 46조(정년에 해당되지 않는 자)</dd>
                </dl>
              </div>
              <div v-if="currentTab == 1" class="tabData case2">
                <dl>
                  <dt>현역군인 및 재외국민</dt>
                  <dd>시험시행 공고일 현재 병역 복무중인 자도 시험에 응시할 수 있으며, <span>최종 합격 시 임용후보자 등록기간 내에 전역 예정증명서 </span><span>또는 군복무확인서를 제출해야 임용 유예를 받을 수 있음.</span></dd>
                  <dd>시험시행 공고일 현재 재외국민 외국 영주권자도 시험에 응시할 수 있으며, <span>최종 합격하였을 경우, 교육공무원임용령 제 12조의 규정에 의한 임용후보자명부의 </span><span>유효기간(명부를 작성한 날로부터 1년)내에 외국영주권을 포기하고</span> <span>국내 주민등록을 회복하여야 함.</span></dd>
                </dl>
              </div>
              <div v-if="currentTab == 2" class="tabData case3">
                <dl class="last">
                  <dt>응시자격 제한</dt>
                  <dd>『교육공무원법』 제10조의3(채용의 제한) 제 1항에 해당하는 자</dd>
                  <dd>『교육공무원법』 제10조의4(결격사유)에 해당하는 자</dd>
                  <dd>『교육공무원법』 제11의2(부정행위자에 대한 조치) 제1항 또는 제 2항에 해당하는 자</dd>
                  <dd>『교육자격검정령 시행규칙』 제2조제2항 관련 [별표1] 표시과목이 표시된 초등학교 교사 자격증 소지자</dd>
                  <dd>『아동·청소년의 성보호에 관한 법률』 제56조(아동·청소년 관련 기관 등에의 취업제한 등) 제1항에 해당하는 자</dd>
                  <dd>『아동복지법』제29조의3(아동관련기관의 취업제한 등) 제1항에 해당하는 자</dd>
                  <dd>『부패방지 및 국민권익위원회의 설치와 운영에 관한 법률』제82조(비위면직자 등의 취업제한) 제1항에 해당하는 자</dd>
                  <dd>기타 관계법령에 의하여 임용에 결격사유가 있는자</dd>
                </dl>
              </div>
            </div>
          </div>
          <!---->
          <h4>가산특전 확인하기</h4>
          <div class="extra tableList">
            <dl>
              <dt>취업지원대상자 가점</dt>
              <dd>매 과목별 만점의 40%이상 득점한 자에 한하여, 각 과목별 득점에 각 과목별 만점의 10% 또는 5%를 가산. <br/>가점을 받아 합격하는 취업지원대상자는 선발예정인원의 30%를 초과할 수 없으며, 선발인원 산정 시 소수점 이하는 미 산정</dd>
            </dl>
            <dl>
              <dt>유·초·특수(유·초)교사 – 임용시험 가산점 변경</dt>
              <dd>지역 가산점 하향 조정 및 정보처리 가산점, 영어능력 가산점, 한자능력 가산점 폐지 등 <br/>(자세한 내용은 시·도 교육청별 공고 확인 요망)</dd>
            </dl>
          </div>
          <!---->
          <h4>장애 응시자 시험시간 연장 <span>(필기시험에 한함)</span></h4>
          <p class="info">장애인은 장애인 구분 선발에 관계없이 일반시험에도 비장애인과 동일한 조건으로 응시 가능</p>
          <div class="special tableList">
            <dl>
              <dt>장애구분</dt>
              <dd>시각장애 (1~2급, 3급2호, 4급2호)</dd>
              <dd>시각장애 (3급~6급), 뇌병변, 상지지체(1급~3급) 중 필요한 경우</dd>
            </dl>
            <dl>
              <dt>연장시간</dt>
              <dd><strong>1.5</strong>배</dd>
              <dd><strong>1.2</strong>배</dd>
            </dl>
          </div>
          <!---->
          <div class="ageTabwrap">
            <!-- tab -->
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <ul class="blackLineTab">
                    <li :class="{on:currentTab2===0}"><button @click="currentTab2 = 0">유·초등</button></li>
                    <li :class="{on:currentTab2===1}"><button @click="currentTab2 = 1">중등</button></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!--// tab -->
            <div class="tabLayout">
              <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">
                <h4><strong>유·초등</strong> 공립유치원·초등학교·특수학교(유치원·초등)교사</h4>
                <h5>선발예정인원</h5>
                <p>
                  사전 모집인원 4,868명/ 확정 모집인원 6,006명
                  <span>※ 시도교육청별 모집인원은 해당교육청 공고문 확인 요망</span>
                </p>
                <h5>응시원서 접수기간 및 시험일정</h5>
                <div class="term tableList">
                  <dl>
                    <dt>시행계획공고</dt>
                    <dd>2020.09.09(수)</dd>
                  </dl>
                  <dl>
                    <dt>원서접수기간</dt>
                    <dd>2020.10.04(일)~10.08(목)</dd>
                  </dl>
                  <dl>
                    <dt>1차 시험</dt>
                    <dd>2020.11.07(토)</dd>
                  </dl>
                  <dl>
                    <dt>2차 시험</dt>
                    <dd>2021.01.13(수)~01.15(금)</dd>
                  </dl>
                </div>
                <h5>응시자격</h5>
                <div class="ageCondition tableData">
                  <div class="gridSet">
                    <span class="gridItem item0">구분</span>
                    <span class="gridItem item1">응시자격요건</span>
                  </div>
                  <dl>
                    <dt class="item0">유치원 교사</dt>
                    <dd class="item1">유치원 준교사 이상의 자격증 소지자 또는 2021년 2월말 이내 취득예정자</dd>
                  </dl>
                  <dl>
                    <dt class="item0">초등학교 교사</dt>
                    <dd class="item1">초등학교 준교사 이상의 자격증 소지자 또는 2021년 2월말 이내 취득예정자</dd>
                  </dl>
                  <div class="dupl">
                    <strong><span>특수학교 교사</span></strong>
                    <dl>
                      <dt class="item2">유치원</dt>
                      <dd class="item1">특수학교(유치원)준교사 이상의 자격증 소지자 또는 2021년 2월말 이내 취득예정자</dd>
                    </dl>
                    <dl>
                      <dt class="item2">초등</dt>
                      <dd class="item1">특수학교(초등)준교사 이상의 자격증 소지자 또는 2021년 2월말 이내 취득예정자</dd>
                    </dl>
                  </div>
                </div>
                <p><em>※ 본 표는 2021학년도 시행계획 공고 기준입니다.</em></p>
                <h5>전형절차</h5>
                <div class="process tableData" v-if="!this.mobile">
                  <div class="gridSet">
                    <span class="gridItem item0">구분</span>
                    <span class="gridItem item1">시험과목 및 배정</span>
                    <span class="gridItem item2">유형</span>
                    <span class="gridItem item3">합격자 사정</span>
                  </div>
                  <dl>
                    <dt class="item0">1차 시험</dt>
                    <dd class="item1">교직(20), 교육과정(80)</dd>
                    <dd class="item2">논술형(교직), 서답형(교육과정)</dd>
                    <dd class="item3">1차 시험성적으로 선발예정 인원의 1.5배수 이상 선발<br/>(강원도의 경우 2배수 선발)</dd>
                  </dl>
                  <dl>
                    <dt class="item0">2차 시험 <em>※시도별 상이<br/>(공고문 참고)</em></dt>
                    <dd class="item1">교수학습 과정안, 심층면접, 수업실연, 영어면접, 영어실연</dd>
                    <dd class="item2">지도안, 면접, 실연</dd>
                    <dd class="item3"> 1차,2차 시험성적을 합산하여 선발</dd>
                  </dl>
                </div>
                <div class="process tableData" v-else-if="this.mobile">
                  <dl>
                    <dt class="item4">구분</dt>
                    <dd class="item5">1차 시험</dd>
                    <dd class="item6">2차 시험 <em>※시도별 상이<br/>(공고문 참고)</em></dd>
                  </dl>
                  <dl>
                    <dt class="item4">시험과목 및 배정</dt>
                    <dd class="item5">교직(20), 교육과정(80)</dd>
                    <dd class="item6">교수학습 과정안, 심층면접, 수업실연, 영어면접, 영어실연</dd>
                  </dl>
                  <dl>
                    <dt class="item4">유형</dt>
                    <dd class="item5">논술형(교직),<br/>서답형(교육과정)</dd>
                    <dd class="item6">지도안, 면접, 실연</dd>
                  </dl>
                  <dl>
                    <dt class="item4">합격자 사정</dt>
                    <dd class="item5">1차 시험성적으로 선발예정 인원의 1.5배수 이상 선발<br/>(강원도의 경우 2배수 선발)</dd>
                    <dd class="item6"> 1차,2차 시험성적을 합산하여 선발</dd>
                  </dl>
                </div>
                <p>
                  <span>※ 한국사 능력의 검정결과가 3급 이상인 자에 대해 1차 시험은 각 과목별 만점의 40% 이상 득점자에 한하여 합격자를 사정하고, 최종 합격자는 2차시험 응시자에 한하여 합격자를 사정함</span>
                  <em>※ 본 표는 2021학년도 시행계획 공고 기준입니다.</em>
                </p>
              </div>
              <div v-if="currentTab2 == 1" class="tabData">
                <h4><strong>중등</strong> 공립 중등학교(중·고등학교)·특수학교(중등)교사</h4>
                <h5>선발예정인원</h5>
                <p>
                  사전 모집인원 4,868명/ 확정 모집인원 6,006명
                  <span>※ 시도교육청별 모집인원은 해당교육청 공고문 확인 요망</span>
                </p>
                <h5>응시원서 접수기간 및 시험일정</h5>
                <div class="term tableList">
                  <dl>
                    <dt>시행계획공고</dt>
                    <dd>2020.10.08(목)</dd>
                  </dl>
                  <dl>
                    <dt>원서접수기간</dt>
                    <dd>2020.10.19(월)~10.23(금)</dd>
                  </dl>
                  <dl>
                    <dt>1차 시험</dt>
                    <dd>2020.11.21(토)</dd>
                  </dl>
                  <dl>
                    <dt>2차 시험</dt>
                    <dd>2021.01.26(화)~01.27(수)</dd>
                  </dl>
                </div>
                <h5>응시자격</h5>
                <div class="ageCondition tableData">
                  <div class="gridSet">
                    <span class="gridItem item0">구분</span>
                    <span class="gridItem item1">응시자격요건</span>
                  </div>
                  <dl>
                    <dt class="item0">중등학교 교사</dt>
                    <dd class="item1">
                      선발 예정 표시과목의 중등학교 준교사 이상 교원자격증 소지자 및 부전공 표시과목 교원자격증 소지자<br/>
                      [2021년 2월 해당과목 교원자격증 취득예정자 포함]
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">특수학교(중등)교사</dt>
                    <dd class="item1">
                      전공표시과목에 관계 없이 특수학교(중등)준교사 이상 교원자격증 소지자<br/>
                      (치료교육, 재활복지, 직원교육 포함) [2021년 2월 해당과목 교원자격증 취득예정자 포함]<br/>
                      <i>※ 특수학교 교사(이료)자격증 소지자는 제외</i>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">보건 교사</dt>
                    <dd class="item1">
                      보건·양호교사(1급,2급)자격증 소지자[2021년 2월 해당과목 교원자격증 취득예정자 포함]
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">사서 교사</dt>
                    <dd class="item1">
                      사서교사(1급,2급)자격증 소지자[2021년 2월 해당과목 교원자격증 취득예정자 포함]
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">영양 교사</dt>
                    <dd class="item1">
                      영양교사(1급,2급) 자격증 소지자[2021년 2월 해당과목 교원자격증 취득예정자 포함]
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">전문상담 교사</dt>
                    <dd class="item1">
                      전문상담교사(1급,2급) 자격증 소지자[2021년 2월 해당과목 교원자격증 취득예정자 포함]<br/>
                      전문상담교사(초등,중등,특수)자격증 소지자<br/>
                      교도교사 자격증 소지자<br/>
                      <i>※ 상담 및 진로진학상담교사 관련 자격증 소지자는 시험 응시 대상자가 아님</i>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item0">장애인 구분 <br/>선발과목 응시대상자</dt>
                    <dd class="item1">
                      <em>- 『장애인 고용촉진 및 직업재활법 시행령』 제 3조의 규정에 의한 장애인에 해당하는 자로서 장애인 구분 모집 선발예정 표시과목 교원자격증 소지자[2021년 2월 해당과목 교원자격증 취득예정자 포함]</em><br/>
                      <em>- 장애 구분선발에 응시하고자 하는 자는 응시원서 접수마감일 현재 장애인 또는 국가유공자(상이등급 해당자)로 유효하게 등록된 자이어야 함</em><br/>
                      <em>- 장애인은 장애 구분선발 과목이 없거나, 구분선발 지원을 희망하지 않는 경우 일반으로 지원할 수 있음</em><br/>
                      <i>※ 기타 시험시행의 일반원칙 및 합격자 결정 등의 사항은 일반 응시자와 동일하게 처리함</i>
                    </dd>
                  </dl>
                </div>
                <p><em>※ 본 표는 2021학년도 시행계획 공고 기준입니다.</em></p>
                <h5>전형절차</h5>
                <div class="process tableData" v-if="!this.mobile">
                  <div class="gridSet">
                    <span class="gridItem item0">구분</span>
                    <span class="gridItem item1">시험과목 및 배정</span>
                    <span class="gridItem item2">유형</span>
                    <span class="gridItem item3">합격자 사정</span>
                  </div>
                  <dl>
                    <dt class="item0">1차 시험</dt>
                    <dd class="item1">교직(20), 교육과정(80)</dd>
                    <dd class="item2">논술형(교육학), 기입형/서답형(전공)</dd>
                    <dd class="item3">1차 시험성적으로 선발예정 인원의 1.5배수 이상 선발<br/>(강원도의 경우 2배수 선발)</dd>
                  </dl>
                  <dl>
                    <dt class="item0">2차 시험 <em>※시도별 상이<br/>(공고문 참고)</em></dt>
                    <dd class="item1">
                      일반교과 <span>(심층면접, 수업지도안, 수업실연)</span><br/>
                      실기·실험교과 <span>(심층면접, 수업지도안,수업실연, 실기·실험)</span>
                      <em>※시도별로 상이</em>
                    </dd>
                    <dd class="item2">
                      지도안, 면접, 실연, 실기 집단 토의, 수업 나눔<br/>
                      <em>※시도별로 상이</em>
                    </dd>
                    <dd class="item3">1차,2차 시험성적을 합산하여 선발</dd>
                  </dl>
                </div>
                <div class="process tableData" v-else-if="this.mobile">
                  <dl>
                    <dt class="item7">구분</dt>
                    <dd class="item8">1차 시험</dd>
                    <dd class="item9">2차 시험 <em>※시도별 상이<br/>(공고문 참고)</em></dd>
                  </dl>
                  <dl>
                    <dt class="item7">시험과목 및 배정</dt>
                    <dd class="item8">교직(20), 교육과정(80)</dd>
                    <dd class="item9">
                      일반교과 <span>(심층면접, 수업지도안, 수업실연)</span><br/>
                      실기·실험교과 <span>(심층면접, 수업지도안,수업실연, 실기·실험)</span>
                      <em>※시도별로 상이</em>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item7">유형</dt>
                    <dd class="item8">논술형(교직),<br/>서답형(교육과정)</dd>
                    <dd class="item9">
                      지도안, 면접, 실연, 실기 집단 토의, 수업 나눔<br/>
                      <em>※시도별로 상이</em>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="item7">합격자 사정</dt>
                    <dd class="item8">1차 시험성적으로 선발예정 인원의 1.5배수 이상 선발<br/>(강원도의 경우 2배수 선발)</dd>
                    <dd class="item9">1차,2차 시험성적을 합산하여 선발</dd>
                  </dl>
                </div>
                <p class="smallInfo">
                  ※ 1차 시험은 각 과목별 만점의 40% 이상 득점자에 한하여 합격자를 사정하고, 최종 합격자는 2차 시험 응시자에 한하여 합격자를 사정함.<br/>
                  ※ 2차 시험 과목 및 배점은 지역에 따라 차이가 있으므로, 시도 교육청별 공고문을 확인하시기 바랍니다.
                  <em>※ 본 표는 2021학년도 시행계획 공고 기준입니다.</em>
                </p>
              </div>
            </div>
          </div>
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

export default {
  mixins: [Mixin],
  name: 'InfoGuide',
  components: {
  },
  data() {
    return {
      currentTab:0,
      currentTab2:0,
    }
  },
}
</script>
