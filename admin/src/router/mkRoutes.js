//////////// src Root ////////////
import Worklist from '@/views/Worklist.vue';
import Loading from '@/views/Loading.vue';
import Layout from '@/views/Layout.vue';
import Draggable from '@/views/Draggable.vue';
import Uicomponent from '@/views/Uicomponent.vue';
import ChartSample from '@/views/ChartSample.vue';
import Error from '@/views/Error.vue';
import WindowPopupComponent from '@/views/WindowPopupComponent.vue';

//////////// 본창 ////////////
//진입
import Login from '@/views/manager/Login.vue';
import Join from '@/views/manager/Join.vue';
import FindAccount from '@/views/manager/FindAccount.vue';
import LoginTeacher from '@/views/teacher/LoginTeacher.vue';
import FindAccountTeacher from '@/views/teacher/FindAccountTeacher.vue';
//통계
import VisitSite from '@/views/statistics/VisitSite.vue';
import UserSignup from '@/views/statistics/UserSignup.vue';
import UserType from '@/views/statistics/UserType.vue';
import UserStatus from '@/views/statistics/UserStatus.vue';
import UserNonePay from '@/views/statistics/UserNonePay.vue';
import CounselCall from '@/views/statistics/CounselCall.vue';
import CounselCallUse from '@/views/statistics/CounselCallUse.vue';
import CounselCallRefund from '@/views/statistics/CounselCallRefund.vue';
import CounselCallStudy from '@/views/statistics/CounselCallStudy.vue';
import CounselCallEtc from '@/views/statistics/CounselCallEtc.vue';
import CounselOne from '@/views/statistics/CounselOne.vue';
import CounselOneUse from '@/views/statistics/CounselOneUse.vue';
import CounselOneRefund from '@/views/statistics/CounselOneRefund.vue';
import CounselOneStudy from '@/views/statistics/CounselOneStudy.vue';
import CounselOneEtc from '@/views/statistics/CounselOneEtc.vue';
import CounselOffline from '@/views/statistics/CounselOffline.vue';
import IndicatorAnnual from '@/views/statistics/IndicatorAnnual.vue';
import IndicatorCourse from '@/views/statistics/IndicatorCourse.vue';
import IndicatorPayment from '@/views/statistics/IndicatorPayment.vue';
import IndicatorRefund from '@/views/statistics/IndicatorRefund.vue';
import IndicatorRecourse from '@/views/statistics/IndicatorRecourse.vue';
import IndicatorSales from '@/views/statistics/IndicatorSales.vue';
import AccountMgt from '@/views/statistics/AccountMgt.vue';
import AccountFee from '@/views/statistics/AccountFee.vue';
//회원/선생님
import UserMgt from '@/views/member/UserMgt.vue';
import UserMgtView from '@/views/member/UserMgtView.vue';
import UserSupport from '@/views/member/UserSupport.vue';
import UserPremium from '@/views/member/UserPremium.vue';
import PartnerAgency from '@/views/member/PartnerAgency.vue';
import PartnerAgencyWrite from '@/views/member/PartnerAgencyWrite.vue';
import PartnerAgencyView from '@/views/member/PartnerAgencyView.vue';
import UniversityAgency from '@/views/member/UniversityAgency.vue';
import Teacher from '@/views/member/Teacher.vue';
import TeacherWrite from '@/views/member/TeacherWrite.vue';
import TeacherView from '@/views/member/TeacherView.vue';
import LogDuply from '@/views/member/LogDuply.vue';
import LogDuplyView from '@/views/member/LogDuplyView.vue';
import LogShare from '@/views/member/LogShare.vue';
//강좌/교재
import SingleCourse from '@/views/lecture/SingleCourse.vue';
import SingleCourseRegHome from '@/views/lecture/SingleCourseRegHome.vue';
import SingleCourseWrite from '@/views/lecture/SingleCourseWrite.vue';
import SingleCourseViewOffline from '@/views/lecture/SingleCourseViewOffline.vue';
import SingleCourseViewLive from '@/views/lecture/SingleCourseViewLive.vue';
import SingleCourseViewPlayer from '@/views/lecture/SingleCourseViewPlayer.vue';
import PackageCourse from '@/views/lecture/PackageCourse.vue';
import PackageCoursePremiumPolicy from '@/views/lecture/PackageCoursePremiumPolicy.vue';
import PackageCourseWrite from '@/views/lecture/PackageCourseWrite.vue';
import PackageCourseBasic from '@/views/lecture/PackageCourseBasic.vue';
import PackageCoursePremium from '@/views/lecture/PackageCoursePremium.vue';
import PackageCoursePremiumPlus from '@/views/lecture/PackageCoursePremiumPlus.vue';
import LiveCourse from '@/views/lecture/LiveCourse.vue';
import CustomCourse from '@/views/lecture/CustomCourse.vue';
import CustomCourseWrite from '@/views/lecture/CustomCourseWrite.vue';
import CustomCourseView from '@/views/lecture/CustomCourseView.vue';
import FreeCourse from '@/views/lecture/FreeCourse.vue';
import FreeCourseWrite from '@/views/lecture/FreeCourseWrite.vue';
import FreeCourseView from '@/views/lecture/FreeCourseView.vue';
import TodayUpdate from '@/views/lecture/TodayUpdate.vue';
import BookStockMgt from '@/views/lecture/BookStockMgt.vue';
import BookMgt from '@/views/lecture/BookMgt.vue';
import BookMgtWrite from '@/views/lecture/BookMgtWrite.vue';
import BookMgtView from '@/views/lecture/BookMgtView.vue';
// import BookReceive from '@/views/lecture/BookReceive.vue';
import BookShopping from '@/views/lecture/BookShopping.vue';
import BookCustom from '@/views/lecture/BookCustom.vue';
import BookCustomWrite from '@/views/lecture/BookCustomWrite.vue';
import BookCustomView from '@/views/lecture/BookCustomView.vue';
import BookClient from '@/views/lecture/BookClient.vue';
import BookClientWrite from '@/views/lecture/BookClientWrite.vue';
import BookClientView from '@/views/lecture/BookClientView.vue';
import DeviceMgt from '@/views/lecture/DeviceMgt.vue';
import DeviceMgtWrite from '@/views/lecture/DeviceMgtWrite.vue';
import DeviceMgtView from '@/views/lecture/DeviceMgtView.vue';
import DeviceShopping from '@/views/lecture/DeviceShopping.vue';
import MerchMgt from '@/views/lecture/MerchMgt.vue';
import MerchMgtWrite from '@/views/lecture/MerchMgtWrite.vue';
import MerchMgtView from '@/views/lecture/MerchMgtView.vue';
import MerchShopping from '@/views/lecture/MerchShopping.vue';
//결제
import PaymentMgt from '@/views/payment/PaymentMgt.vue';
import RefundMgt from '@/views/payment/RefundMgt.vue';
import DailyCash from '@/views/payment/DailyCash.vue';
import DailyCard from '@/views/payment/DailyCard.vue';
import InterestFree from '@/views/payment/InterestFree.vue';
import CouponMgt from '@/views/payment/CouponMgt.vue';
import CouponMgtWrite from '@/views/payment/CouponMgtWrite.vue';
import CouponMgtView from '@/views/payment/CouponMgtView.vue';
import CouponMgtView2 from '@/views/payment/CouponMgtView2.vue';
import CouponSales from '@/views/payment/CouponSales.vue';
//모의고사
import MultiTest from '@/views/mocktest/MultiTest.vue';
import MultiTestWrite from '@/views/mocktest/MultiTestWrite.vue';
import MultiTestView from '@/views/mocktest/MultiTestView.vue';
import MonthTest from '@/views/mocktest/MonthTest.vue';
import MonthTestWrite from '@/views/mocktest/MonthTestWrite.vue';
import MonthTestView from '@/views/mocktest/MonthTestView.vue';
import PaperMgt from '@/views/mocktest/PaperMgt.vue';
import PaperMgtWrite from '@/views/mocktest/PaperMgtWrite.vue';
import PaperMgtView from '@/views/mocktest/PaperMgtView.vue';
import FormatMgt from '@/views/mocktest/FormatMgt.vue';
//게시판 관리
import ReplyReview from '@/views/bbs/ReplyReview.vue';
import ReplyReviewCourseView from '@/views/bbs/ReplyReviewCourseView.vue';
import ReplyReviewDeviceView from '@/views/bbs/ReplyReviewDeviceView.vue';
import ReplyReviewGoodsView from '@/views/bbs/ReplyReviewGoodsView.vue';
import ReplyReviewEtcView from '@/views/bbs/ReplyReviewEtcView.vue';
import ReplyQna from '@/views/bbs/ReplyQna.vue';
import ReplyQnaView from '@/views/bbs/ReplyQnaView.vue';
import ReplyQnaWrite from '@/views/bbs/ReplyQnaWrite.vue';
import ReplyBoard from '@/views/bbs/ReplyBoard.vue';
import ReplyBoardUseView from '@/views/bbs/ReplyBoardUseView.vue';
import ReplyBoardUseView2 from '@/views/bbs/ReplyBoardUseView2.vue';
import ReplyBoardLicenceView from '@/views/bbs/ReplyBoardLicenceView.vue';
import ReplyBoardLicenceView2 from '@/views/bbs/ReplyBoardLicenceView2.vue';
import ReplyCounsel from '@/views/bbs/ReplyCounsel.vue';
import ReplyCounselDirectView from '@/views/bbs/ReplyCounselDirectView.vue';
import ReplyCounselTeacherView from '@/views/bbs/ReplyCounselTeacherView.vue';
import ReplyClean from '@/views/bbs/ReplyClean.vue';
import ReplyCleanReportView from '@/views/bbs/ReplyCleanReportView.vue';
import ReplyCleanReportView2 from '@/views/bbs/ReplyCleanReportView2.vue';
import ReplyCleanFixedView from '@/views/bbs/ReplyCleanFixedView.vue';
import ReplyCleanFixedWrite from '@/views/bbs/ReplyCleanFixedWrite.vue';
import ReplyUniversity from '@/views/bbs/ReplyUniversity.vue';
import TeacherEvent from '@/views/bbs/TeacherEvent.vue';
import TeacherEventWrite from '@/views/bbs/TeacherEventWrite.vue';
import TeacherEventView from '@/views/bbs/TeacherEventView.vue';
import TeacherInterview from '@/views/bbs/TeacherInterview.vue';
import TeacherInterviewView from '@/views/bbs/TeacherInterviewView.vue';
import TeacherRealHit from '@/views/bbs/TeacherRealHit.vue';
import TeacherRealHitView from '@/views/bbs/TeacherRealHitView.vue';
import ReplyStudy from '@/views/bbs/ReplyStudy.vue';
import ReplyStudyView from '@/views/bbs/ReplyStudyView.vue';
import NoticeNews from '@/views/bbs/NoticeNews.vue';
import NoticeNewsWrite from '@/views/bbs/NoticeNewsWrite.vue';
import NoticeNewsView from '@/views/bbs/NoticeNewsView.vue';
import NoticeEvent from '@/views/bbs/NoticeEvent.vue';
import NoticeEventWrite from '@/views/bbs/NoticeEventWrite.vue';
import NoticeEventView from '@/views/bbs/NoticeEventView.vue';
import NoticeClassroom from '@/views/bbs/NoticeClassroom.vue';
import InfoFaq from '@/views/bbs/InfoFaq.vue';
import InfoFaqWrite from '@/views/bbs/InfoFaqWrite.vue';
import InfoFaqView from '@/views/bbs/InfoFaqView.vue';
import InfoCounsel from '@/views/bbs/InfoCounsel.vue';
import InfoCounselWrite from '@/views/bbs/InfoCounselWrite.vue';
import InfoCounselView from '@/views/bbs/InfoCounselView.vue';
import InfoCompetition from '@/views/bbs/InfoCompetition.vue';
import InfoCompetitionWrite from '@/views/bbs/InfoCompetitionWrite.vue';
import InfoCompetitionView from '@/views/bbs/InfoCompetitionView.vue';
import InfoExam from '@/views/bbs/InfoExam.vue';
import InfoExamTest from '@/views/bbs/InfoExamTest.vue';
import InfoExamTestWrite from '@/views/bbs/InfoExamTestWrite.vue';
import InfoExamTestView from '@/views/bbs/InfoExamTestView.vue';
import InfoExamNews from '@/views/bbs/InfoExamNews.vue';
import InfoExamNewsWrite from '@/views/bbs/InfoExamNewsWrite.vue';
import InfoExamNewsView from '@/views/bbs/InfoExamNewsView.vue';
import InfoExamPast from '@/views/bbs/InfoExamPast.vue';
import InfoExamPastWrite from '@/views/bbs/InfoExamPastWrite.vue';
import InfoExamPastView from '@/views/bbs/InfoExamPastView.vue';
import InfoExamCourse from '@/views/bbs/InfoExamCourse.vue';
import InfoExamCourseWrite from '@/views/bbs/InfoExamCourseWrite.vue';
import InfoExamCourseView from '@/views/bbs/InfoExamCourseView.vue';
import InfoExamLife from '@/views/bbs/InfoExamLife.vue';
import InfoExamLifeWrite from '@/views/bbs/InfoExamLifeWrite.vue';
import InfoExamLifeView from '@/views/bbs/InfoExamLifeView.vue';
import InfoColumn from '@/views/bbs/InfoColumn.vue';
import InfoColumnWrite from '@/views/bbs/InfoColumnWrite.vue';
import InfoColumnView from '@/views/bbs/InfoColumnView.vue';
import PassReview from '@/views/bbs/PassReview.vue';
import PassReviewWrite from '@/views/bbs/PassReviewWrite.vue';
import PassReviewView from '@/views/bbs/PassReviewView.vue';
import PassInterview from '@/views/bbs/PassInterview.vue';
import PassInterviewWrite from '@/views/bbs/PassInterviewWrite.vue';
import PassInterviewView from '@/views/bbs/PassInterviewView.vue';
//사이트 관리
import SubjectMgt from '@/views/site/SubjectMgt.vue';
import SubjectMgtView from '@/views/site/SubjectMgtView.vue';
import SubjectMgtView2 from '@/views/site/SubjectMgtView2.vue';
import SubjectMgtView3 from '@/views/site/SubjectMgtView3.vue';
import NavigationGnb from '@/views/site/NavigationGnb.vue';
import NavigationGnbView from '@/views/site/NavigationGnbView.vue';
import NavigationGnbViewExc from '@/views/site/NavigationGnbViewExc.vue';
import NavigationLnb from '@/views/site/NavigationLnb.vue';
import BannerIntro from '@/views/site/BannerIntro.vue';
import BannerLogin from '@/views/site/BannerLogin.vue';
import BannerMain from '@/views/site/BannerMain.vue';
import BannerMainTeacherView from '@/views/site/BannerMainTeacherView.vue';
import BannerMainRecommendView from '@/views/site/BannerMainRecommendView.vue';
import BannerSammall from '@/views/site/BannerSammall.vue';
import BannerSpecial from '@/views/site/BannerSpecial.vue';
import BannerPassReview from '@/views/site/BannerPassReview.vue';
import TermPolicy from '@/views/site/TermPolicy.vue';
import SurveyMgt from '@/views/site/SurveyMgt.vue';
import SurveyMgtWrite from '@/views/site/SurveyMgtWrite.vue';
import SurveyMgtView from '@/views/site/SurveyMgtView.vue';
import SurveyResult from '@/views/site/SurveyResult.vue';
import SurveyResultView from '@/views/site/SurveyResultView.vue';
//메시지 관리
import SmsLms from '@/views/message/SmsLms.vue';
import SendResult from '@/views/message/SendResult.vue';
import SendToExtract from '@/views/message/SendToExtract.vue';
//관리자
import AccountManager from '@/views/manager/AccountManager.vue';
import AccountManagerListWrite from '@/views/manager/AccountManagerListWrite.vue';
import AccountManagerListView from '@/views/manager/AccountManagerListView.vue';
import AccountTeacher from '@/views/manager/AccountTeacher.vue';
import AccountTeacherWrite from '@/views/manager/AccountTeacherWrite.vue';
import AccountTeacherView from '@/views/manager/AccountTeacherView.vue';
import LogManager from '@/views/manager/LogManager.vue';
import LogTeacher from '@/views/manager/LogTeacher.vue';
import MenuManage from '@/views/manager/MenuManage.vue';
import MenuManageView from '@/views/manager/MenuManageView.vue';
import MenuTeacher from '@/views/manager/MenuTeacher.vue';
import PolicyManage from '@/views/manager/PolicyManage.vue';
import PolicySubjectCode from '@/views/manager/PolicySubjectCode.vue';
import PolicySubjectCodeView from '@/views/manager/PolicySubjectCodeView.vue';
import ApplicationClass from '@/views/manager/ApplicationClass.vue';
//강사용 시스템
import StatsDaily from '@/views/teacher/StatsDaily.vue';
import StatsSales from '@/views/teacher/StatsSales.vue';
import StatsStudent from '@/views/teacher/StatsStudent.vue';
import StudentOnline from '@/views/teacher/StudentOnline.vue';
import StudentOnlineView from '@/views/teacher/StudentOnlineView.vue';
import StudentBoard from '@/views/teacher/StudentBoard.vue';
import StudentDirect from '@/views/teacher/StudentDirect.vue';
import StudentDirectView from '@/views/teacher/StudentDirectView.vue';
import StudentDirectLive from '@/views/teacher/StudentDirectLive.vue';
import StudentLive from '@/views/teacher/StudentLive.vue';
import StudentLiveView from '@/views/teacher/StudentLiveView.vue';
import StudentLiveChatView from '@/views/teacher/StudentLiveChatView.vue';
import Learning from '@/views/teacher/Learning.vue';
import LearningWrite from '@/views/teacher/LearningWrite.vue';
import LearningView from '@/views/teacher/LearningView.vue';
import Counsel from '@/views/teacher/Counsel.vue';
import Mypage from '@/views/teacher/Mypage.vue';
import OnlineMockTest from '@/views/teacher/OnlineMockTest.vue';
// 학원 관리
import UserSale from '@/views/school/UserSale.vue';
import UserSaleProduct from '@/views/school/UserSaleProduct.vue';
import UserSaleProductPay from '@/views/school/UserSaleProductPay.vue';
import UserSaleLocker from '@/views/school/UserSaleLocker.vue';
import UserSaleLockerPay from '@/views/school/UserSaleLockerPay.vue';
import LockerMgt from '@/views/school/LockerMgt.vue';
import LockerMgtExtension from '@/views/school/LockerMgtExtension.vue';
//////////// 윈도우 팝업 All ////////////
import WindowPopup from '@/views/include/WindowPopup.vue';
//관리자시스템 공통
import AdminPassword from '@/views/admin/AdminPassword.vue';
//통계
//회원/교수
import MemberLectureChange from '@/views/member/MemberLectureChange.vue';
import MemberEnrollment from '@/views/member/MemberEnrollment.vue';
import MemberLectureHistory from '@/views/member/MemberLectureHistory.vue';
import MemberDirectSwitch from '@/views/member/MemberDirectSwitch.vue';
import MemberOnlineSwitch from '@/views/member/MemberOnlineSwitch.vue';
import MemberAttendance from '@/views/member/MemberAttendance.vue';
import MemberSupplementMgt from '@/views/member/MemberSupplementMgt.vue';
import MemberReferenceroom from '@/views/member/MemberReferenceroom.vue';
import MemberCouponGive from '@/views/member/MemberCouponGive.vue';
import MemberMsgSend from '@/views/member/MemberMsgSend.vue';
import MemberPartnerMsgSend from '@/views/member/MemberPartnerMsgSend.vue';
import MemberDuplyUserLimit from '@/views/member/MemberDuplyUserLimit.vue';
import MemberLogIpHistory from '@/views/member/MemberLogIpHistory.vue';
import MemberShareUserLimit from '@/views/member/MemberShareUserLimit.vue';
import MemberCounseling from '@/views/member/MemberCounseling.vue';
import MemberCounselingWrite from '@/views/member/MemberCounselingWrite.vue';
import MemberCounselingView from '@/views/member/MemberCounselingView.vue';
//강좌/교재
import LectureSearch from '@/views/lecture/LectureSearch.vue';
import LectureBookSearch from '@/views/lecture/LectureBookSearch.vue';
import LectureUserChoiceOnline from '@/views/lecture/LectureUserChoiceOnline.vue';
import LectureUserChoiceOnlinePackage from '@/views/lecture/LectureUserChoiceOnlinePackage.vue';
import LectureUserChoiceBook from '@/views/lecture/LectureUserChoiceBook.vue';
import LectureMemberAuthDevice from '@/views/lecture/LectureMemberAuthDevice.vue';
import LectureUserChoiceMerch from '@/views/lecture/LectureUserChoiceMerch.vue';
import LectureCourseChoice from '@/views/lecture/LectureCourseChoice.vue';
import LectureGoodsChoice from '@/views/lecture/LectureGoodsChoice.vue';
import LectureGoodsChoicePackage from '@/views/lecture/LectureGoodsChoicePackage.vue';
import LectureBonusChoice from '@/views/lecture/LectureBonusChoice.vue';
import LectureBonusChoicePackage from '@/views/lecture/LectureBonusChoicePackage.vue';
import LectureAuthCopy from '@/views/lecture/LectureAuthCopy.vue';
import LectureAuthCopyPackage from '@/views/lecture/LectureAuthCopyPackage.vue';
import LectureAttendStatistics from '@/views/lecture/LectureAttendStatistics.vue';
import LectureLiveChat from '@/views/lecture/LectureLiveChat.vue';
import LectureCourseSearch from '@/views/lecture/LectureCourseSearch.vue';
import LectureClientSearch from '@/views/lecture/LectureClientSearch.vue';
import LectureClientSearchSAP from '@/views/lecture/LectureClientSearchSAP.vue';
import LectureBookShopping from '@/views/lecture/LectureBookShopping.vue';
import LectureSearchPackage from '@/views/lecture/LectureSearchPackage.vue';
import LectureSearchPackageGoods from '@/views/lecture/LectureSearchPackageGoods.vue';
import LectureSearchPlus from '@/views/lecture/LectureSearchPlus.vue';
import LectureCouponSet from '@/views/lecture/LectureCouponSet.vue';
import LectureCategoryMgt from '@/views/lecture/LectureCategoryMgt.vue';
import LectureUpdateMgt from '@/views/lecture/LectureUpdateMgt.vue';
import LectureCorrectWrite from '@/views/lecture/LectureCorrectWrite.vue';
import LectureCorrectView from '@/views/lecture/LectureCorrectView.vue';
import LectureCorrectMgt from '@/views/lecture/LectureCorrectMgt.vue';
import LectureLiveAttend from '@/views/lecture/LectureLiveAttend.vue';
import LectureSearchCustomCourse from '@/views/lecture/LectureSearchCustomCourse.vue';
import LectureSearchCustomBook from '@/views/lecture/LectureSearchCustomBook.vue';
//결제
import PaymentOrderOnline from '@/views/payment/PaymentOrderOnline.vue';
import PaymentOrderDirect from '@/views/payment/PaymentOrderDirect.vue';
import CheckGuide from '@/views/payment/CheckGuide.vue';
import PaymentCardFreeWrite from '@/views/payment/PaymentCardFreeWrite.vue';
import PaymentCardFreeView from '@/views/payment/PaymentCardFreeView.vue';
import PaymentCouponLecture from '@/views/payment/PaymentCouponLecture.vue';
import PaymentCouponGoods from '@/views/payment/PaymentCouponGoods.vue';
import PaymentCouponBook from '@/views/payment/PaymentCouponBook.vue';
import PaymentCouponLectureExc from '@/views/payment/PaymentCouponLectureExc.vue';
import PaymentCouponGoodsExc from '@/views/payment/PaymentCouponGoodsExc.vue';
import PaymentCouponBookExc from '@/views/payment/PaymentCouponBookExc.vue';
import PaymentCouponOffering from '@/views/payment/PaymentCouponOffering.vue';
import PaymentCouponUsing from '@/views/payment/PaymentCouponUsing.vue';
import PaymentCouponRandom from '@/views/payment/PaymentCouponRandom.vue';
//모의고사
import MocktestChange from '@/views/mocktest/MocktestChange.vue';
import MocktestApplicants from '@/views/mocktest/MocktestApplicants.vue';
import MocktestMultiTestPoint from '@/views/mocktest/MocktestMultiTestPoint.vue';
import MocktestMonthTestPoint from '@/views/mocktest/MocktestMonthTestPoint.vue';
import MocktestMemberAuth from '@/views/mocktest/MocktestMemberAuth.vue';
//게시판 관리
import BbsBasicReply from '@/views/bbs/BbsBasicReply.vue';
import BbsBasicReplyView from '@/views/bbs/BbsBasicReplyView.vue';
import BbsBasicReplyWrite from '@/views/bbs/BbsBasicReplyWrite.vue';
import BbsCounselPrintDirect from '@/views/bbs/BbsCounselPrintDirect.vue';
import BbsCounselPrintTeacher from '@/views/bbs/BbsCounselPrintTeacher.vue';
import BbsCompetitionCode from '@/views/bbs/BbsCompetitionCode.vue';
import BbsCounselScheduleWrite from '@/views/bbs/BbsCounselScheduleWrite.vue';
import BbsCounselScheduleView from '@/views/bbs/BbsCounselScheduleView.vue';
import BbsCounselScheduleTeacherWrite from '@/views/bbs/BbsCounselScheduleTeacherWrite.vue';
import BbsCounselScheduleTeacherView from '@/views/bbs/BbsCounselScheduleTeacherView.vue';
import BbsCounselTeacherMgt from '@/views/bbs/BbsCounselTeacherMgt.vue';
import BbsNoticeClassroomWrite from '@/views/bbs/BbsNoticeClassroomWrite.vue';
import BbsNoticeClassroomView from '@/views/bbs/BbsNoticeClassroomView.vue';
import BbsTeacherRealHitWrite from '@/views/bbs/BbsTeacherRealHitWrite.vue';
import BbsTeacherRealHitView from '@/views/bbs/BbsTeacherRealHitView.vue';
import InfoFaqCategory from '@/views/bbs/InfoFaqCategory.vue';
//사이트 관리
import SiteTeacherImage from '@/views/site/SiteTeacherImage.vue';
//메시지 관리
import MsgOftenList from '@/views/message/MsgOftenList.vue';
import MsgMacro from '@/views/message/MsgMacro.vue';
import MsgSystemWrite from '@/views/message/MsgSystemWrite.vue';
import MsgSystemView from '@/views/message/MsgSystemView.vue';
import MsgSendStatus from '@/views/message/MsgSendStatus.vue';
import MsgSendStatusUser from '@/views/message/MsgSendStatusUser.vue';
import MsgSendStatusReserve from '@/views/message/MsgSendStatusReserve.vue';
import MsgResend from '@/views/message/MsgResend.vue';
import MsgResendUser from '@/views/message/MsgResendUser.vue';
import MsgLmsStatus from '@/views/message/MsgLmsStatus.vue';
import MsgLmsResend from '@/views/message/MsgLmsResend.vue';
import MsgLecture from '@/views/message/MsgLecture.vue';
//관리자
import MngGroupSetting from '@/views/manager/MngGroupSetting.vue';
//강사용 시스템
import TeacherCounsel from '@/views/teacher/TeacherCounsel.vue';
import TeacherQuestionWrite from '@/views/teacher/TeacherQuestionWrite.vue';
import TeacherQuestionView from '@/views/teacher/TeacherQuestionView.vue';
import TeacherQuestionAnswer from '@/views/teacher/TeacherQuestionAnswer.vue';
import TeacherMsgSend from '@/views/teacher/TeacherMsgSend.vue';
import TeacherPassword from '@/views/teacher/TeacherPassword.vue';
import TeacherLiveChat from '@/views/teacher/TeacherLiveChat.vue';
// 학원 관리
import SchoolAcademyLecture from '@/views/school/SchoolAcademyLecture.vue';
import SchoolOnlineLecture from '@/views/school/SchoolOnlineLecture.vue';
import SchoolBookIdea from '@/views/school/SchoolBookIdea.vue';
import SchoolBookIvy from '@/views/school/SchoolBookIvy.vue';
import SchoolGoodsSearch from '@/views/school/SchoolGoodsSearch.vue';
// qr코드
import SingleCourseSubjectQr from '@/views/lecture/SingleCourseSubjectQr.vue';

const mkRoutes = [
  // { path: '/:catchAll(.*)', component: NotFound },
  //////////// src Root ////////////
  { path: '/mkup/loading', name: 'Loading', component: Loading,},
  { path: '/mkup/layout', name: 'Layout', component: Layout,},
  { path: '/mkup/draggable', name: 'Draggable', component: Draggable,},
  { path: '/mkup/worklist', name: 'Worklist', component: Worklist, },
  { path: '/mkup/uicomponent', name: 'Uicomponent', component: Uicomponent,},
  { path: '/mkup/chartSample', name: 'ChartSample', component: ChartSample,},
  { path: '/mkup/error', name: 'Error', component: Error,},

  //////////// 본창 ////////////
  //진입
  { path: '/mkup/login', name: 'Login', component: Login, },
  { path: '/mkup/join', name: 'Join', component: Join, },
  { path: '/mkup/findAccount', name: 'FindAccount', component: FindAccount, },
  { path: '/mkup/loginT', name: 'LoginTeacher', component: LoginTeacher, },
  { path: '/mkup/findAccountT', name: 'FindAccountTeacher', component: FindAccountTeacher, },
  //통계
  { path: '/mkup/statistics/visitSite', name: 'VisitSite', component: VisitSite },
  { path: '/mkup/statistics/userSignup', name: 'UserSignup', component: UserSignup },
  { path: '/mkup/statistics/userType', name: 'UserType', component: UserType },
  { path: '/mkup/statistics/userStatus', name: 'UserStatus', component: UserStatus },
  { path: '/mkup/statistics/userNonePay', name: 'UserNonePay', component: UserNonePay },
  { path: '/mkup/statistics/counselCall', name: 'CounselCall', component: CounselCall },
  { path: '/mkup/statistics/counselCall/use', name: 'CounselCallUse', component: CounselCallUse },
  { path: '/mkup/statistics/counselCall/refund', name: 'CounselCallRefund', component: CounselCallRefund },
  { path: '/mkup/statistics/counselCall/study', name: 'CounselCallStudy', component: CounselCallStudy },
  { path: '/mkup/statistics/counselCall/etc', name: 'CounselCallEtc', component: CounselCallEtc },
  { path: '/mkup/statistics/counselOne', name: 'CounselOne', component: CounselOne },
  { path: '/mkup/statistics/counselOne/use', name: 'CounselOneUse', component: CounselOneUse },
  { path: '/mkup/statistics/counselOne/refund', name: 'CounselOneRefund', component: CounselOneRefund },
  { path: '/mkup/statistics/counselOne/study', name: 'CounselOneStudy', component: CounselOneStudy },
  { path: '/mkup/statistics/counselOne/etc', name: 'CounselOneEtc', component: CounselOneEtc },
  { path: '/mkup/statistics/counselOffline', name: 'CounselOffline', component: CounselOffline },
  { path: '/mkup/statistics/indicatorAnnual', name: 'IndicatorAnnual', component: IndicatorAnnual },
  { path: '/mkup/statistics/indicatorCourse', name: 'IndicatorCourse', component: IndicatorCourse },
  { path: '/mkup/statistics/indicatorPayment', name: 'IndicatorPayment', component: IndicatorPayment },
  { path: '/mkup/statistics/indicatorRefund', name: 'IndicatorRefund', component: IndicatorRefund },
  { path: '/mkup/statistics/indicatorRecourse', name: 'IndicatorRecourse', component: IndicatorRecourse },
  { path: '/mkup/statistics/indicatorSales', name: 'IndicatorSales', component: IndicatorSales },
  { path: '/mkup/statistics/accountMgt', name: 'AccountMgt', component: AccountMgt },
  { path: '/mkup/statistics/accountFee', name: 'AccountFee', component: AccountFee },
  //회원/교수
  { path: '/mkup/member/userMgt', name: 'User', component: UserMgt },
  { path: '/mkup/member/userMgt/view', name: 'UserView', component: UserMgtView },
  { path: '/mkup/member/userSupport', name: 'UserSupport', component: UserSupport },
  { path: '/mkup/member/userPremium', name: 'UserPremium', component: UserPremium },
  { path: '/mkup/member/partnerAgency', name: 'PartnerAgency', component: PartnerAgency },
  { path: '/mkup/member/partnerAgency/write', name: 'PartnerAgencyWrite', component: PartnerAgencyWrite },
  { path: '/mkup/member/partnerAgency/view', name: 'PartnerAgencyView', component: PartnerAgencyView },
  { path: '/mkup/member/universityAgency', name: 'UniversityAgency', component: UniversityAgency },
  { path: '/mkup/member/teacher', name: 'Teacher', component: Teacher },
  { path: '/mkup/member/teacher/write', name: 'TeacherWrite', component: TeacherWrite },
  { path: '/mkup/member/teacher/view', name: 'TeacherView', component: TeacherView },
  { path: '/mkup/member/logDuply', name: 'LogDuply', component: LogDuply },
  { path: '/mkup/member/logDuply/view', name: 'LogDuplyView', component: LogDuplyView },
  { path: '/mkup/member/logShare', name: 'LogShare', component: LogShare },
  //강좌/교재
  { path: '/mkup/lecture/singleCourse', name: 'SingleCourse', component: SingleCourse },
  { path: '/mkup/lecture/singleCourseRegHome', name: 'SingleCourseRegHome', component: SingleCourseRegHome },
  { path: '/mkup/lecture/singleCourse/write', name: 'SingleCourseWrite', component: SingleCourseWrite },
  { path: '/mkup/lecture/singleCourse/offline', name: 'SingleCourseViewOffline', component: SingleCourseViewOffline },
  { path: '/mkup/lecture/singleCourse/live', name: 'SingleCourseViewLive', component: SingleCourseViewLive },
  { path: '/mkup/lecture/singleCourse/player', name: 'SingleCourseViewPlayer', component: SingleCourseViewPlayer },
  { path: '/mkup/lecture/packageCourse', name: 'PackageCourse', component: PackageCourse },
  { path: '/mkup/lecture/packageCoursePremiumPolicy', name: 'PackageCoursePremiumPolicy', component: PackageCoursePremiumPolicy },
  { path: '/mkup/lecture/packageCourse/write', name: 'PackageCourseWrite', component: PackageCourseWrite },
  { path: '/mkup/lecture/packageCourse/basic', name: 'PackageCourseBasic', component: PackageCourseBasic },
  { path: '/mkup/lecture/packageCourse/premium', name: 'PackageCoursePremium', component: PackageCoursePremium },
  { path: '/mkup/lecture/packageCourse/premiumPlus', name: 'PackageCoursePremiumPlus', component: PackageCoursePremiumPlus },
  { path: '/mkup/lecture/liveCourse', name: 'LiveCourse', component: LiveCourse },
  { path: '/mkup/lecture/customCourse', name: 'CustomCourse', component: CustomCourse },
  { path: '/mkup/lecture/customCourse/write', name: 'CustomCourseWrite', component: CustomCourseWrite },
  { path: '/mkup/lecture/customCourse/view', name: 'CustomCourseView', component: CustomCourseView },
  { path: '/mkup/lecture/freeCourse', name: 'FreeCourse', component: FreeCourse },
  { path: '/mkup/lecture/freeCourse/write', name: 'FreeCourseWrite', component: FreeCourseWrite },
  { path: '/mkup/lecture/freeCourse/view', name: 'FreeCourseView', component: FreeCourseView },
  { path: '/mkup/lecture/todayUpdate', name: 'TodayUpdate', component: TodayUpdate },
  { path: '/mkup/lecture/bookStockMgt', name: 'BookStockMgt', component: BookStockMgt },
  { path: '/mkup/lecture/bookMgt', name: 'BookMgt', component: BookMgt },
  { path: '/mkup/lecture/bookMgt/write', name: 'BookMgtWrite', component: BookMgtWrite },
  { path: '/mkup/lecture/bookMgt/view', name: 'BookMgtView', component: BookMgtView },
  // { path: '/mkup/lecture/bookReceive', name: 'BookReceive', component: BookReceive },
  { path: '/mkup/lecture/bookShopping', name: 'BookShopping', component: BookShopping },
  { path: '/mkup/lecture/bookCustom', name: 'BookCustom', component: BookCustom },
  { path: '/mkup/lecture/bookCustom/write', name: 'BookCustomWrite', component: BookCustomWrite },
  { path: '/mkup/lecture/bookCustom/view', name: 'BookCustomView', component: BookCustomView },
  { path: '/mkup/lecture/bookClient', name: 'BookClient', component: BookClient },
  { path: '/mkup/lecture/bookClient/write', name: 'BookClientWrite', component: BookClientWrite },
  { path: '/mkup/lecture/bookClient/view', name: 'BookClientView', component: BookClientView },
  { path: '/mkup/lecture/deviceMgt', name: 'DeviceMgt', component: DeviceMgt },
  { path: '/mkup/lecture/deviceMgt/write', name: 'DeviceMgtWrite', component: DeviceMgtWrite },
  { path: '/mkup/lecture/deviceMgt/view', name: 'DeviceMgtView', component: DeviceMgtView },
  { path: '/mkup/lecture/deviceShopping', name: 'DeviceShopping', component: DeviceShopping },
  { path: '/mkup/lecture/merchMgt', name: 'MerchMgt', component: MerchMgt },
  { path: '/mkup/lecture/merchMgt/write', name: 'MerchMgtWrite', component: MerchMgtWrite },
  { path: '/mkup/lecture/merchMgt/view', name: 'MerchMgtView', component: MerchMgtView },
  { path: '/mkup/lecture/merchShopping', name: 'MerchShopping', component: MerchShopping },
  //결제
  { path: '/mkup/payment/paymentMgt', name: 'PaymentMgt', component: PaymentMgt, },
  { path: '/mkup/payment/refundMgt', name: 'RefundMgt', component: RefundMgt, },
  { path: '/mkup/payment/dailyCash', name: 'DailyCash', component: DailyCash, },
  { path: '/mkup/payment/dailyCard', name: 'DailyCard', component: DailyCard, },
  { path: '/mkup/payment/interestFree', name: 'InterestFree', component: InterestFree, },
  { path: '/mkup/payment/couponMgt', name: 'CouponMgt', component: CouponMgt, },
  { path: '/mkup/payment/couponMgt/write', name: 'CouponMgtWrite', component: CouponMgtWrite, },
  { path: '/mkup/payment/couponMgt/view', name: 'CouponMgtView', component: CouponMgtView, },
  { path: '/mkup/payment/couponMgt/view2', name: 'CouponMgtView2', component: CouponMgtView2, },
  { path: '/mkup/payment/couponSales', name: 'CouponSales', component: CouponSales, },
  //모의고사
  { path: '/mkup/mocktest/multiTest', name: 'MultiTest', component: MultiTest, },
  { path: '/mkup/mocktest/multiTest/write', name: 'MultiTestWrite', component: MultiTestWrite, },
  { path: '/mkup/mocktest/multiTest/view', name: 'MultiTestView', component: MultiTestView, },
  { path: '/mkup/mocktest/monthTest', name: 'MonthTest', component: MonthTest, },
  { path: '/mkup/mocktest/monthTest/write', name: 'MonthTestWrite', component: MonthTestWrite, },
  { path: '/mkup/mocktest/monthTest/view', name: 'MonthTestView', component: MonthTestView, },
  { path: '/mkup/mocktest/paperMgt', name: 'PaperMgt', component: PaperMgt, },
  { path: '/mkup/mocktest/paperMgt/write', name: 'PaperMgtWrite', component: PaperMgtWrite, },
  { path: '/mkup/mocktest/paperMgt/view', name: 'PaperMgtView', component: PaperMgtView, },
  { path: '/mkup/mocktest/formatMgt', name: 'FormatMgt', component: FormatMgt, },
  //게시판 관리
  { path: '/mkup/bbs/replyReview', name: 'ReplyReview', component: ReplyReview, },
  { path: '/mkup/bbs/replyReview/course', name: 'ReplyReviewCourseView', component: ReplyReviewCourseView, },
  { path: '/mkup/bbs/replyReview/device', name: 'ReplyReviewDeviceView', component: ReplyReviewDeviceView, },
  { path: '/mkup/bbs/replyReview/goods', name: 'ReplyReviewGoodsView', component: ReplyReviewGoodsView, },
  { path: '/mkup/bbs/replyReview/etc', name: 'ReplyReviewEtcView', component: ReplyReviewEtcView, },
  { path: '/mkup/bbs/replyQna', name: 'ReplyQna', component: ReplyQna, },
  { path: '/mkup/bbs/replyQna/view', name: 'ReplyQnaView', component: ReplyQnaView, },
  { path: '/mkup/bbs/replyQna/write', name: 'ReplyQnaWrite', component: ReplyQnaWrite, },
  { path: '/mkup/bbs/replyBoard', name: 'ReplyBoard', component: ReplyBoard, },
  { path: '/mkup/bbs/replyBoard/use', name: 'ReplyBoardUseView', component: ReplyBoardUseView, },
  { path: '/mkup/bbs/replyBoard/use2', name: 'ReplyBoardUseView2', component: ReplyBoardUseView2, },
  { path: '/mkup/bbs/replyBoard/licence', name: 'ReplyBoardLicenceView', component: ReplyBoardLicenceView, },
  { path: '/mkup/bbs/replyBoard/licence2', name: 'ReplyBoardLicenceView2', component: ReplyBoardLicenceView2, },
  { path: '/mkup/bbs/replyCounsel', name: 'ReplyCounsel', component: ReplyCounsel, },
  { path: '/mkup/bbs/replyCounsel/direct', name: 'ReplyCounselDirectView', component: ReplyCounselDirectView, },
  { path: '/mkup/bbs/replyCounsel/teacher', name: 'ReplyCounselTeacherView', component: ReplyCounselTeacherView, },
  { path: '/mkup/bbs/replyClean', name: 'ReplyClean', component: ReplyClean, },
  { path: '/mkup/bbs/replyClean/report', name: 'ReplyCleanReportView', component: ReplyCleanReportView, },
  { path: '/mkup/bbs/replyClean/report2', name: 'ReplyCleanReportView2', component: ReplyCleanReportView2, },
  { path: '/mkup/bbs/replyClean/fixed', name: 'ReplyCleanFixedView', component: ReplyCleanFixedView, },
  { path: '/mkup/bbs/replyClean/fixedWrite', name: 'ReplyCleanFixedWrite', component: ReplyCleanFixedWrite, },
  { path: '/mkup/bbs/replyUniversity', name: 'ReplyUniversity', component: ReplyUniversity, },
  { path: '/mkup/bbs/teacherEvent', name: 'TeacherEvent', component: TeacherEvent, },
  { path: '/mkup/bbs/teacherEvent/write', name: 'TeacherEventWrite', component: TeacherEventWrite, },
  { path: '/mkup/bbs/teacherEvent/view', name: 'TeacherEventView', component: TeacherEventView, },
  { path: '/mkup/bbs/teacherInterview', name: 'TeacherInterview', component: TeacherInterview, },
  { path: '/mkup/bbs/teacherInterview/view', name: 'TeacherInterviewView', component: TeacherInterviewView, },
  { path: '/mkup/bbs/teacherRealHit', name: 'TeacherRealHit', component: TeacherRealHit, },
  { path: '/mkup/bbs/teacherRealHit/view', name: 'TeacherRealHitView', component: TeacherRealHitView, },
  { path: '/mkup/bbs/replyStudy', name: 'ReplyStudy', component: ReplyStudy, },
  { path: '/mkup/bbs/replyStudy/view', name: 'ReplyStudyView', component: ReplyStudyView, },
  { path: '/mkup/bbs/noticeNews', name: 'NoticeNews', component: NoticeNews, },
  { path: '/mkup/bbs/noticeNews/write', name: 'NoticeNewsWrite', component: NoticeNewsWrite, },
  { path: '/mkup/bbs/noticeNews/view', name: 'NoticeNewsView', component: NoticeNewsView, },
  { path: '/mkup/bbs/noticeEvent', name: 'NoticeEvent', component: NoticeEvent, },
  { path: '/mkup/bbs/noticeEvent/view', name: 'NoticeEventView', component: NoticeEventView, },
  { path: '/mkup/bbs/noticeEvent/write', name: 'NoticeEventWrite', component: NoticeEventWrite, },
  { path: '/mkup/bbs/noticeClassroom', name: 'NoticeClassroom', component: NoticeClassroom, },
  { path: '/mkup/bbs/infoFaq', name: 'InfoFaq', component: InfoFaq, },
  { path: '/mkup/bbs/infoFaq/write', name: 'InfoFaqWrite', component: InfoFaqWrite, },
  { path: '/mkup/bbs/infoFaq/view', name: 'InfoFaqView', component: InfoFaqView, },
  { path: '/mkup/bbs/infoCounsel', name: 'InfoCounsel', component: InfoCounsel, },
  { path: '/mkup/bbs/infoCounsel/write', name: 'InfoCounselWrite', component: InfoCounselWrite, },
  { path: '/mkup/bbs/infoCounsel/view', name: 'InfoCounselView', component: InfoCounselView, },
  { path: '/mkup/bbs/infoCompetition', name: 'InfoCompetition', component: InfoCompetition, },
  { path: '/mkup/bbs/infoCompetitionWrite', name: 'InfoCompetitionWrite', component: InfoCompetitionWrite, },
  { path: '/mkup/bbs/infoCompetitionView', name: 'InfoCompetitionView', component: InfoCompetitionView, },
  { path: '/mkup/bbs/infoExam', name: 'InfoExam', component: InfoExam, },
  { path: '/mkup/bbs/infoExam/test', name: 'InfoExamTestView', component: InfoExamTestView, },
  { path: '/mkup/bbs/infoExam/testWrite', name: 'InfoExamTestWrite', component: InfoExamTestWrite, },
  { path: '/mkup/bbs/infoExam/news', name: 'InfoExamNewsView', component: InfoExamNewsView, },
  { path: '/mkup/bbs/infoExam/newsWrite', name: 'InfoExamNewsWrite', component: InfoExamNewsWrite, },
  { path: '/mkup/bbs/infoExam/past', name: 'InfoExamPastView', component: InfoExamPastView, },
  { path: '/mkup/bbs/infoExam/pastWrite', name: 'InfoExamPastWrite', component: InfoExamPastWrite, },
  { path: '/mkup/bbs/infoExam/course', name: 'InfoExamCourseView', component: InfoExamCourseView, },
  { path: '/mkup/bbs/infoExam/courseWrite', name: 'InfoExamCourseWrite', component: InfoExamCourseWrite, },
  { path: '/mkup/bbs/infoExam/life', name: 'InfoExamLifeView', component: InfoExamLifeView, },
  { path: '/mkup/bbs/infoExam/lifeWrite', name: 'InfoExamLifeWrite', component: InfoExamLifeWrite, },
  { path: '/mkup/bbs/infoColumn', name: 'InfoColumn', component: InfoColumn, },
  { path: '/mkup/bbs/infoColumn/write', name: 'InfoColumnWrite', component: InfoColumnWrite, },
  { path: '/mkup/bbs/infoColumn/view', name: 'InfoColumnView', component: InfoColumnView, },
  { path: '/mkup/bbs/passReview', name: 'PassReview', component: PassReview, },
  { path: '/mkup/bbs/passReview/write', name: 'PassReviewWrite', component: PassReviewWrite, },
  { path: '/mkup/bbs/passReview/view', name: 'PassReviewView', component: PassReviewView, },
  { path: '/mkup/bbs/passInterview', name: 'PassInterview', component: PassInterview, },
  { path: '/mkup/bbs/passInterview/write', name: 'PassInterviewWrite', component: PassInterviewWrite, },
  { path: '/mkup/bbs/passInterview/view', name: 'PassInterviewView', component: PassInterviewView, },
  //사이트 관리
  { path: '/mkup/site/subjectMgt', name: 'SubjectMgt', component: SubjectMgt, },
  { path: '/mkup/site/subjectMgt/view', name: 'SubjectMgtView', component: SubjectMgtView, },
  { path: '/mkup/site/subjectMgt/view2', name: 'SubjectMgtView2', component: SubjectMgtView2, },
  { path: '/mkup/site/subjectMgt/view3', name: 'SubjectMgtView3', component: SubjectMgtView3, },
  { path: '/mkup/site/navigationGnb', name: 'NavigationGnb', component: NavigationGnb, },
  { path: '/mkup/site/navigationGnb/view', name: 'NavigationGnbView', component: NavigationGnbView, },
  { path: '/mkup/site/navigationGnb/view2', name: 'NavigationGnbViewExc', component: NavigationGnbViewExc, },
  { path: '/mkup/site/navigationLnb', name: 'NavigationLnb', component: NavigationLnb, },
  { path: '/mkup/site/bannerIntro', name: 'BannerIntro', component: BannerIntro, },
  { path: '/mkup/site/bannerLogin', name: 'BannerLogin', component: BannerLogin, },
  { path: '/mkup/site/bannerMain', name: 'BannerMain', component: BannerMain, },
  { path: '/mkup/site/bannerMain/teacher', name: 'BannerMainTeacherView', component:BannerMainTeacherView, },
  { path: '/mkup/site/bannerMain/recommend', name: 'BannerMainRecommendView', component:BannerMainRecommendView, },
  { path: '/mkup/site/bannerSammall', name: 'BannerSammall', component: BannerSammall, },
  { path: '/mkup/site/bannerSpecial', name: 'BannerSpecial', component: BannerSpecial, },
  { path: '/mkup/site/bannerPassReview', name: 'BannerPassReview', component:BannerPassReview, },
  { path: '/mkup/site/termPolicy', name: 'TermPolicy', component: TermPolicy, },
  { path: '/mkup/site/surveyMgt', name: 'SurveyMgt', component: SurveyMgt, },
  { path: '/mkup/site/surveyMgt/write', name: 'SurveyMgtWrite', component: SurveyMgtWrite, },
  { path: '/mkup/site/surveyMgt/view', name: 'SurveyMgtView', component: SurveyMgtView, },
  { path: '/mkup/site/surveyResult', name: 'SurveyResult', component: SurveyResult, },
  { path: '/mkup/site/surveyResult/view', name: 'SurveyResultView', component: SurveyResultView, },
  //메시지 관리
  { path: '/mkup/message/smsLms', name: 'SmsLms', component: SmsLms, },
  { path: '/mkup/message/sendResult', name: 'SendResult', component: SendResult, },
  { path: '/mkup/message/sendToExtract', name: 'SendToExtract', component: SendToExtract, },
  //관리자
  { path: '/mkup/manager/accountManager', name: 'AccountManager', component: AccountManager, },
  { path: '/mkup/manager/accountManagerList/write', name: 'AccountManagerListWrite', component: AccountManagerListWrite, },
  { path: '/mkup/manager/accountManagerList/view', name: 'AccountManagerListView', component: AccountManagerListView, },
  { path: '/mkup/manager/accountTeacher', name: 'AccountTeacher', component: AccountTeacher, },
  { path: '/mkup/manager/accountTeacher/write', name: 'AccountTeacherWrite', component: AccountTeacherWrite, },
  { path: '/mkup/manager/accountTeacher/view', name: 'AccountTeacherView', component: AccountTeacherView, },
  { path: '/mkup/manager/logManager', name: 'LogManager', component: LogManager, },
  { path: '/mkup/manager/logTeacher', name: 'LogTeacher', component: LogTeacher, },
  { path: '/mkup/manager/menuManage', name: 'MenuManage', component: MenuManage, },
  { path: '/mkup/manager/menuManage/view', name: 'MenuManageView', component: MenuManageView, },
  { path: '/mkup/manager/menuTeacher', name: 'MenuTeacher', component: MenuTeacher, },
  { path: '/mkup/manager/policyManage', name: 'PolicyManage', component: PolicyManage, },
  { path: '/mkup/manager/policySubjectCode', name: 'PolicySubjectCode', component: PolicySubjectCode, },
  { path: '/mkup/manager/policySubjectCode/view', name: 'PolicySubjectCodeView', component: PolicySubjectCodeView, },
  { path: '/mkup/manager/applicationClass', name: 'ApplicationClass', component: ApplicationClass, },
  //강사용 시스템
  { path: '/mkup/teacher/statsDaily', name: 'StatsDaily', component: StatsDaily, },
  { path: '/mkup/teacher/statsSales', name: 'StatsSales', component: StatsSales, },
  { path: '/mkup/teacher/statsStudent', name: 'StatsStudent', component: StatsStudent, },
  { path: '/mkup/teacher/studentOnline', name: 'StudentOnline', component: StudentOnline, },
  { path: '/mkup/teacher/studentOnline/view', name: 'StudentOnlineView', component: StudentOnlineView, },
  { path: '/mkup/teacher/student/board', name: 'StudentBoard', component: StudentBoard, },
  { path: '/mkup/teacher/studentDirect', name: 'StudentDirect', component: StudentDirect, },
  { path: '/mkup/teacher/studentDirect/view', name: 'StudentDirectView', component: StudentDirectView, },
  { path: '/mkup/teacher/studentDirect/live', name: 'StudentDirectLive', component: StudentDirectLive, },
  { path: '/mkup/teacher/studentLive', name: 'StudentLive', component: StudentLive, },
  { path: '/mkup/teacher/studentLive/view', name: 'StudentLiveView', component: StudentLiveView, },
  { path: '/mkup/teacher/studentLive/live', name: 'StudentLiveChatView', component: StudentLiveChatView, },
  { path: '/mkup/teacher/learning', name: 'Learning', component: Learning, },
  { path: '/mkup/teacher/learning/write', name: 'LearningWrite', component: LearningWrite, },
  { path: '/mkup/teacher/learning/view', name: 'LearningView', component: LearningView, },
  { path: '/mkup/teacher/counsel', name: 'Counsel', component: Counsel, },
  { path: '/mkup/teacher/mypage', name: 'Mypage', component: Mypage, },
  { path: '/mkup/teacher/onlineMockTest', name: 'OnlineMockTest', component: OnlineMockTest, },
  // 학원 관리
  { path: '/mkup/school/userSale', name: 'UserSale', component: UserSale, },
  { path: '/mkup/school/userSale/product', name: 'UserSaleProduct', component: UserSaleProduct, },
  { path: '/mkup/school/userSale/product/pay', name: 'UserSaleProductPay', component: UserSaleProductPay, },
  { path: '/mkup/school/userSale/locker', name: 'UserSaleLocker', component: UserSaleLocker, },
  { path: '/mkup/school/userSale/locker/pay', name: 'UserSaleLockerPay', component: UserSaleLockerPay, },
  { path: '/mkup/school/lockerMgt', name: 'LockerMgt', component: LockerMgt, },
  { path: '/mkup/school/lockerMgtExtension', name: 'LockerMgtExtension', component: LockerMgtExtension, },

  //////////// 윈도우 팝업 All ////////////
  { path: '/mkup/windowPopup', name: 'WindowPopup', component: WindowPopup,
      children: [
      //src Root
      { path: "windowPopupComponent", component: WindowPopupComponent, meta: { layout: 'popup' } },
      //관리자 시스템 공통
      { path: "adminPassword", component: AdminPassword, meta: { layout: 'popup' } },
      //통계
      //회원/교수
      { path: "mmrLectureChange", component: MemberLectureChange, meta: { layout: 'popup' } },
      { path: "mmrEnrollment", component: MemberEnrollment, meta: { layout: 'popup' } },
      { path: "mmrLectureHistory", component: MemberLectureHistory, meta: { layout: 'popup' } },
      { path: "mmrDirectSwitch", component: MemberDirectSwitch, meta: { layout: 'popup' } },
      { path: "mmrOnlineSwitch", component: MemberOnlineSwitch, meta: { layout: 'popup' } },
      { path: "mmrAttendance", component: MemberAttendance, meta: { layout: 'popup' } },
      { path: "mmrSupplementMgt", component: MemberSupplementMgt, meta: { layout: 'popup' } },
      { path: "mmrReferenceroom", component: MemberReferenceroom, meta: { layout: 'popup' } },
      { path: "mmrCouponGive", component: MemberCouponGive, meta: { layout: 'popup' } },
      { path: "mmrMsgSend", component: MemberMsgSend, meta: { layout: 'popup' } },
      { path: "mmrPartnerMsgSend", component: MemberPartnerMsgSend, meta: { layout: 'popup' } },
      { path: "mmrDuplyUserLimit", component: MemberDuplyUserLimit, meta: { layout: 'popup' } },
      { path: "mmrLogIpHistory", component: MemberLogIpHistory, meta: { layout: 'popup' } },
      { path: "mmrShareUserLimit", component: MemberShareUserLimit, meta: { layout: 'popup' } },
      { path: "mmrCounseling", component: MemberCounseling, meta: { layout: 'popup' } },
      { path: "mmrCounseling/write", component: MemberCounselingWrite, meta: { layout: 'popup' } },
      { path: "mmrCounseling/view", component: MemberCounselingView, meta: { layout: 'popup' } },
      //강좌/교재
      { path: "lceSearch", component: LectureSearch, meta: { layout: 'popup' } },
      { path: "lceBookSearch", component: LectureBookSearch, meta: { layout: 'popup' } },
      { path: "lceUserChoiceOnline", component: LectureUserChoiceOnline, meta: { layout: 'popup' } },
      { path: "lceUserChoiceOnlinePackage", component: LectureUserChoiceOnlinePackage, meta: { layout: 'popup' } },
      { path: "lceUserChoiceBook", component: LectureUserChoiceBook, meta: { layout: 'popup' } },
      { path: "lceMmrAuthDevice", component: LectureMemberAuthDevice, meta: { layout: 'popup' } },
      { path: "lceUserChoiceMerch", component: LectureUserChoiceMerch, meta: { layout: 'popup' } },
      { path: "lceCourseChoice", component: LectureCourseChoice, meta: { layout: 'popup' } },
      { path: "lceGoodsChoice", component: LectureGoodsChoice, meta: { layout: 'popup' } },
      { path: "lceGoodsChoicePackage", component: LectureGoodsChoicePackage, meta: { layout: 'popup' } },
      { path: "lceBonusChoice", component: LectureBonusChoice, meta: { layout: 'popup' } },
      { path: "lceBonusChoicePackage", component: LectureBonusChoicePackage, meta: { layout: 'popup' } },
      { path: "lceAuthCopy", component: LectureAuthCopy, meta: { layout: 'popup' } },
      { path: "lceAuthCopyPackage", component: LectureAuthCopyPackage, meta: { layout: 'popup' } },
      { path: "lceAttendStatistics", component: LectureAttendStatistics, meta: { layout: 'popup' } },
      { path: "lceLiveChat", component: LectureLiveChat, meta: { layout: 'popup' } },
      { path: "lceCourseSearch", component: LectureCourseSearch, meta: { layout: 'popup' } },
      { path: "lceClientSearch", component: LectureClientSearch, meta: { layout: 'popup' } },
      { path: "lectureClientSearchSAP", component: LectureClientSearchSAP, meta: { layout: 'popup' } },
      { path: "lceBookShopping", component: LectureBookShopping, meta: { layout: 'popup' } },
      { path: "lceSearchPackage", component: LectureSearchPackage, meta: { layout: 'popup' } },
      { path: "lceSearchPackageGoods", component: LectureSearchPackageGoods, meta: { layout: 'popup' } },
      { path: "lceSearchPlus", component: LectureSearchPlus, meta: { layout: 'popup' } },
      { path: "lceCouponSet", component: LectureCouponSet, meta: { layout: 'popup' } },
      { path: "lceCategoryMgt", component: LectureCategoryMgt, meta: { layout: 'popup' } },
      { path: "lceUpdateMgt", component: LectureUpdateMgt, meta: { layout: 'popup' } },
      { path: "lceCorrectWrite", component: LectureCorrectWrite, meta: { layout: 'popup' } },
      { path: "lceCorrectView", component: LectureCorrectView, meta: { layout: 'popup' } },
      { path: "lceCorrectMgt", component: LectureCorrectMgt, meta: { layout: 'popup' } },
      { path: "lceLiveAttend", component: LectureLiveAttend, meta: { layout: 'popup' } },
      { path: "lceSearchCustomCourse", component: LectureSearchCustomCourse, meta: { layout: 'popup' } },
      { path: "lceSearchCustomBook", component: LectureSearchCustomBook, meta: { layout: 'popup' } },
      { path: "SingleCourseSubjectQr", component: SingleCourseSubjectQr, meta: { layout: 'popup' } },
      //결제
      { path: "pmtOrderOnline", component: PaymentOrderOnline, meta: { layout: 'popup' } },
      { path: "pmtOrderDirect", component: PaymentOrderDirect, meta: { layout: 'popup' } },
      { path: "chkGuide", component: CheckGuide, meta: { layout: 'popup' } },
      { path: "pmtCardFreeWrite", component: PaymentCardFreeWrite, meta: { layout: 'popup' } },
      { path: "pmtCardFreeView", component: PaymentCardFreeView, meta: { layout: 'popup' } },
      { path: "pmtCouponLecture", component: PaymentCouponLecture, meta: { layout: 'popup' } },
      { path: "pmtCouponGoods", component: PaymentCouponGoods, meta: { layout: 'popup' } },
      { path: "pmtCouponBook", component: PaymentCouponBook, meta: { layout: 'popup' } },
      { path: "pmtCouponLectureExc", component: PaymentCouponLectureExc, meta: { layout: 'popup' } },
      { path: "pmtCouponGoodsExc", component: PaymentCouponGoodsExc, meta: { layout: 'popup' } },
      { path: "pmtCouponBookExc", component: PaymentCouponBookExc, meta: { layout: 'popup' } },
      { path: "pmtCouponOffering", component: PaymentCouponOffering, meta: { layout: 'popup' } },
      { path: "pmtCouponUsing", component: PaymentCouponUsing, meta: { layout: 'popup' } },
      { path: "pmtCouponRandom", component: PaymentCouponRandom, meta: { layout: 'popup' } },
      //모의고사
      { path: "mocktestChange", component: MocktestChange, meta: { layout: 'popup' } },
      { path: "mocktestApplicants", component: MocktestApplicants, meta: { layout: 'popup' } },
      { path: "mocktestMultiTestPoint", component: MocktestMultiTestPoint, meta: { layout: 'popup' } },
      { path: "mocktestMonthTestPoint", component: MocktestMonthTestPoint, meta: { layout: 'popup' } },
      { path: "mocktestMemberAuth", component: MocktestMemberAuth, meta: { layout: 'popup' } },
      //게시판 관리
      { path: "bbsBasicReply", component: BbsBasicReply, meta: { layout: 'popup' } },
      { path: "bbsBasicReply/view", component: BbsBasicReplyView, meta: { layout: 'popup' } },
      { path: "bbsBasicReply/write", component: BbsBasicReplyWrite, meta: { layout: 'popup' } },
      { path: "bbsCounselPrintD", component: BbsCounselPrintDirect, meta: { layout: 'popup' } },
      { path: "bbsCounselPrintT", component: BbsCounselPrintTeacher, meta: { layout: 'popup' } },
      { path: "bbsCompetitionCode", component: BbsCompetitionCode, meta: { layout: 'popup' } },
      { path: "bbsCounselSchedule/write", component: BbsCounselScheduleWrite, meta: { layout: 'popup' } },
      { path: "bbsCounselSchedule/view", component: BbsCounselScheduleView, meta: { layout: 'popup' } },
      { path: "bbsCounselScheduleTeacher/write", component: BbsCounselScheduleTeacherWrite, meta: { layout: 'popup' } },
      { path: "bbsCounselScheduleTeacher/view", component: BbsCounselScheduleTeacherView, meta: { layout: 'popup' } },
      { path: "bbsCounselTeacherMgt", component: BbsCounselTeacherMgt, meta: { layout: 'popup' } },
      { path: "bbsNoticeClassroom/write", component: BbsNoticeClassroomWrite, meta: { layout: 'popup' } },
      { path: "bbsNoticeClassroom/view", component: BbsNoticeClassroomView, meta: { layout: 'popup' } },
      { path: "bbsTeacherRealHit/write", component: BbsTeacherRealHitWrite, meta: { layout: 'popup' } },
      { path: "bbsTeacherRealHit/view", component: BbsTeacherRealHitView, meta: { layout: 'popup' } },
      { path: "infoFaqCategory", component: InfoFaqCategory, meta: { layout: 'popup' } },
      //사이트 관리
      { path: "siteTeacherImage", component: SiteTeacherImage, meta: { layout: 'popup' } },
      //메시지 관리
      { path: "msgOftenList", component: MsgOftenList, meta: { layout: 'popup' } },
      { path: "msgMacro", component: MsgMacro, meta: { layout: 'popup' } },
      { path: "msgSystemWrite", component: MsgSystemWrite, meta: { layout: 'popup' } },
      { path: "msgSystemView", component: MsgSystemView, meta: { layout: 'popup' } },
      { path: "msgSendStatus", component: MsgSendStatus, meta: { layout: 'popup' } },
      { path: "msgSendStatusUser", component: MsgSendStatusUser, meta: { layout: 'popup' } },
      { path: "msgSendStatusReserve", component: MsgSendStatusReserve, meta: { layout: 'popup' } },
      { path: "msgResend", component: MsgResend, meta: { layout: 'popup' } },
      { path: "msgResendUser", component: MsgResendUser, meta: { layout: 'popup' } },
      { path: "msgLmsStatus", component: MsgLmsStatus, meta: { layout: 'popup' } },
      { path: "msgLmsResend", component: MsgLmsResend, meta: { layout: 'popup' } },
      { path: "msgLecture", component: MsgLecture, meta: { layout: 'popup' } },
      //관리자
      { path: "mngGroupSetting", component: MngGroupSetting, meta: { layout: 'popup' } },
      //강사용 시스템
      { path: "teacherCounsel", component: TeacherCounsel, meta: { layout: 'popup' } },
      { path: "teacherQuestionWrite", component: TeacherQuestionWrite, meta: { layout: 'popup' } },
      { path: "teacherQuestionView", component: TeacherQuestionView, meta: { layout: 'popup' } },
      { path: "teacherQuestionAnswer", component: TeacherQuestionAnswer, meta: { layout: 'popup' } },
      { path: "teacherMsgSend", component: TeacherMsgSend, meta: { layout: 'popup' } },
      { path: "teacherPw", component: TeacherPassword, meta: { layout: 'popup' } },
      { path: "teacherLiveChat", component: TeacherLiveChat, meta: { layout: 'popup' } },
      // 학원 관리
      { path: "schAcademyLecture", component: SchoolAcademyLecture, meta: { layout: 'popup' } },
      { path: "schOnlineLecture", component: SchoolOnlineLecture, meta: { layout: 'popup' } },
      { path: "schBookIdea", component: SchoolBookIdea, meta: { layout: 'popup' } },
      { path: "schBookIvy", component: SchoolBookIvy, meta: { layout: 'popup' } },
      { path: "schGoodsSearch", component: SchoolGoodsSearch, meta: { layout: 'popup' } },
    ],
  },
];

export default mkRoutes;
