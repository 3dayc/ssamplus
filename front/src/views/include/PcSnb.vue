<template>
  <div id="pcSnb">
    <!-- 마이페이지 -->
    <div class="toggleSnb snb01" :class="{on:snb01}" v-if="snb01 == true">
      <button class="btnSnbOpen" @click="active1 = !active1"><em>OPEN</em></button>
      <div class="triggerArea" :class="{on:active1===true}">
        <button class="btnSnbClose" @click="active1 = !active1">CLOSE</button>
        <strong class="pcMtit">마이페이지</strong>
        <ul>
          <li class="depth1" :class="{on:myPageMenuTrigger == 0}">
            <router-link to="/mkup/mypage/payment/history">결제</router-link>
            <ol>
              <li :class="{on:myPageSubTrigger == 0}"><router-link to="/mkup/mypage/payment/history">결제내역</router-link></li>
              <li :class="{on:myPageSubTrigger == 1}"><router-link to="/mkup/mypage/payment/delivery">주문배송</router-link></li>
              <li :class="{on:myPageSubTrigger == 2}"><router-link to="/mkup/mypage/payment/basket">장바구니</router-link></li>
              <li :class="{on:myPageSubTrigger == 3}"><router-link to="/mkup/mypage/payment/locker">사물함 신청</router-link></li>
              <li :class="{on:myPageSubTrigger == 4}"><router-link to="/mkup/mypage/payment/coupon">쿠폰</router-link></li>
            </ol>
          </li>
          <li class="depth1" :class="{on:myPageMenuTrigger == 1}">
            <router-link to="/mkup/mypage/counsel/bbs">상담</router-link>
            <ol>
              <li :class="{on:myPageSubTrigger == 5}"><router-link to="/mkup/mypage/counsel/bbs">1:1 게시판 상담</router-link></li>
              <li :class="{on:myPageSubTrigger == 6}"><router-link to="/mkup/mypage/counsel/reserve">1:1 상담 예약</router-link></li>
            </ol>
          </li>
          <li :class="{on:myPageMenuTrigger == 2}">
            <router-link to="/mkup/mypage/myreview">후기작성</router-link>
          </li>
          <li class="depth1" :class="{on:myPageMenuTrigger == 3}">
            <router-link to="/mkup/mypage/myinfo/pw">회원정보</router-link>
            <ol>
              <li :class="{on:myPageSubTrigger == 7}"><router-link to="/mkup/mypage/myinfo/pw">내 정보 확인/수정</router-link></li>
              <li :class="{on:myPageSubTrigger == 8}"><router-link to="/mkup/mypage/myinfo/mode">전공모드 관리</router-link></li>
              <li :class="{on:myPageSubTrigger == 9}"><router-link to="/mkup/mypage/myinfo/address">배송지 정보</router-link></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <!-- //마이페이지 -->
    <!-- 내 강의실 -->
    <div class="toggleSnb snb02" :class="{on:snb02}" v-if="snb02 == true">
      <button class="btnSnbOpen" @click="active2 = !active2"><em>OPEN</em></button>
      <div class="triggerArea" :class="{on:active2===true}">
        <button class="btnSnbClose" @click="active2 = !active2">CLOSE</button>
        <strong class="pcMtit">내 강의실</strong>
        <ul class="classKind">
          <li class="depth1" :class="{on:myLecMenuTrigger == 0}">
            <router-link to="/mkup/mylec/online/my">온라인 수강생</router-link>
            <ol>
              <li :class="{on:myLecSubTrigger == 0}"><router-link to="/mkup/mylec/online/my">온라인 강좌 관리</router-link></li>
              <li :class="{on:myLecSubTrigger == 1}"><router-link to="/mkup/mylec/online/update">업데이트 일정</router-link></li>
            </ol>
          </li>
          <li class="depth1" :class="{on:myLecMenuTrigger == 1}">
            <router-link to="/mkup/mylec/direct/my">학원 수강생</router-link>
            <ol>
              <li :class="{on:myLecSubTrigger == 2}"><router-link to="/mkup/mylec/direct/my">학원 강좌 관리</router-link></li>
              <li :class="{on:myLecSubTrigger == 3}"><router-link to="/mkup/mylec/direct/live">라이브 강좌 관리</router-link></li>
              <li :class="{on:myLecSubTrigger == 4}"><router-link to="/mkup/mylec/direct/addition">보충 강의실</router-link></li>
            </ol>
          </li>
          <li class="depth1" :class="{on:myLecMenuTrigger == 2}">
            <router-link to="/mkup/mylec/study/my">학습관리 ZONE</router-link>
            <ol>
              <li :class="{on:myLecSubTrigger == 5}"><router-link to="/mkup/mylec/study/my">나의 학습현황</router-link></li>
              <li :class="{on:myLecSubTrigger == 6}"><router-link to="/mkup/mylec/study/qna">학습 Q&amp;A</router-link></li>
            </ol>
          </li>
          <li class="depth1" :class="{on:myLecMenuTrigger == 3}">
            <router-link to="/mkup/mylec/premium/ssampack">프리미엄 ZONE</router-link>
            <ol>
              <li :class="{on:myLecSubTrigger == 7}"><router-link to="/mkup/mylec/premium/ssampack">프리미엄 쌤팩</router-link></li>
              <li :class="{on:myLecSubTrigger == 8}"><router-link to="/mkup/mylec/premium/counsel">프리미엄 회원상담</router-link></li>
            </ol>
          </li>
          <li class="depth1" :class="{on:myLecMenuTrigger == 4}">
            <router-link to="/mkup/mylec/mock/stare">모의고사 ZONE</router-link>
            <ol>
              <li :class="{on:myLecSubTrigger == 9}"><router-link to="/mkup/mylec/mock/stare">응시 모의고사 관리</router-link></li>
              <li :class="{on:myLecSubTrigger == 10}"><router-link to="/mkup/mylec/mock/explain">모의고사 성적/해설</router-link></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <!-- //내 강의실 -->
    <!-- 상담센터 -->
    <div class="toggleSnb snb03" :class="{on:snb03}" v-if="snb03 == true">
      <button class="btnSnbOpen" @click="active3 = !active3"><em>OPEN</em></button>
      <div class="triggerArea" :class="{on:active3===true}">
        <button class="btnSnbClose" @click="active3 = !active3">CLOSE</button>
        <router-link to="/mkup/counsel/index" class="pcMtit" style="font-weight: 600">상담센터</router-link>
        <ul>
          <li :class="{on:counselMenuTrigger == 0}">
            <router-link to="/mkup/counsel/faq">자주 하는 질문</router-link>
          </li>
          <li :class="{on:counselMenuTrigger == 1}">
            <router-link to="/mkup/counsel/guide">사이트이용가이드</router-link>
          </li>
          <li :class="{on:counselMenuTrigger == 2}">
            <router-link to="/mkup/counsel/bbswrite">1:1 게시판 상담</router-link>
          </li>
          <li :class="{on:counselMenuTrigger == 3}">
            <router-link to="/mkup/counsel/reserve">1:1 상담 예약</router-link>
          </li>
          <li class="depth1" :class="{on:counselMenuTrigger == 4}">
            <router-link to="/mkup/counsel/clean/idshare">쌤Plus 클린존</router-link>
            <ol>
              <li :class="{on:counselSnbTrigger == 2}"><router-link to="/mkup/counsel/clean/idshare">ID 공유금지 안내</router-link></li>
              <li :class="{on:counselSnbTrigger == 3}"><router-link to="/mkup/counsel/clean/report">불법공유 신고</router-link></li>
              <li :class="{on:counselSnbTrigger == 4}"><router-link to="/mkup/counsel/clean/illegal">불법공유자 명단</router-link></li>
            </ol>
          </li>
          <li :class="{on:counselMenuTrigger == 5}"><router-link to="/mkup/counsel/programInstall">필수 프로그램 설치</router-link></li>
          <li :class="{on:counselMenuTrigger == 6}"><router-link to="/mkup/counsel/remote">원격고객 지원</router-link></li>
          <li :class="{on:counselMenuTrigger == 7}"><router-link to="/mkup/counsel/center">상담센터 공지</router-link></li>
          <li :class="{on:counselMenuTrigger == 8}"><router-link to="/mkup/counsel/direct">학원위치 안내</router-link></li>
        </ul>
      </div>
    </div>
    <!-- //상담센터 -->
    <!-- 수강신청 -->
    <div class="snb04" :class="{on:snb04}" v-if="snb04 == true">
      <strong class="pcMtit">수강신청</strong>
      <ul class="classKind">
        <li class="depth1" :class="{on:lecMenuTrigger == 1}">
          <router-link to="/mkup/lecture/index/mjedu">교육학</router-link>
          <ol>
            <li><router-link to="/mkup/lecture/teachermjedu01">김현</router-link></li>
            <li><router-link to="/mkup/lecture/teachermjedu02">권구현</router-link></li>
            <li><router-link to="/mkup/lecture/teachermjedu03">윤중샘</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 2}">
          <router-link to="/mkup/lecture/index/mjchild">유아</router-link>
          <ol>
            <li><router-link to="/mkup/lecture/teachermjchild01">배지윤</router-link></li>
            <li><router-link to="/mkup/lecture/teachermjchild02">이동건</router-link></li>
            <li><router-link to="/mkup/lecture/teachermjchild03">양재웅</router-link></li>
          </ol>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 3}">
          <router-link to="/mkup/lecture/index/mjmiddle">중등</router-link>
          <ul>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 301}">
              <router-link to="/mkup/lecture/index/mjmiddle01">국어</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle011">송헌/김준팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle012">송헌</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle013">김준</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle014">박노송</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 302}">
              <router-link to="/mkup/lecture/index/mjmiddle02">영어</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle021">차류쉘팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle022">차미아</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle023">류지원</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle024">미쉘김</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 303}">
              <router-link to="/mkup/lecture/index/mjmiddle03">수학</router-link>
              <ol>
                <li class="long"><router-link to="/mkup/lecture/teachermjmiddle031">이정훈/안후상팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle032">이정훈</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle033">안후상</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle034">김지혜</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 304}">
              <router-link to="/mkup/lecture/index/mjmiddle04">음악</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle041">서정팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle042">서민정</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle043">정희원</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle044">박서형</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 305}">
              <router-link to="/mkup/lecture/index/mjmiddle05">미술</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle051">위상팀</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 306}">
              <router-link to="/mkup/lecture/index/mjmiddle06">체육</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle061">오정환</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle062">김용호</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle063">임서윤</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 307}">
              <router-link to="/mkup/lecture/index/mjmiddle07">중국어</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle071">희소중국어팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle072">한정은</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjmiddle073">이해진</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 308}">
              <router-link to="/mkup/lecture/index/mjmiddle08">일본어</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle081">동소현</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 309}">
              <router-link to="/mkup/lecture/index/mjmiddle09">한문</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle091">원주용</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 310}">
              <router-link to="/mkup/lecture/index/mjmiddle10">가정</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle101">문영은</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 311}">
              <router-link to="/mkup/lecture/index/mjmiddle11">도덕윤리</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle111">김성무</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 312}">
              <router-link to="/mkup/lecture/index/mjmiddle12">미용</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjmiddle121">이영미</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 4}">
          <router-link to="/mkup/lecture/index/mjss">사회/과학</router-link>
          <ul>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 401}">
              <router-link to="/mkup/lecture/index/mjss01">역사</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjss011">이순권</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjss012">반철진</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 402}">
              <router-link to="/mkup/lecture/index/mjss02">지리</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjss021">한무일</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 403}">
              <router-link to="/mkup/lecture/index/mjss03">물리</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjss031">최민영</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 404}">
              <router-link to="/mkup/lecture/index/mjss04">화학</router-link>
              <ol>
                <li class="long"><router-link to="/mkup/lecture/teachermjss041">안병천/권혁팀</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjss042">안병천</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjss043">권혁</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 405}">
              <router-link to="/mkup/lecture/index/mjss05">생물</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjss051">엄은미</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecSubMenuTrigger == 406}">
              <router-link to="/mkup/lecture/index/mjss06">과학교육론</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjss061">이진영</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 5}">
          <router-link to="/mkup/lecture/index/mjnomj">비교과</router-link>
          <ul>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <router-link to="/mkup/lecture/index/mjnomj">전문상담</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjnomj02">이진영</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <router-link to="/mkup/lecture/index/mjnomj">보건</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjnomj01">임수진</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 6}">
          <router-link to="/mkup/lecture/index/mjspe">특수</router-link>
          <ul>
            <li class="depth3">
              <em>유아특수</em>
            </li>
            <li class="depth3">
              <em>초등특수</em>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 6}">
              <router-link to="/mkup/lecture/index/mjspe">중등특수</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjspe01">한경</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjspe02">박해인</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:lecMenuTrigger == 7}">
          <router-link to="/mkup/lecture/index/mjessay">논술 · 면접</router-link>
          <ul>
            <li class="depth3" :class="{on:lecMenuTrigger == 7}">
              <router-link to="/mkup/lecture/index/mjessay">면접</router-link>
              <ol>
                <li><router-link to="/mkup/lecture/teachermjessay01">양재웅</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjessay02">권구현</router-link></li>
                <li><router-link to="/mkup/lecture/teachermjessay03">윤중샘</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 8}">
          <router-link to="/mkup/lecture/index/mjhistory">한국사</router-link>
          <ol>
            <li><router-link to="/mkup/lecture/teachermhistory01">정재학</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 9}">
          <router-link to="/mkup/lecture/index/mjlibr">사서직(공무원)</router-link>
          <ol>
            <li><router-link to="/mkup/lecture/teachermjlibr01">신인수</router-link></li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- //수강신청 -->
    <!-- 쌤 Mall - 교재도서 -->
    <div class="snb05" :class="{on:snb05}" v-if="snb05 == true">
      <strong class="pcMtit">교재도서</strong>
      <ul class="classKind">
        <li class="depth1" :class="{on:bookMenuTrigger == 1}">
          <span>교육학</span>
          <ol>
            <li><router-link to="/mkup/ssammall/book/teacher1" :class="{on:bookSubMenuTrigger == 111}">김현</router-link></li>
            <li><router-link to="">권구현</router-link></li>
            <li><router-link to="">윤중샘</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:bookMenuTrigger == 2}">
          <span>유아</span>
          <ol>
            <li><router-link to="/mkup/ssammall/book/teacher2" :class="{on:bookSubMenuTrigger == 211}">배지윤</router-link></li>
            <li><router-link to="">이동건</router-link></li>
            <li><router-link to="">양재웅</router-link></li>
          </ol>
        </li>
        <li class="depth2" :class="{on:bookMenuTrigger == 3}">
          <span>중등</span>
          <ul>
            <li class="depth3" :class="{on:bookSubMenuTrigger == 31}">
              <em>국어</em>
              <ol>
                <li><router-link to="/mkup/ssammall/book/teacher3" :class="{on:bookSubMenu2Trigger == 311}">송헌/김준팀</router-link></li>
                <li><router-link to="">송헌</router-link></li>
                <li><router-link to="">김준</router-link></li>
                <li><router-link to="">박노송</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>영어</em>
              <ol>
                <li><router-link to="">차류쉘팀</router-link></li>
                <li><router-link to="">차미아</router-link></li>
                <li><router-link to="">류지원</router-link></li>
                <li><router-link to="">미쉘김</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>수학</em>
              <ol>
                <li class="long"><router-link to="">이정훈/안후상팀</router-link></li>
                <li><router-link to="">이정훈</router-link></li>
                <li><router-link to="">안후상</router-link></li>
                <li><router-link to="">김지혜</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>음악</em>
              <ol>
                <li><router-link to="">서정팀</router-link></li>
                <li><router-link to="">서민정</router-link></li>
                <li><router-link to="">정희원</router-link></li>
                <li><router-link to="">박서형</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>미술</em>
              <ol>
                <li><router-link to="">위상팀</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>체육</em>
              <ol>
                <li><router-link to="">오정환</router-link></li>
                <li><router-link to="">김용호</router-link></li>
                <li><router-link to="">임서윤</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>중국어</em>
              <ol>
                <li><router-link to="">희소중국어팀</router-link></li>
                <li><router-link to="">한정은</router-link></li>
                <li><router-link to="">이해진</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>일본어</em>
              <ol>
                <li><router-link to="">동소현</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>한문</em>
              <ol>
                <li><router-link to="">원주용</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>가정</em>
              <ol>
                <li><router-link to="">문영은</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>도덕윤리</em>
              <ol>
                <li><router-link to="">김성무</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>미용</em>
              <ol>
                <li><router-link to="">이영미</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:bookMenuTrigger == 4}">
          <span>사회/과학</span>
          <ul>
            <li class="depth3">
              <em>역사</em>
              <ol>
                <li><router-link to="">이순권</router-link></li>
                <li><router-link to="">반철진</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>지리</em>
              <ol>
                <li><router-link to="">한무일</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>물리</em>
              <ol>
                <li><router-link to="">최민영</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>화학</em>
              <ol>
                <li class="long"><router-link to="">안병천/권혁팀</router-link></li>
                <li><router-link to="">안병천</router-link></li>
                <li><router-link to="">권혁</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>생물</em>
              <ol>
                <li><router-link to="">엄은미</router-link></li>
              </ol>
            </li>
            <li class="depth3">
              <em>과학교육론</em>
              <ol>
                <li><router-link to="">이진영</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:bookMenuTrigger == 5}">
          <span>비교과</span>
          <ul>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <em>전문상담</em>
              <ol>
                <li><router-link to="">이진영</router-link></li>
              </ol>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 5}">
              <em>보건</em>
              <ol>
                <li><router-link to="">임수진</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:bookMenuTrigger == 6}">
          <span>특수</span>
          <ul>
            <li class="depth3">
              <em>유아특수</em>
            </li>
            <li class="depth3">
              <em>초등특수</em>
            </li>
            <li class="depth3" :class="{on:lecMenuTrigger == 6}">
              <em>중등특수</em>
              <ol>
                <li><router-link to="">한경</router-link></li>
                <li><router-link to="">박해인</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth2" :class="{on:bookMenuTrigger == 7}">
          <span>논술 · 면접</span>
          <ul>
            <li class="depth3" :class="{on:bookMenuTrigger == 7}">
              <em>면접</em>
              <ol>
                <li><router-link to="">양재웅</router-link></li>
                <li><router-link to="">권구현</router-link></li>
                <li><router-link to="">윤중샘</router-link></li>
              </ol>
            </li>
          </ul>
        </li>
        <li class="depth1" :class="{on:lecMenuTrigger == 8}">
          <span>한국사</span>
          <ol>
            <li><router-link to="">정재학</router-link></li>
          </ol>
        </li>
        <li class="depth1" :class="{on:bookMenuTrigger == 9}">
          <span>사서직(공무원)</span>
          <ol>
            <li><router-link to="">신인수</router-link></li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- //쌤 Mall - 교재도서 -->
    <!-- 쌤 Mall - 학습기기 -->
    <div class="snb06" :class="{on:snb06}" v-if="snb06 == true">
      <strong class="pcMtit">학습기기</strong>
      <ul>
        <li :class="{on:mallTrigger == 0}">
          <router-link to="/mkup/ssammall/device/notebook">노트북</router-link>
        </li>
        <li :class="{on:mallTrigger == 1}">
          <router-link to="/mkup/ssammall/device/tablet">태블릿</router-link>
        </li>
        <li :class="{on:mallTrigger == 2}">
          <router-link to="/mkup/ssammall/device/phone">스마트폰</router-link>
        </li>
        <li :class="{on:mallTrigger == 3}">
          <router-link to="/mkup/ssammall/device/etc">기타</router-link>
        </li>
      </ul>
    </div>
    <!-- //쌤 Mall - 학습기기 -->
    <!-- 쌤 Mall - 굿즈 -->
    <div class="snb10" :class="{on:snb10}" v-if="snb10 == true">
      <strong class="pcMtit">굿즈</strong>
      <ul>
        <li :class="{on:mallTrigger == 7}">
          <router-link to="/mkup/ssammall/goods/fabric">패브릭</router-link>
        </li>
        <li :class="{on:mallTrigger == 8}">
          <router-link to="/mkup/ssammall/goods/stationery">문구</router-link>
        </li>
        <li :class="{on:mallTrigger == 9}">
          <router-link to="/mkup/ssammall/goods/etc">기타</router-link>
        </li>
      </ul>
    </div>
    <!-- //쌤 Mall - 굿즈 -->
    <!-- 쌤 Mall - 백퍼후기 -->
    <div class="snb07" :class="{on:snb07}" v-if="snb07 == true">
      <strong class="pcMtit">백퍼후기</strong>
      <ul>
        <li :class="{on:mallTrigger == 4}">
          <router-link to="/mkup/ssammall/review/book">교재도서</router-link>
        </li>
        <li :class="{on:mallTrigger == 5}">
          <router-link to="/mkup/ssammall/review/device">학습기기</router-link>
        </li>
        <li :class="{on:mallTrigger == 6}">
          <router-link to="/mkup/ssammall/review/goods">굿즈</router-link>
        </li>
      </ul>
    </div>
    <!-- //쌤 Mall - 백퍼후기 -->
    <!-- 시험정보 - 시험정보 -->
    <div class="snb08" :class="{on:snb08}" v-if="snb08 == true">
      <strong class="pcMtit">시험정보</strong>
      <ul>
        <li :class="{on:examTrigger == 0}">
          <router-link to="/mkup/exam/info/guide">임용시험 안내</router-link>
        </li>
        <li :class="{on:examTrigger == 1}">
          <router-link to="/mkup/exam/info/competition">모집인원 및 경쟁률</router-link>
        </li>
        <li :class="{on:examTrigger == 2}">
          <router-link to="/mkup/exam/info/notify">시험공고</router-link>
        </li>
        <li :class="{on:examTrigger == 3}">
          <router-link to="/mkup/exam/info/news">교육계 소식</router-link>
        </li>
      </ul>
    </div>
    <!-- //시험정보 - 시험정보 -->
    <!-- 시험정보 - 임용 자료실 -->
    <div class="snb09" :class="{on:snb09}" v-if="snb09 == true">
      <strong class="pcMtit">임용 자료실</strong>
      <ul>
        <li :class="{on:examTrigger == 4}">
          <router-link to="/mkup/exam/reference/previous">기출문제</router-link>
        </li>
        <li :class="{on:examTrigger == 5}">
          <router-link to="/mkup/exam/reference/edu">교육과정 자료실</router-link>
        </li>
        <li :class="{on:examTrigger == 6}">
          <router-link to="/mkup/exam/reference/taker">수험 자료실</router-link>
        </li>
      </ul>
    </div>
    <!-- //시험정보 - 임용 자료실 -->
  </div>
</template>

<script>
export default {
  name: 'PcSnb',
  data() {
    return {
      snb01: false,
      snb02: false,
      snb03: false,
      snb04: false,
      snb05: false,
      snb06: false,
      snb07: false,
      snb08: false,
      snb09: false,
      snb10: false,
      active1: true,
      active2: true,
      active3: true,
      myPageMenuTrigger:null,
      myPageSubTrigger:null,
      myLecMenuTrigger:null,
      myLecSubTrigger:null,
      counselMenuTrigger:null,
      counselSnbTrigger:null,
      bookMenuTrigger:0,
      bookSubMenuTrigger:null,
      lecMenuTrigger:0,
      lecSubMenuTrigger:null,
      examTrigger:null,
      mallTrigger:null,
      bookSubMenu2Trigger:null
    }
  },
  computed: {
  },
  methods: {
    snbChange(url) {
      this.snb01 = false;
      this.snb02 = false;
      this.snb03 = false;
      this.snb04 = false;
      this.snb05 = false;
      this.snb06 = false;
      this.snb07 = false;
      this.snb08 = false;
      this.snb09 = false;
      this.snb10 = false;

      if (url.includes('/mypage/')) this.snb01 = true;
      else if(url.includes('/mylec/')) this.snb02 = true;
      else if(url.includes('/counsel')) this.snb03 = true;
      else if(url.includes('/lecture')) this.snb04 = true;
      else if(url.includes('/ssammall/book')) this.snb05 = true;
      else if(url.includes('/ssammall/device')) this.snb06 = true;
      else if(url.includes('/ssammall/review/')) this.snb07 = true;
      else if(url.includes('/ssammall/goods')) this.snb10 = true;
      else if(url.includes('/exam/info/')) this.snb08 = true;
      else if(url.includes('/exam/reference/')) this.snb09 = true;
    },
    snbSubChange(url) {
      this.myPageMenuTrigger = null;
      if (url.includes('/mkup/mypage/payment')) this.myPageMenuTrigger = 0;
      else if (url.includes('/mkup/mypage/counsel')) this.myPageMenuTrigger = 1;
      else if (url.includes('/mkup/mypage/myreview')) this.myPageMenuTrigger = 2;
      else if (url.includes('/mkup/mypage/myinfo')) this.myPageMenuTrigger = 3;
      this.myPageSubTrigger = null;
      if (url.includes('/mkup/mypage/payment/history')) this.myPageSubTrigger = 0;
      else if (url.includes('/mkup/mypage/payment/delivery')) this.myPageSubTrigger = 1;
      else if (url.includes('/mkup/mypage/payment/basket')) this.myPageSubTrigger = 2;
      else if (url.includes('/mkup/mypage/payment/order')) this.myPageSubTrigger = 2;
      else if (url.includes('/mkup/mypage/payment/finish')) this.myPageSubTrigger = 2;
      else if (url.includes('/mkup/mypage/payment/locker')) this.myPageSubTrigger = 3;
      else if (url.includes('/mkup/mypage/payment/coupon')) this.myPageSubTrigger = 4;
      else if (url.includes('/mkup/mypage/counsel/bbs')) this.myPageSubTrigger = 5;
      else if (url.includes('/mkup/mypage/counsel/reserve')) this.myPageSubTrigger = 6;
      else if (url.includes('/mkup/mypage/myinfo/pw')) this.myPageSubTrigger = 7;
      else if (url.includes('/mkup/mypage/myinfo/modify')) this.myPageSubTrigger = 7;
      else if (url.includes('/mkup/mypage/myinfo/mode')) this.myPageSubTrigger = 8;
      else if (url.includes('/mkup/mypage/myinfo/address')) this.myPageSubTrigger = 9;
      //
      this.myLecMenuTrigger = null;
      if (url.includes('/mkup/mylec/online')) this.myLecMenuTrigger = 0;
      else if (url.includes('/mkup/mylec/direct')) this.myLecMenuTrigger = 1;
      else if (url.includes('/mkup/mylec/study')) this.myLecMenuTrigger = 2;
      else if (url.includes('/mkup/mylec/premium')) this.myLecMenuTrigger = 3;
      else if (url.includes('/mkup/mylec/mock')) this.myLecMenuTrigger = 4;
      this.myLecSubTrigger = null;
      if (url.includes('/mkup/mylec/online/my')) this.myLecSubTrigger = 0;
      else if (url.includes('/mkup/mylec/online/update')) this.myLecSubTrigger = 1;
      else if (url.includes('/mkup/mylec/direct/my')) this.myLecSubTrigger = 2;
      else if (url.includes('/mkup/mylec/direct/live')) this.myLecSubTrigger = 3;
      else if (url.includes('/mkup/mylec/direct/addition')) this.myLecSubTrigger = 4;
      else if (url.includes('/mkup/mylec/study/my')) this.myLecSubTrigger = 5;
      else if (url.includes('/mkup/mylec/study/qna')) this.myLecSubTrigger = 6;
      else if (url.includes('/mkup/mylec/premium/ssampack')) this.myLecSubTrigger = 7;
      else if (url.includes('/mkup/mylec/premium/counsel')) this.myLecSubTrigger = 8;
      else if (url.includes('/mkup/mylec/mock/stare')) this.myLecSubTrigger = 9;
      else if (url.includes('/mkup/mylec/mock/expain')) this.myLecSubTrigger = 10;
      //
      this.lecMenuTrigger = null;
      this.lecSubMenuTrigger = null;
      if (url.includes('/mkup/lecture/index/mjedu')) this.lecMenuTrigger = 1;
      else if (url.includes('/mkup/lecture/index/mjchild')) this.lecMenuTrigger = 2;
      else if (url.includes('/mkup/lecture/index/mjmiddle')) {
        this.lecMenuTrigger = 3;
        if (url.includes('/mkup/lecture/index/mjmiddle01')) this.lecSubMenuTrigger = 301;
        else if (url.includes('/mkup/lecture/index/mjmiddle02')) this.lecSubMenuTrigger = 302;
        else if (url.includes('/mkup/lecture/index/mjmiddle03')) this.lecSubMenuTrigger = 303;
        else if (url.includes('/mkup/lecture/index/mjmiddle04')) this.lecSubMenuTrigger = 304;
        else if (url.includes('/mkup/lecture/index/mjmiddle05')) this.lecSubMenuTrigger = 305;
        else if (url.includes('/mkup/lecture/index/mjmiddle06')) this.lecSubMenuTrigger = 306;
        else if (url.includes('/mkup/lecture/index/mjmiddle07')) this.lecSubMenuTrigger = 307;
        else if (url.includes('/mkup/lecture/index/mjmiddle08')) this.lecSubMenuTrigger = 308;
        else if (url.includes('/mkup/lecture/index/mjmiddle09')) this.lecSubMenuTrigger = 309;
        else if (url.includes('/mkup/lecture/index/mjmiddle10')) this.lecSubMenuTrigger = 310;
        else if (url.includes('/mkup/lecture/index/mjmiddle11')) this.lecSubMenuTrigger = 311;
        else if (url.includes('/mkup/lecture/index/mjmiddle12')) this.lecSubMenuTrigger = 312;
      }
      else if (url.includes('/mkup/lecture/index/mjss')) {
        this.lecMenuTrigger = 4;
        if (url.includes('/mkup/lecture/index/mjss01')) this.lecSubMenuTrigger = 401;
        else if (url.includes('/mkup/lecture/index/mjss02')) this.lecSubMenuTrigger = 402;
        else if (url.includes('/mkup/lecture/index/mjss03')) this.lecSubMenuTrigger = 403;
        else if (url.includes('/mkup/lecture/index/mjss04')) this.lecSubMenuTrigger = 404;
        else if (url.includes('/mkup/lecture/index/mjss05')) this.lecSubMenuTrigger = 405;
        else if (url.includes('/mkup/lecture/index/mjss06')) this.lecSubMenuTrigger = 406;
      }
      else if (url.includes('/mkup/lecture/index/mjnomj')) this.lecMenuTrigger = 5;
      else if (url.includes('/mkup/lecture/index/mjspe')) this.lecMenuTrigger = 6;
      else if (url.includes('/mkup/lecture/index/mjessay')) this.lecMenuTrigger = 7;
      else if (url.includes('/mkup/lecture/index/mjhistory')) this.lecMenuTrigger = 8;
      else if (url.includes('/mkup/lecture/index/mjlibr')) this.lecMenuTrigger = 9;
      //
      this.counselMenuTrigger = null;
      if (url.includes('/mkup/counsel/faq')) this.counselMenuTrigger = 0;
      else if (url.includes('/mkup/counsel/guide')) this.counselMenuTrigger = 1;
      else if (url.includes('/mkup/counsel/bbswrite')) this.counselMenuTrigger = 2;
      else if (url.includes('/mkup/counsel/reserve')) this.counselMenuTrigger = 3;
      else if (url.includes('/mkup/counsel/clean')) this.counselMenuTrigger = 4;
      else if (url.includes('/mkup/counsel/programInstall')) this.counselMenuTrigger = 5;
      else if (url.includes('/mkup/counsel/remote')) this.counselMenuTrigger = 6;
      else if (url.includes('/mkup/counsel/center')) this.counselMenuTrigger = 7;
      else if (url.includes('/mkup/counsel/direct')) this.counselMenuTrigger = 8;
      this.counselSnbTrigger = null;
      if (url.includes('/mkup/counsel/guide')) this.counselSnbTrigger = 0;
      else if (url.includes('/mkup/counsel/reserve')) this.counselSnbTrigger = 1;
      else if (url.includes('/mkup/counsel/clean/idshare')) this.counselSnbTrigger = 2;
      else if (url.includes('/mkup/counsel/clean/report')) this.counselSnbTrigger = 3;
      else if (url.includes('/mkup/counsel/clean/illegal')) this.counselSnbTrigger = 4;
      //
      this.bookMenuTrigger = null;
      this.bookSubMenuTrigger = null;
      this.bookSubMenu2Trigger = null;
      if (url.includes('/mkup/ssammall/book/teacher1')) {
        this.bookMenuTrigger = 1;
        this.bookSubMenuTrigger = 111;
      }
      else if (url.includes('/mkup/ssammall/book/view')) {
        this.bookMenuTrigger = 1;
        this.bookSubMenuTrigger = 111;
      }
      else if (url.includes('/mkup/ssammall/book/teacher2')) {
        this.bookMenuTrigger = 2;
        this.bookSubMenuTrigger = 211;
      }
      else if (url.includes('/mkup/ssammall/book/teacher3')) {
        this.bookMenuTrigger = 3;
        this.bookSubMenuTrigger = 31;
        this.bookSubMenu2Trigger = 311;
      }
      //
      this.mallTrigger = null;
      if (url.includes('/mkup/ssammall/device/notebook')) this.mallTrigger = 0;
      else if (url.includes('/mkup/ssammall/device/view')) this.mallTrigger = 0;
      else if (url.includes('/mkup/ssammall/device/tablet')) this.mallTrigger = 1;
      else if (url.includes('/mkup/ssammall/device/phone')) this.mallTrigger = 2;
      else if (url.includes('/mkup/ssammall/device/etc')) this.mallTrigger = 3;
      else if (url.includes('/mkup/ssammall/goods/fabric')) this.mallTrigger = 7;
      else if (url.includes('/mkup/ssammall/goods/view')) this.mallTrigger = 7;
      else if (url.includes('/mkup/ssammall/goods/stationery')) this.mallTrigger = 8;
      else if (url.includes('/mkup/ssammall/goods/etc')) this.mallTrigger = 9;
      //else if (url.includes('/')) this.mallTrigger = 3;
      else if (url.includes('/mkup/ssammall/review/book')) this.mallTrigger = 4;
      else if (url.includes('/mkup/ssammall/review/device')) this.mallTrigger = 5;
      else if (url.includes('/mkup/ssammall/review/goods')) this.mallTrigger = 6;
      //
      this.examTrigger = 0;
      if (url.includes('/mkup/exam/info/guide')) this.examTrigger = 0;
      else if(url.includes('/mkup/exam/info/competition')) this.examTrigger = 1;
      else if(url.includes('/mkup/exam/info/notify')) this.examTrigger = 2;
      else if(url.includes('/mkup/exam/info/news')) this.examTrigger = 3;
      else if(url.includes('/mkup/exam/reference/previous')) this.examTrigger = 4;
      else if(url.includes('/mkup/exam/reference/edu')) this.examTrigger = 5;
      else if(url.includes('/mkup/exam/reference/taker')) this.examTrigger = 6;
    },
  },
  watch: {
    $route(to, from) {
      this.snbChange(to.path);
      this.snbSubChange(to.path);
    }
  },
  mounted() {
    this.snbChange(window.location.pathname);
    this.snbSubChange(window.location.pathname);
  }
};
</script>
