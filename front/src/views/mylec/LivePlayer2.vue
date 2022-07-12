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
                    <button class="btnGuide">가이드</button>
                  </div>
                </div>
                <!--//-->
              </div>
            </div>
          </div>
          <!-- //강좌 정보 -->
          <div class="mylecViewDetail liveCase" :class="{full:fullTrigger == true}">
            <!-- 동영상 -->
            <div class="playerArea">
              <div class="mode">
                <span class="left labelToggleSet">
                  <input type="checkbox" id="push5">
                  <label for="push5">
                    <span>집중 OFF</span>
                    <span>집중 ON</span>
                  </label>
                </span>
                <span class="right"><strong>ON AIR</strong>  9,999명</span>
              </div>
              <div class="player"><img :src="require(`@/assets/images/img_playerSample.png`)" alt=""/></div>
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
              <div class="tabBack mobileCase" v-if="this.mobile">
                <div class="tabNav noChat">
                  <nav>
                    <ul>
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
                <LivePlayerChat2 />
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
                          <!-- <li :class="{on:currentTab===3}"><button @click="currentTab = 3">첨삭 게시판</button></li> -->
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <!--// tab -->
                  <div class="tabLayout">
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
    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import LivePlayerChat2 from '@/views/mylec/LivePlayerChat2.vue';
import PlayerLectureData from '@/views/mylec/PlayerLectureData.vue';
import PlayerBoard from '@/views/mylec/PlayerBoard.vue';

export default {
  mixins: [Mixin],
  name: 'LivePlayer',
  components: {
    LivePlayerChat2,
    PlayerLectureData,
    PlayerBoard,
  },
  data() {
    return {
      currentTab: 0,
      show: true,
      fullTrigger: false,
      videoPopTrigger01: false
    }
  },
  methods: {
    gotoView() {
      var element = this.$refs.lecInfoArea;
      var topPos = element.offsetTop - 126;
      window.scrollTo({
        top: topPos,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  mounted() {
  },
}
</script>
