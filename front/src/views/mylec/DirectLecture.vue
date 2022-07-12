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
        <div class="directLecture">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>학원 수강 강좌 관리</h3>
            <div class="summeryTxt">
              내일의 <em>과목명</em> 선생님, <em>회원명</em>님의 꿈을 응원합니다.
            </div>
          </div>
          <!-- //서브 타이틀 -->
          <!---->
          <div class="myLecSorting">
            <span class="labelToggleSet">
              <input type="checkbox" id="push5" @change="onChange($event)">
              <label for="push5">
                <span>전체 수강 강좌 보기</span>
                <span>수강 중 강좌만 보기</span>
              </label>
            </span>
          </div>
          <!--//-->
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
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecAtt" @click="popupTrigger4 = true">첨삭게시판</button>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <button class="lecReceipt" @click='lecCompletion()'>수강확인증</button>
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
                    <span>
                      <em class="iSbjSet">교육학</em>
                      <em class="iStartSet continue">연장</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iStartSet continue">연장</em>
                      <em class="iLocSet idea">이데아</em>
                      <em class="iPro bonus">보너스</em>
                    </span>
                    <strong class="tt">
                      Making Map 교육학
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <button class="lecReceipt" @click='lecCompletion()'>수강확인증</button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li v-if="ingType == false">
                <div class="lecBasic">
                  <span class="kind">
                    <span>
                      <em class="iSbjSet">중국어</em>
                      <em class="iStartSet waiting">수강대기</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>중국어</i><span>희소중국어팀</span></em>
                    <span class="lecUnit">
                      <em class="iStartSet waiting">수강대기</em>
                      <em class="iLocSet ivy">아이비</em>
                    </span>
                    <strong class="tt">
                      80점 도약 모의고사반 첨삭비
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li v-if="ingType == false">
                <div class="lecBasic">
                  <span class="kind">
                    <span>
                      <em class="iSbjSet">교육학</em>
                      <em class="iStartSet waiting">수강대기</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iStartSet waiting">수강대기</em>
                      <em class="iLocSet ivy">아이비</em>
                      <em class="iPro bonus">보너스</em>
                    </span>
                    <strong class="tt">
                      키위교육학 한 달에 입문하기
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
                  </div>
                  <div class="choice">
                    <span class="lecReAddSet">
                      <button @click="popupTrigger2 = true">교재보기</button>
                      <button @click="popupTrigger3 = true">신청하기</button>
                    </span>
                  </div>
                </div>
              </li>
              <li v-if="ingType == false" class="closing">
                <div class="lecBasic">
                  <span class="kind">
                    <span>
                      <em class="iSbjSet">교육학</em>
                      <em class="iStartSet close">수강종료</em>
                    </span>
                  </span>
                  <div class="lecTt">
                    <em class="ssam"><i>교육학</i><span>김현</span> 선생님</em>
                    <span class="lecUnit">
                      <em class="iStartSet close">수강종료</em>
                      <em class="iLocSet idea">이데아</em>
                      <em class="iPro bonus">보너스</em>
                    </span>
                    <strong class="tt">
                      교직논술 및 서술식 답안쓰기 3반
                    </strong>
                    <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em></span>
                  </div>
                  <div class="choice">
                    <div class="lecBbsSet">
                      <span>
                        <button class="lecAtt" @click="popupTrigger4 = true">첨삭게시판</button>
                        <button class="lecData" @click="popupTrigger5 = true">강의자료</button>
                        <button class="lecReceipt" @click='lecCompletion()'>수강확인증</button>
                      </span>
                    </div>
                    <span class="lecReAddSet">
                      <button class="btnApply" @click="popupTrigger9 = true">보충강의신청</button>
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
    <!-- 교재신청 팝업 -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" class="large bookPopup">
      <template slot="modalheader">
        <div>
          <h1>80점 도약 모의고사반 첨삭비<span>의 교재</span></h1>
          <button @click="popupTrigger2 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupBookApply />
      </template>
    </Popup>
    <!-- //교재신청 팝업 -->
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
    <!-- 첨삭게시판 팝업 -->
    <Popup v-if='popupTrigger4' @close="popupTrigger4 = false" class="large bbsPopup">
      <template slot="modalheader">
        <div>
          <h1>
            첨삭게시판
            <span class="selectSet">
              <select name="" id="">
                <option value="">교육학 김현 - Making Map 교육학</option>
              </select>
            </span>
          </h1>
          <button @click="popupTrigger4 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupBoardApply />
      </template>
    </Popup>
    <!-- //첨삭게시판 팝업 -->
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
    <!-- 홀딩 신청 팝업 -->
    <Popup v-if='popupTrigger6' @close="popupTrigger6 = false" class="large lecReAddPopup">
      <template slot="modalheader">
        <div>
          <h1>홀딩 신청</h1>
          <p>
            홀딩신청은 일시적으로 수강기간을 중지할 수 있는 서비스 입니다. <span>(※당일 홀딩신청불가, 홀딩기간 중 수강불가)</span>
            <em>홀딩기간 중에는 강좌를 수강할 수 없으며 모의고사 및 일부 강좌에 대해서는 차등적용이 될 수 있습니다.</em>
          </p>
          <button @click="popupTrigger6 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReAddHolding />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger6 = false">취소</button>
          <button class="btnL redline" @click="popupTrigger6 = false">장바구니</button>
          <button class="btnL red" @click="popupTrigger6 = false">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //홀딩 신청 팝업 -->
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
    <!-- 재수강 신청 팝업 -->
    <Popup v-if='popupTrigger8' @close="popupTrigger8 = false" class="large lecReAddPopup retakeCase">
      <template slot="modalheader">
        <div>
          <h1>재수강 신청</h1>
          <p>
            재수강 신청은 신청시기에 따라서 할인율에 변동이 있습니다.
            <em>수강종료 후 30일 이내에는 50% 할인, 수강종료 30일이 지나면 30% 할인 찬스를 제공하고 있습니다.</em>
          </p>
          <button @click="popupTrigger8 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupReAddRetake />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger8 = false">취소</button>
          <button class="btnL redline" @click="popupTrigger8 = false">장바구니</button>
          <button class="btnL red" @click="popupTrigger8 = false">즉시결제</button>
        </div>
      </template>
    </Popup>
    <!-- //재수강 신청 팝업 -->
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
import PopupBookApply from '@/views/mylec/PopupBookApply.vue';
import PopupBonusApply from '@/views/mylec/PopupBonusApply.vue';
import PopupBoardApply from '@/views/mylec/PopupBoardApply.vue';
import PopuplecDataBbsApply from '@/views/mylec/PopuplecDataBbsApply.vue';
import PopupReAddHolding from '@/views/mylec/PopupReAddHolding.vue';
import PopupReAddRequest from '@/views/mylec/PopupReAddRequest.vue';
import PopupReAddRetake from '@/views/mylec/PopupReAddRetake.vue';
import PopupAdditionApply from '@/views/mylec/PopupAdditionApply.vue';

export default {
  mixins: [Mixin],
  name: 'DirectLecture',
  components: {
    PopupBookApply,
    PopupBonusApply,
    PopupBoardApply,
    PopuplecDataBbsApply,
    PopupReAddHolding,
    PopupReAddRequest,
    PopupReAddRetake,
    PopupAdditionApply
  },
  data() {
    return {
      popupTrigger: false,
      popupTrigger2: false,
      popupTrigger3: false,
      popupTrigger4: false,
      popupTrigger5: false,
      popupTrigger6: false,
      popupTrigger7: false,
      popupTrigger8: false,
      popupTrigger9: false,
      ingType: false,
      bookPopupTrigger01: false,
      bookPopupTrigger02: false,
      bookPopupTrigger03: false,
      bookPopupTrigger04: false,
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.checked;
      this.ingType = false;
      if(value == false)  this.ingType = false;
      else  this.ingType = true;
    },
    lecCompletion() {
      let routeData = this.$router.resolve({name: 'LecCompletion', query: {data: ""}});
      window.open('/mkup/windowPopup/lecCompletion', '_blank', `width=760,height=800`);
    }, // 윈도우팝업 호출
  },
  mounted() {
  },
}
</script>
