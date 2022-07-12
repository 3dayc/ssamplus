<template lang="html">
  <div>
    <div class="popupBanner" v-if="!this.mobile">
      <div class="popupBoxWrap">
        <div class="popupBox" v-if="pcPopupBanner01">
          <router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@popupBanner01_1.png`)" alt="" /></router-link>
          <em>
            <span><input type="checkbox" id="popToday03"  @click="pcPopupBanner01 = false, pcPopupBanner02 = false, pcPopupBanner03 = false"></input><label for="popToday03">오늘 하루 열지 않기</label></span>
            <button class="close" @click="pcPopupBanner01 = false">닫기</button>
          </em>
        </div>
        <div class="popupBox" v-if="pcPopupBanner02">
          <router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@popupBanner02_1.png`)" alt="" /></router-link>
          <em>
            <span><input type="checkbox" id="popToday01"></input><label for="popToday01">오늘 하루 열지 않기</label></span>
            <button class="close" @click="pcPopupBanner02 = false">닫기</button>
          </em>
        </div>
        <div class="popupBox" v-if="pcPopupBanner03">
          <router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@popupBanner03_1.png`)" alt="" /></router-link>
          <em>
            <span><input type="checkbox" id="popToday02"></input><label for="popToday02">오늘 하루 열지 않기</label></span>
            <button class="close" @click="pcPopupBanner03 = false">닫기</button>
          </em>
        </div>
      </div>
    </div>
    <div class="popupBanner" v-else-if="this.mobile && closePopupBanner">
      <div class="popupBoxWrap">
        <div class="popupBox" v-if="closePopupBanner">
          <router-link to="/mkup/main/eventview4"><img :src="require(`@/assets/images/thumbnail/@popupBanner01_1.png`)" alt="" /></router-link>
          <em>
            <span><input type="checkbox" id="popToday03"></input><label for="popToday03">오늘 하루 열지 않기</label></span>
            <button class="close" @click="closePopupBanner = false">닫기</button>
          </em>
        </div>
      </div>
    </div>
    <div class="mainHeaer" v-if="this.mobile">
      <ul>
        <li><router-link to="/mkup/ssampack/index">쌤팩</router-link></li>
        <li><router-link to="/mkup/lecture/index">수강신청</router-link></li>
        <li><router-link to="/mkup/ssammall/index">쌤 Mall</router-link></li>
        <li><router-link to="/mkup/special/index">선생님 스페셜</router-link></li>
        <li><router-link to="/mkup/openlec/index">무료강의</router-link></li>
        <li><router-link to="/mkup/exam/info/guide">시험정보</router-link></li>
        <li><router-link to="/mkup/pass/index">합격수기</router-link></li>
        <li><router-link to="/mkup/inside/index">인사이드희소</router-link></li>
        <li><router-link to="/mkup/academy/index">희소고시학원</router-link></li>
      </ul>
    </div>
    <!-- main Container -->
    <div id="mainContainer">
      <section>
        <!-- 메인비쥬얼 이미지 -->
        <article>
          <MainBanner v-if="!this.mobile" />
          <MainBannerM v-else-if="this.mobile" />
        </article>
        <!-- //메인비쥬얼 이미지 -->
        <!-- 최신공지사항 & 새소식 -->
        <article>
          <div class="mainBbs">
            <!-- 최신공지사항 & 새소식 & 배너(기본이론무료체험) (PC용) -->
            <div class="frameBack" v-if="!this.mobile">
              <div class="mbbs notice">
                <dl>
                  <dt>
                    <strong>공지사항</strong>
                    <router-link to="/mkup/bbs/notice" class="btnMore">더보기</router-link>
                  </dt>
                  <dd class="mbbsList">
                    <MainBbsNotice />
                  </dd>
                </dl>
              </div>
              <div class="mbbs news">
                <dl>
                  <dt>
                    <strong>희소쌤 소식</strong>
                    <router-link to="/mkup/bbs/notice" class="btnMore">더보기</router-link>
                  </dt>
                  <dd class="mbbsList">
                    <MainBbsNews />
                  </dd>
                </dl>
              </div>
              <span class="mBbsGo"><router-link to="/mkup/openlec/freelec"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img4.png`)" alt="" /></router-link></span>
            </div>
            <!-- 최신공지사항 & 새소식 & 배너(기본이론무료체험) (모바일용) -->
            <div class="frameBack" v-else-if="this.mobile">
              <div class="mBbswrap">
                <div class="tabBack">
                  <div class="tabNav">
                    <nav>
                      <ul class="blackLineTab">
                        <li :class="{on:mainBbsTab===0}"><button @click="mainBbsTab = 0">공지사항</button></li>
                        <li :class="{on:mainBbsTab===1}"><button @click="mainBbsTab = 1">희소쌤 소식</button></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="tabLayout mbbsList">
                  <div v-if="mainBbsTab == 0" class="tabData" :key="mainBbsTab">
                    <MainBbsNotice />
                    <div class="tC"><router-link to="/mkup/bbs/notice" class="btnL line">공지사항 더보기</router-link></div>
                  </div>
                  <div v-if="mainBbsTab == 1" class="tabData">
                    <MainBbsNews />
                    <div class="tC"><router-link to="/mkup/bbs/notice" class="btnL line">희소쌤 소식 더보기</router-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <!-- //최신공지사항 & 새소식 -->
        <!-- 이중 배너광고 (PC용) -->
        <article v-if="!this.mobile">
          <div class="doubleBanner">
            <div class="dbCol" style="background-color:#045b63;"><span><router-link to="/mkup/ssammall"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img5.png`)" alt="" /></router-link></span></div>
            <div class="dbCol" style="background-color:#afaaa6;"><span><router-link to="/mkup/bbs/event"><img :src="require(`@/assets/images/thumbnail/@tmp_main_img6.png`)" alt="" /></router-link></span></div>
          </div>
        </article>
        <!-- //이중 배너광고 (PC용) -->
        <!-- 게시판 옆 광고 + 이중 배너광고 (모바일용) -->
        <article v-if="this.mobile">
          <div class="mbbsDoubleAd2">
            <span class="leftAd"><router-link to="/mkup/openlec/freelec"><img :src="require(`@/assets/images/thumbnail/@tmp_main_imgM4_01.png`)" alt="" /></router-link></span>
          </div>
          <div class="mbbsDoubleAd">
            <span class="leftAd"><router-link to="#"><img :src="require(`@/assets/images/thumbnail/@tmp_main_imgM5_1.png`)" alt="" /></router-link></span>
            <span class="rightAd"><router-link to="#"><img :src="require(`@/assets/images/thumbnail/@tmp_main_imgM6_1.png`)" alt="" /></router-link></span>
          </div>
        </article>
        <!-- //게시판 옆 광고 + 이중 배너광고 (모바일용) -->
        <!-- LeftBanner (PC용) -->
        <div class="leftAdArea" v-if="!this.mobile">
          <span class="adItem type1x2">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner01.png`)" alt=""/></router-link>
          </span>
          <span class="adItem type1x2">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner02.png`)" alt=""/></router-link>
          </span>
          <span class="adItem type1x1">
            <router-link to=""><img :src="require(`@/assets/images/thumbnail/@tmp_leftBanner07.png`)" alt=""/></router-link>
          </span>
        </div>
        <!-- //LeftBanner -->
        <!-- slidingBanner (모바일용 leftBanner) -->
        <div class="slidingBannerCase2" v-if="this.mobile">
          <strong>진행중인 이벤트</strong>
          <swiper :options="slidingBannerOption2">
            <swiper-slide class="type2*1">
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner02.png`)" alt=""/></router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to=""><img :src="require(`@/assets/images/thumbnail/@m_banner01.png`)" alt=""/></router-link>
            </swiper-slide>
          </swiper>
        </div>
        <!-- //slidingBanner (모바일용 leftBanner) -->
        <!-- 선생님 메인 배너 -->
        <article>
          <div class="ssamBanner">
            <MainSsamBanner />
          </div>
        </article>
        <!-- //선생님 메인 배너 -->
        <!-- 오늘의 Pick -->
        <article>
          <div class="topdayPic">
            <div class="frameBack">
              <div>
                <p><strong>우리가 출발한 곳은 선택할 수 없지만, <br/>그곳에서 어디를 향해 갈 지는 선택할 수 있단다.</strong></p>
                <em>&lt;영화 월플라워 &gt; 중</em>
              </div>
            </div>
          </div>
        </article>
        <!-- //오늘의 Pick -->
        <!-- 적중후기 배너광고 -->
        <!-- <article>
          <div class="marinRealReview">
            <router-link to="/mkup/special/hit" v-if="!this.mobile"><img :src="require(`@/assets/images/img_mainReview.png`)" alt="" /></router-link>
            <router-link to="/mkup/special/hit" v-else-if="this.mobile"><img :src="require(`@/assets/images/m/img_mainReview.png`)" alt="" /></router-link>
          </div>
        </article> -->
        <!-- //적중후기 배너광고 -->
        <!-- 쌤팩 메인배너 -->
        <article>
          <div class="mainSsampack tC">
            <p class="ssamTit" v-if="!this.mobile">2023 <span><strong class="titLine">NO.1 단기합격</strong>패키지</span></p>            
            <div v-if="!this.mobile">
              <img :src="require(`@/assets/images/main_ssampak_pc.png`)" alt="" style="margin:0 auto;" v-if="!this.mobile"/>
              <ul class="pc_btn">
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
              </ul>             
            </div>
            <div v-else-if="this.mobile">
              <img :src="require(`@/assets/images/main_ssampak_mo.png`)" alt="" style="margin:0 auto;" usemap="#mobile"/>              
              <ul class="mo_btn">
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
                <li><router-link to="/mkup/ssampack/index"></router-link></li>
              </ul>
            </div>
          </div>            
        </article>
        <!-- //쌤팩 메인배너 -->
        <!-- 하이라이트 배너 Set -->
        <article>
          <MainKindBanner />
        </article>
        <!-- //하이라이트 배너 Set -->
        <!-- 합격자 -->
        <article>
          <MainPass  v-if="!this.mobile"/>
          <MainPassM  v-else-if="this.mobile"/>
        </article>
        <!-- //합격자 -->
        <!-- 리얼적중 -->
        <article>
          <div class="mainHit">
            <p>
              <strong>이것이 적중! 2021</strong>
              <span class="titLine">수강생이 직접 제보한</span> 적중 내역을 확인하세요.
            </p>
            <MainHitPc v-if="!this.mobile" />
            <MainHitM v-else-if="this.mobile" />
            <div class="tC"><router-link to="/mkup/special/hit" class="btnL line">적중 내역 더보기</router-link></div>
          </div>
        </article>
        <!-- //리얼적중 -->
        <!-- 수강후기 -->
        <article>
          <MainReview/>
        </article>
        <!-- //수강후기 -->
        <!-- 학원안내 -->
        <article>
          <div class="frameBack mainCallAre">
            <div class="back">
              <h3>상담센터</h3>
              <dl>
                <dt>
                  <strong>1544-0678</strong>
                </dt>
                <dd>
                  <div class="seoul">
                    <strong>학원상담</strong>
                    <span><em>월~토</em> 07:30~21:00</span>
                    <span><em>일<i>요일</i></em> 08:30~18:00</span>
                  </div>
                  <div class="online">
                    <strong>온라인 수강문의</strong>
                    <span><em>평일</em> 09:00~18:00</span>
                    <span><em>점심시간</em> 12:00~13:00</span>
                  </div>
                  <div class="technic">
                    <strong>기술/원격지원</strong>
                    <span><em>평일</em> 09:00~18:00</span>
                    <span><em>토<i>요일</i></em> 10:00~14:00</span>
                  </div>
                </dd>
              </dl>
            </div>
            <span class="go">
              <router-link to="">쌤플러스 모바일</router-link>
              <router-link to="" class="location"><b>쌤플러스 </b>찾아오시는길</router-link>
            </span>
          </div>
        </article>
        <!-- //학원안내 -->
      </section>
    </div>
    <!-- //main Container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import MainBanner from '@/views/main/MainBanner.vue';
import MainBannerM from '@/views/main/MainBannerM.vue';
import MainBbsNotice from '@/views/main/MainBbsNotice.vue';
import MainBbsNews from '@/views/main/MainBbsNews.vue';
import MainSsamBanner from '@/views/main/MainSsamBanner.vue';
import MainKindBanner from '@/views/main/MainKindBanner.vue';
import MainHitPc from '@/views/main/MainHitPc.vue';
import MainHitM from '@/views/main/MainHitM.vue';
import MainReview from '@/views/main/MainReview.vue';
import MainPass from '@/views/main/MainPass.vue';
import MainPassM from '@/views/main/MainPassM.vue';

export default {
  mixins: [Mixin],
  name: 'Main',
  components: {
    MainBanner,
    MainBannerM,
    MainBbsNotice,
    MainBbsNews,
    MainSsamBanner,
    MainKindBanner,
    MainHitPc,
    MainHitM,
    MainReview,
    MainPass,
    MainPassM
  },
  data() {
    return {
      mainBbsTab:0,
      closePopupBanner:true,
      pcPopupBanner01:true,
      pcPopupBanner02:true,
      pcPopupBanner03:true,
      slidingBannerOption2: {
        slidesPerView: 'auto',
        loop: false,
        spaceBetween: 15,
      },
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
