<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialInterview">
          <!-- sec01 -->
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>안 보면 후회각, 선생님 인터뷰</h3>
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
          <!-- //서브 타이틀 -->
          <!-- <div class="ssamSwiperlist" id="ssamSwiperList">
            <div class="bothArrowsBacK">
              <div class="bothArrows frameBack">
                <swiper class="interviewSwiper" :options="swiperOption" ref="mySwiper">
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===0}"  @click="interviewTab = 0, play(), opnerTigger = true">
                      <span class="txt">
                        <b>유아</b>
                        <strong>배지윤</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt="" />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===1}" @click="interviewTab = 1, play(), opnerTigger = true">
                      <span class="txt">
                        <b>교육학</b>
                        <strong>김현</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===2}" @click="interviewTab = 2, play(), opnerTigger = true">
                      <span class="txt">
                        <b>국어</b>
                        <strong>송헌</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===3}" @click="interviewTab = 3, play(), opnerTigger = true">
                      <span class="txt">
                        <b>수학</b>
                        <strong>이정훈/안후상팀</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit12.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===4}"  @click="interviewTab = 4, play(), opnerTigger = true">
                      <span class="txt">
                        <b>중국어</b>
                        <strong>한정은</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit10.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>음악</b>
                        <strong>서정팀</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit13.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>유아</b>
                        <strong>배지윤</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt="" />
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>교육학</b>
                        <strong>김현</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>국어</b>
                        <strong>송헌</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>수학</b>
                        <strong>이정훈/안후상팀</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit12.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>중국어</b>
                        <strong>한정은</strong>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit10.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap">
                      <span class="txt">
                        <b>음악</b>
                        <strong>서정팀</strong>
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
          <!-- <div class="ssamSwiperlist" id="ssamSwiperList">
            <div class="bothArrowsBacK">
              <div class="frameBack">
                <swiper class="interviewSwiper" :options="swiperOption" ref="mySwiper">
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===0}"  @click="interviewTab = 0, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>배지윤</strong>
                        <em>결과가 다른 시작, 기대한다면 합격예감</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit04.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===1}" @click="interviewTab = 1, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>이동건</strong>
                        <em>핵심 콕! 이해 쏙!</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit05.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===2}" @click="interviewTab = 2, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>양재웅</strong>
                        <em>20년 현장경험과 완벽한 분석을 통한 실전 강의</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit06.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===3}" @click="interviewTab = 3, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>김현</strong>
                        <em>키워주기 위한 교육학</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit01.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" :class="{active:interviewTab===4}"  @click="interviewTab = 4, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>권구현</strong>
                        <em>EBS 교육학 논술 전문가의 적중 강의</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit02.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" @click="interviewTab = 2, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>윤중샘</strong>
                        <em>이해중심! 쉽게 설명하는 교육학!</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit03.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" @click="interviewTab = 3, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>권구현</strong>
                        <em>영상으로 만나는 심층 인터뷰</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit07.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="picWrap" @click="interviewTab = 4, play(), opnerTigger = true">
                      <span class="txt">
                        <strong>권구현</strong>
                        <em>영상으로 만나는 심층 인터뷰</em>
                      </span>
                      <img :src="require(`@/assets/images/thumbnail/@tmp_ssamhit08.png`)" alt=""/>
                    </div>
                  </swiper-slide>
                </swiper>
                <div class="bothArrows page">
                  <span class="swiper-pagination" slot="pagination"/></span>
                  <span class="swiper-button-prev" slot="button-prev"/></span>
                  <span class="swiper-button-next" slot="button-next"/></span>
                </div>
              </div>
              <span class="opner">
                <button @click="play(), opnerTigger = true" class="close">전체 선생님 닫기</button>
              </span>
            </div>
          </div> -->
          <!-- //sec01 -->
          <!-- sec02 -->
          <div class="dataArea">
            <div class="frameBack">
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview01.png`)" v-if="interviewTab == 0 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview01M.png`)" v-if="interviewTab == 0 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview02.png`)" v-if="interviewTab == 1 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview02M.png`)" v-if="interviewTab == 1 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview03.png`)" v-if="interviewTab == 2 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview03M.png`)" v-if="interviewTab == 2 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview04.png`)" v-if="interviewTab == 3 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview04M.png`)" v-if="interviewTab == 3 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview05.png`)" v-if="interviewTab == 4 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview05M.png`)" v-if="interviewTab == 4 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview06.png`)" v-if="interviewTab == 5 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview06M.png`)" v-if="interviewTab == 5 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview07.png`)" v-if="interviewTab == 6 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview07M.png`)" v-if="interviewTab == 6 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview01.png`)" v-if="interviewTab == 7 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview01M.png`)" v-if="interviewTab == 7 && this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview02.png`)" v-if="interviewTab == 8 && !this.mobile" alt=""/>
              <img :src="require(`@/assets/images/thumbnail/@tmp_interview02M.png`)" v-if="interviewTab == 8 && this.mobile" alt=""/>
            </div>
          </div>
          <!-- //sec02 -->
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
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Interview',
  data() {
    return {
      
      interviewTab: 0,
      opnerTigger: true,
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop:true,
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
        navigation: { nextEl: '.ssamSwiperlist .swiper-button-next', prevEl: '.ssamSwiperlist .swiper-button-prev' },
      },
    }
  },
  methods: {
    stop(){
      this.$refs.mySwiper.$swiper.destroy(true);
      document.getElementById("ssamSwiperList").classList.add('off');
      setTimeout(() => {
        document.getElementById("ssamSwiperList").classList.add('off2');
      }, 50);
    },
    play(){
      this.$refs.mySwiper.initSwiper();
      document.getElementById("ssamSwiperList").classList.remove('off');
      setTimeout(() => {
        document.getElementById("ssamSwiperList").classList.remove('off2');
      }, 50);
    }
  },
  components: {
  }
}
</script>
