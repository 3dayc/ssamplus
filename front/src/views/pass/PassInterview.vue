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
            <div class="passInterview">
              <!-- <div class="ssamSwiperlist" id="ssamSwiperList">
                <div class="bothArrowsBacK">
                  <div class="bothArrows frameBack">
                    <swiper class="interviewSwiper" :options="swiperOption" ref="mySwiper">
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===0}"  @click="play(); ssamSetView = 0, currentTab = 0">
                          <span class="txt">
                            <strong>배지윤</strong>
                            <em>결과가 다른 시작, 기대한다면 합격예감</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt="" />
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===1}" @click="play(); ssamSetView = 1, currentTab = 2">
                          <span class="txt">
                            <strong>김현</strong>
                            <em>키워주기 위한 교육학</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===2}" @click="play(); ssamSetView = 2, currentTab = 4">
                          <span class="txt">
                            <strong>송헌</strong>
                            <em>제자의 눈으로 국어의 핵심을 찌르다!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===3}" @click="play(); ssamSetView = 3, currentTab = 6">
                          <span class="txt">
                            <strong>이정훈/안후상팀</strong>
                            <em>수학과 합격의 연결고리!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit12.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===4}"  @click="play(); ssamSetView = 4, currentTab = 8">
                          <span class="txt">
                            <strong>한정은</strong>
                            <em>검증된 중국어 문법 강의로 정확한 중국어 도출</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit10.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap" :class="{active:ssamSetView===5}"  @click="play(); ssamSetView = 5, currentTab = 10">
                          <span class="txt">
                            <strong>서정팀</strong>
                            <em>엘리트 음악교육, 서울대 서정팀!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit13.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>배지윤</strong>
                            <em>결과가 다른 시작, 기대한다면 합격예감</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt="" />
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>김현</strong>
                            <em>키워주기 위한 교육학</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>송헌</strong>
                            <em>제자의 눈으로 국어의 핵심을 찌르다!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>이정훈/안후상팀</strong>
                            <em>수학과 합격의 연결고리!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit12.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>한정은</strong>
                            <em>검증된 중국어 문법 강의로 정확한 중국어 도출</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit10.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>서정팀</strong>
                            <em>엘리트 음악교육, 서울대 서정팀!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit13.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>배지윤</strong>
                            <em>결과가 다른 시작, 기대한다면 합격예감</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt="" />
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>김현</strong>
                            <em>키워주기 위한 교육학</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>송헌</strong>
                            <em>제자의 눈으로 국어의 핵심을 찌르다!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>이정훈/안후상팀</strong>
                            <em>수학과 합격의 연결고리!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit12.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>한정은</strong>
                            <em>검증된 중국어 문법 강의로 정확한 중국어 도출</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit10.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                      <swiper-slide>
                        <div class="picWrap">
                          <span class="txt">
                            <strong>서정팀</strong>
                            <em>엘리트 음악교육, 서울대 서정팀!</em>
                          </span>
                          <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit13.png`)" alt=""/>
                        </div>
                      </swiper-slide>
                    </swiper>
                    <span class="swiper-button-prev" slot="button-prev"/>
                    <span class="swiper-pagination" slot="pagination"/></span>
                    <span class="swiper-button-next" slot="button-next"/>
                  </div>
                  <span class="opner">
                    <button @click="stop()" class="opne">전체 선생님 보기</button>
                    <button @click="play()" class="close">전체 선생님 닫기</button>
                  </span>
                </div>
              </div> -->
              <!-- 선생님별 합격수기 -->
              <div class="resultReview">
                <div class="subTit">
                  <h3>선생님별 합격수기</h3>
                </div>
                <div class="groupCombo">
                  <span class="selectSet hf">
                    <select name="" id="">
                      <option value="">분류</option>
                      <option value="">전체</option>
                    </select>
                  </span>
                  <span class="selectSet hf">
                    <select name="" id="">
                      <option value="">전공</option>
                      <option value="">유아</option>
                      <option value="">교육학</option>
                      <option value="">국어</option>
                      <option value="">수학</option>
                      <option value="">중국어</option>
                      <option value="">음악</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">선생님</option>
                      <option value="">배지윤</option>
                      <option value="">김현</option>
                      <option value="">송헌</option>
                      <option value="">이정훈/안후상</option>
                      <option value="">한정은</option>
                      <option value="">서정팀</option>
                    </select>
                  </span>
                </div>
              </div>
              <!-- 선택한 쌤별 영역 -->
              <div v-if="ssamSetView == 0" :key="ssamSetView">
                <div class="ssamMainBanner sbjChild">
                  <div class="frameBack">
                    <div>
                      <p>
                        유아 배지윤 선생님과 함께
                        <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <img
                      :src="require(`@/assets/images/thumbnail/@tmp_ssamPass01.png`)"
                      alt=""
                      class="ssamimg"
                    />
                    <div class="btnLinkBox">
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>

                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 0 }">
                            <button @click="currentTab = 0">합격자 인터뷰</button>
                          </li>
                          <li :class="{ on: currentTab === 1 }">
                            <button @click="currentTab = 1">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 1" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <!-- //선택한 쌤별 영역 -->
              <div v-if="ssamSetView == 1">
                <div class="ssamMainBanner sbjEdu">
                  <div class="frameBack">
                    <div>
                      <p>
                        교육학 김현 선생님과 함께
                        <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <div>
                      <img
                        :src="require(`@/assets/images/thumbnail/@tmp_ssamPass02.png`)"
                        alt=""
                        class="ssamimg"
                      />
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>

                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 2 }">
                            <button @click="currentTab = 2">합격자 인터뷰</button>
                          </li>
                          <li :class="{ on: currentTab === 3 }">
                            <button @click="currentTab = 3">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 2" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 3" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <div v-if="ssamSetView == 2">
                <div class="ssamMainBanner sbjKo">
                  <div class="frameBack">
                    <div>
                      <p>
                        국어 송헌 선생님과 함께
                        <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <div>
                      <img
                        :src="require(`@/assets/images/thumbnail/@tmp_ssamPass03.png`)"
                        alt=""
                        class="ssamimg"
                      />
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>

                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 4 }">
                            <button @click="currentTab = 4">합격자 인터뷰</button>
                          </li>
                          <li :class="{ on: currentTab === 5 }">
                            <button @click="currentTab = 5">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 4" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 5" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <div v-if="ssamSetView == 3">
                <div class="ssamMainBanner sbjMath">
                  <div class="frameBack">
                    <div>
                      <p>
                        수학 이정훈/안후상팀과 함께
                        <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <div>
                      <img
                        :src="require(`@/assets/images/thumbnail/@tmp_ssamPass04.png`)"
                        alt=""
                        class="ssamimg"
                      />
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>

                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 6 }">
                            <button @click="currentTab = 6">합격자 인터뷰</button>
                          </li>
                          <li :class="{ on: currentTab === 7 }">
                            <button @click="currentTab = 7">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 6" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 7" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <div v-if="ssamSetView == 4">
                <div class="ssamMainBanner sbjZh">
                  <div class="frameBack">
                    <div>
                      <p>
                        중국어 한정은 선생님과 함께
                        <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <div>
                      <img
                        :src="require(`@/assets/images/thumbnail/@tmp_ssamPass05.png`)"
                        alt=""
                        class="ssamimg"
                      />
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 8 }">
                            <button @click="currentTab = 8">합격자 인터뷰</button>
                          </li>
                          <li :class="{ on: currentTab === 9 }">
                            <button @click="currentTab = 9">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 8" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 9" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
                <!-- //tab-wrap -->
              </div>
              <div v-if="ssamSetView == 5">
                <div class="ssamMainBanner sbjMusic">
                  <div class="frameBack">
                    <div>
                      <p>
                        음악 서정팀님과 함께 <strong>꿈을 이룬 임용 선배들의 진솔한 이야기</strong>
                      </p>
                      <img
                        :src="require(`@/assets/images/img_passInterview03.png`)"
                        alt=""
                        v-if="!this.mobile"
                      />
                      <img
                        :src="require(`@/assets/images/m/img_passInterview03.svg`)"
                        alt=""
                        v-else-if="this.mobile"
                      />
                    </div>
                    <div>
                    <img
                      :src="require(`@/assets/images/thumbnail/@tmp_ssamPass06.png`)"
                      alt=""
                      class="ssamimg"
                    />
                      <router-link to="#none;" class="btnTcHomeName"
                        >선생님 홈 바로가기</router-link
                      >
                      <router-link to="/mkup/pass/review/write" class="writeGo"
                        >합격수기 작성하기</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- tab-wra  -->
                <div class="passReviewtabwrap">
                  <!-- tab -->
                  <div class="tabBack">
                    <div class="tabNav">
                      <nav>
                        <ul class="blackLineTab">
                          <li :class="{ on: currentTab === 10 }">
                            <button @click="currentTab = 10">
                              합격자 인터뷰
                            </button>
                          </li>
                          <li :class="{ on: currentTab === 11 }">
                            <button @click="currentTab = 11">합격수기</button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <div v-if="currentTab == 10" class="tabData" :key="currentTab">
                      <PassInterviewVideo v-if="!this.mobile" />
                      <PassInterviewVideoM v-else-if="this.mobile" />
                    </div>
                    <div v-if="currentTab == 11" class="tabData">
                      <PassReview v-if="!this.mobile" />
                      <PassReviewM v-else-if="this.mobile" />
                    </div>
                  </div>
                </div>
              </div>
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
import PassInterviewVideo from "@/views/pass/PassInterviewVideo.vue";
import PassInterviewVideoM from "@/views/pass/PassInterviewVideoM.vue";
import PassReview from "@/views/pass/PassReview.vue";
import PassReviewM from "@/views/pass/PassReviewM.vue";

export default {
  mixins: [Mixin],
  name: "PassInterview",
  components: {
    PassInterviewVideo,
    PassInterviewVideoM,
    PassReview,
    PassReviewM,
  },
  data() {
    return {
      ssamSetView: 0,
      currentTab: 0,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        speed: 2500,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".bothArrows .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".ssamSwiperlist .swiper-button-next",
          prevEl: ".ssamSwiperlist .swiper-button-prev",
        },
      },
    };
  },
  methods: {
    stop() {
      this.$refs.mySwiper.$swiper.destroy(true);
      document.getElementById("ssamSwiperList").classList.add("off");
      setTimeout(() => {
        document.getElementById("ssamSwiperList").classList.add("off2");
      }, 50);
    },
    play() {
      this.$refs.mySwiper.initSwiper();
      document.getElementById("ssamSwiperList").classList.remove("off");
      setTimeout(() => {
        document.getElementById("ssamSwiperList").classList.remove("off2");
      }, 50);
    },
  },
  computed: {},
  mounted() {},
};
</script>
