<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 강사별로 강의 결제 현황을 집계합니다</li>
            <li>Ⓘ 금액/건수 기준으로 확인 가능합니다</li>
          </ul>
        </div>
      </div>
      <div class="listSearch">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="typeSelect" @change="typeSelect()">
                  <option value="typeAll">학원/온라인</option>
                  <option value="typeLecture">강사/강좌별</option>
                </select>
              </span>
            </span>
            <span class="lsItem" v-if="typeAll">
              <strong class="title">결제일</strong><!-- 2021-08-02 캘린더 사용 컴포넌트 앞에 타이틀 추가 -->
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, inputEvents, togglePopover, isDragging }">
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.start" v-on="inputEvents.start" @click="togglePopover()" placeholder="시작일 선택"/>
                  <em>~</em>
                  <input :class="isDragging ? 'text-gray-600' : 'text-gray-900'" :value="inputValue.end" v-on="inputEvents.end" @click="togglePopover()" placeholder="종료일 선택"/>
                </template>
              </Vcalendar>
            </span>
            <span class="lsItem" v-if="typeLecture">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">2021년</option>
                  <option value="">2020년</option>
                </select>
              </span>
            </span>
            <span class="lsItem" v-if="typeLecture">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="">1월</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <button class="btnSearch">검색</button>
            </span>
          </div>
          <div>
            <button class="btnRefresh">초기화</button>
          </div>
        </div>
      </div>
      <div class="right-po">
        <button class="btnM redline" id="numberBaseBtn" @click="numberBase()" v-if="numberBaseBtn">결제건수 기준으로 조회</button>
        <button class="btnM redline" id="priceBaseBtn" @click="priceBase()" v-if="priceBaseBtn">금액 기준으로 조회</button>
      </div>
    </div>
    <!-- //검색 -->
    <div v-if="typeAll">
      <div class="tls tls2">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="120"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
            <col width="100"/>
          </colgroup>
          <thead class="duble">
            <tr>
              <th rowspan="2">과목</th>
              <th rowspan="2">선생님</th>
              <th colspan="4">학원(강좌)</th>
              <th colspan="4">온라인(강좌)</th>
              <th colspan="4">합계</th>
            </tr>
            <tr>
              <th class="fBlue"><em class="fBlue">기준년도</em></th>
              <th class="fBlue"><em class="fBlue">전년동기</em></th>
              <th>전년대비(원)</th>
              <th>전년대비(%)</th>
              <th class="fBlue"><em class="fBlue">기준년도</em></th>
              <th class="fBlue"><em class="fBlue">전년동기</em></th>
              <th>전년대비(원)</th>
              <th>전년대비(%)</th>
              <th class="fBlue"><em class="fBlue">기준년도</em></th>
              <th class="fBlue"><em class="fBlue">전년동기</em></th>
              <th>전년대비(원)</th>
              <th>전년대비(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>교육학</td>
              <td>김현</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>권구현</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>교육학</td>
              <td>윤중샘</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>유아</td>
              <td>배지윤</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>유아</td>
              <td>유아콜라보</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>유아</td>
              <td>양재웅</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>박노송</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>송헌</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>국어</td>
              <td>송헌/김준팀</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>류지원</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>미쉘김</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>차류쉘팀</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>영어</td>
              <td>차미아</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>가정</td>
              <td>문영은</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>음악</td>
              <td>박서형</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
            <tr>
              <td>음악</td>
              <td>서민정</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">20,000</td>
              <td class="tR">10,000</td>
              <td class="tR bgRed">10,000</td>
              <td class="tR bgRed">200%</td>
              <td class="tR">40,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed tR">20,000</td>
              <td class="tR bgRed">200%</td>
            </tr>
            <tr>
              <td>음악</td>
              <td>서정팀</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">10,000</td>
              <td class="tR">20,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">50%</td>
              <td class="tR">20,000</td>
              <td class="tR">40,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">50%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="emphasisBlack fBig">
              <td colspan="2">합계</td>
              <td class="tR">250,000</td>
              <td class="tR">260,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">96%</td>
              <td class="tR">250,000</td>
              <td class="tR">260,000</td>
              <td class="bgRed fRed tR">(10,000)</td>
              <td class="bgRed tR">96%</td>
              <td class="tR">500,000</td>
              <td class="tR">520,000</td>
              <td class="tR bgRed fRed">(20,000)</td>
              <td class="bgRed tR">96%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="gridSet grid2" v-if="typeLecture">
      <div class="gridItem vTop pr10">
        <div class="subTit"><h3><em class="fBlue">2021년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="80"/>
              <col width="100"/>
              <col width="300"/>
              <col width="80"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>강사</th>
                <th>유형</th>
                <th>강좌번호</th>
                <th>상품명</th>
                <th>인원</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="7">김현</td>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 키위교육학 입문</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td rowspan="7">배지윤</td>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td colspan="4">합계</td>
                <td class="tR">350</td>
                <td class="tR">500,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="gridItem vTop">
        <div class="subTit"><h3><em class="fBlue">2020년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="80"/>
              <col width="100"/>
              <col width="300"/>
              <col width="80"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>강사</th>
                <th>유형</th>
                <th>강좌번호</th>
                <th>상품명</th>
                <th>인원</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="7">김현</td>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 키위교육학 입문</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>김현 키위교육학 입문</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 1~2월]<em class="iSet sky">단과</em><br/>김현 교육학 완전정복 패키지</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td rowspan="7">배지윤</td>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 1~2월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>서울학원</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>H2105000010</td>
                <td class="tL">[21 3~5월]<em class="iSet sky">단과</em><br/>배지윤 유아 완전정복</td>
                <td class="tR">30</td>
                <td class="tR">20,000</td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2123</td>
                <td class="tL">[21 3~5월]<em class="iSet blue">패키지</em><br/>배지윤 유아 완전정복 패키지</td>
                <td class="tR">20</td>
                <td class="tR">40,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td colspan="4">합계</td>
                <td class="tR">350</td>
                <td class="tR">500,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorPaymentTeacherCourse',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
      numberBaseBtn: true,
      priceBaseBtn: false,
      typeAll: true,
      typeLecture: false,
    }
  },
  methods: {
    typeSelect() {
      var tgSelect = document.getElementById("typeSelect");
      var selectValue = tgSelect.options[tgSelect.selectedIndex].value;
      if(selectValue == "typeAll") {
        this.numberBaseBtn = true;
        this.typeAll = true;
        this.typeLecture = false;
      } else if(selectValue == "typeLectureEtc") {
        this.numberBaseBtn = true;
        this.typeAll = false;
        this.typeLecture = false;
      } else if(selectValue == "typeLecture") {
        this.numberBaseBtn = false;
        this.typeAll = false;
        this.typeLecture = true;
      }
    }
  },
  components: {
  },
}
</script>
