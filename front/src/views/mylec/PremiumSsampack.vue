<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="subMainCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="premiumSsampack">
          <div class="frameBack">
            <!-- 서브 타이틀 -->
            <div class="subTit noLine">
              <h3>프리미엄 쌤팩</h3>
            </div>
            <!-- //서브 타이틀 -->
            <div v-if='!ingTrigger' class="ssampackNotYet">
              <PremiumSsampackIntro />
              <button class="btnL" @click="ingTrigger = true, notYetTrigger = false, scrollToTop()"><strong>프리미엄 쌤팩</strong>으로 더 많은 서비스 누리기</button>
            </div>
            <div v-if='ingTrigger' class="ssampackNotYet">
              <!-- <PremiumSsampackIntro2 /> -->
              <div>
                <div class="mainSloganBack">
                  <div class="mainSlogan">
                    <p><span><strong>홍길동</strong> 선생님을 위한 완벽한 학습공간</span></p>
                    <p class="minExp">오직 합격을 위해 설계된 1차 시험대비 연간 강좌플랜<br>20가지 프리미엄 서비스를 한꺼번에 누리는 특별한 학습지원서비스</p>
                    <p class="midExp">오직 <em>쌤팩 프리미엄 회원</em>만의 다양한 특권을 누려 보세요.</p>
                  </div>
                </div>
                <div class="LinkTab">
                  <ul>
                    <li class="t_01"><button @click="goodMorningTrigger = true"><span><small>일찍 일어나는 습관을 만들어 주는</small>아침기상인증</span></button></li>
                    <li class="t_02"><button @click=""><span><small>문의사항을 1:1로 해결할 수 있는</small>프리미엄 전용 카카오톡 채널</span></button></li>
                    <li class="t_03"><button @click="certificateTrigger = true"><span><small>나의 목표를 미리 보여주는</small>합격증 보기</span></button></li>
                  </ul>
                </div>
                <span class="hrLine"></span>
                <div class="ssampackTabWrap">
                  <div class="headTab" :class="{typeSelect:this.mobile === true}">
                    <div v-if="this.mobile" class="selectSsam" @click="changeTab()">
                        <span class="profileIcon"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                        <p><b>김현</b> 선생님</p>
                    </div>
                    <ul :class="{active:changeL === true}" @click="changeL = false">
                      <li :class="{on:tabToggle===0}" @click="tabToggle = 0">
                        <span class="profileIcon"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare01.png`)" alt="" /></span>
                        <p><b>김현</b> 선생님</p>
                      </li>
                      <li :class="{on:tabToggle===1}" @click="tabToggle = 1">
                        <span class="profileIcon"><img :src="require(`@/assets/images/thumbnail/@tmp_ssamSquare10.png`)" alt="" /></span>
                        <p><b>희소 중국어 팀</b></p>
                      </li>
                    </ul>
                  </div>
                  <div class="packageMonthly">
                      <div class="iconWrap">
                        <em class="iSbjSet ivy">아이비</em>
                        <em class="iSbjSet">교육학</em>
                      </div>
                      <p>4~5월 패키지</p>
                  </div>
                </div>
                <div class="ssamBenefits">
                  <ul class="benefitList">
                    <li class="item1">
                      <dl>
                        <dt>상반기 이론 복습용 강의</dt>
                        <dd>
                          <p>이론의 이해와 암기를 위한 상반기 이론 전 과정, 복습용 강의 제공</p>
                          <ul class="dotList">
                            <li>각 과정별 2주 경과 후, 신청가능</li>
                            <li>0.5배수/수강기간은 강의마다 상이</li>
                            <li>일부 강좌 제외</li>
                          </ul>
                          <button class="btnApply" @click="popupTrigger3 = true">신청하기</button>
                        </dd>
                      </dl>
                    </li>
                    <li class="item2">
                      <dl>
                        <dt>학원 보충강의</dt>
                        <dd>
                          <p>학원강의 결석 시, 과정별 보충강의 2회 추가 제공</p>
                          <ul class="dotList">
                            <li>각 과정별 종강 후 10일 이내 신청 가능</li>
                            <li>학원강의 수강 과정에 대해 제공</li>
                          </ul>
                          <button class="btnApply" @click="popupTrigger3 = true">신청하기</button>
                        </dd>
                      </dl>
                    </li>
                    <li class="item3">
                      <dl>
                        <dt>동영상 기간 연장</dt>
                        <dd>
                          <p>수강기간이 부족할 시, 과정별 기간 연장 7일 추가 제공</p>
                          <ul class="dotList">
                            <li>각 과정별 종강 7일 전~ 종강 후 15일 이내 신청 가능</li>
                            <li>동영상강의 수강 과정에 대해 제공</li>
                          </ul>
                          <button class="btnApply" @click="popupTrigger7 = true">신청하기</button>
                        </dd>
                      </dl>
                    </li>
                    <li class="item4">
                      <dl>
                        <dt>과목별 입문 강의</dt>
                        <dd>
                          <p>임용 시험 준비를 시작하는 초보 수험생을 위해 준비중인<br/>>시험 과목 입문 강의 제공</p>
                          <ul class="dotList">
                            <li>과목별 제공 상이</li>
                            <li>직접 신청이 안되는 경우 프리미엄 1:1 상담 문의</li>
                          </ul>
                          <button class="btnApply" @click="popupTrigger3 = true">신청하기</button>
                        </dd>
                      </dl>
                    </li>
                    <li class="item5">
                      <dl>
                        <dt>과목별 직/인강 특강</dt>
                        <dd>
                          <p>내가 선택한 선생님의 2021년 직/인강 특강 무료 수강</p>
                          <ul class="dotList">
                            <li>패키지&#38;단과 중 택1</li>
                            <li>과목별 수강 방식 상이, 내강의실>수강강좌 관리 에서 보너스 강좌로 직접 신청</li>
                          </ul>
                          <button class="btnApply" @click="popupTrigger3 = true">신청하기</button>
                        </dd>
                      </dl>
                    </li>
                    <li class="item6">
                      <dl>
                        <dt>직/인강 무한 전환</dt>
                        <dd>
                          <p>시기별 학습 상황에 따라 과정별 직/인강 무한 전환 가능</p>
                          <ul class="dotList">
                            <li>과정별 전환 가능 예) 1~2월은 직강으로, 3~4월은 인강으로 수강 가능</li>
                            <li>과정 내 1회 변경</li>
                          </ul>
                          <router-link to="/mkup/mylec/premium/counsel" class="btnApply">신청하기</router-link>
                        </dd>
                      </dl>
                    </li>
                    <li class="item7">
                      <dl>
                        <dt>9~11월 모의고사반 학원 응시 자격</dt>
                        <dd>
                          <p>실제 시험과 동일한 조건에서 이루어지는 모의고사반, 학원 응시 기회 부여</p>
                          <ul class="dotList">
                            <li>과목/선생님에 따라 상이</li>
                            <li>학원 수강의 경우 자동으로 학원 응시자격을 가지며, 온라인 수강일 경우에도<br/> 학원에서 응시할 수 있도록 제공</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item8">
                      <dl>
                        <dt>사물함 10개월 사용</dt>
                        <dd>
                          <p>1~10월까지 개인 고정 사물함 1개 제공</p>
                          <ul class="dotList">
                            <li>1개월 단위로 신청가능</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item9">
                      <dl>
                        <dt>교원임용입문서/OMR노트 무료 제공</dt>
                        <dd>
                          <p>이론의 이해와 암기를 위한 상반기 이론 전 과정, 복습용 강의 제공</p>
                          <ul class="dotList">
                            <li>임용시험 정보를 담은 가이드북+실제 답안지 퀄리티의 OMR노트 무료 제공</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item10">
                      <dl>
                        <dt>교재 배송비 3회 무료</dt>
                        <dd>
                          <p>희소 선생님의 잘 만든 교재, 단 1권 구매 시에도 무료 배송</p>
                          <ul class="dotList">
                            <li>무료 배송쿠폰 3장 발급</li>
                            <li>구매교재 합계가 15,000원 이상인 경우에만 사용 가능</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item11">
                      <dl>
                        <dt>2021년 희소 모의고사 우선 신청</dt>
                        <dd>
                          <p>조기 마감되는 희소 모의고사, 선접수/일반접수보다 더 빠른 신청</p>
                          <ul class="dotList">
                            <li>과목/선생님에 따라 상이</li>
                            <li>모의고사 미진행 시 우선 신청권 제공되지 않음</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item12">
                      <dl>
                        <dt>한국사능력검정시험 합격패키지&#38;단과 1회 무료</dt>
                        <dd>
                          <p>한능검 3급 이상 필수 취득을 위해 가장 최신 패키지&#38;단과 1회 무료 제공</p>
                          <ul class="dotList">
                            <li>패키지&#38;단과 중 택1</li>
                            <li>구폰 발급하여 원하는 시기에 사용 가능</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                    <li class="item13">
                      <dl>
                        <dt>희.소.식 안내</dt>
                        <dd>
                          <p>매 월 초, 월별 학습 꿀팁 안내 문자 발송</p>
                          <ul class="dotList">
                            <li>쌤플러스 SMS 수신 동의 필요, 월별 학습정보 제공</li>
                          </ul>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </div>
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
    <!-- 합격증 미리보기 팝업 -->
    <Popup v-if='certificateTrigger' @close="certificateTrigger = false" class="certificatePop">
      <template slot="modalheader">
        <div>
          <h1>합격증 미리보기</h1>
          <button @click="certificateTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <img :src="require(`@/assets/images/thumbnail/@passCertificate.png`)" alt="" />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="certificateTrigger = false">취소</button>
          <button class="btnL">다운로드</button>
        </div>
      </template>
    </Popup>
    <!-- //합격증 미리보기 팝업 -->
    <!-- 아침기상인증 팝업 -->
    <Popup v-if='goodMorningTrigger' @close="goodMorningTrigger = false" class="goodMorningPop">
      <template slot="modalheader">
        <div>
          <span>쌤팩 프리미엄 회원만을 위한</span>
          <h1>Morning Miracle Pick</h1>
          <p>나는 매일 아침 7 시 ~ 9 시 아침 기상 인증을 Pick 합니다. <em><strong>Today’s Miracle Pick (아침 기상 인증하기)</strong> 버튼을 클릭하여 인증 해주세요.</em></p>
          <button class="btnMorning">아침 기상 인증하기</button>
          <button @click="goodMorningTrigger = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody" v-if="!this.mobile">
        <div class="morningMonth"> <!-- 2021-11-18 div 및 span 추가 -->
          <span class="monthNum case1">15</span>
          <span class="monthNum case2">20</span>
          <span class="monthNum case3">2</span>
          <span class="monthNum case4">13</span>
          <v-calendar
            :attributes="attributes"
            :columns="layout.columns"
            :rows="layout.rows"
            :is-expanded="layout.isExpanded"
            />
        </div>
      </template>
      <template slot="modalbody" v-if="this.mobile">
        <div class="morningMonth"> <!-- 2021-11-18 div 및 span 추가 -->
          <span class="monthNum case1">15</span>
            <v-calendar trim-weeks :is-expanded="layout.isExpanded"/>
        </div>
      </template>
    </Popup>
    <!-- //아침기상인증 팝업 -->
    <!-- 보너스강의 신청 팝업 -->
    <Popup v-if='popupTrigger3' @close="popupTrigger3 = false" class="bonusPopup">
      <template slot="modalheader">
        <div>
          <h1>보너스 강좌 신청</h1>
          <button @click="popupTrigger3 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupBonusApply />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger3 = false">취소</button>
          <button class="btnL" @click="popupTrigger3 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //보너스강의 신청 팝업 -->
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
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PremiumSsampackLec01 from '@/views/mylec/PremiumSsampackLec01.vue';
import PremiumSsampackLec02 from '@/views/mylec/PremiumSsampackLec02.vue';
import PremiumSsampackIntro from '@/views/mylec/PremiumSsampackIntro.vue';
// import PremiumSsampackIntro2 from '@/views/mylec/PremiumSsampackIntro2.vue';
import PopupBonusApply from '@/views/mylec/PopupBonusApply.vue';
import PopupReAddRequest from '@/views/mylec/PopupReAddRequest.vue';

export default {
  mixins: [Mixin],
  name: 'PremiumSsampack',
  components: {
    PremiumSsampackLec01,
    PremiumSsampackLec02,
    PremiumSsampackIntro,
    // PremiumSsampackIntro2,
    PopupBonusApply,
    PopupReAddRequest,
  },
  data() {
    return {
      ingTrigger: false,
      currentTab: 0,
      tabToggle : 0,
      certificateTrigger: false,
      tabListTrigger : false,
      goodMorningTrigger : false,
      popupTrigger3 : false,
      popupTrigger7 : false,
      dragValue: null,
      days: [],
      changeL: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    changeTab() {
      if (this.changeL === false) {
        this.changeL = true;
      }else {
        this.changeL = false;
      }

    }
  },
  mounted() {
  },
  computed: {
    layout() {
      return this.$screens(
        {
          default: {
            columns: 1,
            rows: 1,
            isExpanded: true,
          },
          lg: {
            columns: 2,
            rows: 2,
            isExpanded: true,
          },
        },
      );
    }
  }
}
</script>
