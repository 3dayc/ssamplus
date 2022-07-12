<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="directAddition">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>학원 보충 강의실</h3>
            <div class="summeryTxt">
              학원 보충 강의 란?<br/>
              학원 수강생 중 부득이한 사정으로 인해 수업을 수강하지 못한 분들을 위해 온라인으로 강의를 수강할 수 있는 기회를 제공하는 서비스입니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <div class="additionKind">
            <dl :class="{on:kindTrigger == true}">
              <dt @click="kindTrigger = !kindTrigger">무료 보강 이용안내</dt>
              <dd v-if="kindTrigger == true">
                <span>학원 수업이 진행되고 동영상강의 업데이트가 완료된 이후 신청 가능합니다.</span>
                <span>보강 신청 횟수는 강의 진행 기간에 따라 산정됩니다. (ex. 1개월 강의 기준 1회, 2개월 강의 기준 2회 신청 가능합니다.)</span>
                <span>보충강의 수강 시간은 온라인 강의와 동일합니다.</span>
                <span>수업자료는 인쇄전용 자료로 제공됩니다.</span>
                <span>보강은 학원강의 종강 후 10일 이내까지만 신청 가능합니다.</span>
                <span>신청/ 승인 날짜로부터 8일간 수강 가능합니다.</span>
                <span>신청하신 보강은 취소가 불가능합니다.</span>
              </dd>
            </dl>
            <dl :class="{on:kindTrigger2 == true}">
              <dt @click="kindTrigger2 = !kindTrigger2">유료 보강 이용안내</dt>
              <dd v-if="kindTrigger2 == true">
                <span>무료보강 횟수가 소진된 이후부터 신청 가능합니다.</span>
                <span>유료보강 신청 횟수는 강의 진행 기간에 따라 산정됩니다. (ex. 1개월 강의 기준 1회, 2개월 강의 기준 2회 신청 가능합니다.)</span>
                <span>보충강의 수강 시간은 온라인 강의와 동일합니다.</span>
                <span>수업자료는 인쇄전용 자료로 제공됩니다.</span>
                <span>유료보강은 학원강의 종강 후 20일 이내까지만 신청/결제 가능합니다.</span>
                <span>신청/ 승인 날짜로부터 8일간 수강 가능합니다.</span>
                <span>결제하신 유료보강은 취소 및 환불이 불가능합니다.</span>
              </dd>
            </dl>
          </div>
          <!---->
          <div class="btnArea">
            <span class="left">※ 각 강좌별 수강 종료일 기준 <strong>3개월</strong> 간 목록에 노출되며, 이후 자동 삭제됩니다.</span>
            <button class="btnM right" @click="popupTrigger9 = true">보충강의신청</button>
          </div>
          <!---->
          <div class="ssamLecList">
            <ul class="myCase">
              <!--Loop-->
              <li>
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iSbjSet">교육학</em></span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iLocSet ivy">아이비</em>
                    </span>
                    <strong class="tt">
                      교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용
                    </strong>
                    <span class="limitNtime">
                      직강수업일자 <em>2021-07-15</em>
                      <span class="multy">보강수강기간 <em>2021-07-15 ~ 2021-07-22</em></span>
                    </span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/direct/live/player" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <!--//Loop-->
              <li>
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iSbjSet">교육학</em></span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iLocSet online">온라인</em>
                    </span>
                    <strong class="tt">
                      교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용
                    </strong>
                    <span class="limitNtime">
                      직강수업일자 <em>2021-07-15</em>
                      <span class="multy">보강수강기간 <em>2021-07-15 ~ 2021-07-22</em></span>
                    </span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/online/my/player" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iSbjSet">교육학</em></span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iLocSet idea">이데아</em>
                    </span>
                    <strong class="tt">
                      Making Map 교육학
                    </strong>
                    <span class="limitNtime">
                      직강수업일자 <em>2021-07-15</em>
                      <span class="multy"><em class="red pd0">신청 승인 대기중</em></span>
                    </span>
                  </div>
                  <div class="choice waiting">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/direct/live/player" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li class="holding">
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iSbjSet">중국어</em></span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>중국어</i><span>희소중국어팀</span></em>
                    <span class="lecUnit">
                      <em class="iLocSet ivy">아이비</em>
                    </span>
                    <strong class="tt">
                      80점 도약 모의고사반 첨삭비
                    </strong>
                    <span class="limitNtime">
                      직강수업일자 <em>2021-07-15</em>
                      <span class="multy"><em class="red pd0">해당 강좌는 라이브 강의 시간이 아닙니다.</em></span>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div class="paging">
              <Paginate v-if="!this.mobile" />
              <div class="moreBtnWrap adPD" v-if="this.mobile">
                <button class="mobileMore">더보기</button>
              </div>
            </div>
          </div>
          <!--//-->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- Layer Popup -->
    <!-- 강의자료 팝업 -->
    <Popup v-if='!this.mobile && popupTrigger5' @close="popupTrigger5 = false" class="large bbsPopup">
      <template slot="modalheader">
        <div>
          <h1>
            강의자료
            <span class="selectSet">
              <select name="" id="">
                <option value="">교육학 김현 - Making Map 교육학</option>
              </select>
            </span>
          </h1>
          <button @click="popupTrigger5 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopuplecDataBbsApply />
      </template>
    </Popup>
    <!-- //강의자료 팝업 -->
    <!-- 강의자료 모바일 안내 -->
    <Alert v-if='this.mobile && popupTrigger5' @close="popupTrigger5 = false">
      <template slot="modalbody">
        <div class="basicNoty">
          <p>
            강의자료는 PC버전 홈페이지에서 확인 가능합니다.
          </p>
        </div>
      </template>
      <template slot="modalfooter">
        <button class="btnM" @click="popupTrigger5 = false">확인</button>
      </template>
    </Alert>
    <!-- //강의자료 모바일 안내-->
    <!-- 보충 강의 신청 팝업 -->
    <Popup v-if='popupTrigger9' @close="popupTrigger9 = false" class="large additionPopup">
      <template slot="modalheader">
        <div>
          <h1>보충 강의 신청</h1>
          <button @click="popupTrigger9 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupAdditionApply />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger9 = false">취소</button>
          <button class="btnL" @click="popupTrigger9 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //보충 강의 신청 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PopuplecDataBbsApply from '@/views/mylec/PopuplecDataBbsApply.vue';
import PopupAdditionApply from '@/views/mylec/PopupAdditionApply.vue';

export default {
  mixins: [Mixin],
  name: 'DirectAddition',
  components: {
    PopuplecDataBbsApply,
    PopupAdditionApply
  },
  data() {
    return {
      popupTrigger5: false,
      popupTrigger9: false,
      kindTrigger: true,
      kindTrigger2: false
    }
  },
  methods: {
  },
  mounted() {
  },
}
</script>
