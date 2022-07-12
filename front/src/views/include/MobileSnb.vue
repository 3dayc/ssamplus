<template lang="html">
  <div>
    <!--수강신청-->
    <div v-if="mobileSnb == 2" class="etcLecSnb">
      <div class="lnbDepth1 lecCase">
        <ul>
          <li :class="{on:mobileSnb2 == 210}"><router-link to="/mkup/lecture/index/mjedu">교육학</router-link></li>
          <li :class="{on:mobileSnb2 == 220}"><router-link to="/mkup/lecture/index/mjchild">유아</router-link></li>
          <li :class="{on:mobileSnb2 == 230}"><router-link to="/mkup/lecture/index/mjmiddle">중등</router-link></li>
          <li :class="{on:mobileSnb2 == 240}"><router-link to="/mkup/lecture/index/mjss">사회/과학</router-link></li>
          <li :class="{on:mobileSnb2 == 250}"><router-link to="/mkup/lecture/index/mjnomj">비교과</router-link></li>
          <li :class="{on:mobileSnb2 == 260}"><router-link to="/mkup/lecture/index/mjspe">특수</router-link></li>
          <li :class="{on:mobileSnb2 == 270}"><router-link to="/mkup/lecture/index/mjessay">논술 · 면접</router-link></li>
          <li :class="{on:mobileSnb2 == 280}"><router-link to="/mkup/lecture/index/mjhistory">한국사</router-link></li>
          <li :class="{on:mobileSnb2 == 290}"><router-link to="/mkup/lecture/index/mjlibr">사서직(공무원)</router-link></li>
        </ul>
      </div>
      <button class="btnAllSsam" @click="ssamChoiceTrigger = true">선생님선택</button>
    </div>
    <!--//수강신청-->
    <!--쌤 Mall-->
    <div v-if="mobileSnb == 3">
      <div class="lnbDepth1 mallCase">
        <ul>
          <li :class="{on:mobileSnb2== 310}"><router-link to="/mkup/ssammall/index">쌤 Mall 홈</router-link></li>
          <li :class="{on:mobileSnb2== 320}"><router-link to="/mkup/ssammall/book">교재도서</router-link></li>
          <li :class="{on:mobileSnb2== 330}"><router-link to="/mkup/ssammall/device">학습기기</router-link></li>
          <li :class="{on:mobileSnb2== 340}"><router-link to="/mkup/ssammall/goods/fabric">굿즈</router-link></li>
          <li :class="{on:mobileSnb2== 350}"><router-link to="/mkup/ssammall/review/book">백퍼후기</router-link></li>
        </ul>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 320">
        <ol>
          <li>
            <button class="btnAllSsam"  @click="mobileSnb2Opner = !mobileSnb2Opner">선생님선택</button>
          </li>
          <li>
            <button :class="{on:mobileSnb2Opner== true}" @click="mobileSnb2Opner = !mobileSnb2Opner">선생님 보기</button>
          </li>
        </ol>
      </div>
      <div class="mallBookAll" v-if="mobileSnb2Opner == true">
        <div class="classKind">
          <ul>
            <li>
              <span>교육학</span>
              <ol>
                <li><router-link to="/mkup/ssammall/book/teacher1">김현</router-link></li>
                <li><router-link to="">권구현</router-link></li>
                <li><router-link to="">윤중샘</router-link></li>
              </ol>
            </li>
            <li>
              <span>유아</span>
              <ol>
                <li><router-link to="/mkup/ssammall/book/teacher2">배지윤</router-link></li>
                <li><router-link to="">이동건</router-link></li>
                <li><router-link to="">양재웅</router-link></li>
              </ol>
            </li>
            <li>
              <span>국어</span>
              <ol>
                <li><router-link to="/mkup/ssammall/book/teacher3" class="new">송헌/김준팀</router-link></li>
                <li><router-link to="">송헌</router-link></li>
                <li><router-link to="">김준</router-link></li>
                <li><router-link to="">박노송</router-link></li>
              </ol>
            </li>
            <li>
              <span>영어</span>
              <ol>
                <li><router-link to="">차류쉘팀</router-link></li>
                <li><router-link to="">차미아</router-link></li>
                <li><router-link to="">류지원</router-link></li>
                <li><router-link to="">미쉘김</router-link></li>
              </ol>
            </li>
            <li>
              <span>수학</span>
              <ol>
                <li><router-link to="">이정훈/안후상팀</router-link></li>
                <li><router-link to="">이정훈</router-link></li>
                <li><router-link to="">안후상</router-link></li>
                <li><router-link to="" class="new">김지혜</router-link></li>
              </ol>
            </li>
            <li>
              <span>음악</span>
              <ol>
                <li><router-link to="">서정팀</router-link></li>
                <li><router-link to="">서민정</router-link></li>
                <li><router-link to="">정희원</router-link></li>
                <li><router-link to="">박서형</router-link></li>
              </ol>
            </li>
            <li>
              <span>미술</span>
              <ol>
                <li><router-link to="">위상팀</router-link></li>
              </ol>
            </li>
            <li>
              <span>체육</span>
              <ol>
                <li><router-link to="">오정환</router-link></li>
                <li><router-link to="">김용호</router-link></li>
                <li><router-link to="">임서윤</router-link></li>
              </ol>
            </li>
            <li>
              <span>중국어</span>
              <ol>
                <li><router-link to="">희소중국어팀</router-link></li>
                <li><router-link to="">한정은</router-link></li>
                <li><router-link to="">이해진</router-link></li>
              </ol>
            </li>
            <li>
              <span>일본어</span>
              <ol>
                <li><router-link to="">동소현</router-link></li>
              </ol>
            </li>
            <li>
              <span>한문</span>
              <ol>
                <li><router-link to="">원주용</router-link></li>
              </ol>
            </li>
            <li>
              <span>가정</span>
              <ol>
                <li><router-link to="">문영은</router-link></li>
              </ol>
            </li>
            <li>
              <span>도덕윤리</span>
              <ol>
                <li><router-link to="">김성무</router-link></li>
              </ol>
            </li>
            <li>
              <span>미용</span>
              <ol>
                <li><router-link to="">이영미</router-link></li>
              </ol>
            </li>
            <li>
              <span>역사</span>
              <ol>
                <li><router-link to="">이순권</router-link></li>
                <li><router-link to="">반철진</router-link></li>
              </ol>
            </li>
            <li>
              <span>지리</span>
              <ol>
                <li><router-link to="">한무일</router-link></li>
              </ol>
            </li>
            <li>
              <span>물리</span>
              <ol>
                <li><router-link to="">최민영</router-link></li>
              </ol>
            </li>
            <li>
              <span>화학</span>
              <ol>
                <li><router-link to="">안병천/권혁팀</router-link></li>
                <li><router-link to="">안병천</router-link></li>
                <li><router-link to="">권혁</router-link></li>
              </ol>
            </li>
            <li>
              <span>생물</span>
              <ol>
                <li><router-link to="">엄은미</router-link></li>
              </ol>
            </li>
            <li>
              <span>과학교육론</span>
              <ol>
                <li><router-link to="">이진영</router-link></li>
              </ol>
            </li>
            <li>
              <span>전문상담</span>
              <ol>
                <li><router-link to="">이진영</router-link></li>
              </ol>
            </li>
            <li>
              <span>보건</span>
              <ol>
                <li><router-link to="">임수진</router-link></li>
              </ol>
            </li>
            <li>
              <span>특수</span>
              <ol>
                <li><router-link to="">한경</router-link></li>
                <li><router-link to="">박해인</router-link></li>
              </ol>
            </li>
            <li>
              <span>면접</span>
              <ol>
                <li><router-link to="">양재웅</router-link></li>
                <li><router-link to="">권구현</router-link></li>
                <li><router-link to="">윤중샘</router-link></li>
              </ol>
            </li>
            <li>
              <span>한국사</span>
              <ol>
                <li><router-link to="">정재학</router-link></li>
              </ol>
            </li>
            <li>
              <span>사서직(공무원)</span>
              <ol>
                <li><router-link to="">신인수</router-link></li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 330">
        <ol>
          <li :class="{on:mobileSnb3 == 331}">
            <router-link to="/mkup/ssammall/device/notebook">노트북</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 332}">
            <router-link to="/mkup/ssammall/device/tablet">태블릿</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 333}">
            <router-link to="/mkup/ssammall/device/phone">스마트폰</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 334}">
            <router-link to="/mkup/ssammall/device/etc">기타</router-link>
          </li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 340">
        <ol>
          <li :class="{on:mobileSnb3 == 341}">
            <router-link to="/mkup/ssammall/goods/fabric">패브릭</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 342}">
            <router-link to="/mkup/ssammall/goods/stationery">문구</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 343}">
            <router-link to="/mkup/ssammall/goods/etc">기타</router-link>
          </li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 350">
        <ol>
          <li :class="{on:mobileSnb3 == 351}">
            <router-link to="/mkup/ssammall/review/book">교재도서</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 352}">
            <router-link to="/mkup/ssammall/review/device">학습기기</router-link>
          </li>
          <li :class="{on:mobileSnb3 == 353}">
            <router-link to="/mkup/ssammall/review/goods">굿즈</router-link>
          </li>
        </ol>
      </div>
    </div>
    <!--//쌤 Mall-->
    <!--선생님 스페셜-->
    <div v-if="mobileSnb == 4">
      <div class="lnbDepth1 specialCase">
        <ul>
          <li :class="{on:mobileSnb2 == 410}"><router-link to="/mkup/special/index">선생님 스페셜 홈</router-link></li>
          <li :class="{on:mobileSnb2 == 420}"><router-link to="/mkup/special/event">선생님 이벤트</router-link></li>
          <li :class="{on:mobileSnb2 == 430}"><router-link to="/mkup/special/hit">리얼적중</router-link></li>
          <li :class="{on:mobileSnb2 == 440}"><router-link to="/mkup/special/interview">선생님 인터뷰</router-link></li>
          <li :class="{on:mobileSnb2 == 450}"><router-link to="/mkup/special/review">수강후기</router-link></li>
        </ul>
      </div>
    </div>
    <!--//선생님 스페셜-->
    <!--무료강의-->
    <div v-if="mobileSnb == 5">
      <div class="lnbDepth1 openlecCase">
        <ul>
          <li :class="{on:mobileSnb2 == 510}"><router-link to="/mkup/openlec/index">무료강의 홈</router-link></li>
          <li :class="{on:mobileSnb2 == 520}"><router-link to="/mkup/openlec/highlight">강의 하이라이트</router-link></li>
          <li :class="{on:mobileSnb2 == 530}"><router-link to="/mkup/openlec/comment">기출해설</router-link></li>
          <li :class="{on:mobileSnb2 == 540}"><router-link to="/mkup/openlec/presentation">설명회</router-link></li>
          <li :class="{on:mobileSnb2 == 550}"><router-link to="/mkup/openlec/freelec">무료특강</router-link></li>
        </ul>
      </div>
    </div>
    <!--//무료강의-->
    <!--시험정보-->
    <div v-if="mobileSnb == 6">
      <div class="lnbDepth1 examCase">
        <ul>
          <li :class="{on:mobileSnb2 == 610}"><router-link to="/mkup/exam/info/guide">시험정보</router-link></li>
          <li :class="{on:mobileSnb2 == 620}"><router-link to="/mkup/exam/reference/previous">임용 자료실</router-link></li>
          <li :class="{on:mobileSnb2 == 630}"><router-link to="/mkup/exam/column">임용 칼럼</router-link></li>
        </ul>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 610">
        <ol>
          <li :class="{on:mobileSnb3 == 611}"><router-link to="/mkup/exam/info/guide">임용시험 안내</router-link></li>
          <li :class="{on:mobileSnb3 == 612}"><router-link to="/mkup/exam/info/competition">모집인원 및 경쟁률</router-link></li>
          <li :class="{on:mobileSnb3 == 613}"><router-link to="/mkup/exam/info/notify">시험공고</router-link></li>
          <li :class="{on:mobileSnb3 == 614}"><router-link to="/mkup/exam/info/news">교육계 소식</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 620">
        <ol>
          <li :class="{on:mobileSnb3 == 621}"><router-link to="/mkup/exam/reference/previous">기출문제</router-link></li>
          <li :class="{on:mobileSnb3 == 622}"><router-link to="/mkup/exam/reference/edu">교육과정 자료실</router-link></li>
          <li :class="{on:mobileSnb3 == 623}"><router-link to="/mkup/exam/reference/taker">수험 자료실</router-link></li>
        </ol>
      </div>
    </div>
    <!--//시험정보-->
    <!--합격수기-->
    <div v-if="mobileSnb == 7">
      <div class="lnbDepth1 passCase">
        <ul>
          <li :class="{on:mobileSnb2 == 710}"><router-link to="/mkup/pass/index">합격수기 홈</router-link></li>
          <li :class="{on:mobileSnb2 == 720}"><router-link to="/mkup/pass/interview">선생님 합격수기/인터뷰</router-link></li>
        </ul>
      </div>
    </div>
    <!--//합격수기-->
    <!--인사이드희소-->
    <div v-if="mobileSnb == 8">
      중메뉴명
      <div>소메뉴</div>
    </div>
    <!--//인사이드희소-->
    <!--희소고시학원-->
    <div v-if="mobileSnb == 9">
      중메뉴명
      <div>소메뉴</div>
    </div>
    <!--//희소고시학원-->
    <!--상담센터-->
    <div class="lnbBack" v-if="mobileSnb == 12">
      <div class="lnbDepth1 counselCase">
        <ul>
          <li :class="{on:mobileSnb2== 1210}"><router-link to="/mkup/counsel/index">상담센터 홈</router-link></li>
          <li :class="{on:mobileSnb2== 1220}"><router-link to="/mkup/counsel/faq">자주 하는 질문</router-link></li>
          <li :class="{on:mobileSnb2== 1230}"><router-link to="/mkup/counsel/guide">사이트이용가이드</router-link></li>
          <li :class="{on:mobileSnb2== 1240}"><router-link to="/mkup/counsel/bbswrite">1:1 게시판 상담</router-link></li>
          <li :class="{on:mobileSnb2== 1250}"><router-link to="/mkup/counsel/reserve">1:1 상담 예약</router-link></li>
          <li :class="{on:mobileSnb2== 1260}"><router-link to="/mkup/counsel/clean/idshare">쌤Plus 클린존</router-link></li>
          <li :class="{on:mobileSnb2== 1270}"><router-link to="/mkup/counsel/programInstall">필수 프로그램 설치</router-link></li>
          <li :class="{on:mobileSnb2== 1280}"><router-link to="/mkup/counsel/remote">원격고객 지원</router-link></li>
          <li :class="{on:mobileSnb2== 1290}"><router-link to="/mkup/counsel/center">상담센터 공지</router-link></li>
          <li :class="{on:mobileSnb2== 1200}"><router-link to="/mkup/counsel/direct">학원위치 안내</router-link></li>
        </ul>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1260">
        <ol>
          <li :class="{on:mobileSnb3 == 1261}"><router-link to="/mkup/counsel/clean/idshare">ID 공유금지 안내</router-link></li>
          <li :class="{on:mobileSnb3 == 1262}"><router-link to="/mkup/counsel/clean/report">불법공유 신고</router-link></li>
          <li :class="{on:mobileSnb3 == 1263}"><router-link to="/mkup/counsel/clean/illegal">불법공유자 명단</router-link></li>
        </ol>
      </div>
    </div>
    <!--//상담센터-->
    <!--마이페이지-->
    <div  v-if="mobileSnb == 13">
      <div class="lnbDepth1 mypageCase">
        <ul>
          <li :class="{on:mobileSnb2 == 1310}"><router-link to="/mkup/mypage/payment/history">결제</router-link></li>
          <li :class="{on:mobileSnb2 == 1320}"><router-link to="/mkup/mypage/counsel/bbs">상담</router-link></li>
          <li :class="{on:mobileSnb2 == 1330}"><router-link to="/mkup/mypage/myreview">후기작성</router-link></li>
          <li :class="{on:mobileSnb2 == 1340}"><router-link to="/mkup/mypage/myinfo/pw">회원정보</router-link></li>
        </ul>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1310">
        <ol>
          <li :class="{on:mobileSnb3 == 1311}"><router-link to="/mkup/mypage/payment/history">결제내역</router-link></li>
          <li :class="{on:mobileSnb3 == 1312}"><router-link to="/mkup/mypage/payment/delivery">주문배송</router-link></li>
          <li :class="{on:mobileSnb3 == 1313}"><router-link to="/mkup/mypage/payment/basket">장바구니</router-link></li>
          <li :class="{on:mobileSnb3 == 1314}"><router-link to="/mkup/mypage/payment/locker">사물함 신청</router-link></li>
          <li :class="{on:mobileSnb3 == 1315}"><router-link to="/mkup/mypage/payment/coupon">쿠폰</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1320">
        <ol>
          <li :class="{on:mobileSnb3 == 1321}"><router-link to="/mkup/mypage/counsel/bbs">1:1 게시판 상담</router-link></li>
          <li :class="{on:mobileSnb3 == 1322}"><router-link to="/mkup/mypage/counsel/reserve">1:1 상담 예약</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1340">
        <ol>
          <li :class="{on:mobileSnb3 == 1341}"><router-link to="/mkup/mypage/myinfo/pw">내 정보 확인/수정</router-link></li>
          <li :class="{on:mobileSnb3 == 1342}"><router-link to="/mkup/mypage/myinfo/mode">전공모드 관리</router-link></li>
          <li :class="{on:mobileSnb3 == 1343}"><router-link to="/mkup/mypage/myinfo/address">배송지 정보</router-link></li>
        </ol>
      </div>
    </div>
    <!--//마이페이지-->
    <!--내 강의실-->
    <div v-if="mobileSnb == 14">
      <div class="lnbDepth1 mylecCase">
        <ul>
          <li :class="{on:mobileSnb2 == 1410}"><router-link to="/mkup/mylec/online/my">온라인 수강생</router-link></li>
          <li :class="{on:mobileSnb2 == 1420}"><router-link to="/mkup/mylec/direct/my">학원 수강생</router-link></li>
          <li :class="{on:mobileSnb2 == 1430}"><router-link to="/mkup/mylec/study/my">학습관리 ZONE</router-link>  </li>
          <li :class="{on:mobileSnb2 == 1440}"><router-link to="/mkup/mylec/premium/ssampack">프리미엄 ZONE</router-link></li>
          <li :class="{on:mobileSnb2 == 1450}"><router-link to="/mkup/mylec/mock/stare">모의고사 ZONE</router-link></li>
        </ul>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1410">
        <ol>
          <li :class="{on:mobileSnb3 == 1411}"><router-link to="/mkup/mylec/online/my">온라인 강좌 관리</router-link></li>
          <li :class="{on:mobileSnb3 == 1412}"><router-link to="/mkup/mylec/online/update">업데이트 일정</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1420">
        <ol>
          <li :class="{on:mobileSnb3 == 1421}"><router-link to="/mkup/mylec/direct/my">학원 강좌 관리</router-link></li>
          <li :class="{on:mobileSnb3 == 1422}"><router-link to="/mkup/mylec/direct/live">라이브 강좌 관리</router-link></li>
          <li :class="{on:mobileSnb3 == 1423}"><router-link to="/mkup/mylec/direct/addition">보충 강의실</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1430">
        <ol>
          <li :class="{on:mobileSnb3 == 1431}"><router-link to="/mkup/mylec/study/my">나의 학습현황</router-link></li>
          <li :class="{on:mobileSnb3 == 1432}"><router-link to="/mkup/mylec/study/qna">학습 Q&amp;A</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1440">
        <ol>
          <li :class="{on:mobileSnb3 == 1441}"><router-link to="/mkup/mylec/premium/ssampack">프리미엄 쌤팩</router-link></li>
          <li :class="{on:mobileSnb3 == 1442}"><router-link to="/mkup/mylec/premium/counsel">프리미엄 회원상담</router-link></li>
        </ol>
      </div>
      <div class="lnbDepth2" v-if="mobileSnb2 == 1450">
        <ol>
          <li :class="{on:mobileSnb3 == 1451}"><router-link to="/mkup/mylec/mock/stare">응시 모의고사 관리</router-link></li>
          <li :class="{on:mobileSnb3 == 1452}"><router-link to="/mkup/mylec/mock/explain">모의고사 성적/해설</router-link></li>
        </ol>
      </div>
    </div>
    <!--//내 강의실-->

    <!-- 수강신청 선생님 팝업 -->
    <Popup v-if='ssamChoiceTrigger' @close="ssamChoiceTrigger = false" class="ssamChoicePop">
      <template slot="modalheader">
        <div>
          <h1>선생님 전체보기</h1>
          <button @click="ssamChoiceTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <LecSsamList />
      </template>
    </Popup>
    <!-- //수강신청 선생님 팝업 -->
  </div>
</template>

<script>
import Popup from '@/views/include/Popup.vue';
import LecSsamList from '@/views/lecture/LecSsamList.vue';

export default {
  name: 'mobileSnb',
  components: {
    Popup,
    LecSsamList
  },
  data() {
    return {
      mobileSnb:0,
      mobileSnb2:0,
      mobileSnb3:0,
      mobileSnb2Opner:false,
      ssamChoiceTrigger:false
    }
  },
  methods: {
    mobileSnbChange(url) {
      this.mobileSnb = 0;
      this.mobileSnb2 = 0;
      this.mobileSnb3 = 0;
      if (url.includes('/mkup/ssampack')) this.mobileSnb = 1;
      else if(url.includes('/mkup/lecture')) {
        this.mobileSnb = 2;
        if(url.includes('/mkup/lecture/index/mjedu')) {this.mobileSnb2 = 210}
        else if(url.includes('/mkup/lecture/index/mjchild')) {this.mobileSnb2 = 220}
        else if(url.includes('/mkup/lecture/index/mjmiddle')) {this.mobileSnb2 = 230}
        else if(url.includes('/mkup/lecture/index/mjss')) {this.mobileSnb2 = 240}
        else if(url.includes('/mkup/lecture/index/mjnomj')) {this.mobileSnb2 = 250}
        else if(url.includes('/mkup/lecture/index/mjspe')) {this.mobileSnb2 = 260}
        else if(url.includes('/mkup/lecture/index/mjessay')) {this.mobileSnb2 = 270}
        else if(url.includes('/mkup/lecture/index/mjhistory')) {this.mobileSnb2 = 280}
        else if(url.includes('/mkup/lecture/index/mjlibr')) {this.mobileSnb2 = 290}
      }
      //
      else if(url.includes('/ssammall')) {
        this.mobileSnb = 3;
        if(url.includes('/mkup/ssammall/index')) {
          this.mobileSnb2 = 310;
        }
        if(url.includes('/mkup/ssammall/book')) {
          this.mobileSnb2 = 320;
        }
        if(url.includes('/mkup/ssammall/device')) {
          this.mobileSnb2 = 330;
          if(url.includes('/mkup/ssammall/device/notebook')) {this.mobileSnb3 = 331;}
          else if(url.includes('/mkup/ssammall/device/tablet')) {this.mobileSnb3 = 332;}
          else if(url.includes('/mkup/ssammall/device/phone')) {this.mobileSnb3 = 333;}
          else if(url.includes('/mkup/ssammall/device/etc')) {this.mobileSnb3 = 334;}
        }
        else if(url.includes('/ssammall/goods/')) {
          this.mobileSnb2 = 340;
          if(url.includes('/ssammall/goods/fabric')) {this.mobileSnb3 = 341;}
          else if(url.includes('/ssammall/goods/stationery')) {this.mobileSnb3 = 342;}
          else if(url.includes('/ssammall/goods/etc')) {this.mobileSnb3 = 343;}
        }
        else if(url.includes('/ssammall/review')) {
          this.mobileSnb2 = 350;
          if(url.includes('/ssammall/review/book')) {this.mobileSnb3 = 351;}
          else if(url.includes('/ssammall/review/device')) {this.mobileSnb3 = 352;}
          else if(url.includes('/ssammall/review/goods')) {this.mobileSnb3 = 353;}
        }
      }
      //
      else if(url.includes('/special')) {
        this.mobileSnb = 4;
        if(url.includes('/special/index')) {this.mobileSnb2 = 410;}
        else if(url.includes('/special/event')) {this.mobileSnb2 = 420;}
        else if(url.includes('/special/hit')) {this.mobileSnb2 = 430;}
        else if(url.includes('/special/interview')) {this.mobileSnb2 = 440;}
        else if(url.includes('/special/review')) {this.mobileSnb2 = 450;}
      }
      //
      else if(url.includes('/openlec')) {
        this.mobileSnb = 5;
        if(url.includes('/openlec/index')) {this.mobileSnb2 = 510}
        else if(url.includes('/openlec/highlight')) {this.mobileSnb2 = 520}
        else if(url.includes('/openlec/comment')) {this.mobileSnb2 = 530}
        else if(url.includes('/openlec/presentation')) {this.mobileSnb2 = 540}
        else if(url.includes('/openlec/freelec')) {this.mobileSnb2 = 550}
      }
      //
      else if(url.includes('/exam')) {
        this.mobileSnb = 6;
        if(url.includes('/exam/info')) {
          this.mobileSnb2 = 610;
          if(url.includes('/exam/info/guide')) {this.mobileSnb3 = 611}
          else if(url.includes('/exam/info/competition')) {this.mobileSnb3 = 612}
          else if(url.includes('/exam/info/notif')) {this.mobileSnb3 = 613}
          else if(url.includes('/exam/info/news')) {this.mobileSnb3 = 614}
        }
        else if(url.includes('/exam/reference')) {
          this.mobileSnb2 = 620;
          if(url.includes('/exam/reference/previous')) {this.mobileSnb3 = 621}
          else if(url.includes('/exam/reference/edu')) {this.mobileSnb3 = 622}
          else if(url.includes('/exam/reference/taker')) {this.mobileSnb3 = 623}
        }
        else if(url.includes('/exam/column')) {this.mobileSnb2 = 630}
      }
      //
      else if(url.includes('/pass')) {
        this.mobileSnb = 7;
        if(url.includes('/pass/index')) {this.mobileSnb2 = 710}
        else if(url.includes('/pass/interview')) {this.mobileSnb2 = 720}
      }
      //
      else if(url.includes('/inside')) this.mobileSnb = 8;
      //
      else if(url.includes('/academy')) this.mobileSnb = 9;
      //
      else if(url.includes('/mkup/bbs/notice')) this.mobileSnb = 10;
      //
      else if(url.includes('/mkup/bbs/event')) this.mobileSnb = 11;
      //
      else if(url.includes('/mkup/counsel')) {
        this.mobileSnb = 12;
        if(url.includes('/mkup/counsel/index')) {this.mobileSnb2 = 1210;}
        else if(url.includes('/mkup/counsel/faq')) {this.mobileSnb2 = 1220;}
        else if(url.includes('/mkup/counsel/guide')) {this.mobileSnb2 = 1230;}
        else if(url.includes('/mkup/counsel/bbswrite')) {this.mobileSnb2 = 1240;}
        else if(url.includes('/mkup/counsel/reserve')) {this.mobileSnb2 = 1250;}
        else if(url.includes('/mkup/counsel/clean')) {
          this.mobileSnb2 = 1260;
          if(url.includes('/mkup/counsel/clean/idshare')) {this.mobileSnb3 = 1261;}
          else if(url.includes('/mkup/counsel/clean/report')) {this.mobileSnb3 = 1262;}
          else if(url.includes('/mkup/counsel/clean/illegal')) {this.mobileSnb3 = 1263;}
        }
        else if(url.includes('/mkup/counsel/programInstall')) {this.mobileSnb2 = 1270;}
        else if(url.includes('/mkup/counsel/remote')) {this.mobileSnb2 = 1280;}
        else if(url.includes('/mkup/counsel/center')) {this.mobileSnb2 = 1290;}
        else if(url.includes('/mkup/counsel/direct')) {this.mobileSnb2 = 1200;}
      }
      //
      else if(url.includes('/mypage')) {
        this.mobileSnb = 13;
        if(url.includes('/mypage/payment')) {
          this.mobileSnb2 = 1310;
          if(url.includes('/mypage/payment/history')) {this.mobileSnb3 = 1311}
          else if(url.includes('/mypage/payment/delivery')) {this.mobileSnb3 = 1312}
          else if(url.includes('/mypage/payment/basket')) {this.mobileSnb3 = 1313}
          else if(url.includes('/mypage/payment/locker')) {this.mobileSnb3 = 1314}
          else if(url.includes('/mypage/payment/coupon')) {this.mobileSnb3 = 1315}
        } else if(url.includes('/mypage/counsel/')){
          this.mobileSnb2 = 1320;
          if(url.includes('/mypage/counsel/bbs')) {this.mobileSnb3 = 1321}
          else if(url.includes('/mypage/counsel/reserve')) {this.mobileSnb3 = 1322}
        } else if(url.includes('/mkup/mypage/myreview')){
          this.mobileSnb2 = 1330;
        } else if(url.includes('/mypage/myinfo')){
          this.mobileSnb2 = 1340;
          if(url.includes('/mypage/myinfo/pw')) {this.mobileSnb3 = 1341}
          else if(url.includes('/mypage/myinfo/modify')) {this.mobileSnb3 = 1341}
          else if(url.includes('/mypage/myinfo/mode')) {this.mobileSnb3 = 1342}
          else if(url.includes('/mypage/myinfo/address')) {this.mobileSnb3 = 1343}
        }
      }
      //
      else if(url.includes('/mylec')) {
        this.mobileSnb = 14;
        if(url.includes('/mylec/online')) {
          this.mobileSnb2 = 1410;
          if(url.includes('/mylec/online/my')) {this.mobileSnb3 = 1411}
          else if(url.includes('/mylec/online/update')) {this.mobileSnb3 = 1412}
        } else if(url.includes('/mylec/direct')){
          this.mobileSnb2 = 1420;
          if(url.includes('/mylec/direct/my')) {this.mobileSnb3 = 1421}
          else if(url.includes('/mylec/direct/live')) {this.mobileSnb3 = 1422}
          else if(url.includes('/mylec/direct/addition')) {this.mobileSnb3 = 1423}
        } else if(url.includes('/mylec/study')) {
          this.mobileSnb2 = 1430;
          if(url.includes('/mylec/study/my')) {this.mobileSnb3 = 1431}
          else if (url.includes('/mylec/study/qna')) {this.mobileSnb3 = 1432}
        } else if (url.includes('/mkup/mylec/premium')) {
          this.mobileSnb2 = 1440;
          if (url.includes('/mkup/mylec/premium/ssampack')) {this.mobileSnb3 = 1441}
          else if (url.includes('/mkup/mylec/premium/counsel')) {this.mobileSnb3 = 1442}
        } else if (url.includes('/mylec/mock')){
          this.mobileSnb2 = 1450;
          if (url.includes('/mylec/mock/stare')) {this.mobileSnb3 = 1451}
          else if (url.includes('/mylec/mock/explain')) {this.mobileSnb3 = 1452}
        }
      }
      //
      else this.mobileSnb = 0;
    },
  },
  watch: {
    $route(to, from) {
      this.mobileSnbChange(to.path);
    }
  },
  mounted() {
    this.mobileSnbChange(window.location.pathname);
  }
};
</script>
