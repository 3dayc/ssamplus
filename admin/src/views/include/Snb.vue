<template>
  <!-- Sub Menu -->
  <div id="snb">
    <div class="back">
      <div class="sideNav">
        <!-- 통계 Snb -->
        <ul class="nav01" v-show="nav1">
          <li class="snv01" :class="{on:visitSite}">
            <span><router-link to="/mkup/statistics/visitSite">사이트 통계</router-link></span>
            <ol>
              <li :class="{on:visitSite}"><router-link to="/mkup/statistics/visitSite">방문 통계</router-link></li>
            </ol>
          </li>
          <li class="snv02" :class="{on:nav1Snb02}">
            <span><router-link to="/mkup/statistics/userSignup">회원 통계</router-link></span>
            <ol>
              <li :class="{on:userSignup}"><router-link to="/mkup/statistics/userSignup">가입/탈퇴 이력</router-link></li>
              <li :class="{on:userType}"><router-link to="/mkup/statistics/userType">회원유형 통계</router-link></li>
              <li :class="{on:userStatus}"><router-link to="/mkup/statistics/userStatus">재학생 현황</router-link></li>
            </ol>
          </li>
          <li class="snv03" :class="{on:nav1Snb03}">
            <span><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link></span>
            <ol>
              <li :class="{on:counselCall}"><router-link to="/mkup/statistics/counselCall">전화상담 통계</router-link></li>
              <li :class="{on:counselOne}"><router-link to="/mkup/statistics/counselOne">1:1 게시판상담 통계</router-link></li>
              <li :class="{on:counselOffline}"><router-link to="/mkup/statistics/counselOffline">오프라인 상담 통계</router-link></li>
            </ol>
          </li>
          <li class="snv04" :class="{on:nav1Snb04}">
            <span><router-link to="/mkup/statistics/indicatorAnnual">지표관리</router-link></span>
            <ol>
              <li :class="{on:indicatorAnnual}"><router-link to="/mkup/statistics/indicatorAnnual">연도별 현황 (강좌)</router-link></li>
              <li :class="{on:indicatorCourse}"><router-link to="/mkup/statistics/indicatorCourse">수강중인 인원 (강좌)</router-link></li>
              <li :class="{on:indicatorPayment}"><router-link to="/mkup/statistics/indicatorPayment">결제현황</router-link></li>
              <li :class="{on:indicatorSales}"><router-link to="/mkup/statistics/indicatorSales">매출현황</router-link></li>
              <li :class="{on:indicatorRefund}"><router-link to="/mkup/statistics/indicatorRefund">환불현황</router-link></li>
              <li :class="{on:indicatorRecourse}"><router-link to="/mkup/statistics/indicatorRecourse">재수강</router-link></li>
            </ol>
          </li>
          <li class="snv05" :class="{on:nav1Snb05}">
            <span><router-link to="/mkup/statistics/accountMgt">결산</router-link></span>
            <ol>
              <li :class="{on:accountMgt}"><router-link to="/mkup/statistics/accountMgt">결산</router-link></li>
              <li :class="{on:accountFee}"><router-link to="/mkup/statistics/accountFee">강사료 정산</router-link></li>
            </ol>
          </li>
        </ul>
        <!-- //통계 Snb -->
        <!-- 회원/선생님 Snb -->
        <ul class="nav02" v-show="nav2">
          <li class="snv01" :class="{on:nav2Snb01}">
            <span><router-link to="/mkup/member/userMgt">회원 관리</router-link></span>
            <ol>
              <li :class="{on:userMgt}"><router-link to="/mkup/member/userMgt">회원조회</router-link></li>
              <li :class="{on:userSupport}"><router-link to="/mkup/member/userSupport">보충강의 신청현황</router-link></li>
              <li :class="{on:userPremium}"><router-link to="/mkup/member/userPremium">프리미엄 회원 지원</router-link></li>
            </ol>
          </li>
          <li class="snv02" :class="{on:nav2Snb02}">
            <span><router-link to="/mkup/member/partnerAgency">대학제휴 회원</router-link></span>
            <ol>
              <li :class="{on:partnerAgency}"><router-link to="/mkup/member/partnerAgency">기관 관리</router-link></li>
              <li :class="{on:universityAgency}"><router-link to="/mkup/member/universityAgency">제휴 회원 관리</router-link></li>
              <!-- <li><router-link to="">통계</router-link></li> -->
            </ol>
          </li>
          <li class="snv03" :class="{on:nav2Snb03}">
            <span><router-link to="/mkup/member/logDuply">회원 로그</router-link></span>
            <ol>
              <li :class="{on:logDuply}"><router-link to="/mkup/member/logDuply">중복 재생 리스트</router-link></li>
              <li :class="{on:logShare}"><router-link to="/mkup/member/logShare">공유 의심 리스트</router-link></li>
            </ol>
          </li>
          <li class="snv04" :class="{on:nav2Snb04}">
            <span><router-link to="/mkup/member/teacher">선생님 관리</router-link></span>
            <ol>
              <li :class="{on:teacher}"><router-link to="/mkup/member/teacher">선생님 조회</router-link></li>
            </ol>
          </li>
        </ul>
        <!-- //회원/선생님 Snb -->
        <!-- 강좌/교재 Snb -->
        <ul class="nav03" v-show="nav3">
          <li class="snv01" :class="{on:nav3Snb01}">
            <span><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link></span>
            <ol>
              <li :class="{on:singleCourse}"><router-link to="/mkup/lecture/singleCourse">단과 강좌</router-link></li>
              <li :class="{on:liveCourse}"><router-link to="/mkup/lecture/liveCourse">라이브 채널 관리</router-link></li>
              <li :class="{on:packageCourse}"><router-link to="/mkup/lecture/packageCourse">패키지 강좌</router-link></li>
              <li :class="{on:customCourse}"><router-link to="/mkup/lecture/customCourse">사용자 정의강좌</router-link></li>
              <li :class="{on:freeCourse}"><router-link to="/mkup/lecture/freeCourse">무료 강의</router-link></li>
            </ol>
          </li>
          <li class="snv02" :class="{on:nav3Snb02}">
            <span><router-link to="/mkup/lecture/todayUpdate">오늘의 업데이트</router-link></span>
          </li>
          <li class="snv03" :class="{on:nav3Snb03}">
            <span><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link></span>
            <ol>
              <li :class="{on:bookMgt}"><router-link to="/mkup/lecture/bookMgt">교재 등록/현황</router-link></li>
              <li :class="{on:bookStockMgt}"><router-link to="/mkup/lecture/bookStockMgt">교재 입/출고 관리</router-link></li>
              <li :class="{on:bookShopping}"><router-link to="/mkup/lecture/bookShopping">교재 주문배송 관리</router-link></li>
              <li :class="{on:bookCustom}"><router-link to="/mkup/lecture/bookCustom">사용자 정의교재</router-link></li>
              <li :class="{on:bookClient}"><router-link to="/mkup/lecture/bookClient">거래처 관리</router-link></li>
            </ol>
          </li>
          <li class="snv04" :class="{on:nav3Snb04}">
            <span><router-link to="/mkup/lecture/deviceMgt">학습기기 관리</router-link></span>
            <ol>
              <li :class="{on:deviceMgt}"><router-link to="/mkup/lecture/deviceMgt">학습기기 등록/현황</router-link></li>
              <li :class="{on:deviceShopping}"><router-link to="/mkup/lecture/deviceShopping">학습기기 주문배송 관리</router-link></li>
            </ol>
          </li>
          <li class="snv05" :class="{on:nav3Snb05}">
            <span><router-link to="/mkup/lecture/merchMgt">굿즈 관리</router-link></span>
            <ol>
              <li :class="{on:merchMgt}"><router-link to="/mkup/lecture/merchMgt">굿즈 등록/현황</router-link></li>
              <li :class="{on:merchShopping}"><router-link to="/mkup/lecture/merchShopping">굿즈 주문배송 관리</router-link></li>
            </ol>
          </li>
        </ul>
        <!-- //강좌/교재 Snb -->
        <!-- 결제 Snb -->
        <ul class="nav04" v-show="nav4">
          <li class="snv01" :class="{on:paymentMgt}">
            <span><router-link to="/mkup/payment/paymentMgt">결제 관리</router-link></span>
            <ol>
              <li :class="{on:paymentMgt}"><router-link to="/mkup/payment/paymentMgt">결제내역</router-link></li>
            </ol>
          </li>
          <li class="snv02" :class="{on:refundMgt}">
            <span><router-link to="/mkup/payment/refundMgt">환불 관리</router-link></span>
            <ol>
              <li :class="{on:refundMgt}"><router-link to="/mkup/payment/refundMgt">환불내역</router-link></li>
            </ol>
          </li>
          <li class="snv03" :class="{on:dailyCash}">
            <span><router-link to="/mkup/payment/dailyCash">일별 현금결제</router-link></span>
          </li>
          <li class="snv04" :class="{on:dailyCard}">
            <span><router-link to="/mkup/payment/dailyCard">일별 카드결제</router-link></span>
          </li>
          <li class="snv05" :class="{on:interestFree}">
            <span><router-link to="/mkup/payment/interestFree">설정</router-link></span>
            <ol>
              <li :class="{on:interestFree}"><router-link to="/mkup/payment/interestFree">무이자 할부</router-link></li>
            </ol>
          </li>
          <li class="snv06" :class="{on:nav4Snb06}">
            <span><router-link to="/mkup/payment/couponMgt">쿠폰 관리</router-link></span>
            <ol>
              <li :class="{on:couponMgt}"><router-link to="/mkup/payment/couponMgt">쿠폰 등록/발급</router-link></li>
              <li :class="{on:couponSales}"><router-link to="/mkup/payment/couponSales">쿠폰 매출 현황</router-link></li>
            </ol>
          </li>
        </ul>
        <!-- //결제 Snb -->
        <!-- 모의고사 관리 Snb -->
        <ul class="nav05" v-show="nav5">
          <li class="snv01" :class="{on:nav5Snb01}">
						<span><router-link to="/mkup/mocktest/multiTest">희소 모의고사 관리</router-link></span>
					</li>
          <li class="snv02" :class="{on:nav5Snb02}">
						<span><router-link to="/mkup/mocktest/monthTest">월별 모의고사 관리</router-link></span>
					</li>
          <li class="snv03" :class="{on:nav5Snb03}">
						<span><router-link to="/mkup/mocktest/paperMgt">과목별 시험지 관리</router-link></span>
					</li>
          <li class="snv04" :class="{on:nav5Snb04}">
						<span><router-link to="/mkup/mocktest/formatMgt">모의고사 포맷 관리</router-link></span>
					</li>
        </ul>
        <!-- //모의고사 관리 Snb -->
        <!-- 게시판 관리 Snb -->
        <ul class="nav06" v-show="nav6">
          <li class="snv01" :class="{on:nav6Snb01}">
						<span><router-link to="/mkup/bbs/replyReview">답변게시판</router-link></span>
            <ol>
              <li :class="{on:replyReview}"><router-link to="/mkup/bbs/replyReview">백퍼후기</router-link></li>
            	<li :class="{on:replyQna}"><router-link to="/mkup/bbs/replyQna">학습Q&amp;A</router-link></li>
            	<li :class="{on:replyBoard}"><router-link to="/mkup/bbs/replyBoard">1:1 게시판상담</router-link></li>
            	<li :class="{on:replyCounsel}"><router-link to="/mkup/bbs/replyCounsel">1:1 상담</router-link></li>
            	<li :class="{on:replyClean}"><router-link to="/mkup/bbs/replyClean">쌤Plus 클린존</router-link></li>
            	<li :class="{on:replyStudy}"><router-link to="/mkup/bbs/replyStudy">스터디하실래요</router-link></li>
            	<li :class="{on:replyUniversity}"><router-link to="/mkup/bbs/replyUniversity">대학제휴 문의</router-link></li>
            </ol>
          </li>
          <li class="snv02" :class="{on:nav6Snb02}">
            <span><router-link to="/mkup/bbs/teacherEvent">선생님 게시판</router-link></span>
            <ol>
              <li :class="{on:teacherEvent}"><router-link to="/mkup/bbs/teacherEvent">선생님 이벤트</router-link></li>
            	<li :class="{on:teacherInterview}"><router-link to="/mkup/bbs/teacherInterview">선생님 인터뷰</router-link></li>
            	<li :class="{on:teacherRealHit}"><router-link to="/mkup/bbs/teacherRealHit">리얼 적중</router-link></li>
            </ol>
          </li>
          <li class="snv03" :class="{on:nav6Snb03}">
            <span><router-link to="/mkup/bbs/noticeNews">공지게시판</router-link></span>
            <ol>
              <li :class="{on:noticeNews}"><router-link to="/mkup/bbs/noticeNews">공지사항</router-link></li>
            	<li :class="{on:noticeEvent}"><router-link to="/mkup/bbs/noticeEvent">이벤트</router-link></li>
            	<li :class="{on:noticeClassroom}"><router-link to="/mkup/bbs/noticeClassroom">강의실 배정표</router-link></li>
            </ol>
          </li>
          <li class="snv04" :class="{on:nav6Snb04}">
            <span><router-link to="/mkup/bbs/infoFaq">정보게시판</router-link></span>
            <ol>
              <li :class="{on:infoFaq}"><router-link to="/mkup/bbs/infoFaq">자주 하는 질문</router-link></li>
            	<li :class="{on:infoCounsel}"><router-link to="/mkup/bbs/infoCounsel">상담센터 공지</router-link></li>
            	<li :class="{on:infoCompetition}"><router-link to="/mkup/bbs/infoCompetition">모집인원 및 경쟁률</router-link></li>
            	<li :class="{on:infoExam}"><router-link to="/mkup/bbs/infoExam">시험정보</router-link></li>
            	<li :class="{on:infoColumn}"><router-link to="/mkup/bbs/infoColumn">임용칼럼</router-link></li>
            </ol>
          </li>
          <li class="snv05" :class="{on:nav6Snb05}">
            <span><router-link to="/mkup/bbs/passReview">합격수기</router-link></span>
            <ol>
              <li :class="{on:passReview}"><router-link to="/mkup/bbs/passReview">합격자 수기</router-link></li>
            	<li :class="{on:passInterview}"><router-link to="/mkup/bbs/passInterview">합격자 인터뷰</router-link></li>
            </ol>
          </li>
        </ul>
        <!-- //게시판 관리 Snb -->
        <!-- 사이트 관리 Snb -->
        <ul class="nav07" v-show="nav7">
          <li class="snv01" :class="{on:nav7Snb01}">
						<span><router-link to="/mkup/site/subjectMgt">수강과목관리</router-link></span>
						<ol>
							<li :class="{on:subjectMgt}"><router-link to="/mkup/site/subjectMgt">수강과목 설정</router-link></li>
						</ol>
					</li>
          <li class="snv02" :class="{on:nav7Snb02}">
						<span><router-link to="/mkup/site/navigationGnb">GNB/LNB관리</router-link></span>
						<ol>
							<li :class="{on:navigationGnb}"><router-link to="/mkup/site/navigationGnb">GNB 설정</router-link></li>
							<li :class="{on:navigationLnb}"><router-link to="/mkup/site/navigationLnb">LNB 설정</router-link></li>
						</ol>
					</li>
          <li class="snv03" :class="{on:nav7Snb03}">
						<span><router-link to="/mkup/site/bannerIntro">배너관리</router-link></span>
						<ol>
							<li :class="{on:bannerIntro}"><router-link to="/mkup/site/bannerIntro">인트로 사이트</router-link></li>
  						<li :class="{on:bannerLogin}"><router-link to="/mkup/site/bannerLogin">로그인 광고</router-link></li>
  						<li :class="{on:bannerMain}"><router-link to="/mkup/site/bannerMain">메인 화면</router-link></li>
  						<li :class="{on:bannerSammall}"><router-link to="/mkup/site/bannerSammall">쌤몰</router-link></li>
  						<li :class="{on:bannerSpecial}"><router-link to="/mkup/site/bannerSpecial">선생님스페셜</router-link></li>
  						<li :class="{on:bannerPassReview}"><router-link to="/mkup/site/bannerPassReview">합격수기</router-link></li>
						</ol>
					</li>
          <li class="snv04" :class="{on:nav7Snb04}">
						<span><router-link to="/mkup/site/termPolicy">사이트 약관 관리</router-link></span>
						<ol>
							<li :class="{on:termPolicy}"><router-link to="/mkup/site/termPolicy">이용약관 등</router-link></li>
						</ol>
					</li>
          <li class="snv05" :class="{on:nav7Snb05}">
						<span><router-link to="/mkup/site/surveyMgt">설문조사</router-link></span>
						<ol>
							<li :class="{on:surveyMgt}"><router-link to="/mkup/site/surveyMgt">설문지 관리</router-link></li>
							<li :class="{on:surveyResult}"><router-link to="/mkup/site/surveyResult">설문 결과</router-link></li>
						</ol>
					</li>
        </ul>
        <!-- //사이트 관리 Snb -->
        <!-- 메시지 관리 Snb -->
        <ul class="nav08" v-show="nav8">
          <li class="snv01" :class="{on:nav8}">
						<span><router-link to="/mkup/message/smsLms">SMS 관리</router-link></span>
						<ol>
							<li :class="{on:smsLms}"><router-link to="/mkup/message/smsLms">SMS/LMS 발송</router-link></li>
							<li :class="{on:sendResult}"><router-link to="/mkup/message/sendResult">발송 결과 조회</router-link></li>
							<li :class="{on:sendToExtract}"><router-link to="/mkup/message/sendToExtract">발송 대상 추출</router-link></li>
						</ol>
					</li>
        </ul>
        <!-- //메시지 관리 Snb -->
        <!-- 관리자 Snb -->
        <ul class="nav09" v-show="nav9">
          <li class="snv01" :class="{on:nav09Snb01}">
						<span><router-link to="/mkup/manager/accountManager">계정 관리</router-link></span>
						<ol>
							<li :class="{on:accountManager}"><router-link to="/mkup/manager/accountManager">관리자 계정</router-link></li>
							<li :class="{on:accountTeacher}"><router-link to="/mkup/manager/accountTeacher">강사 계정</router-link></li>
						</ol>
					</li>
          <li class="snv02" :class="{on:nav09Snb02}">
						<span><router-link to="/mkup/manager/logManager">로그 관리</router-link></span>
						<ol>
              <li :class="{on:logManager}"><router-link to="/mkup/manager/logManager">관리자 액션로그</router-link></li>
              <li :class="{on:logTeacher}"><router-link to="/mkup/manager/logTeacher">강사 조회로그</router-link></li>
						</ol>
					</li>
          <li class="snv03" :class="{on:nav09Snb03}">
						<span><router-link to="/mkup/manager/menuManage">메뉴/코드 관리</router-link></span>
						<ol>
							<li :class="{on:menuManage}"><router-link to="/mkup/manager/menuManage">관리자시스템 메뉴</router-link></li>
							<li :class="{on:menuTeacher}"><router-link to="/mkup/manager/menuTeacher">강사용시스템 메뉴</router-link></li>
							<li :class="{on:policySubjectCode}"><router-link to="/mkup/manager/policySubjectCode">과목코드 관리</router-link></li>
						</ol>
					</li>
          <!-- <li class="snv03" :class="{on:applicationClass}">
						<span><router-link to="/mkup/manager/applicationClass">학원 관리자</router-link></span>
						<ol>
							<li :class="{on:applicationClass}"><router-link to="/mkup/manager/applicationClass">수강신청</router-link></li>
						</ol>
					</li> -->
        </ul>
        <!-- //관리자 Snb -->
        <!-- 강사용 시스템 Snb -->
        <ul class="nav010 tNav" v-show="nav10">
          <li class="snv01" :class="{on:nav10Snb01}">
						<span><router-link to="/mkup/teacher/statsDaily">통계</router-link></span>
						<ol>
							<li :class="{on:statsDaily}"><router-link to="/mkup/teacher/statsDaily">기간 통계</router-link></li>
							<li :class="{on:statsSales}"><router-link to="/mkup/teacher/statsSales">판매 통계</router-link></li>
							<li :class="{on:statsStudent}"><router-link to="/mkup/teacher/statsStudent">수강생 통계</router-link></li>
						</ol>
					</li>
          <li class="snv02" :class="{on:nav10Snb02}">
						<span><router-link to="/mkup/teacher/studentOnline">강좌/수강생</router-link></span>
						<ol>
							<li :class="{on:studentOnline}"><router-link to="/mkup/teacher/studentOnline">강좌별 수강생 조회</router-link></li>
							<li :class="{on:learning}"><router-link to="/mkup/teacher/learning">학습 Q&amp;A</router-link></li>
							<li :class="{on:counsel}"><router-link to="/mkup/teacher/counsel">선생님 상담</router-link></li>
						</ol>
					</li>
          <!-- <li class="snv03" :class="{on:onlineMockTest}">
						<span><router-link to="/mkup/teacher/onlineMockTest">온라인 모의고사</router-link></span>
					</li> -->
        </ul>
        <!-- //강사용 시스템 Snb -->
        <!-- 2021-08-23 학원 관리 Snb -->
        <ul class="nav011" v-show="nav11">
          <li class="snv01" :class="{on:nav11Snb01}">
						<span><router-link to="/mkup/school/userSale">수강생 판매</router-link></span>
          </li>
          <li class="snv02" :class="{on:nav11Snb02}">
						<span><router-link to="/mkup/school/lockerMgt">사물함 관리</router-link></span>
          </li>
        </ul>
        <!-- //2021-08-23 학원 관리 Snb -->
      </div>
    </div>
    <div class="bottom" v-if="nav10">
      <strong :class="{on:mypage}"><router-link to="/mkup/teacher/mypage" class="name">{{this.getUserName || '테스트'}}</router-link></strong>
      <span v-if="nav10"><router-link to="/mkup/loginT">로그아웃</router-link></span>
    </div>
    <div class="bottom" v-else="nav10">
      <strong :class="{on:mypage}"><button class="name" @click="AdminPassword();">{{this.getUserName || '테스트'}}</button></strong>
      <span><router-link to="/mkup/login">로그아웃</router-link></span>
    </div>
    <button class="btnSnbTobggle" @click="snbToggle">snbToggle</button>
  </div>
  <!-- //Sub Menu -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

const user = 'userStore';

export default {
  name: 'Snb',
  data() {
    return {
      snbTrigger: false,
      mypage: false,
      nav1: false,
      nav2: false,
      nav3: false,
      nav4: false,
      nav5: false,
      nav6: false,
      nav7: false,
      nav8: false,
      nav9: false,
      nav10: false,
      nav11: false,
      // 통계 하위 메뉴
      nav1Snb02: false,
      nav1Snb03: false,
      nav1Snb04: false,
      nav1Snb05: false,
      visitSite: false,
      userSignup: false,
      userType: false,
      userStatus: false,
      userNonePay: false,
      userCharacter: false,
      counselCall: false,
      counselOne: false,
      counselOffline: false,
      indicatorAnnual: false,
      indicatorCourse: false,
      indicatorPayment: false,
      indicatorSales: false,
      indicatorRefund: false,
      indicatorRecourse: false,
      accountMgt: false,
      accountFee: false,
      // 회원/선생님 하위 메뉴
      nav2Snb01: false,
      nav2Snb02: false,
      nav2Snb03: false,
      nav2Snb04: false,
      userMgt: false,
      userSupport: false,
      userPremium: false,
      partnerAgency: false,
      universityAgency: false,
      logDuply: false,
      logShare: false,
      teacher: false,
      // 강좌/교재 하위 메뉴
      nav3Snb01: false,
      nav3Snb02: false,
      nav3Snb03: false,
      nav3Snb04: false,
      nav3Snb05: false,
      singleCourse: false,
      liveCourse: false,
      packageCourse: false,
      customCourse: false,
      freeCourse: false,
      todayUpdate: false,
      bookMgt: false,
      bookStockMgt: false,
      bookShopping: false,
      bookCustom: false,
      bookClient: false,
      deviceMgt: false,
      deviceShopping: false,
      merchMgt: false,
      merchShopping: false,
      // 결제 하위 메뉴
      paymentMgt: false,
      refundMgt: false,
      dailyCash: false,
      dailyCard: false,
      interestFree: false,
      nav4Snb06: false,
      couponMgt: false,
      couponSales: false,
      // 모의고사 관리 하위 메뉴
      nav5Snb01: false,
      nav5Snb02: false,
      nav5Snb03: false,
      nav5Snb04: false,
      // 게시판 관리 하위 메뉴
      nav6Snb01: false,
      nav6Snb02: false,
      nav6Snb03: false,
      nav6Snb04: false,
      nav6Snb05: false,
      nav6Snb06: false,
      replyReview: false,
      replyQna: false,
      replyBoard: false,
      replyClean: false,
      replyStudy: false,
      replyUniversity: false,
      replyCounsel: false,
      teacherEvent: false,
      teacherInterview: false,
      teacherRealHit: false,
      noticeNews: false,
      noticeEvent: false,
      noticeClassroom: false,
      infoFaq: false,
      infoCounsel: false,
      infoCompetition: false,
      infoExam: false,
      infoColumn: false,
      passReview: false,
      passInterview: false,
      // 사이트 관리 하위 메뉴
      nav7Snb01: false,
      nav7Snb02: false,
      nav7Snb03: false,
      nav7Snb04: false,
      nav7Snb05: false,
      subjectMgt: false,
      navigationGnb: false,
      navigationLnb: false,
      bannerIntro: false,
      bannerLogin: false,
      bannerMain: false,
      bannerSammall: false,
      bannerSpecial: false,
      bannerFreeLecture: false,
      bannerPassReview: false,
      bannerEvent: false,
      termPolicy: false,
      subjectMgt: false,
      surveyMgt: false,
      surveyResult: false,
      // 메시지 관리 하위 메뉴
      smsLms: false,
      sendResult: false,
      sendToExtract: false,
      // 관리자 하위 메뉴
      nav09Snb01: false,
      nav09Snb02: false,
      nav09Snb03: false,
      accountManager: false,
      accountTeacher: false,
      logManager: false,
      logTeacher: false,
      menuManage: false,
      menuTeacher: false,
      policySubjectCode: false,
      applicationClass: false,
      // 강사용 시스템 하위 메뉴
      nav10Snb01: false,
      nav10Snb02: false,
      statsDaily: false,
      statsSales: false,
      statsStudent: false,
      studentOnline: false,
      learning: false,
      counsel: false,
      onlineMockTest: false,
      // 학원 관리 하위 메뉴
      nav11Snb01: false,
      nav11Snb02: false,
    }
  },
  computed: {
    ...mapGetters({ getUserName: `${user}/getUserName` })
  },
  methods: {
    ...mapActions(user, ['LOGIN', 'LOGOUT']),

    snbToggle() {
      this.snbTrigger = !this.snbTrigger;
      this.snbTrigger ? document.getElementById('wrap').className += ' snbToggle' : document.getElementById('wrap').classList.remove('snbToggle');
    },
    snbChange(url) {
      this.mypage = false;
      this.nav1 = false;
      this.nav2 = false;
      this.nav3 = false;
      this.nav4 = false;
      this.nav5 = false;
      this.nav6 = false;
      this.nav7 = false;
      this.nav8 = false;
      this.nav9 = false;
      this.nav10 = false;
      this.nav11 = false;
      // 통계 하위 메뉴
      this.nav1Snb02 = false;
      this.nav1Snb03 = false;
      this.nav1Snb04 = false;
      this.nav1Snb05 = false;
      this.visitSite = false;
      this.userSignup = false;
      this.userType = false;
      this.userStatus = false;
      this.userNonePay = false;
      this.userCharacter = false;
      this.counselCall = false;
      this.counselOne = false;
      this.counselOffline = false;
      this.indicatorAnnual = false;
      this.indicatorCourse = false;
      this.indicatorPayment = false;
      this.indicatorSales = false;
      this.indicatorRefund = false;
      this.indicatorRecourse = false;
      this.accountMgt = false;
      this.accountFee = false;
      // 회원/선생님 하위 메뉴
      this.nav2Snb01 = false;
      this.nav2Snb02 = false;
      this.nav2Snb03 = false;
      this.nav2Snb04 = false;
      this.userMgt = false;
      this.userSupport = false;
      this.userPremium = false;
      this.partnerAgency = false;
      this.universityAgency = false;
      this.logDuply = false;
      this.logShare = false;
      this.teacher = false;
      // 강좌/교재 하위 메뉴
      this.nav3Snb01 = false;
      this.nav3Snb02 = false;
      this.nav3Snb03 = false;
      this.nav3Snb04 = false;
      this.nav3Snb05 = false;
      this.singleCourse = false;
      this.liveCourse = false;
      this.packageCourse = false;
      this.customCourse = false;
      this.freeCourse = false;
      this.todayUpdate = false;
      this.bookMgt = false;
      this.bookStockMgt = false;
      this.bookShopping = false;
      this.bookCustom = false;
      this.bookClient = false;
      this.deviceMgt = false;
      this.deviceShopping = false;
      this.merchMgt = false;
      this.merchShopping = false;
      // 결제 하위 메뉴
      this.paymentMgt = false;
      this.refundMgt = false;
      this.dailyCash = false;
      this.dailyCard = false;
      this.interestFree = false;
      this.nav4Snb06 = false;
      this.couponMgt = false;
      this.couponSales = false;
      // 모의고사 관리 하위 메뉴
      this.nav5Snb01 = false;
      this.nav5Snb02 = false;
      this.nav5Snb03 = false;
      this.nav5Snb04 = false;
      // 게시판 관리 하위 메뉴
      this.nav6Snb01 = false,
      this.nav6Snb02 = false,
      this.nav6Snb03 = false,
      this.nav6Snb04 = false,
      this.nav6Snb05 = false,
      this.nav6Snb06 = false,
      this.replyQna = false,
      this.replyBoard = false,
      this.replyClean = false,
      this.replyStudy = false,
      this.replyUniversity = false,
      this.replyReview = false,
      this.replyCounsel = false,
      this.teacherEvent = false,
      this.teacherInterview = false,
      this.teacherRealHit = false,
      this.noticeNews = false,
      this.noticeEvent = false,
      this.noticeClassroom = false,
      this.infoFaq = false,
      this.infoCounsel = false,
      this.infoCompetition = false,
      this.infoExam = false,
      this.infoColumn = false,
      this.passReview = false,
      this.passInterview = false,
      // 사이트 관리 하위 메뉴
      this.nav7Snb01 = false;
      this.nav7Snb02 = false;
      this.nav7Snb03 = false;
      this.nav7Snb04 = false;
      this.nav7Snb05 = false;
      this.subjectMgt = false;
      this.navigationGnb = false;
      this.navigationLnb = false;
      this.bannerIntro = false;
      this.bannerLogin = false;
      this.bannerMain = false;
      this.bannerSammall = false;
      this.bannerSpecial = false;
      this.bannerFreeLecture = false;
      this.bannerPassReview = false;
      this.bannerEvent = false;
      this.termPolicy = false;
      this.surveyMgt = false;
      this.surveyResult = false;
      // 메시지 관리 하위 메뉴
      this.smsLms = false;
      this.sendResult = false;
      this.sendToExtract = false;
      // 관리자 하위 메뉴
      this.nav09Snb01 = false;
      this.nav09Snb02 = false;
      this.nav09Snb03 = false;
      this.accountManager = false;
      this.accountTeacher = false;
      this.logManager = false;
      this.logTeacher = false;
      this.menuManage = false;
      this.menuTeacher = false;
      this.policySubjectCode = false;
      this.applicationClass = false;
      // 강사용 시스템 하위 메뉴
      this.nav10Snb01 = false;
      this.nav10Snb02 = false;
      this.nav10Snb03 = false;
      this.statsDaily = false;
      this.statsSales = false;
      this.statsStudent = false;
      this.studentOnline = false;
      this.learning = false;
      this.counsel = false;
      this.onlineMockTest = false;
      // 학원 관리 하위 메뉴
      this.nav11Snb01 = false;
      this.nav11Snb02 = false;

      if (url.includes('/statistics')) {
        this.nav1 = true;
        if (url.includes('/visitSite')) {
          this.visitSite = true;
        } else if (url.includes('/userSignup')) {
          this.nav1Snb02 = true;
          this.userSignup = true;
        } else if (url.includes('/userType')) {
          this.nav1Snb02 = true;
          this.userType = true;
        } else if (url.includes('/userStatus')) {
          this.nav1Snb02 = true;
          this.userStatus = true;
        } else if (url.includes('/userNonePay')) {
          this.nav1Snb02 = true;
          this.userNonePay = true;
        } else if (url.includes('/userCharacter')) {
          this.nav1Snb02 = true;
          this.userCharacter = true;
        } else if (url.includes('/counselCall')) {
          this.nav1Snb03 = true;
          this.counselCall = true;
        } else if (url.includes('/counselOne')) {
          this.nav1Snb03 = true;
          this.counselOne = true;
        } else if (url.includes('/counselOffline')) {
          this.nav1Snb03 = true;
          this.counselOffline = true;
        } else if (url.includes('/indicatorAnnual')) {
          this.nav1Snb04 = true;
          this.indicatorAnnual = true;
        } else if (url.includes('/indicatorPayment')) {
          this.nav1Snb04 = true;
          this.indicatorPayment = true;
        } else if (url.includes('/indicatorSales')) {
          this.nav1Snb04 = true;
          this.indicatorSales = true;
        } else if (url.includes('/indicatorRefund')) {
          this.nav1Snb04 = true;
          this.indicatorRefund = true;
        } else if (url.includes('/indicatorRecourse')) {
          this.nav1Snb04 = true;
          this.indicatorRecourse = true;
        } else if (url.includes('/indicatorCourse')) {
          this.nav1Snb04 = true;
          this.indicatorCourse = true;
        } else if (url.includes('/accountFee')) {
          this.nav1Snb05 = true;
          this.accountFee = true;
        } else if (url.includes('/accountMgt')) {
          this.nav1Snb05 = true;
          this.accountMgt = true;
        }
      }
      else if (url.includes('/member')) {
        this.nav2 = true;
        if (url.includes('/userMgt')) {
          this.nav2Snb01 = true;
          this.userMgt = true;
        } else if (url.includes('/userSupport')) {
          this.nav2Snb01 = true;
          this.userSupport = true;
        } else if (url.includes('/userPremium')) {
          this.nav2Snb01 = true;
          this.userPremium = true;
        } else if (url.includes('/partnerAgency')) {
          this.nav2Snb02 = true;
          this.partnerAgency = true;
        } else if (url.includes('/universityAgency')) {
          this.nav2Snb02 = true;
          this.universityAgency = true;
        } else if (url.includes('/logDuply')) {
          this.nav2Snb03 = true;
          this.logDuply = true;
        } else if (url.includes('/logShare')) {
          this.nav2Snb03 = true;
          this.logShare = true;
        } else if (url.includes('/teacher')) {
          this.nav2Snb04 = true;
          this.teacher = true;
        }
      }
      else if (url.includes('/lecture')) {
        this.nav3 = true;
        if (url.includes('/singleCourse')) {
          this.nav3Snb01 = true;
          this.singleCourse = true;
        } else if (url.includes('/liveCourse')) {
          this.nav3Snb01 = true;
          this.liveCourse = true;
        } else if (url.includes('/packageCourse')) {
          this.nav3Snb01 = true;
          this.packageCourse = true;
        } else if (url.includes('/customCourse')) {
          this.nav3Snb01 = true;
          this.customCourse = true;
        } else if (url.includes('/freeCourse')) {
          this.nav3Snb01 = true;
          this.freeCourse = true;
        } else if (url.includes('/todayUpdate')) {
          this.nav3Snb02 = true;
          this.todayUpdate = true;
        } else if (url.includes('/bookMgt')) {
          this.nav3Snb03 = true;
          this.bookMgt = true;
        } else if (url.includes('/bookStockMgt')) {
          this.nav3Snb03 = true;
          this.bookStockMgt = true;
        } else if (url.includes('/bookShopping')) {
          this.nav3Snb03 = true;
          this.bookShopping = true;
        } else if (url.includes('/bookCustom')) {
          this.nav3Snb03 = true;
          this.bookCustom = true;
        } else if (url.includes('/bookClient')) {
          this.nav3Snb03 = true;
          this.bookClient = true;
        }  else if (url.includes('/deviceMgt')) {
          this.nav3Snb04 = true;
          this.deviceMgt = true;
        } else if (url.includes('/deviceShopping')) {
          this.nav3Snb04 = true;
          this.deviceShopping = true;
        } else if (url.includes('/merchMgt')) {
          this.nav3Snb05 = true;
          this.merchMgt = true;
        } else if (url.includes('/merchShopping')) {
          this.nav3Snb05 = true;
          this.merchShopping = true;
        }
      }
      else if (url.includes('/payment')) {
        this.nav4 = true;
        if (url.includes('/paymentMgt')) {
          this.paymentMgt = true;
        } else if (url.includes('/refundMgt')) {
          this.refundMgt = true;
        } else if (url.includes('/dailyCash')) {
          this.dailyCash = true;
        } else if (url.includes('/dailyCard')) {
          this.dailyCard = true;
        } else if (url.includes('/interestFree')) {
          this.interestFree = true;
        } else if (url.includes('/couponMgt')) {
          this.nav4Snb06 = true;
          this.couponMgt = true;
        } else if (url.includes('/couponSales')) {
          this.nav4Snb06 = true;
          this.couponSales = true;
        }
      }
      else if (url.includes('/mocktest')) {
        this.nav5 = true;
        if (url.includes('multi')) {
          this.nav5Snb01 = true;
        } else if (url.includes('/month')) {
          this.nav5Snb02 = true;
        } else if (url.includes('/paperMgt')) {
          this.nav5Snb03 = true;
        } else if (url.includes('/format')) {
          this.nav5Snb04 = true;
        }
      }
      else if (url.includes('/bbs')) {
        this.nav6 = true;
        if (url.includes('/replyQna')) {
          this.nav6Snb01 = true;
          this.replyQna = true;
        } else if (url.includes('/replyBoard')) {
          this.nav6Snb01 = true;
          this.replyBoard = true;
        } else if (url.includes('/replyCounsel')) {
          this.nav6Snb01 = true;
          this.replyCounsel = true;
        } else if (url.includes('/replyStudy')) {
          this.nav6Snb01 = true;
          this.replyStudy = true;
        } else if (url.includes('/replyClean')) {
          this.nav6Snb01 = true;
          this.replyClean = true;
        } else if (url.includes('/replyUniversity')) {
          this.nav6Snb01 = true;
          this.replyUniversity = true;
        } else if (url.includes('/replyReview')) {
          this.nav6Snb01 = true;
          this.replyReview = true;
        } else if (url.includes('/teacherEvent')) {
          this.nav6Snb02 = true;
          this.teacherEvent = true;
        } else if (url.includes('/teacherInterview')) {
          this.nav6Snb02 = true;
          this.teacherInterview = true;
        } else if (url.includes('/teacherRealHit')) {
          this.nav6Snb02 = true;
          this.teacherRealHit = true;
        } else if (url.includes('/noticeNews')) {
          this.nav6Snb03 = true;
          this.noticeNews = true;
        } else if (url.includes('/noticeEvent')) {
          this.nav6Snb03 = true;
          this.noticeEvent = true;
        } else if (url.includes('/noticeClassroom')) {
          this.nav6Snb03 = true;
          this.noticeClassroom = true;
        } else if (url.includes('/infoFaq')) {
          this.nav6Snb04 = true;
          this.infoFaq = true;
        } else if (url.includes('/infoCounsel')) {
          this.nav6Snb04 = true;
          this.infoCounsel = true;
        } else if (url.includes('/infoCompetition')) {
          this.nav6Snb04 = true;
          this.infoCompetition = true;
        } else if (url.includes('/infoExam')) {
          this.nav6Snb04 = true;
          this.infoExam = true;
        } else if (url.includes('/infoColumn')) {
          this.nav6Snb04 = true;
          this.infoColumn = true;
        } else if (url.includes('/passReview')) {
          this.nav6Snb05 = true;
          this.passReview = true;
        } else if (url.includes('/passInterview')) {
          this.nav6Snb05 = true;
          this.passInterview = true;
        }
      }
      else if (url.includes('/bbs')) this.nav6 = true;
      else if (url.includes('/site')) {
        this.nav7 = true;
        if (url.includes('/subjectMgt')) {
          this.nav7Snb01 = true;
          this.subjectMgt = true;
        } else if (url.includes('/navigationGnb')) {
          this.nav7Snb02 = true;
          this.navigationGnb = true;
        } else if (url.includes('/navigationLnb')) {
          this.nav7Snb02 = true;
          this.navigationLnb = true;
        }else if (url.includes('/bannerIntro')) {
          this.nav7Snb03 = true;
          this.bannerIntro = true;
        } else if (url.includes('/bannerLogin')) {
          this.nav7Snb03 = true;
          this.bannerLogin = true;
        } else if (url.includes('/bannerMain')) {
          this.nav7Snb03 = true;
          this.bannerMain = true;
        } else if (url.includes('/bannerSammall')) {
          this.nav7Snb03 = true;
          this.bannerSammall = true;
        } else if (url.includes('/bannerSpecial')) {
          this.nav7Snb03 = true;
          this.bannerSpecial = true;
        } else if (url.includes('/bannerFreeLecture')) {
          this.nav7Snb03 = true;
          this.bannerFreeLecture = true;
        } else if (url.includes('/bannerPassReview')) {
          this.nav7Snb03 = true;
          this.bannerPassReview = true;
        } else if (url.includes('/bannerEvent')) {
          this.nav7Snb03 = true;
          this.bannerEvent = true;
        } else if (url.includes('/termPolicy')) {
          this.nav7Snb04 = true;
          this.termPolicy = true;
        } else if (url.includes('/surveyMgt')) {
          this.nav7Snb05 = true;
          this.surveyMgt = true;
        } else if (url.includes('/surveyResult')) {
          this.nav7Snb05 = true;
          this.surveyResult = true;
        }
      }
      else if (url.includes('/message')) {
        this.nav8 = true;
        if (url.includes('/smsLms')) this.smsLms = true;
        else if (url.includes('/sendResult')) this.sendResult = true;
        else if (url.includes('/sendToExtract')) this.sendToExtract = true;
      }
      else if (url.includes('/manager')) {
        this.nav9 = true;
        if (url.includes('/accountManager')) {
          this.nav09Snb01 = true;
          this.accountManager = true;
        } else if (url.includes('/accountTeacher')) {
          this.nav09Snb01 = true;
          this.accountTeacher = true;
        } else if (url.includes('/logManager')) {
          this.nav09Snb02 = true;
          this.logManager = true;
        } else if (url.includes('/logTeacher')) {
          this.nav09Snb02 = true;
          this.logTeacher = true;
        } else if (url.includes('/menuManage')) {
          this.nav09Snb03 = true;
          this.menuManage = true;
        } else if (url.includes('/menuTeacher')) {
          this.nav09Snb03 = true;
          this.menuTeacher = true;
        } else if (url.includes('/policySubjectCode')) {
          this.nav09Snb03 = true;
          this.policySubjectCode = true;
        } else if (url.includes('/applicationClass')) {
          this.applicationClass = true;
        }
      }
      else if (url.includes('/teacher')) {
        this.nav10 = true;
        if (url.includes('/studentOnline') || url.includes('/studentDirect') || url.includes('/student/board') || url.includes('/studentLive')) {
          this.nav10Snb02 = true;
          this.studentOnline = true;
        } else if (url.includes('/learning')) {
          this.nav10Snb02 = true;
          this.learning = true;
        } else if (url.includes('/counsel')) {
          this.nav10Snb02 = true;
          this.counsel = true;
        } else if (url.includes('/statsDaily')) {
          this.nav10Snb01 = true;
          this.statsDaily = true;
        } else if (url.includes('/statsSales')) {
          this.nav10Snb01 = true;
          this.statsSales = true;
        } else if (url.includes('/statsStudent')) {
          this.nav10Snb01 = true;
          this.statsStudent = true;
        } else if (url.includes('/onlineMockTest')) {
          this.onlineMockTest = true;
        } else if (url.includes('/mypage')) {
          this.mypage = true;
        }
      }
      else if (url.includes('/school')) {
        this.nav11 = true;
        if (url.includes('/userSale')) this.nav11Snb01 = true;
        else if (url.includes('/lockerMgt')) this.nav11Snb02 = true;
      }
    },
    logout() {
      this.LOGOUT();
    },
    AdminPassword() {
      let routeData = this.$router.resolve({name: 'AdminPassword', query: {data: "someData"}});
      window.open('/mkup/windowPopup/adminPassword', '_blank', `width=570,height=750`);
    },
  },
  watch: {
    $route(to, from) {
      this.snbChange(to.path);
    }
  },
  mounted() {
    this.snbChange(window.location.pathname);
  },
};
</script>
