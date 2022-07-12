<template lang="html">
  <div>
      <!-- 타이틀 -->
      <p class="ssamTit">홍길동님을 합격으로 이끌 <span><strong class="titLine">최고의 선생님</strong>을 소개합니다.</span></p>
      <!-- //타이틀 -->
      <!-- 쌤 목록 -->
      <div class="ssamList">
        <swiper :options="mainOption02" ref="mySwiper" @slideChange="slideChangeTransitionStart">
          <swiper-slide>
            <span class="sbjChild opacity" @click="toSlide(1)">
              <em>유아 배지윤</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild01_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjChild opacity" @click="toSlide(2)">
              <em>유아 이동건</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild02_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjChild opacity" @click="toSlide(3)">
              <em>유아 양재웅</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild03_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjKo opacity" @click="toSlide(4)">
              <em>국어 박노송</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko04_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjKo opacity" @click="toSlide(5)">
              <em>국어 송헌</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko02_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjKo opacity" @click="toSlide(6)">
              <em>국어 김준</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko03_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjZh opacity" @click="toSlide(7)">
              <em>중국어 한정은</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Zh02_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjZh opacity" @click="toSlide(8)">
              <em>중국어 이해진</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Zh03_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjEdu opacity" @click="toSlide(9)">
              <em>교육학 김현</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu01_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjEdu opacity" @click="toSlide(10)">
              <em>교육학 권구현</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu02_thum.png`)" alt="" />
            </span>
          </swiper-slide>
          <swiper-slide>
            <span class="sbjEdu opacity" @click="toSlide(11)">
              <em>교육학 윤중샘</em>
              <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu03_thum.png`)" alt="" />
            </span>
          </swiper-slide>
        </swiper>
        <div class="bothArrows page">
          <span class="swiper-pagination" slot="pagination"/></span>
          <span class="swiper-button-prev" slot="button-prev"/></span>
          <span class="swiper-button-next" slot="button-next"/></span>
        </div>
      </div>
      <!-- //쌤 목록 -->
      <!-- 쌤 별 셋트 -->
      <!-- Loop -->
      <div class="ssamSet sbjChild" v-if="ssamSetView == 1">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>유아 <strong>배지윤</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjedu01" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild01.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!-- //Loop -->
      <div class="ssamSet sbjChild" v-if="ssamSetView == 2">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>유아 <strong>이동건</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjchild02" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild02.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjChild" v-if="ssamSetView == 3">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>유아 <strong>양재웅</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjchild03" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild03.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjKo" v-if="ssamSetView == 4">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>국어 <strong>박노송</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjmiddle014" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko04.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjKo" v-if="ssamSetView == 5">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>국어 <strong>송헌</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko02.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjKo" v-if="ssamSetView == 6">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>국어 <strong>김준</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjmiddle013" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Ko03.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjZh" v-if="ssamSetView == 7">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>중국어<strong>한정은</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjmiddle072" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Zh02.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjZh" v-if="ssamSetView == 8">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>중국어 <strong>이해진</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjmiddle073" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjmiddle_Zh03.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjEdu" v-if="ssamSetView == 9">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>교육학 <strong>김현</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjedu01" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu01.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjEdu" v-if="ssamSetView == 10">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>교육학 <strong>권구현</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjedu02" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu02.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!---->
      <div class="ssamSet sbjEdu" v-if="ssamSetView == 11">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>교육학 <strong>윤중샘</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjedu03" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjedu03.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!-- 복사된 첫번째를 대응할 항목 -->
      <div class="ssamSet sbjChild" v-if="ssamSetView == 12">
        <!-- 쌤 소개 -->
        <div class="ssamIntro">
          <div class="frameBack">
            <p class="name">
              <span>유아 <strong>배지윤</strong></span>
              <i>결과가 다른 시작, 그 시작이 합격으로 가는 길</i>
            </p>
            <router-link to="/mkup/lecture/teachermjchild01" class="btnTcHome">선생님 홈 바로가기</router-link>
            <dl v-if="!this.mobile">
              <dt>
                <strong>합격을 위한 추천</strong>
                <router-link to="/mkup/pass/interview" class="btnMore">더보기</router-link>
              </dt>
              <dd>
                <p>논술을 한번도 해보지 않아 두려움과 막막함이 많았어요. <br/>9월 부터 공부를 시작한거라 인강밖에 할 수 없고, 첨삭도 받을 수 없었지만 기초를 다져 가지는게 신기했어요. 아직 모르는 거 투성이고 글도 매끄럽지 않지만 그거는 열심히 연습하면 될 거 같아요. 감사합니다.</p>
                <span><em>mar*****</em> 2020.10.17</span>
              </dd>
            </dl>
          </div>
        </div>
        <!-- //쌤 소개 -->
        <!-- 쌤 배너 -->
        <div class="ssamGo" v-if="!this.mobile">
          <div class="frameBack">
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img7.png`)" alt="" /></span>
              <router-link to="">
                <em>선생님 이벤트</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <span class="cardThumb videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img8_1.png`)" alt="" /></span>
              <router-link to="">
                <em>합격자 인터뷰</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img9.png`)" alt="" /></span>
                <em><i>쌤플러스</i>가 추천하는 맞춤 강좌</em>
              </router-link>
            </div>
            <div class="ssamCard">
              <router-link to="">
                <span class="cardThumb"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img10.png`)" alt="" /></span>
                <em>선생님 이벤트</em>
              </router-link>
            </div>
          </div>
        </div>
        <!-- //쌤 배너 -->
        <img :src="require(`@/assets/images/thumbnail/@tmp_mainSsam_mjchild01.png`)" alt="" class="majorImg" />
        <div class="ssamPosts" v-if="this.mobile">
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
      </div>
      <!--//복사된 첫번째를 대응할 항목 -->
      <!-- //쌤 별 셋트 -->

      <!-- 영상팝업 샘플  -->
      <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MainSsamBanner.vue',
  components: {
  },
  data() {
    return {
      ssamSetView: 1,
      videoPopTrigger01: false,
      mainOption02: {
        slidesPerView: "auto",
        spaceBetween: 14,
        // loop:true,
        centeredSlides: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".ssamList .swiper-pagination",
          type: "fraction",
        },
        navigation: { nextEl: '.ssamList .swiper-button-next', prevEl: '.ssamList .swiper-button-prev' },
      },
    }
  },
	methods: {
    toSlide(i) {
      let reaLi = i - 1;
      this.$refs.mySwiper.$swiper.slideTo(reaLi, 500);
    },
		slideChangeTransitionStart() {
      this.ssamSetView = 1
      let index = this.swiper.activeIndex + 1;
      this.ssamSetView = index;
		}
	},
  computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		}
  },
  mounted() {
  }
}
</script>
