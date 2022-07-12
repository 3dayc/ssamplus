//////////// src Root ////////////
import Worklist from '@/views/Worklist.vue';
import Loading from '@/views/Loading.vue';
import Layout from '@/views/Layout.vue';
import LayoutBbs from '@/views/LayoutBbs.vue';
import LayoutTitle from '@/views/LayoutTitle.vue';
import Uicomponent from '@/views/Uicomponent.vue';
import ChartSample from '@/views/ChartSample.vue';
import Error from '@/views/Error.vue';
import WindowPopupComponent from '@/views/WindowPopupComponent.vue';
import Mkguide from '@/views/mkupGuide/Index.vue';
import EventPreview from '@/views/EventPreview.vue';

//////////// 본창 ////////////
//진입(메인)
import Main from '@/views/main/Main.vue';
import Login from '@/views/main/Login.vue';
import Join from '@/views/main/Join.vue';
import Intro from '@/views/main/Intro.vue';
import LoginSnsNaver from '@/views/main/LoginSnsNaver.vue';
import LoginSnsKaKao from '@/views/main/LoginSnsKaKao.vue';
import FindAccount from '@/views/main/FindAccount.vue';
//쌤팩
import SsampackIndex from '@/views/ssampack/Index.vue';
//수강신청
import LectureIndex from '@/views/lecture/Index.vue';
//수강신청 (과목별 목록)
import LectureIndexMjedu from '@/views/lecture/IndexMjedu.vue';
import LectureIndexMjchild from '@/views/lecture/IndexMjchild.vue';
import LectureIndexMjmiddle from '@/views/lecture/IndexMjmiddle.vue';
import LectureIndexMjmiddle01 from '@/views/lecture/IndexMjmiddle01.vue';
import LectureIndexMjmiddle02 from '@/views/lecture/IndexMjmiddle02.vue';
import LectureIndexMjmiddle03 from '@/views/lecture/IndexMjmiddle03.vue';
import LectureIndexMjmiddle04 from '@/views/lecture/IndexMjmiddle04.vue';
import LectureIndexMjmiddle05 from '@/views/lecture/IndexMjmiddle05.vue';
import LectureIndexMjmiddle06 from '@/views/lecture/IndexMjmiddle06.vue';
import LectureIndexMjmiddle07 from '@/views/lecture/IndexMjmiddle07.vue';
import LectureIndexMjmiddle08 from '@/views/lecture/IndexMjmiddle08.vue';
import LectureIndexMjmiddle09 from '@/views/lecture/IndexMjmiddle09.vue';
import LectureIndexMjmiddle10 from '@/views/lecture/IndexMjmiddle10.vue';
import LectureIndexMjmiddle11 from '@/views/lecture/IndexMjmiddle11.vue';
import LectureIndexMjmiddle12 from '@/views/lecture/IndexMjmiddle12.vue';
import LectureIndexMjss from '@/views/lecture/IndexMjss.vue';
import LectureIndexMjss01 from '@/views/lecture/IndexMjss01.vue';
import LectureIndexMjss02 from '@/views/lecture/IndexMjss02.vue';
import LectureIndexMjss03 from '@/views/lecture/IndexMjss03.vue';
import LectureIndexMjss04 from '@/views/lecture/IndexMjss04.vue';
import LectureIndexMjss05 from '@/views/lecture/IndexMjss05.vue';
import LectureIndexMjss06 from '@/views/lecture/IndexMjss06.vue';
import LectureIndexMjnomj from '@/views/lecture/IndexMjnomj.vue';
import LectureIndexMjspe from '@/views/lecture/IndexMjspe.vue';
import LectureIndexMjessay from '@/views/lecture/IndexMjessay.vue';
import LectureIndexMjhistory from '@/views/lecture/IndexMjhistory.vue';
import LectureIndexMjlibr from '@/views/lecture/IndexMjlibr.vue';
import LectureTeacher from '@/views/lecture/Teacher.vue';
//수강신청 (선생님 별 홈)
import LectureMjedu01 from '@/views/lecture/LectureMjedu01.vue';
import LectureMjedu02 from '@/views/lecture/LectureMjedu02.vue';
import LectureMjedu03 from '@/views/lecture/LectureMjedu03.vue';
import LectureMjchild01 from '@/views/lecture/LectureMjchild01.vue';
import LectureMjchild02 from '@/views/lecture/LectureMjchild02.vue';
import LectureMjchild03 from '@/views/lecture/LectureMjchild03.vue';
import LectureMjmiddle011 from '@/views/lecture/LectureMjmiddle011.vue';
import LectureMjmiddle012 from '@/views/lecture/LectureMjmiddle012.vue';
import LectureMjmiddle013 from '@/views/lecture/LectureMjmiddle013.vue';
import LectureMjmiddle014 from '@/views/lecture/LectureMjmiddle014.vue';
import LectureMjmiddle021 from '@/views/lecture/LectureMjmiddle021.vue';
import LectureMjmiddle022 from '@/views/lecture/LectureMjmiddle022.vue';
import LectureMjmiddle023 from '@/views/lecture/LectureMjmiddle023.vue';
import LectureMjmiddle024 from '@/views/lecture/LectureMjmiddle024.vue';
import LectureMjmiddle031 from '@/views/lecture/LectureMjmiddle031.vue';
import LectureMjmiddle032 from '@/views/lecture/LectureMjmiddle032.vue';
import LectureMjmiddle033 from '@/views/lecture/LectureMjmiddle033.vue';
import LectureMjmiddle034 from '@/views/lecture/LectureMjmiddle034.vue';
import LectureMjmiddle041 from '@/views/lecture/LectureMjmiddle041.vue';
import LectureMjmiddle042 from '@/views/lecture/LectureMjmiddle042.vue';
import LectureMjmiddle043 from '@/views/lecture/LectureMjmiddle043.vue';
import LectureMjmiddle044 from '@/views/lecture/LectureMjmiddle044.vue';
import LectureMjmiddle051 from '@/views/lecture/LectureMjmiddle051.vue';
import LectureMjmiddle061 from '@/views/lecture/LectureMjmiddle061.vue';
import LectureMjmiddle062 from '@/views/lecture/LectureMjmiddle062.vue';
import LectureMjmiddle063 from '@/views/lecture/LectureMjmiddle063.vue';
import LectureMjmiddle071 from '@/views/lecture/LectureMjmiddle071.vue';
import LectureMjmiddle072 from '@/views/lecture/LectureMjmiddle072.vue';
import LectureMjmiddle073 from '@/views/lecture/LectureMjmiddle073.vue';
import LectureMjmiddle081 from '@/views/lecture/LectureMjmiddle081.vue';
import LectureMjmiddle091 from '@/views/lecture/LectureMjmiddle091.vue';
import LectureMjmiddle101 from '@/views/lecture/LectureMjmiddle101.vue';
import LectureMjmiddle111 from '@/views/lecture/LectureMjmiddle111.vue';
import LectureMjmiddle121 from '@/views/lecture/LectureMjmiddle121.vue';
import LectureMjss011 from '@/views/lecture/LectureMjss011.vue';
import LectureMjss012 from '@/views/lecture/LectureMjss012.vue';
import LectureMjss021 from '@/views/lecture/LectureMjss021.vue';
import LectureMjss031 from '@/views/lecture/LectureMjss031.vue';
import LectureMjss041 from '@/views/lecture/LectureMjss041.vue';
import LectureMjss042 from '@/views/lecture/LectureMjss042.vue';
import LectureMjss043 from '@/views/lecture/LectureMjss043.vue';
import LectureMjss051 from '@/views/lecture/LectureMjss051.vue';
import LectureMjss061 from '@/views/lecture/LectureMjss061.vue';
import LectureMjnomj01 from '@/views/lecture/LectureMjnomj01.vue';
import LectureMjnomj02 from '@/views/lecture/LectureMjnomj02.vue';
import LectureMjspe01 from '@/views/lecture/LectureMjspe01.vue';
import LectureMjspe02 from '@/views/lecture/LectureMjspe02.vue';
import LectureMjessay01 from '@/views/lecture/LectureMjessay01.vue';
import LectureMjessay02 from '@/views/lecture/LectureMjessay02.vue';
import LectureMjessay03 from '@/views/lecture/LectureMjessay03.vue';
import LectureMjhistory01 from '@/views/lecture/LectureMjhistory01.vue';
import LectureMjlibr01 from '@/views/lecture/LectureMjlibr01.vue';
//end 수강신청 (선생님 별 홈)
import TeacherOnlineView from '@/views/lecture/TeacherOnlineView.vue';
import TeacherOnlineView2 from '@/views/lecture/TeacherOnlineView2.vue';
import TeacherDirectSeoulView from '@/views/lecture/TeacherDirectSeoulView.vue';
import TeacherDirectSeoulView2 from '@/views/lecture/TeacherDirectSeoulView2.vue';
import TeacherLiveView from '@/views/lecture/TeacherLiveView.vue';
import TeacherLiveView2 from '@/views/lecture/TeacherLiveView2.vue';
//쌤몰
import SammmallIndex from '@/views/ssammall/Index.vue';
import SammmallBook from '@/views/ssammall/Book.vue';
import SammmallBookTeacher from '@/views/ssammall/BookTeacher.vue';
import SammmallBookTeacher2 from '@/views/ssammall/BookTeacher2.vue';
import SammmallBookTeacher3 from '@/views/ssammall/BookTeacher3.vue';
import SammmallBookView from '@/views/ssammall/BookView.vue';
import Device from '@/views/ssammall/Device.vue';
import DeviceNotebook from '@/views/ssammall/DeviceNotebook.vue';
import DeviceTablet from '@/views/ssammall/DeviceTablet.vue';
import DevicePhone from '@/views/ssammall/DevicePhone.vue';
import DeviceEtc from '@/views/ssammall/DeviceEtc.vue';
import DeviceView from '@/views/ssammall/DeviceView.vue';
import Goods from '@/views/ssammall/Goods.vue';
import GoodsFabric from '@/views/ssammall/GoodsFabric.vue';
import GoodsStationery from '@/views/ssammall/GoodsStationery.vue';
import GoodsEtc from '@/views/ssammall/GoodsEtc.vue';
import GoodsView from '@/views/ssammall/GoodsView.vue';
import ReviewBook from '@/views/ssammall/ReviewBook.vue';
import ReviewBookView from '@/views/ssammall/ReviewBookView.vue';
import ReviewDevice from '@/views/ssammall/ReviewDevice.vue';
import ReviewDeviceView from '@/views/ssammall/ReviewDeviceView.vue';
import ReviewGoods from '@/views/ssammall/ReviewGoods.vue';
import ReviewGoodsView from '@/views/ssammall/ReviewGoodsView.vue';
import ReviewEtc from '@/views/ssammall/ReviewEtc.vue';
import ReviewEtcView from '@/views/ssammall/ReviewEtcView.vue';
import SearchResult from '@/views/ssammall/SearchResult.vue';
//선생님 스페셜
import SpecialIndex from '@/views/special/Index.vue';
import SpecialEvent from '@/views/special/Event.vue';
import SpecialEventView1 from '@/views/special/EventView1.vue';
import SpecialEventView2 from '@/views/special/EventView2.vue';
import SpecialEventView3 from '@/views/special/EventView3.vue';
import SpecialEventView4 from '@/views/special/EventView4.vue';
import SpecialEventSearch from '@/views/special/EventSearch.vue';
import RealHit from '@/views/special/RealHit.vue';
import RealHitView1 from '@/views/special/RealHitView1.vue';
import RealHitView2 from '@/views/special/RealHitView2.vue';
import RealHitView3 from '@/views/special/RealHitView3.vue';
import RealHitView4 from '@/views/special/RealHitView4.vue';
import RealHitView5 from '@/views/special/RealHitView5.vue';
import RealHitView6 from '@/views/special/RealHitView6.vue';
import RealHitView7 from '@/views/special/RealHitView7.vue';
import RealHitView8 from '@/views/special/RealHitView8.vue';
import SpecialInterview from '@/views/special/Interview.vue';
import SpecialReview from '@/views/special/Review.vue';
//무료강의
import OpenLecIndex from '@/views/openlec/Index.vue';
import HighLight from '@/views/openlec/HighLight.vue';
import Comment from '@/views/openlec/Comment.vue';
import Presentation from '@/views/openlec/Presentation.vue';
import FreeLec from '@/views/openlec/FreeLec.vue';
//시험정보
import InfoGuide from '@/views/exam/InfoGuide.vue';
import InfoCompetition from '@/views/exam/InfoCompetition.vue';
import InfoNotify from '@/views/exam/InfoNotify.vue';
import InfoNotifyView from '@/views/exam/InfoNotifyView.vue';
import InfoNews from '@/views/exam/InfoNews.vue';
import InfoNewsView from '@/views/exam/InfoNewsView.vue';
import ReferencePrevious from '@/views/exam/ReferencePrevious.vue';
import ReferencePreviousView from '@/views/exam/ReferencePreviousView.vue';
import ReferenceEdu from '@/views/exam/ReferenceEdu.vue';
import ReferenceEduView from '@/views/exam/ReferenceEduView.vue';
import ReferenceTaker from '@/views/exam/ReferenceTaker.vue';
import ReferenceTaker2 from '@/views/exam/ReferenceTaker2.vue';
import ReferenceTakerView from '@/views/exam/ReferenceTakerView.vue';
import Column from '@/views/exam/Column.vue';
import ColumnView from '@/views/exam/ColumnView.vue';
//합격수기
import PassIndex from '@/views/pass/Index.vue';
import PassInterview from '@/views/pass/PassInterview.vue';
import PassReviewWrite from '@/views/pass/PassReviewWrite.vue';
//인사이드희소
import InsideIndex from '@/views/inside/Index.vue';
//희소고시학원
import AcademyIndex from '@/views/academy/Index.vue';
import AcademyStudy from '@/views/academy/AcademyStudy.vue';
import AcademyStudyView from '@/views/academy/AcademyStudyView.vue';
import AcademyStudyWrite from '@/views/academy/AcademyStudyWrite.vue';
import AcademyStudyView2 from '@/views/academy/AcademyStudyView2.vue';
import AcademyStudyModify from '@/views/academy/AcademyStudyModify.vue';
//내 강의실
import OnlineLecture from '@/views/mylec/OnlineLecture.vue';
import OnlinePlayer from '@/views/mylec/OnlinePlayer.vue';
import OnlineUpdate from '@/views/mylec/OnlineUpdate.vue';
import DirectLecture from '@/views/mylec/DirectLecture.vue';
import DirectLive from '@/views/mylec/DirectLive.vue';
import LivePlayer from '@/views/mylec/LivePlayer.vue';
import LivePlayer2 from '@/views/mylec/LivePlayer2.vue';
import DirectAddition from '@/views/mylec/DirectAddition.vue';
import StudyMyStatus from '@/views/mylec/StudyMyStatus.vue';
import StudyQna from '@/views/mylec/StudyQna.vue';
import StudyQnaView from '@/views/mylec/StudyQnaView.vue';
import StudyQnaView2 from '@/views/mylec/StudyQnaView2.vue';
import PremiumSsampack from '@/views/mylec/PremiumSsampack.vue';
import PremiumCounsel from '@/views/mylec/PremiumCounsel.vue';
import PremiumCounselViewWait from '@/views/mylec/PremiumCounselViewWait.vue';
import PremiumCounselViewComplete from '@/views/mylec/PremiumCounselViewComplete.vue';
import PremiumCounselModify from '@/views/mylec/PremiumCounselModify.vue';
import PremiumCounselWrite from '@/views/mylec/PremiumCounselWrite.vue';
import MockStare from '@/views/mylec/MockStare.vue';
import MockStareView from '@/views/mylec/MockStareView.vue';
import MockExplain from '@/views/mylec/MockExplain.vue';
import MockExplainView from '@/views/mylec/MockExplainView.vue';
import MockExplainViewPlayer from '@/views/mylec/MockExplainViewPlayer.vue';
//마이페이지
import PaymentHistory from '@/views/mypage/PaymentHistory.vue';
import PaymentOrderDelivery from '@/views/mypage/PaymentOrderDelivery.vue';
import PaymentBasket from '@/views/mypage/PaymentBasket.vue';
import PaymentOrder from '@/views/mypage/PaymentOrder.vue';
import PaymentFinish from '@/views/mypage/PaymentFinish.vue';
import PaymentLocker from '@/views/mypage/PaymentLocker.vue';
import PaymentLockerWrite from '@/views/mypage/PaymentLockerWrite.vue';
import PaymentCoupon from '@/views/mypage/PaymentCoupon.vue';
import CounselBbs from '@/views/mypage/CounselBbs.vue';
import CounselBbsViewWait from '@/views/mypage/CounselBbsViewWait.vue';
import CounselBbsViewComplete from '@/views/mypage/CounselBbsViewComplete.vue';
import CounselBbsModify from '@/views/mypage/CounselBbsModify.vue';
import CounselBbsWrite from '@/views/mypage/CounselBbsWrite.vue';
import CounselReserve from '@/views/mypage/CounselReserve.vue';
import CounselReserveWrite from '@/views/mypage/CounselReserveWrite.vue';
import MyReview from '@/views/mypage/MyReview.vue';
import MyReviewWrite from '@/views/mypage/MyReviewWrite.vue';
import MyReviewView from '@/views/mypage/MyReviewView.vue';
import MyReviewModify from '@/views/mypage/MyReviewModify.vue';
import MyInfoPw from '@/views/mypage/MyInfoPw.vue';
import MyInfoModify from '@/views/mypage/MyInfoModify.vue';
import MyInfoMode from '@/views/mypage/MyInfoMode.vue';
import MyInfoAddress from '@/views/mypage/MyInfoAddress.vue';
//공지사항, 이벤트
import Notice from '@/views/bbs/Notice.vue';
import NoticeMy from '@/views/bbs/NoticeMy.vue';
import NoticeSearch from '@/views/bbs/NoticeSearch.vue';
import NoticeView from '@/views/bbs/NoticeView.vue';
import NoticeView2 from '@/views/bbs/NoticeView2.vue';
import NoticeView3 from '@/views/bbs/NoticeView3.vue';
import NoticeView4 from '@/views/bbs/NoticeView4.vue';
import Event from '@/views/bbs/Event.vue';
import EventIngView from '@/views/bbs/EventIngView.vue';
import EventIngView2 from '@/views/bbs/EventIngView2.vue';
import EventIngView3 from '@/views/bbs/EventIngView3.vue';
import EventPastView from '@/views/bbs/EventPastView.vue';
import EventWinnerView from '@/views/bbs/EventWinnerView.vue';
import EventSearch from '@/views/bbs/EventSearch.vue';
//상담센터
import CounselIndex from '@/views/counsel/Index.vue';
import Faq from '@/views/counsel/Faq.vue';
import FaqView from '@/views/counsel/FaqView.vue';
import FaqSearchResult from '@/views/counsel/FaqSearchResult.vue';
import Guide from '@/views/counsel/Guide.vue';
import BbsWrite from '@/views/counsel/BbsWrite.vue';
import ReserveWrite from '@/views/counsel/ReserveWrite.vue';
import CleanIDShare from '@/views/counsel/CleanIDShare.vue';
import CleanReport from '@/views/counsel/CleanReport.vue';
import CleanIllegalShare from '@/views/counsel/CleanIllegalShare.vue';
import CleanIllegalShareView from '@/views/counsel/CleanIllegalShareView.vue';
import ProgramInstall from '@/views/counsel/ProgramInstall.vue';
import Remote from '@/views/counsel/Remote.vue';
import CenterNotice from '@/views/counsel/CenterNotice.vue';
import CenterNoticeView from '@/views/counsel/CenterNoticeView.vue';
import DirectLocation from '@/views/counsel/DirectLocation.vue';
//스마트 수강신청
import SmartIndex from '@/views/smart/Index.vue';
//모바일 설정
import SettingIndex from '@/views/setting/Index.vue';
import SettingPush from '@/views/setting/Push.vue';
//이벤트 - fullEvent
import FullEvent20211102 from '@/views/event/fullEvent/20211102/01/Index.vue';
//////////// 윈도우 팝업 All ////////////
import WindowPopup from '@/views/include/WindowPopup.vue';
import LecCompletion from '@/views/windowpop/LecCompletion.vue';
//**** */ 설문조사
import PopupServey from '@/views/mylec/PopupServey.vue';
const mkRoutes = [
  // { path: '/:catchAll(.*)', component: NotFound },
  //////////// src Root ////////////
  { path: '/mkup/loading', name: 'Loading', component: Loading,},
  { path: '/mkup/layout', name: 'Layout', component: Layout,},
  { path: '/mkup/layoutBbs', name: 'LayoutBbs', component: LayoutBbs,},
  { path: '/mkup/layoutTitle', name: 'LayoutTitle', component: LayoutTitle,},
  { path: '/mkup/worklist', name: 'Worklist', component: Worklist, },
  { path: '/mkup/uicomponent', name: 'Uicomponent', component: Uicomponent,},
  { path: '/mkup/chartSample', name: 'ChartSample', component: ChartSample,},
  { path: '/mkup/error', name: 'Error', component: Error,},
  { path: '/mkup/guide', name: 'Mkguide', component: Mkguide,},
  { path: '/mkup/eventPreview', name: 'EventPreview', component:EventPreview,},
  //////////// 본창 ////////////
  //진입
  { path: '/mkup/main', name: 'Main', component: Main, },
  { path: '/mkup/login', name: 'Login', component: Login, },
  { path: '/mkup/join', name: 'Join', component: Join, },
  { path: '/mkup/intro', name: 'Intro', component: Intro, },
  { path: '/mkup/loginNaver', name: 'LoginSnsNaver', component: LoginSnsNaver, },
  { path: '/mkup/loginKaKao', name: 'LoginSnsKaKao', component: LoginSnsKaKao, },
  { path: '/mkup/findAccount', name: 'FindAccount', component: FindAccount, },
  //쌤팩
  { path: '/mkup/ssampack/index', name: 'SsampackIndex', component: SsampackIndex, },
  //수강신청
  { path: '/mkup/lecture/index', name: 'LectureIndex', component: LectureIndex, },
  //수강신청 (과목별 목록)
  { path: '/mkup/lecture/index/mjedu', name: 'LectureIndexMjedu', component: LectureIndexMjedu, },
  { path: '/mkup/lecture/index/mjchild', name: 'LectureIndexMjchild', component: LectureIndexMjchild, },
  { path: '/mkup/lecture/index/mjmiddle', name: 'LectureIndexMjmiddle', component: LectureIndexMjmiddle, },
  { path: '/mkup/lecture/index/mjmiddle01', name: 'LectureIndexMjmiddle01', component: LectureIndexMjmiddle01, },
  { path: '/mkup/lecture/index/mjmiddle02', name: 'LectureIndexMjmiddle02', component: LectureIndexMjmiddle02, },
  { path: '/mkup/lecture/index/mjmiddle03', name: 'LectureIndexMjmiddle03', component: LectureIndexMjmiddle03, },
  { path: '/mkup/lecture/index/mjmiddle04', name: 'LectureIndexMjmiddle04', component: LectureIndexMjmiddle04, },
  { path: '/mkup/lecture/index/mjmiddle05', name: 'LectureIndexMjmiddle05', component: LectureIndexMjmiddle05, },
  { path: '/mkup/lecture/index/mjmiddle06', name: 'LectureIndexMjmiddle06', component: LectureIndexMjmiddle06, },
  { path: '/mkup/lecture/index/mjmiddle07', name: 'LectureIndexMjmiddle07', component: LectureIndexMjmiddle07, },
  { path: '/mkup/lecture/index/mjmiddle08', name: 'LectureIndexMjmiddle08', component: LectureIndexMjmiddle08, },
  { path: '/mkup/lecture/index/mjmiddle09', name: 'LectureIndexMjmiddle09', component: LectureIndexMjmiddle09, },
  { path: '/mkup/lecture/index/mjmiddle10', name: 'LectureIndexMjmiddle10', component: LectureIndexMjmiddle10, },
  { path: '/mkup/lecture/index/mjmiddle11', name: 'LectureIndexMjmiddle11', component: LectureIndexMjmiddle11, },
  { path: '/mkup/lecture/index/mjmiddle12', name: 'LectureIndexMjmiddle12', component: LectureIndexMjmiddle12, },
  { path: '/mkup/lecture/index/mjss', name: 'LectureIndexMjss', component: LectureIndexMjss, },
  { path: '/mkup/lecture/index/mjss01', name: 'LectureIndexMjss01', component: LectureIndexMjss01, },
  { path: '/mkup/lecture/index/mjss02', name: 'LectureIndexMjss02', component: LectureIndexMjss02, },
  { path: '/mkup/lecture/index/mjss03', name: 'LectureIndexMjss03', component: LectureIndexMjss03, },
  { path: '/mkup/lecture/index/mjss04', name: 'LectureIndexMjss04', component: LectureIndexMjss04, },
  { path: '/mkup/lecture/index/mjss05', name: 'LectureIndexMjss05', component: LectureIndexMjss05, },
  { path: '/mkup/lecture/index/mjss06', name: 'LectureIndexMjss06', component: LectureIndexMjss06, },
  { path: '/mkup/lecture/index/mjnomj', name: 'LectureIndexMjnomj', component: LectureIndexMjnomj, },
  { path: '/mkup/lecture/index/mjspe', name: 'LectureIndexMjspe', component: LectureIndexMjspe, },
  { path: '/mkup/lecture/index/mjessay', name: 'LectureIndexMjessay', component: LectureIndexMjessay, },
  { path: '/mkup/lecture/index/mjhistory', name: 'LectureIndexMjhistory', component: LectureIndexMjhistory, },
  { path: '/mkup/lecture/index/mjlibr', name: 'LectureIndexMjlibr', component: LectureIndexMjlibr, },
  //수강신청 (선생님 별 홈)
  { path: '/mkup/lecture/teacher', name: 'LectureTeacher', component: LectureTeacher, },
  { path: '/mkup/lecture/teachermjedu01', name: 'LectureMjedu01', component: LectureMjedu01, },
  { path: '/mkup/lecture/teachermjedu02', name: 'LectureMjedu02', component: LectureMjedu02, },
  { path: '/mkup/lecture/teachermjedu03', name: 'LectureMjedu03', component: LectureMjedu03, },
  { path: '/mkup/lecture/teachermjchild01', name: 'LectureMjchild01', component: LectureMjchild01, },
  { path: '/mkup/lecture/teachermjchild02', name: 'LectureMjchild02', component: LectureMjchild02, },
  { path: '/mkup/lecture/teachermjchild03', name: 'LectureMjchild03', component: LectureMjchild03, },
  { path: '/mkup/lecture/teachermjmiddle011', name: 'LectureMjmiddle011', component: LectureMjmiddle011, },
  { path: '/mkup/lecture/teachermjmiddle012', name: 'LectureMjmiddle012', component: LectureMjmiddle012, },
  { path: '/mkup/lecture/teachermjmiddle013', name: 'LectureMjmiddle013', component: LectureMjmiddle013, },
  { path: '/mkup/lecture/teachermjmiddle014', name: 'LectureMjmiddle014', component: LectureMjmiddle014, },
  { path: '/mkup/lecture/teachermjmiddle021', name: 'LectureMjmiddle021', component: LectureMjmiddle021, },
  { path: '/mkup/lecture/teachermjmiddle022', name: 'LectureMjmiddle022', component: LectureMjmiddle022, },
  { path: '/mkup/lecture/teachermjmiddle023', name: 'LectureMjmiddle023', component: LectureMjmiddle023, },
  { path: '/mkup/lecture/teachermjmiddle024', name: 'LectureMjmiddle024', component: LectureMjmiddle024, },
  { path: '/mkup/lecture/teachermjmiddle031', name: 'LectureMjmiddle031', component: LectureMjmiddle031, },
  { path: '/mkup/lecture/teachermjmiddle032', name: 'LectureMjmiddle032', component: LectureMjmiddle032, },
  { path: '/mkup/lecture/teachermjmiddle033', name: 'LectureMjmiddle033', component: LectureMjmiddle033, },
  { path: '/mkup/lecture/teachermjmiddle034', name: 'LectureMjmiddle034', component: LectureMjmiddle034, },
  { path: '/mkup/lecture/teachermjmiddle041', name: 'LectureMjmiddle041', component: LectureMjmiddle041, },
  { path: '/mkup/lecture/teachermjmiddle042', name: 'LectureMjmiddle042', component: LectureMjmiddle042, },
  { path: '/mkup/lecture/teachermjmiddle043', name: 'LectureMjmiddle043', component: LectureMjmiddle043, },
  { path: '/mkup/lecture/teachermjmiddle044', name: 'LectureMjmiddle044', component: LectureMjmiddle044, },
  { path: '/mkup/lecture/teachermjmiddle051', name: 'LectureMjmiddle051', component: LectureMjmiddle051, },
  { path: '/mkup/lecture/teachermjmiddle061', name: 'LectureMjmiddle061', component: LectureMjmiddle061, },
  { path: '/mkup/lecture/teachermjmiddle062', name: 'LectureMjmiddle062', component: LectureMjmiddle062, },
  { path: '/mkup/lecture/teachermjmiddle063', name: 'LectureMjmiddle063', component: LectureMjmiddle063, },
  { path: '/mkup/lecture/teachermjmiddle071', name: 'LectureMjmiddle071', component: LectureMjmiddle071, },
  { path: '/mkup/lecture/teachermjmiddle072', name: 'LectureMjmiddle072', component: LectureMjmiddle072, },
  { path: '/mkup/lecture/teachermjmiddle073', name: 'LectureMjmiddle073', component: LectureMjmiddle073, },
  { path: '/mkup/lecture/teachermjmiddle081', name: 'LectureMjmiddle081', component: LectureMjmiddle081, },
  { path: '/mkup/lecture/teachermjmiddle091', name: 'LectureMjmiddle091', component: LectureMjmiddle091, },
  { path: '/mkup/lecture/teachermjmiddle101', name: 'LectureMjmiddle101', component: LectureMjmiddle101, },
  { path: '/mkup/lecture/teachermjmiddle111', name: 'LectureMjmiddle111', component: LectureMjmiddle111, },
  { path: '/mkup/lecture/teachermjmiddle121', name: 'LectureMjmiddle121', component: LectureMjmiddle121, },
  { path: '/mkup/lecture/teachermjss011', name: 'LectureMjss011', component: LectureMjss011, },
  { path: '/mkup/lecture/teachermjss012', name: 'LectureMjss012', component: LectureMjss012, },
  { path: '/mkup/lecture/teachermjss021', name: 'LectureMjss021', component: LectureMjss021, },
  { path: '/mkup/lecture/teachermjss031', name: 'LectureMjss031', component: LectureMjss031, },
  { path: '/mkup/lecture/teachermjss041', name: 'LectureMjss041', component: LectureMjss041, },
  { path: '/mkup/lecture/teachermjss042', name: 'LectureMjss042', component: LectureMjss042, },
  { path: '/mkup/lecture/teachermjss043', name: 'LectureMjss043', component: LectureMjss043, },
  { path: '/mkup/lecture/teachermjss051', name: 'LectureMjss051', component: LectureMjss051, },
  { path: '/mkup/lecture/teachermjss061', name: 'LectureMjss061', component: LectureMjss061, },
  { path: '/mkup/lecture/teachermjnomj01', name: 'LectureMjnomj01', component: LectureMjnomj01, },
  { path: '/mkup/lecture/teachermjnomj02', name: 'LectureMjnomj02', component: LectureMjnomj02, },
  { path: '/mkup/lecture/teachermjspe01', name: 'LectureMjspe01', component: LectureMjspe01, },
  { path: '/mkup/lecture/teachermjspe02', name: 'LectureMjspe02', component: LectureMjspe02, },
  { path: '/mkup/lecture/teachermjessay01', name: 'LectureMjessay01', component: LectureMjessay01, },
  { path: '/mkup/lecture/teachermjessay02', name: 'LectureMjessay02', component: LectureMjessay02, },
  { path: '/mkup/lecture/teachermjessay03', name: 'LectureMjessay03', component: LectureMjessay03, },
  { path: '/mkup/lecture/teachermhistory01', name: 'LectureMjhistory01', component: LectureMjhistory01, },
  { path: '/mkup/lecture/teachermjlibr01', name: 'LectureMjlibr01', component: LectureMjlibr01, },
  //end 수강신청 (선생님 별 홈)
  { path: '/mkup/lecture/teacher/online', name: 'TeacherOnlineView', component: TeacherOnlineView, },
  { path: '/mkup/lecture/teacher/online2', name: 'TeacherOnlineView2', component: TeacherOnlineView2, },
  { path: '/mkup/lecture/teacher/directSeoul', name: 'TeacherDirectSeoulView', component: TeacherDirectSeoulView, },
  { path: '/mkup/lecture/teacher/directSeoul2', name: 'TeacherDirectSeoulView2', component: TeacherDirectSeoulView2, },
  { path: '/mkup/lecture/teacher/live', name: 'TeacherLiveView', component: TeacherLiveView, },
  { path: '/mkup/lecture/teacher/live2', name: 'TeacherLiveView2', component: TeacherLiveView2, },
  //쌤몰
  { path: '/mkup/ssammall/index', name: 'SammmallIndex', component: SammmallIndex, },
  { path: '/mkup/ssammall/book', name: 'SammmallBook', component: SammmallBook, },
  { path: '/mkup/ssammall/book/teacher1', name: 'SammmallBookTeacher', component: SammmallBookTeacher, },
  { path: '/mkup/ssammall/book/teacher2', name: 'SammmallBookTeacher2', component: SammmallBookTeacher2, },
  { path: '/mkup/ssammall/book/teacher3', name: 'SammmallBookTeacher3', component: SammmallBookTeacher3, },
  { path: '/mkup/ssammall/book/view', name: 'SammmallBookView', component: SammmallBookView, },
  { path: '/mkup/ssammall/device', name: 'Device', component: Device, },
  { path: '/mkup/ssammall/device/notebook', name: 'DeviceNotebook', component: DeviceNotebook, },
  { path: '/mkup/ssammall/device/tablet', name: 'DeviceTablet', component: DeviceTablet, },
  { path: '/mkup/ssammall/device/phone', name: 'DevicePhone', component: DevicePhone, },
  { path: '/mkup/ssammall/device/etc', name: 'DeviceEtc', component: DeviceEtc, },
  { path: '/mkup/ssammall/device/view', name: 'DeviceView', component: DeviceView, },
  { path: '/mkup/ssammall/goods', name: 'Goods', component: Goods, },
  { path: '/mkup/ssammall/goods/fabric', name: 'GoodsFabric', component: GoodsFabric, },
  { path: '/mkup/ssammall/goods/stationery', name: 'GoodsStationery', component: GoodsStationery, },
  { path: '/mkup/ssammall/goods/etc', name: 'GoodsEtc', component: GoodsEtc, },
  { path: '/mkup/ssammall/goods/view', name: 'GoodsView', component: GoodsView, },
  { path: '/mkup/ssammall/review/book', name: 'ReviewBook', component: ReviewBook, },
  { path: '/mkup/ssammall/review/book/view', name: 'ReviewBookView', component: ReviewBookView, },
  { path: '/mkup/ssammall/review/device', name: 'ReviewDevice', component: ReviewDevice, },
  { path: '/mkup/ssammall/review/device/view', name: 'ReviewDeviceView', component: ReviewDeviceView, },
  { path: '/mkup/ssammall/review/goods', name: 'ReviewGoods', component: ReviewGoods, },
  { path: '/mkup/ssammall/review/goods/view', name: 'ReviewGoodsView', component: ReviewGoodsView, },
  { path: '/mkup/ssammall/review/etc', name: 'ReviewEtc', component: ReviewEtc, },
  { path: '/mkup/ssammall/review/etc/view', name: 'ReviewEtcView', component: ReviewEtcView, },
  { path: '/mkup/ssammall/search', name: 'SearchResult', component: SearchResult, },
  //선생님 스페셜
  { path: '/mkup/special/index', name: 'SpecialIndex', component: SpecialIndex, },
  { path: '/mkup/special/event', name: 'SpecialEvent', component: SpecialEvent, },
  { path: '/mkup/special/event/view1', name: 'SpecialEventView1', component: SpecialEventView1, },
  { path: '/mkup/special/event/view2', name: 'SpecialEventView2', component: SpecialEventView2, },
  { path: '/mkup/main/eventview3', name: 'SpecialEventView3', component: SpecialEventView3, },
  { path: '/mkup/special/event/view4', name: 'SpecialEventView4', component: SpecialEventView4, },
  { path: '/mkup/special/event/search', name: 'SpecialEventSearch', component: SpecialEventSearch, },
  { path: '/mkup/special/hit', name: 'RealHit', component: RealHit, },
  { path: '/mkup/special/hit/view1', name: 'RealHitView1', component: RealHitView1, },
  { path: '/mkup/special/hit/view2', name: 'RealHitView2', component: RealHitView2, },
  { path: '/mkup/main/hitview3', name: 'RealHitView3', component: RealHitView3, },
  { path: '/mkup/special/hit/view4', name: 'RealHitView4', component: RealHitView4, },
  { path: '/mkup/special/hit/view5', name: 'RealHitView5', component: RealHitView5, },
  { path: '/mkup/special/hit/view6', name: 'RealHitView6', component: RealHitView6, },
  { path: '/mkup/special/hit/view7', name: 'RealHitView7', component: RealHitView7, },
  { path: '/mkup/special/hit/view8', name: 'RealHitView8', component: RealHitView8, },
  { path: '/mkup/special/interview', name: 'SpecialInterview', component: SpecialInterview, },
  { path: '/mkup/special/review', name: 'SpecialReview', component: SpecialReview, },
  //무료강의
  { path: '/mkup/openlec/index', name: 'OpenLecIndex', component: OpenLecIndex, },
  { path: '/mkup/openlec/highlight', name: 'HighLight', component: HighLight, },
  { path: '/mkup/openlec/comment', name: 'Comment', component: Comment, },
  { path: '/mkup/openlec/presentation', name: 'Presentation', component: Presentation, },
  { path: '/mkup/openlec/freelec', name: 'FreeLec', component: FreeLec, },
  //시험정보
  { path: '/mkup/exam/info/guide', name: 'InfoGuide', component: InfoGuide, },
  { path: '/mkup/exam/info/competition', name: 'InfoCompetition', component: InfoCompetition, },
  { path: '/mkup/exam/info/notify', name: 'InfoNotify', component: InfoNotify, },
  { path: '/mkup/exam/info/notify/view', name: 'InfoNotifyView', component: InfoNotifyView, },
  { path: '/mkup/exam/info/news', name: 'InfoNews', component: InfoNews, },
  { path: '/mkup/exam/info/news/view', name: 'InfoNewsView', component: InfoNewsView, },
  { path: '/mkup/exam/reference/previous', name: 'ReferencePrevious', component: ReferencePrevious, },
  { path: '/mkup/exam/reference/previous/view', name: 'ReferencePreviousView', component: ReferencePreviousView, },
  { path: '/mkup/exam/reference/edu', name: 'ReferenceEdu', component: ReferenceEdu, },
  { path: '/mkup/exam/reference/edu/view', name: 'ReferenceEduView', component: ReferenceEduView, },
  { path: '/mkup/exam/reference/taker', name: 'ReferenceTaker', component: ReferenceTaker, },
  { path: '/mkup/exam/reference/taker2', name: 'ReferenceTaker2', component: ReferenceTaker2, },
  { path: '/mkup/exam/reference/taker/view', name: 'ReferenceTakerView', component: ReferenceTakerView, },
  { path: '/mkup/exam/column', name: 'Column', component: Column, },
  { path: '/mkup/exam/column/view', name: 'ColumnView', component: ColumnView, },
  //합격수기
  { path: '/mkup/pass/index', name: 'PassIndex', component: PassIndex, },
  { path: '/mkup/pass/interview', name: 'PassInterview', component: PassInterview, },
  { path: '/mkup/pass/review/write', name: 'PassReviewWrite', component: PassReviewWrite, },
  //인사이드희소
  { path: '/mkup/inside/index', name: 'InsideIndex', component: InsideIndex, },
  //희소고시학원
  { path: '/mkup/academy/index', name: 'AcademyIndex', component: AcademyIndex, },
  { path: '/mkup/academy/study', name: 'AcademyStudy', component: AcademyStudy, },
  { path: '/mkup/academy/study/view', name: 'AcademyStudyView', component: AcademyStudyView, },
  { path: '/mkup/academy/study/write', name: 'AcademyStudyWrite', component: AcademyStudyWrite, },
  { path: '/mkup/academy/study/view2', name: 'AcademyStudyView2', component: AcademyStudyView2, },
  { path: '/mkup/academy/study/modify', name: 'AcademyStudyModify', component: AcademyStudyModify, },
  //내 강의실
  { path: '/mkup/mylec/online/my', name: 'OnlineLecture', component: OnlineLecture, },
  { path: '/mkup/mylec/online/my/player', name: 'OnlinePlayer', component: OnlinePlayer, },
  { path: '/mkup/mylec/online/update', name: 'OnlineUpdate', component: OnlineUpdate, },
  { path: '/mkup/mylec/direct/my', name: 'DirectLecture', component: DirectLecture, },
  { path: '/mkup/mylec/direct/live', name: 'DirectLive', component: DirectLive, },
  { path: '/mkup/mylec/direct/live/player', name: 'LivePlayer', component: LivePlayer, },
  { path: '/mkup/mylec/direct/live/player2', name: 'LivePlayer2', component: LivePlayer2, },
  { path: '/mkup/mylec/direct/addition', name: 'DirectAddition', component:DirectAddition, },
  { path: '/mkup/mylec/study/my', name: 'StudyMyStatus', component: StudyMyStatus, },
  { path: '/mkup/mylec/study/qna', name: 'StudyQna', component: StudyQna, },
  { path: '/mkup/mylec/study/qna/view', name: 'StudyQnaView', component: StudyQnaView, },
  { path: '/mkup/mylec/study/qna/view2', name: 'StudyQnaView2', component: StudyQnaView2, },
  { path: '/mkup/mylec/premium/ssampack', name: 'PremiumSsampack', component: PremiumSsampack, },
  { path: '/mkup/mylec/premium/counsel', name: 'PremiumCounsel', component: PremiumCounsel, },
  { path: '/mkup/mylec/premium/counsel/view/wait', name: 'PremiumCounselViewWait', component: PremiumCounselViewWait, },
  { path: '/mkup/mylec/premium/counsel/view/complete', name: 'PremiumCounselViewComplete', component: PremiumCounselViewComplete, },
  { path: '/mkup/mylec/premium/counsel/modify', name: 'PremiumCounselModify', component: PremiumCounselModify, },
  { path: '/mkup/mylec/premium/counsel/write', name: 'PremiumCounselWrite', component: PremiumCounselWrite, },
  { path: '/mkup/mylec/mock/stare', name: 'MockStare', component: MockStare, },
  { path: '/mkup/mylec/mock/stare/view', name: 'MockStareView', component: MockStareView, },
  { path: '/mkup/mylec/mock/explain', name: 'MockExplain', component: MockExplain, },
  { path: '/mkup/mylec/mock/explain/view', name: 'MockExplainView', component: MockExplainView, },
  { path: '/mkup/mylec/mock/explain/view/player', name: 'MockExplainViewPlayer', component: MockExplainViewPlayer, },
  //마이페이지
  { path: '/mkup/mypage/payment/history', name: 'PaymentHistory', component: PaymentHistory, },
  { path: '/mkup/mypage/payment/delivery', name: 'PaymentOrderDelivery', component: PaymentOrderDelivery, },
  { path: '/mkup/mypage/payment/basket', name: 'PaymentBasket', component: PaymentBasket, },
  { path: '/mkup/mypage/payment/order', name: 'PaymentOrder', component: PaymentOrder, },
  { path: '/mkup/mypage/payment/finish', name: 'PaymentFinish', component: PaymentFinish, },
  { path: '/mkup/mypage/payment/locker', name: 'PaymentLocker', component: PaymentLocker, },
  { path: '/mkup/mypage/payment/locker/write', name: 'PaymentLockerWrite', component: PaymentLockerWrite, },
  { path: '/mkup/mypage/payment/coupon', name: 'PaymentCoupon', component: PaymentCoupon, },
  { path: '/mkup/mypage/counsel/bbs', name: 'CounselBbs', component: CounselBbs, },
  { path: '/mkup/mypage/counsel/bbs/view/wait', name: 'CounselBbsViewWait', component: CounselBbsViewWait, },
  { path: '/mkup/mypage/counsel/bbs/view/complete', name: 'CounselBbsViewComplete', component: CounselBbsViewComplete, },
  { path: '/mkup/mypage/counsel/bbs/modify', name: 'CounselBbsModify', component: CounselBbsModify, },
  { path: '/mkup/mypage/counsel/bbs/write', name: 'CounselBbsWrite', component: CounselBbsWrite, },
  { path: '/mkup/mypage/counsel/reserve', name: 'CounselReserve', component: CounselReserve, },
  { path: '/mkup/mypage/counsel/reserve/write', name: 'CounselReserveWrite', component: CounselReserveWrite, },
  { path: '/mkup/mypage/myreview', name: 'MyReview', component: MyReview, },
  { path: '/mkup/mypage/myreview/write', name: 'MyReviewWrite', component: MyReviewWrite, },
  { path: '/mkup/mypage/myreview/view', name: 'MyReviewView', component: MyReviewView, },
  { path: '/mkup/mypage/myreview/modify', name: 'MyReviewModify', component: MyReviewModify, },
  { path: '/mkup/mypage/myinfo/pw', name: 'MyInfoPw', component: MyInfoPw, },
  { path: '/mkup/mypage/myinfo/modify', name: 'MyInfoModify', component: MyInfoModify, },
  { path: '/mkup/mypage/myinfo/mode', name: 'MyInfoMode', component: MyInfoMode, },
  { path: '/mkup/mypage/myinfo/address', name: 'MyInfoAddress', component: MyInfoAddress, },
  //공지사항, 이벤트
  { path: '/mkup/bbs/notice', name: 'Notice', component: Notice, },
  { path: '/mkup/bbs/noticemy', name: 'NoticeMy', component:NoticeMy, },
  { path: '/mkup/bbs/notice/search', name: 'NoticeSearch', component:NoticeSearch, },
  { path: '/mkup/bbs/notice/view', name: 'NoticeView', component: NoticeView, },
  { path: '/mkup/bbs/notice/view2', name: 'NoticeView2', component: NoticeView2, },
  { path: '/mkup/bbs/notice/view3', name: 'NoticeView3', component: NoticeView3, },
  { path: '/mkup/bbs/notice/view4', name: 'NoticeView4', component: NoticeView4, },
  { path: '/mkup/bbs/event', name: 'Event', component: Event, },
  { path: '/mkup/bbs/event/ing', name: 'EventIngView', component: EventIngView, },
  { path: '/mkup/bbs/event/ing2', name: 'EventIngView2', component: EventIngView2, },
  { path: '/mkup/main/eventview4', name: 'EventIngView3', component: EventIngView3, },
  { path: '/mkup/bbs/event/past', name: 'EventPastView', component: EventPastView, },
  { path: '/mkup/bbs/event/winner', name: 'EventWinnerView', component: EventWinnerView, },
  { path: '/mkup/bbs/event/search', name: 'EventSearch', component:EventSearch, },
  //상담센터
  { path: '/mkup/counsel/index', name: 'CounselIndex', component: CounselIndex, },
  { path: '/mkup/counsel/faq', name: 'Faq', component: Faq, },
  { path: '/mkup/counsel/faq/view', name: 'FaqView', component: FaqView, },
  { path: '/mkup/counsel/faq/search', name: 'FaqSearchResult', component: FaqSearchResult, },
  { path: '/mkup/counsel/guide', name: 'Guide', component: Guide, },
  { path: '/mkup/counsel/bbswrite', name: 'BbsWrite', component: BbsWrite, },
  { path: '/mkup/counsel/reserve', name: 'ReserveWrite', component: ReserveWrite, },
  { path: '/mkup/counsel/clean/idshare', name: 'CleanIDShare', component: CleanIDShare, },
  { path: '/mkup/counsel/clean/report', name: 'CleanReport', component: CleanReport, },
  { path: '/mkup/counsel/clean/illegal', name: 'CleanIllegalShare', component: CleanIllegalShare, },
  { path: '/mkup/counsel/clean/illegal/view', name: 'CleanIllegalShareView', component: CleanIllegalShareView, },
  { path: '/mkup/counsel/programInstall', name: 'ProgramInstall', component: ProgramInstall, },
  { path: '/mkup/counsel/remote', name: 'Remote', component: Remote, },
  { path: '/mkup/counsel/center', name: 'CenterNotice', component: CenterNotice, },
  { path: '/mkup/counsel/center/view', name: 'CenterNoticeView', component: CenterNoticeView, },
  { path: '/mkup/counsel/direct', name: 'DirectLocation', component: DirectLocation, },
  //스마트 수강신청
  { path: '/mkup/smart', name: 'SmartIndex', component: SmartIndex, },
  //모바일 설정
  { path: '/mkup/setting', name: 'SettingIndex', component: SettingIndex, },
  { path: '/mkup/setting/push', name: 'SettingPush', component: SettingPush, },
  //이벤트 - fullEvent+
  {path: '/mkup/fullevent/20211102/01', name:'FullEvent20211102', component: FullEvent20211102, },
  //////////// 윈도우 팝업 All ////////////
  { path: '/mkup/windowPopup', name: 'WindowPopup', component: WindowPopup,
      children: [
      //src Root
      { path: "windowPopupComponent", component: WindowPopupComponent, meta: { layout: 'popup' } },
      { path: "lecCompletion", component: LecCompletion, meta: { layout: 'popup' } },
      { path: "popupServey", component: PopupServey, meta: { layout: 'popup' } },
    ],
  },
  
];

export default mkRoutes;
