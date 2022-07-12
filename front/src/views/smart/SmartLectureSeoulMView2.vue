<template lang="html">
  <div>
    <!-- page layout -->
    <div class="lecViewContainer">
      <!---->
      <div class="lecViewContents">
        <!-- 쌤 & 강좌명 -->
        <div class="lecBasicBack">
          <div class="ssam">
            <span><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
            <strong>김 현</strong>
          </div>
          <div class="lecBasic">
            <span class="kind">
              <span><em class="iApplySet ing">신청중</em></span>
            </span>
            <div class="lecTt">
              <em class="iLocSet idea">이데아</em>
              <em class="iSet">단과</em>
              <em class="iSet">2021</em>
              <em class="iSet red">신규개설</em>
              <strong class="tt">
                그린키위반(한국교육사,서양교육사) <i class="division">이론강의</i>
                <span class="msg">기초부터 탄탄하게 쌓아가는 키위 교육학</span>
              </strong>
              <span class="lecLimit">월, 목 9:30~13:00</span>
              <span class="lecLimit red">개강 : 2021-05-03</span>
            </div>
            <span class="iSetLine">
              <em>첨삭</em>
              <em>PC+모바일</em>
              <em>인패키지</em>
              <em>제작예정(2021년 09~12월)</em>
            </span>
          </div>
          <div class="smartPrice">
            <div class="spSet">
              <div class="set">
                <strong class="tt">수강료</strong>
                <span class="price">
                  <del>2,568,000</del><em>10<b>%</b></em><br/>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </div>
              <div class="set">
                <strong class="tt">교재</strong>
                <span class="price">
                  <del>312,000</del><em>10<b>%</b></em><br/>
                  <strong>196,600<i>원</i></strong>
                </span>
              </div>
            </div>
            <div class="spTxt">※ 해당 상품은 <em>총 2개의 강좌 (강좌 1 + 보너스 강좌 1)</em>로 구성된 상품입니다.</div>
          </div>
        </div>
        <!-- //쌤 & 강좌명 -->
        <!-- 강좌 별 상세 내용 -->
        <div class="lecDetail">
          <!-- 수강할인 팁 -->
          <div class="article">
            <div class="subTit">
              <h3>수강할인 팁</h3>
              <span class="right"><button class="btnDiscount" @click="openDetail = !openDetail" v-if="openDetail == false">더보기</button></span>
              <div class="txt"><em>최근 2년 이내 특정강좌를 수강했다면 보다 높은 할인이 적용됩니다.</em></div>
            </div>
            <div class="lecDiscountBack" :class="{open:openDetail===true}" >
              <TeacherLecDiscount />
              <button class="btnDiscount" @click="openDetail = !openDetail">접기</button>
            </div>
          </div>
          <!-- //수강할인 팁 -->
          <!-- 강의 미리보기 -->
          <div class="article">
            <div class="subTit noLine"><h3>강의 미리보기</h3></div>
            <span class="videoPlay" @click="videoPopTrigger01 = true"><img :src="require(`@/assets/images/thumbnail/@tmp_teacherHome02.png`)" alt="" /></span>
          </div>
          <!-- //강의 미리보기 -->
          <!-- 보너스 강좌 -->
          <div class="article offLineCase">
            <div class="subTit"><h3>보너스 강좌</h3></div>
            <div class="inbLecture">
              <div class="widthList">
                <ol>
                  <!--Loop-->
                  <li>
                    <div class="singleLec">
                      <div class="item">
                        <span class="tL">
                          <em class="iPro bonus">보너스</em>
                          <strong>그린키위반(한국교육사, 서양교육사)</strong>
                        </span>
                        <span class="tR">
                          <span class="lecLimit">월, 목 9:30~13:00</span>
                          <span class="lecLimit red">개강 : 2021-05-03</span>
                        </span>
                      </div>
                      <div class="lecBtnSet">
                        <button @click="lecturePop = true">강좌소개</button>
                      </div>
                    </div>
                  </li>
                  <!--//Loop-->
                </ol>
              </div>
            </div>
          </div>
          <!-- //보너스 강좌 -->
        </div>
        <!-- //강좌 별 상세 내용 -->
      </div>
    </div>
    <!-- //page layout -->

    <!-- 강좌관련 팝업(강좌소개만 있음) -->
    <Popup v-if='lecturePop' @close="lecturePop = false" class="large lecturePop">
      <template slot="modalheader" class="noLine">
        <div>
          <h1>그린키위반 (기본반)</h1>
          <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
          <button @click="lecturePop = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <div class="tabLayout infoCase">
          <div class="tabData">
            <TeacherLecDetailInfo />
          </div>
        </div>
      </template>
    </Popup>
    <!-- //강좌관련 팝업(강좌소개만 있음) -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import TeacherLecDetailInfo from '@/views/lecture/TeacherLecDetailInfo.vue';
import TeacherLecSchedule from '@/views/lecture/TeacherLecSchedule.vue';
import TeacherLecDiscount from '@/views/lecture/TeacherLecDiscount.vue';

export default {
  mixins: [Mixin],
  name: 'TeacherOnlineView2',
  components: {
    TeacherLecDetailInfo,
    TeacherLecSchedule,
    TeacherLecDiscount
  },
  data() {
    return {
      openDetail: false,
      currentTab: 0,
      videoPopTrigger01: false,
      lecturePop:false,
      lecturePopTab:0,
      lecturePop2:false,
      lecturePopTab2:0,
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
