<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <div id="container" class="subMainCase">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="specialIndex">
          <!-- 너도 지금 쌤며든다, 선생님 이벤트 -->
          <div class="spSsamEvent">
            <div class="frameBack">
              <div class="subTit st01">
                <h3>너는 지금 쌤며든다, <strong>선생님 이벤트</strong></h3>
              </div>
              <SpecialIndexEventPc  v-if="!this.mobile"/>
              <SpecialIndexEventM v-else-if="this.mobile"/>
            </div>
          </div>
          <!-- 믿고 듣는 쌤플러스, 리얼 적중 -->
          <div class="spRealHit bothArrows">
            <div class="subTit st02">
              <h3>믿고 듣는 쌤플러스, <strong>리얼 적중</strong></h3>
            </div>
            <SpecialIndexHitPc  v-if="!this.mobile"/>
            <SpecialIndexHitM v-else-if="this.mobile"/>
          </div>
          <!-- //믿고 듣는 쌤플러스, 리얼 적중 -->

          <!-- 안 보면 후회각, 선생님 인터뷰 -->
          <div class="spInterview">
            <div class="frameBack">
              <div class="subTit st03">
                <h3>안 보면 후회각, <strong>선생님 인터뷰</strong></h3>
              </div>
              <div class="bothArrows">
                <SpecialIndexInterviewPc  v-if="!this.mobile"/>
                <SpecialIndexInterviewM v-else-if="this.mobile"/>
              </div>
              <router-link to="/mkup/special/interview" class="btnL line">선생님 인터뷰 더보기</router-link>
            </div>
          </div>
          <!-- //안 보면 후회각, 선생님 인터뷰 -->

          <!-- 솔직하게 말하는 백퍼 수강후기 -->
          <div class="spReview">
            <div class="subTit st04">
              <h3>솔직하게 말하는 <strong>백퍼 수강후기</strong></h3>
            </div>
            <swiper class="reviewSwiper" :options="swiperOption04">
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjMusic">
                  <em>#음악 서민정</em>
                  <em>#국악 기본반</em>
                  <span class="txt">
                    국악하면 역시 서쌤인거 같아요! 1~2월 강의 정말 잘들었습니다!!
                  </span>
                  <span class="name">- idd******</span>
                  <span class="over">
                    <strong>
                      <span>#음악 서민정</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjChild">
                  <em>#유아 배지윤</em>
                  <em>#교직논술 기초반</em>
                  <span class="txt">
                    처음으로 도전하는 임용에 교수님의 많은 응원과 가르침이 있어 조금 더 집중해서 잘할수
                  </span>
                  <span class="name">- idd******</span>
                  <span class="over">
                    <strong>
                      <span>#유아 배지윤</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjEdu">
                  <em>#교육학 권구현</em>
                  <em>#2020학년도 합격자 사례발표</em>
                  <span class="txt">
                    임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했다.
                  </span>
                  <span class="name">- 2Si*****</span>
                  <span class="over imgCase">
                    <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt="" /></span>
                    <strong>
                      <span>#교육학 권구현</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjPys">
                  <em>#체육 오정환</em>
                  <em>#Map 구조도(내용학) 및 기출문제</em>
                  <span class="txt">
                    처음 들어보는 전공강의였는데 어려운 내용들을 재미있고 쉽게 구조화 시켜
                  </span>
                  <span class="name">- 2Si*****</span>
                  <span class="over imgCase">
                    <span class="img"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img12.png`)" alt="" /></span>
                    <strong>
                      <span>#교육학 권구현</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjChild">
                  <em>#유아 양재웅</em>
                  <em>#유아교육개론</em>
                  <span class="txt">
                    임용재수생으로 막막한 논술의 기본을 잡고자 양재웅교수님 강의를 신청했어요.
                  </span>
                  <span class="name">- 2Si*****</span>
                  <span class="over">
                    <strong>
                      <span>#교육학 권구현</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link to="/mkup/special/review" class="sbjMusic">
                  <em>#음악 서민정</em>
                  <em>#국악 기본반</em>
                  <span class="txt">
                    국악하면 역시 서쌤인거 같아요! 1~2월 강의 정말 잘들었습니다!!
                  </span>
                  <span class="name">- idd******</span>
                  <span class="over">
                    <strong>
                      <span>#음악 서민정</span><br/>
                      #2020학년도 합격자 사례발표
                    </strong>
                    <span class="longtxt">
                      임용준비를 하면서, 강사선생님을 선택하는 것 역시 중요하다고 생각했습니다.
                      권구현 선생님의 여럿 샘플 강의를 들으면서, 이 선생님이라면 내가 믿고 따를수있겠다 라는 신뢰가 생겼습니다.
                      실제 1-2월강좌를 듣고있는데, 내 선택에 후회가 없습니다.
                      앞으로도 잘 부탁드립니다.</span>
                    <span class="nameWithDate"><em>Hans***</em> 2021-05-24</span>
                  </span>
                </router-link>
              </swiper-slide>
            </swiper>
            <!-- <div class="bothArrows page">
              <span class="swiper-pagination" slot="pagination"/></span>
              <span class="swiper-button-prev" slot="button-prev"/></span>
              <span class="swiper-button-next" slot="button-next"/></span>
            </div> -->
          </div>
          <!-- //솔직하게 말하는 백퍼 수강후기 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SpecialIndexEventPc from '@/views/special/SpecialIndexEventPc.vue';
import SpecialIndexEventM from '@/views/special/SpecialIndexEventM.vue';
import SpecialIndexHitPc from '@/views/special/SpecialIndexHitPc.vue';
import SpecialIndexHitM from '@/views/special/SpecialIndexHitM.vue';
import SpecialIndexInterviewPc from '@/views/special/SpecialIndexInterviewPc.vue';
import SpecialIndexInterviewM from '@/views/special/SpecialIndexInterviewM.vue';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
    SpecialIndexEventPc,
    SpecialIndexEventM,
    SpecialIndexHitPc,
    SpecialIndexHitM,
    SpecialIndexInterviewPc,
    SpecialIndexInterviewM
  },
  data() {
    return {
      swiperOption04: {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop:true,
        // pagination: {
        //   el: ".spReview .swiper-pagination",
        //   type: "fraction",
        // },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // navigation: { nextEl: '.spReview .swiper-button-next', prevEl: '.spReview .swiper-button-prev' },
        centeredSlides: true,
      },
    }
  },
}
</script>
