<template lang="html">
  <div>
    <!-- 수험번호 생성규칙 -->
    <div class="subTit">
      <h3>수험번호 생성규칙 :</h3>
    </div>
    <div class="tls w600">
      <table>
        <colgroup>
          <col width="150">
          <col width="100">
          <col width="100">
          <col width="120">
          <col width="120">
        </colgroup>
        <thead>
          <tr>
            <th>지역 명</th>
            <th>지역구분</th>
            <th>과목구분</th>
            <th>접수순서</th>
            <th class="backBeige">수험번호</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>현장(채점)</td>
            <td>10</td>
            <td>01~99</td>
            <td>0001~9999</td>
            <td>10010001</td>
          </tr>
          <tr>
            <td>온라인(채점)</td>
            <td>21</td>
            <td>01~99</td>
            <td>0001~9999</td>
            <td>21010001</td>
          </tr>
          <tr>
            <td>온라인(자가채점)</td>
            <td>22</td>
            <td>01~99</td>
            <td>0001~9999</td>
            <td>22010001</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tvs mt20">
      <table>
        <colgroup>
          <col width="200">
          <col width="*">
        </colgroup>
        <tbody>
          <tr>
            <th>일시정지 가능시간 (MAX) <sup>필수</sup></th>
            <td>
              <span class="unit w100 mr5">
                <input type="text" value="15"><em>분</em>
              </span> 이상 일시정지를 할 수 없습니다. 설정시간을 초과하면 시험을 강제종료 합니다.
            </td>
          </tr>
          <tr>
            <th>쉬는 시간 건너뛰기 (여부) <sup>필수</sup></th>
            <td>
              <span class="radioSet">
                <input type="radio" name="radio1" checked/>
                <label for=""><i></i>건너뛰기 허용</label>
              </span>
              <span class="radioSet">
                <input type="radio" name="radio1"  />
                <label for=""><i></i>건너뛰기 불가</label>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //수험번호 생성규칙 -->
    <!-- 과목코드 -->
    <div class="subTit">
      <h3>과목코드</h3>
      <span class="right">
        <p class="fRed mb10">과목코드는 수정할 수 없습니다.</p>
      </span>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="80">
          <col width="100">
          <col width="150">
          <col width="300">
          <col width="200">
          <col width="100">
          <col width="100">
        </colgroup>
        <thead>
          <tr>
            <th>순서</th>
            <th>노출여부</th>
            <th>과목(선생님)코드</th>
            <th>과목구분</th>
            <th>선생님</th>
            <th>등록일</th>
            <th>순서 변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1" checked>
                <label for="push1">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">01</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="" selected>유아</option>
                  <option value="">중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="" selected>유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="" selected>배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr class="gray">
            <td>-</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push2">
                <label for="push2">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">02</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="" selected>유아</option>
                  <option value="">중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="" selected>유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="" selected>이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr class="red">
            <td>2</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">03</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="" selected>특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="" selected>유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="" selected>박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push4" checked>
                <label for="push4">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">04</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="" selected>특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="" selected>유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="" selected>박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push5" checked>
                <label for="push5">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">11</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="" selected>특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="" selected>초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="" selected>박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push6" checked>
                <label for="push6">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">12</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="" selected>박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push7" checked>
                <label for="push7">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">13</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="" selected>송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push6" checked>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">14</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="" selected>음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="" selected>서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">15</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="" selected>미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value=""selected>위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL">16</td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="" selected>일본어</option>
                  <option value="">한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="" selected>동소현</option>
                  <option value="">원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push3" checked>
                <label for="push3">
                  <span>숨김</span>
                  <span>노출</span>
                </label>
              </span>
            </td>
            <td class="tL"><input type="number" value="19"/></td>
            <td class="halfUnit">
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="" selected>중등</option>
                  <option value="">사회/과학</option>
                  <option value="">비교과</option>
                  <option value="">특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
              <span class="selectSet">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">교육학</option>
                  <option value="">유아</option>
                  <option value="">국어</option>
                  <option value="">영어</option>
                  <option value="">수학</option>
                  <option value="">음악</option>
                  <option value="">미술</option>
                  <option value="">체육</option>
                  <option value="">중국어</option>
                  <option value="">일본어</option>
                  <option value="" selected>한문</option>
                  <option value="">가정</option>
                  <option value="">도덕윤리</option>
                  <option value="">미용</option>
                  <option value="">역사</option>
                  <option value="">지리</option>
                  <option value="">물리</option>
                  <option value="">화학</option>
                  <option value="">생물</option>
                  <option value="">과학교육론</option>
                  <option value="">전문상담</option>
                  <option value="">보건</option>
                  <option value="">유아특수</option>
                  <option value="">초딩특수</option>
                  <option value="">중딩특수</option>
                  <option value="">면접</option>
                  <option value="">한국사</option>
                  <option value="">사서직(공무원)</option>
                </select>
              </span>
            </td>
            <td>
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label"></option>
                  <option value="">김현</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">배지윤</option>
                  <option value="">이동건</option>
                  <option value="">양재웅</option>
                  <option value="">송헌/김준팀</option>
                  <option value="">송헌</option>
                  <option value="">김준</option>
                  <option value="">박노송</option>
                  <option value="">차류쉘팀</option>
                  <option value="">차미아</option>
                  <option value="">류지원</option>
                  <option value="">미쉘김</option>
                  <option value="">이정훈/안후상팀</option>
                  <option value="">이정훈</option>
                  <option value="">안후상</option>
                  <option value="">김지혜</option>
                  <option value="">서정팀</option>
                  <option value="">서민정</option>
                  <option value="">정희원</option>
                  <option value="">박서형</option>
                  <option value="">위상팀</option>
                  <option value="">오정환</option>
                  <option value="">김용호</option>
                  <option value="">임서윤</option>
                  <option value="">희소 중국어팀</option>
                  <option value="">한정은</option>
                  <option value="">이해진</option>
                  <option value="">동소현</option>
                  <option value="" selected>원주용</option>
                  <option value="">문영은</option>
                  <option value="">김성무</option>
                  <option value="">이영미</option>
                  <option value="">이순권</option>
                  <option value="">반철진</option>
                  <option value="">한무일</option>
                  <option value="">최만영</option>
                  <option value="">안병천/권혁팀</option>
                  <option value="">안병천</option>
                  <option value="">권혁</option>
                  <option value="">엄은미</option>
                  <option value="">이진영</option>
                  <option value="">임수진</option>
                  <option value="">한경</option>
                  <option value="">박해인</option>
                  <option value="">김창만</option>
                  <option value="">양재웅</option>
                  <option value="">권구현</option>
                  <option value="">윤중샘</option>
                  <option value="">정재학</option>
                  <option value="">신인수</option>
                </select>
              </span>
            </td>
            <td>2021-05-01</td>
            <td>
              <button class="btnPosArrow">위로</button>
              <button class="btnPosArrow down">아래로</button>
            </td>
          </tr>
          <tr>
            <td colspan="7"><button class="btnM blueline wFull">+ 행 추가</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //과목코드 -->
    <!-- 관리 -->
		<div class="subTit"><h3>관리</h3></div>
		<div class="tvs record">
			<table>
				<colgroup>
					<col width="160"/>
					<col width="*"/>
				</colgroup>
				<tbody>
					<tr>
						<th>수정 이력</th>
						<td>
							<ul class="recordList">
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
								<li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!-- //관리 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'FormatMgtRule',
	data() {
			return {
			}
	},
	methods: {
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
