<template lang="html">
  <div>
    <!-- 메인슬라이드 -->
    <div class="indexMainM">
      <swiper :options="swiperOption01" ref="mainSwiper">
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video2.png`)" alt="" /></span>
        </swiper-slide>
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video3.png`)" alt="" /></span>
        </swiper-slide>
        <swiper-slide>
          <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_video1.png`)" alt="" /></span>
        </swiper-slide>
      </swiper>
      <div class="mbPage">
        <!-- <span class="swiper-button-prev" slot="button-prev"/> -->
        <span class="swiper-pagination" slot="pagination"/>
        <!-- <span class="swiper-button-next" slot="button-next"/> -->
      </div>
    </div>
    <!-- //메인슬라이드 -->
    <!-- 하이라이트 -->
    <div class="indexHighlight">
      <div class="frameBack">
        <div class="subTit">
          <h3>핵심만 모아보자, <strong>강의 하이라이트</strong></h3>
          <router-link to="/mkup/openlec/highlight" class="btnMore"> 더보기</router-link>
        </div>
        <div class="indexEachSwiper">
          <swiper :options="swiperOption02">
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teachermjmiddle012" class="btnTcHomeName"><i>국어</i> 송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="moreBtnWrap">
            <router-link to="/mkup/openlec/highlight" class="mobileMore">강의 하이라이트 더보기</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- //하이라이트 -->
    <!-- 기출 -->
    <div class="indexComment">
      <div class="frameBack">
        <div class="subTit">
          <h3>다 알려 줄게, <strong>기출해설</strong></h3>
          <router-link to="/mkup/openlec/comment" class="btnMore"> 더보기</router-link>
        </div>
        <div class="indexEachSwiper">
          <swiper :options="swiperOption03">
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="moreBtnWrap">
            <router-link to="/mkup/openlec/comment" class="mobileMore">기출해설 더보기</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- //기출 -->
    <!-- //설명회 -->
    <div class="indexPresentation">
      <div class="frameBack">
        <div class="subTit">
          <h3>임린이들이 챙겨봐야 할 <strong>설명회</strong></h3>
          <!-- <router-link to="/mkup/openlec/presentation" class="btnMore"> 더보기</router-link> -->
        </div>
        <div class="indexEachSwiper">
          <swiper :options="swiperOption04">
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
            <swiper-slide class="openLecList">
              <ul>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
                <li class="openLecThumbnail">
                  <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_openLec01.png`)" alt="" /></span>
                  <span class="tit">국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수 국어 고득점을 원한다면 송헌 선생님의 하이라이 트 체크는 필수</span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">송헌 <em>선생님</em></router-link>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
          <div class="moreBtnWrap">
            <router-link to="/mkup/openlec/presentation" class="mobileMore">설명회 더보기</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- //설명회 -->

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndexMainM',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
      swiperOption01: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop:true,
        grabCursor: true,
        swiperPlayToggle: false,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".indexMainM .swiper-pagination",
          clickable : true,
          renderBullet: function (index, className) {
            let menu = ['<strong>국어</strong> 고득점을 원한다면<br/><strong>송헌 선생님</strong>의 하이라이트 체크는 필수','<strong>역사</strong> 고득점을 원한다면<br/><strong>반철진 선생님</strong>의 하이라이트 체크는 필수','<strong>교육학</strong> 고득점을 원한다면<br/><strong>김현 선생님</strong>의 하이라이트 체크는 필수','<strong>국어</strong> 고득점을 원한다면 <br/><strong>송헌 선생님</strong>의 하이라이트 체크는 필수'];
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
          },
        },
        navigation: { nextEl: '.indexMainM .swiper-button-next', prevEl: '.indexMainM .swiper-button-prev' },
      },
      swiperOption02: {
        slidesPerView: 1,
        loop:true,
        spaceBetween: 26,
        pagination: {
          el: ".indexHighlight .swiper-pagination",
          clickable : true
        },
        navigation: { nextEl: '.indexHighlight .swiper-button-next', prevEl: '.indexHighlight .swiper-button-prev' },
      },
      swiperOption03: {
        slidesPerView: 1,
        loop:true,
        spaceBetween: 26,
        pagination: {
          el: ".indexComment .swiper-pagination",
          clickable : true
        },
      },
      swiperOption04: {
        slidesPerView: 1,
        loop:true,
        spaceBetween: 26,
        pagination: {
          el: ".indexPresentation .swiper-pagination",
          clickable : true
        },
      },
    }
  },
}
</script>
