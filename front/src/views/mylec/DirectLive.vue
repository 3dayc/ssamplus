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
        <div class="directLive">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>라이브 강좌 관리</h3>
            <div class="summeryTxt">
              라이브강의는 학원강의를 동일한 수업시간에 실시간 온라인으로 수강할 수 있는 강의입니다.<br/>
              라이브 강의는 학원강의와 마찬가지로 정해진 수업시간에 시작하며, 늦게 입장하신 경우 앞에 강의는 별도로 제공되지 않습니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!---->
          <div class="ssamLecList topNoline">
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
                      <em class="iLocSet live">라이브</em>
                    </span>
                    <strong class="tt">
                      교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em>월, 목 09:00 ~ 13:00</em></span>
                    <!-- <div class="liveState on">현재 라이브 강의 중입니다.</div> -->
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <!-- <button class="lecAtt" @click="popupTrigger4 = true">첨삭게시판</button> -->
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/direct/live/player" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button class="btnApply" @click="popupTrigger9 = true">보충강의신청</button>
                    </span>
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
                      <em class="iLocSet ivy">아이비</em>
                    </span>
                    <strong class="tt">
                      교직논술 및 서술식 답안쓰기 1반_ 라이브 자료제공용 (댓글없음용)
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em>월, 목 09:00 ~ 13:00</em></span>
                    <!-- <div class="liveState on">현재 라이브 강의 중입니다.</div> -->
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <!-- <button class="lecAtt" @click="popupTrigger4 = true">첨삭게시판</button> -->
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/direct/live/player2" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button class="btnApply" @click="popupTrigger9 = true">보충강의신청</button>
                    </span>
                  </div>
                </div>
              </li>
              <li class="closing">
                <div class="lecBasic">
                  <span class="kind">
                    <span><em class="iSbjSet">교육학</em></span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iLocSet idea">이데아</em>
                      <em class="iPro bonus">보너스</em>
                    </span>
                    <strong class="tt">
                      Making Map 교육학
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em>월, 목 09:00 ~ 13:00</em></span>
                    <div class="liveState off">해당 강좌는 라이브 강의 시간이 아닙니다.</div>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button  class="btnApply" @click="popupTrigger9 = true">보충강의신청</button>
                    </span>
                  </div>
                </div>
              </li>
              <li>
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
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em>월, 목 09:00 ~ 13:00</em></span>
                    <!-- <div class="liveState on">현재 라이브 강의 중입니다.</div> -->
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <router-link to="/mkup/mylec/direct/live/player" class="lecLiveGo">입장하기</router-link>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button class="btnApply" @click="popupTrigger9 = true">보충강의신청</button>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
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
    <!-- //보너스강의 신청 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PopupBoardApply from '@/views/mylec/PopupBoardApply.vue';
import PopuplecDataBbsApply from '@/views/mylec/PopuplecDataBbsApply.vue';
import PopupAdditionApply from '@/views/mylec/PopupAdditionApply.vue';

export default {
  mixins: [Mixin],
  name: 'DirectLive',
  components: {
    PopupBoardApply,
    PopuplecDataBbsApply,
    PopupAdditionApply
  },
  data() {
    return {
      popupTrigger4: false,
      popupTrigger5: false,
      popupTrigger9: false
    }
  },
  mounted() {
  },
}
</script>
