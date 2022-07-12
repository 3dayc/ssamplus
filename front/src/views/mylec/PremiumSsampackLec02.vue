<template lang="html">
  <div>
    <!---->
    <div class="selectPack">
      <div>
        <em class="iLocSet online">온라인</em>
        <em class="iSbjSet">중국어</em>
        <strong>6~8월 패키지</strong>
      </div>
    </div>
    <div class="lecApply">
      <div class="frameBack">
        <!---->
        <h4>
          수강 강좌 관리
          <span>온라인/학원 수강생 ZONE의 수강 강좌 관리에서 수강시작일을 설정해 주세요.</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem">
              <em class="iStartSet close">수강종료</em>
              <strong>중국어 실전대비과정1</strong>
              <i>2021-04-10 ~ 2021-05-15</i>
            </span>
          </li>
          <li>
            <span class="packItem ing">
              <em class="iStartSet ing">수강 중</em>
              <strong>중국어 실전대비과정2</strong>
              <i>
                2021-05-16 ~ 2021-06-10
                <router-link to="/mkup/mylec/online/my/player" class="go">바로가기</router-link>
              </i>
            </span>
          </li>
          <li>
            <span class="packItem">
              <em class="iStartSet waiting">수강대기</em>
              <strong>중국어 실전대비과정3</strong>
              <i class="red">미사용</i>
            </span>
          </li>
          <li>
            <span class="packItem">
              <em class="iStartSet waiting">수강대기</em>
              <strong>중국어 실전대비과정4</strong>
              <i class="red">홀딩 중</i>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          이론 복습용 강의 (보너스 강의)
          <span>이론의 이해와 암기를 위한 상반기 이론 전 과정, 복습용 강의 제공</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem ing">
              <em class="iStartSet ing">수강 중</em>
              <strong>중국어 실전대비과정2</strong>
              <i>
                2021-05-16 ~ 2021-06-10
                <router-link to="/mkup/mylec/online/my/player" class="go">바로가기</router-link>
              </i>
            </span>
          </li>
          <li>
            <span class="packItem">
              <em class="iStartSet waiting">수강대기</em>
              <strong>중국어 이론과정1</strong>
              <i>
                2021-05-16 ~ 2021-06-10
                <button class="go red" @click="deleteTrigger = true">신청취소</button>
              </i>
            </span>
          </li>
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">강의신청</i>
              <span class="info">
                <em>강좌 별 2주 경과 후 신청이 가능</em>
                <em>0.5배수 수강시간을 제공</em>
                <em>수강기간은 강좌마다 상이하며 일부 강의는 제외함</em>
              </span>
              <button class="btnApply" @click="popupTrigger3 = true">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          온라인 강좌 기간연장
          <span>수강기간이 부족할 시, 과정별 기간 연장 7일 추가 제공</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem">
              <em class="iStartSet waiting">수강대기</em>
              <strong>중국어 실전대비과정2</strong>
              <i>
                2021-05-16 ~ 2021-06-10
                <button class="go red" @click="deleteTrigger = true">신청취소</button>
              </i>
            </span>
          </li>
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">강의신청</i>
              <span class="info">
                <em>강좌 별 추가 7일의 기간 연장을 제공</em>
                <em>종강 7일 전 ~ 종강 후 15일 이내에 신청</em>
                <em>동영상 수강 강좌에 한해서 제공</em>
              </span>
              <button class="btnApply" @click="popupTrigger7 = true">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          학원 보충 강의
          <span>학원강의 결석 시, 과정별 보충강의 2회 추가 제공</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem ing">
              <em class="iStartSet ing">수강 중</em>
              <strong>중국어 실전대비과정1</strong>
              <i>2021-05-16 ~ 2021-06-10</i>
            </span>
          </li>
          <li>
            <span class="packItem">
              <em class="iStartSet waiting">수강대기</em>
              <strong>중국어 실전대비과정2</strong>
              <i>
                2021-05-16 ~ 2021-06-10
                <button class="go red">신청취소</button>
              </i>
            </span>
          </li>
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">강의신청</i>
              <span class="info">
                <em>각 과정 별 종강 후 10일 이내 신청 가능</em>
                <em>학원강의 수강 과정에 대해 제공</em>
              </span>
              <button class="btnApply" @click="popupTrigger9 = true">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          과목별 입문 강의
          <span>임용 시험 준비를 시작하는 초보 수험생을 위해 준비중인 시험 과목 입문 강의 제공</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">강의신청</i>
              <span class="info">
                <em>강좌 별 제공여부가 상이함</em>
                <em>신청이 안되는 경우 1:1상담실로 문의</em>
              </span>
              <button class="btnApply">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          과목별 직/인강 특강
          <span>내가 선택한 선생님의 직/인강 특강 무료 수강</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">강의신청</i>
              <span class="info">
                <em>직/인강 특강의 무료수강</em>
                <em>패키지와 단과 중에 택1 가능</em>
                <em>강좌 별 수강방식이 상이함</em>
              </span>
              <button class="btnApply">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          직/인강 전환
          <span>시기별 학습 상황에 따라 과정별 직/인강 무한 전환 가능</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem applyCase">
              <i class="applyKind">전환신청</i>
              <span class="info">
                <em>한 강좌를 1,2월은 직강으로 3,4월은 인강으로 전환하여 수강가능</em>
                <em>과정 내 1회에 한하여 변경 가능</em>
              </span>
              <button class="btnApply" @click="popupTrigger10 = true">신청하기 +</button>
            </span>
          </li>
        </ul>
        <!---->
        <h4>
          9-11월 모의고사반 우선 응시 기회 부여
          <span>실제 시험과 동일한 조건에서 이루어지는 모의고사반, 학원 응시 기회 부여</span>
        </h4>
        <ul class="applyList">
          <li>
            <span class="packItem">
              <span class="info">
                <em>과목/선생님에 따라 상이함</em>
                <em>우선 응시자격을 가지며 별도 안내예정<br/>(9~10(11월) 과정 개강 시 별도 안내 예정)</em>
              </span>
            </span>
          </li>
        </ul>
        <!---->
      </div>
    </div>
    <div class="etcApply">
      <div class="frameBack">
        <h4>
          사물함 사용
          <span>쌤팩 기간동안 월별 사물함이 제공됩니다.</span>
        </h4>
        <ul class="applyList">
          <li>
            <router-link to="/mkup/mypage/payment/locker/write" class="packItem applyCase">
              <i class="applyKind">사물함 신청</i>
              <strong>사물함 사용</strong>
              <span class="info">
                <em>사물함 무료 쿠폰을 사용하여 직접 신청 가능</em>
                <em>1개월 단위로 사용신청이 가능함</em>
              </span>
            </router-link>
          </li>
        </ul>
        <h4>쿠폰발급 및 가이드북</h4>
        <ul class="applyList couponCase">
          <li>
            <span class="packItem">
              <strong><em class="iCoupon">발급완료</em> 교재 배송비</strong>
              <span class="info">
                배송비 쿠폰을 마이페이지> 쿠폰에서 확인 가능<br/>
                교재구매 합계가 15,000원 이상인 경우에 사용
              </span>
            </span>
          </li>
          <li>
            <span class="packItem">
              <strong>한국사능력검정시험 합격패키지와 단과 중 1회 무료권</strong>
              <span class="info">
                배송비 쿠폰을 마이페이지> 쿠폰에서 확인 가능<br/>
                패키지와 단과중에서 하나를 선택하여 쿠폰 결제함
              </span>
            </span>
          </li>
          <li>
            <span class="packItem">
              <strong>교원임용 입문서/ OMR 노트 제공</strong>
              <span class="info">
                임용시험 정보를 담은 가이드북 제공<br/>
                실제 답안지 같은 OMR 노트 제공
              </span>
            </span>
          </li>
          <li>
            <span class="packItem">
              <strong>모의고사 우선신청</strong>
              <span class="info">
                선접수/일반접수보다 더 빠른 신청가능<br/>
                모의고사 미 진행 시에만 우선 신청권이 적용됨 과목별 선생님에 따라 상이함
              </span>
            </span>
          </li>
          <li>
            <span class="packItem">
              <strong>희소식 안내</strong>
              <span class="info">
                매월 초, 월별 학습 꿀팁 정보를 문자로 안내함 (SMS 수신 동의 필요)
              </span>
            </span>
          </li>
          <!-- <li>
            <span class="packItem">
              <strong>오마이스쿨 인문학 강의 월 1회 무료</strong>
              <span class="info">http://www.ohmyschool.org 에서 회원가입 한 후, 오마이스쿨 아이디 등록하면 이용가능한 쿠폰을 발급함</span>
              <button class="go gray">아이디 등록</button>
            </span>
          </li> -->
          <li>
            <span class="packItem">
              <strong>사물함 쿠폰</strong>
              <span class="info">
                사물함 쿠폰을 사용하여 사물함을 무료로 신청<br/>
                1개월 단위로 신청이 가능함
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!--//-->


    <!-- Layer Popup -->
    <!-- 취소 팝업 -->
    <Alert v-if='deleteTrigger' @close="deleteTrigger = false">
      <template slot="modalbody">
        <div class="basicNoty"><p>신청취소 하시겠습니까?</p></div>
      </template>
      <template slot="modalfooter">
        <button class="btnM line" @click="deleteTrigger = false">취소</button>
        <button class="btnM" @click="deleteTrigger = false">확인</button>
      </template>
    </Alert>
    <!-- //취소 팝업 -->
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
        <div class="modalBtn col">
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
    <!-- 직/인강 전환(인강>직강으로) 팝업 -->
    <Popup v-if='popupTrigger10' @close="popupTrigger10 = false" class="changeLecPopup">
      <template slot="modalheader">
        <div>
          <h1>직/인강 전환 신청</h1>
          <button @click="popupTrigger10 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupChangeLec />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger10 = false">취소</button>
          <button class="btnL" @click="popupTrigger10 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //직/인강 전환 팝업 -->
    <!-- 직/인강 전환(직강>인강으로) 팝업 -->
    <Popup v-if='popupTrigger11' @close="popupTrigger11 = false" class="changeLecPopup">
      <template slot="modalheader">
        <div>
          <h1>직/인강 전환 신청</h1>
          <button @click="popupTrigger11 = false" class="modalClose">close</button>
        </div>
      </template>
      <template slot="modalbody">
        <PopupChangeLec2 />
      </template>
      <template slot="modalfooter">
        <div class="modalBtn">
          <button class="btnL line" @click="popupTrigger11 = false">취소</button>
          <button class="btnL" @click="popupTrigger11 = false">신청</button>
        </div>
      </template>
    </Popup>
    <!-- //직/인강 전환 팝업 -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';
import PopupBonusApply from '@/views/mylec/PopupBonusApply.vue';
import PopupReAddRequest from '@/views/mylec/PopupReAddRequest.vue';
import PopupAdditionApply from '@/views/mylec/PopupAdditionApply.vue';
import PopupChangeLec from '@/views/mylec/PopupChangeLec.vue';
import PopupChangeLec2 from '@/views/mylec/PopupChangeLec2.vue';

export default {
  mixins: [Mixin],
  name: 'PremiumSsampackLec02',
  components: {
    PopupBonusApply,
    PopupReAddRequest,
    PopupAdditionApply,
    PopupChangeLec,
    PopupChangeLec2
  },
  data() {
    return {
      deleteTrigger: false,
      popupTrigger3: false,
      popupTrigger7: false,
      popupTrigger9: false,
      popupTrigger10: false,
      popupTrigger11: false
    }
  },
  mounted() {
  },
}
</script>
