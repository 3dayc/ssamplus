<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="mylecView">
          <!-- 강좌 정보 -->
          <div class="nowLec">
            <div class="frameBack">
              <button class="btnListGo" @click="$router.go(-1)">목록</button>
              <!---->
              <div class="ssam">
                <span class="kind">
                  <em class="iSbjSet">교육학</em>
                  <em class="iStartSet mock">모의고사</em>
                </span>
                <div class="name">
                  <span class="sbjEdu"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName">김현 <em>선생님</em></router-link>
                </div>
              </div>
              <!--//-->
              <div class="lecInfo mock">
                <!---->
                <span class="selectSet">
                  <select>
                    <option>2022학년도 모의고사 희소</option>
                  </select>
                </span>
                <!---->
                <div class="allDate">
                  <span class="limitNtime">수강기간 <em>2021-03-01 ~ 2021-03-31</em></span>
                </div>
                <!---->
                <div class="btn">
                  <button class="btnGuide topN">가이드</button>
                </div>
                <!---->
              </div>
            </div>
          </div>
          <!-- //강좌 정보 -->
          <div class="mylecViewDetail liveCase" :class="{full:fullTrigger == true}">
            <!-- 동영상 -->
            <div class="playerArea">
              <div class="mode">
                <span class="left labelToggleSet_off">
                  <input type="checkbox" id="push5" @click="myPlayerFocusModeTrigger = true, scrollHiden($event)">
                  <label for="push5">
                    <span>집중 OFF</span>
                    <span>집중 ON</span>
                  </label>
                </span>
              </div>
              <div class="player">
                <!-- <img :src="require(`@/assets/images/img_playerSample.png`)" alt=""/> -->
                <section class="player_wrap2" :class="{full:fullTrigger == true}">
                  <div class="player_body" id="ssamplayer"></div>
                </section>
              </div>
              <div class="tit">
                <span class="playPrevNext">
                  <span v-if="!this.mobile">
                    <button class="btnMove prev">이전</button>
                    <button class="btnMove next">다음</button>
                    <button class="btnMove wide" @click="fullTrigger = true" v-if="fullTrigger == false">크게보기</button>
                    <button class="btnMove small" @click="fullTrigger = false" v-if="fullTrigger == true">작게보기</button>
                  </span>
                  <span v-if="this.mobile">
                    <button class="btnMove wide" @click="videoPopTrigger01 = true">크게보기</button>
                  </span>
                </span>
                <h2>3강 - [9/26] 도고 모고 (1회) 첨삭 설명 , 도고 모고 2회 A형 설명</h2>
              </div>
              <!-- 모바일 용 tab -->
              <div class="tabBack mobileCase pdN" v-if="this.mobile">
                <div class="tabNav mock">
                  <nav>
                    <ul>
                      <li :class="{on:currentTab===4}"><button @click="gotoView(), currentTab = 4">강의 리스트<em>(21)</em></button></li>
                      <li :class="{on:currentTab===5}"><button @click="gotoView(), currentTab = 5">북마크</button></li>
                      <li :class="{on:currentTab===0}"><button @click="gotoView(), currentTab = 0">강의자료</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// 모바일 용 tab -->
            </div>
            <!-- //동영상 -->
            <div class="lecInfoArea" ref="lecInfoArea">
              <div class="playerListArea" v-if="!this.mobile">
                <PlayerListArea />
              </div>
              <div class="lecArea">
                <!-- 강좌 관련 정보 -->
                <div class="tabwrap">
                  <!-- tab -->
                  <div class="tabBack" v-if="!this.mobile">
                    <div class="tabNav">
                      <nav>
                        <ul>
                          <li :class="{on:currentTab===0}"><button @click="currentTab = 0">강의자료</button></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <!-- 강의 리스트-->
                    <div v-if="currentTab == 4" class="tabData" :key="currentTab">
                      <playerList />
                    </div>
                    <!-- //강의 리스트-->
                    <!-- 강의 리스트-->
                    <div v-if="currentTab == 5" class="tabData">
                      <playerbookmark />
                    </div>
                    <!-- //강의 리스트-->
                    <!-- 강의자료-->
                    <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                      <PlayerLectureData />
                    </div>
                    <!-- //강의자료-->
                  </div>
                </div>
                <!-- //강좌 관련 정보 -->
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

    <!-- Layer Popup -->
    <!-- 집중모드-->
    <div class="myPlayerFocusMode" v-show="myPlayerFocusModeTrigger == true">
      <div class="playerAreaBack">
        <div class="playerArea">
          <div class="mode">
            <span class="left labelToggleSet_on">
              <input type="checkbox" id="push25" checked @click="myPlayerFocusModeTrigger = false, scrollHiden($event)">
              <label for="push25">
                <span>집중 OFF</span>
                <span>집중 ON</span>
              </label>
            </span>
            <span class="right"><strong>ON AIR</strong>  9,999명</span>
          </div>
          <div class="player">
            <!-- <img :src="require(`@/assets/images/img_playerSample.png`)" alt=""/> -->
            <section class="player_wrap3">
              <div class="player_body" id="ssamplayer2"></div>
            </section>
          </div>
          <div class="tit">
            <h2>3강 - [9/26] 도고 모고 (1회) 첨삭 설명 , 도고 모고 2회 A형 설명</h2>
            <span class="playPrevNext">
              <button class="btnMove prev">이전</button>
              <button class="btnMove next">다음</button>
            </span>
          </div>
        </div>
      </div>
      <PlayerListArea2 />
    </div>
    <!-- //집중모드 -->
    <!-- 홀딩 신청 팝업 -->
    <Popup v-if='popupTrigger6' @close="popupTrigger6 = false" class="large lecReAddPopup">
      <template slot="modalheader">
        <div>
          <h1>홀딩 신청</h1>
          <p>
            홀딩신청은 일시적으로 수강기간을 중지할 수 있는 서비스 입니다. <span>(※당일 홀딩신청불가, 홀딩기간 중 수강불가)</span>
            <em>홀딩기간 중에는 강좌를 수강할 수 없으며 모의고사 및 일부 강좌에 대해서는 차등적용이 될 수 있습니다.</em>
          </p>
          <button @click="popupTrigger6 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReAddHolding />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger6 = false">취소</button>
          <button class="btnL redline" @click="popupTrigger6 = false">장바구니</button>
          <button class="btnL red" @click="popupTrigger6 = false">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //홀딩 신청 팝업 -->
    <!-- 기간 연장 신청 팝업 -->
    <Popup v-if='popupTrigger7' @close="popupTrigger7 = false" class="large lecReAddPopup">
      <template slot="modalheader">
        <div>
          <h1>기간 연장 신청</h1>
          <p>
            기간연장은 강좌당 최대 3회, 총 15일 한도 내에서 신청이 가능합니다. <span>(※강좌 종료일 7일전, 종료 후 14일 이내 신청 가능)</span>
            <em>신청일부터 하루로 차감되오니 시작일자에 신중해 주세요.</em>
          </p>
          <button @click="popupTrigger7 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReAddRequest />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger7 = false">취소</button>
          <button class="btnL redline" @click="popupTrigger7 = false">장바구니</button>
          <button class="btnL red" @click="popupTrigger7 = false">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //기간 연장 신청 팝업 -->
    <!-- 재수강 신청 팝업 -->
    <Popup v-if='popupTrigger8' @close="popupTrigger8 = false" class="large lecReAddPopup retakeCase">
      <template slot="modalheader">
        <div>
          <h1>재수강 신청</h1>
          <p>
            재수강 신청은 신청시기에 따라서 할인율에 변동이 있습니다.
            <em>수강종료 후 30일 이내에는 50% 할인, 수강종료 30일이 지나면 30% 할인 찬스를 제공하고 있습니다.</em>
          </p>
          <button @click="popupTrigger8 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReAddRetake />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger8 = false">취소</button>
          <button class="btnL redline" @click="popupTrigger8 = false">장바구니</button>
          <button class="btnL red" @click="popupTrigger8 = false">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //재수강 신청 팝업 -->
    <!-- 수강후기 등록 팝업 -->
    <Popup v-if='popupTrigger10' @close="popupTrigger10 = false" class="large bbsViewPopup">
      <template slot="modalheader">
        <div>
          <h1>수강후기</h1>
          <p>강좌 종료 7일 전 ~ 종료 후 30일까지 수강후기 작성이 가능하며 그 외 상품은 구매 후 30일 이내에 작성이 가능합니다.</p>
          <button @click="popupTrigger10 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReviewWrite />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger10 = false">취소</button>
          <button class="btnL" @click="popupTrigger10 = false">확인</button>
        </div>
      </template>
    </Popup>
    <!-- //수강후기 등록 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PlayerListArea from '@/views/mylec/PlayerListArea.vue';
import PlayerListArea2 from '@/views/mylec/PlayerListArea2.vue';
import PlayerQnA from '@/views/mylec/PlayerQnA.vue';
import PlayerLectureData from '@/views/mylec/PlayerLectureData.vue';
import PlayerNotice from '@/views/mylec/PlayerNotice.vue';
import PlayerBoard from '@/views/mylec/PlayerBoard.vue';
import PopupReAddHolding from '@/views/mylec/PopupReAddHolding.vue';
import PopupReAddRequest from '@/views/mylec/PopupReAddRequest.vue';
import PopupReAddRetake from '@/views/mylec/PopupReAddRetake.vue';
import PopupReviewWrite from '@/views/mylec/PopupReviewWrite.vue';
import playerList from '@/views/mylec/playerList.vue';
import playerbookmark from '@/views/mylec/playerbookmark.vue';

export default {
  mixins: [Mixin],
  name: 'OnlinePlayer',
  components: {
    PlayerListArea,
    PlayerListArea2,
    PlayerQnA,
    PlayerLectureData,
    PlayerNotice,
    PlayerBoard,
    PopupReAddHolding,
    PopupReAddRequest,
    PopupReAddRetake,
    PopupReviewWrite,
    playerList,
    playerbookmark
  },
  data() {
    return {
      currentTab: 0,
      show: true,
      fullTrigger: false,
      popupTrigger6: false,
      popupTrigger7: false,
      popupTrigger8: false,
      popupTrigger10: false,
      myPlayerFocusModeTrigger:false
    }
  },
  methods: {
    mobileTabLayout(){
      if(!this.mobile ){
        this.currentTab = 0;
      } else {
        this.currentTab = 4;
      }
    },
    gotoView() {
      var element = this.$refs.lecInfoArea;
      var topPos = element.offsetTop - 160;
      //console.log(topPos);
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    moviePlayer() {
      var source = "http://html5.imgtech.co.kr/static/video/ebse.mp4";
      var source2 = "http://html5.imgtech.co.kr/static/video/ebse.mp4";
      var player = window.createMediaPlayer(
        "#ssamplayer",
        source,
        {
          module: {
            volume: { type: "horizontal", disableMouseOver: false },
          },
        },
        function callback(e) {}
      );
      var player2 = window.createMediaPlayer(
        "#ssamplayer2",
        source2,
        {
          module: {
            volume: { type: "horizontal", disableMouseOver: false },
          },
        },
        function callback(e) {}
      );
    }
  },
  mounted() {
    this.mobileTabLayout();
    this.moviePlayer();
  },
}
</script>
