<template lang="html">
  <div>
    <!-- container -->
    <div id="container" class="subMainCase">
      <section>
        <!-- content -->
        <div class="content">
          <article>
            <!-- page layout -->
            <div class="academyIndex">
              <!-- 메인 -->
              <div class="mainSlogan">
                <div class="txt">
                  <div class="mainTxt">
                    <em data-aos="fade-up" data-aos-duration="1000"
                      ><strong>희소고시학원</strong>은</em
                    >
                    <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                      >임용고시를 준비하는 이들을 위해 노력합니다.</span
                    >
                  </div>
                  <p data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1600">
                    최고의 강의, 최고의 선생님을 지금 여기서 만나보세요.
                  </p>
                </div>
                <!-- <button class="more" @click="gotoSection('academyTrigger01')" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="2000">more</button> -->
                <div class="btn" id="scrollBeforTab">
                  <div class="frameBack">
                    <button class="goArea01" @click="gotoSection('academyTrigger01')">
                      강의실 배정표
                    </button>
                    <button class="goArea02" @click="gotoSection('academyTrigger02')">
                      학원 보충강의
                    </button>
                    <button class="goArea03" @click="gotoSection('academyTrigger03')">
                      사물함 신청
                    </button>
                    <button class="goArea04" @click="gotoSection('academyTrigger04')">
                      스터디 하실래요
                    </button>
                    <button class="goArea05" @click="gotoSection('academyTrigger05')">
                      학원 시설
                    </button>
                    <button class="goArea06" @click="gotoSection('academyTrigger06')">
                      1:1 상담하기
                    </button>
                    <button class="goArea07" @click="gotoSection('academyTrigger07')">
                      학원 위치
                    </button>
                  </div>
                </div>
                <img
                  :src="require(`@/assets/images/img_academy_plus1.png`)"
                  alt=""
                  class="plusImg1"
                  data-aos="fade-up-left"
                  data-aos-delay="1200"
                />
                <img
                  :src="require(`@/assets/images/img_academy_plus2.png`)"
                  alt=""
                  class="plusImg2"
                  data-aos="fade-up-left"
                  data-aos-delay="700"
                />
                <img
                  :src="require(`@/assets/images/img_academy_plus3.svg`)"
                  alt=""
                  class="plusImg3"
                  data-aos="fade-down"
                  data-aos-delay="50"
                />
              </div>
              <!-- //메인 -->
              <div class="academyTopBtn" id="scrollAfterTab">
                <div class="frameBack">
                  <span :class="{ on: menuTab === 0 }"
                    ><button class="goArea01" @click="gotoSection('academyTrigger01')">
                      <em>강의실 배정표</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 1 }"
                    ><button class="goArea02" @click="gotoSection('academyTrigger02')">
                      <em>학원 보충강의</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 2 }"
                    ><button class="goArea03" @click="gotoSection('academyTrigger03')">
                      <em>사물함 신청</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 3 }"
                    ><button class="goArea04" @click="gotoSection('academyTrigger04')">
                      <em>스터디 하실래요</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 4 }"
                    ><button class="goArea05" @click="gotoSection('academyTrigger05')">
                      <em>학원 시설</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 5 }"
                    ><button class="goArea06" @click="gotoSection('academyTrigger06')">
                      <em>1:1 상담하기</em>
                    </button></span
                  >
                  <span :class="{ on: menuTab === 6 }"
                    ><button class="goArea07" @click="gotoSection('academyTrigger07')">
                      <em>학원 위치</em>
                    </button></span
                  >
                </div>
              </div>
              <!-- 강의실 배정표 -->
              <div class="classSchedule" id="academy01Loc" ref="academyTrigger01">
                <div class="frameBack">
                  <div class="classRoomInfo">
                    <div class="box">
                      <div class="timeBox">
                        <em class="iLocSet ivy">아이비</em>
                        <em class="iLocSet idea">이데아</em>
                        <dl>
                          <dt>이데아관, 아이비관</dt>
                          <dd><span>월~토요일 20:30</span> 일요일/공휴일 17:30</dd>
                        </dl>
                      </div>
                      <p>
                        <span
                          >강의실 확정은 전일 <em>21</em>시경 입니다. 정확한 배정은 <em>21</em>시
                          이후에 확인해 주세요.</span
                        >
                        <span
                          >사회적 거리두기 또는 학원 사정에 따라 자습실 이용이 제한될 수
                          있습니다.</span
                        >
                      </p>
                    </div>
                  </div>
                  <h2>언제 어디서 어떤 강의를 진행하나요?</h2>
                  <div class="scheduleArea">
                    <div class="dateChoice">
                      <button class="prev">이전</button>
                      <strong>2021년 5월 1일 (토)</strong>
                      <button class="next">다음</button>
                    </div>
                    <!-- tab-wrap -->
                    <div class="scheduleTabwrap">
                      <!-- tab -->
                      <div class="tabBack">
                        <div class="tabNav">
                          <nav>
                            <ul class="blackLineTab">
                              <li :class="{ on: currentTab === 0 }">
                                <button @click="currentTab = 0">이데아관</button>
                              </li>
                              <li :class="{ on: currentTab === 1 }">
                                <button @click="currentTab = 1">아이비관</button>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      <!--// tab -->
                      <div class="tabLayout">
                        <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                          <ClassScheduleIdea />
                          <!-- 서울 이데아관 -->
                        </div>
                        <div v-if="currentTab == 1" class="tabData">
                          <ClassScheduleIvy /><!-- 서울 아이비관 -->
                        </div>
                      </div>
                    </div>
                    <!-- //tab-wrap -->
                  </div>
                </div>
              </div>
              <!-- //강의실 배정표 -->
              <!-- 학원 보충강의 -->
              <div class="infoAddition" id="academy02Loc" ref="academyTrigger02">
                <div class="frameBack">
                  <h2>
                    <span>다 듣지 못한 강의, </span>걱정말고 <strong>보충강의</strong> 신청하세요!
                  </h2>
                  <div>
                    <dl>
                      <dt class="tit01">무료보강</dt>
                      <dd>
                        학원 수업이 진행되고 동영상 강의 업데이트가 완료된 이후 신청 가능합니다.
                      </dd>
                      <dd>
                        보강 신청 횟수는 2개월 강의 기준 최대 2일로 제한하며, <br />보충강의 수강
                        시간은 해당 강의의 온라인 강의 수강시간과 동일합니다.
                      </dd>
                      <dd>보강은 학원강의 종료 10일 이내 까지만 신청 가능합니다.</dd>
                      <dd>신청/승인 날짜로부터 8일간 수강 가능합니다.(8일 이후 자동 삭제)</dd>
                      <dd>
                        보강 신청 완료 후 바로 강의가 시작되며, 내 강의실의 학원 보충 강의에서 수강
                        가능합니다.
                      </dd>
                      <dd>수업자료는 첨부파일로 제공됩니다.</dd>
                      <dd>신청하신 보강은 취소가 불가능 합니다.</dd>
                      <dd>일부 강좌(보너스 강의, 특강) 등 보충강의가 제공되지 않습니다.</dd>
                    </dl>
                    <dl>
                      <dt class="tit02">유료보강</dt>
                      <dd>무료보강 횟수가 소진된 이후부터 신청 가능합니다.</dd>
                      <dd>
                        유료보강 신청 횟수는 2개월 강의 기준 최대 2일로 제한하며, <br />보충강의
                        수강 시간은 해당 강의의 온라인 강의 수강시간과 동일합니다.
                      </dd>
                      <dd>유료보강은 학원 강의 종료 후 20일 이내 까지만 신청/결제 가능합니다.</dd>
                      <dd>신청/승인 날짜로부터 8일간 수강 가능합니다.(8일 이후 자동 삭제)</dd>
                      <dd>
                        보강은 결제 완료 후 바로 시작되며, 내 강의실의 학원 보충 강의에서 수강
                        가능합니다.
                      </dd>
                      <dd>수업자료는 첨부파일로 제공됩니다.</dd>
                      <dd>결제하신 유료보강은 취소가 불가능 합니다.</dd>
                      <dd>일부 강좌(보너스 강의, 특강) 등 보충강의가 제공되지 않습니다.</dd>
                    </dl>
                  </div>
                  <router-link to="/mkup/mylec/direct/addition" class="btnL green"
                    >보충강의 신청하기</router-link
                  >
                </div>
              </div>
              <!-- //학원 보충강의 -->
              <!-- 사물함 신청 -->
              <div class="goLocker" id="academy03Loc" ref="academyTrigger03">
                <div class="frameBack">
                  <h2>
                    학습자료의 보관!<br />
                    희소고시학원 사물함에 맡겨주세요.
                  </h2>
                  <div class="box">
                    <div class="bothArrows">
                      <swiper :options="swiperOption02">
                        <swiper-slide>
                          <router-link to=""
                            ><img
                              :src="require(`@/assets/images/thumbnail/@tmp_inside_goLocker.png`)"
                              alt=""
                          /></router-link>
                        </swiper-slide>
                        <swiper-slide>
                          <router-link to=""
                            ><img
                              :src="require(`@/assets/images/thumbnail/@tmp_inside_goLocker.png`)"
                              alt=""
                          /></router-link>
                        </swiper-slide>
                        <swiper-slide>
                          <router-link to=""
                            ><img
                              :src="require(`@/assets/images/thumbnail/@tmp_inside_goLocker.png`)"
                              alt=""
                          /></router-link>
                        </swiper-slide>
                      </swiper>
                      <div class="mbPage">
                        <span class="swiper-button-prev" slot="button-prev" />
                        <span class="swiper-button-next" slot="button-next" />
                      </div>
                    </div>
                    <div class="left">
                      <div>
                        <strong>학원강의 수강생만을 위한 서비스!</strong>
                        <p>
                          강의 수강을 위해 이것 저것 챙겨야 할 물건이 너무 많은 수강생분들<br />
                          이제 사물함 신청하고 가볍게 강의 들으러 오세요!
                        </p>
                        <router-link to="/mkup/mypage/payment/locker" class="btnL green"
                          >사물함 신청하기</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- //사물함 신청 -->
              <!-- 스터디 하실래요 -->
              <div class="goStudy" id="academy04Loc" ref="academyTrigger04">
                <div class="frameBack">
                  <h2>스터디 하실래요?</h2>
                  <p>
                    혼자 공부하는 것에 어려움을 느끼고 있다면!<br />
                    희소고시학원 수강생과 함께 공부해보세요!
                    <router-link to="/mkup/academy/study">자세히 보기</router-link>
                  </p>
                </div>
              </div>
              <!-- //스터디 하실래요 -->
              <!-- 학원 시설 -->
              <div class="directPanorama" id="academy05Loc" ref="academyTrigger05">
                <h2>내일의 선생님을 위한 학습 공간, <br />희소고시학원 시설을 확인해 보세요.</h2>
                <!-- tab-wrap -->
                <div class="panoramaTabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab2 === 0 }">
                            <button @click="currentTab2 = 0">서울 이데아관</button>
                          </li>
                          <li :class="{ on: currentTab2 === 1 }">
                            <button @click="currentTab2 = 1">서울 아이비관</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">
                      <DirectPanoramaIdea />
                      <!-- 서울 이데아관 -->
                    </div>
                    <div v-if="currentTab2 == 1" class="tabData">
                      <DirectPanoramaIvy /><!-- 서울 아이비관 -->
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <!-- //학원 시설 -->
              <!-- 1:1 상담하기 -->
              <div class="goCounsel" id="academy06Loc" ref="academyTrigger06">
                <div class="frameBack">
                  <h2>
                    1:1 상담하기<br />
                    임용에 대한 궁금증과 학습 방법을 도와드립니다.
                  </h2>
                  <div class="detail">
                    <span class="item01">
                      <em>누구나 신청 가능!!</em>
                      <strong>1:1 게시판 <i>학원전문가 상담</i></strong>
                      <router-link to="/mkup/counsel/bbswrite" class="btnM"
                        >바로가기</router-link
                      >
                    </span>
                    <span class="item02">
                      <em>누구나 신청 가능!!</em>
                      <strong>1:1 전공별 <i>선생님 상담</i></strong>
                      <router-link to="/mkup/counsel/bbswrite" class="btnM"
                        >바로가기</router-link
                      >
                    </span>
                  </div>
                </div>
              </div>
              <!-- //1:1 상담하기 -->
              <!-- 학원 위치 -->
              <div class="directLocation" id="academy07Loc" ref="academyTrigger07">
                <div class="frameBack">
                  <h2>희소고시학원은 언제나 <br />여러분의 방문을 기다리고 있습니다.</h2>
                  <!-- tab-wrap -->
                  <div class="directTabwrap">
                    <!-- tab -->
                    <div class="tabBack">
                      <div class="tabNav">
                        <nav>
                          <ul class="blackLineTab">
                            <li :class="{ on: currentTab3 === 0 }">
                              <button @click="currentTab3 = 0">서울 이데아관</button>
                            </li>
                            <li :class="{ on: currentTab3 === 1 }">
                              <button @click="currentTab3 = 1">서울 아이비관</button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <!--// tab -->
                    <div class="tabLayout">
                      <div v-if="currentTab3 == 0" class="tabData" :key="currentTab3">
                        <DirectLocationIdea />
                        <!-- 서울 이데아관 -->
                      </div>
                      <div v-if="currentTab3 == 1" class="tabData">
                        <DirectLocationIvy /><!-- 서울 아이비관 -->
                      </div>
                    </div>
                  </div>
                  <!-- //tab-wrap -->
                </div>
              </div>
              <!-- //학원 위치 -->
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
import Mixin from "@/plugins/mixins/Mixins.js";
import ClassScheduleIdea from "@/views/academy/ClassScheduleIdea.vue";
import ClassScheduleIvy from "@/views/academy/ClassScheduleIvy.vue";
import DirectPanoramaIdea from "@/views/academy/DirectPanoramaIdea.vue";
import DirectPanoramaIvy from "@/views/academy/DirectPanoramaIvy.vue";
import DirectLocationIdea from "@/views/counsel/DirectLocationIdea.vue";
import DirectLocationIvy from "@/views/counsel/DirectLocationIvy.vue";

export default {
  mixins: [Mixin],
  name: "Index",
  components: {
    ClassScheduleIdea,
    ClassScheduleIvy,
    DirectPanoramaIdea,
    DirectPanoramaIvy,
    DirectLocationIdea,
    DirectLocationIvy,
  },
  data() {
    return {
      menuTab: null,
      currentTab: 0,
      currentTab2: 0,
      currentTab3: 0,
      swiperOption02: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        speed: 1500,
        navigation: {
          nextEl: ".goLocker .swiper-button-next",
          prevEl: ".goLocker .swiper-button-prev",
        },
      },
    };
  },
  methods: {
    gotoSection(refName) {
      var element = this.$refs[refName];
      if (!this.mobile) {
        if (refName === "academyTrigger01") {
          var topPos = element.offsetTop + 92;
        } else {
          var topPos = element.offsetTop + 32;
        }
      } else {
        if (refName === "academyTrigger01") {
          var topPos = element.offsetTop - 10;
        } else {
          var topPos = element.offsetTop - 9;
        }
      }
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
      let beforeTabPos = document.getElementById("scrollBeforTab");
      let afterTabPos = document.getElementById("scrollAfterTab");

      if (!this.mobile) {
        let academy01LocTop = document.querySelector("#academy01Loc").offsetTop - 0;
        let academy02LocTop = document.querySelector("#academy02Loc").offsetTop - 80;
        let academy03LocTop = document.querySelector("#academy03Loc").offsetTop - 80;
        let academy04LocTop = document.querySelector("#academy04Loc").offsetTop - 50;
        let academy05LocTop = document.querySelector("#academy05Loc").offsetTop - 30;
        let academy06LocTop = document.querySelector("#academy06Loc").offsetTop - 30;
        let academy07LocTop = document.querySelector("#academy07Loc").offsetTop - 80;

        if (this.beforeTabPosLoc <= scrollLocation) {
          beforeTabPos.classList.add("off");
          afterTabPos.classList.add("active");
          if (academy01LocTop <= scrollLocation && academy02LocTop > scrollLocation) {
            this.menuTab = 0;
          } else if (academy02LocTop <= scrollLocation && academy03LocTop > scrollLocation) {
            this.menuTab = 1;
          } else if (academy03LocTop <= scrollLocation && academy04LocTop > scrollLocation) {
            this.menuTab = 2;
          } else if (academy04LocTop <= scrollLocation && academy05LocTop > scrollLocation) {
            this.menuTab = 3;
          } else if (academy05LocTop <= scrollLocation && academy06LocTop > scrollLocation) {
            this.menuTab = 4;
          } else if (academy06LocTop <= scrollLocation && academy07LocTop > scrollLocation) {
            this.menuTab = 5;
          } else if (academy07LocTop <= scrollLocation) {
            this.menuTab = 6;
          }
        } else if (this.beforeTabPosLoc + 50 > scrollLocation) {
          beforeTabPos.classList.remove("off");
          afterTabPos.classList.remove("active");
          this.menuTab = null;
        }
      } else {
        afterTabPos.classList.add("active");
        let vh = window.innerHeight * 0.6;
        let academy01LocTop = document.querySelector("#academy01Loc").offsetTop - vh;
        let academy02LocTop = document.querySelector("#academy02Loc").offsetTop - 80;
        let academy03LocTop = document.querySelector("#academy03Loc").offsetTop - 80;
        let academy04LocTop = document.querySelector("#academy04Loc").offsetTop - 50;
        let academy05LocTop = document.querySelector("#academy05Loc").offsetTop - 30;
        let academy06LocTop = document.querySelector("#academy06Loc").offsetTop - 30;
        let academy07LocTop = document.querySelector("#academy07Loc").offsetTop - 80;
        if (this.beforeTabPosLoc - 160 <= scrollLocation) {
          if (academy01LocTop <= scrollLocation && academy02LocTop > scrollLocation) {
            this.menuTab = 0;
          } else if (academy02LocTop <= scrollLocation && academy03LocTop > scrollLocation) {
            this.menuTab = 1;
          } else if (academy03LocTop <= scrollLocation && academy04LocTop > scrollLocation) {
            this.menuTab = 2;
          } else if (academy04LocTop <= scrollLocation && academy05LocTop > scrollLocation) {
            this.menuTab = 3;
          } else if (academy05LocTop <= scrollLocation && academy06LocTop > scrollLocation) {
            this.menuTab = 4;
          } else if (academy06LocTop <= scrollLocation && academy07LocTop > scrollLocation) {
            this.menuTab = 5;
          } else if (academy07LocTop <= scrollLocation) {
            this.menuTab = 6;
          }
        } else if (this.beforeTabPosLoc - 160 > scrollLocation) {
          this.menuTab = null;
        }
      }
    },
  },
  mounted() {
    this.beforeTabPosLoc = document.querySelector("#scrollBeforTab").offsetTop + 200;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
};
</script>
