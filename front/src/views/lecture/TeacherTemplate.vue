<template lang="html">
  <div>
    <!-- TopBanner -->
    <div class="topArea" v-if="!this.mobile">
      <!-- LeftBanner -->
      <div class="leftAdArea">
        <span class="adItem">
          <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner06.png`)" alt=""/></router-link>
        </span>
        <div class="adGroup">
          <span class="adItem type1x1">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner03.png`)" alt=""/></router-link>
          </span>
          <span class="adItem type1x1">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner04.png`)" alt=""/></router-link>
          </span>
          <span class="adItem type1x1">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner05.png`)" alt=""/></router-link>
          </span>
        </div>
      </div>
      <!-- //LeftBanner -->
    </div>
    <!-- //TopBanner -->
    <div class="mobileLnb" v-if="this.mobile">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="teacherHome">
          <!-- 모바일 상단 내비 -->
          <div class="mobileGoList" v-if="this.mobile">
            <div>
              <ul>
                <li :class="{on:currentTab == 7}"><button @click="currentTab = 7; gotoTop()"><slot name="mTeacherName">선생님 홈</slot></button></li>
                <li :class="{on:currentTab == 0}"><button @click="currentTab = 0; gotoTop()">온라인 강의</button></li>
                <li :class="{on:currentTab == 1}"><button @click="currentTab = 1; gotoTop()">학원 강의</button></li>
                <li :class="{on:currentTab == 2}"><button @click="currentTab = 2; gotoTop()">라이브 강의</button></li>
                <li :class="{on:currentTab == 3}"><button @click="currentTab = 3; gotoTop()">교재</button></li>
                <li :class="{on:currentTab == 4}"><button @click="currentTab = 4; gotoTop()">공지사항</button></li>
                <li :class="{on:currentTab == 5}"><button @click="currentTab = 5; gotoTop()">수강후기</button></li>
                <li :class="{on:currentTab == 6}"><button @click="currentTab = 6; gotoTop()">학습 Q&amp;A</button></li>
              </ul>
            </div>
            <slot name="teacherMobileGoListBg"><span class="sbjEdu"></span></slot>
          </div>
          <!-- //모바일 상단 내비 -->
          <!-- 선생님홈 인트로 -->
          <div class="homeIntro" v-if="!this.mobile">
            <div class="frameBack">
              <!-- 왼쪽 내비 -->
              <div class="goList">
                <slot name="teacherName">
                  <div class="sbjEdu">
                    <h2><span>교육학</span>김현 선생님</h2>
                    <button @click="ssamHistoryPop = true">약력/저서</button>
                  </div>
                </slot>
                <ul>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 0">온라인 강의</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 1">학원 강의</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 2">라이브 강의</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 3">교재</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 4">공지사항</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 5">수강후기</button></li>
                  <li><button @click="goto('ssamLectureDetail'), currentTab = 6">학습 Q&amp;A</button></li>
                </ul>
              </div>
              <!-- //왼쪽 내비 -->
              <!-- 중앙 웰컴 -->
              <slot name="teacherSlogan">
                <div class="welcome">
                  <strong><span>교육학</span>김현 선생님</strong>
                  <img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome01_txt.png`)" alt="언제나 변함없는 교육학의 정·답 교육학" class="txtCut" />
                  <img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome01.png`)" alt="김현 선생님" class="ssamCut" />
                </div>
              </slot>
              <!-- //중앙 웰컴 -->
              <!-- 오른쪽 최신글 -->
              <div class="latestPosts">
                <div class="notice">
                  <dl>
                    <dt>
                      <strong>공지사항</strong>
                      <button class="btnMore" @click="goto('ssamLectureDetail'), currentTab = 3">더보기</button>
                    </dt>
                    <dd>
                      <ul>
                        <li @click="popupNoticeTrigger = true" class="new">오늘마감! 초단기 이론정리반 할인혜택!</li>
                        <li @click="popupNoticeTrigger = true" class="new">앵콜! 초단기 이론정리반 ~80% 할인혜택</li>
                        <li @click="popupNoticeTrigger = true">재학생을 위한 합격전략 특강 기간 한정(~5/29) 오픈</li>
                      </ul>
                    </dd>
                  </dl>
                </div>
                <div class="recommend">
                  <dl>
                    <dt>
                      <strong>합격생 추천</strong>
                      <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
                    </dt>
                    <dd>
                      <router-link to="/mkup/pass/interview">
                        <em>2021 학년도 [유아] 경기</em>
                        <i>dre*****</i>
                        <span>저는 이번 2021학년도 경기도 공립유치원 교사 임용시험에서 최종합격을 한 합격생입니다. <br/>합격 선생님들의 합격수기를 보며 좌절할 때도</span>
                      </router-link>
                    </dd>
                  </dl>
                </div>
                <div class="review">
                  <dl>
                    <dt>
                      <strong>수강후기</strong>
                      <button class="btnMore" @click="goto('ssamLectureDetail'), currentTab = 4">더보기</button>
                    </dt>
                    <dd>
                      <router-link to="/mkup/special/review">
                        <em>교육과정 총론반</em>
                        <i>mar*****</i>
                        <span>작년에 1급 정교사 연수를 받으면서 제 스스로가 우물 안 개구리처럼 느껴졌었어요, 그래서 임용공부를 해보자고 마음먹게 되었고 지금 선생님의</span>
                      </router-link>
                    </dd>
                  </dl>
                </div>
              </div>
              <!-- //오른쪽 최신글 -->
              <div class="sampleLec">
                <h3>강의 맛보기</h3>
                <ul>
                  <li>
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                    <em>이론강의</em>
                  </li>
                  <li>
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                    <em>문제풀이</em>
                  </li>
                  <li>
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                    <em>면접/실연</em>
                  </li>
                  <li>
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                    <em>기타 (특강1)</em>
                  </li>
                  <li>
                    <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                    <em>기타 (특강2)</em>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- //선생님홈 인트로 -->
          <TeacherHome  v-if="!this.mobile" />
          <!-- tab-wrap -->
          <div class="tabwrap ssamLecture" id="tabwrapTop">
            <!-- 선생님 개별 네비게이션 -->
            <div class="ssamLectureTop" v-if="!this.mobile">
              <div class="tabBack">
                <div class="tabNav">
                  <slot name="ssamTabName"><strong>배지윤 <em>선생님</em></strong></slot>
                  <nav>
                    <ul>
                      <li :class="{on:currentTab===0}"><button @click="currentTab = 0, goto('ssamLectureDetail')">온라인 강의</button></li>
                      <li :class="{on:currentTab===1}"><button @click="currentTab = 1, goto('ssamLectureDetail')">학원 강의</button></li>
                      <li :class="{on:currentTab===2}"><button @click="currentTab = 2, goto('ssamLectureDetail')">라이브 강의</button></li>
                      <li :class="{on:currentTab===3}"><button @click="currentTab = 3, goto('ssamLectureDetail')">교재</button></li>
                      <li :class="{on:currentTab===4}"><button @click="currentTab = 4, goto('ssamLectureDetail')">공지사항</button></li>
                      <li :class="{on:currentTab===5}"><button @click="currentTab = 5, goto('ssamLectureDetail')">수강후기</button></li>
                      <li :class="{on:currentTab===6}"><button @click="currentTab = 6, goto('ssamLectureDetail')">학습 Q&amp;A</button></li>
                    </ul>
                  </nav>
                </div>
                <slot name="ssamTabBg"><span class="sbjEdu"></span></slot>
              </div>
              <!-- 가격 -->
              <div class="lecturePriceTotal">
                <div class="frameBack">
                  <dl>
                    <dt class="iPayTit">수강료</dt>
                    <dd>
                      <span class="price"><del>5,136,000</del><strong>2,712,000<i>원</i></strong></span>
                    </dd>
                  </dl>
                  <dl>
                    <dt class="iPayTit">교재비</dt>
                    <dd>
                      <span class="price"><del>193,000</del><strong>173,700<i>원</i></strong></span>
                    </dd>
                  </dl>
                  <dl class="last">
                    <dt class="iPayTit">배송비</dt>
                    <dd>
                      <span class="price"><strong>9,000<i>원</i></strong></span>
                    </dd>
                  </dl>
                  <span class="right">
                    <button class="btnS redline">장바구니</button>
                    <button class="btnS red">즉시결제</button>
                  </span>
                </div>
              </div>
              <!-- //가격 -->
            </div>
            <!-- //선생님 개별 네비게이션 -->
            <!-- 선생님 개별 강의목록 및 게시판 -->
            <div class="frameBack" ref="ssamLectureDetail">
              <div class="ssamLecListArea tabLayout">
                <div v-if="currentTab == 7" class="tabData ssamCase" :key="currentTab">
                  <!-- 선생님홈 인트로 -->
                  <div class="homeIntro">
                    <!-- 중앙 웰컴 -->
                    <slot name="teacherMobileSlogan">
                      <div class="welcome sbjEdu">
                        <img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome01_txt.png`)" alt="언제나 변함없는 교육학의 정·답 교육학" class="txtCut" />
                        <img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome01.png`)" alt="김현 선생님" class="ssamCut" />
                        <span>교육학<em><strong>김현</strong> 선생님</em></span>
                        <button @click="ssamHistoryPop = true">약력/저서</button>
                      </div>
                    </slot>
                    <!-- //중앙 웰컴 -->
                    <div class="mPosts">
                      <span>
                        <router-link to="/mkup/pass/interview" class="btnPosts01">합격생 추천</router-link>
                      </span>
                      <span>
                        <button class="btnPosts02"  @click="currentTab = 5; gotoTop()">수강후기</button>
                      </span>
                      <span>
                        <button class="btnPosts03">학습 설명회</button>
                      </span>
                    </div>
                    <div class="mNotice">
                      <strong>공지</strong>
                      <span @click="popupNoticeTrigger = true" class="new">오늘마감! 초단기 이론정리반 할인혜택! 오늘마감! 초단기 이론정리반 할인혜택! </span>
                      <button class="btnMore" @click="currentTab = 4; gotoTop()">더보기</button>
                    </div>
                    <!---->
                    <div class="mBanner">
                      <a><small>2021 설명회</small><p class="tp1"><em>합격</em> 전략</p></a>
                      <a><small>수강생 제보</small><p class="tp2"><em>적중</em> 사례</p></a>
                      <a><small>합격생</small><p class="tp3">나만의<em> 학습법</em></p></a>
                    </div>
                    <div class="sampleLec">
                      <h3>강의 맛보기</h3>
                      <swiper :options="sampleLecOption">
                        <swiper-slide>
                          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                          <em>이론강의</em>
                        </swiper-slide>
                        <swiper-slide>
                          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                          <em>문제풀이</em>
                        </swiper-slide>
                        <swiper-slide>
                          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                          <em>면접/실연</em>
                        </swiper-slide>
                        <swiper-slide>
                          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                          <em>기타 (특강1)</em>
                        </swiper-slide>
                        <swiper-slide>
                          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
                          <em>기타 (특강2)</em>
                        </swiper-slide>
                      </swiper>
                      <div class="bothArrows page">
                        <span class="swiper-pagination" slot="pagination"/></span>
                        <span class="swiper-button-prev" slot="button-prev"/></span>
                        <span class="swiper-button-next" slot="button-next"/></span>
                      </div>
                    </div>
                  </div>
                  <!-- //선생님홈 인트로 -->
                  <TeacherHome />
                </div>
                <div v-if="currentTab == 0" class="tabData firstCase navHave" :key="currentTab"><!-- 20220308 수정 : 클래스 navHave 추가 -->
                  <TeacherOnline /> <!-- 온라인강의 -->
                </div>
                <div v-if="currentTab == 1" class="tabData navHave"><!-- 20220308 수정 : 클래스 navHave 추가 -->
                  <TeacherDirectSeoul /> <!-- 서울학원 -->
                </div>
                <div v-if="currentTab == 2" class="tabData navHave"><!-- 20220308 수정 : 클래스 navHave 추가 -->
                  <TeacherLive /> <!-- 라이브 강의 -->
                </div>
                <div v-if="currentTab == 3" class="tabData">
                  <TeacherBook /> <!-- 교재 -->
                </div>
                <div v-if="currentTab == 4" class="tabData">
                  <TeacherNotice /> <!-- 공지사항 -->
                </div>
                <div v-if="currentTab == 5" class="tabData">
                  <TeacherReview /> <!-- 수강후기 -->
                </div>
                <div v-if="currentTab == 6" class="tabData">
                  <TeacherQnA /> <!-- 학습 Q&amp;A -->
                </div>
              </div>
            </div>
            <!-- //선생님 개별 강의목록 및 게시판 -->
          </div>
          <!-- //tab-wrap -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 약력/저서 Popup -->
    <Popup v-if='ssamHistoryPop' @close="ssamHistoryPop = false" class="large ssamHistoryPop">
      <template slot="modalheader">
        <div><h1>약력/저서</h1></div>
        <button @click="ssamHistoryPop = false" class="modalClose">close</button>
      </template>
      <template slot="modalbody">
        <div>
          <dl>
            <dt>약력</dt>
            <dd>
              <!--관리자에 등록된 그대로 표기-->
              · 숙명여자대학교 교육학과, 숙명여자대학교 대학원 교육학과 졸업<br/>
              · 교육학 학사, 교육학 석사, 교육학 박사 학위 취득<br/>
              · 숙명여대, 서울보건대, 고려대, 세종대, 명지대, 한국체육대학, 한남대, 목원대 등<br/>
              · 다수 대학에서 교육학 및 교직과목 강의<br/>
              · 前 을지대학 교직과 교수<br/>
              · 前 아모르임용고시학원 교육학 전임교수<br/>
              · 前 숙명여대 교육대학원 강사<br/>
              · 現 교원임용 희소고시학원 교육학 전임교수<br/>
              · 논문 석사학위논문 : 통신인 문화와 그 교육적 의미의 연구<br/>
              · 박사학위논문 : 청소년 문제 담론을 통한 주체형성 과정에 관한 연구
            </dd>
          </dl>
          <dl>
            <dt>저서</dt>
            <dd>
              <span>키위 교육학 골드편 상권</span>
              <span>키위 교육학 그린편 상권</span>
            </dd>
          </dl>
        </div>
      </template>
    </Popup>
    <!-- //약력/저서 Popup -->
    <!-- 공지사항 상세내용 Popup -->
    <Popup v-if='popupNoticeTrigger' @close="popupNoticeTrigger = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>공지사항</h1>
          <button @click="popupNoticeTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail">
          <!-- 제목영역 -->
          <div class="boardHead stateCase">
            <em class="iBbsSet notice">공지</em>
            <strong>[국어 송헌/김준팀] 3~4월 신간교재 무료증정 (공지사항 공지)</strong>
            <div class="boardInfo">
              <em>작성일 : <i>2021-05-29</i></em>
              <em>조회수 : <i>222</i></em>
            </div>
          </div>
          <!-- //제목영역 -->
          <!-- 파일영역 -->
          <div class="boardFile">
            <ul class="uploadFileList">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                </span>
              </li>
            </ul>
          </div>
          <!-- //파일영역 -->
          <!-- 내용영역 -->
          <div class="boardView">
            <pre>
              안녕하세요.
              교사의 꿈을 위한 수험동반자,

              KG애듀원 희소/쌤플러스 입니다.

              현직교사들이 추천하는 강의!

              전문상담 이진영선생님의 합격을 부르는 비법!
              2021 New 엄선키워드212 해설강의 이벤트가 재오픈 되었습니다.

              전문상담 점수 상승의 핵심 키워드!
              엄선 키워드 212는?

              #2021학년도 출제 영역 반영
              #출제 빈도가 높은 키워드만 정리
              #중요하지만 눈에 띄지 않았던 키워드 정리

              거기에, 새로운 해설강의와 함께 엄선키워드 212교재도 업그레이드!!

              미래의 전문상담선생님을 꿈꾸시는 예비선생님이라면!
              할인된 수강료로 핵심 키워드를 잡을 수 있는 기회 놓치지 마세요!!
            </pre>
            <!-- //에디터 내용 -->
          </div>
          <!-- //내용영역 -->
        </div>
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupNoticeTrigger = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //공지사항 상세내용 Popup -->
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>

    <!-- 모바일용 결제내역 -->
    <div id="buyFloating" :class="{on:buyFloatingTrigger == true}" v-if="this.mobile">
      <div class="buyOpnerBack"><button class="buyOpner" @click="buyFloatingTrigger = !buyFloatingTrigger">여닫기</button></div>
      <!-- 데이터 영역 -->
      <div class="buyTemplate">
        <!-- 수강신청 목록-->
        <div class="buySet">
          <dl>
            <dt>수강료</dt>
            <dd>
              <span class="price"><del>2,568,000</del><strong>2,311,200<i>원</i></strong></span>
            </dd>
          </dl>
          <dl>
            <dt>교재비</dt>
            <dd>
              <span class="price"><del>193,000</del><strong>173,700<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="delivery">
            <dt>배송비</dt>
            <dd>
              <span class="price"><strong>9,000<i>원</i></strong></span>
            </dd>
          </dl>
          <dl class="total">
            <dt>예상 결제 금액</dt>
            <dd>
              <span class="price"><del>2,770,000</del><strong>2,493,900<i>원</i></strong></span>
            </dd>
          </dl>
        </div>
        <!-- //수강신청 목록 -->
      </div>
      <!-- //데이터 영역 -->
      <div class="buyBtnSet">
        <button class="btnL red" v-if="!buyFloatingTrigger" @click="buyFloatingTrigger = !buyFloatingTrigger">구매하기</button>
        <span v-if="buyFloatingTrigger">
          <button class="btnL redline">장바구니</button>
          <button class="btnL red">즉시결제</button>
        </span>
      </div>
    </div>
    <!-- //모바일용 결제내역 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherHome from '@/views/lecture/TeacherHome.vue';
import TeacherOnline from '@/views/lecture/TeacherOnline.vue';
import TeacherDirectSeoul from '@/views/lecture/TeacherDirectSeoul.vue';
import TeacherLive from '@/views/lecture/TeacherLive.vue';
import TeacherBook from '@/views/lecture/TeacherBook.vue';
import TeacherNotice from '@/views/lecture/TeacherNotice.vue';
import TeacherReview from '@/views/lecture/TeacherReview.vue';
import TeacherQnA from '@/views/lecture/TeacherQnA.vue';


export default {
  mixins: [Mixin],
  name: 'TeacherTemplatePc',
  components: {
    TeacherHome,
    TeacherOnline,
    TeacherDirectSeoul,
    TeacherLive,
    TeacherBook,
    TeacherNotice,
    TeacherReview,
    TeacherQnA,
  },
  data() {
    return {
      mobile:false,
      buyFloatingTrigger:false,
      currentTab: 0,
      quickLoc: 0,
      videoPopTrigger01: false,
      popupNoticeTrigger: false,
      ssamHistoryPop:false,
      sampleLecOption: {
        slidesPerView: 2,
        spaceBetween: 25,
        pagination: {
          el: ".sampleLec .swiper-pagination",
          type: "fraction",
        },
        navigation: { nextEl: '.sampleLec .swiper-button-next', prevEl: '.sampleLec .swiper-button-prev' },
      }
    }
  },
  methods: {
    mobileTabLayout(){
      if(!this.mobile ){
        this.currentTab = 0;
      } else {
        this.currentTab = 7;
      }
    },
    gotoTop() {
      window.scrollTo({
        top: 50,
        left: 0,
        behavior: 'smooth'
      });
    },
    goto(refName) {
      var element = this.$refs[refName];
      var topPos = element.offsetTop - 39;
      //console.log(topPos);
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    this.mobileTabLayout();
  },
  destroyed() {
  },
}
</script>
