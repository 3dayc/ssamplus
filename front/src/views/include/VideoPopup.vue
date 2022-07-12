<template lang="html">
  <transition name="modal">
    <div class="modalDim videoLayerPop">
      <div class="modalWrapper">
        <div class="modalContainer">
          <div class="modalbody">
            <div v-if="videoId" class="youtubePlayer">
              <vYoutube :videoId="videoId" />
            </div>
            <div v-else class="pcPlayer">
              <section class="player_wrap">
                <button class="btnClose" @click="$emit('close')">닫기</button>
                <div class="player_body" id="ssamplayer_pc">
                  <div class="player_header">
                    <div class="tit">
                      <b class="logo">KG에듀원 쌤Plus+</b>
                      <span>교육학 김현 선생님&nbsp;</span>
                      <strong>좋은 선생님은 좋은 사람</strong>
                    </div>
                    <!-- <div class="btn"><button type="button">X</button></div> -->
                  </div>
                </div>
              </section>
            </div>
            <div class="mobilePlayer">
              <section class="player_wrap">
                  <div class="player_body" id='ssamplayer_mo'>
                    <div class="player_header">
                      <div class="tit">
                          <button class="btn_prev" @click="$emit('close')"><img src="@/assets/images/catvod/icon-ionic-ios-arrow-forward.svg" alt="back" /></button>
                          <span>교육학 김현-좋은 선생님은 좋은 사람</span>
                      </div>
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import vYoutube from "@/components/Youtube";

export default {
  data() {
    return {
      playerEnd: 0,
    };
  },
  props: {
    videoId: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  components: {
    vYoutube,
  },
  methods: {
    moviePlayer() {
      var source = "http://html5.imgtech.co.kr/static/video/ebse.mp4";
      var player_pc = window.createMediaPlayer(
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
      var player_mo = window.createMediaPlayer(
        "#ssamplayer_mo",
        source,
        {
          module: {
              ui: { stopBtn: {hideButton: true}, rotateBtn: {hideButton: true}},
              progress: { skipInput: {hideButton: true}, skipInputValue: 10 },
              repeat: { repeatBtn: {hideButton: true } },
              rate: {useType: 'button'},
              bookmark: { addBtn: {hideButton: true} },
              playlist: { 
                previousBtn: {hideButton: true},
                nextBtn: {hideButton: true},
              },
              volume: { type: 'vertical', disableMouseOver: false },
              size: {ignoreFullscreen: true, fullscreenBtn: {hideButton: true}},
          }
        },
        function callback(e) {}
      );
    }
  },
  mounted() {
    this.moviePlayer();
  },
};
</script>