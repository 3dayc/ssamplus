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
                </span>
                <div class="name">
                  <span class="sbjEdu"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                  <router-link to="/mkup/lecture/teacher" class="btnTcHomeName"><i>교육학</i>김현 <em>선생님</em></router-link>
                </div>
              </div>
              <!--//-->
              <div class="lecInfo">
                <!---->
                <span class="selectSet">
                  <select>
                    <option>Making Map 교육학</option>
                  </select>
                </span>
                <!---->
                <div class="allDate liveCase">
                  <div class ="liveT1">
                    <em class="iLocSet ivy">아이비</em>
                    <span class="limitNtime"><b>개강일</b> <em>2021-03-01 ~ 2021-03-31</em> <em>월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="liveT2">
                    <em class="iMaking end">출석완료</em>
                    <button class="btnGuide" @click="imgPopTrigger = true">가이드</button>
                  </div>
                </div>
                <!--//-->
              </div>
            </div>
          </div>
          <ImgPopup v-if='imgPopTrigger' @close="imgPopTrigger = false">
            <div slot="modalbody">
              <span class="checkSet"><input type="checkbox" id="ck01" /><label for="ck01"><i></i>오늘 다시 보지 않기</label></span>
              <img :src="require(`@/assets/images/thumbnail/@player_guide.svg`)" alt=""/>
            </div>
          </ImgPopup>
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
                <span class="right"><strong>ON AIR</strong>  9,999명</span>
              </div>
              <div class="player">
                <!-- <img :src="require(`@/assets/images/img_playerSample.png`)" alt=""/> -->
                <section class="player_wrap2" :class="{full:fullTrigger == true}">
                  <div class="player_body" id="ssamplayer_pc"></div>
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
                <div class="tabNav live">
                  <nav>
                    <ul>
                      <li :class="{on:currentTab===6}"><button @click="gotoView(), currentTab = 6">질문있어요</button></li>
                      <li :class="{on:currentTab===0}"><button @click="gotoView(), currentTab = 0">강의자료</button></li>
                      <!-- <li :class="{on:currentTab===3}"><button @click="gotoView(), currentTab = 3">첨삭 게시판</button></li> -->
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// 모바일 용 tab -->
            </div>
            <!-- //동영상 -->
            <div class="lecInfoArea" ref="lecInfoArea">
              <div class="liveChatArea" v-if="!this.mobile">
                <LivePlayerChat />
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
                          <li :class="{on:currentTab===3}"><button @click="currentTab = 3">첨삭 게시판</button></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
                    <!-- 채팅 -->
                    <div v-if="currentTab == 6" class="tabData" :key="currentTab">
                      <div class="liveChatArea">
                        <LivePlayerChat />
                      </div>
                    </div>
                    <!-- //채팅-->
                    <!-- 강의자료-->
                    <div v-if="currentTab == 0" class="tabData" :key="currentTab">
                      <PlayerLectureData />
                    </div>
                    <!-- //강의자료-->
                    <!-- 첨삭 게시판-->
                    <!-- <div v-if="currentTab == 3" class="tabData">
                      <PlayerBoard />
                    </div> -->
                    <!-- //첨삭 게시판-->
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
              <div class="player_body" id="ssamplayer_pc2"></div>
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

    <!-- Layer Popup -->
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import LivePlayerChat from '@/views/mylec/LivePlayerChat.vue';
import PlayerLectureData from '@/views/mylec/PlayerLectureData.vue';
import PlayerBoard from '@/views/mylec/PlayerBoard.vue';
import PlayerListArea2 from '@/views/mylec/PlayerListArea2.vue';

export default {
  mixins: [Mixin],
  name: 'LivePlayer',
  components: {
    LivePlayerChat,
    PlayerLectureData,
    PlayerBoard,
    PlayerListArea2
  },
  data() {
    return {
      currentTab: 0,
      show: true,
      fullTrigger: false,
      videoPopTrigger01: false,
      imgPopTrigger: false,
      myPlayerFocusModeTrigger: false,
    }
  },
  methods: {
    mobileTabLayout(){
      if(!this.mobile ){
        this.currentTab = 0;
      } else {
        this.currentTab = 6;
      }
    },
    gotoView() {
      var element = this.$refs.lecInfoArea;
      var topPos = element.offsetTop - 126;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    },
    moviePlayer() {
      var source = "http://html5.imgtech.co.kr/static/video/ebse.mp4";
      var player = window.createMediaPlayer(
        "#ssamplayer_pc",
        source,
        {
          module: {
            progress: { skipInput: {hideButton: false}, skipInputValue: 30 },
            rate: { useType: 'list'},
            bookmark: { addBtn: {hideButton: false} },
            volume: { type: "horizontal", disableMouseOver: false },
            size: {ignoreFullscreen: true,},
          },
        },
        function callback(e) {}
      );
      var player2 = window.createMediaPlayer(
        "#ssamplayer_pc2",
        source,
        {
          module: {
            progress: { skipInput: {hideButton: false}, skipInputValue: 30 },
            rate: { useType: 'list'},
            bookmark: { addBtn: {hideButton: false} },
            volume: { type: "horizontal", disableMouseOver: false },
            size: {ignoreFullscreen: true,},
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
