<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="passIndex">
          <div class="mainVisual">
            <div class="whiteArea">
              <div class="keyword">
                <span>수석합격</span>
                <span>초수합격</span>
                <span>고득점 합격</span>
              </div>
              <div class="tit">
                <div><span>합격생이 전하는 임용 합격 비법</span></div>
                <img :src="require(`@/assets/images/img_pass_main02.png`)" alt=""/>
              </div>
              <div class="tag">
                <em>#단기합격</em>
                <em>#육아맘합격</em>
                <em>#직장병행합격</em>
                <em>#학업병행합격</em>
                <em>#올인합격</em>
                <em>#장수합격</em>
                <em>#논출만점합격</em>
                <em>#2차뒤집기합격</em>
              </div>
            </div>
            <div class="yellowArea">
                <img :src="require(`@/assets/images/bg_pass_main02.png`)" alt="" class="img" v-if="!this.mobile" />
                <img :src="require(`@/assets/images/m/bg_pass_main02.svg`)" alt="" class="img" v-if="this.mobile" />
              <div class="successfulTit">
                <div>합격으로 증명하는 희소/쌤플러스</div>
                <img :src="require(`@/assets/images/img_pass_main03.png`)" alt=""/>
              </div>
              <div class="successfulList">
                <strong><img :src="require(`@/assets/images/img_pass_main04.png`)" alt=""/></strong>
                <div class="successfulListBack">
                  <swiper :options="successSwiperOption2">
                    <swiper-slide>
                      <span>2021 보건 부산 합격자 공*정</span>
                      <span>2021 전문상담 인천 합격자 이*수</span>
                      <span>2021 유아 경기 합격자 심*연</span>
                      <span>2021 유아 경기 합격자 김*진</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 보건 서울 합격자 김*희</span>
                      <span>2021 초등특수 서울 합격자 옥*미</span>
                      <span>2021 보건 경기 합격자 김*희</span>
                      <span>2021 유아 부산 합격자 박*정</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 보건 대구 합격자 김*은</span>
                      <span>2021 중등특수 경기 합격자 조*진</span>
                      <span>2021 국어 서울 합격자 변*진</span>
                      <span>2021 유아 전북 합격자 김*정</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 보건 서울 합격자 김*진</span>
                      <span>2021 보건 전남 합격자 정*민</span>
                      <span>2021 역사 전북 합격자 이*희</span>
                      <span>2021 전문상담 경기 합격자 유*영</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 유아특수 충북 합격자 송*빈</span>
                      <span>2021 가정 경기 합격자 정*아</span>
                      <span>2021 보건 서울 합격자 노*령</span>
                      <span>2021 중등특수 충남 합격자 양*석</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 유아 서울 합격자 이*슬</span>
                      <span>2021 초등특수 인천 합격자 박*진</span>
                      <span>2021 중등특수 경기 합격자 윤*암</span>
                      <span>2021 국어 경북 합격자 김*교</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 중등특수 대전 합격자 이*샘</span>
                      <span>2021 일본어 전북 합격자 김*하</span>
                      <span>2021 보건 부산 합격자 백*미</span>
                      <span>2021 역사 경기 합격자 박*우</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 전문상담 서울 합격자 성*은</span>
                      <span>2021 지리 경기 합격자 강*정</span>
                      <span>2021 일반사회 제주 합격자 김*리</span>
                      <span>2021 전문상담 서울 합격자 전*현</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 보건 서울 합격자 손*진</span>
                      <span>2021 국어 제주 합격자 김*주</span>
                      <span>2021 유아 서울 합격자 김*선</span>
                      <span>2021 전문상담 인천 합격자 박*연</span>
                    </swiper-slide>
                    <swiper-slide>
                      <span>2021 역사 강원 합격자 위*우</span>
                      <span>2021 국어 서울 합격자 김*재</span>
                      <span>2021 미술 울산 합격자 김*윤</span>
                      <span>2021 전문상담 대구 합격자 우*연</span>
                    </swiper-slide>
                  </swiper>
                </div>
                <p>※ 희소/쌤플러스 누적 합격수기 건수+합격자 인터뷰 영상건수</p>
              </div>
            </div>
          </div>
          <!---->
          <div class="caseByCase">
            <div class="frameBack">
              <h2><strong>Case by Case</strong> 상황별 맞춤 합격 전략</h2>
              <!-- tab-wrap -->
              <div class="cbcTabwrap">
                <!-- tab -->
                <div class="tabBack">
                  <div class="tabNav">
                    <nav>
                      <ul class="blockTab">
                        <li :class="{on:currentTab===0}"><button @click="currentTab = 0">#단기합격</button></li>
                        <li :class="{on:currentTab===1}"><button @click="currentTab = 1">#육아맘합격</button></li>
                        <li :class="{on:currentTab===2}"><button @click="currentTab = 2">#직장병행합격</button></li>
                        <li :class="{on:currentTab===3}"><button @click="currentTab = 3">#학업병행합격</button></li>
                        <li :class="{on:currentTab===4}"><button @click="currentTab = 4">#올인합격</button></li>
                        <li :class="{on:currentTab===5}"><button @click="currentTab = 5">#장수합격</button></li>
                        <li :class="{on:currentTab===6}"><button @click="currentTab = 6">#논술만점합격</button></li>
                        <li :class="{on:currentTab===7}"><button @click="currentTab = 7">#2차뒤집기합격</button></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <!--// tab -->
                <div class="tabLayout">
                  <div v-if="currentTab == 0" class="tabData" :key="currentTab">#단기합격</div>
                  <div v-if="currentTab == 1" class="tabData">#육아맘합격</div>
                  <div v-if="currentTab == 2" class="tabData">#직장병행합격</div>
                  <div v-if="currentTab == 3" class="tabData">#학업병행합격</div>
                  <div v-if="currentTab == 4" class="tabData">#올인합격</div>
                  <div v-if="currentTab == 5" class="tabData">#장수합격</div>
                  <div v-if="currentTab == 6" class="tabData">#논술만점합격</div>
                  <div v-if="currentTab == 7" class="tabData">#2차뒤집기합격</div>
                </div>
              </div>
              <!-- //tab-wrap -->
              <router-link to="/mkup/pass/review/write" class="btnL green">합격수기 작성하기</router-link>
            </div>
          </div>
          <!---->
          <div class="passIndexInterview">
            <h2><span>생생한 합격 노하우가 담겨 있는</span> 인터뷰</h2>
            <div class="bothArrows">
              <swiper :options="swiperOption02">
                <swiper-slide>
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
                  <p>
                    <strong>경기 유치원 임용시험 합격</strong>
                    “유아 이동건 선생님의 강의 완전 강추합니다!”
                  </p>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">이동건 <em>선생님</em></router-link>
                </swiper-slide>
                <swiper-slide>
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
                  <p>
                    <strong>경기 유치원 임용시험 합격</strong>
                    “유아 이동건 선생님의 강의 완전 강추합니다!”
                  </p>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">이동건 <em>선생님</em></router-link>
                </swiper-slide>
                <swiper-slide>
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
                  <p>
                    <strong>경기 유치원 임용시험 합격</strong>
                    “유아 이동건 선생님의 강의 완전 강추합니다!”
                  </p>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">이동건 <em>선생님</em></router-link>
                </swiper-slide>
              </swiper>
              <div class="mbPage" v-if="!this.mobile">
                <span class="swiper-button-prev" slot="button-prev"/>
                <span class="swiper-button-next" slot="button-next"/>
              </div>
            </div>
          </div>
          <!---->
          <div class="passMsg">
            <div class="frameBack">
              <h2><span>합격생이 전하는</span> 학습방법 및 시간관리 노하우, 따뜻한 격려 메시지</h2>
              <IndexMsgPc v-if="!this.mobile" />
              <IndexMsgM v-else-if="this.mobile" />
              <!---->
              <div class="comment">
                <div class="commentBox">
                  <ul>
                    <li>
                      <div @click="popupTrigger1 = true">
                        <em>sss*****</em>
                        <strong>왜 틀렸는지 파악하기</strong>
                        <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
                        <span>2021-04-03</span>
                      </div>
                    </li>
                    <li>
                      <div class="male" @click="popupTrigger1 = true">
                        <em>sss*****</em>
                        <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요</strong>
                        <p>새로운 시작을 준비하기
                           위해 쉬었던 시기였습니다. 6수만에  중등 특수시험에 합격했습니다. 서른 일곱에 시작했지만,
                          20대부터 객관식 교육학 시험을 준비했던 경험 탓에 논술형으로 바뀐 시험이라도 크게 어려움은 없었습니다.</p>
                        <span>2021-04-03</span>
                      </div>
                    </li>
                    <li>
                      <div @click="popupTrigger1 = true">
                        <em>sss*****</em>
                        <strong>자신만의 암기 카드를 만들어보세요</strong>
                        <p>지난 실패 경험들을 되돌아 보고 보완할 수 있는 전략들을 생각했으며, 매일 독서실에 가서 공부하는 습관을 가지도록 노력하였습니다.</p>
                        <span>2021-04-03</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- // -->
              <!-- -->
              <div class="comment noList">
                <div class="commentBox">
                  <ul>
                    <li>
                      <div>
                        <em>등록된 합격수기가 없습니다.</em>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- // -->
            </div>
          </div>
          <!--//-->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
    <!-- 합격수기 상세내용 Popup -->
    <Popup v-if='popupTrigger1' @close="popupTrigger1 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>합격수기</h1>
          <button @click="popupTrigger1 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="boardDetail">
          <!-- 제목영역 -->
          <div class="boardHead">
            <strong>자신의 환경을 충분히 고려하고 스터디를 활용하세요.</strong>
            <div class="boardInfo">
              <em>작성자 : <i>Hor*****</i></em>
              <em>등록일 : <i>2021-05-19</i></em>
              <em>조회수 : <i>1,222</i></em>
            </div>
          </div>
          <!-- //제목영역 -->
          <!-- 합격수기 설문조사 상세내용 -->
          <div class="boardPassingView">
            <div class="tableList">
              <dl>
                <dt>합격연도</dt>
                <dd>2021년</dd>
              </dl>
              <dl>
                <dt>준비기간</dt>
                <dd>1년</dd>
              </dl>
              <dl v-if="!this.mobile">
                <dt>과목</dt>
                <dd>중국어</dd>
              </dl>
              <dl v-if="!this.mobile">
                <dt>지역</dt>
                <dd>경기</dd>
              </dl>
              <dl v-if="this.mobile">
                <dt>과목 / 지역</dt>
                <dd>중국어 / 경기</dd>
              </dl>
              <dl class="last">
                <dt>추천 선생님</dt>
                <dd><router-link to="/mkup/lecture/teacher" class="btnTcHomeName">희소 중국어팀</router-link></dd>
              </dl>
            </div>
            <!---->
            <div class="monthData">
              <strong>1. 시기별 교육학 학습방법</strong>
              <dl>
                <dt>1~2월</dt>
                <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
              </dl>
              <dl>
                <dt>3~4월</dt>
                <dd>
                  원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
                  늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
                </dd>
              </dl>
              <dl>
                <dt>5~6월</dt>
                <dd>
                  원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
                  늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
                </dd>
              </dl>
              <dl>
                <dt>7~8월</dt>
                <dd>
                  원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
                  늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
                </dd>
              </dl>
              <dl>
                <dt>9~11월</dt>
                <dd>
                  원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
                  늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
                </dd>
              </dl>
            </div>
            <div class="monthData">
              <strong>2. 시기별 전공 학습방법</strong>
              <dl>
                <dt>1~2월</dt>
                <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
              </dl>
              <dl>
                <dt>3~4월</dt>
                <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
              </dl>
              <dl>
                <dt>5~6월</dt>
                <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
              </dl>
              <dl>
                <dt>7~8월</dt>
                <dd>원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.</dd>
              </dl>
              <dl>
                <dt>9~11월</dt>
                <dd>
                  원래 임용고시를 준비할 생각 없이 일반 대학원 진학을 준비하다가 상담 현장을 먼저 경험하자는 생각으로 방향을 바꾸었습니다.
                  늦게 합류하게 되었고, 인강으로 우선 시작하여 3월부터 직강을 다니기 시작했습니다. 아르바이트는 학교 근로생으로 8월까지 근무하였습니다.
                </dd>
              </dl>
            </div>
          </div>
          <!-- //합격수기 설문조사 상세내용 -->
        </div>
      </template>
      <template slot="modalfooter">
        <!-- 상세 네비게이션영역 -->
        <div class="boardNavi">
          <a href="#none;" class="prev">
            <strong>PREV</strong>
            <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
          </a>
          <button class="btnList" @click="popupTrigger1 = false">목록</button>
          <a href="#none;" class="next">
            <strong>NEXT</strong>
            <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
          </a>
        </div>
        <!-- //상세 네비게이션영역 -->
      </template>
    </Popup>
    <!-- //합격수기 상세내용 Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import IndexMsgPc from '@/views/pass/IndexMsgPc.vue';
import IndexMsgM from '@/views/pass/IndexMsgM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    IndexMsgPc,
    IndexMsgM
  },
  data() {
    return {
      videoPopTrigger01: false,
      popupTrigger1: false,
      currentTab: 0,
      successSwiperOption2: {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true,
        direction: "vertical",
        //centeredSlides: true,
        speed: 1300,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        touchRatio: 0, //드래그 금지
        mousewheel: {
          invert: false,
          forceToAxis: false,
        },
        controller: {
          inverse: false,
        },
      },
      swiperOption02: {
        slidesPerView: "auto",
        loop:true,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 450,
        autoplay: {
          delay: 3500
        },
        navigation: { nextEl: '.passIndexInterview .swiper-button-next', prevEl: '.passIndexInterview .swiper-button-prev' },
      },
    }
  },
}
</script>
