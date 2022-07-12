<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/singleCourse">단과 강좌</router-link><em>영상 미리보기</em></span>
		</div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseView">
          <div class="tabwrap">
            <div class="tabBack">
              <div class="tabNav">
                <nav>
                  <span class="btnArea">
                    <router-link to="/mkup/lecture/singleCourse" class="btnList">목록으로</router-link>
                  </span>
                </nav>
              </div>
            </div>
              <!--// tab -->
            <div class="tabLayout">
              <!-- 동영상 영역 -->
              <div class="mylecViewDetail" :class="{full:fullTrigger == true}">
                <!-- 동영상 -->
                <div class="playerArea">
                  <div class="mode"></div>
                  <div class="player">
                    <section class="player_wrap2" :class="{full:fullTrigger == true}">
                      <div class="player_body" id="ssamplayer"></div>
                    </section>
                  </div>
                  <div class="tit">
                    <span class="playPrevNext">
                      <span>
                        <button class="btnMove prev">이전</button>
                        <button class="btnMove next">다음</button>
                        <button class="btnMove wide" @click="fullTrigger = true" v-if="fullTrigger == false">크게보기</button>
                        <button class="btnMove small" @click="fullTrigger = false" v-if="fullTrigger == true">작게보기</button>
                      </span>
                    </span>
                    <h2>3강 - [9/26] 도고 모고 (1회) 첨삭 설명 , 도고 모고 2회 A형 설명</h2>
                  </div>
                </div>
                <!-- //동영상 -->
                <div class="lecInfoArea" ref="lecInfoArea">
                  <div class="playerListArea">
                    <PlayerListArea />
                  </div>
                  <div class="lecArea">
                    <!-- 강좌 관련 정보 -->
                    <div class="tabwrap">
                      <!-- tab -->
                      <div class="tabBack">
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
              <!-- //동영상 영역 -->
            </div>
          </div>

		    </div>
		    <!-- //page layout -->
      </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import PlayerListArea from '@/views/lecture/PlayerListArea.vue';
import PlayerQnA from '@/views/lecture/PlayerQnA.vue';
import PlayerLectureData from '@/views/lecture/PlayerLectureData.vue';
import PlayerNotice from '@/views/lecture/PlayerNotice.vue';
import PlayerBoard from '@/views/lecture/PlayerBoard.vue';
import playerList from '@/views/lecture/playerList.vue';

export default {
  mixins: [Mixin],
  name: 'SingleCourseView',
  data() {
    return {
      viewTab: 0,
      alertTrigger: false,
    }
  },
  methods: {
  },
  components: {
    PlayerListArea,
    PlayerQnA,
    PlayerLectureData,
    PlayerNotice,
    PlayerBoard,
    playerList
  },
  data() {
    return {
      currentTab: 0,
      show: true,
      fullTrigger: false,
      myPlayerFocusModeTrigger: false,
      videoPopTrigger01: false
    }
  },
  methods: {
    moviePlayer() {
      var source = "http://html5.imgtech.co.kr/static/video/ebse.mp4";
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
    }
  },
  mounted() {
    this.moviePlayer();
  },
}
</script>
